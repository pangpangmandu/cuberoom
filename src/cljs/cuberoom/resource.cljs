(ns cuberoom.resource
  (:require [cuberoom.db :as db]
            [cljs.test :refer-macros [deftest is]]))

(defn load-all
  "Load all resources defined in DB"
  []
  (let [keys (db/get-db-value ::keys)]
    (for [key keys
          :let [resource (db/get-db-value key)]]
      {:type :load
       :url (:file resource)
       :name (str (:name resource))})))

(defn add-resource-key
  [key]
  (db/update-or ::keys
                #(conj % key)
                #{key}))

(deftest test-add-resource-key
  (is (= (binding [db/*db-override* (atom {})]
           (add-resource-key :some-key))
         {::keys #{:some-key}})))

(defn register
  "Register resource in DB.
  A value needs these keys :type :name :file"
  [key value]
  (add-resource-key key)
  (db/set-if-empty key value))

(deftest test-register
  (is (= (binding [db/*db-override* (atom {})]
           (register :some-key 3))
         {:cuberoom.resource/keys #{:some-key}, :some-key 3})))
