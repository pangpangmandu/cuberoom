(ns cuberoom.phaser
  (:require [cuberoom.js :refer [js-console]])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(def ^:dynamic *scene* nil)

(defn- load [{url :url name :name}]
  {:pre (some? *scene*)}
  (js-console "load is called")
  (jsf *scene* :load.image name url))

(defn- create-object [{image :image x :x y :y}]
  {:pre (some? *scene*)}
  (jsf *scene* :add.image x y image))

(defn run-command
  [cmd]
  (js-console "run-command called")
  (let [name (:type cmd)]
    (case name
      :load (load cmd)
      :create-object (create-object cmd)
      (do
        (println "Unknown phase command " cmd)
        (js-console "Unknown phase command " cmd)))))

(defn run-commands
  [cmds]
  (js-console "run-commands" cmds)
  (doseq [cmd cmds]
    (run-command cmd)))

