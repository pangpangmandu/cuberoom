// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.scene.player');
goog.require('cljs.core');
goog.require('cuberoom.resource');
goog.require('cuberoom.play_scene');
goog.require('cuberoom.logic.player_animator');
cuberoom.scene.player.object_key = new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142);
cuberoom.scene.player.get_ns = (function cuberoom$scene$player$get_ns(){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Var(function(){return cuberoom.scene.player.get_ns;},new cljs.core.Symbol("cuberoom.scene.player","get-ns","cuberoom.scene.player/get-ns",1465081049,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cuberoom.scene.player","cuberoom.scene.player",1502938639,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/cuberoom/scene/player.cljs",new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-ns","get-ns",1229793158,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(cuberoom.scene.player.get_ns)?cuberoom.scene.player.get_ns.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))));
});
/**
 * Creates a resource name like ::resource-down-2
 */
cuberoom.scene.player.create_resource_name = (function cuberoom$scene$player$create_resource_name(anim,num){
return cljs.core.keyword.call(null,cuberoom.scene.player.get_ns.call(null),["resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''));
});
cuberoom.scene.player.create_resource_data = (function cuberoom$scene$player$create_resource_data(anim,num){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"name","name",1843675177),cuberoom.scene.player.create_resource_name.call(null,anim,num),new cljs.core.Keyword(null,"file","file",-1269645878),["\uCE90\uB9AD\uD13001/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),").png"].join('')], null);
});
/**
 * Return keys and register data of character images
 */
cuberoom.scene.player.prepare_image_load = (function cuberoom$scene$player$prepare_image_load(){
var iter__4529__auto__ = (function cuberoom$scene$player$prepare_image_load_$_iter__48815(s__48816){
return (new cljs.core.LazySeq(null,(function (){
var s__48816__$1 = s__48816;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__48816__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var anim = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__48816__$1,anim,xs__6292__auto__,temp__5735__auto__){
return (function cuberoom$scene$player$prepare_image_load_$_iter__48815_$_iter__48817(s__48818){
return (new cljs.core.LazySeq(null,((function (s__48816__$1,anim,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__48818__$1 = s__48818;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__48818__$1);
if(temp__5735__auto____$1){
var s__48818__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48818__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__48818__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__48820 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__48819 = (0);
while(true){
if((i__48819 < size__4528__auto__)){
var num = cljs.core._nth.call(null,c__4527__auto__,i__48819);
cljs.core.chunk_append.call(null,b__48820,cuberoom.scene.player.create_resource_data.call(null,anim,num));

var G__48821 = (i__48819 + (1));
i__48819 = G__48821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48820),cuberoom$scene$player$prepare_image_load_$_iter__48815_$_iter__48817.call(null,cljs.core.chunk_rest.call(null,s__48818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48820),null);
}
} else {
var num = cljs.core.first.call(null,s__48818__$2);
return cljs.core.cons.call(null,cuberoom.scene.player.create_resource_data.call(null,anim,num),cuberoom$scene$player$prepare_image_load_$_iter__48815_$_iter__48817.call(null,cljs.core.rest.call(null,s__48818__$2)));
}
} else {
return null;
}
break;
}
});})(s__48816__$1,anim,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__48816__$1,anim,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,cuberoom$scene$player$prepare_image_load_$_iter__48815.call(null,cljs.core.rest.call(null,s__48816__$1)));
} else {
var G__48822 = cljs.core.rest.call(null,s__48816__$1);
s__48816__$1 = G__48822;
continue;
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
cuberoom.scene.player.preload = (function cuberoom$scene$player$preload(){
cljs.core.println.call(null,"Player initializex");

var seq__48823_48827 = cljs.core.seq.call(null,cuberoom.scene.player.prepare_image_load.call(null));
var chunk__48824_48828 = null;
var count__48825_48829 = (0);
var i__48826_48830 = (0);
while(true){
if((i__48826_48830 < count__48825_48829)){
var resource_48831 = cljs.core._nth.call(null,chunk__48824_48828,i__48826_48830);
cuberoom.resource.register.call(null,resource_48831);


var G__48832 = seq__48823_48827;
var G__48833 = chunk__48824_48828;
var G__48834 = count__48825_48829;
var G__48835 = (i__48826_48830 + (1));
seq__48823_48827 = G__48832;
chunk__48824_48828 = G__48833;
count__48825_48829 = G__48834;
i__48826_48830 = G__48835;
continue;
} else {
var temp__5735__auto___48836 = cljs.core.seq.call(null,seq__48823_48827);
if(temp__5735__auto___48836){
var seq__48823_48837__$1 = temp__5735__auto___48836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48823_48837__$1)){
var c__4556__auto___48838 = cljs.core.chunk_first.call(null,seq__48823_48837__$1);
var G__48839 = cljs.core.chunk_rest.call(null,seq__48823_48837__$1);
var G__48840 = c__4556__auto___48838;
var G__48841 = cljs.core.count.call(null,c__4556__auto___48838);
var G__48842 = (0);
seq__48823_48827 = G__48839;
chunk__48824_48828 = G__48840;
count__48825_48829 = G__48841;
i__48826_48830 = G__48842;
continue;
} else {
var resource_48843 = cljs.core.first.call(null,seq__48823_48837__$1);
cuberoom.resource.register.call(null,resource_48843);


var G__48844 = cljs.core.next.call(null,seq__48823_48837__$1);
var G__48845 = null;
var G__48846 = (0);
var G__48847 = (0);
seq__48823_48827 = G__48844;
chunk__48824_48828 = G__48845;
count__48825_48829 = G__48846;
i__48826_48830 = G__48847;
continue;
}
} else {
}
}
break;
}

return cuberoom.play_scene.register.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"name","name",1843675177),cuberoom.scene.player.object_key,new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword("cuberoom.scene.player","resource-left-1","cuberoom.scene.player/resource-left-1",668921310)], null));
});
/**
 * Returns phaser commands for initialization.
 */
cuberoom.scene.player.create = (function cuberoom$scene$player$create(){
return cljs.core.concat.call(null,cuberoom.logic.player_animator.create_anims.call(null));
});
cuberoom.scene.player.get_object_from_db = (function cuberoom$scene$player$get_object_from_db(db){
return cljs.core.get.call(null,db,new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142));
});
cuberoom.scene.player.move_rel = (function cuberoom$scene$player$move_rel(player,x,y){
return cljs.core.update.call(null,cljs.core.update.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,y);
});
cuberoom.scene.player.move_rel_in_db = (function cuberoom$scene$player$move_rel_in_db(db,x,y){
return cljs.core.update.call(null,db,new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142),cuberoom.scene.player.move_rel,x,y);
});

//# sourceMappingURL=player.js.map?rel=1615710650738
