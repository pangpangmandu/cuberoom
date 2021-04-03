// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.js');
goog.require('cljs.core');
goog.require('oops.core');
cuberoom.js.js_console = (function cuberoom$js$js_console(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7815 = arguments.length;
var i__4737__auto___7816 = (0);
while(true){
if((i__4737__auto___7816 < len__4736__auto___7815)){
args__4742__auto__.push((arguments[i__4737__auto___7816]));

var G__7817 = (i__4737__auto___7816 + (1));
i__4737__auto___7816 = G__7817;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cuberoom.js.js_console.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cuberoom.js.js_console.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var target_obj_7809 = console;
var _STAR_runtime_state_STAR__orig_val__7813 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__7814 = oops.state.prepare_state.call(null,target_obj_7809,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__7814);

try{var call_info_7811 = [target_obj_7809,(function (){var next_obj_7812 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_7809,(0),"log",true,true,false))?(target_obj_7809["log"]):null);
return next_obj_7812;
})()];
var fn_7810 = (call_info_7811[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_7810,oops.state.get_last_access_modifier.call(null))){
if((!((fn_7810 == null)))){
return fn_7810.apply((call_info_7811[(0)]),oops.helpers.to_native_array.call(null,cljs.core.clj__GT_js.call(null,args)));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__7813);
}}));

(cuberoom.js.js_console.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cuberoom.js.js_console.cljs$lang$applyTo = (function (seq7808){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7808));
}));

