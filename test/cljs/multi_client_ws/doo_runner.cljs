(ns cuberoom.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [cuberoom.core-test]))

(doo-tests 'cuberoom.core-test)

