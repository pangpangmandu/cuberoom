// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.phaser.example.core');
goog.require('cljs.core');
goog.require('cuberoom.js');
cuberoom.phaser.example.core.preload = (function cuberoom$phaser$example$core$preload(){
cuberoom.js.js_console.call(null,"Called preload");

var self = this;
(function (){var target_obj_9001 = self;
var _STAR_runtime_state_STAR__orig_val__9003 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9004 = oops.state.prepare_state.call(null,target_obj_9001,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9004);

try{var next_obj_9002 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9001,(0),"load",true,true,false))?(target_obj_9001["load"]):null);
return next_obj_9002;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9003);
}})().setBaseURL("http://labs.phaser.io");

(function (){var target_obj_9005 = self;
var _STAR_runtime_state_STAR__orig_val__9007 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9008 = oops.state.prepare_state.call(null,target_obj_9005,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9008);

try{var next_obj_9006 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9005,(0),"load",true,true,false))?(target_obj_9005["load"]):null);
return next_obj_9006;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9007);
}})().image("sky","assets/skies/space3.png");

(function (){var target_obj_9009 = self;
var _STAR_runtime_state_STAR__orig_val__9011 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9012 = oops.state.prepare_state.call(null,target_obj_9009,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9012);

try{var next_obj_9010 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9009,(0),"load",true,true,false))?(target_obj_9009["load"]):null);
return next_obj_9010;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9011);
}})().image("logo","assets/sprites/phaser3-logo.png");

return (function (){var target_obj_9013 = self;
var _STAR_runtime_state_STAR__orig_val__9015 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9016 = oops.state.prepare_state.call(null,target_obj_9013,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9016);

try{var next_obj_9014 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9013,(0),"load",true,true,false))?(target_obj_9013["load"]):null);
return next_obj_9014;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9015);
}})().image("red","assets/particles/red.png");
});
cuberoom.phaser.example.core.create = (function cuberoom$phaser$example$core$create(){
cuberoom.js.js_console.call(null,"Called create");

var self = this;
cuberoom.js.js_console.call(null,self);

(function (){var target_obj_9017 = self;
var _STAR_runtime_state_STAR__orig_val__9019 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9020 = oops.state.prepare_state.call(null,target_obj_9017,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9020);

try{var next_obj_9018 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9017,(0),"add",true,true,false))?(target_obj_9017["add"]):null);
return next_obj_9018;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9019);
}})().image((400),(300),"sky");

var particles = (function (){var target_obj_9021 = self;
var _STAR_runtime_state_STAR__orig_val__9023 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9024 = oops.state.prepare_state.call(null,target_obj_9021,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9024);

try{var next_obj_9022 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9021,(0),"add",true,true,false))?(target_obj_9021["add"]):null);
return next_obj_9022;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9023);
}})().particles("red");
var emitter = particles.createEmitter(({"speed": (100), "scale": ({"start": (1), "end": (0)}), "blendMode": "ADD"}));
var logo = (function (){var target_obj_9025 = self;
var _STAR_runtime_state_STAR__orig_val__9028 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__9029 = oops.state.prepare_state.call(null,target_obj_9025,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__9029);

try{var next_obj_9026 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_9025,(0),"physics",true,true,false))?(target_obj_9025["physics"]):null);
var next_obj_9027 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_9026,(0),"add",true,true,false))?(next_obj_9026["add"]):null);
return next_obj_9027;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__9028);
}})().image((400),(100),"logo");
logo.setVelocity((100),(2));

logo.setBounce((1),(1));

logo.setCollideWorldBounds(true);

return emitter.startFollow(logo);
});
cuberoom.phaser.example.core.phaser_config = ({"type": Phaser.AUTO, "width": (800), "height": (600), "physics": ({"default": "arcade", "arcade": ({"gravity": ({"y": (200)})})}), "scene": ({"preload": cuberoom.phaser.example.core.preload, "create": cuberoom.phaser.example.core.create})});
