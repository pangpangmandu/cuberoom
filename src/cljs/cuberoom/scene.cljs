(ns cuberoom.scene
  (:require [cuberoom.js :refer [js-console]]
            [cuberoom.scene.background :as background]
            [cuberoom.resource :as resource]
            [cuberoom.phaser :as phaser]
            [cuberoom.play-scene :as play-scene]
            [cuberoom.db :as db])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(defn- preload []
  (js-console "Called preload")
  (this-as self
    (background/initialize)
    (jsf self :load.setBaseURL "/img/")
    (binding [phaser/*scene* self]
      (phaser/run-commands (resource/load-all)))))

(defn- create []
  (js-console "Called create")
  (this-as self
    (js-console "real db" (js->clj @(db/get-real-db)))
    (println "real db" @(db/get-real-db))
    (js-console "overrided db" (js->clj @db/*db-override*))
    (binding [phaser/*scene* self]
      (js-console "in create-binding")
      (phaser/run-commands (play-scene/create-all-objects)))))

(def phaser-config
  #js {:type js/Phaser.AUTO
       :width 800
       :height 600
       :physics #js {:default "arcade"
                     :arcade #js {:gravity #js {:y 200}}}
       :scene #js {:preload preload
                   :create create}})
