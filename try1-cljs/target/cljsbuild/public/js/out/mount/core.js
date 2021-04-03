// Compiled by ClojureScript 1.10.773 {}
goog.provide('mount.core');
goog.require('cljs.core');
goog.require('mount.tools.macro');
goog.require('clojure.set');
goog.require('mount.tools.logger');
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core._args !== 'undefined')){
} else {
mount.core._args = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.state_seq !== 'undefined')){
} else {
mount.core.state_seq = cljs.core.atom.call(null,(0));
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.mode !== 'undefined')){
} else {
mount.core.mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428));
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.meta_state !== 'undefined')){
} else {
mount.core.meta_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.running !== 'undefined')){
} else {
mount.core.running = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mount.core.make_state_seq = (function mount$core$make_state_seq(state){
var or__4126__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.swap_BANG_.call(null,mount.core.state_seq,cljs.core.inc);
}
});

/**
* @constructor
 * @implements {mount.core.Object}
*/
mount.core.NotStartedState = (function (state){
this.state = state;
});
(mount.core.NotStartedState.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.state),"' is not started (to start all the states call mount/start)"].join('');
}));

(mount.core.NotStartedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(mount.core.NotStartedState.cljs$lang$type = true);

(mount.core.NotStartedState.cljs$lang$ctorStr = "mount.core/NotStartedState");

(mount.core.NotStartedState.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"mount.core/NotStartedState");
}));

/**
 * Positional factory function for mount.core/NotStartedState.
 */
mount.core.__GT_NotStartedState = (function mount$core$__GT_NotStartedState(state){
return (new mount.core.NotStartedState(state));
});

