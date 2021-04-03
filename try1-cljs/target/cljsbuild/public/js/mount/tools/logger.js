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
var len__4736__auto___7866 = arguments.length;
var i__4737__auto___7867 = (0);
while(true){
if((i__4737__auto___7867 < len__4736__auto___7866)){
args__4742__auto__.push((arguments[i__4737__auto___7867]));

var G__7868 = (i__4737__auto___7867 + (1));
i__4737__auto___7867 = G__7868;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,level){
var G__7865 = cljs.core.first.call(null,level);
var G__7865__$1 = (((G__7865 instanceof cljs.core.Keyword))?G__7865.fqn:null);
switch (G__7865__$1) {
case "error":
return goog.log.error(mount.tools.logger._STAR_logger_STAR_,msg);

break;
default:
return goog.log.info(mount.tools.logger._STAR_logger_STAR_,msg);

}
}));

(mount.tools.logger.log.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mount.tools.logger.log.cljs$lang$applyTo = (function (seq7863){
var G__7864 = cljs.core.first.call(null,seq7863);
var seq7863__$1 = cljs.core.next.call(null,seq7863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7864,seq7863__$1);
}));

