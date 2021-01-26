(ns cuberoom.routes.websocket
  (:require
   [clojure.tools.logging :as log]
   [immutant.web.async :as async]))

;; FIXME: Please remove global channels.
;; We may remove it by creating callbacks with a context.
;; Currently we don't have enough time to create a better structure.
;; Let's revisit here when we get used to the language and libraries.
(def ^:private channels
  (atom []))

(defn- connect! [channel]
  (log/info "channel open")
  (swap! channels conj channel))

(defn- disconnect! [channel {:keys [code reason]}]
  (log/info "close code:" code "reason:" reason)
  (swap! channels #(remove #{channel} %)))

(defn- notify-clients! [_channel msg]
  (doseq [channel @channels]
    (async/send! channel msg)))

(def ^:private websocket-callbacks
  "Websocket callback functions"
  {:on-open connect!
   :on-close disconnect!
   :on-message notify-clients!})

(defn ws-handler [request]
  (async/as-channel request websocket-callbacks))

(def websocket-routes
  ["/ws" ws-handler])