mount.core.validate = (function mount$core$validate(p__50243){
var map__50244 = p__50243;
var map__50244__$1 = (((((!((map__50244 == null))))?(((((map__50244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50244):map__50244);
var lifecycle = map__50244__$1;
var start = cljs.core.get.call(null,map__50244__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__50244__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__50244__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__50244__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
if(cljs.core.not.call(null,start)){
throw "can't start a stateful thing without a start function. (i.e. missing :start fn)";
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = suspend;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return resume;
}
})())){
throw "suspend / resume lifecycle support was removed in \"0.1.10\" in favor of (mount/stop-except)";
} else {
return null;
}
}
});
mount.core.with_ns = (function mount$core$with_ns(ns,name){
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
mount.core.pounded_QMARK_ = (function mount$core$pounded_QMARK_(f){
var pound = "(fn* [] ";
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(f).startsWith(pound);
});
mount.core.unpound = (function mount$core$unpound(f){
if(cljs.core.truth_(mount.core.pounded_QMARK_.call(null,f))){
return cljs.core.nth.call(null,f,(2));
} else {
return f;
}
});
/**
 * in case a namespace is recompiled without calling (mount/stop),
 * a running state instance will still be running.
 * this function stops this 'lost' state instance.
 * it is meant to be called by defstate before defining a new state
 */
mount.core.cleanup_if_dirty = (function mount$core$cleanup_if_dirty(state,reason){
var temp__5735__auto__ = cljs.core.deref.call(null,mount.core.running).call(null,state);
if(cljs.core.truth_(temp__5735__auto__)){
var map__50246 = temp__5735__auto__;
var map__50246__$1 = (((((!((map__50246 == null))))?(((((map__50246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50246):map__50246);
var up = map__50246__$1;
var stop = cljs.core.get.call(null,map__50246__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(stop)){
mount.tools.logger.log.call(null,["<< stopping.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reason)].join(''));

stop.call(null);
} else {
}

return cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);
} else {
return null;
}
});
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__50248,value){
var map__50249 = p__50248;
var map__50249__$1 = (((((!((map__50249 == null))))?(((((map__50249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50249):map__50249);
var inst = cljs.core.get.call(null,map__50249__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
return cljs.core.reset_BANG_.call(null,inst,value);
});
mount.core.update_meta_BANG_ = (function mount$core$update_meta_BANG_(path,v){
return cljs.core.swap_BANG_.call(null,mount.core.meta_state,cljs.core.assoc_in,path,v);
});
mount.core.record_BANG_ = (function mount$core$record_BANG_(state_name,f,done){
var state = f.call(null);
cljs.core.swap_BANG_.call(null,done,cljs.core.conj,state_name);

return state;
});
mount.core.up = (function mount$core$up(state,p__50251,done){
var map__50252 = p__50251;
var map__50252__$1 = (((((!((map__50252 == null))))?(((((map__50252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50252):map__50252);
var current = map__50252__$1;
var start = cljs.core.get.call(null,map__50252__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__50252__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__50252__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{return mount.core.record_BANG_.call(null,state,start,done);
}catch (e50254){var t__367__auto__ = e50254;
throw Error([["could not start [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join('')," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__367__auto__)].join(''));

}})();
mount.core.alter_state_BANG_.call(null,current,s);

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.assoc,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null));
}
});
/**
 * brings a state down by
 *  * calling its 'stop' function if it is defined
 *    * if not defined, state will still become a 'NotStartedState'
 *    * in case of a failure on 'stop', state is still marked as :stopped, and the error is logged / printed
 *  * dissoc'ing it from the running states
 *  * marking it as :stopped
 */
mount.core.down = (function mount$core$down(state,p__50255,done){
var map__50256 = p__50255;
var map__50256__$1 = (((((!((map__50256 == null))))?(((((map__50256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50256):map__50256);
var current = map__50256__$1;
var stop = cljs.core.get.call(null,map__50256__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__50256__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(cljs.core.some.call(null,status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null)))){
if(cljs.core.truth_(stop)){
var temp__5733__auto___50259 = new cljs.core.Keyword(null,"f-failed","f-failed",463707059).cljs$core$IFn$_invoke$arity$1((function (){try{return mount.core.record_BANG_.call(null,state,stop,done);
}catch (e50258){var t__367__auto__ = e50258;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f-failed","f-failed",463707059),cljs.core.ex_info.call(null,["could not stop [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''),cljs.core.PersistentArrayMap.EMPTY,t__367__auto__)], null);

}})());
if(cljs.core.truth_(temp__5733__auto___50259)){
var cause_50260 = temp__5733__auto___50259;
mount.tools.logger.log.call(null,cause_50260,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
mount.core.alter_state_BANG_.call(null,current,mount.core.__GT_NotStartedState.call(null,state));
}
} else {
mount.core.alter_state_BANG_.call(null,current,mount.core.__GT_NotStartedState.call(null,state));
}

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null));
} else {
return null;
}
});
mount.core.running_states = (function mount$core$running_states(){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.running)));
});

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
mount.core.DerefableState = (function (name){
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(mount.core.DerefableState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__50261 = cljs.core.deref.call(null,mount.core.meta_state).call(null,self__.name);
var map__50261__$1 = (((((!((map__50261 == null))))?(((((map__50261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50261):map__50261);
var state = map__50261__$1;
var status = cljs.core.get.call(null,map__50261__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var var$ = cljs.core.get.call(null,map__50261__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var inst = cljs.core.get.call(null,map__50261__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"on-lazy-start","on-lazy-start",916539621).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$)))){
throw [":on-lazy-start is set to :throw i.e. (defstate {:on-lazy-start :throw} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"...) ","and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)," state was not explicitly started before it was deref'ed (i.e. @",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),")"].join('');
} else {
mount.core.up.call(null,self__.name,state,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
}
}

return cljs.core.deref.call(null,inst);
}));

(mount.core.DerefableState.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$.call(null,mount.core.running_states.call(null).call(null,self__.name));
}));

(mount.core.DerefableState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(mount.core.DerefableState.cljs$lang$type = true);

(mount.core.DerefableState.cljs$lang$ctorStr = "mount.core/DerefableState");

(mount.core.DerefableState.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"mount.core/DerefableState");
}));

/**
 * Positional factory function for mount.core/DerefableState.
 */
mount.core.__GT_DerefableState = (function mount$core$__GT_DerefableState(name){
return (new mount.core.DerefableState(name));
});

mount.core.current_state = (function mount$core$current_state(state){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)));
});
mount.core.on_reload_meta = (function mount$core$on_reload_meta(s_var){
var or__4126__auto__ = new cljs.core.Keyword(null,"on-reload","on-reload",869927793).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s_var));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"restart","restart",-1779883612);
}
});
mount.core.running_noop_QMARK_ = (function mount$core$running_noop_QMARK_(s_name){
var map__50263 = cljs.core.deref.call(null,mount.core.meta_state).call(null,s_name);
var map__50263__$1 = (((((!((map__50263 == null))))?(((((map__50263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50263):map__50263);
var var$ = cljs.core.get.call(null,map__50263__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var status = cljs.core.get.call(null,map__50263__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_reload = new cljs.core.Keyword(null,"on-reload","on-reload",869927793).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$));
if(cljs.core.truth_(status)){
var and__4115__auto__ = status.call(null,new cljs.core.Keyword(null,"started","started",585705024));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noop","noop",-673731258),on_reload);
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
mount.core.mount_it = (function mount$core$mount_it(s_var,s_name,s_meta){
var with_inst = cljs.core.assoc.call(null,s_meta,new cljs.core.Keyword(null,"inst","inst",645962501),cljs.core.atom.call(null,mount.core.__GT_NotStartedState.call(null,s_name)),new cljs.core.Keyword(null,"var","var",-769682797),s_var);
var on_reload = mount.core.on_reload_meta.call(null,s_var);
var existing_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noop","noop",-673731258),on_reload))?null:mount.core.cleanup_if_dirty.call(null,s_name,"(namespace was recompiled)"));
mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name], null),with_inst);

if(cljs.core.truth_((function (){var and__4115__auto__ = existing_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"restart","restart",-1779883612),on_reload);
} else {
return and__4115__auto__;
}
})())){
mount.tools.logger.log.call(null,[">> starting.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_name)," (namespace was recompiled)"].join(''));

return mount.core.up.call(null,s_name,with_inst,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
} else {
return null;
}
});
mount.core.in_cljc_mode = (function mount$core$in_cljc_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"cljc","cljc",-1728400583));
});
mount.core.in_clj_mode = (function mount$core$in_clj_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"clj","clj",-660495428));
});
mount.core.args = (function mount$core$args(){
return cljs.core.deref.call(null,mount.core._args);
});
mount.core.find_all_states = (function mount$core$find_all_states(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.meta_state));
});
mount.core.var_to_str = (function mount$core$var_to_str(v){
if((v instanceof cljs.core.Var)){
var map__50265 = cljs.core.meta.call(null,v);
var map__50265__$1 = (((((!((map__50265 == null))))?(((((map__50265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50265):map__50265);
var ns = cljs.core.get.call(null,map__50265__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__50265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return mount.core.with_ns.call(null,ns,name);
} else {
return v;
}
});
mount.core.unvar_state = (function mount$core$unvar_state(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(2),s));
});
mount.core.bring = (function mount$core$bring(states,fun,order){
var done = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var $_50283 = states;
var $_50284__$1 = cljs.core.map.call(null,mount.core.var_to_str,$_50283);
var $_50285__$2 = cljs.core.select_keys.call(null,cljs.core.deref.call(null,mount.core.meta_state),$_50284__$1);
var $_50286__$3 = cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.val),order,$_50285__$2);
var seq__50267_50287 = cljs.core.seq.call(null,$_50286__$3);
var chunk__50268_50288 = null;
var count__50269_50289 = (0);
var i__50270_50290 = (0);
while(true){
if((i__50270_50290 < count__50269_50289)){
var vec__50277_50291 = cljs.core._nth.call(null,chunk__50268_50288,i__50270_50290);
var k_50292 = cljs.core.nth.call(null,vec__50277_50291,(0),null);
var v_50293 = cljs.core.nth.call(null,vec__50277_50291,(1),null);
fun.call(null,k_50292,v_50293,done);


var G__50294 = seq__50267_50287;
var G__50295 = chunk__50268_50288;
var G__50296 = count__50269_50289;
var G__50297 = (i__50270_50290 + (1));
seq__50267_50287 = G__50294;
chunk__50268_50288 = G__50295;
count__50269_50289 = G__50296;
i__50270_50290 = G__50297;
continue;
} else {
var temp__5735__auto___50298 = cljs.core.seq.call(null,seq__50267_50287);
if(temp__5735__auto___50298){
var seq__50267_50299__$1 = temp__5735__auto___50298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50267_50299__$1)){
var c__4556__auto___50300 = cljs.core.chunk_first.call(null,seq__50267_50299__$1);
var G__50301 = cljs.core.chunk_rest.call(null,seq__50267_50299__$1);
var G__50302 = c__4556__auto___50300;
var G__50303 = cljs.core.count.call(null,c__4556__auto___50300);
var G__50304 = (0);
seq__50267_50287 = G__50301;
chunk__50268_50288 = G__50302;
count__50269_50289 = G__50303;
i__50270_50290 = G__50304;
continue;
} else {
var vec__50280_50305 = cljs.core.first.call(null,seq__50267_50299__$1);
var k_50306 = cljs.core.nth.call(null,vec__50280_50305,(0),null);
var v_50307 = cljs.core.nth.call(null,vec__50280_50305,(1),null);
fun.call(null,k_50306,v_50307,done);


var G__50308 = cljs.core.next.call(null,seq__50267_50299__$1);
var G__50309 = null;
var G__50310 = (0);
var G__50311 = (0);
seq__50267_50287 = G__50308;
chunk__50268_50288 = G__50309;
count__50269_50289 = G__50310;
i__50270_50290 = G__50311;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,done);
});
/**
 * merges with overriding _certain_ non existing keys.
 * i.e. :stop is in a 'state', but not in a 'substitute': it should be overriden with nil
 *      however other keys of 'state' (such as :ns,:name,:order) should not be overriden
 */
mount.core.merge_lifecycles = (function mount$core$merge_lifecycles(var_args){
var G__50313 = arguments.length;
switch (G__50313) {
case 2:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2 = (function (state,sub){
return mount.core.merge_lifecycles.call(null,state,null,sub);
}));

(mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__50314){
var map__50315 = p__50314;
var map__50315__$1 = (((((!((map__50315 == null))))?(((((map__50315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50315):map__50315);
var start = cljs.core.get.call(null,map__50315__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__50315__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__50315__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop);
}));

(mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3);

mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__50318 = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var map__50318__$1 = (((((!((map__50318 == null))))?(((((map__50318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50318):map__50318);
var sub = map__50318__$1;
var origin = cljs.core.get.call(null,map__50318__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$,mode){
var lifecycle_fns = (function (p1__50320_SHARP_){
return cljs.core.select_keys.call(null,p1__50320_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
});
var origin = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var sub = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217),mode))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return with$;
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null):cljs.core.assoc.call(null,with$,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)));
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,origin,lifecycle_fns.call(null,origin),sub));
});
mount.core.unsub = (function mount$core$unsub(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sub?","sub?",768712042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)))){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"sub?","sub?",768712042)], null),null);
} else {
return null;
}
});
mount.core.all_without_subs = (function mount$core$all_without_subs(){
return cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"sub?","sub?",768712042),cljs.core.deref.call(null,mount.core.meta_state)),mount.core.find_all_states.call(null));
});
mount.core.start = (function mount$core$start(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50322 = arguments.length;
var i__4737__auto___50323 = (0);
while(true){
if((i__4737__auto___50323 < len__4736__auto___50322)){
args__4742__auto__.push((arguments[i__4737__auto___50323]));

var G__50324 = (i__4737__auto___50323 + (1));
i__4737__auto___50323 = G__50324;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mount.core.start.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if((!(cljs.core.empty_QMARK_.call(null,fs)))){
return cljs.core.apply.call(null,mount.core.start,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__4126__auto__ = cljs.core.seq.call(null,states);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),mount.core.bring.call(null,states__$1,mount.core.up,cljs.core._LT_)], null);
}
}));

(mount.core.start.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mount.core.start.cljs$lang$applyTo = (function (seq50321){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50321));
}));

mount.core.stop = (function mount$core$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50326 = arguments.length;
var i__4737__auto___50327 = (0);
while(true){
if((i__4737__auto___50327 < len__4736__auto___50326)){
args__4742__auto__.push((arguments[i__4737__auto___50327]));

var G__50328 = (i__4737__auto___50327 + (1));
i__4737__auto___50327 = G__50328;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mount.core.stop.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if((!(cljs.core.empty_QMARK_.call(null,fs)))){
return cljs.core.apply.call(null,mount.core.stop,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__4126__auto__ = cljs.core.seq.call(null,states);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return mount.core.find_all_states.call(null);
}
})();
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.unsub,states__$1));
var stopped = mount.core.bring.call(null,states__$1,mount.core.down,cljs.core._GT_);
cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.rollback_BANG_,states__$1));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped], null);
}
}));

