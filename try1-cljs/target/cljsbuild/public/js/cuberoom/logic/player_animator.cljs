(ns cuberoom.logic.player-animator)

(def character-animation-names ["up" "down" "left" "right"])

(defn- get-ns []
  (-> #'get-ns meta :ns))

(defn- create-anim [name]
  {:type :create-anim
   :anim-name (keyword (str "player-walk-" name))
   :frames #js [#js {:key
                     (keyword (str "cuberoom.scene.player/resource-" name "-1"))}
                #js {:key
                     (keyword (str "cuberoom.scene.player/resource-" name "-2"))}
                #js {:key
                     (keyword (str "cuberoom.scene.player/resource-" name "-3"))}
                #js {:key
                     (keyword (str "cuberoom.scene.player/resource-" name "-4"))}]
   :repeat -1})

(defn create-anims []
  (for [name character-animation-names]
    (create-anim name)))

(defn play-anim [character-name anim-name]
  {:type :play-anim
   :anim-name anim-name
   :character-name character-name})

(defn stop-anim [character-name]
  {:type :stop-anim
   :character-name character-name})
