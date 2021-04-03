// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.input.log');
goog.require('cljs.core');
goog.require('cuberoom.js');
cuberoom.input.log.prev_input = null;
cuberoom.input.log.log_if_changed = (function cuberoom$input$log$log_if_changed(input){
if(cljs.core.not_EQ_.call(null,input,cuberoom.input.log.prev_input)){
cuberoom.js.js_console.call(null,"New input ",input);
} else {
}

return (cuberoom.input.log.prev_input = input);
});
