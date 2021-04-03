// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.phaser');
goog.require('cljs.core');
goog.require('cuberoom.js');
goog.require('cuberoom.util.timing');
cuberoom.phaser._STAR_scene_STAR_ = null;
cuberoom.phaser.global = cljs.core.PersistentArrayMap.EMPTY;
cuberoom.phaser.load = (function cuberoom$phaser$load(p__8894){
var map__8895 = p__8894;
var map__8895__$1 = (((((!((map__8895 == null))))?(((((map__8895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8895):map__8895);
var url = cljs.core.get.call(null,map__8895__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name = cljs.core.get.call(null,map__8895__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cuberoom.js.js_console.call(null,"load is called");

return (function (){var target_obj_8897 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__8899 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8900 = oops.state.prepare_state.call(null,target_obj_8897,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8900);

try{var next_obj_8898 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8897,(0),"load",true,true,false))?(target_obj_8897["load"]):null);
return next_obj_8898;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8899);
}})().image(name,url);
});
cuberoom.phaser.create_object = (function cuberoom$phaser$create_object(p__8901){
var map__8902 = p__8901;
var map__8902__$1 = (((((!((map__8902 == null))))?(((((map__8902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8902):map__8902);
var name = cljs.core.get.call(null,map__8902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var image = cljs.core.get.call(null,map__8902__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var x = cljs.core.get.call(null,map__8902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var object_type = cljs.core.get.call(null,map__8902__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cljs.core.println.call(null,"create-object ",name,image);

var object = (function (){var pred__8904 = cljs.core._EQ_;
var expr__8905 = object_type;
if(cljs.core.truth_(pred__8904.call(null,new cljs.core.Keyword(null,"image","image",-58725096),expr__8905))){
return (function (){var target_obj_8907 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__8909 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8910 = oops.state.prepare_state.call(null,target_obj_8907,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8910);

try{var next_obj_8908 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8907,(0),"add",true,true,false))?(target_obj_8907["add"]):null);
return next_obj_8908;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8909);
}})().image(x,y,image);
} else {
if(cljs.core.truth_(pred__8904.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),expr__8905))){
return (function (){var target_obj_8911 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__8913 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8914 = oops.state.prepare_state.call(null,target_obj_8911,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8914);

try{var next_obj_8912 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8911,(0),"add",true,true,false))?(target_obj_8911["add"]):null);
return next_obj_8912;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8913);
}})().sprite(x,y,image);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8905)].join('')));
}
}
})();
return (cuberoom.phaser.global = cljs.core.assoc_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),name], null),object));
});
cuberoom.phaser.move_rel = (function cuberoom$phaser$move_rel(p__8915){
var map__8916 = p__8915;
var map__8916__$1 = (((((!((map__8916 == null))))?(((((map__8916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8916):map__8916);
var target = cljs.core.get.call(null,map__8916__$1,new cljs.core.Keyword(null,"target","target",253001721));
var x = cljs.core.get.call(null,map__8916__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8916__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

var object = cljs.core.get_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),target], null));
var object_x = object.x;
var object_y = object.y;
(object.x = (object_x + x));

return (object.y = (object_y + y));
});
cuberoom.phaser.create_anim_in_phaser = (function cuberoom$phaser$create_anim_in_phaser(anim_name,frames,repeat){
cljs.core.println.call(null,"call create-anim-in-phaser",anim_name,frames);

return (function (){var target_obj_8918 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__8920 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__8921 = oops.state.prepare_state.call(null,target_obj_8918,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__8921);

try{var next_obj_8919 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_8918,(0),"anims",true,true,false))?(target_obj_8918["anims"]):null);
return next_obj_8919;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__8920);
}})().create(({"key": anim_name, "frames": frames, "repeat": repeat, "frameRate": (8)}));
});
/**
 * Example
 *   ```
 *   (run-command
 *  {:type :create-anim
 *   :anim-name "player-walk-left"
 *   :frames #js [#js {:key
 *                     :cuberoom.scene.player/resource-left-1}]})
 *   ```
 *   
 */
