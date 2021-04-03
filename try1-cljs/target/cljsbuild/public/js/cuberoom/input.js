// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.input');
goog.require('cljs.core');
goog.require('cljs.test');
cuberoom.input.add_key = (function cuberoom$input$add_key(scene,key_name){
return (function (){var target_obj_8960 = scene;
var _STAR_runtime_state_STAR__orig_val__8963 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8964 = oops.state.prepare_state.call(null,target_obj_8960,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8964);

try{var next_obj_8961 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8960,(0),"input",true,true,false))?(target_obj_8960["input"]):null);
var next_obj_8962 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8961,(0),"keyboard",true,true,false))?(next_obj_8961["keyboard"]):null);
return next_obj_8962;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8963);
}})().addKey(key_name);
});
/**
 * Enroll events of phaser
 */
cuberoom.input.initialize = (function cuberoom$input$initialize(scene){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"w","w",354169001),cuberoom.input.add_key.call(null,scene,"w"),new cljs.core.Keyword(null,"a","a",-2123407586),cuberoom.input.add_key.call(null,scene,"a"),new cljs.core.Keyword(null,"s","s",1705939918),cuberoom.input.add_key.call(null,scene,"s"),new cljs.core.Keyword(null,"d","d",1972142424),cuberoom.input.add_key.call(null,scene,"d"),new cljs.core.Keyword(null,"up","up",-269712113),cuberoom.input.add_key.call(null,scene,Phaser.Input.Keyboard.KeyCodes.UP),new cljs.core.Keyword(null,"down","down",1565245570),cuberoom.input.add_key.call(null,scene,Phaser.Input.Keyboard.KeyCodes.DOWN),new cljs.core.Keyword(null,"left","left",-399115937),cuberoom.input.add_key.call(null,scene,Phaser.Input.Keyboard.KeyCodes.LEFT),new cljs.core.Keyword(null,"right","right",-452581833),cuberoom.input.add_key.call(null,scene,Phaser.Input.Keyboard.KeyCodes.RIGHT)], null);
});
cuberoom.input.pressed_keys_from_phaser = (function cuberoom$input$pressed_keys_from_phaser(phaser_input_objects){
return cljs.core.reduce.call(null,(function (sub_result,p__8965){
var vec__8966 = p__8965;
var key = cljs.core.nth.call(null,vec__8966,(0),null);
var phaser_input_object = cljs.core.nth.call(null,vec__8966,(1),null);
if(cljs.core.truth_(phaser_input_object.isDown)){
return cljs.core.conj.call(null,sub_result,key);
} else {
return sub_result;
}
}),cljs.core.PersistentHashSet.EMPTY,phaser_input_objects);
});
cuberoom.input.test_pressed_keys_from_phaser = (function cuberoom$input$test_pressed_keys_from_phaser(){
return cljs.test.test_var.call(null,cuberoom.input.test_pressed_keys_from_phaser.cljs$lang$var);
});
cuberoom.input.test_pressed_keys_from_phaser.cljs$lang$test = (function (){
try{var values__6010__auto___8971 = (new cljs.core.List(null,(1),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__6011__auto___8972 = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto___8971);
if(cljs.core.truth_(result__6011__auto___8972)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"pass","pass",1574159993),7,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),41,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8971),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"fail","fail",1706214930),7,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8971),null,(1),null)),(2),null)),null]));
}

}catch (e8969){var t__6061__auto___8973 = e8969;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"error","error",-978969032),7,41,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),41,t__6061__auto___8973,null]));
}
try{var values__6010__auto__ = (new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),(new cljs.core.List(null,cuberoom.input.pressed_keys_from_phaser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null)),null,(1),null)),(2),null));
var result__6011__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto__);
if(cljs.core.truth_(result__6011__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),7,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"pressed-keys-from-phaser","pressed-keys-from-phaser",-440306327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),43,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),7,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"pressed-keys-from-phaser","pressed-keys-from-phaser",-440306327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),43,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null,(1),null)),(2),null)),null]));
}

return result__6011__auto__;
}catch (e8970){var t__6061__auto__ = e8970;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),7,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"pressed-keys-from-phaser","pressed-keys-from-phaser",-440306327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),43,t__6061__auto__,null]));
}});

(cuberoom.input.test_pressed_keys_from_phaser.cljs$lang$var = new cljs.core.Var(function(){return cuberoom.input.test_pressed_keys_from_phaser;},new cljs.core.Symbol("cuberoom.input","test-pressed-keys-from-phaser","cuberoom.input/test-pressed-keys-from-phaser",-76338329,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.input","cuberoom.input",133634954,null),new cljs.core.Symbol(null,"test-pressed-keys-from-phaser","test-pressed-keys-from-phaser",-153424301,null),"/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",39,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.input.test_pressed_keys_from_phaser)?cuberoom.input.test_pressed_keys_from_phaser.cljs$lang$test:null)])));
/**
 * Receive phaser input objects.
 *   Return input map in clojure style.
 *   Please check the docstring of the namespace.
 */
cuberoom.input.read_input = (function cuberoom$input$read_input(phaser_input_objects){
var pressed_keys = cuberoom.input.pressed_keys_from_phaser.call(null,phaser_input_objects);
return cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),pressed_keys);
});
cuberoom.input.test_read_input = (function cuberoom$input$test_read_input(){
return cljs.test.test_var.call(null,cuberoom.input.test_read_input.cljs$lang$var);
});
cuberoom.input.test_read_input.cljs$lang$test = (function (){
try{var values__6010__auto___8976 = (new cljs.core.List(null,(1),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__6011__auto___8977 = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto___8976);
if(cljs.core.truth_(result__6011__auto___8977)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"pass","pass",1574159993),7,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),54,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8976),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"fail","fail",1706214930),7,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto___8976),null,(1),null)),(2),null)),null]));
}

}catch (e8974){var t__6061__auto___8978 = e8974;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",14,new cljs.core.Keyword(null,"error","error",-978969032),7,54,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),54,t__6061__auto___8978,null]));
}
try{var values__6010__auto__ = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null)], null)], null),(new cljs.core.List(null,cuberoom.input.read_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null)),null,(1),null)),(2),null));
var result__6011__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6010__auto__);
if(cljs.core.truth_(result__6011__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"read-input","read-input",-1410140935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),56,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"read-input","read-input",-1410140935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),56,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6010__auto__),null,(1),null)),(2),null)),null]));
}

return result__6011__auto__;
}catch (e8975){var t__6061__auto__ = e8975;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),7,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"read-input","read-input",-1410140935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),({"isDown": true})], null))),56,t__6061__auto__,null]));
}});

(cuberoom.input.test_read_input.cljs$lang$var = new cljs.core.Var(function(){return cuberoom.input.test_read_input;},new cljs.core.Symbol("cuberoom.input","test-read-input","cuberoom.input/test-read-input",741344395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.input","cuberoom.input",133634954,null),new cljs.core.Symbol(null,"test-read-input","test-read-input",597213631,null),"/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/input.cljs",25,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.input.test_read_input)?cuberoom.input.test_read_input.cljs$lang$test:null)])));
