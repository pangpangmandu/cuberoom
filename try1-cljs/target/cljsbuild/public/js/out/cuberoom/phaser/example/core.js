// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.phaser.example.core');
goog.require('cljs.core');
goog.require('cuberoom.js');
cuberoom.phaser.example.core.preload = (function cuberoom$phaser$example$core$preload(){
cuberoom.js.js_console.call(null,"Called preload");

var self = this;
(function (){var target_obj_51950 = self;
var _STAR_runtime_state_STAR__orig_val__51952 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51953 = oops.state.prepare_state.call(null,target_obj_51950,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51953);

try{var next_obj_51951 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51950,(0),"load",true,true,false))?(target_obj_51950["load"]):null);
return next_obj_51951;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51952);
}})().setBaseURL("http://labs.phaser.io");

(function (){var target_obj_51954 = self;
var _STAR_runtime_state_STAR__orig_val__51956 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51957 = oops.state.prepare_state.call(null,target_obj_51954,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51957);

try{var next_obj_51955 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51954,(0),"load",true,true,false))?(target_obj_51954["load"]):null);
return next_obj_51955;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51956);
}})().image("sky","assets/skies/space3.png");

(function (){var target_obj_51958 = self;
var _STAR_runtime_state_STAR__orig_val__51960 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51961 = oops.state.prepare_state.call(null,target_obj_51958,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51961);

try{var next_obj_51959 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51958,(0),"load",true,true,false))?(target_obj_51958["load"]):null);
return next_obj_51959;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51960);
}})().image("logo","assets/sprites/phaser3-logo.png");

return (function (){var target_obj_51962 = self;
var _STAR_runtime_state_STAR__orig_val__51964 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51965 = oops.state.prepare_state.call(null,target_obj_51962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51965);

try{var next_obj_51963 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51962,(0),"load",true,true,false))?(target_obj_51962["load"]):null);
return next_obj_51963;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51964);
}})().image("red","assets/particles/red.png");
});
cuberoom.phaser.example.core.create = (function cuberoom$phaser$example$core$create(){
cuberoom.js.js_console.call(null,"Called create");

var self = this;
cuberoom.js.js_console.call(null,self);

(function (){var target_obj_51966 = self;
var _STAR_runtime_state_STAR__orig_val__51968 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51969 = oops.state.prepare_state.call(null,target_obj_51966,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51969);

try{var next_obj_51967 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51966,(0),"add",true,true,false))?(target_obj_51966["add"]):null);
return next_obj_51967;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51968);
}})().image((400),(300),"sky");

var particles = (function (){var target_obj_51970 = self;
var _STAR_runtime_state_STAR__orig_val__51972 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51973 = oops.state.prepare_state.call(null,target_obj_51970,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51973);

try{var next_obj_51971 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51970,(0),"add",true,true,false))?(target_obj_51970["add"]):null);
return next_obj_51971;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51972);
}})().particles("red");
var emitter = particles.createEmitter(({"speed": (100), "scale": ({"start": (1), "end": (0)}), "blendMode": "ADD"}));
var logo = (function (){var target_obj_51974 = self;
var _STAR_runtime_state_STAR__orig_val__51977 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__51978 = oops.state.prepare_state.call(null,target_obj_51974,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__51978);

try{var next_obj_51975 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51974,(0),"physics",true,true,false))?(target_obj_51974["physics"]):null);
var next_obj_51976 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51975,(0),"add",true,true,false))?(next_obj_51975["add"]):null);
return next_obj_51976;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__51977);
}})().image((400),(100),"logo");
logo.setVelocity((100),(2));

logo.setBounce((1),(1));

logo.setCollideWorldBounds(true);

return emitter.startFollow(logo);
});
cuberoom.phaser.example.core.phaser_config = ({"type": Phaser.AUTO, "width": (800), "height": (600), "physics": ({"default": "arcade", "arcade": ({"gravity": ({"y": (200)})})}), "scene": ({"preload": cuberoom.phaser.example.core.preload, "create": cuberoom.phaser.example.core.create})});

//# sourceMappingURL=core.js.map?rel=1615710653800
