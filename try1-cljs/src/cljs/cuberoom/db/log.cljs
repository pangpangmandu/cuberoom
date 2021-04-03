(ns cuberoom.db.log
  (:require [cuberoom.js :refer [js-console]]))

(def prev-db-parts nil)

(defn log-if-changed
  "keys is a list that will passed to get-in"
  [keys db]
  (let [new-part (get-in keys db)
        prev-part (get-in keys prev-db-parts)]
    (when (not= new-part prev-part)
      (js-console "new db " new-part))
    (set! prev-db-parts
          (assoc-in prev-db-parts keys new-part))))

