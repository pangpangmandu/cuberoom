(ns multi-client-ws.macros
  (:require [oops.core :refer [oget]]
            [clojure.test :refer [deftest is]]
            [clojure.string :as str]))

(defn parse-js-exp [js-expression]
  (let [tokens (str/split (name js-expression) #"\.")
        method (peek tokens)
        len (count tokens)
        paths (subvec tokens 0 (- len 1))]
    [(str/join "." paths) (symbol method)]))

(deftest test-parse-js-exp
  (is (= (parse-js-exp 'a) '("" c)))
  (is (= (parse-js-exp 'a.b.c) '("a.b" c)))
  (is (= (parse-js-exp 'a.b.c.d) '("a.b.c" d))))

(parse-js-exp 'a.b.c)
(name 'a.b.c)
(str/split (name 'a.b.c) #"\.")
(str/join "." (pop (str/split (name 'a.b.c) #"\.")))
(str/split (name 'a.b.c) #"\.")
(symbol "a")
(nil? "")
(empty? "")
(str "a" "b")
;;  '(console nil .log))

(defn add-dot [sym]
  (symbol (str "." (name sym))))

(defmacro jsf
  [obj jsexp & args]
  (let [[chain method] (parse-js-exp jsexp)
        dotmethod (add-dot method)]
    (if (empty? chain)
      `(~dotmethod ~obj ~@args)
      `(~dotmethod (oget ~obj ~chain) ~@args))))

