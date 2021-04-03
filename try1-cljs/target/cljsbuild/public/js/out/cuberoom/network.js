// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuberoom.network');
goog.require('cljs.core');
goog.require('cognitect.transit');
if((typeof cuberoom !== 'undefined') && (typeof cuberoom.network !== 'undefined') && (typeof cuberoom.network.ws_chan !== 'undefined')){
} else {
cuberoom.network.ws_chan = cljs.core.atom.call(null,null);
}
cuberoom.network.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
cuberoom.network.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
cuberoom.network.receive_transit_msg_BANG_ = (function cuberoom$network$receive_transit_msg_BANG_(update_fn){
return (function (msg){
return update_fn.call(null,cognitect.transit.read.call(null,cuberoom.network.json_reader,msg.data));
});
});
cuberoom.network.send_transit_msg_BANG_ = (function cuberoom$network$send_transit_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,cuberoom.network.ws_chan))){
return cljs.core.deref.call(null,cuberoom.network.ws_chan).send(cognitect.transit.write.call(null,cuberoom.network.json_writer,msg));
} else {
throw (new Error("Websocket is not available!"));
}
});
cuberoom.network.make_websocket_BANG_ = (function cuberoom$network$make_websocket_BANG_(url,receive_handler){
cljs.core.println.call(null,"attempting to connect websocket");

var temp__5733__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5733__auto__)){
var chan = temp__5733__auto__;
(chan.onopen = (function (){
cljs.core.println.call(null,"onopen websocket channel");

return cljs.core.deref.call(null,cuberoom.network.ws_chan).send("hi");
}));

(chan.onmessage = (function (msg){
cljs.core.println.call(null,"websocke received ",msg);

return receive_handler.call(null,msg);
}));

cljs.core.reset_BANG_.call(null,cuberoom.network.ws_chan,chan);

return cljs.core.println.call(null,"Websocket connection established with: ",url);
} else {
throw (new Error("Websocket connection failed!"));
}
});

//# sourceMappingURL=network.js.map?rel=1615710653946
