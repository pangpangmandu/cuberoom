// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56400){
var map__56401 = p__56400;
var map__56401__$1 = (((((!((map__56401 == null))))?(((((map__56401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56401):map__56401);
var m = map__56401__$1;
var n = cljs.core.get.call(null,map__56401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56403_56435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56404_56436 = null;
var count__56405_56437 = (0);
var i__56406_56438 = (0);
while(true){
if((i__56406_56438 < count__56405_56437)){
var f_56439 = cljs.core._nth.call(null,chunk__56404_56436,i__56406_56438);
cljs.core.println.call(null,"  ",f_56439);


var G__56440 = seq__56403_56435;
var G__56441 = chunk__56404_56436;
var G__56442 = count__56405_56437;
var G__56443 = (i__56406_56438 + (1));
seq__56403_56435 = G__56440;
chunk__56404_56436 = G__56441;
count__56405_56437 = G__56442;
i__56406_56438 = G__56443;
continue;
} else {
var temp__5735__auto___56444 = cljs.core.seq.call(null,seq__56403_56435);
if(temp__5735__auto___56444){
var seq__56403_56445__$1 = temp__5735__auto___56444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56403_56445__$1)){
var c__4556__auto___56446 = cljs.core.chunk_first.call(null,seq__56403_56445__$1);
var G__56447 = cljs.core.chunk_rest.call(null,seq__56403_56445__$1);
var G__56448 = c__4556__auto___56446;
var G__56449 = cljs.core.count.call(null,c__4556__auto___56446);
var G__56450 = (0);
seq__56403_56435 = G__56447;
chunk__56404_56436 = G__56448;
count__56405_56437 = G__56449;
i__56406_56438 = G__56450;
continue;
} else {
var f_56451 = cljs.core.first.call(null,seq__56403_56445__$1);
cljs.core.println.call(null,"  ",f_56451);


var G__56452 = cljs.core.next.call(null,seq__56403_56445__$1);
var G__56453 = null;
var G__56454 = (0);
var G__56455 = (0);
seq__56403_56435 = G__56452;
chunk__56404_56436 = G__56453;
count__56405_56437 = G__56454;
i__56406_56438 = G__56455;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56456 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56456);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56456)))?cljs.core.second.call(null,arglists_56456):arglists_56456));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56407_56457 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56408_56458 = null;
var count__56409_56459 = (0);
var i__56410_56460 = (0);
while(true){
if((i__56410_56460 < count__56409_56459)){
var vec__56421_56461 = cljs.core._nth.call(null,chunk__56408_56458,i__56410_56460);
var name_56462 = cljs.core.nth.call(null,vec__56421_56461,(0),null);
var map__56424_56463 = cljs.core.nth.call(null,vec__56421_56461,(1),null);
var map__56424_56464__$1 = (((((!((map__56424_56463 == null))))?(((((map__56424_56463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56424_56463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56424_56463):map__56424_56463);
var doc_56465 = cljs.core.get.call(null,map__56424_56464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56466 = cljs.core.get.call(null,map__56424_56464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56462);

cljs.core.println.call(null," ",arglists_56466);

if(cljs.core.truth_(doc_56465)){
cljs.core.println.call(null," ",doc_56465);
} else {
}


var G__56467 = seq__56407_56457;
var G__56468 = chunk__56408_56458;
var G__56469 = count__56409_56459;
var G__56470 = (i__56410_56460 + (1));
seq__56407_56457 = G__56467;
chunk__56408_56458 = G__56468;
count__56409_56459 = G__56469;
i__56410_56460 = G__56470;
continue;
} else {
var temp__5735__auto___56471 = cljs.core.seq.call(null,seq__56407_56457);
if(temp__5735__auto___56471){
var seq__56407_56472__$1 = temp__5735__auto___56471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56407_56472__$1)){
var c__4556__auto___56473 = cljs.core.chunk_first.call(null,seq__56407_56472__$1);
var G__56474 = cljs.core.chunk_rest.call(null,seq__56407_56472__$1);
var G__56475 = c__4556__auto___56473;
var G__56476 = cljs.core.count.call(null,c__4556__auto___56473);
var G__56477 = (0);
seq__56407_56457 = G__56474;
chunk__56408_56458 = G__56475;
count__56409_56459 = G__56476;
i__56410_56460 = G__56477;
continue;
} else {
var vec__56426_56478 = cljs.core.first.call(null,seq__56407_56472__$1);
var name_56479 = cljs.core.nth.call(null,vec__56426_56478,(0),null);
var map__56429_56480 = cljs.core.nth.call(null,vec__56426_56478,(1),null);
var map__56429_56481__$1 = (((((!((map__56429_56480 == null))))?(((((map__56429_56480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56429_56480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56429_56480):map__56429_56480);
var doc_56482 = cljs.core.get.call(null,map__56429_56481__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56483 = cljs.core.get.call(null,map__56429_56481__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56479);

cljs.core.println.call(null," ",arglists_56483);

if(cljs.core.truth_(doc_56482)){
cljs.core.println.call(null," ",doc_56482);
} else {
}


var G__56484 = cljs.core.next.call(null,seq__56407_56472__$1);
var G__56485 = null;
var G__56486 = (0);
var G__56487 = (0);
seq__56407_56457 = G__56484;
chunk__56408_56458 = G__56485;
count__56409_56459 = G__56486;
i__56410_56460 = G__56487;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__56431 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56432 = null;
var count__56433 = (0);
var i__56434 = (0);
while(true){
if((i__56434 < count__56433)){
var role = cljs.core._nth.call(null,chunk__56432,i__56434);
var temp__5735__auto___56488__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56488__$1)){
var spec_56489 = temp__5735__auto___56488__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56489));
} else {
}


var G__56490 = seq__56431;
var G__56491 = chunk__56432;
var G__56492 = count__56433;
var G__56493 = (i__56434 + (1));
seq__56431 = G__56490;
chunk__56432 = G__56491;
count__56433 = G__56492;
i__56434 = G__56493;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__56431);
if(temp__5735__auto____$1){
var seq__56431__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56431__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__56431__$1);
var G__56494 = cljs.core.chunk_rest.call(null,seq__56431__$1);
var G__56495 = c__4556__auto__;
var G__56496 = cljs.core.count.call(null,c__4556__auto__);
var G__56497 = (0);
seq__56431 = G__56494;
chunk__56432 = G__56495;
count__56433 = G__56496;
i__56434 = G__56497;
continue;
} else {
var role = cljs.core.first.call(null,seq__56431__$1);
var temp__5735__auto___56498__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56498__$2)){
var spec_56499 = temp__5735__auto___56498__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_56499));
} else {
}


var G__56500 = cljs.core.next.call(null,seq__56431__$1);
var G__56501 = null;
var G__56502 = (0);
var G__56503 = (0);
seq__56431 = G__56500;
chunk__56432 = G__56501;
count__56433 = G__56502;
i__56434 = G__56503;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56504 = cljs.core.conj.call(null,via,t);
var G__56505 = cljs.core.ex_cause.call(null,t);
via = G__56504;
t = G__56505;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56508 = datafied_throwable;
var map__56508__$1 = (((((!((map__56508 == null))))?(((((map__56508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56508):map__56508);
var via = cljs.core.get.call(null,map__56508__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__56508__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__56508__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56509 = cljs.core.last.call(null,via);
var map__56509__$1 = (((((!((map__56509 == null))))?(((((map__56509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56509):map__56509);
var type = cljs.core.get.call(null,map__56509__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__56509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__56509__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56510 = data;
var map__56510__$1 = (((((!((map__56510 == null))))?(((((map__56510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56510):map__56510);
var problems = cljs.core.get.call(null,map__56510__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__56510__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__56510__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56511 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__56511__$1 = (((((!((map__56511 == null))))?(((((map__56511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56511):map__56511);
var top_data = map__56511__$1;
var source = cljs.core.get.call(null,map__56511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__56516 = phase;
var G__56516__$1 = (((G__56516 instanceof cljs.core.Keyword))?G__56516.fqn:null);
switch (G__56516__$1) {
case "read-source":
var map__56517 = data;
var map__56517__$1 = (((((!((map__56517 == null))))?(((((map__56517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56517):map__56517);
var line = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56519 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__56519__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__56519,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56519);
var G__56519__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__56519__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56519__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__56519__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56519__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56520 = top_data;
var G__56520__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__56520,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56520);
var G__56520__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__56520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56520__$1);
var G__56520__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__56520__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56520__$2);
var G__56520__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__56520__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56520__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__56520__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56520__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56521 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__56521,(0),null);
var method = cljs.core.nth.call(null,vec__56521,(1),null);
var file = cljs.core.nth.call(null,vec__56521,(2),null);
var line = cljs.core.nth.call(null,vec__56521,(3),null);
var G__56524 = top_data;
var G__56524__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__56524,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56524);
var G__56524__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__56524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56524__$1);
var G__56524__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__56524__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56524__$2);
var G__56524__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__56524__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56524__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__56524__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56524__$4;
}

break;
case "execution":
var vec__56525 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__56525,(0),null);
var method = cljs.core.nth.call(null,vec__56525,(1),null);
var file = cljs.core.nth.call(null,vec__56525,(2),null);
var line = cljs.core.nth.call(null,vec__56525,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__56507_SHARP_){
var or__4126__auto__ = (p1__56507_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__56507_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56528 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56528__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__56528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56528);
var G__56528__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__56528__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56528__$1);
var G__56528__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__56528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56528__$2);
var G__56528__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__56528__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56528__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__56528__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56528__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56516__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56532){
var map__56533 = p__56532;
var map__56533__$1 = (((((!((map__56533 == null))))?(((((map__56533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56533):map__56533);
var triage_data = map__56533__$1;
var phase = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__56533__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56535 = phase;
var G__56535__$1 = (((G__56535 instanceof cljs.core.Keyword))?G__56535.fqn:null);
switch (G__56535__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56536_56545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56537_56546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56538_56547 = true;
var _STAR_print_fn_STAR__temp_val__56539_56548 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56538_56547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56539_56548);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__56530_SHARP_){
return cljs.core.dissoc.call(null,p1__56530_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56537_56546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56536_56545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56540_56549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56541_56550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56542_56551 = true;
var _STAR_print_fn_STAR__temp_val__56543_56552 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56542_56551);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56543_56552);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__56531_SHARP_){
return cljs.core.dissoc.call(null,p1__56531_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56541_56550);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56540_56549);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56535__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1615710655636
