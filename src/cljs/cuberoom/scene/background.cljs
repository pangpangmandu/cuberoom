(ns cuberoom.scene.background
  (:require [cuberoom.resource :as resource]
            [cuberoom.play-scene :as play-scene]))

(defn initialize
  ""
  []
  (println "Background initialize")
  (resource/register {:type :image
                      :name ::image
                      :file "미술관-내부.png"})
  (play-scene/register {:type :image
                        :name ::object
                        :x 400
                        :y 300
                        :image ::image}))