(mount.core.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mount.core.stop.cljs$lang$applyTo = (function (seq50325){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50325));
}));

mount.core.mapset = (function mount$core$mapset(f,xs){
return cljs.core.set.call(null,cljs.core.map.call(null,f,xs));
});
mount.core.only = (function mount$core$only(var_args){
var G__50330 = arguments.length;
switch (G__50330) {
case 1:
return mount.core.only.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.only.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.only.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.only.call(null,mount.core.find_all_states.call(null),states);
}));

(mount.core.only.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return clojure.set.intersection.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
}));

(mount.core.only.cljs$lang$maxFixedArity = 2);

mount.core.with_args = (function mount$core$with_args(var_args){
var G__50333 = arguments.length;
switch (G__50333) {
case 1:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.with_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return mount.core.with_args.call(null,mount.core.find_all_states.call(null),args);
}));

(mount.core.with_args.cljs$core$IFn$_invoke$arity$2 = (function (states,args){
cljs.core.reset_BANG_.call(null,mount.core._args,args);

return states;
}));

(mount.core.with_args.cljs$lang$maxFixedArity = 2);

mount.core.except = (function mount$core$except(var_args){
var G__50336 = arguments.length;
switch (G__50336) {
case 1:
return mount.core.except.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.except.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.except.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.except.call(null,mount.core.find_all_states.call(null),states);
}));

