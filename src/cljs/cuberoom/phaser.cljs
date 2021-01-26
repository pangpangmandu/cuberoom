(ns cuberoom.phaser
  (:require [cuberoom.js :refer [js-console]]
            [cuberoom.util.timing :as timing])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(def ^:dynamic *scene* nil)

(defn- load [{url :url name :name}]
  {:pre (some? *scene*)}
  (js-console "load is called")
  (jsf *scene* :load.image name url))

(defn- create-object [{image :image x :x y :y}]
  {:pre (some? *scene*)}
  (jsf *scene* :add.image x y image))

(def ^:private print-less (timing/make-once-per-sec))

(defn run-command
  [cmd]
  (let [name (:type cmd)]
    (case name
      :load (load cmd)
      :create-object (create-object cmd)
      (print-less #(do
                     (println "Unknown phase command " cmd))))))

(defn run-commands
  [cmds]
  (doseq [cmd cmds]
    (run-command cmd)))

