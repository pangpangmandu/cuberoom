(ns cuberoom.db)

(defonce real-db (atom {}))

(def ^:dynamic *db-override*
  "Overrided db for test"
  (atom nil))

(defn- get-db []
  (if (some? @*db-override*)
    *db-override*
    real-db))

(defn get-real-db
  "For debug purpose"
  [] real-db)

(defn get-db-value [key]
  (get @(get-db) key))

(defn update-or
  ([key update-fn default]
   (swap! (get-db) #(update-or % key update-fn default)))
  ([db key update-fn default]
   (let [prev-val (find db key)]
     (if (nil? prev-val)
       (assoc db key default)
       (update db key update-fn)))))

(defn set-if-empty
  ([key value]
   (swap! (get-db) #(set-if-empty % key value)))
  ([db key value]
   (let [contains (contains? db key)]
     (if contains
       db
       (assoc db key value)))))

(defn with-db [update-fn]
  (swap! (get-db) update-fn))