(mount.core.except.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return cljs.core.remove.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
}));

(mount.core.except.cljs$lang$maxFixedArity = 2);

mount.core.swap = (function mount$core$swap(var_args){
var G__50339 = arguments.length;
switch (G__50339) {
case 1:
return mount.core.swap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.swap.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap.call(null,mount.core.find_all_states.call(null),with$);
}));

(mount.core.swap.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__50340_50357 = cljs.core.seq.call(null,with$);
var chunk__50341_50358 = null;
var count__50342_50359 = (0);
var i__50343_50360 = (0);
while(true){
if((i__50343_50360 < count__50342_50359)){
var vec__50350_50361 = cljs.core._nth.call(null,chunk__50341_50358,i__50343_50360);
var from_50362 = cljs.core.nth.call(null,vec__50350_50361,(0),null);
var to_50363 = cljs.core.nth.call(null,vec__50350_50361,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50362),to_50363,new cljs.core.Keyword(null,"value","value",305978217));


var G__50364 = seq__50340_50357;
var G__50365 = chunk__50341_50358;
var G__50366 = count__50342_50359;
var G__50367 = (i__50343_50360 + (1));
seq__50340_50357 = G__50364;
chunk__50341_50358 = G__50365;
count__50342_50359 = G__50366;
i__50343_50360 = G__50367;
continue;
} else {
var temp__5735__auto___50368 = cljs.core.seq.call(null,seq__50340_50357);
if(temp__5735__auto___50368){
var seq__50340_50369__$1 = temp__5735__auto___50368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50340_50369__$1)){
var c__4556__auto___50370 = cljs.core.chunk_first.call(null,seq__50340_50369__$1);
var G__50371 = cljs.core.chunk_rest.call(null,seq__50340_50369__$1);
var G__50372 = c__4556__auto___50370;
var G__50373 = cljs.core.count.call(null,c__4556__auto___50370);
var G__50374 = (0);
seq__50340_50357 = G__50371;
chunk__50341_50358 = G__50372;
count__50342_50359 = G__50373;
i__50343_50360 = G__50374;
continue;
} else {
var vec__50353_50375 = cljs.core.first.call(null,seq__50340_50369__$1);
var from_50376 = cljs.core.nth.call(null,vec__50353_50375,(0),null);
var to_50377 = cljs.core.nth.call(null,vec__50353_50375,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50376),to_50377,new cljs.core.Keyword(null,"value","value",305978217));


var G__50378 = cljs.core.next.call(null,seq__50340_50369__$1);
var G__50379 = null;
var G__50380 = (0);
var G__50381 = (0);
seq__50340_50357 = G__50378;
chunk__50341_50358 = G__50379;
count__50342_50359 = G__50380;
i__50343_50360 = G__50381;
continue;
}
} else {
}
}
break;
}

