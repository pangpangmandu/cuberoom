// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.js');
goog.require('cljs.core');
goog.require('oops.core');
cuberoom.js.js_console = (function cuberoom$js$js_console(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48802 = arguments.length;
var i__4737__auto___48803 = (0);
while(true){
if((i__4737__auto___48803 < len__4736__auto___48802)){
args__4742__auto__.push((arguments[i__4737__auto___48803]));

var G__48804 = (i__4737__auto___48803 + (1));
i__4737__auto___48803 = G__48804;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cuberoom.js.js_console.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cuberoom.js.js_console.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var target_obj_48796 = console;
var _STAR_runtime_state_STAR__orig_val__48800 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__48801 = oops.state.prepare_state.call(null,target_obj_48796,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__48801);

try{var call_info_48798 = [target_obj_48796,(function (){var next_obj_48799 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_48796,(0),"log",true,true,false))?(target_obj_48796["log"]):null);
return next_obj_48799;
})()];
var fn_48797 = (call_info_48798[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_48797,oops.state.get_last_access_modifier.call(null))){
if((!((fn_48797 == null)))){
return fn_48797.apply((call_info_48798[(0)]),oops.helpers.to_native_array.call(null,cljs.core.clj__GT_js.call(null,args)));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__48800);
}}));

(cuberoom.js.js_console.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cuberoom.js.js_console.cljs$lang$applyTo = (function (seq48795){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48795));
}));


//# sourceMappingURL=js.js.map?rel=1615710650706
