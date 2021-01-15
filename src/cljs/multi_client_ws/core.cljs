(ns multi-client-ws.core)

(defn js-console-f [text & args]
  (.log js/console text ": " args))

(defn js-console [& args]
  (.log js/console args))

(defn mount-components []
  (let [content (js/document.getElementById "app")]
    (while (.hasChildNodes content)
      (.removeChild content (.-lastChild content)))
    (.appendChild content (js/document.createTextNode "Welcome to multi-client-ws"))))

(defn init! []
  (mount-components))
