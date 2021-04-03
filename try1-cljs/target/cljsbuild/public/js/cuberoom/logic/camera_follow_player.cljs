(ns cuberoom.logic.camera-follow-player
  (:require [cuberoom.phaser :as phaser]
            [cuberoom.scene.player :as player]
            [oops.core :refer [oget]]
            [cljs.test :refer-macros [is]]
            [cuberoom.macros :refer [jsf]]))

(defn- get-camera []
  (oget phaser/*scene* "cameras.main"))

(defn- get-player []
  (phaser/get-object player/object-key))

(defn- follow-player [camera player]
  {:pre [(is (some? camera))
         (is (some? player))]}
  (jsf camera :startFollow player))

(defn follow []
  (let [camera (get-camera)
        player (get-player)]
    (follow-player camera player)))
