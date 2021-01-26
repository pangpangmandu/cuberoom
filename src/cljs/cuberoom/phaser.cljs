(ns cuberoom.phaser
  (:require [cuberoom.js :refer [js-console]]
            [cuberoom.util.timing :as timing])
  (:require-macros [cuberoom.macros :refer [jsf]]))

(def ^:dynamic *scene* nil)
(def ^:private global {})

(defn- load [{url :url name :name}]
  {:pre (some? *scene*)}
  (js-console "load is called")
  (jsf *scene* :load.image name url))

(defn- create-object [{name :name image :image x :x y :y}]
  {:pre (some? *scene*)}
  (let [image (jsf *scene* :add.image x y image)]
    (set! global
          (assoc-in global [:object name] image))))

(defn- move-rel [{target :target x :x y :y}]
  {:pre (some? *scene*)}
  (let [object (get-in global [:object target])
        object-x (.-x object)
        object-y (.-y object)]
    (set! (.-x object) (+ object-x x))
    (set! (.-y object) (+ object-y y))))

(def ^:private print-less (timing/make-once-per-sec))

(defn run-command
  [cmd]
  (let [name (:type cmd)]
    (case name
      :load (load cmd)
      :create-object (create-object cmd)
      :move-rel (move-rel cmd)
      (print-less #(do
                     (println "Unknown phase command " cmd))))))

(defn run-commands
  [cmds]
  (doseq [cmd cmds]
    (run-command cmd)))

