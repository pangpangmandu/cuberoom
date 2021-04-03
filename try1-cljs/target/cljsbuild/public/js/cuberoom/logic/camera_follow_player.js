// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.logic.camera_follow_player');
goog.require('cljs.core');
goog.require('cuberoom.phaser');
goog.require('cuberoom.scene.player');
goog.require('oops.core');
goog.require('cljs.test');
goog.require('cuberoom.macros');
cuberoom.logic.camera_follow_player.get_camera = (function cuberoom$logic$camera_follow_player$get_camera(){
var target_obj_8951 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__8954 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8955 = oops.state.prepare_state.call(null,target_obj_8951,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8955);

try{var next_obj_8952 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8951,(0),"cameras",true,true,false))?(target_obj_8951["cameras"]):null);
var next_obj_8953 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_8952,(0),"main",true,true,false))?(next_obj_8952["main"]):null);
return next_obj_8953;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8954);
}});
cuberoom.logic.camera_follow_player.get_player = (function cuberoom$logic$camera_follow_player$get_player(){
return cuberoom.phaser.get_object.call(null,cuberoom.scene.player.object_key);
});
cuberoom.logic.camera_follow_player.follow_player = (function cuberoom$logic$camera_follow_player$follow_player(camera,player){
if(cljs.core.truth_((function (){try{var values__6010__auto__ = (new cljs.core.List(null,camera,null,(1),null));
var result__6011__auto__ = cljs.core.apply.call(null,cljs.core.some_QMARK_,values__6010__auto__);
if(cljs.core.truth_(result__6011__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),14,15,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"camera","camera",450182942,null)),15,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__6010__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),14,15,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"camera","camera",450182942,null)),15,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__6010__auto__),null,(1),null)),(2),null)),null]));
}

return result__6011__auto__;
}catch (e8956){var t__6061__auto__ = e8956;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),14,15,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"camera","camera",450182942,null)),15,t__6061__auto__,null]));
}})())){
} else {
throw (new Error("Assert failed: (is (some? camera))"));
}

if(cljs.core.truth_((function (){try{var values__6010__auto__ = (new cljs.core.List(null,player,null,(1),null));
var result__6011__auto__ = cljs.core.apply.call(null,cljs.core.some_QMARK_,values__6010__auto__);
if(cljs.core.truth_(result__6011__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),14,16,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"player","player",1542844127,null)),16,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__6010__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),14,16,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"player","player",1542844127,null)),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__6010__auto__),null,(1),null)),(2),null)),null]));
}

return result__6011__auto__;
}catch (e8957){var t__6061__auto__ = e8957;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/logic/camera_follow_player.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),14,16,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"player","player",1542844127,null)),16,t__6061__auto__,null]));
}})())){
} else {
throw (new Error("Assert failed: (is (some? player))"));
}

return camera.startFollow(player);
});
cuberoom.logic.camera_follow_player.follow = (function cuberoom$logic$camera_follow_player$follow(){
var camera = cuberoom.logic.camera_follow_player.get_camera.call(null);
var player = cuberoom.logic.camera_follow_player.get_player.call(null);
return cuberoom.logic.camera_follow_player.follow_player.call(null,camera,player);
});
