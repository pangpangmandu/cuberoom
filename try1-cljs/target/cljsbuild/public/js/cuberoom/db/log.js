// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.db.log');
goog.require('cljs.core');
goog.require('cuberoom.js');
cuberoom.db.log.prev_db_parts = null;
/**
 * keys is a list that will passed to get-in
 */
cuberoom.db.log.log_if_changed = (function cuberoom$db$log$log_if_changed(keys,db){
var new_part = cljs.core.get_in.call(null,keys,db);
var prev_part = cljs.core.get_in.call(null,keys,cuberoom.db.log.prev_db_parts);
if(cljs.core.not_EQ_.call(null,new_part,prev_part)){
cuberoom.js.js_console.call(null,"new db ",new_part);
} else {
}

return (cuberoom.db.log.prev_db_parts = cljs.core.assoc_in.call(null,cuberoom.db.log.prev_db_parts,keys,new_part));
});
