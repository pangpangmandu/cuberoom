(ns cuberoom.env
  (:require
   [selmer.parser :as parser]
   [clojure.tools.logging :as log]
   [cuberoom.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[cuberoom started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[cuberoom has shut down successfully]=-"))
   :middleware wrap-dev})
