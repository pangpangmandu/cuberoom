// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.macros');
goog.require('cljs.core');
goog.require('oops.core');
goog.require('cljs.test');
goog.require('clojure.string');
cuberoom.macros.parse_js_exp = (function cuberoom$macros$parse_js_exp(js_expression){
var tokens = clojure.string.split.call(null,cljs.core.name.call(null,js_expression),/\./);
var method = cljs.core.peek.call(null,tokens);
var len = cljs.core.count.call(null,tokens);
var paths = cljs.core.subvec.call(null,tokens,(0),(len - (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,".",paths),cljs.core.symbol.call(null,method)], null);
});
cuberoom.macros.test_parse_js_exp = (function cuberoom$macros$test_parse_js_exp(){
return cljs.test.test_var.call(null,cuberoom.macros.test_parse_js_exp.cljs$lang$var);
});
cuberoom.macros.test_parse_js_exp.cljs$lang$test = (function (){
try{var values__6010__auto___8870 = (new cljs.core.List(null,cuberoom.macros.parse_js_exp.call(null,new cljs.core.Symbol(null,"a","a",-482876059,null)),(new cljs.core.List(null,cljs.core.list("",new cljs.core.Symbol(null,"c","c",-122660552,null)),null,(1),null)),(2),null));
var result__6011__auto___8871 = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto___8870);
if(cljs.core.truth_(result__6011__auto___8871)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",36,new cljs.core.Keyword(null,"pass","pass",1574159993),7,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a","a",-482876059,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("",new cljs.core.Symbol(null,"c","c",-122660552,null)))),14,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8870),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",36,new cljs.core.Keyword(null,"fail","fail",1706214930),7,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a","a",-482876059,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("",new cljs.core.Symbol(null,"c","c",-122660552,null)))),14,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8870),null,(1),null)),(2),null)),null]));
}

}catch (e8867){var t__6061__auto___8872 = e8867;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",36,new cljs.core.Keyword(null,"error","error",-978969032),7,14,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a","a",-482876059,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("",new cljs.core.Symbol(null,"c","c",-122660552,null)))),14,t__6061__auto___8872,null]));
}
try{var values__6010__auto___8873 = (new cljs.core.List(null,cuberoom.macros.parse_js_exp.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null)),(new cljs.core.List(null,cljs.core.list("a.b",new cljs.core.Symbol(null,"c","c",-122660552,null)),null,(1),null)),(2),null));
var result__6011__auto___8874 = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto___8873);
if(cljs.core.truth_(result__6011__auto___8874)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",43,new cljs.core.Keyword(null,"pass","pass",1574159993),7,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b",new cljs.core.Symbol(null,"c","c",-122660552,null)))),15,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8873),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",43,new cljs.core.Keyword(null,"fail","fail",1706214930),7,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b",new cljs.core.Symbol(null,"c","c",-122660552,null)))),15,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8873),null,(1),null)),(2),null)),null]));
}

}catch (e8868){var t__6061__auto___8875 = e8868;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",43,new cljs.core.Keyword(null,"error","error",-978969032),7,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b",new cljs.core.Symbol(null,"c","c",-122660552,null)))),15,t__6061__auto___8875,null]));
}
try{var values__6010__auto__ = (new cljs.core.List(null,cuberoom.macros.parse_js_exp.call(null,new cljs.core.Symbol(null,"a.b.c.d","a.b.c.d",261698506,null)),(new cljs.core.List(null,cljs.core.list("a.b.c",new cljs.core.Symbol(null,"d","d",-682293345,null)),null,(1),null)),(2),null));
var result__6011__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto__);
if(cljs.core.truth_(result__6011__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c.d","a.b.c.d",261698506,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b.c",new cljs.core.Symbol(null,"d","d",-682293345,null)))),16,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c.d","a.b.c.d",261698506,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b.c",new cljs.core.Symbol(null,"d","d",-682293345,null)))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null,(1),null)),(2),null)),null]));
}

