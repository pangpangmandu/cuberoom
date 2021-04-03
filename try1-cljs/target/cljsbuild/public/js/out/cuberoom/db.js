// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.db');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
if((typeof cuberoom !== 'undefined') && (typeof cuberoom.db !== 'undefined') && (typeof cuberoom.db.real_db !== 'undefined')){
} else {
cuberoom.db.real_db = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Overrided db for test
 */
cuberoom.db._STAR_db_override_STAR_ = cljs.core.atom.call(null,null);
cuberoom.db.get_db = (function cuberoom$db$get_db(){
if((!((cljs.core.deref.call(null,cuberoom.db._STAR_db_override_STAR_) == null)))){
return cuberoom.db._STAR_db_override_STAR_;
} else {
return cuberoom.db.real_db;
}
});
cuberoom.db.reset_real_db = (function cuberoom$db$reset_real_db(){
return (cuberoom.db.real_db = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * For debug purpose
 */
cuberoom.db.get_real_db = (function cuberoom$db$get_real_db(){
return cuberoom.db.real_db;
});
cuberoom.db.get_db_value = (function cuberoom$db$get_db_value(key){
return cljs.core.get.call(null,cljs.core.deref.call(null,cuberoom.db.get_db.call(null)),key);
});
cuberoom.db.update_or = (function cuberoom$db$update_or(var_args){
var G__46230 = arguments.length;
switch (G__46230) {
case 3:
return cuberoom.db.update_or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuberoom.db.update_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuberoom.db.update_or.cljs$core$IFn$_invoke$arity$3 = (function (key,update_fn,default$){
return cljs.core.swap_BANG_.call(null,cuberoom.db.get_db.call(null),(function (p1__46228_SHARP_){
return cuberoom.db.update_or.call(null,p1__46228_SHARP_,key,update_fn,default$);
}));
}));

(cuberoom.db.update_or.cljs$core$IFn$_invoke$arity$4 = (function (db,key,update_fn,default$){
var prev_val = cljs.core.find.call(null,db,key);
if((prev_val == null)){
return cljs.core.assoc.call(null,db,key,default$);
} else {
return cljs.core.update.call(null,db,key,update_fn);
}
}));

(cuberoom.db.update_or.cljs$lang$maxFixedArity = 4);

cuberoom.db.set_if_empty = (function cuberoom$db$set_if_empty(var_args){
var G__46234 = arguments.length;
switch (G__46234) {
case 2:
return cuberoom.db.set_if_empty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuberoom.db.set_if_empty.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuberoom.db.set_if_empty.cljs$core$IFn$_invoke$arity$2 = (function (key,value){
return cljs.core.swap_BANG_.call(null,cuberoom.db.get_db.call(null),(function (p1__46232_SHARP_){
return cuberoom.db.set_if_empty.call(null,p1__46232_SHARP_,key,value);
}));
}));

(cuberoom.db.set_if_empty.cljs$core$IFn$_invoke$arity$3 = (function (db,key,value){
var contains = cljs.core.contains_QMARK_.call(null,db,key);
if(contains){
return db;
} else {
return cljs.core.assoc.call(null,db,key,value);
}
}));

(cuberoom.db.set_if_empty.cljs$lang$maxFixedArity = 3);

cuberoom.db.with_db = (function cuberoom$db$with_db(update_fn){
return cljs.core.swap_BANG_.call(null,cuberoom.db.get_db.call(null),update_fn);
});

//# sourceMappingURL=db.js.map?rel=1615710648909
