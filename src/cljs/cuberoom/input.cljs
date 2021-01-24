(ns cuberoom.input
  "This file manages input.
  # Initialization

  * `initialize` function will creates phaser input objects.

  * `read-input` function read input from phaser input objects and
  returns. Here is an example output.
  ```edn
  {:keyboard {:keys #{:a :b}}}
  ```"
  (:require [cljs.test :refer-macros [deftest is]])
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

(defn- pressed-keys-from-phaser
  [phaser-input-objects]
  (reduce
   (fn [sub-result [key phaser-input-object]]
     (if (.-isDown phaser-input-object)
       (conj sub-result key)
       sub-result))
   #{}
   phaser-input-objects))

(deftest test-pressed-keys-from-phaser
  (is (= 1 1))
  (is (= #{:a}
         (pressed-keys-from-phaser {:a #js {:isDown true}}))))

(defn read-input
  "Receive phaser input objects.
  Return input map in clojure style.
  Please check the docstring of the namespace."
  [phaser-input-objects]
  (let [pressed-keys (pressed-keys-from-phaser phaser-input-objects)]
    (assoc-in {} [:keyboard :keys] pressed-keys)))

(deftest test-read-input
  (is (= 1 1))
  (is (= {:keyboard {:keys #{:a}}}
         (read-input {:a #js {:isDown true}}))))
