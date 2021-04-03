// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__53688 = arguments.length;
switch (G__53688) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53689 = (function (f,blockable,meta53690){
this.f = f;
this.blockable = blockable;
this.meta53690 = meta53690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53691,meta53690__$1){
var self__ = this;
var _53691__$1 = this;
return (new cljs.core.async.t_cljs$core$async53689(self__.f,self__.blockable,meta53690__$1));
}));

(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53691){
var self__ = this;
var _53691__$1 = this;
return self__.meta53690;
}));

(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async53689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async53689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta53690","meta53690",-1890727859,null)], null);
}));

(cljs.core.async.t_cljs$core$async53689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53689");

(cljs.core.async.t_cljs$core$async53689.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53689.
 */
cljs.core.async.__GT_t_cljs$core$async53689 = (function cljs$core$async$__GT_t_cljs$core$async53689(f__$1,blockable__$1,meta53690){
return (new cljs.core.async.t_cljs$core$async53689(f__$1,blockable__$1,meta53690));
});

}

return (new cljs.core.async.t_cljs$core$async53689(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__53695 = arguments.length;
switch (G__53695) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__53698 = arguments.length;
switch (G__53698) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__53701 = arguments.length;
switch (G__53701) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_53703 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_53703);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_53703);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__53705 = arguments.length;
switch (G__53705) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___53707 = n;
var x_53708 = (0);
while(true){
if((x_53708 < n__4613__auto___53707)){
(a[x_53708] = (0));

var G__53709 = (x_53708 + (1));
x_53708 = G__53709;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__53710 = (i + (1));
i = G__53710;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53711 = (function (flag,meta53712){
this.flag = flag;
this.meta53712 = meta53712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53713,meta53712__$1){
var self__ = this;
var _53713__$1 = this;
return (new cljs.core.async.t_cljs$core$async53711(self__.flag,meta53712__$1));
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53713){
var self__ = this;
var _53713__$1 = this;
return self__.meta53712;
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async53711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta53712","meta53712",2043479313,null)], null);
}));

(cljs.core.async.t_cljs$core$async53711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53711");

(cljs.core.async.t_cljs$core$async53711.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53711.
 */
cljs.core.async.__GT_t_cljs$core$async53711 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async53711(flag__$1,meta53712){
return (new cljs.core.async.t_cljs$core$async53711(flag__$1,meta53712));
});

}

return (new cljs.core.async.t_cljs$core$async53711(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53714 = (function (flag,cb,meta53715){
this.flag = flag;
this.cb = cb;
this.meta53715 = meta53715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53716,meta53715__$1){
var self__ = this;
var _53716__$1 = this;
return (new cljs.core.async.t_cljs$core$async53714(self__.flag,self__.cb,meta53715__$1));
}));

(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53716){
var self__ = this;
var _53716__$1 = this;
return self__.meta53715;
}));

(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async53714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta53715","meta53715",-588028875,null)], null);
}));

(cljs.core.async.t_cljs$core$async53714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53714");

(cljs.core.async.t_cljs$core$async53714.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53714.
 */
cljs.core.async.__GT_t_cljs$core$async53714 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async53714(flag__$1,cb__$1,meta53715){
return (new cljs.core.async.t_cljs$core$async53714(flag__$1,cb__$1,meta53715));
});

}

