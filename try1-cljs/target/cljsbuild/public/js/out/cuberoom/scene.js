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

var self_51989 = this;
cuberoom.scene.background.initialize.call(null);

cuberoom.scene.player.preload.call(null);

(function (){var target_obj_51983 = self_51989;
var _STAR_runtime_state_STAR__orig_val__51985 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51986 = oops.state.prepare_state.call(null,target_obj_51983,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51986);

try{var next_obj_51984 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51983,(0),"load",true,true,false))?(target_obj_51983["load"]):null);
return next_obj_51984;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51985);
}})().setBaseURL("/img/");

var _STAR_scene_STAR__orig_val__51987_51990 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__51988_51991 = self_51989;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__51988_51991);

try{cuberoom.phaser.run_commands.call(null,cuberoom.resource.load_all.call(null));
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__51987_51990);
}
return cuberoom.js.js_console.call(null,"preload finished");
});
cuberoom.scene.create = (function cuberoom$scene$create(){
cuberoom.js.js_console.call(null,"Called create");

var self_51994 = this;
cuberoom.js.js_console.call(null,"inside this as self");

var _STAR_scene_STAR__orig_val__51992_51995 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__51993_51996 = self_51994;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__51993_51996);

try{(cuberoom.scene.input_objects = cuberoom.input.initialize.call(null,self_51994));

cuberoom.js.js_console.call(null,"in create-binding",self_51994);

cuberoom.phaser.run_commands.call(null,cljs.core.concat.call(null,cuberoom.play_scene.create_all_objects.call(null),cuberoom.scene.player.create.call(null)));

cuberoom.logic.camera_follow_player.follow.call(null);
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__51992_51995);
}
return cuberoom.js.js_console.call(null,"Create finished");
});
cuberoom.scene.update_SINGLEQUOTE_ = (function cuberoom$scene$update_SINGLEQUOTE_(){
var input_this_frame = cuberoom.input.read_input.call(null,cuberoom.scene.input_objects);
var commands = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cuberoom.input.log.log_if_changed.call(null,input_this_frame);

cuberoom.db.with_db.call(null,(function (db){
var map__51998 = cuberoom.logic.player_move.update_SINGLEQUOTE_.call(null,db,input_this_frame);
var map__51998__$1 = (((((!((map__51998 == null))))?(((((map__51998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51998):map__51998);
var new_db = cljs.core.get.call(null,map__51998__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_commands = cljs.core.get.call(null,map__51998__$1,new cljs.core.Keyword(null,"commands","commands",161008658));
cljs.core.swap_BANG_.call(null,commands,(function (p1__51997_SHARP_){
return cljs.core.concat.call(null,p1__51997_SHARP_,new_commands);
}));

return new_db;
}));

var self_52002 = this;
var _STAR_scene_STAR__orig_val__52000_52003 = cuberoom.phaser._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__52001_52004 = self_52002;
(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__52001_52004);

try{cuberoom.phaser.run_commands.call(null,cljs.core.deref.call(null,commands));
}finally {(cuberoom.phaser._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__52000_52003);
}
return cuberoom.db.with_db.call(null,(function (db){
cuberoom.db.log.log_if_changed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142)], null),db);

return db;
}));
});
cuberoom.scene.phaser_config = ({"type": Phaser.AUTO, "width": (800), "height": (600), "scale": ({"mode": Phaser.Scale.FIT, "parent": "phaser-parent", "autoCenter": Phaser.Scale.CENTER_BOTH}), "physics": ({"default": "arcade", "arcade": ({"gravity": ({"y": (200)})})}), "scene": ({"preload": cuberoom.scene.preload, "create": cuberoom.scene.create, "update": cuberoom.scene.update_SINGLEQUOTE_})});

//# sourceMappingURL=scene.js.map?rel=1615710653821
