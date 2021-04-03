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

mount.core.validate = (function mount$core$validate(p__7939){
var map__7940 = p__7939;
var map__7940__$1 = (((((!((map__7940 == null))))?(((((map__7940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7940):map__7940);
var lifecycle = map__7940__$1;
var start = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__7940__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
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
var map__7942 = temp__5735__auto__;
var map__7942__$1 = (((((!((map__7942 == null))))?(((((map__7942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7942):map__7942);
var up = map__7942__$1;
var stop = cljs.core.get.call(null,map__7942__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
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
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__7944,value){
var map__7945 = p__7944;
var map__7945__$1 = (((((!((map__7945 == null))))?(((((map__7945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7945):map__7945);
var inst = cljs.core.get.call(null,map__7945__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
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
mount.core.up = (function mount$core$up(state,p__7947,done){
var map__7948 = p__7947;
var map__7948__$1 = (((((!((map__7948 == null))))?(((((map__7948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7948):map__7948);
var current = map__7948__$1;
var start = cljs.core.get.call(null,map__7948__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__7948__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__7948__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{return mount.core.record_BANG_.call(null,state,start,done);
}catch (e7950){var t__344__auto__ = e7950;
throw Error([["could not start [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join('')," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__344__auto__)].join(''));

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
mount.core.down = (function mount$core$down(state,p__7951,done){
var map__7952 = p__7951;
var map__7952__$1 = (((((!((map__7952 == null))))?(((((map__7952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7952):map__7952);
var current = map__7952__$1;
var stop = cljs.core.get.call(null,map__7952__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__7952__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(cljs.core.some.call(null,status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null)))){
if(cljs.core.truth_(stop)){
var temp__5733__auto___7955 = new cljs.core.Keyword(null,"f-failed","f-failed",463707059).cljs$core$IFn$_invoke$arity$1((function (){try{return mount.core.record_BANG_.call(null,state,stop,done);
}catch (e7954){var t__344__auto__ = e7954;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f-failed","f-failed",463707059),cljs.core.ex_info.call(null,["could not stop [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''),cljs.core.PersistentArrayMap.EMPTY,t__344__auto__)], null);

}})());
if(cljs.core.truth_(temp__5733__auto___7955)){
var cause_7956 = temp__5733__auto___7955;
mount.tools.logger.log.call(null,cause_7956,new cljs.core.Keyword(null,"error","error",-978969032));
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
var map__7957 = cljs.core.deref.call(null,mount.core.meta_state).call(null,self__.name);
var map__7957__$1 = (((((!((map__7957 == null))))?(((((map__7957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7957):map__7957);
var state = map__7957__$1;
var status = cljs.core.get.call(null,map__7957__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var var$ = cljs.core.get.call(null,map__7957__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var inst = cljs.core.get.call(null,map__7957__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
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
var map__7959 = cljs.core.deref.call(null,mount.core.meta_state).call(null,s_name);
var map__7959__$1 = (((((!((map__7959 == null))))?(((((map__7959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7959):map__7959);
var var$ = cljs.core.get.call(null,map__7959__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var status = cljs.core.get.call(null,map__7959__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var map__7961 = cljs.core.meta.call(null,v);
var map__7961__$1 = (((((!((map__7961 == null))))?(((((map__7961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7961):map__7961);
var ns = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__7961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var $_7979 = states;
var $_7980__$1 = cljs.core.map.call(null,mount.core.var_to_str,$_7979);
var $_7981__$2 = cljs.core.select_keys.call(null,cljs.core.deref.call(null,mount.core.meta_state),$_7980__$1);
var $_7982__$3 = cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.val),order,$_7981__$2);
var seq__7963_7983 = cljs.core.seq.call(null,$_7982__$3);
var chunk__7964_7984 = null;
var count__7965_7985 = (0);
var i__7966_7986 = (0);
while(true){
if((i__7966_7986 < count__7965_7985)){
var vec__7973_7987 = cljs.core._nth.call(null,chunk__7964_7984,i__7966_7986);
var k_7988 = cljs.core.nth.call(null,vec__7973_7987,(0),null);
var v_7989 = cljs.core.nth.call(null,vec__7973_7987,(1),null);
fun.call(null,k_7988,v_7989,done);


var G__7990 = seq__7963_7983;
var G__7991 = chunk__7964_7984;
var G__7992 = count__7965_7985;
var G__7993 = (i__7966_7986 + (1));
seq__7963_7983 = G__7990;
chunk__7964_7984 = G__7991;
count__7965_7985 = G__7992;
i__7966_7986 = G__7993;
continue;
} else {
var temp__5735__auto___7994 = cljs.core.seq.call(null,seq__7963_7983);
if(temp__5735__auto___7994){
var seq__7963_7995__$1 = temp__5735__auto___7994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7963_7995__$1)){
var c__4556__auto___7996 = cljs.core.chunk_first.call(null,seq__7963_7995__$1);
var G__7997 = cljs.core.chunk_rest.call(null,seq__7963_7995__$1);
var G__7998 = c__4556__auto___7996;
var G__7999 = cljs.core.count.call(null,c__4556__auto___7996);
var G__8000 = (0);
seq__7963_7983 = G__7997;
chunk__7964_7984 = G__7998;
count__7965_7985 = G__7999;
i__7966_7986 = G__8000;
continue;
} else {
var vec__7976_8001 = cljs.core.first.call(null,seq__7963_7995__$1);
var k_8002 = cljs.core.nth.call(null,vec__7976_8001,(0),null);
var v_8003 = cljs.core.nth.call(null,vec__7976_8001,(1),null);
fun.call(null,k_8002,v_8003,done);


var G__8004 = cljs.core.next.call(null,seq__7963_7995__$1);
var G__8005 = null;
var G__8006 = (0);
var G__8007 = (0);
seq__7963_7983 = G__8004;
chunk__7964_7984 = G__8005;
count__7965_7985 = G__8006;
i__7966_7986 = G__8007;
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
var G__8009 = arguments.length;
switch (G__8009) {
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

(mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__8010){
var map__8011 = p__8010;
var map__8011__$1 = (((((!((map__8011 == null))))?(((((map__8011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8011):map__8011);
var start = cljs.core.get.call(null,map__8011__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__8011__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__8011__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop);
}));

(mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3);

mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__8014 = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var map__8014__$1 = (((((!((map__8014 == null))))?(((((map__8014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8014):map__8014);
var sub = map__8014__$1;
var origin = cljs.core.get.call(null,map__8014__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$,mode){
var lifecycle_fns = (function (p1__8016_SHARP_){
return cljs.core.select_keys.call(null,p1__8016_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
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
var len__4736__auto___8018 = arguments.length;
var i__4737__auto___8019 = (0);
while(true){
if((i__4737__auto___8019 < len__4736__auto___8018)){
args__4742__auto__.push((arguments[i__4737__auto___8019]));

var G__8020 = (i__4737__auto___8019 + (1));
i__4737__auto___8019 = G__8020;
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
(mount.core.start.cljs$lang$applyTo = (function (seq8017){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8017));
}));

mount.core.stop = (function mount$core$stop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8022 = arguments.length;
var i__4737__auto___8023 = (0);
while(true){
if((i__4737__auto___8023 < len__4736__auto___8022)){
args__4742__auto__.push((arguments[i__4737__auto___8023]));

var G__8024 = (i__4737__auto___8023 + (1));
i__4737__auto___8023 = G__8024;
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
(mount.core.stop.cljs$lang$applyTo = (function (seq8021){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8021));
}));

mount.core.mapset = (function mount$core$mapset(f,xs){
return cljs.core.set.call(null,cljs.core.map.call(null,f,xs));
});
mount.core.only = (function mount$core$only(var_args){
var G__8026 = arguments.length;
switch (G__8026) {
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
var G__8029 = arguments.length;
switch (G__8029) {
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
var G__8032 = arguments.length;
switch (G__8032) {
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
var G__8035 = arguments.length;
switch (G__8035) {
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
var seq__8036_8053 = cljs.core.seq.call(null,with$);
var chunk__8037_8054 = null;
var count__8038_8055 = (0);
var i__8039_8056 = (0);
while(true){
if((i__8039_8056 < count__8038_8055)){
var vec__8046_8057 = cljs.core._nth.call(null,chunk__8037_8054,i__8039_8056);
var from_8058 = cljs.core.nth.call(null,vec__8046_8057,(0),null);
var to_8059 = cljs.core.nth.call(null,vec__8046_8057,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8058),to_8059,new cljs.core.Keyword(null,"value","value",305978217));


var G__8060 = seq__8036_8053;
var G__8061 = chunk__8037_8054;
var G__8062 = count__8038_8055;
var G__8063 = (i__8039_8056 + (1));
seq__8036_8053 = G__8060;
chunk__8037_8054 = G__8061;
count__8038_8055 = G__8062;
i__8039_8056 = G__8063;
continue;
} else {
var temp__5735__auto___8064 = cljs.core.seq.call(null,seq__8036_8053);
if(temp__5735__auto___8064){
var seq__8036_8065__$1 = temp__5735__auto___8064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8036_8065__$1)){
var c__4556__auto___8066 = cljs.core.chunk_first.call(null,seq__8036_8065__$1);
var G__8067 = cljs.core.chunk_rest.call(null,seq__8036_8065__$1);
var G__8068 = c__4556__auto___8066;
var G__8069 = cljs.core.count.call(null,c__4556__auto___8066);
var G__8070 = (0);
seq__8036_8053 = G__8067;
chunk__8037_8054 = G__8068;
count__8038_8055 = G__8069;
i__8039_8056 = G__8070;
continue;
} else {
var vec__8049_8071 = cljs.core.first.call(null,seq__8036_8065__$1);
var from_8072 = cljs.core.nth.call(null,vec__8049_8071,(0),null);
var to_8073 = cljs.core.nth.call(null,vec__8049_8071,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8072),to_8073,new cljs.core.Keyword(null,"value","value",305978217));


var G__8074 = cljs.core.next.call(null,seq__8036_8065__$1);
var G__8075 = null;
var G__8076 = (0);
var G__8077 = (0);
seq__8036_8053 = G__8074;
chunk__8037_8054 = G__8075;
count__8038_8055 = G__8076;
i__8039_8056 = G__8077;
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
var G__8079 = arguments.length;
switch (G__8079) {
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
var seq__8080_8097 = cljs.core.seq.call(null,with$);
var chunk__8081_8098 = null;
var count__8082_8099 = (0);
var i__8083_8100 = (0);
while(true){
if((i__8083_8100 < count__8082_8099)){
var vec__8090_8101 = cljs.core._nth.call(null,chunk__8081_8098,i__8083_8100);
var from_8102 = cljs.core.nth.call(null,vec__8090_8101,(0),null);
var to_8103 = cljs.core.nth.call(null,vec__8090_8101,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8102),to_8103,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__8104 = seq__8080_8097;
var G__8105 = chunk__8081_8098;
var G__8106 = count__8082_8099;
var G__8107 = (i__8083_8100 + (1));
seq__8080_8097 = G__8104;
chunk__8081_8098 = G__8105;
count__8082_8099 = G__8106;
i__8083_8100 = G__8107;
continue;
} else {
var temp__5735__auto___8108 = cljs.core.seq.call(null,seq__8080_8097);
if(temp__5735__auto___8108){
var seq__8080_8109__$1 = temp__5735__auto___8108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8080_8109__$1)){
var c__4556__auto___8110 = cljs.core.chunk_first.call(null,seq__8080_8109__$1);
var G__8111 = cljs.core.chunk_rest.call(null,seq__8080_8109__$1);
var G__8112 = c__4556__auto___8110;
var G__8113 = cljs.core.count.call(null,c__4556__auto___8110);
var G__8114 = (0);
seq__8080_8097 = G__8111;
chunk__8081_8098 = G__8112;
count__8082_8099 = G__8113;
i__8083_8100 = G__8114;
continue;
} else {
var vec__8093_8115 = cljs.core.first.call(null,seq__8080_8109__$1);
var from_8116 = cljs.core.nth.call(null,vec__8093_8115,(0),null);
var to_8117 = cljs.core.nth.call(null,vec__8093_8115,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8116),to_8117,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__8118 = cljs.core.next.call(null,seq__8080_8109__$1);
var G__8119 = null;
var G__8120 = (0);
var G__8121 = (0);
seq__8080_8097 = G__8118;
chunk__8081_8098 = G__8119;
count__8082_8099 = G__8120;
i__8083_8100 = G__8121;
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

var mount$core$ChangeListener$add_watcher$dyn_8122 = (function (this$,ks,watcher){
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
return mount$core$ChangeListener$add_watcher$dyn_8122.call(null,this$,ks,watcher);
}
});

var mount$core$ChangeListener$on_change$dyn_8123 = (function (this$,k){
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
return mount$core$ChangeListener$on_change$dyn_8123.call(null,this$,k);
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
var seq__8124 = cljs.core.seq.call(null,ks);
var chunk__8125 = null;
var count__8126 = (0);
var i__8127 = (0);
while(true){
if((i__8127 < count__8126)){
var k = cljs.core._nth.call(null,chunk__8125,i__8127);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__8124,chunk__8125,count__8126,i__8127,k,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__8124,chunk__8125,count__8126,i__8127,k,___$1))
);


var G__8132 = seq__8124;
var G__8133 = chunk__8125;
var G__8134 = count__8126;
var G__8135 = (i__8127 + (1));
seq__8124 = G__8132;
chunk__8125 = G__8133;
count__8126 = G__8134;
i__8127 = G__8135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8124);
if(temp__5735__auto__){
var seq__8124__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8124__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8124__$1);
var G__8136 = cljs.core.chunk_rest.call(null,seq__8124__$1);
var G__8137 = c__4556__auto__;
var G__8138 = cljs.core.count.call(null,c__4556__auto__);
var G__8139 = (0);
seq__8124 = G__8136;
chunk__8125 = G__8137;
count__8126 = G__8138;
i__8127 = G__8139;
continue;
} else {
var k = cljs.core.first.call(null,seq__8124__$1);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__8124,chunk__8125,count__8126,i__8127,k,seq__8124__$1,temp__5735__auto__,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__8124,chunk__8125,count__8126,i__8127,k,seq__8124__$1,temp__5735__auto__,___$1))
);


var G__8140 = cljs.core.next.call(null,seq__8124__$1);
var G__8141 = null;
var G__8142 = (0);
var G__8143 = (0);
seq__8124 = G__8140;
chunk__8125 = G__8141;
count__8126 = G__8142;
i__8127 = G__8143;
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
var seq__8128 = cljs.core.seq.call(null,ks);
var chunk__8129 = null;
var count__8130 = (0);
var i__8131 = (0);
while(true){
if((i__8131 < count__8130)){
var k = cljs.core._nth.call(null,chunk__8129,i__8131);
var temp__5735__auto___8144 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5735__auto___8144){
var states_8145 = temp__5735__auto___8144;
cljs.core.apply.call(null,mount.core.stop,states_8145);

cljs.core.apply.call(null,mount.core.start,states_8145);
} else {
}


var G__8146 = seq__8128;
var G__8147 = chunk__8129;
var G__8148 = count__8130;
var G__8149 = (i__8131 + (1));
seq__8128 = G__8146;
chunk__8129 = G__8147;
count__8130 = G__8148;
i__8131 = G__8149;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8128);
if(temp__5735__auto__){
var seq__8128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8128__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8128__$1);
var G__8150 = cljs.core.chunk_rest.call(null,seq__8128__$1);
var G__8151 = c__4556__auto__;
var G__8152 = cljs.core.count.call(null,c__4556__auto__);
var G__8153 = (0);
seq__8128 = G__8150;
chunk__8129 = G__8151;
count__8130 = G__8152;
i__8131 = G__8153;
continue;
} else {
var k = cljs.core.first.call(null,seq__8128__$1);
var temp__5735__auto___8154__$1 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5735__auto___8154__$1){
var states_8155 = temp__5735__auto___8154__$1;
cljs.core.apply.call(null,mount.core.stop,states_8155);

cljs.core.apply.call(null,mount.core.start,states_8155);
} else {
}


var G__8156 = cljs.core.next.call(null,seq__8128__$1);
var G__8157 = null;
var G__8158 = (0);
var G__8159 = (0);
seq__8128 = G__8156;
chunk__8129 = G__8157;
count__8130 = G__8158;
i__8131 = G__8159;
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
var G__8161 = arguments.length;
switch (G__8161) {
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
var len__4736__auto___8164 = arguments.length;
var i__4737__auto___8165 = (0);
while(true){
if((i__4737__auto___8165 < len__4736__auto___8164)){
args__4742__auto__.push((arguments[i__4737__auto___8165]));

var G__8166 = (i__4737__auto___8165 + (1));
i__4737__auto___8165 = G__8166;
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
(mount.core.stop_except.cljs$lang$applyTo = (function (seq8163){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8163));
}));

mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8169 = arguments.length;
var i__4737__auto___8170 = (0);
while(true){
if((i__4737__auto___8170 < len__4736__auto___8169)){
args__4742__auto__.push((arguments[i__4737__auto___8170]));

var G__8171 = (i__4737__auto___8170 + (1));
i__4737__auto___8170 = G__8171;
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
(mount.core.start_with_args.cljs$lang$applyTo = (function (seq8167){
var G__8168 = cljs.core.first.call(null,seq8167);
var seq8167__$1 = cljs.core.next.call(null,seq8167);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8168,seq8167__$1);
}));

mount.core.start_with = (function mount$core$start_with(with$){
var seq__8172_8188 = cljs.core.seq.call(null,with$);
var chunk__8173_8189 = null;
var count__8174_8190 = (0);
var i__8175_8191 = (0);
while(true){
if((i__8175_8191 < count__8174_8190)){
var vec__8182_8192 = cljs.core._nth.call(null,chunk__8173_8189,i__8175_8191);
var from_8193 = cljs.core.nth.call(null,vec__8182_8192,(0),null);
var to_8194 = cljs.core.nth.call(null,vec__8182_8192,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8193),to_8194,new cljs.core.Keyword(null,"value","value",305978217));


var G__8195 = seq__8172_8188;
var G__8196 = chunk__8173_8189;
var G__8197 = count__8174_8190;
var G__8198 = (i__8175_8191 + (1));
seq__8172_8188 = G__8195;
chunk__8173_8189 = G__8196;
count__8174_8190 = G__8197;
i__8175_8191 = G__8198;
continue;
} else {
var temp__5735__auto___8199 = cljs.core.seq.call(null,seq__8172_8188);
if(temp__5735__auto___8199){
var seq__8172_8200__$1 = temp__5735__auto___8199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8172_8200__$1)){
var c__4556__auto___8201 = cljs.core.chunk_first.call(null,seq__8172_8200__$1);
var G__8202 = cljs.core.chunk_rest.call(null,seq__8172_8200__$1);
var G__8203 = c__4556__auto___8201;
var G__8204 = cljs.core.count.call(null,c__4556__auto___8201);
var G__8205 = (0);
seq__8172_8188 = G__8202;
chunk__8173_8189 = G__8203;
count__8174_8190 = G__8204;
i__8175_8191 = G__8205;
continue;
} else {
var vec__8185_8206 = cljs.core.first.call(null,seq__8172_8200__$1);
var from_8207 = cljs.core.nth.call(null,vec__8185_8206,(0),null);
var to_8208 = cljs.core.nth.call(null,vec__8185_8206,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8207),to_8208,new cljs.core.Keyword(null,"value","value",305978217));


var G__8209 = cljs.core.next.call(null,seq__8172_8200__$1);
var G__8210 = null;
var G__8211 = (0);
var G__8212 = (0);
seq__8172_8188 = G__8209;
chunk__8173_8189 = G__8210;
count__8174_8190 = G__8211;
i__8175_8191 = G__8212;
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
var seq__8213_8229 = cljs.core.seq.call(null,with$);
var chunk__8214_8230 = null;
var count__8215_8231 = (0);
var i__8216_8232 = (0);
while(true){
if((i__8216_8232 < count__8215_8231)){
var vec__8223_8233 = cljs.core._nth.call(null,chunk__8214_8230,i__8216_8232);
var from_8234 = cljs.core.nth.call(null,vec__8223_8233,(0),null);
var to_8235 = cljs.core.nth.call(null,vec__8223_8233,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8234),to_8235,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__8236 = seq__8213_8229;
var G__8237 = chunk__8214_8230;
var G__8238 = count__8215_8231;
var G__8239 = (i__8216_8232 + (1));
seq__8213_8229 = G__8236;
chunk__8214_8230 = G__8237;
count__8215_8231 = G__8238;
i__8216_8232 = G__8239;
continue;
} else {
var temp__5735__auto___8240 = cljs.core.seq.call(null,seq__8213_8229);
if(temp__5735__auto___8240){
var seq__8213_8241__$1 = temp__5735__auto___8240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213_8241__$1)){
var c__4556__auto___8242 = cljs.core.chunk_first.call(null,seq__8213_8241__$1);
var G__8243 = cljs.core.chunk_rest.call(null,seq__8213_8241__$1);
var G__8244 = c__4556__auto___8242;
var G__8245 = cljs.core.count.call(null,c__4556__auto___8242);
var G__8246 = (0);
seq__8213_8229 = G__8243;
chunk__8214_8230 = G__8244;
count__8215_8231 = G__8245;
i__8216_8232 = G__8246;
continue;
} else {
var vec__8226_8247 = cljs.core.first.call(null,seq__8213_8241__$1);
var from_8248 = cljs.core.nth.call(null,vec__8226_8247,(0),null);
var to_8249 = cljs.core.nth.call(null,vec__8226_8247,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_8248),to_8249,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__8250 = cljs.core.next.call(null,seq__8213_8241__$1);
var G__8251 = null;
var G__8252 = (0);
var G__8253 = (0);
seq__8213_8229 = G__8250;
chunk__8214_8230 = G__8251;
count__8215_8231 = G__8252;
i__8216_8232 = G__8253;
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
var len__4736__auto___8255 = arguments.length;
var i__4737__auto___8256 = (0);
while(true){
if((i__4737__auto___8256 < len__4736__auto___8255)){
args__4742__auto__.push((arguments[i__4737__auto___8256]));

var G__8257 = (i__4737__auto___8256 + (1));
i__4737__auto___8256 = G__8257;
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
(mount.core.start_without.cljs$lang$applyTo = (function (seq8254){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8254));
}));

