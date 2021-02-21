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

(defn- create-object
  [{name :name image :image x :x y :y object-type :object-type}]
  {:pre (some? *scene*)}
  (println "create-object " name image)
  (let [object (condp = object-type
                 :image
                 (jsf *scene* :add.image x y image)
                 :sprite
                 (jsf *scene* :add.sprite x y image))]
    (set! global
          (assoc-in global [:object name] object))))

(defn- move-rel [{target :target x :x y :y}]
  {:pre (some? *scene*)}
  (let [object (get-in global [:object target])
        object-x (.-x object)
        object-y (.-y object)]
    (set! (.-x object) (+ object-x x))
    (set! (.-y object) (+ object-y y))))

(comment
  (println #js {:x 3 :y [1 2 3]})
  (println #js {:x 3 :y [1 2 3]})
  (js-console #js {:x 3 :y #js [1 2 3]}))

(defn- create-anim-in-phaser [anim-name frames repeat]
  (println "call create-anim-in-phaser" anim-name frames)
  (jsf *scene* :anims.create
       #js {:key anim-name
            :frames frames
            :repeat repeat
            :frameRate 8}))

(defn- create-anim
  "Example
  ```
  (run-command
    {:type :create-anim
     :anim-name \"player-walk-left\"
     :frames #js [#js {:key
                       :cuberoom.scene.player/resource-left-1}]})
  ```
  "
  [{anim-name :anim-name frames :frames repeat :repeat}]
  {:pre (some? *scene*)}
  (println "create-anim" anim-name)
  (let [anim (create-anim-in-phaser anim-name frames repeat)]
    (set! global
          (assoc-in global [:anim anim-name] anim))))

(defn- play-anim
  ""
  [{anim-name :anim-name character-name :character-name}]
  {:pre (some? *scene*)}
  (println "play-anim" anim-name character-name)
  (let [character (get-in global [:object character-name])]
    (js-console "character" character)
    (jsf character :play (str anim-name))))

(defn- stop-anim
  [{character-name :character-name}]
  (let [character (get-in global [:object character-name])]
    (jsf character :stop)))

(def ^:private print-less (timing/make-once-per-sec))

(defn run-command
  [cmd]
  (let [name (:type cmd)]
    (case name
      :load (load cmd)
      :create-object (create-object cmd)
      :move-rel (move-rel cmd)
      :create-anim (create-anim cmd)
      :play-anim (play-anim cmd)
      :stop-anim (stop-anim cmd)
      (print-less #(do
                     (println "Unknown phase command " cmd))))))

(defn run-commands
  [cmds]
  (doseq [cmd cmds]
    (run-command cmd)))

(defn get-object [key]
  (get-in global [:object key]))
