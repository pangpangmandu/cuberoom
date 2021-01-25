(ns cuberoom.scene
  (:require [cuberoom.js :refer [js-console]]
            [cuberoom.scene.background :as background]
            [cuberoom.resource :as resource]
            [cuberoom.phaser :as phaser]
            [cuberoom.play-scene :as play-scene]
            [cuberoom.db :as db]
            [cuberoom.db.log :as db-log]
            [cuberoom.scene.player :as player]
            [cuberoom.input :as input]
            [cuberoom.logic.player-move :as player-move]
            [cuberoom.input.log :as input-log])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(def input-objects "input objects from phaser" ())

(defn- preload []
  (js-console "Called preload")
  (this-as self
    (background/initialize)
    (player/initialize)
    (jsf self :load.setBaseURL "/img/")
    (binding [phaser/*scene* self]
      (phaser/run-commands (resource/load-all))))
  (js-console "preload finished"))

(defn- create []
  (js-console "Called create")
  (this-as self
    (js-console "inside this as self")
    (binding [phaser/*scene* self]
      (set! input-objects (input/initialize self))
      (js-console "in create-binding")
      (phaser/run-commands (play-scene/create-all-objects))))
  (js-console "Create finished"))

(defn- update' []
  ;; run player move
  (let [input-this-frame (input/read-input input-objects)
        commands (atom [])]
    (input-log/log-if-changed input-this-frame)
    ;; TODO: player-move/update does not return new db
    ;; It returns new db and commands.
    (db/with-db
      (fn [db]
        (let [{new-db :db new-commands :commands} (player-move/update' db input-this-frame)]
          ;; FIXME: Let's not use the atom
          (swap! commands #(concat % new-commands))
          new-db)))
;;    (phaser/run-commands @commands)
    (db/with-db (fn [db]
                  (db-log/log-if-changed
                   [:cuberoom.scene.player/object]
                   db)
                  db))))
(comment
  (conj [] 1 3)
  (concat [] [1 3] [1 4])
  (+  1 2))
(def phaser-config
  #js {:type js/Phaser.AUTO
       :width 800
       :height 600
       :physics #js {:default "arcade"
                     :arcade #js {:gravity #js {:y 200}}}
       :scene #js {:preload preload
                   :create create
                   :update update'}})
