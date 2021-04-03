(ns cuberoom.util.timing)

(defn make-once-per-sec
  "This function returns a function that reduce the calls.
  ```
  (let [f (make-once-per-sec)]
    (loop
      (f println \"hi\")
      (delay 1s)))
  ```
  The example above will print \"hi\" once per sec.
  "
  []
  (let [prev (atom (js/Date.))]
    (fn once-per-sec
      [other-fn & args]
      (when (> (inst-ms (js/Date.))
               (+ 1000 (inst-ms @prev)))
        (apply other-fn args)
        (reset! prev (js/Date.))))))
