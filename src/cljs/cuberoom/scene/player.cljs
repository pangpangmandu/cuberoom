(ns cuberoom.scene.player
  (:require [cuberoom.resource :as resource]
            [cuberoom.play-scene :as play-scene]))

(defn initialize
  []
  (resource/register ::resource
                     {:type :image
                      :name ::image
                      :file "캐릭터01/down (1).png"})
  (play-scene/register ::object
                       {:type :image
                        :x 400
                        :y 300
                        :image ::image}))

(defn get-object-from-db [db]
  (get db ::object))

(defn- move-rel [player x y]
  (-> player
      (update :x + x)
      (update :y + y)))

(defn move-rel-in-db [db x y]
  (update db ::object move-rel x y))
