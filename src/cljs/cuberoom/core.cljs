(ns cuberoom.core
  (:require [cuberoom.js :refer [js-console]]
            [cuberoom.scene :as scene]
            [mount.core :refer [defstate] :as mount]
            [cuberoom.network :as network]))

(defstate game
  :start (do
           (println "Creates a game object.")
           (js/Phaser.Game. scene/phaser-config))
  :stop (do
          (println "Remove game object")
          (.destroy @game true false)))

(defn mount-components []
  (let [content (js/document.getElementById "app")]
    (while (.hasChildNodes content)
      (.removeChild content (.-lastChild content)))
    (.appendChild content (js/document.createTextNode "Welcome to cuberoom"))
    (mount/in-cljc-mode)
    (mount/start)
    (js-console "Flagwheel loaded core.js")
    (js-console @game)))

(defonce messages (atom []))

(defn update-messages! [{:keys [message]}]
  (swap! messages #(vec (take 10 (conj % message)))))

(defn init! []
  ;; todo
;;  (network/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)
  (mount-components))
