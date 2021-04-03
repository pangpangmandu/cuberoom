// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.core');
goog.require('cljs.core');
goog.require('cuberoom.js');
goog.require('cuberoom.scene');
goog.require('mount.core');
goog.require('cuberoom.network');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'cuberoom.core/game"))){
if((typeof cuberoom !== 'undefined') && (typeof cuberoom.core !== 'undefined') && (typeof cuberoom.core.game !== 'undefined')){
} else {
cuberoom.core.game = mount.core.__GT_DerefableState.call(null,"#'cuberoom.core/game");
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return cuberoom.core.game;},new cljs.core.Symbol("cuberoom.core","game","cuberoom.core/game",645678979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.core","cuberoom.core",-1944181900,null),new cljs.core.Symbol(null,"game","game",1199007694,null),"/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/core.cljs",15,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.core.game)?cuberoom.core.game.cljs$lang$test:null)])),"#'cuberoom.core/game",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(1),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
cljs.core.println.call(null,"Creates a game object.");

return (new Phaser.Game(cuberoom.scene.phaser_config));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
cljs.core.println.call(null,"Remove game object");

return cljs.core.deref.call(null,cuberoom.core.game).destroy(true,false);
})], null));
} else {
if((typeof cuberoom !== 'undefined') && (typeof cuberoom.core !== 'undefined') && (typeof cuberoom.core.game !== 'undefined')){
} else {
cuberoom.core.game = mount.core.current_state.call(null,"#'cuberoom.core/game");
}
}

new cljs.core.Var(function(){return cuberoom.core.game;},new cljs.core.Symbol("cuberoom.core","game","cuberoom.core/game",645678979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cuberoom.core","cuberoom.core",-1944181900,null),new cljs.core.Symbol(null,"game","game",1199007694,null),"/mnt/second/juhyung/code/projects/cuberoom/src/cljs/cuberoom/core.cljs",15,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(cuberoom.core.game)?cuberoom.core.game.cljs$lang$test:null)]));
cuberoom.core.mount_components = (function cuberoom$core$mount_components(){
var content = document.getElementById("app");
while(true){
if(cljs.core.truth_(content.hasChildNodes())){
content.removeChild(content.lastChild);

continue;
} else {
}
break;
}

content.appendChild(document.createTextNode("Welcome to cuberoom"));

mount.core.in_cljc_mode.call(null);

mount.core.start.call(null);

cuberoom.js.js_console.call(null,"Flagwheel loaded core.js");

return cuberoom.js.js_console.call(null,cljs.core.deref.call(null,cuberoom.core.game));
});
if((typeof cuberoom !== 'undefined') && (typeof cuberoom.core !== 'undefined') && (typeof cuberoom.core.messages !== 'undefined')){
} else {
cuberoom.core.messages = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cuberoom.core.update_messages_BANG_ = (function cuberoom$core$update_messages_BANG_(p__9210){
var map__9211 = p__9210;
var map__9211__$1 = (((((!((map__9211 == null))))?(((((map__9211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9211):map__9211);
var message = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.swap_BANG_.call(null,cuberoom.core.messages,(function (p1__9209_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.conj.call(null,p1__9209_SHARP_,message)));
}));
});
cuberoom.core.init_BANG_ = (function cuberoom$core$init_BANG_(){
return cuberoom.core.mount_components.call(null);
});