return result__6011__auto__;
}catch (e8869){var t__6061__auto__ = e8869;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljc/cuberoom/macros.cljc",47,new cljs.core.Keyword(null,"error","error",-978969032),7,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"parse-js-exp","parse-js-exp",-799362787,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"a.b.c.d","a.b.c.d",261698506,null))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("a.b.c",new cljs.core.Symbol(null,"d","d",-682293345,null)))),16,t__6061__auto__,null]));
}});

(cuberoom.macros.test_parse_js_exp.cljs$lang$var = new cljs.core.Var(function(){return cuberoom.macros.test_parse_js_exp;},new cljs.core.Symbol("cuberoom.macros","test-parse-js-exp","cuberoom.macros/test-parse-js-exp",879249147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.macros","cuberoom.macros",-31311605,null),new cljs.core.Symbol(null,"test-parse-js-exp","test-parse-js-exp",-2063718466,null),"src/cljc/cuberoom/macros.cljc",27,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.macros.test_parse_js_exp)?cuberoom.macros.test_parse_js_exp.cljs$lang$test:null)])));
cuberoom.macros.parse_js_exp.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null));
cljs.core.name.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null));
clojure.string.split.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null)),/\./);
clojure.string.join.call(null,".",cljs.core.pop.call(null,clojure.string.split.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null)),/\./)));
clojure.string.split.call(null,cljs.core.name.call(null,new cljs.core.Symbol(null,"a.b.c","a.b.c",-1577830907,null)),/\./);
cljs.core.symbol.call(null,"a");
("" == null);
cljs.core.empty_QMARK_.call(null,"");
["a","b"].join('');
cuberoom.macros.add_dot = (function cuberoom$macros$add_dot(sym){
return cljs.core.symbol.call(null,[".",cljs.core.name.call(null,sym)].join(''));
});
var ret__4785__auto___8884 = (function (){
cuberoom.macros.jsf = (function cuberoom$macros$jsf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8885 = arguments.length;
var i__4737__auto___8886 = (0);
while(true){
if((i__4737__auto___8886 < len__4736__auto___8885)){
args__4742__auto__.push((arguments[i__4737__auto___8886]));

var G__8887 = (i__4737__auto___8886 + (1));
i__4737__auto___8886 = G__8887;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cuberoom.macros.jsf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cuberoom.macros.jsf.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,jsexp,args){
var vec__8881 = cuberoom.macros.parse_js_exp.call(null,jsexp);
var chain = cljs.core.nth.call(null,vec__8881,(0),null);
var method = cljs.core.nth.call(null,vec__8881,(1),null);
var dotmethod = cuberoom.macros.add_dot.call(null,method);
if(cljs.core.empty_QMARK_.call(null,chain)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,dotmethod,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),args)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,dotmethod,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cuberoom.macros","oget","cuberoom.macros/oget",-773951198,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),(new cljs.core.List(null,chain,null,(1),null))))),null,(1),null)),args)));
}
}));

(cuberoom.macros.jsf.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cuberoom.macros.jsf.cljs$lang$applyTo = (function (seq8876){
var G__8877 = cljs.core.first.call(null,seq8876);
var seq8876__$1 = cljs.core.next.call(null,seq8876);
var G__8878 = cljs.core.first.call(null,seq8876__$1);
var seq8876__$2 = cljs.core.next.call(null,seq8876__$1);
var G__8879 = cljs.core.first.call(null,seq8876__$2);
var seq8876__$3 = cljs.core.next.call(null,seq8876__$2);
var G__8880 = cljs.core.first.call(null,seq8876__$3);
var seq8876__$4 = cljs.core.next.call(null,seq8876__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8877,G__8878,G__8879,G__8880,seq8876__$4);
}));

return null;
})()
;
(cuberoom.macros.jsf.cljs$lang$macro = true);

