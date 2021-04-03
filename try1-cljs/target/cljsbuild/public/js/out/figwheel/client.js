// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e56747){if((e56747 instanceof Error)){
var e = e56747;
return "Error: Unable to stringify";
} else {
throw e56747;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__56750 = arguments.length;
switch (G__56750) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__56748_SHARP_){
if(typeof p1__56748_SHARP_ === 'string'){
return p1__56748_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__56748_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56753 = arguments.length;
var i__4737__auto___56754 = (0);
while(true){
if((i__4737__auto___56754 < len__4736__auto___56753)){
args__4742__auto__.push((arguments[i__4737__auto___56754]));

var G__56755 = (i__4737__auto___56754 + (1));
i__4737__auto___56754 = G__56755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56752){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56752));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56757 = arguments.length;
var i__4737__auto___56758 = (0);
while(true){
if((i__4737__auto___56758 < len__4736__auto___56757)){
args__4742__auto__.push((arguments[i__4737__auto___56758]));

var G__56759 = (i__4737__auto___56758 + (1));
i__4737__auto___56758 = G__56759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56756){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56756));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56760){
var map__56761 = p__56760;
var map__56761__$1 = (((((!((map__56761 == null))))?(((((map__56761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56761):map__56761);
var message = cljs.core.get.call(null,map__56761__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56761__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__53628__auto___56840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_56812){
var state_val_56813 = (state_56812[(1)]);
if((state_val_56813 === (7))){
var inst_56808 = (state_56812[(2)]);
var state_56812__$1 = state_56812;
var statearr_56814_56841 = state_56812__$1;
(statearr_56814_56841[(2)] = inst_56808);

(statearr_56814_56841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (1))){
var state_56812__$1 = state_56812;
var statearr_56815_56842 = state_56812__$1;
(statearr_56815_56842[(2)] = null);

(statearr_56815_56842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (4))){
var inst_56765 = (state_56812[(7)]);
var inst_56765__$1 = (state_56812[(2)]);
var state_56812__$1 = (function (){var statearr_56816 = state_56812;
(statearr_56816[(7)] = inst_56765__$1);

return statearr_56816;
})();
if(cljs.core.truth_(inst_56765__$1)){
var statearr_56817_56843 = state_56812__$1;
(statearr_56817_56843[(1)] = (5));

} else {
var statearr_56818_56844 = state_56812__$1;
(statearr_56818_56844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (15))){
var inst_56772 = (state_56812[(8)]);
var inst_56787 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56772);
var inst_56788 = cljs.core.first.call(null,inst_56787);
var inst_56789 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56788);
var inst_56790 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56789)].join('');
var inst_56791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56790);
var state_56812__$1 = state_56812;
var statearr_56819_56845 = state_56812__$1;
(statearr_56819_56845[(2)] = inst_56791);

(statearr_56819_56845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (13))){
var inst_56796 = (state_56812[(2)]);
var state_56812__$1 = state_56812;
var statearr_56820_56846 = state_56812__$1;
(statearr_56820_56846[(2)] = inst_56796);

(statearr_56820_56846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (6))){
var state_56812__$1 = state_56812;
var statearr_56821_56847 = state_56812__$1;
(statearr_56821_56847[(2)] = null);

(statearr_56821_56847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (17))){
var inst_56794 = (state_56812[(2)]);
var state_56812__$1 = state_56812;
var statearr_56822_56848 = state_56812__$1;
(statearr_56822_56848[(2)] = inst_56794);

(statearr_56822_56848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (3))){
var inst_56810 = (state_56812[(2)]);
var state_56812__$1 = state_56812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56812__$1,inst_56810);
} else {
if((state_val_56813 === (12))){
var inst_56771 = (state_56812[(9)]);
var inst_56785 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56771,opts);
var state_56812__$1 = state_56812;
if(inst_56785){
var statearr_56823_56849 = state_56812__$1;
(statearr_56823_56849[(1)] = (15));

} else {
var statearr_56824_56850 = state_56812__$1;
(statearr_56824_56850[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (2))){
var state_56812__$1 = state_56812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56812__$1,(4),ch);
} else {
if((state_val_56813 === (11))){
var inst_56772 = (state_56812[(8)]);
var inst_56777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56778 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56772);
var inst_56779 = cljs.core.async.timeout.call(null,(1000));
var inst_56780 = [inst_56778,inst_56779];
var inst_56781 = (new cljs.core.PersistentVector(null,2,(5),inst_56777,inst_56780,null));
var state_56812__$1 = state_56812;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56812__$1,(14),inst_56781);
} else {
if((state_val_56813 === (9))){
var inst_56772 = (state_56812[(8)]);
var inst_56798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56799 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56772);
var inst_56800 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56799);
var inst_56801 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56800)].join('');
var inst_56802 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56801);
var state_56812__$1 = (function (){var statearr_56825 = state_56812;
(statearr_56825[(10)] = inst_56798);

return statearr_56825;
})();
var statearr_56826_56851 = state_56812__$1;
(statearr_56826_56851[(2)] = inst_56802);

(statearr_56826_56851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (5))){
var inst_56765 = (state_56812[(7)]);
var inst_56767 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56768 = (new cljs.core.PersistentArrayMap(null,2,inst_56767,null));
var inst_56769 = (new cljs.core.PersistentHashSet(null,inst_56768,null));
var inst_56770 = figwheel.client.focus_msgs.call(null,inst_56769,inst_56765);
var inst_56771 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56770);
var inst_56772 = cljs.core.first.call(null,inst_56770);
var inst_56773 = figwheel.client.autoload_QMARK_.call(null);
var state_56812__$1 = (function (){var statearr_56827 = state_56812;
(statearr_56827[(8)] = inst_56772);

(statearr_56827[(9)] = inst_56771);

return statearr_56827;
})();
if(cljs.core.truth_(inst_56773)){
var statearr_56828_56852 = state_56812__$1;
(statearr_56828_56852[(1)] = (8));

} else {
var statearr_56829_56853 = state_56812__$1;
(statearr_56829_56853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (14))){
var inst_56783 = (state_56812[(2)]);
var state_56812__$1 = state_56812;
var statearr_56830_56854 = state_56812__$1;
(statearr_56830_56854[(2)] = inst_56783);

(statearr_56830_56854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (16))){
var state_56812__$1 = state_56812;
var statearr_56831_56855 = state_56812__$1;
(statearr_56831_56855[(2)] = null);

(statearr_56831_56855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (10))){
var inst_56804 = (state_56812[(2)]);
var state_56812__$1 = (function (){var statearr_56832 = state_56812;
(statearr_56832[(11)] = inst_56804);

return statearr_56832;
})();
var statearr_56833_56856 = state_56812__$1;
(statearr_56833_56856[(2)] = null);

(statearr_56833_56856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56813 === (8))){
var inst_56771 = (state_56812[(9)]);
var inst_56775 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56771,opts);
var state_56812__$1 = state_56812;
if(cljs.core.truth_(inst_56775)){
var statearr_56834_56857 = state_56812__$1;
(statearr_56834_56857[(1)] = (11));

} else {
var statearr_56835_56858 = state_56812__$1;
(statearr_56835_56858[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____0 = (function (){
var statearr_56836 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56836[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__);

(statearr_56836[(1)] = (1));

return statearr_56836;
});
var figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____1 = (function (state_56812){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_56812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e56837){if((e56837 instanceof Object)){
var ex__53537__auto__ = e56837;
var statearr_56838_56859 = state_56812;
(statearr_56838_56859[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56860 = state_56812;
state_56812 = G__56860;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__ = function(state_56812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____1.call(this,state_56812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__53534__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_56839 = f__53629__auto__.call(null);
(statearr_56839[(6)] = c__53628__auto___56840);

return statearr_56839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56861_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56861_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_56867 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56863 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56864 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56865 = true;
var _STAR_print_fn_STAR__temp_val__56866 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56865);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56866);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56864);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56863);
}}catch (e56862){if((e56862 instanceof Error)){
var e = e56862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56867], null));
} else {
var e = e56862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56868){
var map__56869 = p__56868;
var map__56869__$1 = (((((!((map__56869 == null))))?(((((map__56869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56869):map__56869);
var opts = map__56869__$1;
var build_id = cljs.core.get.call(null,map__56869__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__56871){
var vec__56872 = p__56871;
var seq__56873 = cljs.core.seq.call(null,vec__56872);
var first__56874 = cljs.core.first.call(null,seq__56873);
var seq__56873__$1 = cljs.core.next.call(null,seq__56873);
var map__56875 = first__56874;
var map__56875__$1 = (((((!((map__56875 == null))))?(((((map__56875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56875):map__56875);
var msg = map__56875__$1;
var msg_name = cljs.core.get.call(null,map__56875__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56873__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56877){
var vec__56878 = p__56877;
var seq__56879 = cljs.core.seq.call(null,vec__56878);
var first__56880 = cljs.core.first.call(null,seq__56879);
var seq__56879__$1 = cljs.core.next.call(null,seq__56879);
var map__56881 = first__56880;
var map__56881__$1 = (((((!((map__56881 == null))))?(((((map__56881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56881):map__56881);
var msg = map__56881__$1;
var msg_name = cljs.core.get.call(null,map__56881__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56879__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56883){
var map__56884 = p__56883;
var map__56884__$1 = (((((!((map__56884 == null))))?(((((map__56884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56884):map__56884);
var on_compile_warning = cljs.core.get.call(null,map__56884__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56884__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__56886){
var vec__56887 = p__56886;
var seq__56888 = cljs.core.seq.call(null,vec__56887);
var first__56889 = cljs.core.first.call(null,seq__56888);
var seq__56888__$1 = cljs.core.next.call(null,seq__56888);
var map__56890 = first__56889;
var map__56890__$1 = (((((!((map__56890 == null))))?(((((map__56890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56890):map__56890);
var msg = map__56890__$1;
var msg_name = cljs.core.get.call(null,map__56890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56888__$1;
var pred__56892 = cljs.core._EQ_;
var expr__56893 = msg_name;
if(cljs.core.truth_(pred__56892.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56893))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56892.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56893))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_56982){
var state_val_56983 = (state_56982[(1)]);
if((state_val_56983 === (7))){
var inst_56902 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
if(cljs.core.truth_(inst_56902)){
var statearr_56984_57031 = state_56982__$1;
(statearr_56984_57031[(1)] = (8));

} else {
var statearr_56985_57032 = state_56982__$1;
(statearr_56985_57032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (20))){
var inst_56976 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_56986_57033 = state_56982__$1;
(statearr_56986_57033[(2)] = inst_56976);

(statearr_56986_57033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (27))){
var inst_56972 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_56987_57034 = state_56982__$1;
(statearr_56987_57034[(2)] = inst_56972);

(statearr_56987_57034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (1))){
var inst_56895 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56982__$1 = state_56982;
if(cljs.core.truth_(inst_56895)){
var statearr_56988_57035 = state_56982__$1;
(statearr_56988_57035[(1)] = (2));

} else {
var statearr_56989_57036 = state_56982__$1;
(statearr_56989_57036[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (24))){
var inst_56974 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_56990_57037 = state_56982__$1;
(statearr_56990_57037[(2)] = inst_56974);

(statearr_56990_57037[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (4))){
var inst_56980 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56982__$1,inst_56980);
} else {
if((state_val_56983 === (15))){
var inst_56978 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_56991_57038 = state_56982__$1;
(statearr_56991_57038[(2)] = inst_56978);

(statearr_56991_57038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (21))){
var inst_56931 = (state_56982[(2)]);
var inst_56932 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56933 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56932);
var state_56982__$1 = (function (){var statearr_56992 = state_56982;
(statearr_56992[(7)] = inst_56931);

return statearr_56992;
})();
var statearr_56993_57039 = state_56982__$1;
(statearr_56993_57039[(2)] = inst_56933);

(statearr_56993_57039[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (31))){
var inst_56961 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56961){
var statearr_56994_57040 = state_56982__$1;
(statearr_56994_57040[(1)] = (34));

} else {
var statearr_56995_57041 = state_56982__$1;
(statearr_56995_57041[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (32))){
var inst_56970 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_56996_57042 = state_56982__$1;
(statearr_56996_57042[(2)] = inst_56970);

(statearr_56996_57042[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (33))){
var inst_56957 = (state_56982[(2)]);
var inst_56958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56959 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56958);
var state_56982__$1 = (function (){var statearr_56997 = state_56982;
(statearr_56997[(8)] = inst_56957);

return statearr_56997;
})();
var statearr_56998_57043 = state_56982__$1;
(statearr_56998_57043[(2)] = inst_56959);

(statearr_56998_57043[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (13))){
var inst_56916 = figwheel.client.heads_up.clear.call(null);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(16),inst_56916);
} else {
if((state_val_56983 === (22))){
var inst_56937 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56938 = figwheel.client.heads_up.append_warning_message.call(null,inst_56937);
var state_56982__$1 = state_56982;
var statearr_56999_57044 = state_56982__$1;
(statearr_56999_57044[(2)] = inst_56938);

(statearr_56999_57044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (36))){
var inst_56968 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_57000_57045 = state_56982__$1;
(statearr_57000_57045[(2)] = inst_56968);

(statearr_57000_57045[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (29))){
var inst_56948 = (state_56982[(2)]);
var inst_56949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56950 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56949);
var state_56982__$1 = (function (){var statearr_57001 = state_56982;
(statearr_57001[(9)] = inst_56948);

return statearr_57001;
})();
var statearr_57002_57046 = state_56982__$1;
(statearr_57002_57046[(2)] = inst_56950);

(statearr_57002_57046[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (6))){
var inst_56897 = (state_56982[(10)]);
var state_56982__$1 = state_56982;
var statearr_57003_57047 = state_56982__$1;
(statearr_57003_57047[(2)] = inst_56897);

(statearr_57003_57047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (28))){
var inst_56944 = (state_56982[(2)]);
var inst_56945 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56946 = figwheel.client.heads_up.display_warning.call(null,inst_56945);
var state_56982__$1 = (function (){var statearr_57004 = state_56982;
(statearr_57004[(11)] = inst_56944);

return statearr_57004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(29),inst_56946);
} else {
if((state_val_56983 === (25))){
var inst_56942 = figwheel.client.heads_up.clear.call(null);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(28),inst_56942);
} else {
if((state_val_56983 === (34))){
var inst_56963 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(37),inst_56963);
} else {
if((state_val_56983 === (17))){
var inst_56922 = (state_56982[(2)]);
var inst_56923 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56924 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56923);
var state_56982__$1 = (function (){var statearr_57005 = state_56982;
(statearr_57005[(12)] = inst_56922);

return statearr_57005;
})();
var statearr_57006_57048 = state_56982__$1;
(statearr_57006_57048[(2)] = inst_56924);

(statearr_57006_57048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (3))){
var inst_56914 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56914){
var statearr_57007_57049 = state_56982__$1;
(statearr_57007_57049[(1)] = (13));

} else {
var statearr_57008_57050 = state_56982__$1;
(statearr_57008_57050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (12))){
var inst_56910 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_57009_57051 = state_56982__$1;
(statearr_57009_57051[(2)] = inst_56910);

(statearr_57009_57051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (2))){
var inst_56897 = (state_56982[(10)]);
var inst_56897__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56982__$1 = (function (){var statearr_57010 = state_56982;
(statearr_57010[(10)] = inst_56897__$1);

return statearr_57010;
})();
if(cljs.core.truth_(inst_56897__$1)){
var statearr_57011_57052 = state_56982__$1;
(statearr_57011_57052[(1)] = (5));

} else {
var statearr_57012_57053 = state_56982__$1;
(statearr_57012_57053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (23))){
var inst_56940 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56940){
var statearr_57013_57054 = state_56982__$1;
(statearr_57013_57054[(1)] = (25));

} else {
var statearr_57014_57055 = state_56982__$1;
(statearr_57014_57055[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (35))){
var state_56982__$1 = state_56982;
var statearr_57015_57056 = state_56982__$1;
(statearr_57015_57056[(2)] = null);

(statearr_57015_57056[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (19))){
var inst_56935 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56935){
var statearr_57016_57057 = state_56982__$1;
(statearr_57016_57057[(1)] = (22));

} else {
var statearr_57017_57058 = state_56982__$1;
(statearr_57017_57058[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (11))){
var inst_56906 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_57018_57059 = state_56982__$1;
(statearr_57018_57059[(2)] = inst_56906);

(statearr_57018_57059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (9))){
var inst_56908 = figwheel.client.heads_up.clear.call(null);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(12),inst_56908);
} else {
if((state_val_56983 === (5))){
var inst_56899 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56982__$1 = state_56982;
var statearr_57019_57060 = state_56982__$1;
(statearr_57019_57060[(2)] = inst_56899);

(statearr_57019_57060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (14))){
var inst_56926 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56926){
var statearr_57020_57061 = state_56982__$1;
(statearr_57020_57061[(1)] = (18));

} else {
var statearr_57021_57062 = state_56982__$1;
(statearr_57021_57062[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (26))){
var inst_56952 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56982__$1 = state_56982;
if(inst_56952){
var statearr_57022_57063 = state_56982__$1;
(statearr_57022_57063[(1)] = (30));

} else {
var statearr_57023_57064 = state_56982__$1;
(statearr_57023_57064[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (16))){
var inst_56918 = (state_56982[(2)]);
var inst_56919 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56920 = figwheel.client.heads_up.display_exception.call(null,inst_56919);
var state_56982__$1 = (function (){var statearr_57024 = state_56982;
(statearr_57024[(13)] = inst_56918);

return statearr_57024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(17),inst_56920);
} else {
if((state_val_56983 === (30))){
var inst_56954 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56955 = figwheel.client.heads_up.display_warning.call(null,inst_56954);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(33),inst_56955);
} else {
if((state_val_56983 === (10))){
var inst_56912 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_57025_57065 = state_56982__$1;
(statearr_57025_57065[(2)] = inst_56912);

(statearr_57025_57065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (18))){
var inst_56928 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56929 = figwheel.client.heads_up.display_exception.call(null,inst_56928);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(21),inst_56929);
} else {
if((state_val_56983 === (37))){
var inst_56965 = (state_56982[(2)]);
var state_56982__$1 = state_56982;
var statearr_57026_57066 = state_56982__$1;
(statearr_57026_57066[(2)] = inst_56965);

(statearr_57026_57066[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56983 === (8))){
var inst_56904 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56982__$1 = state_56982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56982__$1,(11),inst_56904);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____0 = (function (){
var statearr_57027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57027[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__);

(statearr_57027[(1)] = (1));

return statearr_57027;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____1 = (function (state_56982){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_56982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e57028){if((e57028 instanceof Object)){
var ex__53537__auto__ = e57028;
var statearr_57029_57067 = state_56982;
(statearr_57029_57067[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57068 = state_56982;
state_56982 = G__57068;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__ = function(state_56982){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____1.call(this,state_56982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_57030 = f__53629__auto__.call(null);
(statearr_57030[(6)] = c__53628__auto__);

return statearr_57030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__53628__auto___57097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_57083){
var state_val_57084 = (state_57083[(1)]);
if((state_val_57084 === (1))){
var state_57083__$1 = state_57083;
var statearr_57085_57098 = state_57083__$1;
(statearr_57085_57098[(2)] = null);

(statearr_57085_57098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57084 === (2))){
var state_57083__$1 = state_57083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57083__$1,(4),ch);
} else {
if((state_val_57084 === (3))){
var inst_57081 = (state_57083[(2)]);
var state_57083__$1 = state_57083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57083__$1,inst_57081);
} else {
if((state_val_57084 === (4))){
var inst_57071 = (state_57083[(7)]);
var inst_57071__$1 = (state_57083[(2)]);
var state_57083__$1 = (function (){var statearr_57086 = state_57083;
(statearr_57086[(7)] = inst_57071__$1);

return statearr_57086;
})();
if(cljs.core.truth_(inst_57071__$1)){
var statearr_57087_57099 = state_57083__$1;
(statearr_57087_57099[(1)] = (5));

} else {
var statearr_57088_57100 = state_57083__$1;
(statearr_57088_57100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57084 === (5))){
var inst_57071 = (state_57083[(7)]);
var inst_57073 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57071);
var state_57083__$1 = state_57083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57083__$1,(8),inst_57073);
} else {
if((state_val_57084 === (6))){
var state_57083__$1 = state_57083;
var statearr_57089_57101 = state_57083__$1;
(statearr_57089_57101[(2)] = null);

(statearr_57089_57101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57084 === (7))){
var inst_57079 = (state_57083[(2)]);
var state_57083__$1 = state_57083;
var statearr_57090_57102 = state_57083__$1;
(statearr_57090_57102[(2)] = inst_57079);

(statearr_57090_57102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57084 === (8))){
var inst_57075 = (state_57083[(2)]);
var state_57083__$1 = (function (){var statearr_57091 = state_57083;
(statearr_57091[(8)] = inst_57075);

return statearr_57091;
})();
var statearr_57092_57103 = state_57083__$1;
(statearr_57092_57103[(2)] = null);

(statearr_57092_57103[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__53534__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__53534__auto____0 = (function (){
var statearr_57093 = [null,null,null,null,null,null,null,null,null];
(statearr_57093[(0)] = figwheel$client$heads_up_plugin_$_state_machine__53534__auto__);

(statearr_57093[(1)] = (1));

return statearr_57093;
});
var figwheel$client$heads_up_plugin_$_state_machine__53534__auto____1 = (function (state_57083){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_57083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e57094){if((e57094 instanceof Object)){
var ex__53537__auto__ = e57094;
var statearr_57095_57104 = state_57083;
(statearr_57095_57104[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57105 = state_57083;
state_57083 = G__57105;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__53534__auto__ = function(state_57083){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__53534__auto____1.call(this,state_57083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__53534__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__53534__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_57096 = f__53629__auto__.call(null);
(statearr_57096[(6)] = c__53628__auto___57097);

return statearr_57096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_57111){
var state_val_57112 = (state_57111[(1)]);
if((state_val_57112 === (1))){
var inst_57106 = cljs.core.async.timeout.call(null,(3000));
var state_57111__$1 = state_57111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57111__$1,(2),inst_57106);
} else {
if((state_val_57112 === (2))){
var inst_57108 = (state_57111[(2)]);
var inst_57109 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57111__$1 = (function (){var statearr_57113 = state_57111;
(statearr_57113[(7)] = inst_57108);

return statearr_57113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57111__$1,inst_57109);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____0 = (function (){
var statearr_57114 = [null,null,null,null,null,null,null,null];
(statearr_57114[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__);

(statearr_57114[(1)] = (1));

return statearr_57114;
});
var figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____1 = (function (state_57111){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_57111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e57115){if((e57115 instanceof Object)){
var ex__53537__auto__ = e57115;
var statearr_57116_57118 = state_57111;
(statearr_57116_57118[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57119 = state_57111;
state_57111 = G__57119;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__ = function(state_57111){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____1.call(this,state_57111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__53534__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_57117 = f__53629__auto__.call(null);
(statearr_57117[(6)] = c__53628__auto__);

return statearr_57117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_57126){
var state_val_57127 = (state_57126[(1)]);
if((state_val_57127 === (1))){
var inst_57120 = cljs.core.async.timeout.call(null,(2000));
var state_57126__$1 = state_57126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57126__$1,(2),inst_57120);
} else {
if((state_val_57127 === (2))){
var inst_57122 = (state_57126[(2)]);
var inst_57123 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_57124 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57123);
var state_57126__$1 = (function (){var statearr_57128 = state_57126;
(statearr_57128[(7)] = inst_57122);

return statearr_57128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57126__$1,inst_57124);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____0 = (function (){
var statearr_57129 = [null,null,null,null,null,null,null,null];
(statearr_57129[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__);

(statearr_57129[(1)] = (1));

return statearr_57129;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____1 = (function (state_57126){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_57126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e57130){if((e57130 instanceof Object)){
var ex__53537__auto__ = e57130;
var statearr_57131_57133 = state_57126;
(statearr_57131_57133[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57134 = state_57126;
state_57126 = G__57134;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__ = function(state_57126){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____1.call(this,state_57126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_57132 = f__53629__auto__.call(null);
(statearr_57132[(6)] = c__53628__auto__);

return statearr_57132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57135){
var map__57136 = p__57135;
var map__57136__$1 = (((((!((map__57136 == null))))?(((((map__57136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57136):map__57136);
var file = cljs.core.get.call(null,map__57136__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57136__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57138 = "";
var G__57138__$1 = (cljs.core.truth_(file)?[G__57138,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57138);
var G__57138__$2 = (cljs.core.truth_(line)?[G__57138__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57138__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__57138__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57138__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57139){
var map__57140 = p__57139;
var map__57140__$1 = (((((!((map__57140 == null))))?(((((map__57140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57140):map__57140);
var ed = map__57140__$1;
var exception_data = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_57143 = (function (){var G__57142 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57142)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__57142;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_57143);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57144){
var map__57145 = p__57144;
var map__57145__$1 = (((((!((map__57145 == null))))?(((((map__57145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57145):map__57145);
var w = map__57145__$1;
var message = cljs.core.get.call(null,map__57145__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__57147 = cljs.core.seq.call(null,plugins);
var chunk__57148 = null;
var count__57149 = (0);
var i__57150 = (0);
while(true){
if((i__57150 < count__57149)){
var vec__57157 = cljs.core._nth.call(null,chunk__57148,i__57150);
var k = cljs.core.nth.call(null,vec__57157,(0),null);
var plugin = cljs.core.nth.call(null,vec__57157,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57163 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57147,chunk__57148,count__57149,i__57150,pl_57163,vec__57157,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57163.call(null,msg_hist);
});})(seq__57147,chunk__57148,count__57149,i__57150,pl_57163,vec__57157,k,plugin))
);
} else {
}


var G__57164 = seq__57147;
var G__57165 = chunk__57148;
var G__57166 = count__57149;
var G__57167 = (i__57150 + (1));
seq__57147 = G__57164;
chunk__57148 = G__57165;
count__57149 = G__57166;
i__57150 = G__57167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57147);
if(temp__5735__auto__){
var seq__57147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57147__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__57147__$1);
var G__57168 = cljs.core.chunk_rest.call(null,seq__57147__$1);
var G__57169 = c__4556__auto__;
var G__57170 = cljs.core.count.call(null,c__4556__auto__);
var G__57171 = (0);
seq__57147 = G__57168;
chunk__57148 = G__57169;
count__57149 = G__57170;
i__57150 = G__57171;
continue;
} else {
var vec__57160 = cljs.core.first.call(null,seq__57147__$1);
var k = cljs.core.nth.call(null,vec__57160,(0),null);
var plugin = cljs.core.nth.call(null,vec__57160,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57172 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57147,chunk__57148,count__57149,i__57150,pl_57172,vec__57160,k,plugin,seq__57147__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57172.call(null,msg_hist);
});})(seq__57147,chunk__57148,count__57149,i__57150,pl_57172,vec__57160,k,plugin,seq__57147__$1,temp__5735__auto__))
);
} else {
}


var G__57173 = cljs.core.next.call(null,seq__57147__$1);
var G__57174 = null;
var G__57175 = (0);
var G__57176 = (0);
seq__57147 = G__57173;
chunk__57148 = G__57174;
count__57149 = G__57175;
i__57150 = G__57176;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__57178 = arguments.length;
switch (G__57178) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__57179_57184 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57180_57185 = null;
var count__57181_57186 = (0);
var i__57182_57187 = (0);
while(true){
if((i__57182_57187 < count__57181_57186)){
var msg_57188 = cljs.core._nth.call(null,chunk__57180_57185,i__57182_57187);
figwheel.client.socket.handle_incoming_message.call(null,msg_57188);


var G__57189 = seq__57179_57184;
var G__57190 = chunk__57180_57185;
var G__57191 = count__57181_57186;
var G__57192 = (i__57182_57187 + (1));
seq__57179_57184 = G__57189;
chunk__57180_57185 = G__57190;
count__57181_57186 = G__57191;
i__57182_57187 = G__57192;
continue;
} else {
var temp__5735__auto___57193 = cljs.core.seq.call(null,seq__57179_57184);
if(temp__5735__auto___57193){
var seq__57179_57194__$1 = temp__5735__auto___57193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57179_57194__$1)){
var c__4556__auto___57195 = cljs.core.chunk_first.call(null,seq__57179_57194__$1);
var G__57196 = cljs.core.chunk_rest.call(null,seq__57179_57194__$1);
var G__57197 = c__4556__auto___57195;
var G__57198 = cljs.core.count.call(null,c__4556__auto___57195);
var G__57199 = (0);
seq__57179_57184 = G__57196;
chunk__57180_57185 = G__57197;
count__57181_57186 = G__57198;
i__57182_57187 = G__57199;
continue;
} else {
var msg_57200 = cljs.core.first.call(null,seq__57179_57194__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57200);


var G__57201 = cljs.core.next.call(null,seq__57179_57194__$1);
var G__57202 = null;
var G__57203 = (0);
var G__57204 = (0);
seq__57179_57184 = G__57201;
chunk__57180_57185 = G__57202;
count__57181_57186 = G__57203;
i__57182_57187 = G__57204;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___57209 = arguments.length;
var i__4737__auto___57210 = (0);
while(true){
if((i__4737__auto___57210 < len__4736__auto___57209)){
args__4742__auto__.push((arguments[i__4737__auto___57210]));

var G__57211 = (i__4737__auto___57210 + (1));
i__4737__auto___57210 = G__57211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57206){
var map__57207 = p__57206;
var map__57207__$1 = (((((!((map__57207 == null))))?(((((map__57207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57207):map__57207);
var opts = map__57207__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57205){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57205));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57212){if((e57212 instanceof Error)){
var e = e57212;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57212;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__57213){
var map__57214 = p__57213;
var map__57214__$1 = (((((!((map__57214 == null))))?(((((map__57214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57214):map__57214);
var msg_name = cljs.core.get.call(null,map__57214__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1615710656029
