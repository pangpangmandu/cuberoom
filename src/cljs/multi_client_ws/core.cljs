(ns cuberoom.core
  (:require [oops.core :refer [oapply]]
            [mount.core :refer [defstate] :as mount])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(defn js-console [& args]
  (oapply js/console "log" (clj->js args)))

(defn js-console-f [text & args]
  (js-console (list* text ": " args)))

(defn preload []
  (js-console "Called preload")
  (this-as self
           (jsf self :load.setBaseURL "http://labs.phaser.io")
           (jsf self :load.image "sky" "assets/skies/space3.png")
           (jsf self :load.image "logo" "assets/sprites/phaser3-logo.png")
           (jsf self :load.image "red" "assets/particles/red.png")))

(defn create []
  (js-console "Called create")
  (this-as self
           (js-console self)
           (jsf self :add.image 400 300 "sky")
           (let [particles (jsf self :add.particles "red")
                 emitter (jsf particles :createEmitter
                              #js {:speed 100
                                   :scale #js {:start 1 :end 0}
                                   :blendMode "ADD"})
                 logo (jsf self :physics.add.image 400 100 "logo")]
             (jsf logo :setVelocity 100 2)
             (jsf logo :setBounce 1 1)
             (jsf logo :setCollideWorldBounds true)
             (jsf emitter :startFollow logo))))

(def phaser-config
  #js {:type js/Phaser.AUTO
       :width 800
       :height 600
       :physics #js {:default "arcade"
                     :arcade #js {:gravity #js {:y 200}}}
       :scene #js {:preload preload
                   :create create}})

(defstate game
  :start (do
           (println "Creates a game object.")
           (js/Phaser.Game. phaser-config))
  :stop (do
          (println "Remove game object")
          (.destroy @game true false)))

(defn mount-components []
  (let [content (js/document.getElementById "app")]
    (while (.hasChildNodes content)
      (.removeChild content (.-lastChild content)))
    (.appendChild content (js/document.createTextNode "Welcome to cuberoom"))
    (mount/in-cljc-mode)
    (mount/start)
    (js-console "Flagwheel loaded core.js")
    (js-console phaser-config)
    (js-console @game)))

(defn init! []
  (mount-components))