return states;
}));

(mount.core.swap.cljs$lang$maxFixedArity = 2);

mount.core.swap_states = (function mount$core$swap_states(var_args){
var G__50383 = arguments.length;
switch (G__50383) {
case 1:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.swap_states.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap_states.call(null,mount.core.find_all_states.call(null),with$);
}));

(mount.core.swap_states.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__50384_50401 = cljs.core.seq.call(null,with$);
var chunk__50385_50402 = null;
var count__50386_50403 = (0);
var i__50387_50404 = (0);
while(true){
if((i__50387_50404 < count__50386_50403)){
var vec__50394_50405 = cljs.core._nth.call(null,chunk__50385_50402,i__50387_50404);
var from_50406 = cljs.core.nth.call(null,vec__50394_50405,(0),null);
var to_50407 = cljs.core.nth.call(null,vec__50394_50405,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50406),to_50407,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__50408 = seq__50384_50401;
var G__50409 = chunk__50385_50402;
var G__50410 = count__50386_50403;
var G__50411 = (i__50387_50404 + (1));
seq__50384_50401 = G__50408;
chunk__50385_50402 = G__50409;
count__50386_50403 = G__50410;
i__50387_50404 = G__50411;
continue;
} else {
var temp__5735__auto___50412 = cljs.core.seq.call(null,seq__50384_50401);
if(temp__5735__auto___50412){
var seq__50384_50413__$1 = temp__5735__auto___50412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50384_50413__$1)){
var c__4556__auto___50414 = cljs.core.chunk_first.call(null,seq__50384_50413__$1);
var G__50415 = cljs.core.chunk_rest.call(null,seq__50384_50413__$1);
var G__50416 = c__4556__auto___50414;
var G__50417 = cljs.core.count.call(null,c__4556__auto___50414);
var G__50418 = (0);
seq__50384_50401 = G__50415;
chunk__50385_50402 = G__50416;
count__50386_50403 = G__50417;
i__50387_50404 = G__50418;
continue;
} else {
var vec__50397_50419 = cljs.core.first.call(null,seq__50384_50413__$1);
var from_50420 = cljs.core.nth.call(null,vec__50397_50419,(0),null);
var to_50421 = cljs.core.nth.call(null,vec__50397_50419,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50420),to_50421,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__50422 = cljs.core.next.call(null,seq__50384_50413__$1);
var G__50423 = null;
var G__50424 = (0);
var G__50425 = (0);
seq__50384_50401 = G__50422;
chunk__50385_50402 = G__50423;
count__50386_50403 = G__50424;
i__50387_50404 = G__50425;
continue;
}
} else {
}
}
break;
}

