(ns cuberoom.play-scene
  (:require [cuberoom.db :as db]
            [cuberoom.js :refer [js-console]]))

(defn add-object-key
  [key]
  (db/update-or ::keys
                #(conj % key)
                #{key}))

(defn register [key value]
  (add-object-key key)
  (db/set-if-empty key value))

(defn create-all-objects []
  (js-console "create-all-objects")
  (let [keys (db/get-db-value ::keys)]
    (for [key keys
          :let [object (db/get-db-value key)]]
      {:type :create-object
       :name key
       :image (:image object)
       :x (:x object)
       :y (:y object)})))
