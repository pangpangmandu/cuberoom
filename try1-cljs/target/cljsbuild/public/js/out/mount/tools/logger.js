// Compiled by ClojureScript 1.10.773 {}
goog.provide('mount.tools.logger');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.debug.Console');
if((typeof mount !== 'undefined') && (typeof mount.tools !== 'undefined') && (typeof mount.tools.logger !== 'undefined') && (typeof mount.tools.logger._STAR_logger_STAR_ !== 'undefined')){
} else {
mount.tools.logger._STAR_logger_STAR_ = (function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("mount");
})()
;
}
mount.tools.logger.log = (function mount$tools$logger$log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50228 = arguments.length;
var i__4737__auto___50229 = (0);
while(true){
if((i__4737__auto___50229 < len__4736__auto___50228)){
args__4742__auto__.push((arguments[i__4737__auto___50229]));

var G__50230 = (i__4737__auto___50229 + (1));
i__4737__auto___50229 = G__50230;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,level){
var G__50227 = cljs.core.first.call(null,level);
var G__50227__$1 = (((G__50227 instanceof cljs.core.Keyword))?G__50227.fqn:null);
switch (G__50227__$1) {
case "error":
return goog.log.error(mount.tools.logger._STAR_logger_STAR_,msg);

break;
default:
return goog.log.info(mount.tools.logger._STAR_logger_STAR_,msg);

}
}));

(mount.tools.logger.log.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mount.tools.logger.log.cljs$lang$applyTo = (function (seq50225){
var G__50226 = cljs.core.first.call(null,seq50225);
var seq50225__$1 = cljs.core.next.call(null,seq50225);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50226,seq50225__$1);
}));


//# sourceMappingURL=logger.js.map?rel=1615710651825