return states;
}));

(mount.core.swap_states.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
mount.core.ChangeListener = function(){};

var mount$core$ChangeListener$add_watcher$dyn_50426 = (function (this$,ks,watcher){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (mount.core.add_watcher[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,ks,watcher);
} else {
var m__4426__auto__ = (mount.core.add_watcher["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,ks,watcher);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.add-watcher",this$);
}
}
});
mount.core.add_watcher = (function mount$core$add_watcher(this$,ks,watcher){
if((((!((this$ == null)))) && ((!((this$.mount$core$ChangeListener$add_watcher$arity$3 == null)))))){
return this$.mount$core$ChangeListener$add_watcher$arity$3(this$,ks,watcher);
} else {
return mount$core$ChangeListener$add_watcher$dyn_50426.call(null,this$,ks,watcher);
}
});

var mount$core$ChangeListener$on_change$dyn_50427 = (function (this$,k){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (mount.core.on_change[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,k);
} else {
var m__4426__auto__ = (mount.core.on_change["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,k);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.on-change",this$);
}
}
});
mount.core.on_change = (function mount$core$on_change(this$,k){
if((((!((this$ == null)))) && ((!((this$.mount$core$ChangeListener$on_change$arity$2 == null)))))){
return this$.mount$core$ChangeListener$on_change$arity$2(this$,k);
} else {
return mount$core$ChangeListener$on_change$dyn_50427.call(null,this$,k);
}
});


/**
* @constructor
 * @implements {mount.core.ChangeListener}
*/
mount.core.RestartListener = (function (watchers){
this.watchers = watchers;
});
(mount.core.RestartListener.prototype.mount$core$ChangeListener$ = cljs.core.PROTOCOL_SENTINEL);

(mount.core.RestartListener.prototype.mount$core$ChangeListener$add_watcher$arity$3 = (function (_,ks,state){
var self__ = this;
var ___$1 = this;
var seq__50428 = cljs.core.seq.call(null,ks);
var chunk__50429 = null;
var count__50430 = (0);
var i__50431 = (0);
while(true){
if((i__50431 < count__50430)){
var k = cljs.core._nth.call(null,chunk__50429,i__50431);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__50428,chunk__50429,count__50430,i__50431,k,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__50428,chunk__50429,count__50430,i__50431,k,___$1))
);


var G__50436 = seq__50428;
var G__50437 = chunk__50429;
var G__50438 = count__50430;
var G__50439 = (i__50431 + (1));
seq__50428 = G__50436;
chunk__50429 = G__50437;
count__50430 = G__50438;
i__50431 = G__50439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__50428);
if(temp__5735__auto__){
var seq__50428__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50428__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__50428__$1);
var G__50440 = cljs.core.chunk_rest.call(null,seq__50428__$1);
var G__50441 = c__4556__auto__;
var G__50442 = cljs.core.count.call(null,c__4556__auto__);
var G__50443 = (0);
seq__50428 = G__50440;
chunk__50429 = G__50441;
count__50430 = G__50442;
i__50431 = G__50443;
continue;
} else {
var k = cljs.core.first.call(null,seq__50428__$1);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__50428,chunk__50429,count__50430,i__50431,k,seq__50428__$1,temp__5735__auto__,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__50428,chunk__50429,count__50430,i__50431,k,seq__50428__$1,temp__5735__auto__,___$1))
);


var G__50444 = cljs.core.next.call(null,seq__50428__$1);
var G__50445 = null;
var G__50446 = (0);
var G__50447 = (0);
seq__50428 = G__50444;
chunk__50429 = G__50445;
count__50430 = G__50446;
i__50431 = G__50447;
continue;
}
} else {
return null;
}
}
break;
}
}));

(mount.core.RestartListener.prototype.mount$core$ChangeListener$on_change$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
var seq__50432 = cljs.core.seq.call(null,ks);
var chunk__50433 = null;
var count__50434 = (0);
var i__50435 = (0);
while(true){
if((i__50435 < count__50434)){
var k = cljs.core._nth.call(null,chunk__50433,i__50435);
var temp__5735__auto___50448 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5735__auto___50448){
var states_50449 = temp__5735__auto___50448;
cljs.core.apply.call(null,mount.core.stop,states_50449);

cljs.core.apply.call(null,mount.core.start,states_50449);
} else {
}


var G__50450 = seq__50432;
var G__50451 = chunk__50433;
var G__50452 = count__50434;
var G__50453 = (i__50435 + (1));
seq__50432 = G__50450;
chunk__50433 = G__50451;
count__50434 = G__50452;
i__50435 = G__50453;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__50432);
if(temp__5735__auto__){
var seq__50432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50432__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__50432__$1);
var G__50454 = cljs.core.chunk_rest.call(null,seq__50432__$1);
var G__50455 = c__4556__auto__;
var G__50456 = cljs.core.count.call(null,c__4556__auto__);
var G__50457 = (0);
seq__50432 = G__50454;
chunk__50433 = G__50455;
count__50434 = G__50456;
i__50435 = G__50457;
continue;
} else {
var k = cljs.core.first.call(null,seq__50432__$1);
var temp__5735__auto___50458__$1 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5735__auto___50458__$1){
var states_50459 = temp__5735__auto___50458__$1;
cljs.core.apply.call(null,mount.core.stop,states_50459);

cljs.core.apply.call(null,mount.core.start,states_50459);
} else {
}


