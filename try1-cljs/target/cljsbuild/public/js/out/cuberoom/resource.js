// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.resource');
goog.require('cljs.core');
goog.require('cuberoom.db');
goog.require('cljs.test');
/**
 * Load all resources defined in DB
 */
cuberoom.resource.load_all = (function cuberoom$resource$load_all(){
var keys = cuberoom.db.get_db_value.call(null,new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594));
var iter__4529__auto__ = (function cuberoom$resource$load_all_$_iter__46500(s__46501){
return (new cljs.core.LazySeq(null,(function (){
var s__46501__$1 = s__46501;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__46501__$1);
if(temp__5735__auto__){
var s__46501__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46501__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__46501__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__46503 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__46502 = (0);
while(true){
if((i__46502 < size__4528__auto__)){
var key = cljs.core._nth.call(null,c__4527__auto__,i__46502);
var resource = cuberoom.db.get_db_value.call(null,key);
cljs.core.chunk_append.call(null,b__46503,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(resource),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(resource))], null));

var G__46504 = (i__46502 + (1));
i__46502 = G__46504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46503),cuberoom$resource$load_all_$_iter__46500.call(null,cljs.core.chunk_rest.call(null,s__46501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46503),null);
}
} else {
var key = cljs.core.first.call(null,s__46501__$2);
var resource = cuberoom.db.get_db_value.call(null,key);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(resource),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(resource))], null),cuberoom$resource$load_all_$_iter__46500.call(null,cljs.core.rest.call(null,s__46501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,keys);
});
cuberoom.resource.add_resource_key = (function cuberoom$resource$add_resource_key(key){
return cuberoom.db.update_or.call(null,new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),(function (p1__46505_SHARP_){
return cljs.core.conj.call(null,p1__46505_SHARP_,key);
}),cljs.core.PersistentHashSet.createAsIfByAssoc([key]));
});
cuberoom.resource.test_add_resource_key = (function cuberoom$resource$test_add_resource_key(){
return cljs.test.test_var.call(null,cuberoom.resource.test_add_resource_key.cljs$lang$var);
});
cuberoom.resource.test_add_resource_key.cljs$lang$test = (function (){
try{var values__46248__auto__ = (new cljs.core.List(null,(function (){var _STAR_db_override_STAR__orig_val__46507 = cuberoom.db._STAR_db_override_STAR_;
var _STAR_db_override_STAR__temp_val__46508 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
(cuberoom.db._STAR_db_override_STAR_ = _STAR_db_override_STAR__temp_val__46508);

try{return cuberoom.resource.add_resource_key.call(null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503));
}finally {(cuberoom.db._STAR_db_override_STAR_ = _STAR_db_override_STAR__orig_val__46507);
}})(),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),null], null), null)], null),null,(1),null)),(2),null));
var result__46249__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__46248__auto__);
if(cljs.core.truth_(result__46249__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"add-resource-key","add-resource-key",382943993,null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null)], null)),24,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__46248__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"add-resource-key","add-resource-key",382943993,null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null)], null)),24,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__46248__auto__),null,(1),null)),(2),null)),null]));
}

return result__46249__auto__;
}catch (e46506){var t__46299__auto__ = e46506;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),7,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"add-resource-key","add-resource-key",382943993,null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null)], null)),24,t__46299__auto__,null]));
}});

(cuberoom.resource.test_add_resource_key.cljs$lang$var = new cljs.core.Var(function(){return cuberoom.resource.test_add_resource_key;},new cljs.core.Symbol("cuberoom.resource","test-add-resource-key","cuberoom.resource/test-add-resource-key",-48428673,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.resource","cuberoom.resource",-1972786944,null),new cljs.core.Symbol(null,"test-add-resource-key","test-add-resource-key",2025693099,null),"src/cljs/cuberoom/resource.cljs",31,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.resource.test_add_resource_key)?cuberoom.resource.test_add_resource_key.cljs$lang$test:null)])));
/**
 * Register resource in DB.
 *   A value needs these keys :type :name :file
 * 
 *   Currently only :image is available for the :type
 * 
 *   :name is used for a key in Phaser.
 * 
 *   :file is a URL for the image.
 * 
 *   ```example
 *   (resource/register
 *  {:type :image
 *   :name "some-image"
 *   :file "./x.png"
 *  })
 *   ```
 *   
 */
cuberoom.resource.register = (function cuberoom$resource$register(value){
var key = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(value);
cljs.core.println.call(null,"Regist resource in db ",key," : ",value);

cuberoom.resource.add_resource_key.call(null,key);

return cuberoom.db.set_if_empty.call(null,key,value);
});
cuberoom.resource.test_register = (function cuberoom$resource$test_register(){
return cljs.test.test_var.call(null,cuberoom.resource.test_register.cljs$lang$var);
});
cuberoom.resource.test_register.cljs$lang$test = (function (){
try{var values__46248__auto__ = (new cljs.core.List(null,(function (){var _STAR_db_override_STAR__orig_val__46510 = cuberoom.db._STAR_db_override_STAR_;
var _STAR_db_override_STAR__temp_val__46511 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
(cuberoom.db._STAR_db_override_STAR_ = _STAR_db_override_STAR__temp_val__46511);

try{return cuberoom.resource.register.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null));
}finally {(cuberoom.db._STAR_db_override_STAR_ = _STAR_db_override_STAR__orig_val__46510);
}})(),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),null], null), null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null)], null),null,(1),null)),(2),null));
var result__46249__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__46248__auto__);
if(cljs.core.truth_(result__46249__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),7,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"register","register",-685913253,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null)], null)),54,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__46248__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),7,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"register","register",-685913253,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null)], null)),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__46248__auto__),null,(1),null)),(2),null)),null]));
}

return result__46249__auto__;
}catch (e46509){var t__46299__auto__ = e46509;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/resource.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),7,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("db","*db-override*","db/*db-override*",-804537917,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.list(new cljs.core.Symbol(null,"register","register",-685913253,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cuberoom.resource","keys","cuberoom.resource/keys",-905160594),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some-key","some-key",-1462369503),"null"], null), null),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"x","x",2099068185),(3)], null)], null)),54,t__46299__auto__,null]));
}});

(cuberoom.resource.test_register.cljs$lang$var = new cljs.core.Var(function(){return cuberoom.resource.test_register;},new cljs.core.Symbol("cuberoom.resource","test-register","cuberoom.resource/test-register",70075141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.resource","cuberoom.resource",-1972786944,null),new cljs.core.Symbol(null,"test-register","test-register",-1701983919,null),"src/cljs/cuberoom/resource.cljs",23,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.resource.test_register)?cuberoom.resource.test_register.cljs$lang$test:null)])));

//# sourceMappingURL=resource.js.map?rel=1615710649116
