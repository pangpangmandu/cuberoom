// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.phaser');
goog.require('cljs.core');
goog.require('cuberoom.js');
goog.require('cuberoom.util.timing');
cuberoom.phaser._STAR_scene_STAR_ = null;
cuberoom.phaser.global = cljs.core.PersistentArrayMap.EMPTY;
cuberoom.phaser.load = (function cuberoom$phaser$load(p__51490){
var map__51491 = p__51490;
var map__51491__$1 = (((((!((map__51491 == null))))?(((((map__51491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51491):map__51491);
var url = cljs.core.get.call(null,map__51491__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name = cljs.core.get.call(null,map__51491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cuberoom.js.js_console.call(null,"load is called");

return (function (){var target_obj_51493 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__51495 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51496 = oops.state.prepare_state.call(null,target_obj_51493,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51496);

try{var next_obj_51494 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51493,(0),"load",true,true,false))?(target_obj_51493["load"]):null);
return next_obj_51494;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51495);
}})().image(name,url);
});
cuberoom.phaser.create_object = (function cuberoom$phaser$create_object(p__51497){
var map__51498 = p__51497;
var map__51498__$1 = (((((!((map__51498 == null))))?(((((map__51498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51498):map__51498);
var name = cljs.core.get.call(null,map__51498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var image = cljs.core.get.call(null,map__51498__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var x = cljs.core.get.call(null,map__51498__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__51498__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var object_type = cljs.core.get.call(null,map__51498__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
if(cljs.core.some_QMARK_){
} else {
throw (new Error("Assert failed: some?"));
}

if(cljs.core.truth_(cuberoom.phaser._STAR_scene_STAR_)){
} else {
throw (new Error("Assert failed: *scene*"));
}

cljs.core.println.call(null,"create-object ",name,image);

var object = (function (){var pred__51500 = cljs.core._EQ_;
var expr__51501 = object_type;
if(cljs.core.truth_(pred__51500.call(null,new cljs.core.Keyword(null,"image","image",-58725096),expr__51501))){
return (function (){var target_obj_51503 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__51505 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51506 = oops.state.prepare_state.call(null,target_obj_51503,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51506);

try{var next_obj_51504 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51503,(0),"add",true,true,false))?(target_obj_51503["add"]):null);
return next_obj_51504;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51505);
}})().image(x,y,image);
} else {
if(cljs.core.truth_(pred__51500.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),expr__51501))){
return (function (){var target_obj_51507 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__51509 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51510 = oops.state.prepare_state.call(null,target_obj_51507,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51510);

try{var next_obj_51508 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51507,(0),"add",true,true,false))?(target_obj_51507["add"]):null);
return next_obj_51508;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51509);
}})().sprite(x,y,image);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51501)].join('')));
}
}
})();
return (cuberoom.phaser.global = cljs.core.assoc_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),name], null),object));
});
cuberoom.phaser.move_rel = (function cuberoom$phaser$move_rel(p__51511){
var map__51512 = p__51511;
var map__51512__$1 = (((((!((map__51512 == null))))?(((((map__51512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51512):map__51512);
var target = cljs.core.get.call(null,map__51512__$1,new cljs.core.Keyword(null,"target","target",253001721));
var x = cljs.core.get.call(null,map__51512__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__51512__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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

return (function (){var target_obj_51514 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_runtime_state_STAR__orig_val__51516 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51517 = oops.state.prepare_state.call(null,target_obj_51514,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51517);

try{var next_obj_51515 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51514,(0),"anims",true,true,false))?(target_obj_51514["anims"]):null);
return next_obj_51515;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51516);
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
cuberoom.phaser.create_anim = (function cuberoom$phaser$create_anim(p__51518){
var map__51519 = p__51518;
var map__51519__$1 = (((((!((map__51519 == null))))?(((((map__51519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51519):map__51519);
var anim_name = cljs.core.get.call(null,map__51519__$1,new cljs.core.Keyword(null,"anim-name","anim-name",-253000634));
var frames = cljs.core.get.call(null,map__51519__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
var repeat = cljs.core.get.call(null,map__51519__$1,new cljs.core.Keyword(null,"repeat","repeat",832692087));
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
cuberoom.phaser.play_anim = (function cuberoom$phaser$play_anim(p__51521){
var map__51522 = p__51521;
var map__51522__$1 = (((((!((map__51522 == null))))?(((((map__51522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51522):map__51522);
var anim_name = cljs.core.get.call(null,map__51522__$1,new cljs.core.Keyword(null,"anim-name","anim-name",-253000634));
var character_name = cljs.core.get.call(null,map__51522__$1,new cljs.core.Keyword(null,"character-name","character-name",355825354));
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
cuberoom.phaser.stop_anim = (function cuberoom$phaser$stop_anim(p__51524){
var map__51525 = p__51524;
var map__51525__$1 = (((((!((map__51525 == null))))?(((((map__51525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51525):map__51525);
var character_name = cljs.core.get.call(null,map__51525__$1,new cljs.core.Keyword(null,"character-name","character-name",355825354));
var character = cljs.core.get_in.call(null,cuberoom.phaser.global,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),character_name], null));
return character.stop();
});
cuberoom.phaser.print_less = cuberoom.util.timing.make_once_per_sec.call(null);
cuberoom.phaser.run_command = (function cuberoom$phaser$run_command(cmd){
var name = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cmd);
var G__51527 = name;
var G__51527__$1 = (((G__51527 instanceof cljs.core.Keyword))?G__51527.fqn:null);
switch (G__51527__$1) {
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
var seq__51529 = cljs.core.seq.call(null,cmds);
var chunk__51530 = null;
var count__51531 = (0);
var i__51532 = (0);
while(true){
if((i__51532 < count__51531)){
var cmd = cljs.core._nth.call(null,chunk__51530,i__51532);
cuberoom.phaser.run_command.call(null,cmd);


var G__51533 = seq__51529;
var G__51534 = chunk__51530;
var G__51535 = count__51531;
var G__51536 = (i__51532 + (1));
seq__51529 = G__51533;
chunk__51530 = G__51534;
count__51531 = G__51535;
i__51532 = G__51536;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__51529);
if(temp__5735__auto__){
var seq__51529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51529__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__51529__$1);
var G__51537 = cljs.core.chunk_rest.call(null,seq__51529__$1);
var G__51538 = c__4556__auto__;
var G__51539 = cljs.core.count.call(null,c__4556__auto__);
var G__51540 = (0);
seq__51529 = G__51537;
chunk__51530 = G__51538;
count__51531 = G__51539;
i__51532 = G__51540;
continue;
} else {
var cmd = cljs.core.first.call(null,seq__51529__$1);
cuberoom.phaser.run_command.call(null,cmd);


var G__51541 = cljs.core.next.call(null,seq__51529__$1);
var G__51542 = null;
var G__51543 = (0);
var G__51544 = (0);
seq__51529 = G__51541;
chunk__51530 = G__51542;
count__51531 = G__51543;
i__51532 = G__51544;
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

//# sourceMappingURL=phaser.js.map?rel=1615710653167