return (new cljs.core.async.t_cljs$core$async53714(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53717_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53717_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__53718_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53718_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53719 = (i + (1));
i = G__53719;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53725 = arguments.length;
var i__4737__auto___53726 = (0);
while(true){
if((i__4737__auto___53726 < len__4736__auto___53725)){
args__4742__auto__.push((arguments[i__4737__auto___53726]));

var G__53727 = (i__4737__auto___53726 + (1));
i__4737__auto___53726 = G__53727;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__53722){
var map__53723 = p__53722;
var map__53723__$1 = (((((!((map__53723 == null))))?(((((map__53723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53723):map__53723);
var opts = map__53723__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq53720){
var G__53721 = cljs.core.first.call(null,seq53720);
var seq53720__$1 = cljs.core.next.call(null,seq53720);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53721,seq53720__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__53729 = arguments.length;
switch (G__53729) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53628__auto___53775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_53753){
var state_val_53754 = (state_53753[(1)]);
if((state_val_53754 === (7))){
var inst_53749 = (state_53753[(2)]);
var state_53753__$1 = state_53753;
var statearr_53755_53776 = state_53753__$1;
(statearr_53755_53776[(2)] = inst_53749);

(statearr_53755_53776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (1))){
var state_53753__$1 = state_53753;
var statearr_53756_53777 = state_53753__$1;
(statearr_53756_53777[(2)] = null);

(statearr_53756_53777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (4))){
var inst_53732 = (state_53753[(7)]);
var inst_53732__$1 = (state_53753[(2)]);
var inst_53733 = (inst_53732__$1 == null);
var state_53753__$1 = (function (){var statearr_53757 = state_53753;
(statearr_53757[(7)] = inst_53732__$1);

return statearr_53757;
})();
if(cljs.core.truth_(inst_53733)){
var statearr_53758_53778 = state_53753__$1;
(statearr_53758_53778[(1)] = (5));

} else {
var statearr_53759_53779 = state_53753__$1;
(statearr_53759_53779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (13))){
var state_53753__$1 = state_53753;
var statearr_53760_53780 = state_53753__$1;
(statearr_53760_53780[(2)] = null);

(statearr_53760_53780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (6))){
var inst_53732 = (state_53753[(7)]);
var state_53753__$1 = state_53753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53753__$1,(11),to,inst_53732);
} else {
if((state_val_53754 === (3))){
var inst_53751 = (state_53753[(2)]);
var state_53753__$1 = state_53753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53753__$1,inst_53751);
} else {
if((state_val_53754 === (12))){
var state_53753__$1 = state_53753;
var statearr_53761_53781 = state_53753__$1;
(statearr_53761_53781[(2)] = null);

(statearr_53761_53781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (2))){
var state_53753__$1 = state_53753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53753__$1,(4),from);
} else {
if((state_val_53754 === (11))){
var inst_53742 = (state_53753[(2)]);
var state_53753__$1 = state_53753;
if(cljs.core.truth_(inst_53742)){
var statearr_53762_53782 = state_53753__$1;
(statearr_53762_53782[(1)] = (12));

} else {
var statearr_53763_53783 = state_53753__$1;
(statearr_53763_53783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (9))){
var state_53753__$1 = state_53753;
var statearr_53764_53784 = state_53753__$1;
(statearr_53764_53784[(2)] = null);

(statearr_53764_53784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (5))){
var state_53753__$1 = state_53753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53765_53785 = state_53753__$1;
(statearr_53765_53785[(1)] = (8));

} else {
var statearr_53766_53786 = state_53753__$1;
(statearr_53766_53786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (14))){
var inst_53747 = (state_53753[(2)]);
var state_53753__$1 = state_53753;
var statearr_53767_53787 = state_53753__$1;
(statearr_53767_53787[(2)] = inst_53747);

(statearr_53767_53787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (10))){
var inst_53739 = (state_53753[(2)]);
var state_53753__$1 = state_53753;
var statearr_53768_53788 = state_53753__$1;
(statearr_53768_53788[(2)] = inst_53739);

(statearr_53768_53788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53754 === (8))){
var inst_53736 = cljs.core.async.close_BANG_.call(null,to);
var state_53753__$1 = state_53753;
var statearr_53769_53789 = state_53753__$1;
(statearr_53769_53789[(2)] = inst_53736);

(statearr_53769_53789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_53770 = [null,null,null,null,null,null,null,null];
(statearr_53770[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_53770[(1)] = (1));

return statearr_53770;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_53753){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53771){if((e53771 instanceof Object)){
var ex__53537__auto__ = e53771;
var statearr_53772_53790 = state_53753;
(statearr_53772_53790[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53791 = state_53753;
state_53753 = G__53791;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_53753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_53753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_53773 = f__53629__auto__.call(null);
(statearr_53773[(6)] = c__53628__auto___53775);

return statearr_53773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__53792){
var vec__53793 = p__53792;
var v = cljs.core.nth.call(null,vec__53793,(0),null);
var p = cljs.core.nth.call(null,vec__53793,(1),null);
var job = vec__53793;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__53628__auto___53964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_53800){
var state_val_53801 = (state_53800[(1)]);
if((state_val_53801 === (1))){
var state_53800__$1 = state_53800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53800__$1,(2),res,v);
} else {
if((state_val_53801 === (2))){
var inst_53797 = (state_53800[(2)]);
var inst_53798 = cljs.core.async.close_BANG_.call(null,res);
var state_53800__$1 = (function (){var statearr_53802 = state_53800;
(statearr_53802[(7)] = inst_53797);

return statearr_53802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53800__$1,inst_53798);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_53803 = [null,null,null,null,null,null,null,null];
(statearr_53803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__);

(statearr_53803[(1)] = (1));

return statearr_53803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1 = (function (state_53800){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53804){if((e53804 instanceof Object)){
var ex__53537__auto__ = e53804;
var statearr_53805_53965 = state_53800;
(statearr_53805_53965[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53966 = state_53800;
state_53800 = G__53966;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = function(state_53800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1.call(this,state_53800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_53806 = f__53629__auto__.call(null);
(statearr_53806[(6)] = c__53628__auto___53964);

return statearr_53806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__53807){
var vec__53808 = p__53807;
var v = cljs.core.nth.call(null,vec__53808,(0),null);
var p = cljs.core.nth.call(null,vec__53808,(1),null);
var job = vec__53808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___53967 = n;
var __53968 = (0);
while(true){
if((__53968 < n__4613__auto___53967)){
var G__53811_53969 = type;
var G__53811_53970__$1 = (((G__53811_53969 instanceof cljs.core.Keyword))?G__53811_53969.fqn:null);
switch (G__53811_53970__$1) {
case "compute":
var c__53628__auto___53972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53968,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = ((function (__53968,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function (state_53824){
var state_val_53825 = (state_53824[(1)]);
if((state_val_53825 === (1))){
var state_53824__$1 = state_53824;
var statearr_53826_53973 = state_53824__$1;
(statearr_53826_53973[(2)] = null);

(statearr_53826_53973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53825 === (2))){
var state_53824__$1 = state_53824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53824__$1,(4),jobs);
} else {
if((state_val_53825 === (3))){
var inst_53822 = (state_53824[(2)]);
var state_53824__$1 = state_53824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53824__$1,inst_53822);
} else {
if((state_val_53825 === (4))){
var inst_53814 = (state_53824[(2)]);
var inst_53815 = process.call(null,inst_53814);
var state_53824__$1 = state_53824;
if(cljs.core.truth_(inst_53815)){
var statearr_53827_53974 = state_53824__$1;
(statearr_53827_53974[(1)] = (5));

} else {
var statearr_53828_53975 = state_53824__$1;
(statearr_53828_53975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53825 === (5))){
var state_53824__$1 = state_53824;
var statearr_53829_53976 = state_53824__$1;
(statearr_53829_53976[(2)] = null);

(statearr_53829_53976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53825 === (6))){
var state_53824__$1 = state_53824;
var statearr_53830_53977 = state_53824__$1;
(statearr_53830_53977[(2)] = null);

(statearr_53830_53977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53825 === (7))){
var inst_53820 = (state_53824[(2)]);
var state_53824__$1 = state_53824;
var statearr_53831_53978 = state_53824__$1;
(statearr_53831_53978[(2)] = inst_53820);

(statearr_53831_53978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53968,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
;
return ((function (__53968,switch__53533__auto__,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_53832 = [null,null,null,null,null,null,null];
(statearr_53832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__);

(statearr_53832[(1)] = (1));

return statearr_53832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1 = (function (state_53824){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53833){if((e53833 instanceof Object)){
var ex__53537__auto__ = e53833;
var statearr_53834_53979 = state_53824;
(statearr_53834_53979[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53980 = state_53824;
state_53824 = G__53980;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = function(state_53824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1.call(this,state_53824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__;
})()
;})(__53968,switch__53533__auto__,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
})();
var state__53630__auto__ = (function (){var statearr_53835 = f__53629__auto__.call(null);
(statearr_53835[(6)] = c__53628__auto___53972);

return statearr_53835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
});})(__53968,c__53628__auto___53972,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
);


break;
case "async":
var c__53628__auto___53981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__53968,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = ((function (__53968,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function (state_53848){
var state_val_53849 = (state_53848[(1)]);
if((state_val_53849 === (1))){
var state_53848__$1 = state_53848;
var statearr_53850_53982 = state_53848__$1;
(statearr_53850_53982[(2)] = null);

(statearr_53850_53982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53849 === (2))){
var state_53848__$1 = state_53848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53848__$1,(4),jobs);
} else {
if((state_val_53849 === (3))){
var inst_53846 = (state_53848[(2)]);
var state_53848__$1 = state_53848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53848__$1,inst_53846);
} else {
if((state_val_53849 === (4))){
var inst_53838 = (state_53848[(2)]);
var inst_53839 = async.call(null,inst_53838);
var state_53848__$1 = state_53848;
if(cljs.core.truth_(inst_53839)){
var statearr_53851_53983 = state_53848__$1;
(statearr_53851_53983[(1)] = (5));

} else {
var statearr_53852_53984 = state_53848__$1;
(statearr_53852_53984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53849 === (5))){
var state_53848__$1 = state_53848;
var statearr_53853_53985 = state_53848__$1;
(statearr_53853_53985[(2)] = null);

(statearr_53853_53985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53849 === (6))){
var state_53848__$1 = state_53848;
var statearr_53854_53986 = state_53848__$1;
(statearr_53854_53986[(2)] = null);

(statearr_53854_53986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53849 === (7))){
var inst_53844 = (state_53848[(2)]);
var state_53848__$1 = state_53848;
var statearr_53855_53987 = state_53848__$1;
(statearr_53855_53987[(2)] = inst_53844);

(statearr_53855_53987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53968,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
;
return ((function (__53968,switch__53533__auto__,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_53856 = [null,null,null,null,null,null,null];
(statearr_53856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__);

(statearr_53856[(1)] = (1));

return statearr_53856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1 = (function (state_53848){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53857){if((e53857 instanceof Object)){
var ex__53537__auto__ = e53857;
var statearr_53858_53988 = state_53848;
(statearr_53858_53988[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53989 = state_53848;
state_53848 = G__53989;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = function(state_53848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1.call(this,state_53848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__;
})()
;})(__53968,switch__53533__auto__,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
})();
var state__53630__auto__ = (function (){var statearr_53859 = f__53629__auto__.call(null);
(statearr_53859[(6)] = c__53628__auto___53981);

return statearr_53859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
});})(__53968,c__53628__auto___53981,G__53811_53969,G__53811_53970__$1,n__4613__auto___53967,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53811_53970__$1)].join('')));

}

var G__53990 = (__53968 + (1));
__53968 = G__53990;
continue;
} else {
}
break;
}

var c__53628__auto___53991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_53881){
var state_val_53882 = (state_53881[(1)]);
if((state_val_53882 === (7))){
var inst_53877 = (state_53881[(2)]);
var state_53881__$1 = state_53881;
var statearr_53883_53992 = state_53881__$1;
(statearr_53883_53992[(2)] = inst_53877);

(statearr_53883_53992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53882 === (1))){
var state_53881__$1 = state_53881;
var statearr_53884_53993 = state_53881__$1;
(statearr_53884_53993[(2)] = null);

(statearr_53884_53993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53882 === (4))){
var inst_53862 = (state_53881[(7)]);
var inst_53862__$1 = (state_53881[(2)]);
var inst_53863 = (inst_53862__$1 == null);
var state_53881__$1 = (function (){var statearr_53885 = state_53881;
(statearr_53885[(7)] = inst_53862__$1);

return statearr_53885;
})();
if(cljs.core.truth_(inst_53863)){
var statearr_53886_53994 = state_53881__$1;
(statearr_53886_53994[(1)] = (5));

} else {
var statearr_53887_53995 = state_53881__$1;
(statearr_53887_53995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53882 === (6))){
var inst_53862 = (state_53881[(7)]);
var inst_53867 = (state_53881[(8)]);
var inst_53867__$1 = cljs.core.async.chan.call(null,(1));
var inst_53868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53869 = [inst_53862,inst_53867__$1];
var inst_53870 = (new cljs.core.PersistentVector(null,2,(5),inst_53868,inst_53869,null));
var state_53881__$1 = (function (){var statearr_53888 = state_53881;
(statearr_53888[(8)] = inst_53867__$1);

return statearr_53888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53881__$1,(8),jobs,inst_53870);
} else {
if((state_val_53882 === (3))){
var inst_53879 = (state_53881[(2)]);
var state_53881__$1 = state_53881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53881__$1,inst_53879);
} else {
if((state_val_53882 === (2))){
var state_53881__$1 = state_53881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53881__$1,(4),from);
} else {
if((state_val_53882 === (9))){
var inst_53874 = (state_53881[(2)]);
var state_53881__$1 = (function (){var statearr_53889 = state_53881;
(statearr_53889[(9)] = inst_53874);

return statearr_53889;
})();
var statearr_53890_53996 = state_53881__$1;
(statearr_53890_53996[(2)] = null);

(statearr_53890_53996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53882 === (5))){
var inst_53865 = cljs.core.async.close_BANG_.call(null,jobs);
var state_53881__$1 = state_53881;
var statearr_53891_53997 = state_53881__$1;
(statearr_53891_53997[(2)] = inst_53865);

(statearr_53891_53997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53882 === (8))){
var inst_53867 = (state_53881[(8)]);
var inst_53872 = (state_53881[(2)]);
var state_53881__$1 = (function (){var statearr_53892 = state_53881;
(statearr_53892[(10)] = inst_53872);

return statearr_53892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53881__$1,(9),results,inst_53867);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_53893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__);

(statearr_53893[(1)] = (1));

return statearr_53893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1 = (function (state_53881){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53894){if((e53894 instanceof Object)){
var ex__53537__auto__ = e53894;
var statearr_53895_53998 = state_53881;
(statearr_53895_53998[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53999 = state_53881;
state_53881 = G__53999;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = function(state_53881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1.call(this,state_53881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_53896 = f__53629__auto__.call(null);
(statearr_53896[(6)] = c__53628__auto___53991);

return statearr_53896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_53934){
var state_val_53935 = (state_53934[(1)]);
if((state_val_53935 === (7))){
var inst_53930 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53936_54000 = state_53934__$1;
(statearr_53936_54000[(2)] = inst_53930);

(statearr_53936_54000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (20))){
var state_53934__$1 = state_53934;
var statearr_53937_54001 = state_53934__$1;
(statearr_53937_54001[(2)] = null);

(statearr_53937_54001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (1))){
var state_53934__$1 = state_53934;
var statearr_53938_54002 = state_53934__$1;
(statearr_53938_54002[(2)] = null);

(statearr_53938_54002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (4))){
var inst_53899 = (state_53934[(7)]);
var inst_53899__$1 = (state_53934[(2)]);
var inst_53900 = (inst_53899__$1 == null);
var state_53934__$1 = (function (){var statearr_53939 = state_53934;
(statearr_53939[(7)] = inst_53899__$1);

return statearr_53939;
})();
if(cljs.core.truth_(inst_53900)){
var statearr_53940_54003 = state_53934__$1;
(statearr_53940_54003[(1)] = (5));

} else {
var statearr_53941_54004 = state_53934__$1;
(statearr_53941_54004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (15))){
var inst_53912 = (state_53934[(8)]);
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53934__$1,(18),to,inst_53912);
} else {
if((state_val_53935 === (21))){
var inst_53925 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53942_54005 = state_53934__$1;
(statearr_53942_54005[(2)] = inst_53925);

(statearr_53942_54005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (13))){
var inst_53927 = (state_53934[(2)]);
var state_53934__$1 = (function (){var statearr_53943 = state_53934;
(statearr_53943[(9)] = inst_53927);

return statearr_53943;
})();
var statearr_53944_54006 = state_53934__$1;
(statearr_53944_54006[(2)] = null);

(statearr_53944_54006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (6))){
var inst_53899 = (state_53934[(7)]);
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53934__$1,(11),inst_53899);
} else {
if((state_val_53935 === (17))){
var inst_53920 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
if(cljs.core.truth_(inst_53920)){
var statearr_53945_54007 = state_53934__$1;
(statearr_53945_54007[(1)] = (19));

} else {
var statearr_53946_54008 = state_53934__$1;
(statearr_53946_54008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (3))){
var inst_53932 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53934__$1,inst_53932);
} else {
if((state_val_53935 === (12))){
var inst_53909 = (state_53934[(10)]);
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53934__$1,(14),inst_53909);
} else {
if((state_val_53935 === (2))){
var state_53934__$1 = state_53934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53934__$1,(4),results);
} else {
if((state_val_53935 === (19))){
var state_53934__$1 = state_53934;
var statearr_53947_54009 = state_53934__$1;
(statearr_53947_54009[(2)] = null);

(statearr_53947_54009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (11))){
var inst_53909 = (state_53934[(2)]);
var state_53934__$1 = (function (){var statearr_53948 = state_53934;
(statearr_53948[(10)] = inst_53909);

return statearr_53948;
})();
var statearr_53949_54010 = state_53934__$1;
(statearr_53949_54010[(2)] = null);

(statearr_53949_54010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (9))){
var state_53934__$1 = state_53934;
var statearr_53950_54011 = state_53934__$1;
(statearr_53950_54011[(2)] = null);

(statearr_53950_54011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (5))){
var state_53934__$1 = state_53934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53951_54012 = state_53934__$1;
(statearr_53951_54012[(1)] = (8));

} else {
var statearr_53952_54013 = state_53934__$1;
(statearr_53952_54013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (14))){
var inst_53912 = (state_53934[(8)]);
var inst_53912__$1 = (state_53934[(2)]);
var inst_53913 = (inst_53912__$1 == null);
var inst_53914 = cljs.core.not.call(null,inst_53913);
var state_53934__$1 = (function (){var statearr_53953 = state_53934;
(statearr_53953[(8)] = inst_53912__$1);

return statearr_53953;
})();
if(inst_53914){
var statearr_53954_54014 = state_53934__$1;
(statearr_53954_54014[(1)] = (15));

} else {
var statearr_53955_54015 = state_53934__$1;
(statearr_53955_54015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (16))){
var state_53934__$1 = state_53934;
var statearr_53956_54016 = state_53934__$1;
(statearr_53956_54016[(2)] = false);

(statearr_53956_54016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (10))){
var inst_53906 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53957_54017 = state_53934__$1;
(statearr_53957_54017[(2)] = inst_53906);

(statearr_53957_54017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (18))){
var inst_53917 = (state_53934[(2)]);
var state_53934__$1 = state_53934;
var statearr_53958_54018 = state_53934__$1;
(statearr_53958_54018[(2)] = inst_53917);

(statearr_53958_54018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53935 === (8))){
var inst_53903 = cljs.core.async.close_BANG_.call(null,to);
var state_53934__$1 = state_53934;
var statearr_53959_54019 = state_53934__$1;
(statearr_53959_54019[(2)] = inst_53903);

(statearr_53959_54019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_53960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__);

(statearr_53960[(1)] = (1));

return statearr_53960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1 = (function (state_53934){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_53934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e53961){if((e53961 instanceof Object)){
var ex__53537__auto__ = e53961;
var statearr_53962_54020 = state_53934;
(statearr_53962_54020[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54021 = state_53934;
state_53934 = G__54021;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__ = function(state_53934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1.call(this,state_53934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_53963 = f__53629__auto__.call(null);
(statearr_53963[(6)] = c__53628__auto__);

return statearr_53963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__54023 = arguments.length;
switch (G__54023) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__54026 = arguments.length;
switch (G__54026) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__54029 = arguments.length;
switch (G__54029) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__53628__auto___54078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54055){
var state_val_54056 = (state_54055[(1)]);
if((state_val_54056 === (7))){
var inst_54051 = (state_54055[(2)]);
var state_54055__$1 = state_54055;
var statearr_54057_54079 = state_54055__$1;
(statearr_54057_54079[(2)] = inst_54051);

(statearr_54057_54079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (1))){
var state_54055__$1 = state_54055;
var statearr_54058_54080 = state_54055__$1;
(statearr_54058_54080[(2)] = null);

(statearr_54058_54080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (4))){
var inst_54032 = (state_54055[(7)]);
var inst_54032__$1 = (state_54055[(2)]);
var inst_54033 = (inst_54032__$1 == null);
var state_54055__$1 = (function (){var statearr_54059 = state_54055;
(statearr_54059[(7)] = inst_54032__$1);

return statearr_54059;
})();
if(cljs.core.truth_(inst_54033)){
var statearr_54060_54081 = state_54055__$1;
(statearr_54060_54081[(1)] = (5));

} else {
var statearr_54061_54082 = state_54055__$1;
(statearr_54061_54082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (13))){
var state_54055__$1 = state_54055;
var statearr_54062_54083 = state_54055__$1;
(statearr_54062_54083[(2)] = null);

(statearr_54062_54083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (6))){
var inst_54032 = (state_54055[(7)]);
var inst_54038 = p.call(null,inst_54032);
var state_54055__$1 = state_54055;
if(cljs.core.truth_(inst_54038)){
var statearr_54063_54084 = state_54055__$1;
(statearr_54063_54084[(1)] = (9));

} else {
var statearr_54064_54085 = state_54055__$1;
(statearr_54064_54085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (3))){
var inst_54053 = (state_54055[(2)]);
var state_54055__$1 = state_54055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54055__$1,inst_54053);
} else {
if((state_val_54056 === (12))){
var state_54055__$1 = state_54055;
var statearr_54065_54086 = state_54055__$1;
(statearr_54065_54086[(2)] = null);

(statearr_54065_54086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (2))){
var state_54055__$1 = state_54055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54055__$1,(4),ch);
} else {
if((state_val_54056 === (11))){
var inst_54032 = (state_54055[(7)]);
var inst_54042 = (state_54055[(2)]);
var state_54055__$1 = state_54055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54055__$1,(8),inst_54042,inst_54032);
} else {
if((state_val_54056 === (9))){
var state_54055__$1 = state_54055;
var statearr_54066_54087 = state_54055__$1;
(statearr_54066_54087[(2)] = tc);

(statearr_54066_54087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (5))){
var inst_54035 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54036 = cljs.core.async.close_BANG_.call(null,fc);
var state_54055__$1 = (function (){var statearr_54067 = state_54055;
(statearr_54067[(8)] = inst_54035);

return statearr_54067;
})();
var statearr_54068_54088 = state_54055__$1;
(statearr_54068_54088[(2)] = inst_54036);

(statearr_54068_54088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (14))){
var inst_54049 = (state_54055[(2)]);
var state_54055__$1 = state_54055;
var statearr_54069_54089 = state_54055__$1;
(statearr_54069_54089[(2)] = inst_54049);

(statearr_54069_54089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (10))){
var state_54055__$1 = state_54055;
var statearr_54070_54090 = state_54055__$1;
(statearr_54070_54090[(2)] = fc);

(statearr_54070_54090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54056 === (8))){
var inst_54044 = (state_54055[(2)]);
var state_54055__$1 = state_54055;
if(cljs.core.truth_(inst_54044)){
var statearr_54071_54091 = state_54055__$1;
(statearr_54071_54091[(1)] = (12));

} else {
var statearr_54072_54092 = state_54055__$1;
(statearr_54072_54092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_54073 = [null,null,null,null,null,null,null,null,null];
(statearr_54073[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_54073[(1)] = (1));

return statearr_54073;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_54055){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54074){if((e54074 instanceof Object)){
var ex__53537__auto__ = e54074;
var statearr_54075_54093 = state_54055;
(statearr_54075_54093[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54094 = state_54055;
state_54055 = G__54094;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_54055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_54055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54076 = f__53629__auto__.call(null);
(statearr_54076[(6)] = c__53628__auto___54078);

return statearr_54076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54115){
var state_val_54116 = (state_54115[(1)]);
if((state_val_54116 === (7))){
var inst_54111 = (state_54115[(2)]);
var state_54115__$1 = state_54115;
var statearr_54117_54135 = state_54115__$1;
(statearr_54117_54135[(2)] = inst_54111);

(statearr_54117_54135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (1))){
var inst_54095 = init;
var state_54115__$1 = (function (){var statearr_54118 = state_54115;
(statearr_54118[(7)] = inst_54095);

return statearr_54118;
})();
var statearr_54119_54136 = state_54115__$1;
(statearr_54119_54136[(2)] = null);

(statearr_54119_54136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (4))){
var inst_54098 = (state_54115[(8)]);
var inst_54098__$1 = (state_54115[(2)]);
var inst_54099 = (inst_54098__$1 == null);
var state_54115__$1 = (function (){var statearr_54120 = state_54115;
(statearr_54120[(8)] = inst_54098__$1);

return statearr_54120;
})();
if(cljs.core.truth_(inst_54099)){
var statearr_54121_54137 = state_54115__$1;
(statearr_54121_54137[(1)] = (5));

} else {
var statearr_54122_54138 = state_54115__$1;
(statearr_54122_54138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (6))){
var inst_54098 = (state_54115[(8)]);
var inst_54102 = (state_54115[(9)]);
var inst_54095 = (state_54115[(7)]);
var inst_54102__$1 = f.call(null,inst_54095,inst_54098);
var inst_54103 = cljs.core.reduced_QMARK_.call(null,inst_54102__$1);
var state_54115__$1 = (function (){var statearr_54123 = state_54115;
(statearr_54123[(9)] = inst_54102__$1);

return statearr_54123;
})();
if(inst_54103){
var statearr_54124_54139 = state_54115__$1;
(statearr_54124_54139[(1)] = (8));

} else {
var statearr_54125_54140 = state_54115__$1;
(statearr_54125_54140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (3))){
var inst_54113 = (state_54115[(2)]);
var state_54115__$1 = state_54115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54115__$1,inst_54113);
} else {
if((state_val_54116 === (2))){
var state_54115__$1 = state_54115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54115__$1,(4),ch);
} else {
if((state_val_54116 === (9))){
var inst_54102 = (state_54115[(9)]);
var inst_54095 = inst_54102;
var state_54115__$1 = (function (){var statearr_54126 = state_54115;
(statearr_54126[(7)] = inst_54095);

return statearr_54126;
})();
var statearr_54127_54141 = state_54115__$1;
(statearr_54127_54141[(2)] = null);

(statearr_54127_54141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (5))){
var inst_54095 = (state_54115[(7)]);
var state_54115__$1 = state_54115;
var statearr_54128_54142 = state_54115__$1;
(statearr_54128_54142[(2)] = inst_54095);

(statearr_54128_54142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (10))){
var inst_54109 = (state_54115[(2)]);
var state_54115__$1 = state_54115;
var statearr_54129_54143 = state_54115__$1;
(statearr_54129_54143[(2)] = inst_54109);

(statearr_54129_54143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54116 === (8))){
var inst_54102 = (state_54115[(9)]);
var inst_54105 = cljs.core.deref.call(null,inst_54102);
var state_54115__$1 = state_54115;
var statearr_54130_54144 = state_54115__$1;
(statearr_54130_54144[(2)] = inst_54105);

(statearr_54130_54144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__53534__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53534__auto____0 = (function (){
var statearr_54131 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54131[(0)] = cljs$core$async$reduce_$_state_machine__53534__auto__);

(statearr_54131[(1)] = (1));

return statearr_54131;
});
var cljs$core$async$reduce_$_state_machine__53534__auto____1 = (function (state_54115){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54132){if((e54132 instanceof Object)){
var ex__53537__auto__ = e54132;
var statearr_54133_54145 = state_54115;
(statearr_54133_54145[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54146 = state_54115;
state_54115 = G__54146;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53534__auto__ = function(state_54115){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53534__auto____1.call(this,state_54115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53534__auto____0;
cljs$core$async$reduce_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53534__auto____1;
return cljs$core$async$reduce_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54134 = f__53629__auto__.call(null);
(statearr_54134[(6)] = c__53628__auto__);

return statearr_54134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54152){
var state_val_54153 = (state_54152[(1)]);
if((state_val_54153 === (1))){
var inst_54147 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_54152__$1 = state_54152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54152__$1,(2),inst_54147);
} else {
if((state_val_54153 === (2))){
var inst_54149 = (state_54152[(2)]);
var inst_54150 = f__$1.call(null,inst_54149);
var state_54152__$1 = state_54152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54152__$1,inst_54150);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__53534__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53534__auto____0 = (function (){
var statearr_54154 = [null,null,null,null,null,null,null];
(statearr_54154[(0)] = cljs$core$async$transduce_$_state_machine__53534__auto__);

(statearr_54154[(1)] = (1));

return statearr_54154;
});
var cljs$core$async$transduce_$_state_machine__53534__auto____1 = (function (state_54152){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54155){if((e54155 instanceof Object)){
var ex__53537__auto__ = e54155;
var statearr_54156_54158 = state_54152;
(statearr_54156_54158[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54159 = state_54152;
state_54152 = G__54159;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53534__auto__ = function(state_54152){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53534__auto____1.call(this,state_54152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53534__auto____0;
cljs$core$async$transduce_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53534__auto____1;
return cljs$core$async$transduce_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54157 = f__53629__auto__.call(null);
(statearr_54157[(6)] = c__53628__auto__);

return statearr_54157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__54161 = arguments.length;
switch (G__54161) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54186){
var state_val_54187 = (state_54186[(1)]);
if((state_val_54187 === (7))){
var inst_54168 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54188_54209 = state_54186__$1;
(statearr_54188_54209[(2)] = inst_54168);

(statearr_54188_54209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (1))){
var inst_54162 = cljs.core.seq.call(null,coll);
var inst_54163 = inst_54162;
var state_54186__$1 = (function (){var statearr_54189 = state_54186;
(statearr_54189[(7)] = inst_54163);

return statearr_54189;
})();
var statearr_54190_54210 = state_54186__$1;
(statearr_54190_54210[(2)] = null);

(statearr_54190_54210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (4))){
var inst_54163 = (state_54186[(7)]);
var inst_54166 = cljs.core.first.call(null,inst_54163);
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54186__$1,(7),ch,inst_54166);
} else {
if((state_val_54187 === (13))){
var inst_54180 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54191_54211 = state_54186__$1;
(statearr_54191_54211[(2)] = inst_54180);

(statearr_54191_54211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (6))){
var inst_54171 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
if(cljs.core.truth_(inst_54171)){
var statearr_54192_54212 = state_54186__$1;
(statearr_54192_54212[(1)] = (8));

} else {
var statearr_54193_54213 = state_54186__$1;
(statearr_54193_54213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (3))){
var inst_54184 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54186__$1,inst_54184);
} else {
if((state_val_54187 === (12))){
var state_54186__$1 = state_54186;
var statearr_54194_54214 = state_54186__$1;
(statearr_54194_54214[(2)] = null);

(statearr_54194_54214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (2))){
var inst_54163 = (state_54186[(7)]);
var state_54186__$1 = state_54186;
if(cljs.core.truth_(inst_54163)){
var statearr_54195_54215 = state_54186__$1;
(statearr_54195_54215[(1)] = (4));

} else {
var statearr_54196_54216 = state_54186__$1;
(statearr_54196_54216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (11))){
var inst_54177 = cljs.core.async.close_BANG_.call(null,ch);
var state_54186__$1 = state_54186;
var statearr_54197_54217 = state_54186__$1;
(statearr_54197_54217[(2)] = inst_54177);

(statearr_54197_54217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (9))){
var state_54186__$1 = state_54186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54198_54218 = state_54186__$1;
(statearr_54198_54218[(1)] = (11));

} else {
var statearr_54199_54219 = state_54186__$1;
(statearr_54199_54219[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (5))){
var inst_54163 = (state_54186[(7)]);
var state_54186__$1 = state_54186;
var statearr_54200_54220 = state_54186__$1;
(statearr_54200_54220[(2)] = inst_54163);

(statearr_54200_54220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (10))){
var inst_54182 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54201_54221 = state_54186__$1;
(statearr_54201_54221[(2)] = inst_54182);

(statearr_54201_54221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (8))){
var inst_54163 = (state_54186[(7)]);
var inst_54173 = cljs.core.next.call(null,inst_54163);
var inst_54163__$1 = inst_54173;
var state_54186__$1 = (function (){var statearr_54202 = state_54186;
(statearr_54202[(7)] = inst_54163__$1);

return statearr_54202;
})();
var statearr_54203_54222 = state_54186__$1;
(statearr_54203_54222[(2)] = null);

(statearr_54203_54222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_54204 = [null,null,null,null,null,null,null,null];
(statearr_54204[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_54204[(1)] = (1));

return statearr_54204;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_54186){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54205){if((e54205 instanceof Object)){
var ex__53537__auto__ = e54205;
var statearr_54206_54223 = state_54186;
(statearr_54206_54223[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54224 = state_54186;
state_54186 = G__54224;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_54186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_54186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54207 = f__53629__auto__.call(null);
(statearr_54207[(6)] = c__53628__auto__);

return statearr_54207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_54225 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_54225.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_54226 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_54226.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_54227 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_54227.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_54228 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_54228.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54229 = (function (ch,cs,meta54230){
this.ch = ch;
this.cs = cs;
this.meta54230 = meta54230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54231,meta54230__$1){
var self__ = this;
var _54231__$1 = this;
return (new cljs.core.async.t_cljs$core$async54229(self__.ch,self__.cs,meta54230__$1));
}));

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54231){
var self__ = this;
var _54231__$1 = this;
return self__.meta54230;
}));

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54229.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54230","meta54230",242363831,null)], null);
}));

(cljs.core.async.t_cljs$core$async54229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54229");

(cljs.core.async.t_cljs$core$async54229.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async54229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54229.
 */
cljs.core.async.__GT_t_cljs$core$async54229 = (function cljs$core$async$mult_$___GT_t_cljs$core$async54229(ch__$1,cs__$1,meta54230){
return (new cljs.core.async.t_cljs$core$async54229(ch__$1,cs__$1,meta54230));
});

}

return (new cljs.core.async.t_cljs$core$async54229(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__53628__auto___54451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54366){
var state_val_54367 = (state_54366[(1)]);
if((state_val_54367 === (7))){
var inst_54362 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54368_54452 = state_54366__$1;
(statearr_54368_54452[(2)] = inst_54362);

(statearr_54368_54452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (20))){
var inst_54265 = (state_54366[(7)]);
var inst_54277 = cljs.core.first.call(null,inst_54265);
var inst_54278 = cljs.core.nth.call(null,inst_54277,(0),null);
var inst_54279 = cljs.core.nth.call(null,inst_54277,(1),null);
var state_54366__$1 = (function (){var statearr_54369 = state_54366;
(statearr_54369[(8)] = inst_54278);

return statearr_54369;
})();
if(cljs.core.truth_(inst_54279)){
var statearr_54370_54453 = state_54366__$1;
(statearr_54370_54453[(1)] = (22));

} else {
var statearr_54371_54454 = state_54366__$1;
(statearr_54371_54454[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (27))){
var inst_54314 = (state_54366[(9)]);
var inst_54307 = (state_54366[(10)]);
var inst_54309 = (state_54366[(11)]);
var inst_54234 = (state_54366[(12)]);
var inst_54314__$1 = cljs.core._nth.call(null,inst_54307,inst_54309);
var inst_54315 = cljs.core.async.put_BANG_.call(null,inst_54314__$1,inst_54234,done);
var state_54366__$1 = (function (){var statearr_54372 = state_54366;
(statearr_54372[(9)] = inst_54314__$1);

return statearr_54372;
})();
if(cljs.core.truth_(inst_54315)){
var statearr_54373_54455 = state_54366__$1;
(statearr_54373_54455[(1)] = (30));

} else {
var statearr_54374_54456 = state_54366__$1;
(statearr_54374_54456[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (1))){
var state_54366__$1 = state_54366;
var statearr_54375_54457 = state_54366__$1;
(statearr_54375_54457[(2)] = null);

(statearr_54375_54457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (24))){
var inst_54265 = (state_54366[(7)]);
var inst_54284 = (state_54366[(2)]);
var inst_54285 = cljs.core.next.call(null,inst_54265);
var inst_54243 = inst_54285;
var inst_54244 = null;
var inst_54245 = (0);
var inst_54246 = (0);
var state_54366__$1 = (function (){var statearr_54376 = state_54366;
(statearr_54376[(13)] = inst_54246);

(statearr_54376[(14)] = inst_54245);

(statearr_54376[(15)] = inst_54243);

(statearr_54376[(16)] = inst_54244);

(statearr_54376[(17)] = inst_54284);

return statearr_54376;
})();
var statearr_54377_54458 = state_54366__$1;
(statearr_54377_54458[(2)] = null);

(statearr_54377_54458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (39))){
var state_54366__$1 = state_54366;
var statearr_54381_54459 = state_54366__$1;
(statearr_54381_54459[(2)] = null);

(statearr_54381_54459[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (4))){
var inst_54234 = (state_54366[(12)]);
var inst_54234__$1 = (state_54366[(2)]);
var inst_54235 = (inst_54234__$1 == null);
var state_54366__$1 = (function (){var statearr_54382 = state_54366;
(statearr_54382[(12)] = inst_54234__$1);

return statearr_54382;
})();
if(cljs.core.truth_(inst_54235)){
var statearr_54383_54460 = state_54366__$1;
(statearr_54383_54460[(1)] = (5));

} else {
var statearr_54384_54461 = state_54366__$1;
(statearr_54384_54461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (15))){
var inst_54246 = (state_54366[(13)]);
var inst_54245 = (state_54366[(14)]);
var inst_54243 = (state_54366[(15)]);
var inst_54244 = (state_54366[(16)]);
var inst_54261 = (state_54366[(2)]);
var inst_54262 = (inst_54246 + (1));
var tmp54378 = inst_54245;
var tmp54379 = inst_54243;
var tmp54380 = inst_54244;
var inst_54243__$1 = tmp54379;
var inst_54244__$1 = tmp54380;
var inst_54245__$1 = tmp54378;
var inst_54246__$1 = inst_54262;
var state_54366__$1 = (function (){var statearr_54385 = state_54366;
(statearr_54385[(13)] = inst_54246__$1);

(statearr_54385[(14)] = inst_54245__$1);

(statearr_54385[(15)] = inst_54243__$1);

(statearr_54385[(16)] = inst_54244__$1);

(statearr_54385[(18)] = inst_54261);

return statearr_54385;
})();
var statearr_54386_54462 = state_54366__$1;
(statearr_54386_54462[(2)] = null);

(statearr_54386_54462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (21))){
var inst_54288 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54390_54463 = state_54366__$1;
(statearr_54390_54463[(2)] = inst_54288);

(statearr_54390_54463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (31))){
var inst_54314 = (state_54366[(9)]);
var inst_54318 = done.call(null,null);
var inst_54319 = cljs.core.async.untap_STAR_.call(null,m,inst_54314);
var state_54366__$1 = (function (){var statearr_54391 = state_54366;
(statearr_54391[(19)] = inst_54318);

return statearr_54391;
})();
var statearr_54392_54464 = state_54366__$1;
(statearr_54392_54464[(2)] = inst_54319);

(statearr_54392_54464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (32))){
var inst_54307 = (state_54366[(10)]);
var inst_54306 = (state_54366[(20)]);
var inst_54309 = (state_54366[(11)]);
var inst_54308 = (state_54366[(21)]);
var inst_54321 = (state_54366[(2)]);
var inst_54322 = (inst_54309 + (1));
var tmp54387 = inst_54307;
var tmp54388 = inst_54306;
var tmp54389 = inst_54308;
var inst_54306__$1 = tmp54388;
var inst_54307__$1 = tmp54387;
var inst_54308__$1 = tmp54389;
var inst_54309__$1 = inst_54322;
var state_54366__$1 = (function (){var statearr_54393 = state_54366;
(statearr_54393[(22)] = inst_54321);

(statearr_54393[(10)] = inst_54307__$1);

(statearr_54393[(20)] = inst_54306__$1);

(statearr_54393[(11)] = inst_54309__$1);

(statearr_54393[(21)] = inst_54308__$1);

return statearr_54393;
})();
var statearr_54394_54465 = state_54366__$1;
(statearr_54394_54465[(2)] = null);

(statearr_54394_54465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (40))){
var inst_54334 = (state_54366[(23)]);
var inst_54338 = done.call(null,null);
var inst_54339 = cljs.core.async.untap_STAR_.call(null,m,inst_54334);
var state_54366__$1 = (function (){var statearr_54395 = state_54366;
(statearr_54395[(24)] = inst_54338);

return statearr_54395;
})();
var statearr_54396_54466 = state_54366__$1;
(statearr_54396_54466[(2)] = inst_54339);

(statearr_54396_54466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (33))){
var inst_54325 = (state_54366[(25)]);
var inst_54327 = cljs.core.chunked_seq_QMARK_.call(null,inst_54325);
var state_54366__$1 = state_54366;
if(inst_54327){
var statearr_54397_54467 = state_54366__$1;
(statearr_54397_54467[(1)] = (36));

} else {
var statearr_54398_54468 = state_54366__$1;
(statearr_54398_54468[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (13))){
var inst_54255 = (state_54366[(26)]);
var inst_54258 = cljs.core.async.close_BANG_.call(null,inst_54255);
var state_54366__$1 = state_54366;
var statearr_54399_54469 = state_54366__$1;
(statearr_54399_54469[(2)] = inst_54258);

(statearr_54399_54469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (22))){
var inst_54278 = (state_54366[(8)]);
var inst_54281 = cljs.core.async.close_BANG_.call(null,inst_54278);
var state_54366__$1 = state_54366;
var statearr_54400_54470 = state_54366__$1;
(statearr_54400_54470[(2)] = inst_54281);

(statearr_54400_54470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (36))){
var inst_54325 = (state_54366[(25)]);
var inst_54329 = cljs.core.chunk_first.call(null,inst_54325);
var inst_54330 = cljs.core.chunk_rest.call(null,inst_54325);
var inst_54331 = cljs.core.count.call(null,inst_54329);
var inst_54306 = inst_54330;
var inst_54307 = inst_54329;
var inst_54308 = inst_54331;
var inst_54309 = (0);
var state_54366__$1 = (function (){var statearr_54401 = state_54366;
(statearr_54401[(10)] = inst_54307);

(statearr_54401[(20)] = inst_54306);

(statearr_54401[(11)] = inst_54309);

(statearr_54401[(21)] = inst_54308);

return statearr_54401;
})();
var statearr_54402_54471 = state_54366__$1;
(statearr_54402_54471[(2)] = null);

(statearr_54402_54471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (41))){
var inst_54325 = (state_54366[(25)]);
var inst_54341 = (state_54366[(2)]);
var inst_54342 = cljs.core.next.call(null,inst_54325);
var inst_54306 = inst_54342;
var inst_54307 = null;
var inst_54308 = (0);
var inst_54309 = (0);
var state_54366__$1 = (function (){var statearr_54403 = state_54366;
(statearr_54403[(27)] = inst_54341);

(statearr_54403[(10)] = inst_54307);

(statearr_54403[(20)] = inst_54306);

(statearr_54403[(11)] = inst_54309);

(statearr_54403[(21)] = inst_54308);

return statearr_54403;
})();
var statearr_54404_54472 = state_54366__$1;
(statearr_54404_54472[(2)] = null);

(statearr_54404_54472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (43))){
var state_54366__$1 = state_54366;
var statearr_54405_54473 = state_54366__$1;
(statearr_54405_54473[(2)] = null);

(statearr_54405_54473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (29))){
var inst_54350 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54406_54474 = state_54366__$1;
(statearr_54406_54474[(2)] = inst_54350);

(statearr_54406_54474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (44))){
var inst_54359 = (state_54366[(2)]);
var state_54366__$1 = (function (){var statearr_54407 = state_54366;
(statearr_54407[(28)] = inst_54359);

return statearr_54407;
})();
var statearr_54408_54475 = state_54366__$1;
(statearr_54408_54475[(2)] = null);

(statearr_54408_54475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (6))){
var inst_54298 = (state_54366[(29)]);
var inst_54297 = cljs.core.deref.call(null,cs);
var inst_54298__$1 = cljs.core.keys.call(null,inst_54297);
var inst_54299 = cljs.core.count.call(null,inst_54298__$1);
var inst_54300 = cljs.core.reset_BANG_.call(null,dctr,inst_54299);
var inst_54305 = cljs.core.seq.call(null,inst_54298__$1);
var inst_54306 = inst_54305;
var inst_54307 = null;
var inst_54308 = (0);
var inst_54309 = (0);
var state_54366__$1 = (function (){var statearr_54409 = state_54366;
(statearr_54409[(29)] = inst_54298__$1);

(statearr_54409[(10)] = inst_54307);

(statearr_54409[(30)] = inst_54300);

(statearr_54409[(20)] = inst_54306);

(statearr_54409[(11)] = inst_54309);

(statearr_54409[(21)] = inst_54308);

return statearr_54409;
})();
var statearr_54410_54476 = state_54366__$1;
(statearr_54410_54476[(2)] = null);

(statearr_54410_54476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (28))){
var inst_54306 = (state_54366[(20)]);
var inst_54325 = (state_54366[(25)]);
var inst_54325__$1 = cljs.core.seq.call(null,inst_54306);
var state_54366__$1 = (function (){var statearr_54411 = state_54366;
(statearr_54411[(25)] = inst_54325__$1);

return statearr_54411;
})();
if(inst_54325__$1){
var statearr_54412_54477 = state_54366__$1;
(statearr_54412_54477[(1)] = (33));

} else {
var statearr_54413_54478 = state_54366__$1;
(statearr_54413_54478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (25))){
var inst_54309 = (state_54366[(11)]);
var inst_54308 = (state_54366[(21)]);
var inst_54311 = (inst_54309 < inst_54308);
var inst_54312 = inst_54311;
var state_54366__$1 = state_54366;
if(cljs.core.truth_(inst_54312)){
var statearr_54414_54479 = state_54366__$1;
(statearr_54414_54479[(1)] = (27));

} else {
var statearr_54415_54480 = state_54366__$1;
(statearr_54415_54480[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (34))){
var state_54366__$1 = state_54366;
var statearr_54416_54481 = state_54366__$1;
(statearr_54416_54481[(2)] = null);

(statearr_54416_54481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (17))){
var state_54366__$1 = state_54366;
var statearr_54417_54482 = state_54366__$1;
(statearr_54417_54482[(2)] = null);

(statearr_54417_54482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (3))){
var inst_54364 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54366__$1,inst_54364);
} else {
if((state_val_54367 === (12))){
var inst_54293 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54418_54483 = state_54366__$1;
(statearr_54418_54483[(2)] = inst_54293);

(statearr_54418_54483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (2))){
var state_54366__$1 = state_54366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54366__$1,(4),ch);
} else {
if((state_val_54367 === (23))){
var state_54366__$1 = state_54366;
var statearr_54419_54484 = state_54366__$1;
(statearr_54419_54484[(2)] = null);

(statearr_54419_54484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (35))){
var inst_54348 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54420_54485 = state_54366__$1;
(statearr_54420_54485[(2)] = inst_54348);

(statearr_54420_54485[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (19))){
var inst_54265 = (state_54366[(7)]);
var inst_54269 = cljs.core.chunk_first.call(null,inst_54265);
var inst_54270 = cljs.core.chunk_rest.call(null,inst_54265);
var inst_54271 = cljs.core.count.call(null,inst_54269);
var inst_54243 = inst_54270;
var inst_54244 = inst_54269;
var inst_54245 = inst_54271;
var inst_54246 = (0);
var state_54366__$1 = (function (){var statearr_54421 = state_54366;
(statearr_54421[(13)] = inst_54246);

(statearr_54421[(14)] = inst_54245);

(statearr_54421[(15)] = inst_54243);

(statearr_54421[(16)] = inst_54244);

return statearr_54421;
})();
var statearr_54422_54486 = state_54366__$1;
(statearr_54422_54486[(2)] = null);

(statearr_54422_54486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (11))){
var inst_54265 = (state_54366[(7)]);
var inst_54243 = (state_54366[(15)]);
var inst_54265__$1 = cljs.core.seq.call(null,inst_54243);
var state_54366__$1 = (function (){var statearr_54423 = state_54366;
(statearr_54423[(7)] = inst_54265__$1);

return statearr_54423;
})();
if(inst_54265__$1){
var statearr_54424_54487 = state_54366__$1;
(statearr_54424_54487[(1)] = (16));

} else {
var statearr_54425_54488 = state_54366__$1;
(statearr_54425_54488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (9))){
var inst_54295 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54426_54489 = state_54366__$1;
(statearr_54426_54489[(2)] = inst_54295);

(statearr_54426_54489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (5))){
var inst_54241 = cljs.core.deref.call(null,cs);
var inst_54242 = cljs.core.seq.call(null,inst_54241);
var inst_54243 = inst_54242;
var inst_54244 = null;
var inst_54245 = (0);
var inst_54246 = (0);
var state_54366__$1 = (function (){var statearr_54427 = state_54366;
(statearr_54427[(13)] = inst_54246);

(statearr_54427[(14)] = inst_54245);

(statearr_54427[(15)] = inst_54243);

(statearr_54427[(16)] = inst_54244);

return statearr_54427;
})();
var statearr_54428_54490 = state_54366__$1;
(statearr_54428_54490[(2)] = null);

(statearr_54428_54490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (14))){
var state_54366__$1 = state_54366;
var statearr_54429_54491 = state_54366__$1;
(statearr_54429_54491[(2)] = null);

(statearr_54429_54491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (45))){
var inst_54356 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54430_54492 = state_54366__$1;
(statearr_54430_54492[(2)] = inst_54356);

(statearr_54430_54492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (26))){
var inst_54298 = (state_54366[(29)]);
var inst_54352 = (state_54366[(2)]);
var inst_54353 = cljs.core.seq.call(null,inst_54298);
var state_54366__$1 = (function (){var statearr_54431 = state_54366;
(statearr_54431[(31)] = inst_54352);

return statearr_54431;
})();
if(inst_54353){
var statearr_54432_54493 = state_54366__$1;
(statearr_54432_54493[(1)] = (42));

} else {
var statearr_54433_54494 = state_54366__$1;
(statearr_54433_54494[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (16))){
var inst_54265 = (state_54366[(7)]);
var inst_54267 = cljs.core.chunked_seq_QMARK_.call(null,inst_54265);
var state_54366__$1 = state_54366;
if(inst_54267){
var statearr_54434_54495 = state_54366__$1;
(statearr_54434_54495[(1)] = (19));

} else {
var statearr_54435_54496 = state_54366__$1;
(statearr_54435_54496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (38))){
var inst_54345 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54436_54497 = state_54366__$1;
(statearr_54436_54497[(2)] = inst_54345);

(statearr_54436_54497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (30))){
var state_54366__$1 = state_54366;
var statearr_54437_54498 = state_54366__$1;
(statearr_54437_54498[(2)] = null);

(statearr_54437_54498[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (10))){
var inst_54246 = (state_54366[(13)]);
var inst_54244 = (state_54366[(16)]);
var inst_54254 = cljs.core._nth.call(null,inst_54244,inst_54246);
var inst_54255 = cljs.core.nth.call(null,inst_54254,(0),null);
var inst_54256 = cljs.core.nth.call(null,inst_54254,(1),null);
var state_54366__$1 = (function (){var statearr_54438 = state_54366;
(statearr_54438[(26)] = inst_54255);

return statearr_54438;
})();
if(cljs.core.truth_(inst_54256)){
var statearr_54439_54499 = state_54366__$1;
(statearr_54439_54499[(1)] = (13));

} else {
var statearr_54440_54500 = state_54366__$1;
(statearr_54440_54500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (18))){
var inst_54291 = (state_54366[(2)]);
var state_54366__$1 = state_54366;
var statearr_54441_54501 = state_54366__$1;
(statearr_54441_54501[(2)] = inst_54291);

(statearr_54441_54501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (42))){
var state_54366__$1 = state_54366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54366__$1,(45),dchan);
} else {
if((state_val_54367 === (37))){
var inst_54334 = (state_54366[(23)]);
var inst_54234 = (state_54366[(12)]);
var inst_54325 = (state_54366[(25)]);
var inst_54334__$1 = cljs.core.first.call(null,inst_54325);
var inst_54335 = cljs.core.async.put_BANG_.call(null,inst_54334__$1,inst_54234,done);
var state_54366__$1 = (function (){var statearr_54442 = state_54366;
(statearr_54442[(23)] = inst_54334__$1);

return statearr_54442;
})();
if(cljs.core.truth_(inst_54335)){
var statearr_54443_54502 = state_54366__$1;
(statearr_54443_54502[(1)] = (39));

} else {
var statearr_54444_54503 = state_54366__$1;
(statearr_54444_54503[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54367 === (8))){
var inst_54246 = (state_54366[(13)]);
var inst_54245 = (state_54366[(14)]);
var inst_54248 = (inst_54246 < inst_54245);
var inst_54249 = inst_54248;
var state_54366__$1 = state_54366;
if(cljs.core.truth_(inst_54249)){
var statearr_54445_54504 = state_54366__$1;
(statearr_54445_54504[(1)] = (10));

} else {
var statearr_54446_54505 = state_54366__$1;
(statearr_54446_54505[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__53534__auto__ = null;
var cljs$core$async$mult_$_state_machine__53534__auto____0 = (function (){
var statearr_54447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54447[(0)] = cljs$core$async$mult_$_state_machine__53534__auto__);

(statearr_54447[(1)] = (1));

return statearr_54447;
});
var cljs$core$async$mult_$_state_machine__53534__auto____1 = (function (state_54366){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54448){if((e54448 instanceof Object)){
var ex__53537__auto__ = e54448;
var statearr_54449_54506 = state_54366;
(statearr_54449_54506[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54507 = state_54366;
state_54366 = G__54507;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53534__auto__ = function(state_54366){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53534__auto____1.call(this,state_54366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53534__auto____0;
cljs$core$async$mult_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53534__auto____1;
return cljs$core$async$mult_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54450 = f__53629__auto__.call(null);
(statearr_54450[(6)] = c__53628__auto___54451);

return statearr_54450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__54509 = arguments.length;
switch (G__54509) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_54511 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_54511.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54512 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_54512.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54513 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54513.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54514 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_54514.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54515 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54515.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54526 = arguments.length;
var i__4737__auto___54527 = (0);
while(true){
if((i__4737__auto___54527 < len__4736__auto___54526)){
args__4742__auto__.push((arguments[i__4737__auto___54527]));

var G__54528 = (i__4737__auto___54527 + (1));
i__4737__auto___54527 = G__54528;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54520){
var map__54521 = p__54520;
var map__54521__$1 = (((((!((map__54521 == null))))?(((((map__54521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54521):map__54521);
var opts = map__54521__$1;
var statearr_54523_54529 = state;
(statearr_54523_54529[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_54524_54530 = state;
(statearr_54524_54530[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_54525_54531 = state;
(statearr_54525_54531[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54516){
var G__54517 = cljs.core.first.call(null,seq54516);
var seq54516__$1 = cljs.core.next.call(null,seq54516);
var G__54518 = cljs.core.first.call(null,seq54516__$1);
var seq54516__$2 = cljs.core.next.call(null,seq54516__$1);
var G__54519 = cljs.core.first.call(null,seq54516__$2);
var seq54516__$3 = cljs.core.next.call(null,seq54516__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54517,G__54518,G__54519,seq54516__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54532 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54533){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54533 = meta54533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54534,meta54533__$1){
var self__ = this;
var _54534__$1 = this;
return (new cljs.core.async.t_cljs$core$async54532(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54533__$1));
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54534){
var self__ = this;
var _54534__$1 = this;
return self__.meta54533;
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async54532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async54532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54533","meta54533",-1912287892,null)], null);
}));

(cljs.core.async.t_cljs$core$async54532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54532");

(cljs.core.async.t_cljs$core$async54532.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async54532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54532.
 */
cljs.core.async.__GT_t_cljs$core$async54532 = (function cljs$core$async$mix_$___GT_t_cljs$core$async54532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54533){
return (new cljs.core.async.t_cljs$core$async54532(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta54533));
});

}

return (new cljs.core.async.t_cljs$core$async54532(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53628__auto___54696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54636){
var state_val_54637 = (state_54636[(1)]);
if((state_val_54637 === (7))){
var inst_54551 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
var statearr_54638_54697 = state_54636__$1;
(statearr_54638_54697[(2)] = inst_54551);

(statearr_54638_54697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (20))){
var inst_54563 = (state_54636[(7)]);
var state_54636__$1 = state_54636;
var statearr_54639_54698 = state_54636__$1;
(statearr_54639_54698[(2)] = inst_54563);

(statearr_54639_54698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (27))){
var state_54636__$1 = state_54636;
var statearr_54640_54699 = state_54636__$1;
(statearr_54640_54699[(2)] = null);

(statearr_54640_54699[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (1))){
var inst_54538 = (state_54636[(8)]);
var inst_54538__$1 = calc_state.call(null);
var inst_54540 = (inst_54538__$1 == null);
var inst_54541 = cljs.core.not.call(null,inst_54540);
var state_54636__$1 = (function (){var statearr_54641 = state_54636;
(statearr_54641[(8)] = inst_54538__$1);

return statearr_54641;
})();
if(inst_54541){
var statearr_54642_54700 = state_54636__$1;
(statearr_54642_54700[(1)] = (2));

} else {
var statearr_54643_54701 = state_54636__$1;
(statearr_54643_54701[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (24))){
var inst_54596 = (state_54636[(9)]);
var inst_54587 = (state_54636[(10)]);
var inst_54610 = (state_54636[(11)]);
var inst_54610__$1 = inst_54587.call(null,inst_54596);
var state_54636__$1 = (function (){var statearr_54644 = state_54636;
(statearr_54644[(11)] = inst_54610__$1);

return statearr_54644;
})();
if(cljs.core.truth_(inst_54610__$1)){
var statearr_54645_54702 = state_54636__$1;
(statearr_54645_54702[(1)] = (29));

} else {
var statearr_54646_54703 = state_54636__$1;
(statearr_54646_54703[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (4))){
var inst_54554 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54554)){
var statearr_54647_54704 = state_54636__$1;
(statearr_54647_54704[(1)] = (8));

} else {
var statearr_54648_54705 = state_54636__$1;
(statearr_54648_54705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (15))){
var inst_54581 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54581)){
var statearr_54649_54706 = state_54636__$1;
(statearr_54649_54706[(1)] = (19));

} else {
var statearr_54650_54707 = state_54636__$1;
(statearr_54650_54707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (21))){
var inst_54586 = (state_54636[(12)]);
var inst_54586__$1 = (state_54636[(2)]);
var inst_54587 = cljs.core.get.call(null,inst_54586__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54588 = cljs.core.get.call(null,inst_54586__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54589 = cljs.core.get.call(null,inst_54586__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_54636__$1 = (function (){var statearr_54651 = state_54636;
(statearr_54651[(12)] = inst_54586__$1);

(statearr_54651[(10)] = inst_54587);

(statearr_54651[(13)] = inst_54588);

return statearr_54651;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_54636__$1,(22),inst_54589);
} else {
if((state_val_54637 === (31))){
var inst_54618 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54618)){
var statearr_54652_54708 = state_54636__$1;
(statearr_54652_54708[(1)] = (32));

} else {
var statearr_54653_54709 = state_54636__$1;
(statearr_54653_54709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (32))){
var inst_54595 = (state_54636[(14)]);
var state_54636__$1 = state_54636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54636__$1,(35),out,inst_54595);
} else {
if((state_val_54637 === (33))){
var inst_54586 = (state_54636[(12)]);
var inst_54563 = inst_54586;
var state_54636__$1 = (function (){var statearr_54654 = state_54636;
(statearr_54654[(7)] = inst_54563);

return statearr_54654;
})();
var statearr_54655_54710 = state_54636__$1;
(statearr_54655_54710[(2)] = null);

(statearr_54655_54710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (13))){
var inst_54563 = (state_54636[(7)]);
var inst_54570 = inst_54563.cljs$lang$protocol_mask$partition0$;
var inst_54571 = (inst_54570 & (64));
var inst_54572 = inst_54563.cljs$core$ISeq$;
var inst_54573 = (cljs.core.PROTOCOL_SENTINEL === inst_54572);
var inst_54574 = ((inst_54571) || (inst_54573));
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54574)){
var statearr_54656_54711 = state_54636__$1;
(statearr_54656_54711[(1)] = (16));

} else {
var statearr_54657_54712 = state_54636__$1;
(statearr_54657_54712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (22))){
var inst_54596 = (state_54636[(9)]);
var inst_54595 = (state_54636[(14)]);
var inst_54594 = (state_54636[(2)]);
var inst_54595__$1 = cljs.core.nth.call(null,inst_54594,(0),null);
var inst_54596__$1 = cljs.core.nth.call(null,inst_54594,(1),null);
var inst_54597 = (inst_54595__$1 == null);
var inst_54598 = cljs.core._EQ_.call(null,inst_54596__$1,change);
var inst_54599 = ((inst_54597) || (inst_54598));
var state_54636__$1 = (function (){var statearr_54658 = state_54636;
(statearr_54658[(9)] = inst_54596__$1);

(statearr_54658[(14)] = inst_54595__$1);

return statearr_54658;
})();
if(cljs.core.truth_(inst_54599)){
var statearr_54659_54713 = state_54636__$1;
(statearr_54659_54713[(1)] = (23));

} else {
var statearr_54660_54714 = state_54636__$1;
(statearr_54660_54714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (36))){
var inst_54586 = (state_54636[(12)]);
var inst_54563 = inst_54586;
var state_54636__$1 = (function (){var statearr_54661 = state_54636;
(statearr_54661[(7)] = inst_54563);

return statearr_54661;
})();
var statearr_54662_54715 = state_54636__$1;
(statearr_54662_54715[(2)] = null);

(statearr_54662_54715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (29))){
var inst_54610 = (state_54636[(11)]);
var state_54636__$1 = state_54636;
var statearr_54663_54716 = state_54636__$1;
(statearr_54663_54716[(2)] = inst_54610);

(statearr_54663_54716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (6))){
var state_54636__$1 = state_54636;
var statearr_54664_54717 = state_54636__$1;
(statearr_54664_54717[(2)] = false);

(statearr_54664_54717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (28))){
var inst_54606 = (state_54636[(2)]);
var inst_54607 = calc_state.call(null);
var inst_54563 = inst_54607;
var state_54636__$1 = (function (){var statearr_54665 = state_54636;
(statearr_54665[(15)] = inst_54606);

(statearr_54665[(7)] = inst_54563);

return statearr_54665;
})();
var statearr_54666_54718 = state_54636__$1;
(statearr_54666_54718[(2)] = null);

(statearr_54666_54718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (25))){
var inst_54632 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
var statearr_54667_54719 = state_54636__$1;
(statearr_54667_54719[(2)] = inst_54632);

(statearr_54667_54719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (34))){
var inst_54630 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
var statearr_54668_54720 = state_54636__$1;
(statearr_54668_54720[(2)] = inst_54630);

(statearr_54668_54720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (17))){
var state_54636__$1 = state_54636;
var statearr_54669_54721 = state_54636__$1;
(statearr_54669_54721[(2)] = false);

(statearr_54669_54721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (3))){
var state_54636__$1 = state_54636;
var statearr_54670_54722 = state_54636__$1;
(statearr_54670_54722[(2)] = false);

(statearr_54670_54722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (12))){
var inst_54634 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54636__$1,inst_54634);
} else {
if((state_val_54637 === (2))){
var inst_54538 = (state_54636[(8)]);
var inst_54543 = inst_54538.cljs$lang$protocol_mask$partition0$;
var inst_54544 = (inst_54543 & (64));
var inst_54545 = inst_54538.cljs$core$ISeq$;
var inst_54546 = (cljs.core.PROTOCOL_SENTINEL === inst_54545);
var inst_54547 = ((inst_54544) || (inst_54546));
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54547)){
var statearr_54671_54723 = state_54636__$1;
(statearr_54671_54723[(1)] = (5));

} else {
var statearr_54672_54724 = state_54636__$1;
(statearr_54672_54724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (23))){
var inst_54595 = (state_54636[(14)]);
var inst_54601 = (inst_54595 == null);
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54601)){
var statearr_54673_54725 = state_54636__$1;
(statearr_54673_54725[(1)] = (26));

} else {
var statearr_54674_54726 = state_54636__$1;
(statearr_54674_54726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (35))){
var inst_54621 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
if(cljs.core.truth_(inst_54621)){
var statearr_54675_54727 = state_54636__$1;
(statearr_54675_54727[(1)] = (36));

} else {
var statearr_54676_54728 = state_54636__$1;
(statearr_54676_54728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (19))){
var inst_54563 = (state_54636[(7)]);
var inst_54583 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54563);
var state_54636__$1 = state_54636;
var statearr_54677_54729 = state_54636__$1;
(statearr_54677_54729[(2)] = inst_54583);

(statearr_54677_54729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (11))){
var inst_54563 = (state_54636[(7)]);
var inst_54567 = (inst_54563 == null);
var inst_54568 = cljs.core.not.call(null,inst_54567);
var state_54636__$1 = state_54636;
if(inst_54568){
var statearr_54678_54730 = state_54636__$1;
(statearr_54678_54730[(1)] = (13));

} else {
var statearr_54679_54731 = state_54636__$1;
(statearr_54679_54731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (9))){
var inst_54538 = (state_54636[(8)]);
var state_54636__$1 = state_54636;
var statearr_54680_54732 = state_54636__$1;
(statearr_54680_54732[(2)] = inst_54538);

(statearr_54680_54732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (5))){
var state_54636__$1 = state_54636;
var statearr_54681_54733 = state_54636__$1;
(statearr_54681_54733[(2)] = true);

(statearr_54681_54733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (14))){
var state_54636__$1 = state_54636;
var statearr_54682_54734 = state_54636__$1;
(statearr_54682_54734[(2)] = false);

(statearr_54682_54734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (26))){
var inst_54596 = (state_54636[(9)]);
var inst_54603 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_54596);
var state_54636__$1 = state_54636;
var statearr_54683_54735 = state_54636__$1;
(statearr_54683_54735[(2)] = inst_54603);

(statearr_54683_54735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (16))){
var state_54636__$1 = state_54636;
var statearr_54684_54736 = state_54636__$1;
(statearr_54684_54736[(2)] = true);

(statearr_54684_54736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (38))){
var inst_54626 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
var statearr_54685_54737 = state_54636__$1;
(statearr_54685_54737[(2)] = inst_54626);

(statearr_54685_54737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (30))){
var inst_54596 = (state_54636[(9)]);
var inst_54587 = (state_54636[(10)]);
var inst_54588 = (state_54636[(13)]);
var inst_54613 = cljs.core.empty_QMARK_.call(null,inst_54587);
var inst_54614 = inst_54588.call(null,inst_54596);
var inst_54615 = cljs.core.not.call(null,inst_54614);
var inst_54616 = ((inst_54613) && (inst_54615));
var state_54636__$1 = state_54636;
var statearr_54686_54738 = state_54636__$1;
(statearr_54686_54738[(2)] = inst_54616);

(statearr_54686_54738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (10))){
var inst_54538 = (state_54636[(8)]);
var inst_54559 = (state_54636[(2)]);
var inst_54560 = cljs.core.get.call(null,inst_54559,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54561 = cljs.core.get.call(null,inst_54559,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54562 = cljs.core.get.call(null,inst_54559,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54563 = inst_54538;
var state_54636__$1 = (function (){var statearr_54687 = state_54636;
(statearr_54687[(7)] = inst_54563);

(statearr_54687[(16)] = inst_54561);

(statearr_54687[(17)] = inst_54562);

(statearr_54687[(18)] = inst_54560);

return statearr_54687;
})();
var statearr_54688_54739 = state_54636__$1;
(statearr_54688_54739[(2)] = null);

(statearr_54688_54739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (18))){
var inst_54578 = (state_54636[(2)]);
var state_54636__$1 = state_54636;
var statearr_54689_54740 = state_54636__$1;
(statearr_54689_54740[(2)] = inst_54578);

(statearr_54689_54740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (37))){
var state_54636__$1 = state_54636;
var statearr_54690_54741 = state_54636__$1;
(statearr_54690_54741[(2)] = null);

(statearr_54690_54741[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54637 === (8))){
var inst_54538 = (state_54636[(8)]);
var inst_54556 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54538);
var state_54636__$1 = state_54636;
var statearr_54691_54742 = state_54636__$1;
(statearr_54691_54742[(2)] = inst_54556);

(statearr_54691_54742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__53534__auto__ = null;
var cljs$core$async$mix_$_state_machine__53534__auto____0 = (function (){
var statearr_54692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54692[(0)] = cljs$core$async$mix_$_state_machine__53534__auto__);

(statearr_54692[(1)] = (1));

return statearr_54692;
});
var cljs$core$async$mix_$_state_machine__53534__auto____1 = (function (state_54636){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54693){if((e54693 instanceof Object)){
var ex__53537__auto__ = e54693;
var statearr_54694_54743 = state_54636;
(statearr_54694_54743[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54744 = state_54636;
state_54636 = G__54744;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53534__auto__ = function(state_54636){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53534__auto____1.call(this,state_54636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53534__auto____0;
cljs$core$async$mix_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53534__auto____1;
return cljs$core$async$mix_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54695 = f__53629__auto__.call(null);
(statearr_54695[(6)] = c__53628__auto___54696);

return statearr_54695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_54747 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_54747.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54748 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_54748.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54749 = (function() {
var G__54750 = null;
var G__54750__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__54750__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__54750 = function(p,v){
switch(arguments.length){
case 1:
return G__54750__1.call(this,p);
case 2:
return G__54750__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54750.cljs$core$IFn$_invoke$arity$1 = G__54750__1;
G__54750.cljs$core$IFn$_invoke$arity$2 = G__54750__2;
return G__54750;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__54746 = arguments.length;
switch (G__54746) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54749.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54749.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__54754 = arguments.length;
switch (G__54754) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__54752_SHARP_){
if(cljs.core.truth_(p1__54752_SHARP_.call(null,topic))){
return p1__54752_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__54752_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54756 = meta54756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54757,meta54756__$1){
var self__ = this;
var _54757__$1 = this;
return (new cljs.core.async.t_cljs$core$async54755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54756__$1));
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54757){
var self__ = this;
var _54757__$1 = this;
return self__.meta54756;
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async54755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async54755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54756","meta54756",-100037894,null)], null);
}));

(cljs.core.async.t_cljs$core$async54755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54755");

(cljs.core.async.t_cljs$core$async54755.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async54755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54755.
 */
cljs.core.async.__GT_t_cljs$core$async54755 = (function cljs$core$async$__GT_t_cljs$core$async54755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54756){
return (new cljs.core.async.t_cljs$core$async54755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54756));
});

}

return (new cljs.core.async.t_cljs$core$async54755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53628__auto___54875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54829){
var state_val_54830 = (state_54829[(1)]);
if((state_val_54830 === (7))){
var inst_54825 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54831_54876 = state_54829__$1;
(statearr_54831_54876[(2)] = inst_54825);

(statearr_54831_54876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (20))){
var state_54829__$1 = state_54829;
var statearr_54832_54877 = state_54829__$1;
(statearr_54832_54877[(2)] = null);

(statearr_54832_54877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (1))){
var state_54829__$1 = state_54829;
var statearr_54833_54878 = state_54829__$1;
(statearr_54833_54878[(2)] = null);

(statearr_54833_54878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (24))){
var inst_54808 = (state_54829[(7)]);
var inst_54817 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54808);
var state_54829__$1 = state_54829;
var statearr_54834_54879 = state_54829__$1;
(statearr_54834_54879[(2)] = inst_54817);

(statearr_54834_54879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (4))){
var inst_54760 = (state_54829[(8)]);
var inst_54760__$1 = (state_54829[(2)]);
var inst_54761 = (inst_54760__$1 == null);
var state_54829__$1 = (function (){var statearr_54835 = state_54829;
(statearr_54835[(8)] = inst_54760__$1);

return statearr_54835;
})();
if(cljs.core.truth_(inst_54761)){
var statearr_54836_54880 = state_54829__$1;
(statearr_54836_54880[(1)] = (5));

} else {
var statearr_54837_54881 = state_54829__$1;
(statearr_54837_54881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (15))){
var inst_54802 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54838_54882 = state_54829__$1;
(statearr_54838_54882[(2)] = inst_54802);

(statearr_54838_54882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (21))){
var inst_54822 = (state_54829[(2)]);
var state_54829__$1 = (function (){var statearr_54839 = state_54829;
(statearr_54839[(9)] = inst_54822);

return statearr_54839;
})();
var statearr_54840_54883 = state_54829__$1;
(statearr_54840_54883[(2)] = null);

(statearr_54840_54883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (13))){
var inst_54784 = (state_54829[(10)]);
var inst_54786 = cljs.core.chunked_seq_QMARK_.call(null,inst_54784);
var state_54829__$1 = state_54829;
if(inst_54786){
var statearr_54841_54884 = state_54829__$1;
(statearr_54841_54884[(1)] = (16));

} else {
var statearr_54842_54885 = state_54829__$1;
(statearr_54842_54885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (22))){
var inst_54814 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
if(cljs.core.truth_(inst_54814)){
var statearr_54843_54886 = state_54829__$1;
(statearr_54843_54886[(1)] = (23));

} else {
var statearr_54844_54887 = state_54829__$1;
(statearr_54844_54887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (6))){
var inst_54810 = (state_54829[(11)]);
var inst_54808 = (state_54829[(7)]);
var inst_54760 = (state_54829[(8)]);
var inst_54808__$1 = topic_fn.call(null,inst_54760);
var inst_54809 = cljs.core.deref.call(null,mults);
var inst_54810__$1 = cljs.core.get.call(null,inst_54809,inst_54808__$1);
var state_54829__$1 = (function (){var statearr_54845 = state_54829;
(statearr_54845[(11)] = inst_54810__$1);

(statearr_54845[(7)] = inst_54808__$1);

return statearr_54845;
})();
if(cljs.core.truth_(inst_54810__$1)){
var statearr_54846_54888 = state_54829__$1;
(statearr_54846_54888[(1)] = (19));

} else {
var statearr_54847_54889 = state_54829__$1;
(statearr_54847_54889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (25))){
var inst_54819 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54848_54890 = state_54829__$1;
(statearr_54848_54890[(2)] = inst_54819);

(statearr_54848_54890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (17))){
var inst_54784 = (state_54829[(10)]);
var inst_54793 = cljs.core.first.call(null,inst_54784);
var inst_54794 = cljs.core.async.muxch_STAR_.call(null,inst_54793);
var inst_54795 = cljs.core.async.close_BANG_.call(null,inst_54794);
var inst_54796 = cljs.core.next.call(null,inst_54784);
var inst_54770 = inst_54796;
var inst_54771 = null;
var inst_54772 = (0);
var inst_54773 = (0);
var state_54829__$1 = (function (){var statearr_54849 = state_54829;
(statearr_54849[(12)] = inst_54795);

(statearr_54849[(13)] = inst_54772);

(statearr_54849[(14)] = inst_54773);

(statearr_54849[(15)] = inst_54770);

(statearr_54849[(16)] = inst_54771);

return statearr_54849;
})();
var statearr_54850_54891 = state_54829__$1;
(statearr_54850_54891[(2)] = null);

(statearr_54850_54891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (3))){
var inst_54827 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54829__$1,inst_54827);
} else {
if((state_val_54830 === (12))){
var inst_54804 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54851_54892 = state_54829__$1;
(statearr_54851_54892[(2)] = inst_54804);

(statearr_54851_54892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (2))){
var state_54829__$1 = state_54829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54829__$1,(4),ch);
} else {
if((state_val_54830 === (23))){
var state_54829__$1 = state_54829;
var statearr_54852_54893 = state_54829__$1;
(statearr_54852_54893[(2)] = null);

(statearr_54852_54893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (19))){
var inst_54810 = (state_54829[(11)]);
var inst_54760 = (state_54829[(8)]);
var inst_54812 = cljs.core.async.muxch_STAR_.call(null,inst_54810);
var state_54829__$1 = state_54829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54829__$1,(22),inst_54812,inst_54760);
} else {
if((state_val_54830 === (11))){
var inst_54784 = (state_54829[(10)]);
var inst_54770 = (state_54829[(15)]);
var inst_54784__$1 = cljs.core.seq.call(null,inst_54770);
var state_54829__$1 = (function (){var statearr_54853 = state_54829;
(statearr_54853[(10)] = inst_54784__$1);

return statearr_54853;
})();
if(inst_54784__$1){
var statearr_54854_54894 = state_54829__$1;
(statearr_54854_54894[(1)] = (13));

} else {
var statearr_54855_54895 = state_54829__$1;
(statearr_54855_54895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (9))){
var inst_54806 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54856_54896 = state_54829__$1;
(statearr_54856_54896[(2)] = inst_54806);

(statearr_54856_54896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (5))){
var inst_54767 = cljs.core.deref.call(null,mults);
var inst_54768 = cljs.core.vals.call(null,inst_54767);
var inst_54769 = cljs.core.seq.call(null,inst_54768);
var inst_54770 = inst_54769;
var inst_54771 = null;
var inst_54772 = (0);
var inst_54773 = (0);
var state_54829__$1 = (function (){var statearr_54857 = state_54829;
(statearr_54857[(13)] = inst_54772);

(statearr_54857[(14)] = inst_54773);

(statearr_54857[(15)] = inst_54770);

(statearr_54857[(16)] = inst_54771);

return statearr_54857;
})();
var statearr_54858_54897 = state_54829__$1;
(statearr_54858_54897[(2)] = null);

(statearr_54858_54897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (14))){
var state_54829__$1 = state_54829;
var statearr_54862_54898 = state_54829__$1;
(statearr_54862_54898[(2)] = null);

(statearr_54862_54898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (16))){
var inst_54784 = (state_54829[(10)]);
var inst_54788 = cljs.core.chunk_first.call(null,inst_54784);
var inst_54789 = cljs.core.chunk_rest.call(null,inst_54784);
var inst_54790 = cljs.core.count.call(null,inst_54788);
var inst_54770 = inst_54789;
var inst_54771 = inst_54788;
var inst_54772 = inst_54790;
var inst_54773 = (0);
var state_54829__$1 = (function (){var statearr_54863 = state_54829;
(statearr_54863[(13)] = inst_54772);

(statearr_54863[(14)] = inst_54773);

(statearr_54863[(15)] = inst_54770);

(statearr_54863[(16)] = inst_54771);

return statearr_54863;
})();
var statearr_54864_54899 = state_54829__$1;
(statearr_54864_54899[(2)] = null);

(statearr_54864_54899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (10))){
var inst_54772 = (state_54829[(13)]);
var inst_54773 = (state_54829[(14)]);
var inst_54770 = (state_54829[(15)]);
var inst_54771 = (state_54829[(16)]);
var inst_54778 = cljs.core._nth.call(null,inst_54771,inst_54773);
var inst_54779 = cljs.core.async.muxch_STAR_.call(null,inst_54778);
var inst_54780 = cljs.core.async.close_BANG_.call(null,inst_54779);
var inst_54781 = (inst_54773 + (1));
var tmp54859 = inst_54772;
var tmp54860 = inst_54770;
var tmp54861 = inst_54771;
var inst_54770__$1 = tmp54860;
var inst_54771__$1 = tmp54861;
var inst_54772__$1 = tmp54859;
var inst_54773__$1 = inst_54781;
var state_54829__$1 = (function (){var statearr_54865 = state_54829;
(statearr_54865[(17)] = inst_54780);

(statearr_54865[(13)] = inst_54772__$1);

(statearr_54865[(14)] = inst_54773__$1);

(statearr_54865[(15)] = inst_54770__$1);

(statearr_54865[(16)] = inst_54771__$1);

return statearr_54865;
})();
var statearr_54866_54900 = state_54829__$1;
(statearr_54866_54900[(2)] = null);

(statearr_54866_54900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (18))){
var inst_54799 = (state_54829[(2)]);
var state_54829__$1 = state_54829;
var statearr_54867_54901 = state_54829__$1;
(statearr_54867_54901[(2)] = inst_54799);

(statearr_54867_54901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54830 === (8))){
var inst_54772 = (state_54829[(13)]);
var inst_54773 = (state_54829[(14)]);
var inst_54775 = (inst_54773 < inst_54772);
var inst_54776 = inst_54775;
var state_54829__$1 = state_54829;
if(cljs.core.truth_(inst_54776)){
var statearr_54868_54902 = state_54829__$1;
(statearr_54868_54902[(1)] = (10));

} else {
var statearr_54869_54903 = state_54829__$1;
(statearr_54869_54903[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_54870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54870[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_54870[(1)] = (1));

return statearr_54870;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_54829){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54871){if((e54871 instanceof Object)){
var ex__53537__auto__ = e54871;
var statearr_54872_54904 = state_54829;
(statearr_54872_54904[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54905 = state_54829;
state_54829 = G__54905;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_54829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_54829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54873 = f__53629__auto__.call(null);
(statearr_54873[(6)] = c__53628__auto___54875);

return statearr_54873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__54907 = arguments.length;
switch (G__54907) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__54910 = arguments.length;
switch (G__54910) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__54913 = arguments.length;
switch (G__54913) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__53628__auto___54980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_54952){
var state_val_54953 = (state_54952[(1)]);
if((state_val_54953 === (7))){
var state_54952__$1 = state_54952;
var statearr_54954_54981 = state_54952__$1;
(statearr_54954_54981[(2)] = null);

(statearr_54954_54981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (1))){
var state_54952__$1 = state_54952;
var statearr_54955_54982 = state_54952__$1;
(statearr_54955_54982[(2)] = null);

(statearr_54955_54982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (4))){
var inst_54916 = (state_54952[(7)]);
var inst_54918 = (inst_54916 < cnt);
var state_54952__$1 = state_54952;
if(cljs.core.truth_(inst_54918)){
var statearr_54956_54983 = state_54952__$1;
(statearr_54956_54983[(1)] = (6));

} else {
var statearr_54957_54984 = state_54952__$1;
(statearr_54957_54984[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (15))){
var inst_54948 = (state_54952[(2)]);
var state_54952__$1 = state_54952;
var statearr_54958_54985 = state_54952__$1;
(statearr_54958_54985[(2)] = inst_54948);

(statearr_54958_54985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (13))){
var inst_54941 = cljs.core.async.close_BANG_.call(null,out);
var state_54952__$1 = state_54952;
var statearr_54959_54986 = state_54952__$1;
(statearr_54959_54986[(2)] = inst_54941);

(statearr_54959_54986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (6))){
var state_54952__$1 = state_54952;
var statearr_54960_54987 = state_54952__$1;
(statearr_54960_54987[(2)] = null);

(statearr_54960_54987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (3))){
var inst_54950 = (state_54952[(2)]);
var state_54952__$1 = state_54952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54952__$1,inst_54950);
} else {
if((state_val_54953 === (12))){
var inst_54938 = (state_54952[(8)]);
var inst_54938__$1 = (state_54952[(2)]);
var inst_54939 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54938__$1);
var state_54952__$1 = (function (){var statearr_54961 = state_54952;
(statearr_54961[(8)] = inst_54938__$1);

return statearr_54961;
})();
if(cljs.core.truth_(inst_54939)){
var statearr_54962_54988 = state_54952__$1;
(statearr_54962_54988[(1)] = (13));

} else {
var statearr_54963_54989 = state_54952__$1;
(statearr_54963_54989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (2))){
var inst_54915 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_54916 = (0);
var state_54952__$1 = (function (){var statearr_54964 = state_54952;
(statearr_54964[(7)] = inst_54916);

(statearr_54964[(9)] = inst_54915);

return statearr_54964;
})();
var statearr_54965_54990 = state_54952__$1;
(statearr_54965_54990[(2)] = null);

(statearr_54965_54990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (11))){
var inst_54916 = (state_54952[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54952,(10),Object,null,(9));
var inst_54925 = chs__$1.call(null,inst_54916);
var inst_54926 = done.call(null,inst_54916);
var inst_54927 = cljs.core.async.take_BANG_.call(null,inst_54925,inst_54926);
var state_54952__$1 = state_54952;
var statearr_54966_54991 = state_54952__$1;
(statearr_54966_54991[(2)] = inst_54927);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (9))){
var inst_54916 = (state_54952[(7)]);
var inst_54929 = (state_54952[(2)]);
var inst_54930 = (inst_54916 + (1));
var inst_54916__$1 = inst_54930;
var state_54952__$1 = (function (){var statearr_54967 = state_54952;
(statearr_54967[(7)] = inst_54916__$1);

(statearr_54967[(10)] = inst_54929);

return statearr_54967;
})();
var statearr_54968_54992 = state_54952__$1;
(statearr_54968_54992[(2)] = null);

(statearr_54968_54992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (5))){
var inst_54936 = (state_54952[(2)]);
var state_54952__$1 = (function (){var statearr_54969 = state_54952;
(statearr_54969[(11)] = inst_54936);

return statearr_54969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54952__$1,(12),dchan);
} else {
if((state_val_54953 === (14))){
var inst_54938 = (state_54952[(8)]);
var inst_54943 = cljs.core.apply.call(null,f,inst_54938);
var state_54952__$1 = state_54952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54952__$1,(16),out,inst_54943);
} else {
if((state_val_54953 === (16))){
var inst_54945 = (state_54952[(2)]);
var state_54952__$1 = (function (){var statearr_54970 = state_54952;
(statearr_54970[(12)] = inst_54945);

return statearr_54970;
})();
var statearr_54971_54993 = state_54952__$1;
(statearr_54971_54993[(2)] = null);

(statearr_54971_54993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (10))){
var inst_54920 = (state_54952[(2)]);
var inst_54921 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_54952__$1 = (function (){var statearr_54972 = state_54952;
(statearr_54972[(13)] = inst_54920);

return statearr_54972;
})();
var statearr_54973_54994 = state_54952__$1;
(statearr_54973_54994[(2)] = inst_54921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54953 === (8))){
var inst_54934 = (state_54952[(2)]);
var state_54952__$1 = state_54952;
var statearr_54974_54995 = state_54952__$1;
(statearr_54974_54995[(2)] = inst_54934);

(statearr_54974_54995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_54975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54975[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_54975[(1)] = (1));

return statearr_54975;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_54952){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_54952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e54976){if((e54976 instanceof Object)){
var ex__53537__auto__ = e54976;
var statearr_54977_54996 = state_54952;
(statearr_54977_54996[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54997 = state_54952;
state_54952 = G__54997;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_54952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_54952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_54978 = f__53629__auto__.call(null);
(statearr_54978[(6)] = c__53628__auto___54980);

return statearr_54978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__55000 = arguments.length;
switch (G__55000) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55032){
var state_val_55033 = (state_55032[(1)]);
if((state_val_55033 === (7))){
var inst_55012 = (state_55032[(7)]);
var inst_55011 = (state_55032[(8)]);
var inst_55011__$1 = (state_55032[(2)]);
var inst_55012__$1 = cljs.core.nth.call(null,inst_55011__$1,(0),null);
var inst_55013 = cljs.core.nth.call(null,inst_55011__$1,(1),null);
var inst_55014 = (inst_55012__$1 == null);
var state_55032__$1 = (function (){var statearr_55034 = state_55032;
(statearr_55034[(7)] = inst_55012__$1);

(statearr_55034[(8)] = inst_55011__$1);

(statearr_55034[(9)] = inst_55013);

return statearr_55034;
})();
if(cljs.core.truth_(inst_55014)){
var statearr_55035_55055 = state_55032__$1;
(statearr_55035_55055[(1)] = (8));

} else {
var statearr_55036_55056 = state_55032__$1;
(statearr_55036_55056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (1))){
var inst_55001 = cljs.core.vec.call(null,chs);
var inst_55002 = inst_55001;
var state_55032__$1 = (function (){var statearr_55037 = state_55032;
(statearr_55037[(10)] = inst_55002);

return statearr_55037;
})();
var statearr_55038_55057 = state_55032__$1;
(statearr_55038_55057[(2)] = null);

(statearr_55038_55057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (4))){
var inst_55002 = (state_55032[(10)]);
var state_55032__$1 = state_55032;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55032__$1,(7),inst_55002);
} else {
if((state_val_55033 === (6))){
var inst_55028 = (state_55032[(2)]);
var state_55032__$1 = state_55032;
var statearr_55039_55058 = state_55032__$1;
(statearr_55039_55058[(2)] = inst_55028);

(statearr_55039_55058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (3))){
var inst_55030 = (state_55032[(2)]);
var state_55032__$1 = state_55032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55032__$1,inst_55030);
} else {
if((state_val_55033 === (2))){
var inst_55002 = (state_55032[(10)]);
var inst_55004 = cljs.core.count.call(null,inst_55002);
var inst_55005 = (inst_55004 > (0));
var state_55032__$1 = state_55032;
if(cljs.core.truth_(inst_55005)){
var statearr_55041_55059 = state_55032__$1;
(statearr_55041_55059[(1)] = (4));

} else {
var statearr_55042_55060 = state_55032__$1;
(statearr_55042_55060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (11))){
var inst_55002 = (state_55032[(10)]);
var inst_55021 = (state_55032[(2)]);
var tmp55040 = inst_55002;
var inst_55002__$1 = tmp55040;
var state_55032__$1 = (function (){var statearr_55043 = state_55032;
(statearr_55043[(11)] = inst_55021);

(statearr_55043[(10)] = inst_55002__$1);

return statearr_55043;
})();
var statearr_55044_55061 = state_55032__$1;
(statearr_55044_55061[(2)] = null);

(statearr_55044_55061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (9))){
var inst_55012 = (state_55032[(7)]);
var state_55032__$1 = state_55032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55032__$1,(11),out,inst_55012);
} else {
if((state_val_55033 === (5))){
var inst_55026 = cljs.core.async.close_BANG_.call(null,out);
var state_55032__$1 = state_55032;
var statearr_55045_55062 = state_55032__$1;
(statearr_55045_55062[(2)] = inst_55026);

(statearr_55045_55062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (10))){
var inst_55024 = (state_55032[(2)]);
var state_55032__$1 = state_55032;
var statearr_55046_55063 = state_55032__$1;
(statearr_55046_55063[(2)] = inst_55024);

(statearr_55046_55063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55033 === (8))){
var inst_55002 = (state_55032[(10)]);
var inst_55012 = (state_55032[(7)]);
var inst_55011 = (state_55032[(8)]);
var inst_55013 = (state_55032[(9)]);
var inst_55016 = (function (){var cs = inst_55002;
var vec__55007 = inst_55011;
var v = inst_55012;
var c = inst_55013;
return (function (p1__54998_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__54998_SHARP_);
});
})();
var inst_55017 = cljs.core.filterv.call(null,inst_55016,inst_55002);
var inst_55002__$1 = inst_55017;
var state_55032__$1 = (function (){var statearr_55047 = state_55032;
(statearr_55047[(10)] = inst_55002__$1);

return statearr_55047;
})();
var statearr_55048_55064 = state_55032__$1;
(statearr_55048_55064[(2)] = null);

(statearr_55048_55064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55049[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55049[(1)] = (1));

return statearr_55049;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55032){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55050){if((e55050 instanceof Object)){
var ex__53537__auto__ = e55050;
var statearr_55051_55065 = state_55032;
(statearr_55051_55065[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55066 = state_55032;
state_55032 = G__55066;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55052 = f__53629__auto__.call(null);
(statearr_55052[(6)] = c__53628__auto___55054);

return statearr_55052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__55068 = arguments.length;
switch (G__55068) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55092){
var state_val_55093 = (state_55092[(1)]);
if((state_val_55093 === (7))){
var inst_55074 = (state_55092[(7)]);
var inst_55074__$1 = (state_55092[(2)]);
var inst_55075 = (inst_55074__$1 == null);
var inst_55076 = cljs.core.not.call(null,inst_55075);
var state_55092__$1 = (function (){var statearr_55094 = state_55092;
(statearr_55094[(7)] = inst_55074__$1);

return statearr_55094;
})();
if(inst_55076){
var statearr_55095_55114 = state_55092__$1;
(statearr_55095_55114[(1)] = (8));

} else {
var statearr_55096_55115 = state_55092__$1;
(statearr_55096_55115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (1))){
var inst_55069 = (0);
var state_55092__$1 = (function (){var statearr_55097 = state_55092;
(statearr_55097[(8)] = inst_55069);

return statearr_55097;
})();
var statearr_55098_55116 = state_55092__$1;
(statearr_55098_55116[(2)] = null);

(statearr_55098_55116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (4))){
var state_55092__$1 = state_55092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55092__$1,(7),ch);
} else {
if((state_val_55093 === (6))){
var inst_55087 = (state_55092[(2)]);
var state_55092__$1 = state_55092;
var statearr_55099_55117 = state_55092__$1;
(statearr_55099_55117[(2)] = inst_55087);

(statearr_55099_55117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (3))){
var inst_55089 = (state_55092[(2)]);
var inst_55090 = cljs.core.async.close_BANG_.call(null,out);
var state_55092__$1 = (function (){var statearr_55100 = state_55092;
(statearr_55100[(9)] = inst_55089);

return statearr_55100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55092__$1,inst_55090);
} else {
if((state_val_55093 === (2))){
var inst_55069 = (state_55092[(8)]);
var inst_55071 = (inst_55069 < n);
var state_55092__$1 = state_55092;
if(cljs.core.truth_(inst_55071)){
var statearr_55101_55118 = state_55092__$1;
(statearr_55101_55118[(1)] = (4));

} else {
var statearr_55102_55119 = state_55092__$1;
(statearr_55102_55119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (11))){
var inst_55069 = (state_55092[(8)]);
var inst_55079 = (state_55092[(2)]);
var inst_55080 = (inst_55069 + (1));
var inst_55069__$1 = inst_55080;
var state_55092__$1 = (function (){var statearr_55103 = state_55092;
(statearr_55103[(10)] = inst_55079);

(statearr_55103[(8)] = inst_55069__$1);

return statearr_55103;
})();
var statearr_55104_55120 = state_55092__$1;
(statearr_55104_55120[(2)] = null);

(statearr_55104_55120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (9))){
var state_55092__$1 = state_55092;
var statearr_55105_55121 = state_55092__$1;
(statearr_55105_55121[(2)] = null);

(statearr_55105_55121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (5))){
var state_55092__$1 = state_55092;
var statearr_55106_55122 = state_55092__$1;
(statearr_55106_55122[(2)] = null);

(statearr_55106_55122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (10))){
var inst_55084 = (state_55092[(2)]);
var state_55092__$1 = state_55092;
var statearr_55107_55123 = state_55092__$1;
(statearr_55107_55123[(2)] = inst_55084);

(statearr_55107_55123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (8))){
var inst_55074 = (state_55092[(7)]);
var state_55092__$1 = state_55092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55092__$1,(11),out,inst_55074);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55108[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55108[(1)] = (1));

return statearr_55108;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55092){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55109){if((e55109 instanceof Object)){
var ex__53537__auto__ = e55109;
var statearr_55110_55124 = state_55092;
(statearr_55110_55124[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55125 = state_55092;
state_55092 = G__55125;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55111 = f__53629__auto__.call(null);
(statearr_55111[(6)] = c__53628__auto___55113);

return statearr_55111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55127 = (function (f,ch,meta55128){
this.f = f;
this.ch = ch;
this.meta55128 = meta55128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55129,meta55128__$1){
var self__ = this;
var _55129__$1 = this;
return (new cljs.core.async.t_cljs$core$async55127(self__.f,self__.ch,meta55128__$1));
}));

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55129){
var self__ = this;
var _55129__$1 = this;
return self__.meta55128;
}));

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55130 = (function (f,ch,meta55128,_,fn1,meta55131){
this.f = f;
this.ch = ch;
this.meta55128 = meta55128;
this._ = _;
this.fn1 = fn1;
this.meta55131 = meta55131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55132,meta55131__$1){
var self__ = this;
var _55132__$1 = this;
return (new cljs.core.async.t_cljs$core$async55130(self__.f,self__.ch,self__.meta55128,self__._,self__.fn1,meta55131__$1));
}));

(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55132){
var self__ = this;
var _55132__$1 = this;
return self__.meta55131;
}));

(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__55126_SHARP_){
return f1.call(null,(((p1__55126_SHARP_ == null))?null:self__.f.call(null,p1__55126_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async55130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55128","meta55128",-1009073963,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55127","cljs.core.async/t_cljs$core$async55127",-511632326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55131","meta55131",1662398050,null)], null);
}));

(cljs.core.async.t_cljs$core$async55130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55130");

(cljs.core.async.t_cljs$core$async55130.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async55130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55130.
 */
cljs.core.async.__GT_t_cljs$core$async55130 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55130(f__$1,ch__$1,meta55128__$1,___$2,fn1__$1,meta55131){
return (new cljs.core.async.t_cljs$core$async55130(f__$1,ch__$1,meta55128__$1,___$2,fn1__$1,meta55131));
});

}

return (new cljs.core.async.t_cljs$core$async55130(self__.f,self__.ch,self__.meta55128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55128","meta55128",-1009073963,null)], null);
}));

(cljs.core.async.t_cljs$core$async55127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55127");

(cljs.core.async.t_cljs$core$async55127.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async55127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55127.
 */
cljs.core.async.__GT_t_cljs$core$async55127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async55127(f__$1,ch__$1,meta55128){
return (new cljs.core.async.t_cljs$core$async55127(f__$1,ch__$1,meta55128));
});

}

return (new cljs.core.async.t_cljs$core$async55127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55133 = (function (f,ch,meta55134){
this.f = f;
this.ch = ch;
this.meta55134 = meta55134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55135,meta55134__$1){
var self__ = this;
var _55135__$1 = this;
return (new cljs.core.async.t_cljs$core$async55133(self__.f,self__.ch,meta55134__$1));
}));

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55135){
var self__ = this;
var _55135__$1 = this;
return self__.meta55134;
}));

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async55133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55134","meta55134",823699630,null)], null);
}));

(cljs.core.async.t_cljs$core$async55133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55133");

(cljs.core.async.t_cljs$core$async55133.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async55133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55133.
 */
cljs.core.async.__GT_t_cljs$core$async55133 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async55133(f__$1,ch__$1,meta55134){
return (new cljs.core.async.t_cljs$core$async55133(f__$1,ch__$1,meta55134));
});

}

return (new cljs.core.async.t_cljs$core$async55133(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55136 = (function (p,ch,meta55137){
this.p = p;
this.ch = ch;
this.meta55137 = meta55137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55138,meta55137__$1){
var self__ = this;
var _55138__$1 = this;
return (new cljs.core.async.t_cljs$core$async55136(self__.p,self__.ch,meta55137__$1));
}));

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55138){
var self__ = this;
var _55138__$1 = this;
return self__.meta55137;
}));

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55137","meta55137",973407904,null)], null);
}));

(cljs.core.async.t_cljs$core$async55136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55136");

(cljs.core.async.t_cljs$core$async55136.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async55136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55136.
 */
cljs.core.async.__GT_t_cljs$core$async55136 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async55136(p__$1,ch__$1,meta55137){
return (new cljs.core.async.t_cljs$core$async55136(p__$1,ch__$1,meta55137));
});

}

return (new cljs.core.async.t_cljs$core$async55136(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__55140 = arguments.length;
switch (G__55140) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55161){
var state_val_55162 = (state_55161[(1)]);
if((state_val_55162 === (7))){
var inst_55157 = (state_55161[(2)]);
var state_55161__$1 = state_55161;
var statearr_55163_55181 = state_55161__$1;
(statearr_55163_55181[(2)] = inst_55157);

(statearr_55163_55181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (1))){
var state_55161__$1 = state_55161;
var statearr_55164_55182 = state_55161__$1;
(statearr_55164_55182[(2)] = null);

(statearr_55164_55182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (4))){
var inst_55143 = (state_55161[(7)]);
var inst_55143__$1 = (state_55161[(2)]);
var inst_55144 = (inst_55143__$1 == null);
var state_55161__$1 = (function (){var statearr_55165 = state_55161;
(statearr_55165[(7)] = inst_55143__$1);

return statearr_55165;
})();
if(cljs.core.truth_(inst_55144)){
var statearr_55166_55183 = state_55161__$1;
(statearr_55166_55183[(1)] = (5));

} else {
var statearr_55167_55184 = state_55161__$1;
(statearr_55167_55184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (6))){
var inst_55143 = (state_55161[(7)]);
var inst_55148 = p.call(null,inst_55143);
var state_55161__$1 = state_55161;
if(cljs.core.truth_(inst_55148)){
var statearr_55168_55185 = state_55161__$1;
(statearr_55168_55185[(1)] = (8));

} else {
var statearr_55169_55186 = state_55161__$1;
(statearr_55169_55186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (3))){
var inst_55159 = (state_55161[(2)]);
var state_55161__$1 = state_55161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55161__$1,inst_55159);
} else {
if((state_val_55162 === (2))){
var state_55161__$1 = state_55161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55161__$1,(4),ch);
} else {
if((state_val_55162 === (11))){
var inst_55151 = (state_55161[(2)]);
var state_55161__$1 = state_55161;
var statearr_55170_55187 = state_55161__$1;
(statearr_55170_55187[(2)] = inst_55151);

(statearr_55170_55187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (9))){
var state_55161__$1 = state_55161;
var statearr_55171_55188 = state_55161__$1;
(statearr_55171_55188[(2)] = null);

(statearr_55171_55188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (5))){
var inst_55146 = cljs.core.async.close_BANG_.call(null,out);
var state_55161__$1 = state_55161;
var statearr_55172_55189 = state_55161__$1;
(statearr_55172_55189[(2)] = inst_55146);

(statearr_55172_55189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (10))){
var inst_55154 = (state_55161[(2)]);
var state_55161__$1 = (function (){var statearr_55173 = state_55161;
(statearr_55173[(8)] = inst_55154);

return statearr_55173;
})();
var statearr_55174_55190 = state_55161__$1;
(statearr_55174_55190[(2)] = null);

(statearr_55174_55190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55162 === (8))){
var inst_55143 = (state_55161[(7)]);
var state_55161__$1 = state_55161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55161__$1,(11),out,inst_55143);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55175 = [null,null,null,null,null,null,null,null,null];
(statearr_55175[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55175[(1)] = (1));

return statearr_55175;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55161){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55176){if((e55176 instanceof Object)){
var ex__53537__auto__ = e55176;
var statearr_55177_55191 = state_55161;
(statearr_55177_55191[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55192 = state_55161;
state_55161 = G__55192;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55178 = f__53629__auto__.call(null);
(statearr_55178[(6)] = c__53628__auto___55180);

return statearr_55178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55194 = arguments.length;
switch (G__55194) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55257){
var state_val_55258 = (state_55257[(1)]);
if((state_val_55258 === (7))){
var inst_55253 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55259_55297 = state_55257__$1;
(statearr_55259_55297[(2)] = inst_55253);

(statearr_55259_55297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (20))){
var inst_55223 = (state_55257[(7)]);
var inst_55234 = (state_55257[(2)]);
var inst_55235 = cljs.core.next.call(null,inst_55223);
var inst_55209 = inst_55235;
var inst_55210 = null;
var inst_55211 = (0);
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55260 = state_55257;
(statearr_55260[(8)] = inst_55209);

(statearr_55260[(9)] = inst_55212);

(statearr_55260[(10)] = inst_55211);

(statearr_55260[(11)] = inst_55210);

(statearr_55260[(12)] = inst_55234);

return statearr_55260;
})();
var statearr_55261_55298 = state_55257__$1;
(statearr_55261_55298[(2)] = null);

(statearr_55261_55298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (1))){
var state_55257__$1 = state_55257;
var statearr_55262_55299 = state_55257__$1;
(statearr_55262_55299[(2)] = null);

(statearr_55262_55299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (4))){
var inst_55198 = (state_55257[(13)]);
var inst_55198__$1 = (state_55257[(2)]);
var inst_55199 = (inst_55198__$1 == null);
var state_55257__$1 = (function (){var statearr_55263 = state_55257;
(statearr_55263[(13)] = inst_55198__$1);

return statearr_55263;
})();
if(cljs.core.truth_(inst_55199)){
var statearr_55264_55300 = state_55257__$1;
(statearr_55264_55300[(1)] = (5));

} else {
var statearr_55265_55301 = state_55257__$1;
(statearr_55265_55301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (15))){
var state_55257__$1 = state_55257;
var statearr_55269_55302 = state_55257__$1;
(statearr_55269_55302[(2)] = null);

(statearr_55269_55302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (21))){
var state_55257__$1 = state_55257;
var statearr_55270_55303 = state_55257__$1;
(statearr_55270_55303[(2)] = null);

(statearr_55270_55303[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (13))){
var inst_55209 = (state_55257[(8)]);
var inst_55212 = (state_55257[(9)]);
var inst_55211 = (state_55257[(10)]);
var inst_55210 = (state_55257[(11)]);
var inst_55219 = (state_55257[(2)]);
var inst_55220 = (inst_55212 + (1));
var tmp55266 = inst_55209;
var tmp55267 = inst_55211;
var tmp55268 = inst_55210;
var inst_55209__$1 = tmp55266;
var inst_55210__$1 = tmp55268;
var inst_55211__$1 = tmp55267;
var inst_55212__$1 = inst_55220;
var state_55257__$1 = (function (){var statearr_55271 = state_55257;
(statearr_55271[(8)] = inst_55209__$1);

(statearr_55271[(9)] = inst_55212__$1);

(statearr_55271[(10)] = inst_55211__$1);

(statearr_55271[(14)] = inst_55219);

(statearr_55271[(11)] = inst_55210__$1);

return statearr_55271;
})();
var statearr_55272_55304 = state_55257__$1;
(statearr_55272_55304[(2)] = null);

(statearr_55272_55304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (22))){
var state_55257__$1 = state_55257;
var statearr_55273_55305 = state_55257__$1;
(statearr_55273_55305[(2)] = null);

(statearr_55273_55305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (6))){
var inst_55198 = (state_55257[(13)]);
var inst_55207 = f.call(null,inst_55198);
var inst_55208 = cljs.core.seq.call(null,inst_55207);
var inst_55209 = inst_55208;
var inst_55210 = null;
var inst_55211 = (0);
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55274 = state_55257;
(statearr_55274[(8)] = inst_55209);

(statearr_55274[(9)] = inst_55212);

(statearr_55274[(10)] = inst_55211);

(statearr_55274[(11)] = inst_55210);

return statearr_55274;
})();
var statearr_55275_55306 = state_55257__$1;
(statearr_55275_55306[(2)] = null);

(statearr_55275_55306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (17))){
var inst_55223 = (state_55257[(7)]);
var inst_55227 = cljs.core.chunk_first.call(null,inst_55223);
var inst_55228 = cljs.core.chunk_rest.call(null,inst_55223);
var inst_55229 = cljs.core.count.call(null,inst_55227);
var inst_55209 = inst_55228;
var inst_55210 = inst_55227;
var inst_55211 = inst_55229;
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55276 = state_55257;
(statearr_55276[(8)] = inst_55209);

(statearr_55276[(9)] = inst_55212);

(statearr_55276[(10)] = inst_55211);

(statearr_55276[(11)] = inst_55210);

return statearr_55276;
})();
var statearr_55277_55307 = state_55257__$1;
(statearr_55277_55307[(2)] = null);

(statearr_55277_55307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (3))){
var inst_55255 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55257__$1,inst_55255);
} else {
if((state_val_55258 === (12))){
var inst_55243 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55278_55308 = state_55257__$1;
(statearr_55278_55308[(2)] = inst_55243);

(statearr_55278_55308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (2))){
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55257__$1,(4),in$);
} else {
if((state_val_55258 === (23))){
var inst_55251 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55279_55309 = state_55257__$1;
(statearr_55279_55309[(2)] = inst_55251);

(statearr_55279_55309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (19))){
var inst_55238 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55280_55310 = state_55257__$1;
(statearr_55280_55310[(2)] = inst_55238);

(statearr_55280_55310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (11))){
var inst_55209 = (state_55257[(8)]);
var inst_55223 = (state_55257[(7)]);
var inst_55223__$1 = cljs.core.seq.call(null,inst_55209);
var state_55257__$1 = (function (){var statearr_55281 = state_55257;
(statearr_55281[(7)] = inst_55223__$1);

return statearr_55281;
})();
if(inst_55223__$1){
var statearr_55282_55311 = state_55257__$1;
(statearr_55282_55311[(1)] = (14));

} else {
var statearr_55283_55312 = state_55257__$1;
(statearr_55283_55312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (9))){
var inst_55245 = (state_55257[(2)]);
var inst_55246 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_55257__$1 = (function (){var statearr_55284 = state_55257;
(statearr_55284[(15)] = inst_55245);

return statearr_55284;
})();
if(cljs.core.truth_(inst_55246)){
var statearr_55285_55313 = state_55257__$1;
(statearr_55285_55313[(1)] = (21));

} else {
var statearr_55286_55314 = state_55257__$1;
(statearr_55286_55314[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (5))){
var inst_55201 = cljs.core.async.close_BANG_.call(null,out);
var state_55257__$1 = state_55257;
var statearr_55287_55315 = state_55257__$1;
(statearr_55287_55315[(2)] = inst_55201);

(statearr_55287_55315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (14))){
var inst_55223 = (state_55257[(7)]);
var inst_55225 = cljs.core.chunked_seq_QMARK_.call(null,inst_55223);
var state_55257__$1 = state_55257;
if(inst_55225){
var statearr_55288_55316 = state_55257__$1;
(statearr_55288_55316[(1)] = (17));

} else {
var statearr_55289_55317 = state_55257__$1;
(statearr_55289_55317[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (16))){
var inst_55241 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55290_55318 = state_55257__$1;
(statearr_55290_55318[(2)] = inst_55241);

(statearr_55290_55318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (10))){
var inst_55212 = (state_55257[(9)]);
var inst_55210 = (state_55257[(11)]);
var inst_55217 = cljs.core._nth.call(null,inst_55210,inst_55212);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55257__$1,(13),out,inst_55217);
} else {
if((state_val_55258 === (18))){
var inst_55223 = (state_55257[(7)]);
var inst_55232 = cljs.core.first.call(null,inst_55223);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55257__$1,(20),out,inst_55232);
} else {
if((state_val_55258 === (8))){
var inst_55212 = (state_55257[(9)]);
var inst_55211 = (state_55257[(10)]);
var inst_55214 = (inst_55212 < inst_55211);
var inst_55215 = inst_55214;
var state_55257__$1 = state_55257;
if(cljs.core.truth_(inst_55215)){
var statearr_55291_55319 = state_55257__$1;
(statearr_55291_55319[(1)] = (10));

} else {
var statearr_55292_55320 = state_55257__$1;
(statearr_55292_55320[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____0 = (function (){
var statearr_55293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55293[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__);

(statearr_55293[(1)] = (1));

return statearr_55293;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____1 = (function (state_55257){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55294){if((e55294 instanceof Object)){
var ex__53537__auto__ = e55294;
var statearr_55295_55321 = state_55257;
(statearr_55295_55321[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55322 = state_55257;
state_55257 = G__55322;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__ = function(state_55257){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____1.call(this,state_55257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53534__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55296 = f__53629__auto__.call(null);
(statearr_55296[(6)] = c__53628__auto__);

return statearr_55296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55324 = arguments.length;
switch (G__55324) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__55327 = arguments.length;
switch (G__55327) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__55330 = arguments.length;
switch (G__55330) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55354){
var state_val_55355 = (state_55354[(1)]);
if((state_val_55355 === (7))){
var inst_55349 = (state_55354[(2)]);
var state_55354__$1 = state_55354;
var statearr_55356_55378 = state_55354__$1;
(statearr_55356_55378[(2)] = inst_55349);

(statearr_55356_55378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (1))){
var inst_55331 = null;
var state_55354__$1 = (function (){var statearr_55357 = state_55354;
(statearr_55357[(7)] = inst_55331);

return statearr_55357;
})();
var statearr_55358_55379 = state_55354__$1;
(statearr_55358_55379[(2)] = null);

(statearr_55358_55379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (4))){
var inst_55334 = (state_55354[(8)]);
var inst_55334__$1 = (state_55354[(2)]);
var inst_55335 = (inst_55334__$1 == null);
var inst_55336 = cljs.core.not.call(null,inst_55335);
var state_55354__$1 = (function (){var statearr_55359 = state_55354;
(statearr_55359[(8)] = inst_55334__$1);

return statearr_55359;
})();
if(inst_55336){
var statearr_55360_55380 = state_55354__$1;
(statearr_55360_55380[(1)] = (5));

} else {
var statearr_55361_55381 = state_55354__$1;
(statearr_55361_55381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (6))){
var state_55354__$1 = state_55354;
var statearr_55362_55382 = state_55354__$1;
(statearr_55362_55382[(2)] = null);

(statearr_55362_55382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (3))){
var inst_55351 = (state_55354[(2)]);
var inst_55352 = cljs.core.async.close_BANG_.call(null,out);
var state_55354__$1 = (function (){var statearr_55363 = state_55354;
(statearr_55363[(9)] = inst_55351);

return statearr_55363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55354__$1,inst_55352);
} else {
if((state_val_55355 === (2))){
var state_55354__$1 = state_55354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55354__$1,(4),ch);
} else {
if((state_val_55355 === (11))){
var inst_55334 = (state_55354[(8)]);
var inst_55343 = (state_55354[(2)]);
var inst_55331 = inst_55334;
var state_55354__$1 = (function (){var statearr_55364 = state_55354;
(statearr_55364[(7)] = inst_55331);

(statearr_55364[(10)] = inst_55343);

return statearr_55364;
})();
var statearr_55365_55383 = state_55354__$1;
(statearr_55365_55383[(2)] = null);

(statearr_55365_55383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (9))){
var inst_55334 = (state_55354[(8)]);
var state_55354__$1 = state_55354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55354__$1,(11),out,inst_55334);
} else {
if((state_val_55355 === (5))){
var inst_55331 = (state_55354[(7)]);
var inst_55334 = (state_55354[(8)]);
var inst_55338 = cljs.core._EQ_.call(null,inst_55334,inst_55331);
var state_55354__$1 = state_55354;
if(inst_55338){
var statearr_55367_55384 = state_55354__$1;
(statearr_55367_55384[(1)] = (8));

} else {
var statearr_55368_55385 = state_55354__$1;
(statearr_55368_55385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (10))){
var inst_55346 = (state_55354[(2)]);
var state_55354__$1 = state_55354;
var statearr_55369_55386 = state_55354__$1;
(statearr_55369_55386[(2)] = inst_55346);

(statearr_55369_55386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55355 === (8))){
var inst_55331 = (state_55354[(7)]);
var tmp55366 = inst_55331;
var inst_55331__$1 = tmp55366;
var state_55354__$1 = (function (){var statearr_55370 = state_55354;
(statearr_55370[(7)] = inst_55331__$1);

return statearr_55370;
})();
var statearr_55371_55387 = state_55354__$1;
(statearr_55371_55387[(2)] = null);

(statearr_55371_55387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55372[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55372[(1)] = (1));

return statearr_55372;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55354){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55373){if((e55373 instanceof Object)){
var ex__53537__auto__ = e55373;
var statearr_55374_55388 = state_55354;
(statearr_55374_55388[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55389 = state_55354;
state_55354 = G__55389;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55375 = f__53629__auto__.call(null);
(statearr_55375[(6)] = c__53628__auto___55377);

return statearr_55375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55391 = arguments.length;
switch (G__55391) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55429){
var state_val_55430 = (state_55429[(1)]);
if((state_val_55430 === (7))){
var inst_55425 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55431_55458 = state_55429__$1;
(statearr_55431_55458[(2)] = inst_55425);

(statearr_55431_55458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (1))){
var inst_55392 = (new Array(n));
var inst_55393 = inst_55392;
var inst_55394 = (0);
var state_55429__$1 = (function (){var statearr_55432 = state_55429;
(statearr_55432[(7)] = inst_55393);

(statearr_55432[(8)] = inst_55394);

return statearr_55432;
})();
var statearr_55433_55459 = state_55429__$1;
(statearr_55433_55459[(2)] = null);

(statearr_55433_55459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (4))){
var inst_55397 = (state_55429[(9)]);
var inst_55397__$1 = (state_55429[(2)]);
var inst_55398 = (inst_55397__$1 == null);
var inst_55399 = cljs.core.not.call(null,inst_55398);
var state_55429__$1 = (function (){var statearr_55434 = state_55429;
(statearr_55434[(9)] = inst_55397__$1);

return statearr_55434;
})();
if(inst_55399){
var statearr_55435_55460 = state_55429__$1;
(statearr_55435_55460[(1)] = (5));

} else {
var statearr_55436_55461 = state_55429__$1;
(statearr_55436_55461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (15))){
var inst_55419 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55437_55462 = state_55429__$1;
(statearr_55437_55462[(2)] = inst_55419);

(statearr_55437_55462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (13))){
var state_55429__$1 = state_55429;
var statearr_55438_55463 = state_55429__$1;
(statearr_55438_55463[(2)] = null);

(statearr_55438_55463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (6))){
var inst_55394 = (state_55429[(8)]);
var inst_55415 = (inst_55394 > (0));
var state_55429__$1 = state_55429;
if(cljs.core.truth_(inst_55415)){
var statearr_55439_55464 = state_55429__$1;
(statearr_55439_55464[(1)] = (12));

} else {
var statearr_55440_55465 = state_55429__$1;
(statearr_55440_55465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (3))){
var inst_55427 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55429__$1,inst_55427);
} else {
if((state_val_55430 === (12))){
var inst_55393 = (state_55429[(7)]);
var inst_55417 = cljs.core.vec.call(null,inst_55393);
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55429__$1,(15),out,inst_55417);
} else {
if((state_val_55430 === (2))){
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55429__$1,(4),ch);
} else {
if((state_val_55430 === (11))){
var inst_55409 = (state_55429[(2)]);
var inst_55410 = (new Array(n));
var inst_55393 = inst_55410;
var inst_55394 = (0);
var state_55429__$1 = (function (){var statearr_55441 = state_55429;
(statearr_55441[(7)] = inst_55393);

(statearr_55441[(8)] = inst_55394);

(statearr_55441[(10)] = inst_55409);

return statearr_55441;
})();
var statearr_55442_55466 = state_55429__$1;
(statearr_55442_55466[(2)] = null);

(statearr_55442_55466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (9))){
var inst_55393 = (state_55429[(7)]);
var inst_55407 = cljs.core.vec.call(null,inst_55393);
var state_55429__$1 = state_55429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55429__$1,(11),out,inst_55407);
} else {
if((state_val_55430 === (5))){
var inst_55393 = (state_55429[(7)]);
var inst_55397 = (state_55429[(9)]);
var inst_55394 = (state_55429[(8)]);
var inst_55402 = (state_55429[(11)]);
var inst_55401 = (inst_55393[inst_55394] = inst_55397);
var inst_55402__$1 = (inst_55394 + (1));
var inst_55403 = (inst_55402__$1 < n);
var state_55429__$1 = (function (){var statearr_55443 = state_55429;
(statearr_55443[(12)] = inst_55401);

(statearr_55443[(11)] = inst_55402__$1);

return statearr_55443;
})();
if(cljs.core.truth_(inst_55403)){
var statearr_55444_55467 = state_55429__$1;
(statearr_55444_55467[(1)] = (8));

} else {
var statearr_55445_55468 = state_55429__$1;
(statearr_55445_55468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (14))){
var inst_55422 = (state_55429[(2)]);
var inst_55423 = cljs.core.async.close_BANG_.call(null,out);
var state_55429__$1 = (function (){var statearr_55447 = state_55429;
(statearr_55447[(13)] = inst_55422);

return statearr_55447;
})();
var statearr_55448_55469 = state_55429__$1;
(statearr_55448_55469[(2)] = inst_55423);

(statearr_55448_55469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (10))){
var inst_55413 = (state_55429[(2)]);
var state_55429__$1 = state_55429;
var statearr_55449_55470 = state_55429__$1;
(statearr_55449_55470[(2)] = inst_55413);

(statearr_55449_55470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55430 === (8))){
var inst_55393 = (state_55429[(7)]);
var inst_55402 = (state_55429[(11)]);
var tmp55446 = inst_55393;
var inst_55393__$1 = tmp55446;
var inst_55394 = inst_55402;
var state_55429__$1 = (function (){var statearr_55450 = state_55429;
(statearr_55450[(7)] = inst_55393__$1);

(statearr_55450[(8)] = inst_55394);

return statearr_55450;
})();
var statearr_55451_55471 = state_55429__$1;
(statearr_55451_55471[(2)] = null);

(statearr_55451_55471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55452[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55452[(1)] = (1));

return statearr_55452;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55429){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55453){if((e55453 instanceof Object)){
var ex__53537__auto__ = e55453;
var statearr_55454_55472 = state_55429;
(statearr_55454_55472[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55473 = state_55429;
state_55429 = G__55473;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55455 = f__53629__auto__.call(null);
(statearr_55455[(6)] = c__53628__auto___55457);

return statearr_55455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55475 = arguments.length;
switch (G__55475) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__53628__auto___55545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55517){
var state_val_55518 = (state_55517[(1)]);
if((state_val_55518 === (7))){
var inst_55513 = (state_55517[(2)]);
var state_55517__$1 = state_55517;
var statearr_55519_55546 = state_55517__$1;
(statearr_55519_55546[(2)] = inst_55513);

(statearr_55519_55546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (1))){
var inst_55476 = [];
var inst_55477 = inst_55476;
var inst_55478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55517__$1 = (function (){var statearr_55520 = state_55517;
(statearr_55520[(7)] = inst_55477);

(statearr_55520[(8)] = inst_55478);

return statearr_55520;
})();
var statearr_55521_55547 = state_55517__$1;
(statearr_55521_55547[(2)] = null);

(statearr_55521_55547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (4))){
var inst_55481 = (state_55517[(9)]);
var inst_55481__$1 = (state_55517[(2)]);
var inst_55482 = (inst_55481__$1 == null);
var inst_55483 = cljs.core.not.call(null,inst_55482);
var state_55517__$1 = (function (){var statearr_55522 = state_55517;
(statearr_55522[(9)] = inst_55481__$1);

return statearr_55522;
})();
if(inst_55483){
var statearr_55523_55548 = state_55517__$1;
(statearr_55523_55548[(1)] = (5));

} else {
var statearr_55524_55549 = state_55517__$1;
(statearr_55524_55549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (15))){
var inst_55507 = (state_55517[(2)]);
var state_55517__$1 = state_55517;
var statearr_55525_55550 = state_55517__$1;
(statearr_55525_55550[(2)] = inst_55507);

(statearr_55525_55550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (13))){
var state_55517__$1 = state_55517;
var statearr_55526_55551 = state_55517__$1;
(statearr_55526_55551[(2)] = null);

(statearr_55526_55551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (6))){
var inst_55477 = (state_55517[(7)]);
var inst_55502 = inst_55477.length;
var inst_55503 = (inst_55502 > (0));
var state_55517__$1 = state_55517;
if(cljs.core.truth_(inst_55503)){
var statearr_55527_55552 = state_55517__$1;
(statearr_55527_55552[(1)] = (12));

} else {
var statearr_55528_55553 = state_55517__$1;
(statearr_55528_55553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (3))){
var inst_55515 = (state_55517[(2)]);
var state_55517__$1 = state_55517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55517__$1,inst_55515);
} else {
if((state_val_55518 === (12))){
var inst_55477 = (state_55517[(7)]);
var inst_55505 = cljs.core.vec.call(null,inst_55477);
var state_55517__$1 = state_55517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55517__$1,(15),out,inst_55505);
} else {
if((state_val_55518 === (2))){
var state_55517__$1 = state_55517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55517__$1,(4),ch);
} else {
if((state_val_55518 === (11))){
var inst_55485 = (state_55517[(10)]);
var inst_55481 = (state_55517[(9)]);
var inst_55495 = (state_55517[(2)]);
var inst_55496 = [];
var inst_55497 = inst_55496.push(inst_55481);
var inst_55477 = inst_55496;
var inst_55478 = inst_55485;
var state_55517__$1 = (function (){var statearr_55529 = state_55517;
(statearr_55529[(11)] = inst_55497);

(statearr_55529[(7)] = inst_55477);

(statearr_55529[(8)] = inst_55478);

(statearr_55529[(12)] = inst_55495);

return statearr_55529;
})();
var statearr_55530_55554 = state_55517__$1;
(statearr_55530_55554[(2)] = null);

(statearr_55530_55554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (9))){
var inst_55477 = (state_55517[(7)]);
var inst_55493 = cljs.core.vec.call(null,inst_55477);
var state_55517__$1 = state_55517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55517__$1,(11),out,inst_55493);
} else {
if((state_val_55518 === (5))){
var inst_55485 = (state_55517[(10)]);
var inst_55481 = (state_55517[(9)]);
var inst_55478 = (state_55517[(8)]);
var inst_55485__$1 = f.call(null,inst_55481);
var inst_55486 = cljs.core._EQ_.call(null,inst_55485__$1,inst_55478);
var inst_55487 = cljs.core.keyword_identical_QMARK_.call(null,inst_55478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55488 = ((inst_55486) || (inst_55487));
var state_55517__$1 = (function (){var statearr_55531 = state_55517;
(statearr_55531[(10)] = inst_55485__$1);

return statearr_55531;
})();
if(cljs.core.truth_(inst_55488)){
var statearr_55532_55555 = state_55517__$1;
(statearr_55532_55555[(1)] = (8));

} else {
var statearr_55533_55556 = state_55517__$1;
(statearr_55533_55556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (14))){
var inst_55510 = (state_55517[(2)]);
var inst_55511 = cljs.core.async.close_BANG_.call(null,out);
var state_55517__$1 = (function (){var statearr_55535 = state_55517;
(statearr_55535[(13)] = inst_55510);

return statearr_55535;
})();
var statearr_55536_55557 = state_55517__$1;
(statearr_55536_55557[(2)] = inst_55511);

(statearr_55536_55557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (10))){
var inst_55500 = (state_55517[(2)]);
var state_55517__$1 = state_55517;
var statearr_55537_55558 = state_55517__$1;
(statearr_55537_55558[(2)] = inst_55500);

(statearr_55537_55558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55518 === (8))){
var inst_55485 = (state_55517[(10)]);
var inst_55477 = (state_55517[(7)]);
var inst_55481 = (state_55517[(9)]);
var inst_55490 = inst_55477.push(inst_55481);
var tmp55534 = inst_55477;
var inst_55477__$1 = tmp55534;
var inst_55478 = inst_55485;
var state_55517__$1 = (function (){var statearr_55538 = state_55517;
(statearr_55538[(14)] = inst_55490);

(statearr_55538[(7)] = inst_55477__$1);

(statearr_55538[(8)] = inst_55478);

return statearr_55538;
})();
var statearr_55539_55559 = state_55517__$1;
(statearr_55539_55559[(2)] = null);

(statearr_55539_55559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__53534__auto__ = null;
var cljs$core$async$state_machine__53534__auto____0 = (function (){
var statearr_55540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55540[(0)] = cljs$core$async$state_machine__53534__auto__);

(statearr_55540[(1)] = (1));

return statearr_55540;
});
var cljs$core$async$state_machine__53534__auto____1 = (function (state_55517){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55541){if((e55541 instanceof Object)){
var ex__53537__auto__ = e55541;
var statearr_55542_55560 = state_55517;
(statearr_55542_55560[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55561 = state_55517;
state_55517 = G__55561;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
cljs$core$async$state_machine__53534__auto__ = function(state_55517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53534__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53534__auto____1.call(this,state_55517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53534__auto____0;
cljs$core$async$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53534__auto____1;
return cljs$core$async$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55543 = f__53629__auto__.call(null);
(statearr_55543[(6)] = c__53628__auto___55545);

return statearr_55543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1615710655104
