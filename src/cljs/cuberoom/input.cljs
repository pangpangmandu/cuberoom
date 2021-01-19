(ns cuberoom.input
  (:require-macros [cuberoom.macros :refer [jsf]]))

(defn- add-key [scene key-name]
  (jsf scene :input.keyboard.addKey key-name))

(defn initialize
  "Enroll events of phaser"
  [scene]
  {:w (add-key scene "w")
   :a (add-key scene "a")
   :s (add-key scene "s")
   :d (add-key scene "d")})

;; input
;; :keyboard {:keys #{:a :b}}
