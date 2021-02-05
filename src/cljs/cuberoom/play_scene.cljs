(ns cuberoom.play-scene
  (:require [cuberoom.db :as db]
            [cuberoom.js :refer [js-console]]))

(defn add-object-key
  [key]
  (db/update-or ::keys
                #(conj % key)
                #{key}))

(defn register
  "Register objects for this scene.

  The value must contains these keys: :type, :x, :y, :image, :name.

  Currently only :image is available for the :type value.

  :x is the x position of the object in the scene.
  Left is 0.

  :y is the y poisition of the object in the scene.
  Up is 0.

  :image is the key of the image that is registered in the resource.

  :name is the key of this object in the DB and the phaser.

  Example)
  ```
  (play-scene/register
    {:type :image
     :name ::object
     :x 400
     :y 300
     :image ::image
    }
  ```
  "
  [value]
  (let [key (:name value)]
    (add-object-key key)
    (db/set-if-empty key value)))

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