cuberoom.phaser.create_anim = (function cuberoom$phaser$create_anim(p__8922){
var map__8923 = p__8922;
var map__8923__$1 = (((((!((map__8923 == null))))?(((((map__8923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8923):map__8923);
var anim_name = cljs.core.get.call(null,map__8923__$1,new cljs.core.Keyword(null,"anim-name","anim-name",-253000634));
var frames = cljs.core.get.call(null,map__8923__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
var repeat = cljs.core.get.call(null,map__8923__$1,new cljs.core.Keyword(null,"repeat","repeat",832692087));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cljs.core.println.call(null,"create-anim",anim_name);

var anim = cuberoom.phaser.create_anim_in_phaser.call(null,anim_name,frames,repeat);
return (cuberoom.phaser.global = cljs.core.assoc_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anim","anim",-1276068045),anim_name], null),anim));
});
/**
 * 
 */
cuberoom.phaser.play_anim = (function cuberoom$phaser$play_anim(p__8925){
var map__8926 = p__8925;
var map__8926__$1 = (((((!((map__8926 == null))))?(((((map__8926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8926):map__8926);
var anim_name = cljs.core.get.call(null,map__8926__$1,new cljs.core.Keyword(null,"anim-name","anim-name",-253000634));
var character_name = cljs.core.get.call(null,map__8926__$1,new cljs.core.Keyword(null,"character-name","character-name",355825354));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cljs.core.println.call(null,"play-anim",anim_name,character_name);

var character = cljs.core.get_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),character_name], null));
cuberoom.js.js_console.call(null,"character",character);

return character.play(cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim_name));
});
cuberoom.phaser.stop_anim = (function cuberoom$phaser$stop_anim(p__8928){
var map__8929 = p__8928;
var map__8929__$1 = (((((!((map__8929 == null))))?(((((map__8929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8929):map__8929);
var character_name = cljs.core.get.call(null,map__8929__$1,new cljs.core.Keyword(null,"character-name","character-name",355825354));
var character = cljs.core.get_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),character_name], null));
return character.stop();
});
cuberoom.phaser.print_less = cuberoom.util.timing.make_once_per_sec.call(null);
cuberoom.phaser.run_command = (function cuberoom$phaser$run_command(cmd){
var name = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cmd);
var G__8931 = name;
var G__8931__$1 = (((G__8931 instanceof cljs.core.Keyword))?G__8931.fqn:null);
switch (G__8931__$1) {
case "load":
return cuberoom.phaser.load.call(null,cmd);

break;
case "create-object":
return cuberoom.phaser.create_object.call(null,cmd);

break;
case "move-rel":
return cuberoom.phaser.move_rel.call(null,cmd);

break;
case "create-anim":
return cuberoom.phaser.create_anim.call(null,cmd);

break;
case "play-anim":
return cuberoom.phaser.play_anim.call(null,cmd);

break;
case "stop-anim":
return cuberoom.phaser.stop_anim.call(null,cmd);

break;
default:
return cuberoom.phaser.print_less.call(null,(function (){
return cljs.core.println.call(null,"Unknown phase command ",cmd);
}));

}
});
cuberoom.phaser.run_commands = (function cuberoom$phaser$run_commands(cmds){
var seq__8933 = cljs.core.seq.call(null,cmds);
var chunk__8934 = null;
var count__8935 = (0);
var i__8936 = (0);
while(true){
if((i__8936 < count__8935)){
var cmd = cljs.core._nth.call(null,chunk__8934,i__8936);
cuberoom.phaser.run_command.call(null,cmd);


var G__8937 = seq__8933;
var G__8938 = chunk__8934;
var G__8939 = count__8935;
var G__8940 = (i__8936 + (1));
seq__8933 = G__8937;
chunk__8934 = G__8938;
count__8935 = G__8939;
i__8936 = G__8940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8933);
if(temp__5735__auto__){
var seq__8933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8933__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8933__$1);
var G__8941 = cljs.core.chunk_rest.call(null,seq__8933__$1);
var G__8942 = c__4556__auto__;
var G__8943 = cljs.core.count.call(null,c__4556__auto__);
var G__8944 = (0);
seq__8933 = G__8941;
chunk__8934 = G__8942;
count__8935 = G__8943;
i__8936 = G__8944;
continue;
} else {
var cmd = cljs.core.first.call(null,seq__8933__$1);
cuberoom.phaser.run_command.call(null,cmd);


var G__8945 = cljs.core.next.call(null,seq__8933__$1);
var G__8946 = null;
var G__8947 = (0);
var G__8948 = (0);
seq__8933 = G__8945;
chunk__8934 = G__8946;
count__8935 = G__8947;
i__8936 = G__8948;
continue;
}
} else {
return null;
}
}
break;
}
});
cuberoom.phaser.get_object = (function cuberoom$phaser$get_object(key){
return cljs.core.get_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),key], null));
});
