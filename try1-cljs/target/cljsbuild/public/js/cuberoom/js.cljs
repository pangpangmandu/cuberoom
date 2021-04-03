(ns cuberoom.js
  (:require [oops.core :refer [oapply]]))

(defn js-console [& args]
  (oapply js/console "log" (clj->js args)))
