// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.logic.player_move');
goog.require('cljs.core');
goog.require('cuberoom.scene.player');
goog.require('cuberoom.logic.player_animator');
cuberoom.logic.player_move.parse_horizontal = (function cuberoom$logic$player_move$parse_horizontal(pressed_keys){
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"a","a",-2123407586))){
return new cljs.core.Keyword(null,"-x","-x",672114399);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"left","left",-399115937))){
return new cljs.core.Keyword(null,"-x","-x",672114399);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"d","d",1972142424))){
return new cljs.core.Keyword(null,"+x","+x",-1892123564);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"right","right",-452581833))){
return new cljs.core.Keyword(null,"+x","+x",-1892123564);
} else {
return null;

}
}
}
}
});
cuberoom.logic.player_move.parse_vertical = (function cuberoom$logic$player_move$parse_vertical(pressed_keys){
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"w","w",354169001))){
return new cljs.core.Keyword(null,"-y","-y",-856510547);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"up","up",-269712113))){
return new cljs.core.Keyword(null,"-y","-y",-856510547);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"s","s",1705939918))){
return new cljs.core.Keyword(null,"+y","+y",-1893768569);
} else {
if(cljs.core.contains_QMARK_.call(null,pressed_keys,new cljs.core.Keyword(null,"down","down",1565245570))){
return new cljs.core.Keyword(null,"+y","+y",-1893768569);
} else {
return null;

}
}
}
}
});
cuberoom.logic.player_move.input__GT_movements = (function cuberoom$logic$player_move$input__GT_movements(input){
var pressed_keys = cljs.core.get_in.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(new cljs.core.List(null,cuberoom.logic.player_move.parse_horizontal.call(null,pressed_keys),(new cljs.core.List(null,cuberoom.logic.player_move.parse_vertical.call(null,pressed_keys),null,(1),null)),(2),null)));
});
cuberoom.logic.player_move.move_speed = (100);
cuberoom.logic.player_move.frame_delta = ((1) / (60));
cuberoom.logic.player_move.move__GT_vec = (function cuberoom$logic$player_move$move__GT_vec(movements){
var len = cljs.core.count.call(null,movements);
var distance_unit = (function (){var G__51930 = len;
switch (G__51930) {
case (0):
return (0);

break;
case (1):
return cuberoom.logic.player_move.move_speed;

break;
case (2):
return (cuberoom.logic.player_move.move_speed / Math.sqrt((2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51930)].join('')));

}
})();
var distance = (cuberoom.logic.player_move.frame_delta * distance_unit);
var x_unit = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+x","+x",-1892123564),null], null), null),movements))?(1):(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-x","-x",672114399),null], null), null),movements))?(-1):(0)
));
var y_unit = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+y","+y",-1893768569),null], null), null),movements))?(1):(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-y","-y",-856510547),null], null), null),movements))?(-1):(0)
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(distance * x_unit),(distance * y_unit)], null);
});
cuberoom.logic.player_move.vec__GT_commands = (function cuberoom$logic$player_move$vec__GT_commands(move_vec){
var vec__51932 = move_vec;
var x = cljs.core.nth.call(null,vec__51932,(0),null);
var y = cljs.core.nth.call(null,vec__51932,(1),null);
if(cljs.core._EQ_.call(null,(0),x,y)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move-rel","move-rel",1779087567),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
}
});
/**
 * Save what this module does in the previous frame. The information
 *   will be used to determin the animation state.
 * 
 *   It contains these things:
 *   1. Moved or not
 *   2. Moved direction
 */
cuberoom.logic.player_move.update_state = (function cuberoom$logic$player_move$update_state(db,move_vec){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.logic.player-move","state","cuberoom.logic.player-move/state",1681335102),new cljs.core.Keyword(null,"move-vec","move-vec",-1327941271)], null),move_vec);
});
cuberoom.logic.player_move.get_previous_move_vec = (function cuberoom$logic$player_move$get_previous_move_vec(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.logic.player-move","state","cuberoom.logic.player-move/state",1681335102),new cljs.core.Keyword(null,"move-vec","move-vec",-1327941271)], null));
});
cuberoom.logic.player_move.save_anim = (function cuberoom$logic$player_move$save_anim(db,anim){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.logic.player-move","state","cuberoom.logic.player-move/state",1681335102),new cljs.core.Keyword(null,"anim","anim",-1276068045)], null),anim);
});
cuberoom.logic.player_move.get_previous_anim = (function cuberoom$logic$player_move$get_previous_anim(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cuberoom.logic.player-move","state","cuberoom.logic.player-move/state",1681335102),new cljs.core.Keyword(null,"anim","anim",-1276068045)], null));
});
/**
 * return :moved :not-moved
 */
