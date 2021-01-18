(ns cuberoom.scene
  (:require [cuberoom.js :refer [js-console]])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(defn- preload []
  (js-console "Called preload")
  (this-as self
    (jsf self :load.setBaseURL "/img/")
    ;; FIXME: Use constant variable instead of hardcoded string like "sky"
    (jsf self :load.image "background" "미술관-내부.png")))

(defn- create []
  (js-console "Called create")
  (this-as self
    (js-console self)
    (jsf self :add.image 400 300 "background")))

(def phaser-config
  #js {:type js/Phaser.AUTO
       :width 800
       :height 600
       :physics #js {:default "arcade"
                     :arcade #js {:gravity #js {:y 200}}}
       :scene #js {:preload preload
                   :create create}})
