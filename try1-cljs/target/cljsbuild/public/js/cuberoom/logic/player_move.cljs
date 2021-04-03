(ns cuberoom.logic.player-move
  "Use `update'` to move player.
  It read input and change player's position"
  (:require [cuberoom.scene.player :as player]
            [cuberoom.logic.player-animator :as player-animator]))

(defn- parse-horizontal [pressed-keys]
  (cond
    (contains? pressed-keys :a) :-x
    (contains? pressed-keys :left) :-x
    (contains? pressed-keys :d) :+x
    (contains? pressed-keys :right) :+x
    :else nil))

(defn- parse-vertical [pressed-keys]
  (cond
    (contains? pressed-keys :w) :-y
    (contains? pressed-keys :up) :-y
    (contains? pressed-keys :s) :+y
    (contains? pressed-keys :down) :+y
    :else nil))

(defn- input->movements [input]
  (let [pressed-keys (get-in input [:keyboard :keys])]
    (remove nil? (list (parse-horizontal pressed-keys)
                       (parse-vertical pressed-keys)))))

(def ^:private move-speed 100)
;; FIXME: we should get the real frame delta
(def frame-delta (/ 1 60))

(defn- move->vec [movements]
  (let [len (count movements)
        distance-unit (case len
                        0 0
                        1 move-speed
                        2 (/ move-speed (js/Math.sqrt 2)))
        distance (* frame-delta distance-unit)
        x-unit (cond
                 (some #{:+x} movements) 1
                 (some #{:-x} movements) -1
                 :else 0)
        y-unit (cond
                 (some #{:+y} movements) 1
                 (some #{:-y} movements) -1
                 :else 0)]
    [(* distance x-unit) (* distance y-unit)]))

(defn- vec->commands [move-vec]
  (let [[x y] move-vec]
    (if (= 0 x y)
      []
      [{:type :move-rel
        :target :cuberoom.scene.player/object
        :x x
        :y y}])))

(defn- update-state
  "Save what this module does in the previous frame. The information
  will be used to determin the animation state.

  It contains these things:
  1. Moved or not
  2. Moved direction"
  [db move-vec]
  (assoc-in db [::state :move-vec] move-vec))

(defn- get-previous-move-vec [db]
  (get-in db [::state :move-vec]))

(defn- save-anim [db anim]
  (assoc-in db [::state :anim] anim))

(defn- get-previous-anim [db]
  (get-in db [::state :anim]))

(defn- get-movement-for-anim
  "return :moved :not-moved"
  [move-vec]
  (if (nil? move-vec)
    :not-moved
    (do
      (when (not (vector? move-vec))
	(println "get-movement-for-anim not vector" move-vec))
      (let [[x y] move-vec]
        (cond
          (= 0 x y) :not-moved
          :else :moved)))))

(defn- get-direction-for-anim [move-vec]
  (let [[x y] move-vec]
    (cond
      (> y 0) :down
      (< y 0) :up
      (> x 0) :right
      (< x 0) :left
      :else nil)))

(defn- calculate-new-anim [anim-direction]
  (condp = anim-direction
    :up :player-walk-up
    :down :player-walk-down
    :right :player-walk-right
    :left :player-walk-left
	nil))

;; TODO update the anim name in the db
(defn- update-anim
  "Check these things.
  1. Moving stopped or moving started
  2. The direction of movement is changed"
  [db move-vec]
  (when (nil? move-vec)
    (println "update-anim move-vec is nil" move-vec))
  (let [prev-moved? (get-movement-for-anim (get-previous-move-vec db))
        moved? (get-movement-for-anim move-vec)
        anim-direction (get-direction-for-anim move-vec)
        new-anim (calculate-new-anim anim-direction)
        prev-anim (get-previous-anim db)]
    (cond
      (and (= :moved prev-moved?)
           (= :not-moved moved?))
      (-> db
          (save-anim new-anim)
          ((fn [db] {:db db
                     :commands
                     [(player-animator/stop-anim :cuberoom.scene.player/object)]})));;      :stop-anim
      (and (= :moved moved?)
           (not= new-anim prev-anim))
      (-> db
          (save-anim new-anim)
          ((fn [db]
             {:db db :commands [(player-animator/play-anim
                                 :cuberoom.scene.player/object
                                 new-anim)]})))
      :else
      {:db db :commands []})))

(defn update' [db input]
  (let [movements (input->movements input)
        move-vec (move->vec movements)
        commands (vec->commands move-vec)
        {anim-db :db anim-commands :commands} (update-anim db move-vec)]
    {:db
     (-> anim-db
         (player/move-rel-in-db [move-vec 0] [move-vec 1])
         (update-state move-vec))
     :commands (concat commands anim-commands)}))