var G__50460 = cljs.core.next.call(null,seq__50432__$1);
var G__50461 = null;
var G__50462 = (0);
var G__50463 = (0);
seq__50432 = G__50460;
chunk__50433 = G__50461;
count__50434 = G__50462;
i__50435 = G__50463;
continue;
}
} else {
return null;
}
}
break;
}
}));

(mount.core.RestartListener.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watchers","watchers",-1799060888,null)], null);
}));

(mount.core.RestartListener.cljs$lang$type = true);

(mount.core.RestartListener.cljs$lang$ctorStr = "mount.core/RestartListener");

(mount.core.RestartListener.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"mount.core/RestartListener");
}));

/**
 * Positional factory function for mount.core/RestartListener.
 */
mount.core.__GT_RestartListener = (function mount$core$__GT_RestartListener(watchers){
return (new mount.core.RestartListener(watchers));
});

mount.core.restart_listener = (function mount$core$restart_listener(var_args){
var G__50465 = arguments.length;
switch (G__50465) {
case 0:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0 = (function (){
return mount.core.restart_listener.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1 = (function (watchers){
return (new mount.core.RestartListener(cljs.core.atom.call(null,watchers)));
}));

(mount.core.restart_listener.cljs$lang$maxFixedArity = 1);

mount.core.stop_except = (function mount$core$stop_except(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50468 = arguments.length;
var i__4737__auto___50469 = (0);
while(true){
if((i__4737__auto___50469 < len__4736__auto___50468)){
args__4742__auto__.push((arguments[i__4737__auto___50469]));

var G__50470 = (i__4737__auto___50469 + (1));
i__4737__auto___50469 = G__50470;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var all = cljs.core.set.call(null,mount.core.find_all_states.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var states__$2 = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),all);
if((!(cljs.core.empty_QMARK_.call(null,states__$2)))){
return cljs.core.apply.call(null,mount.core.stop,states__$2);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),cljs.core.PersistentHashSet.EMPTY], null);
}
}));

(mount.core.stop_except.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mount.core.stop_except.cljs$lang$applyTo = (function (seq50467){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50467));
}));

mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50473 = arguments.length;
var i__4737__auto___50474 = (0);
while(true){
if((i__4737__auto___50474 < len__4736__auto___50473)){
args__4742__auto__.push((arguments[i__4737__auto___50474]));

var G__50475 = (i__4737__auto___50474 + (1));
i__4737__auto___50474 = G__50475;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic = (function (xs,states){
cljs.core.reset_BANG_.call(null,mount.core._args,xs);

if(cljs.core.truth_(cljs.core.first.call(null,states))){
return cljs.core.apply.call(null,mount.core.start,states);
} else {
return mount.core.start.call(null);
}
}));

(mount.core.start_with_args.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mount.core.start_with_args.cljs$lang$applyTo = (function (seq50471){
var G__50472 = cljs.core.first.call(null,seq50471);
var seq50471__$1 = cljs.core.next.call(null,seq50471);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50472,seq50471__$1);
}));

