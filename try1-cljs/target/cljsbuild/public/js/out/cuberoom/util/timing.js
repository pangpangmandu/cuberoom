// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.util.timing');
goog.require('cljs.core');
/**
 * This function returns a function that reduce the calls.
 *   ```
 *   (let [f (make-once-per-sec)]
 *  (loop
 *    (f println "hi")
 *    (delay 1s)))
 *   ```
 *   The example above will print "hi" once per sec.
 *   
 */
cuberoom.util.timing.make_once_per_sec = (function cuberoom$util$timing$make_once_per_sec(){
var prev = cljs.core.atom.call(null,(new Date()));
return (function() { 
var cuberoom$util$timing$make_once_per_sec_$_once_per_sec__delegate = function (other_fn,args){
if((cljs.core.inst_ms.call(null,(new Date())) > ((1000) + cljs.core.inst_ms.call(null,cljs.core.deref.call(null,prev))))){
cljs.core.apply.call(null,other_fn,args);

return cljs.core.reset_BANG_.call(null,prev,(new Date()));
} else {
return null;
}
};
var cuberoom$util$timing$make_once_per_sec_$_once_per_sec = function (other_fn,var_args){
var args = null;
if (arguments.length > 1) {
var G__51426__i = 0, G__51426__a = new Array(arguments.length -  1);
while (G__51426__i < G__51426__a.length) {G__51426__a[G__51426__i] = arguments[G__51426__i + 1]; ++G__51426__i;}
  args = new cljs.core.IndexedSeq(G__51426__a,0,null);
} 
return cuberoom$util$timing$make_once_per_sec_$_once_per_sec__delegate.call(this,other_fn,args);};
cuberoom$util$timing$make_once_per_sec_$_once_per_sec.cljs$lang$maxFixedArity = 1;
cuberoom$util$timing$make_once_per_sec_$_once_per_sec.cljs$lang$applyTo = (function (arglist__51427){
var other_fn = cljs.core.first(arglist__51427);
var args = cljs.core.rest(arglist__51427);
return cuberoom$util$timing$make_once_per_sec_$_once_per_sec__delegate(other_fn,args);
});
cuberoom$util$timing$make_once_per_sec_$_once_per_sec.cljs$core$IFn$_invoke$arity$variadic = cuberoom$util$timing$make_once_per_sec_$_once_per_sec__delegate;
return cuberoom$util$timing$make_once_per_sec_$_once_per_sec;
})()
;
});

//# sourceMappingURL=timing.js.map?rel=1615710653121
