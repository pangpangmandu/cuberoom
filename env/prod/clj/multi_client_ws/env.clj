(ns cuberoom.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[cuberoom started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[cuberoom has shut down successfully]=-"))
   :middleware identity})
