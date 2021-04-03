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
var iter__4529__auto__ = (function cuberoom$scene$player$prepare_image_load_$_iter__7828(s__7829){
return (new cljs.core.LazySeq(null,(function (){
var s__7829__$1 = s__7829;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7829__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var anim = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__7829__$1,anim,xs__6292__auto__,temp__5735__auto__){
return (function cuberoom$scene$player$prepare_image_load_$_iter__7828_$_iter__7830(s__7831){
return (new cljs.core.LazySeq(null,((function (s__7829__$1,anim,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7831__$1 = s__7831;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7831__$1);
if(temp__5735__auto____$1){
var s__7831__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7831__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7831__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7833 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7832 = (0);
while(true){
if((i__7832 < size__4528__auto__)){
var num = cljs.core._nth.call(null,c__4527__auto__,i__7832);
cljs.core.chunk_append.call(null,b__7833,cuberoom.scene.player.create_resource_data.call(null,anim,num));

var G__7834 = (i__7832 + (1));
i__7832 = G__7834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7833),cuberoom$scene$player$prepare_image_load_$_iter__7828_$_iter__7830.call(null,cljs.core.chunk_rest.call(null,s__7831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7833),null);
}
} else {
var num = cljs.core.first.call(null,s__7831__$2);
return cljs.core.cons.call(null,cuberoom.scene.player.create_resource_data.call(null,anim,num),cuberoom$scene$player$prepare_image_load_$_iter__7828_$_iter__7830.call(null,cljs.core.rest.call(null,s__7831__$2)));
}
} else {
return null;
}
break;
}
});})(s__7829__$1,anim,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7829__$1,anim,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,cuberoom$scene$player$prepare_image_load_$_iter__7828.call(null,cljs.core.rest.call(null,s__7829__$1)));
} else {
var G__7835 = cljs.core.rest.call(null,s__7829__$1);
s__7829__$1 = G__7835;
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

var seq__7836_7840 = cljs.core.seq.call(null,cuberoom.scene.player.prepare_image_load.call(null));
var chunk__7837_7841 = null;
var count__7838_7842 = (0);
var i__7839_7843 = (0);
while(true){
if((i__7839_7843 < count__7838_7842)){
var resource_7844 = cljs.core._nth.call(null,chunk__7837_7841,i__7839_7843);
cuberoom.resource.register.call(null,resource_7844);


var G__7845 = seq__7836_7840;
var G__7846 = chunk__7837_7841;
var G__7847 = count__7838_7842;
var G__7848 = (i__7839_7843 + (1));
seq__7836_7840 = G__7845;
chunk__7837_7841 = G__7846;
count__7838_7842 = G__7847;
i__7839_7843 = G__7848;
continue;
} else {
var temp__5735__auto___7849 = cljs.core.seq.call(null,seq__7836_7840);
if(temp__5735__auto___7849){
var seq__7836_7850__$1 = temp__5735__auto___7849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7836_7850__$1)){
var c__4556__auto___7851 = cljs.core.chunk_first.call(null,seq__7836_7850__$1);
var G__7852 = cljs.core.chunk_rest.call(null,seq__7836_7850__$1);
var G__7853 = c__4556__auto___7851;
var G__7854 = cljs.core.count.call(null,c__4556__auto___7851);
var G__7855 = (0);
seq__7836_7840 = G__7852;
chunk__7837_7841 = G__7853;
count__7838_7842 = G__7854;
i__7839_7843 = G__7855;
continue;
} else {
var resource_7856 = cljs.core.first.call(null,seq__7836_7850__$1);
cuberoom.resource.register.call(null,resource_7856);


var G__7857 = cljs.core.next.call(null,seq__7836_7850__$1);
var G__7858 = null;
var G__7859 = (0);
var G__7860 = (0);
seq__7836_7840 = G__7857;
chunk__7837_7841 = G__7858;
count__7838_7842 = G__7859;
i__7839_7843 = G__7860;
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
return cljs.core.concat.call(null,cuberoom.logic.player_animator.create_anims.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuberoom.logic.player_animator.play_anim.call(null,new cljs.core.Keyword("cuberoom.scene.player","object","cuberoom.scene.player/object",2045722142),new cljs.core.Keyword(null,"player-walk-left","player-walk-left",-1825910549))], null));
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
