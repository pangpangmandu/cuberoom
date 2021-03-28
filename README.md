# Cuberoom

Vit art museums in digital world.

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

```sh
lein run
```

## Developing

Run cider repl. `(start)` will run the webserver.
`(start-fw)` will run Figwheel server.

Typing `(cljs)` will give you a repl for clojurescript.
To return the clojure repl, write `:cljs/quit` in the repl.
