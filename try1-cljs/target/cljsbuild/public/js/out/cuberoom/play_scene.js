// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.play_scene');
goog.require('cljs.core');
goog.require('cuberoom.db');
goog.require('cuberoom.js');
cuberoom.play_scene.add_object_key = (function cuberoom$play_scene$add_object_key(key){
return cuberoom.db.update_or.call(null,new cljs.core.Keyword("cuberoom.play-scene","keys","cuberoom.play-scene/keys",-2119260377),(function (p1__48807_SHARP_){
return cljs.core.conj.call(null,p1__48807_SHARP_,key);
}),cljs.core.PersistentHashSet.createAsIfByAssoc([key]));
});
/**
 * Register objects for this scene.
 * 
 *   The value must contains these keys: :type, :x, :y, :image, :name.
 * 
 *   :type can has :image and :sprite. :image is a static image. :sprite
 *   is an image that can be animated.
 * 
 *   :x is the x position of the object in the scene.
 *   Left is 0.
 * 
 *   :y is the y poisition of the object in the scene.
 *   Up is 0.
 * 
 *   :image is the key of the image that is registered in the resource.
 * 
 *   :name is the key of this object in the DB and the phaser.
 * 
 *   Example)
 *   ```
 *   (play-scene/register
 *  {:type :image
 *   :name ::object
 *   :x 400
 *   :y 300
 *   :image ::image
 *  }
 *   ```
 *   
 */
cuberoom.play_scene.register = (function cuberoom$play_scene$register(value){
var key = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(value);
cuberoom.play_scene.add_object_key.call(null,key);

return cuberoom.db.set_if_empty.call(null,key,value);
});
cuberoom.play_scene.create_all_objects = (function cuberoom$play_scene$create_all_objects(){
cuberoom.js.js_console.call(null,"create-all-objects");

var keys = cuberoom.db.get_db_value.call(null,new cljs.core.Keyword("cuberoom.play-scene","keys","cuberoom.play-scene/keys",-2119260377));
var iter__4529__auto__ = (function cuberoom$play_scene$create_all_objects_$_iter__48808(s__48809){
return (new cljs.core.LazySeq(null,(function (){
var s__48809__$1 = s__48809;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__48809__$1);
if(temp__5735__auto__){
var s__48809__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48809__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__48809__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__48811 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__48810 = (0);
while(true){
if((i__48810 < size__4528__auto__)){
var key = cljs.core._nth.call(null,c__4527__auto__,i__48810);
var object = cuberoom.db.get_db_value.call(null,key);
cljs.core.chunk_append.call(null,b__48811,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create-object","create-object",1906308464),new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(object)], null));

var G__48812 = (i__48810 + (1));
i__48810 = G__48812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48811),cuberoom$play_scene$create_all_objects_$_iter__48808.call(null,cljs.core.chunk_rest.call(null,s__48809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48811),null);
}
} else {
var key = cljs.core.first.call(null,s__48809__$2);
var object = cuberoom.db.get_db_value.call(null,key);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create-object","create-object",1906308464),new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(object),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(object)], null),cuberoom$play_scene$create_all_objects_$_iter__48808.call(null,cljs.core.rest.call(null,s__48809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,keys);
});

//# sourceMappingURL=play_scene.js.map?rel=1615710650717
