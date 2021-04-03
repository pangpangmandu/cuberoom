(ns cuberoom.input.log
  (:require [cuberoom.js :refer [js-console]]))

(def prev-input nil)

(defn log-if-changed [input]
  (when (not= input prev-input)
    (js-console "New input " input))
  (set! prev-input input))