cuberoom.logic.player_move.get_movement_for_anim = (function cuberoom$logic$player_move$get_movement_for_anim(move_vec){
if((move_vec == null)){
return new cljs.core.Keyword(null,"not-moved","not-moved",-491812071);
} else {
if((!(cljs.core.vector_QMARK_.call(null,move_vec)))){
cljs.core.println.call(null,"get-movement-for-anim not vector",move_vec);
} else {
}

var vec__51935 = move_vec;
var x = cljs.core.nth.call(null,vec__51935,(0),null);
var y = cljs.core.nth.call(null,vec__51935,(1),null);
if(cljs.core._EQ_.call(null,(0),x,y)){
return new cljs.core.Keyword(null,"not-moved","not-moved",-491812071);
} else {
return new cljs.core.Keyword(null,"moved","moved",486549219);

}
}
});
cuberoom.logic.player_move.get_direction_for_anim = (function cuberoom$logic$player_move$get_direction_for_anim(move_vec){
var vec__51938 = move_vec;
var x = cljs.core.nth.call(null,vec__51938,(0),null);
var y = cljs.core.nth.call(null,vec__51938,(1),null);
if((y > (0))){
return new cljs.core.Keyword(null,"down","down",1565245570);
} else {
if((y < (0))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
if((x > (0))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if((x < (0))){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return null;

}
}
}
}
});
cuberoom.logic.player_move.calculate_new_anim = (function cuberoom$logic$player_move$calculate_new_anim(anim_direction){
var pred__51941 = cljs.core._EQ_;
var expr__51942 = anim_direction;
if(cljs.core.truth_(pred__51941.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__51942))){
return new cljs.core.Keyword(null,"player-walk-up","player-walk-up",998538181);
} else {
if(cljs.core.truth_(pred__51941.call(null,new cljs.core.Keyword(null,"down","down",1565245570),expr__51942))){
return new cljs.core.Keyword(null,"player-walk-down","player-walk-down",1556536564);
} else {
if(cljs.core.truth_(pred__51941.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__51942))){
return new cljs.core.Keyword(null,"player-walk-right","player-walk-right",-1530347363);
} else {
if(cljs.core.truth_(pred__51941.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__51942))){
return new cljs.core.Keyword(null,"player-walk-left","player-walk-left",-1825910549);
} else {
return null;
}
}
}
}
});
/**
 * Check these things.
 *   1. Moving stopped or moving started
 *   2. The direction of movement is changed
 */
cuberoom.logic.player_move.update_anim = (function cuberoom$logic$player_move$update_anim(db,move_vec){
if((move_vec == null)){
cljs.core.println.call(null,"update-anim move-vec is nil",move_vec);
} else {
}

var prev_moved_QMARK_ = cuberoom.logic.player_move.get_movement_for_anim.call(null,cuberoom.logic.player_move.get_previous_move_vec.call(null,db));
var moved_QMARK_ = cuberoom.logic.player_move.get_movement_for_anim.call(null,move_vec);
var anim_direction = cuberoom.logic.player_move.get_direction_for_anim.call(null,move_vec);
var new_anim = cuberoom.logic.player_move.calculate_new_anim.call(null,anim_direction);
var prev_anim = cuberoom.logic.player_move.get_previous_anim.call(null,db);
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"moved","moved",486549219),prev_moved_QMARK_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-moved","not-moved",-491812071),moved_QMARK_)))){
return (function (db__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuberoom.logic.player_animator.stop_anim.call(null,new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142))], null)], null);
}).call(null,cuberoom.logic.player_move.save_anim.call(null,db,new_anim));
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"moved","moved",486549219),moved_QMARK_)) && (cljs.core.not_EQ_.call(null,new_anim,prev_anim)))){
return (function (db__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db__$1,new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuberoom.logic.player_animator.play_anim.call(null,new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142),new_anim)], null)], null);
}).call(null,cuberoom.logic.player_move.save_anim.call(null,db,new_anim));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.PersistentVector.EMPTY], null);

}
}
});
cuberoom.logic.player_move.update_SINGLEQUOTE_ = (function cuberoom$logic$player_move$update_SINGLEQUOTE_(db,input){
var movements = cuberoom.logic.player_move.input__GT_movements.call(null,input);
var move_vec = cuberoom.logic.player_move.move__GT_vec.call(null,movements);
var commands = cuberoom.logic.player_move.vec__GT_commands.call(null,move_vec);
var map__51944 = cuberoom.logic.player_move.update_anim.call(null,db,move_vec);
var map__51944__$1 = (((((!((map__51944 == null))))?(((((map__51944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51944):map__51944);
var anim_db = cljs.core.get.call(null,map__51944__$1,new cljs.core.Keyword(null,"db","db",993250759));
var anim_commands = cljs.core.get.call(null,map__51944__$1,new cljs.core.Keyword(null,"commands","commands",161008658));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cuberoom.logic.player_move.update_state.call(null,cuberoom.scene.player.move_rel_in_db.call(null,anim_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move_vec,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [move_vec,(1)], null)),move_vec),new cljs.core.Keyword(null,"commands","commands",161008658),cljs.core.concat.call(null,commands,anim_commands)], null);
});

//# sourceMappingURL=player_move.js.map?rel=1615710653775
