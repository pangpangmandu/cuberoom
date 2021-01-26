(ns cuberoom.logic.player-move
  "Use `update'` to move player.
  It read input and change player's position"
  (:require [cuberoom.scene.player :as player]))

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
                        2 (js/Math.sqrt move-speed))
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

(defn update' [db input]
  (let [movements (input->movements input)
        move-vec (move->vec movements)
        commands (vec->commands move-vec)]
    {:db (apply player/move-rel-in-db db move-vec)
               
     :commands commands}))
