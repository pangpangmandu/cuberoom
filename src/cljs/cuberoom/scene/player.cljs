(ns cuberoom.scene.player
  (:require [cuberoom.resource :as resource]
            [cuberoom.play-scene :as play-scene]))

(def object-key ::object)

(def ^:private character-animation-names ["up" "down" "left" "right"])

(defn- get-ns []
  (-> #'get-ns meta :ns))

(defn- create-resource-name
  "Creates a resource name like ::resource-down-2"
  [anim num]
  (keyword (get-ns) (str "resource-" anim "-" num)))

(comment
  (keyword (get-ns) (str "resource-" "down" "-" 2)))

(defn- create-resource-data
  [anim num]
  {:type :image
   :name (create-resource-name anim num)
   :file (str "캐릭터01/" anim " (" num ").png")})

(defn- prepare-image-load
  "Return keys and register data of character images"
  []
  (for [anim character-animation-names
        num [1 2 3 4]]
    (create-resource-data anim num)))

(comment
  (for [resource (prepare-image-load)]
    (println ::resource resource)))

(defn preload
  []
  (println "Player initializex")
  (doseq [resource (prepare-image-load)]
    (resource/register resource))
  (play-scene/register {:type :sprite
                        :name object-key
                        :x 400
                        :y 300
                        :image ::resource-left-1}))

(defn create
  "Returns phaser commands for initialization."
  []
  [{:type :create-anim
    :anim-name :player-walk-left
    :frames #js [#js {:key
                      ::resource-left-1}
                 #js {:key
                      ::resource-left-2}
                 #js {:key
                      ::resource-left-3}
                 #js {:key
                      ::resource-left-4}]
    :repeat -1}
   {:type :play-anim
    :anim-name :player-walk-left
    :character-name ::object}])

(defn get-object-from-db [db]
  (get db ::object))

(defn- move-rel [player x y]
  (-> player
      (update :x + x)
      (update :y + y)))

(defn move-rel-in-db [db x y]
  (update db ::object move-rel x y))
