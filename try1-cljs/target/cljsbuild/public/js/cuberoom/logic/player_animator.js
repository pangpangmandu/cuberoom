// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.logic.player_animator');
goog.require('cljs.core');
cuberoom.logic.player_animator.character_animation_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["up","down","left","right"], null);
cuberoom.logic.player_animator.get_ns = (function cuberoom$logic$player_animator$get_ns(){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Var(function(){return cuberoom.logic.player_animator.get_ns;},new cljs.core.Symbol("cuberoom.logic.player-animator","get-ns","cuberoom.logic.player-animator/get-ns",-1287761763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cuberoom.logic.player-animator","cuberoom.logic.player-animator",-426588871,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/cuberoom/logic/player_animator.cljs",new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-ns","get-ns",1229793158,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(cuberoom.logic.player_animator.get_ns)?cuberoom.logic.player_animator.get_ns.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))));
});
cuberoom.logic.player_animator.create_anim = (function cuberoom$logic$player_animator$create_anim(name){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create-anim","create-anim",14120531),new cljs.core.Keyword(null,"anim-name","anim-name",-253000634),cljs.core.keyword.call(null,["player-walk-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),new cljs.core.Keyword(null,"frames","frames",1765687497),[({"key": cljs.core.keyword.call(null,["cuberoom.scene.player/resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-1"].join(''))}),({"key": cljs.core.keyword.call(null,["cuberoom.scene.player/resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-2"].join(''))}),({"key": cljs.core.keyword.call(null,["cuberoom.scene.player/resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-3"].join(''))}),({"key": cljs.core.keyword.call(null,["cuberoom.scene.player/resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-4"].join(''))})],new cljs.core.Keyword(null,"repeat","repeat",832692087),(-1)], null);
});
cuberoom.logic.player_animator.create_anims = (function cuberoom$logic$player_animator$create_anims(){
var iter__4529__auto__ = (function cuberoom$logic$player_animator$create_anims_$_iter__6276(s__6277){
return (new cljs.core.LazySeq(null,(function (){
var s__6277__$1 = s__6277;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6277__$1);
if(temp__5735__auto__){
var s__6277__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6277__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6277__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6279 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6278 = (0);
while(true){
if((i__6278 < size__4528__auto__)){
var name = cljs.core._nth.call(null,c__4527__auto__,i__6278);
cljs.core.chunk_append.call(null,b__6279,cuberoom.logic.player_animator.create_anim.call(null,name));

var G__6280 = (i__6278 + (1));
i__6278 = G__6280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6279),cuberoom$logic$player_animator$create_anims_$_iter__6276.call(null,cljs.core.chunk_rest.call(null,s__6277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6279),null);
}
} else {
var name = cljs.core.first.call(null,s__6277__$2);
return cljs.core.cons.call(null,cuberoom.logic.player_animator.create_anim.call(null,name),cuberoom$logic$player_animator$create_anims_$_iter__6276.call(null,cljs.core.rest.call(null,s__6277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cuberoom.logic.player_animator.character_animation_names);
});
cuberoom.logic.player_animator.play_anim = (function cuberoom$logic$player_animator$play_anim(character_name,anim_name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"play-anim","play-anim",-510557240),new cljs.core.Keyword(null,"anim-name","anim-name",-253000634),anim_name,new cljs.core.Keyword(null,"character-name","character-name",355825354),character_name], null);
});
cuberoom.logic.player_animator.stop_anim = (function cuberoom$logic$player_animator$stop_anim(character_name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stop-anim","stop-anim",-528508082),new cljs.core.Keyword(null,"character-name","character-name",355825354),character_name], null);
});
