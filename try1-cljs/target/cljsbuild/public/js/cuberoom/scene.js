// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.scene');
goog.require('cljs.core');
goog.require('cuberoom.js');
goog.require('cuberoom.scene.background');
goog.require('cuberoom.resource');
goog.require('cuberoom.phaser');
goog.require('cuberoom.play_scene');
goog.require('cuberoom.db');
goog.require('cuberoom.db.log');
goog.require('cuberoom.scene.player');
goog.require('cuberoom.input');
goog.require('cuberoom.logic.player_move');
goog.require('cuberoom.input.log');
goog.require('cuberoom.logic.camera_follow_player');
/**
 * input objects from phaser
 */
cuberoom.scene.input_objects = cljs.core.List.EMPTY;
cuberoom.scene.preload = (function cuberoom$scene$preload(){
cuberoom.js.js_console.call(null,"Called preload");

var self_9040 = this;
cuberoom.scene.background.initialize.call(null);

cuberoom.scene.player.preload.call(null);

(function (){var target_obj_9034 = self_9040;
var _STAR_runtime_state_STAR__orig_val__9036 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9037 = oops.state.prepare_state.call(null,target_obj_9034,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9037);

try{var next_obj_9035 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9034,(0),"load",true,true,false))?(target_obj_9034["load"]):null);
return next_obj_9035;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9036);
}})().setBaseURL("/img/");

var _STAR_scene_STAR__orig_val__9038_9041 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__9039_9042 = self_9040;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__9039_9042);

try{cuberoom.phaser.run_commands.call(null,cuberoom.resource.load_all.call(null));
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__9038_9041);
}
return cuberoom.js.js_console.call(null,"preload finished");
});
cuberoom.scene.create = (function cuberoom$scene$create(){
cuberoom.js.js_console.call(null,"Called create");

var self_9045 = this;
cuberoom.js.js_console.call(null,"inside this as self");

var _STAR_scene_STAR__orig_val__9043_9046 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__9044_9047 = self_9045;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__9044_9047);

try{(cuberoom.scene.input_objects = cuberoom.input.initialize.call(null,self_9045));

cuberoom.js.js_console.call(null,"in create-binding",self_9045);

cuberoom.phaser.run_commands.call(null,cljs.core.concat.call(null,cuberoom.play_scene.create_all_objects.call(null),cuberoom.scene.player.create.call(null)));

cuberoom.logic.camera_follow_player.follow.call(null);
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__9043_9046);
}
return cuberoom.js.js_console.call(null,"Create finished");
});
cuberoom.scene.update_SINGLEQUOTE_ = (function cuberoom$scene$update_SINGLEQUOTE_(){
var input_this_frame = cuberoom.input.read_input.call(null,cuberoom.scene.input_objects);
var commands = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cuberoom.input.log.log_if_changed.call(null,input_this_frame);

cuberoom.db.with_db.call(null,(function (db){
var map__9049 = cuberoom.logic.player_move.update_SINGLEQUOTE_.call(null,db,input_this_frame);
var map__9049__$1 = (((((!((map__9049 == null))))?(((((map__9049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9049):map__9049);
var new_db = cljs.core.get.call(null,map__9049__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_commands = cljs.core.get.call(null,map__9049__$1,new cljs.core.Keyword(null,"commands","commands",161008658));
cljs.core.swap_BANG_.call(null,commands,(function (p1__9048_SHARP_){
return cljs.core.concat.call(null,p1__9048_SHARP_,new_commands);
}));

return new_db;
}));

var self_9053 = this;
var _STAR_scene_STAR__orig_val__9051_9054 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__9052_9055 = self_9053;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__9052_9055);

try{cuberoom.phaser.run_commands.call(null,cljs.core.deref.call(null,commands));
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__9051_9054);
}
return cuberoom.db.with_db.call(null,(function (db){
cuberoom.db.log.log_if_changed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142)], null),db);

return db;
}));
});
cuberoom.scene.phaser_config = ({"type": Phaser.AUTO, "width": (800), "height": (600), "scale": ({"mode": Phaser.Scale.FIT, "parent": "phaser-parent", "autoCenter": Phaser.Scale.CENTER_BOTH}), "physics": ({"default": "arcade", "arcade": ({"gravity": ({"y": (200)})})}), "scene": ({"preload": cuberoom.scene.preload, "create": cuberoom.scene.create, "update": cuberoom.scene.update_SINGLEQUOTE_})});