mount.core.start_with = (function mount$core$start_with(with$){
var seq__50476_50492 = cljs.core.seq.call(null,with$);
var chunk__50477_50493 = null;
var count__50478_50494 = (0);
var i__50479_50495 = (0);
while(true){
if((i__50479_50495 < count__50478_50494)){
var vec__50486_50496 = cljs.core._nth.call(null,chunk__50477_50493,i__50479_50495);
var from_50497 = cljs.core.nth.call(null,vec__50486_50496,(0),null);
var to_50498 = cljs.core.nth.call(null,vec__50486_50496,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50497),to_50498,new cljs.core.Keyword(null,"value","value",305978217));


var G__50499 = seq__50476_50492;
var G__50500 = chunk__50477_50493;
var G__50501 = count__50478_50494;
var G__50502 = (i__50479_50495 + (1));
seq__50476_50492 = G__50499;
chunk__50477_50493 = G__50500;
count__50478_50494 = G__50501;
i__50479_50495 = G__50502;
continue;
} else {
var temp__5735__auto___50503 = cljs.core.seq.call(null,seq__50476_50492);
if(temp__5735__auto___50503){
var seq__50476_50504__$1 = temp__5735__auto___50503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50476_50504__$1)){
var c__4556__auto___50505 = cljs.core.chunk_first.call(null,seq__50476_50504__$1);
var G__50506 = cljs.core.chunk_rest.call(null,seq__50476_50504__$1);
var G__50507 = c__4556__auto___50505;
var G__50508 = cljs.core.count.call(null,c__4556__auto___50505);
var G__50509 = (0);
seq__50476_50492 = G__50506;
chunk__50477_50493 = G__50507;
count__50478_50494 = G__50508;
i__50479_50495 = G__50509;
continue;
} else {
var vec__50489_50510 = cljs.core.first.call(null,seq__50476_50504__$1);
var from_50511 = cljs.core.nth.call(null,vec__50489_50510,(0),null);
var to_50512 = cljs.core.nth.call(null,vec__50489_50510,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50511),to_50512,new cljs.core.Keyword(null,"value","value",305978217));


var G__50513 = cljs.core.next.call(null,seq__50476_50504__$1);
var G__50514 = null;
var G__50515 = (0);
var G__50516 = (0);
seq__50476_50492 = G__50513;
chunk__50477_50493 = G__50514;
count__50478_50494 = G__50515;
i__50479_50495 = G__50516;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_with_states = (function mount$core$start_with_states(with$){
var seq__50517_50533 = cljs.core.seq.call(null,with$);
var chunk__50518_50534 = null;
var count__50519_50535 = (0);
var i__50520_50536 = (0);
while(true){
if((i__50520_50536 < count__50519_50535)){
var vec__50527_50537 = cljs.core._nth.call(null,chunk__50518_50534,i__50520_50536);
var from_50538 = cljs.core.nth.call(null,vec__50527_50537,(0),null);
var to_50539 = cljs.core.nth.call(null,vec__50527_50537,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50538),to_50539,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__50540 = seq__50517_50533;
var G__50541 = chunk__50518_50534;
var G__50542 = count__50519_50535;
var G__50543 = (i__50520_50536 + (1));
seq__50517_50533 = G__50540;
chunk__50518_50534 = G__50541;
count__50519_50535 = G__50542;
i__50520_50536 = G__50543;
continue;
} else {
var temp__5735__auto___50544 = cljs.core.seq.call(null,seq__50517_50533);
if(temp__5735__auto___50544){
var seq__50517_50545__$1 = temp__5735__auto___50544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50517_50545__$1)){
var c__4556__auto___50546 = cljs.core.chunk_first.call(null,seq__50517_50545__$1);
var G__50547 = cljs.core.chunk_rest.call(null,seq__50517_50545__$1);
var G__50548 = c__4556__auto___50546;
var G__50549 = cljs.core.count.call(null,c__4556__auto___50546);
var G__50550 = (0);
seq__50517_50533 = G__50547;
chunk__50518_50534 = G__50548;
count__50519_50535 = G__50549;
i__50520_50536 = G__50550;
continue;
} else {
var vec__50530_50551 = cljs.core.first.call(null,seq__50517_50545__$1);
var from_50552 = cljs.core.nth.call(null,vec__50530_50551,(0),null);
var to_50553 = cljs.core.nth.call(null,vec__50530_50551,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_50552),to_50553,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__50554 = cljs.core.next.call(null,seq__50517_50545__$1);
var G__50555 = null;
var G__50556 = (0);
var G__50557 = (0);
seq__50517_50533 = G__50554;
chunk__50518_50534 = G__50555;
count__50519_50535 = G__50556;
i__50520_50536 = G__50557;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_without = (function mount$core$start_without(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50559 = arguments.length;
var i__4737__auto___50560 = (0);
while(true){
if((i__4737__auto___50560 < len__4736__auto___50559)){
args__4742__auto__.push((arguments[i__4737__auto___50560]));

var G__50561 = (i__4737__auto___50560 + (1));
i__4737__auto___50560 = G__50561;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic = (function (states){
if(cljs.core.truth_(cljs.core.first.call(null,states))){
var app = cljs.core.set.call(null,mount.core.all_without_subs.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var without = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),app);
if((!(cljs.core.empty_QMARK_.call(null,without)))){
return cljs.core.apply.call(null,mount.core.start,without);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
return mount.core.start.call(null);
}
}));

(mount.core.start_without.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(mount.core.start_without.cljs$lang$applyTo = (function (seq50558){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50558));
}));


//# sourceMappingURL=core.js.map?rel=1615710651964
