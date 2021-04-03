// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__55646 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__55646 == null)){
return null;
} else {
return goog.object.get(G__55646,"requires");
}
}):(function (path){
var G__55647 = goog.object.get(goog.dependencies_.requires,path);
if((G__55647 == null)){
return null;
} else {
return goog.object.getKeys(G__55647);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__55648_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__55648_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__55649 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__55649__$1 = (((G__55649 == null))?null:goog.object.get(G__55649,"provides"));
if((G__55649__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__55649__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__55650 = cljs.core.seq.call(null,provides);
var chunk__55651 = null;
var count__55652 = (0);
var i__55653 = (0);
while(true){
if((i__55653 < count__55652)){
var prov = cljs.core._nth.call(null,chunk__55651,i__55653);
var seq__55662_55674 = cljs.core.seq.call(null,requires);
var chunk__55663_55675 = null;
var count__55664_55676 = (0);
var i__55665_55677 = (0);
while(true){
if((i__55665_55677 < count__55664_55676)){
var req_55678 = cljs.core._nth.call(null,chunk__55663_55675,i__55665_55677);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55678,prov);


var G__55679 = seq__55662_55674;
var G__55680 = chunk__55663_55675;
var G__55681 = count__55664_55676;
var G__55682 = (i__55665_55677 + (1));
seq__55662_55674 = G__55679;
chunk__55663_55675 = G__55680;
count__55664_55676 = G__55681;
i__55665_55677 = G__55682;
continue;
} else {
var temp__5735__auto___55683 = cljs.core.seq.call(null,seq__55662_55674);
if(temp__5735__auto___55683){
var seq__55662_55684__$1 = temp__5735__auto___55683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55662_55684__$1)){
var c__4556__auto___55685 = cljs.core.chunk_first.call(null,seq__55662_55684__$1);
var G__55686 = cljs.core.chunk_rest.call(null,seq__55662_55684__$1);
var G__55687 = c__4556__auto___55685;
var G__55688 = cljs.core.count.call(null,c__4556__auto___55685);
var G__55689 = (0);
seq__55662_55674 = G__55686;
chunk__55663_55675 = G__55687;
count__55664_55676 = G__55688;
i__55665_55677 = G__55689;
continue;
} else {
var req_55690 = cljs.core.first.call(null,seq__55662_55684__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55690,prov);


var G__55691 = cljs.core.next.call(null,seq__55662_55684__$1);
var G__55692 = null;
var G__55693 = (0);
var G__55694 = (0);
seq__55662_55674 = G__55691;
chunk__55663_55675 = G__55692;
count__55664_55676 = G__55693;
i__55665_55677 = G__55694;
continue;
}
} else {
}
}
break;
}


var G__55695 = seq__55650;
var G__55696 = chunk__55651;
var G__55697 = count__55652;
var G__55698 = (i__55653 + (1));
seq__55650 = G__55695;
chunk__55651 = G__55696;
count__55652 = G__55697;
i__55653 = G__55698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55650);
if(temp__5735__auto__){
var seq__55650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55650__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__55650__$1);
var G__55699 = cljs.core.chunk_rest.call(null,seq__55650__$1);
var G__55700 = c__4556__auto__;
var G__55701 = cljs.core.count.call(null,c__4556__auto__);
var G__55702 = (0);
seq__55650 = G__55699;
chunk__55651 = G__55700;
count__55652 = G__55701;
i__55653 = G__55702;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55650__$1);
var seq__55666_55703 = cljs.core.seq.call(null,requires);
var chunk__55667_55704 = null;
var count__55668_55705 = (0);
var i__55669_55706 = (0);
while(true){
if((i__55669_55706 < count__55668_55705)){
var req_55707 = cljs.core._nth.call(null,chunk__55667_55704,i__55669_55706);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55707,prov);


var G__55708 = seq__55666_55703;
var G__55709 = chunk__55667_55704;
var G__55710 = count__55668_55705;
var G__55711 = (i__55669_55706 + (1));
seq__55666_55703 = G__55708;
chunk__55667_55704 = G__55709;
count__55668_55705 = G__55710;
i__55669_55706 = G__55711;
continue;
} else {
var temp__5735__auto___55712__$1 = cljs.core.seq.call(null,seq__55666_55703);
if(temp__5735__auto___55712__$1){
var seq__55666_55713__$1 = temp__5735__auto___55712__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55666_55713__$1)){
var c__4556__auto___55714 = cljs.core.chunk_first.call(null,seq__55666_55713__$1);
var G__55715 = cljs.core.chunk_rest.call(null,seq__55666_55713__$1);
var G__55716 = c__4556__auto___55714;
var G__55717 = cljs.core.count.call(null,c__4556__auto___55714);
var G__55718 = (0);
seq__55666_55703 = G__55715;
chunk__55667_55704 = G__55716;
count__55668_55705 = G__55717;
i__55669_55706 = G__55718;
continue;
} else {
var req_55719 = cljs.core.first.call(null,seq__55666_55713__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55719,prov);


var G__55720 = cljs.core.next.call(null,seq__55666_55713__$1);
var G__55721 = null;
var G__55722 = (0);
var G__55723 = (0);
seq__55666_55703 = G__55720;
chunk__55667_55704 = G__55721;
count__55668_55705 = G__55722;
i__55669_55706 = G__55723;
continue;
}
} else {
}
}
break;
}


var G__55724 = cljs.core.next.call(null,seq__55650__$1);
var G__55725 = null;
var G__55726 = (0);
var G__55727 = (0);
seq__55650 = G__55724;
chunk__55651 = G__55725;
count__55652 = G__55726;
i__55653 = G__55727;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__55670 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__55671 = null;
var count__55672 = (0);
var i__55673 = (0);
while(true){
if((i__55673 < count__55672)){
var prov = cljs.core._nth.call(null,chunk__55671,i__55673);
goog.object.forEach(deps,((function (seq__55670,chunk__55671,count__55672,i__55673,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__55670,chunk__55671,count__55672,i__55673,prov,requires))
);


var G__55728 = seq__55670;
var G__55729 = chunk__55671;
var G__55730 = count__55672;
var G__55731 = (i__55673 + (1));
seq__55670 = G__55728;
chunk__55671 = G__55729;
count__55672 = G__55730;
i__55673 = G__55731;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55670);
if(temp__5735__auto__){
var seq__55670__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55670__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__55670__$1);
var G__55732 = cljs.core.chunk_rest.call(null,seq__55670__$1);
var G__55733 = c__4556__auto__;
var G__55734 = cljs.core.count.call(null,c__4556__auto__);
var G__55735 = (0);
seq__55670 = G__55732;
chunk__55671 = G__55733;
count__55672 = G__55734;
i__55673 = G__55735;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55670__$1);
goog.object.forEach(deps,((function (seq__55670,chunk__55671,count__55672,i__55673,prov,seq__55670__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__55670,chunk__55671,count__55672,i__55673,prov,seq__55670__$1,temp__5735__auto__,requires))
);


var G__55736 = cljs.core.next.call(null,seq__55670__$1);
var G__55737 = null;
var G__55738 = (0);
var G__55739 = (0);
seq__55670 = G__55736;
chunk__55671 = G__55737;
count__55672 = G__55738;
i__55673 = G__55739;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__55740){
var vec__55741 = p__55740;
var _ = cljs.core.nth.call(null,vec__55741,(0),null);
var v = cljs.core.nth.call(null,vec__55741,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__55744){
var vec__55745 = p__55744;
var k = cljs.core.nth.call(null,vec__55745,(0),null);
var v = cljs.core.nth.call(null,vec__55745,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__55757_55765 = cljs.core.seq.call(null,deps);
var chunk__55758_55766 = null;
var count__55759_55767 = (0);
var i__55760_55768 = (0);
while(true){
if((i__55760_55768 < count__55759_55767)){
var dep_55769 = cljs.core._nth.call(null,chunk__55758_55766,i__55760_55768);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_55769;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55769));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55769,(depth + (1)),state);
} else {
}


var G__55770 = seq__55757_55765;
var G__55771 = chunk__55758_55766;
var G__55772 = count__55759_55767;
var G__55773 = (i__55760_55768 + (1));
seq__55757_55765 = G__55770;
chunk__55758_55766 = G__55771;
count__55759_55767 = G__55772;
i__55760_55768 = G__55773;
continue;
} else {
var temp__5735__auto___55774 = cljs.core.seq.call(null,seq__55757_55765);
if(temp__5735__auto___55774){
var seq__55757_55775__$1 = temp__5735__auto___55774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55757_55775__$1)){
var c__4556__auto___55776 = cljs.core.chunk_first.call(null,seq__55757_55775__$1);
var G__55777 = cljs.core.chunk_rest.call(null,seq__55757_55775__$1);
var G__55778 = c__4556__auto___55776;
var G__55779 = cljs.core.count.call(null,c__4556__auto___55776);
var G__55780 = (0);
seq__55757_55765 = G__55777;
chunk__55758_55766 = G__55778;
count__55759_55767 = G__55779;
i__55760_55768 = G__55780;
continue;
} else {
var dep_55781 = cljs.core.first.call(null,seq__55757_55775__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_55781;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55781));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55781,(depth + (1)),state);
} else {
}


var G__55782 = cljs.core.next.call(null,seq__55757_55775__$1);
var G__55783 = null;
var G__55784 = (0);
var G__55785 = (0);
seq__55757_55765 = G__55782;
chunk__55758_55766 = G__55783;
count__55759_55767 = G__55784;
i__55760_55768 = G__55785;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__55761){
var vec__55762 = p__55761;
var seq__55763 = cljs.core.seq.call(null,vec__55762);
var first__55764 = cljs.core.first.call(null,seq__55763);
var seq__55763__$1 = cljs.core.next.call(null,seq__55763);
var x = first__55764;
var xs = seq__55763__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__55748_SHARP_){
return clojure.set.difference.call(null,p1__55748_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__55786_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__55786_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__55787 = cljs.core.seq.call(null,provides);
var chunk__55788 = null;
var count__55789 = (0);
var i__55790 = (0);
while(true){
if((i__55790 < count__55789)){
var prov = cljs.core._nth.call(null,chunk__55788,i__55790);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55799_55807 = cljs.core.seq.call(null,requires);
var chunk__55800_55808 = null;
var count__55801_55809 = (0);
var i__55802_55810 = (0);
while(true){
if((i__55802_55810 < count__55801_55809)){
var req_55811 = cljs.core._nth.call(null,chunk__55800_55808,i__55802_55810);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55811,prov);


var G__55812 = seq__55799_55807;
var G__55813 = chunk__55800_55808;
var G__55814 = count__55801_55809;
var G__55815 = (i__55802_55810 + (1));
seq__55799_55807 = G__55812;
chunk__55800_55808 = G__55813;
count__55801_55809 = G__55814;
i__55802_55810 = G__55815;
continue;
} else {
var temp__5735__auto___55816 = cljs.core.seq.call(null,seq__55799_55807);
if(temp__5735__auto___55816){
var seq__55799_55817__$1 = temp__5735__auto___55816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55799_55817__$1)){
var c__4556__auto___55818 = cljs.core.chunk_first.call(null,seq__55799_55817__$1);
var G__55819 = cljs.core.chunk_rest.call(null,seq__55799_55817__$1);
var G__55820 = c__4556__auto___55818;
var G__55821 = cljs.core.count.call(null,c__4556__auto___55818);
var G__55822 = (0);
seq__55799_55807 = G__55819;
chunk__55800_55808 = G__55820;
count__55801_55809 = G__55821;
i__55802_55810 = G__55822;
continue;
} else {
var req_55823 = cljs.core.first.call(null,seq__55799_55817__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55823,prov);


var G__55824 = cljs.core.next.call(null,seq__55799_55817__$1);
var G__55825 = null;
var G__55826 = (0);
var G__55827 = (0);
seq__55799_55807 = G__55824;
chunk__55800_55808 = G__55825;
count__55801_55809 = G__55826;
i__55802_55810 = G__55827;
continue;
}
} else {
}
}
break;
}


var G__55828 = seq__55787;
var G__55829 = chunk__55788;
var G__55830 = count__55789;
var G__55831 = (i__55790 + (1));
seq__55787 = G__55828;
chunk__55788 = G__55829;
count__55789 = G__55830;
i__55790 = G__55831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55787);
if(temp__5735__auto__){
var seq__55787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55787__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__55787__$1);
var G__55832 = cljs.core.chunk_rest.call(null,seq__55787__$1);
var G__55833 = c__4556__auto__;
var G__55834 = cljs.core.count.call(null,c__4556__auto__);
var G__55835 = (0);
seq__55787 = G__55832;
chunk__55788 = G__55833;
count__55789 = G__55834;
i__55790 = G__55835;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55787__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55803_55836 = cljs.core.seq.call(null,requires);
var chunk__55804_55837 = null;
var count__55805_55838 = (0);
var i__55806_55839 = (0);
while(true){
if((i__55806_55839 < count__55805_55838)){
var req_55840 = cljs.core._nth.call(null,chunk__55804_55837,i__55806_55839);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55840,prov);


var G__55841 = seq__55803_55836;
var G__55842 = chunk__55804_55837;
var G__55843 = count__55805_55838;
var G__55844 = (i__55806_55839 + (1));
seq__55803_55836 = G__55841;
chunk__55804_55837 = G__55842;
count__55805_55838 = G__55843;
i__55806_55839 = G__55844;
continue;
} else {
var temp__5735__auto___55845__$1 = cljs.core.seq.call(null,seq__55803_55836);
if(temp__5735__auto___55845__$1){
var seq__55803_55846__$1 = temp__5735__auto___55845__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55803_55846__$1)){
var c__4556__auto___55847 = cljs.core.chunk_first.call(null,seq__55803_55846__$1);
var G__55848 = cljs.core.chunk_rest.call(null,seq__55803_55846__$1);
var G__55849 = c__4556__auto___55847;
var G__55850 = cljs.core.count.call(null,c__4556__auto___55847);
var G__55851 = (0);
seq__55803_55836 = G__55848;
chunk__55804_55837 = G__55849;
count__55805_55838 = G__55850;
i__55806_55839 = G__55851;
continue;
} else {
var req_55852 = cljs.core.first.call(null,seq__55803_55846__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55852,prov);


var G__55853 = cljs.core.next.call(null,seq__55803_55846__$1);
var G__55854 = null;
var G__55855 = (0);
var G__55856 = (0);
seq__55803_55836 = G__55853;
chunk__55804_55837 = G__55854;
count__55805_55838 = G__55855;
i__55806_55839 = G__55856;
continue;
}
} else {
}
}
break;
}


var G__55857 = cljs.core.next.call(null,seq__55787__$1);
var G__55858 = null;
var G__55859 = (0);
var G__55860 = (0);
seq__55787 = G__55857;
chunk__55788 = G__55858;
count__55789 = G__55859;
i__55790 = G__55860;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__55861_55865 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__55862_55866 = null;
var count__55863_55867 = (0);
var i__55864_55868 = (0);
while(true){
if((i__55864_55868 < count__55863_55867)){
var ns_55869 = cljs.core._nth.call(null,chunk__55862_55866,i__55864_55868);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55869);


var G__55870 = seq__55861_55865;
var G__55871 = chunk__55862_55866;
var G__55872 = count__55863_55867;
var G__55873 = (i__55864_55868 + (1));
seq__55861_55865 = G__55870;
chunk__55862_55866 = G__55871;
count__55863_55867 = G__55872;
i__55864_55868 = G__55873;
continue;
} else {
var temp__5735__auto___55874 = cljs.core.seq.call(null,seq__55861_55865);
if(temp__5735__auto___55874){
var seq__55861_55875__$1 = temp__5735__auto___55874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55861_55875__$1)){
var c__4556__auto___55876 = cljs.core.chunk_first.call(null,seq__55861_55875__$1);
var G__55877 = cljs.core.chunk_rest.call(null,seq__55861_55875__$1);
var G__55878 = c__4556__auto___55876;
var G__55879 = cljs.core.count.call(null,c__4556__auto___55876);
var G__55880 = (0);
seq__55861_55865 = G__55877;
chunk__55862_55866 = G__55878;
count__55863_55867 = G__55879;
i__55864_55868 = G__55880;
continue;
} else {
var ns_55881 = cljs.core.first.call(null,seq__55861_55875__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55881);


var G__55882 = cljs.core.next.call(null,seq__55861_55875__$1);
var G__55883 = null;
var G__55884 = (0);
var G__55885 = (0);
seq__55861_55865 = G__55882;
chunk__55862_55866 = G__55883;
count__55863_55867 = G__55884;
i__55864_55868 = G__55885;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__55886__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__55886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55887__i = 0, G__55887__a = new Array(arguments.length -  0);
while (G__55887__i < G__55887__a.length) {G__55887__a[G__55887__i] = arguments[G__55887__i + 0]; ++G__55887__i;}
  args = new cljs.core.IndexedSeq(G__55887__a,0,null);
} 
return G__55886__delegate.call(this,args);};
G__55886.cljs$lang$maxFixedArity = 0;
G__55886.cljs$lang$applyTo = (function (arglist__55888){
var args = cljs.core.seq(arglist__55888);
return G__55886__delegate(args);
});
G__55886.cljs$core$IFn$_invoke$arity$variadic = G__55886__delegate;
return G__55886;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__55889_SHARP_,p2__55890_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55889_SHARP_)),p2__55890_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__55891_SHARP_,p2__55892_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55891_SHARP_),p2__55892_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__55893 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__55893.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__55893.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__55893;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e55894){if((e55894 instanceof Error)){
var e = e55894;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55894;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e55895){if((e55895 instanceof Error)){
var e = e55895;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55895;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__55896 = cljs.core._EQ_;
var expr__55897 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__55896.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__55897))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__55896.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__55897))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__55896.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__55897))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__55899,callback){
var map__55900 = p__55899;
var map__55900__$1 = (((((!((map__55900 == null))))?(((((map__55900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55900):map__55900);
var file_msg = map__55900__$1;
var request_url = cljs.core.get.call(null,map__55900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_55938){
var state_val_55939 = (state_55938[(1)]);
if((state_val_55939 === (7))){
var inst_55934 = (state_55938[(2)]);
var state_55938__$1 = state_55938;
var statearr_55940_55966 = state_55938__$1;
(statearr_55940_55966[(2)] = inst_55934);

(statearr_55940_55966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (1))){
var state_55938__$1 = state_55938;
var statearr_55941_55967 = state_55938__$1;
(statearr_55941_55967[(2)] = null);

(statearr_55941_55967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (4))){
var inst_55904 = (state_55938[(7)]);
var inst_55904__$1 = (state_55938[(2)]);
var state_55938__$1 = (function (){var statearr_55942 = state_55938;
(statearr_55942[(7)] = inst_55904__$1);

return statearr_55942;
})();
if(cljs.core.truth_(inst_55904__$1)){
var statearr_55943_55968 = state_55938__$1;
(statearr_55943_55968[(1)] = (5));

} else {
var statearr_55944_55969 = state_55938__$1;
(statearr_55944_55969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (15))){
var inst_55919 = (state_55938[(8)]);
var inst_55917 = (state_55938[(9)]);
var inst_55921 = inst_55919.call(null,inst_55917);
var state_55938__$1 = state_55938;
var statearr_55945_55970 = state_55938__$1;
(statearr_55945_55970[(2)] = inst_55921);

(statearr_55945_55970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (13))){
var inst_55928 = (state_55938[(2)]);
var state_55938__$1 = state_55938;
var statearr_55946_55971 = state_55938__$1;
(statearr_55946_55971[(2)] = inst_55928);

(statearr_55946_55971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (6))){
var state_55938__$1 = state_55938;
var statearr_55947_55972 = state_55938__$1;
(statearr_55947_55972[(2)] = null);

(statearr_55947_55972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (17))){
var inst_55925 = (state_55938[(2)]);
var state_55938__$1 = state_55938;
var statearr_55948_55973 = state_55938__$1;
(statearr_55948_55973[(2)] = inst_55925);

(statearr_55948_55973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (3))){
var inst_55936 = (state_55938[(2)]);
var state_55938__$1 = state_55938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55938__$1,inst_55936);
} else {
if((state_val_55939 === (12))){
var state_55938__$1 = state_55938;
var statearr_55949_55974 = state_55938__$1;
(statearr_55949_55974[(2)] = null);

(statearr_55949_55974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (2))){
var state_55938__$1 = state_55938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55938__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_55939 === (11))){
var inst_55909 = (state_55938[(10)]);
var inst_55915 = figwheel.client.file_reloading.blocking_load.call(null,inst_55909);
var state_55938__$1 = state_55938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55938__$1,(14),inst_55915);
} else {
if((state_val_55939 === (9))){
var inst_55909 = (state_55938[(10)]);
var state_55938__$1 = state_55938;
if(cljs.core.truth_(inst_55909)){
var statearr_55950_55975 = state_55938__$1;
(statearr_55950_55975[(1)] = (11));

} else {
var statearr_55951_55976 = state_55938__$1;
(statearr_55951_55976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (5))){
var inst_55904 = (state_55938[(7)]);
var inst_55910 = (state_55938[(11)]);
var inst_55909 = cljs.core.nth.call(null,inst_55904,(0),null);
var inst_55910__$1 = cljs.core.nth.call(null,inst_55904,(1),null);
var state_55938__$1 = (function (){var statearr_55952 = state_55938;
(statearr_55952[(11)] = inst_55910__$1);

(statearr_55952[(10)] = inst_55909);

return statearr_55952;
})();
if(cljs.core.truth_(inst_55910__$1)){
var statearr_55953_55977 = state_55938__$1;
(statearr_55953_55977[(1)] = (8));

} else {
var statearr_55954_55978 = state_55938__$1;
(statearr_55954_55978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (14))){
var inst_55919 = (state_55938[(8)]);
var inst_55909 = (state_55938[(10)]);
var inst_55917 = (state_55938[(2)]);
var inst_55918 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_55919__$1 = cljs.core.get.call(null,inst_55918,inst_55909);
var state_55938__$1 = (function (){var statearr_55955 = state_55938;
(statearr_55955[(8)] = inst_55919__$1);

(statearr_55955[(9)] = inst_55917);

return statearr_55955;
})();
if(cljs.core.truth_(inst_55919__$1)){
var statearr_55956_55979 = state_55938__$1;
(statearr_55956_55979[(1)] = (15));

} else {
var statearr_55957_55980 = state_55938__$1;
(statearr_55957_55980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (16))){
var inst_55917 = (state_55938[(9)]);
var inst_55923 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_55917);
var state_55938__$1 = state_55938;
var statearr_55958_55981 = state_55938__$1;
(statearr_55958_55981[(2)] = inst_55923);

(statearr_55958_55981[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (10))){
var inst_55930 = (state_55938[(2)]);
var state_55938__$1 = (function (){var statearr_55959 = state_55938;
(statearr_55959[(12)] = inst_55930);

return statearr_55959;
})();
var statearr_55960_55982 = state_55938__$1;
(statearr_55960_55982[(2)] = null);

(statearr_55960_55982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55939 === (8))){
var inst_55910 = (state_55938[(11)]);
var inst_55912 = eval(inst_55910);
var state_55938__$1 = state_55938;
var statearr_55961_55983 = state_55938__$1;
(statearr_55961_55983[(2)] = inst_55912);

(statearr_55961_55983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__53534__auto__ = null;
var figwheel$client$file_reloading$state_machine__53534__auto____0 = (function (){
var statearr_55962 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55962[(0)] = figwheel$client$file_reloading$state_machine__53534__auto__);

(statearr_55962[(1)] = (1));

return statearr_55962;
});
var figwheel$client$file_reloading$state_machine__53534__auto____1 = (function (state_55938){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_55938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e55963){if((e55963 instanceof Object)){
var ex__53537__auto__ = e55963;
var statearr_55964_55984 = state_55938;
(statearr_55964_55984[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55985 = state_55938;
state_55938 = G__55985;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__53534__auto__ = function(state_55938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__53534__auto____1.call(this,state_55938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__53534__auto____0;
figwheel$client$file_reloading$state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__53534__auto____1;
return figwheel$client$file_reloading$state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_55965 = f__53629__auto__.call(null);
(statearr_55965[(6)] = c__53628__auto__);

return statearr_55965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__55987 = arguments.length;
switch (G__55987) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__55989,callback){
var map__55990 = p__55989;
var map__55990__$1 = (((((!((map__55990 == null))))?(((((map__55990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55990):map__55990);
var file_msg = map__55990__$1;
var namespace = cljs.core.get.call(null,map__55990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__55992){
var map__55993 = p__55992;
var map__55993__$1 = (((((!((map__55993 == null))))?(((((map__55993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55993):map__55993);
var file_msg = map__55993__$1;
var namespace = cljs.core.get.call(null,map__55993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__55995){
var map__55996 = p__55995;
var map__55996__$1 = (((((!((map__55996 == null))))?(((((map__55996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55996):map__55996);
var file_msg = map__55996__$1;
var namespace = cljs.core.get.call(null,map__55996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__55998,callback){
var map__55999 = p__55998;
var map__55999__$1 = (((((!((map__55999 == null))))?(((((map__55999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55999):map__55999);
var file_msg = map__55999__$1;
var request_url = cljs.core.get.call(null,map__55999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__55999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__53628__auto___56049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_56034){
var state_val_56035 = (state_56034[(1)]);
if((state_val_56035 === (1))){
var inst_56008 = cljs.core.seq.call(null,files);
var inst_56009 = cljs.core.first.call(null,inst_56008);
var inst_56010 = cljs.core.next.call(null,inst_56008);
var inst_56011 = files;
var state_56034__$1 = (function (){var statearr_56036 = state_56034;
(statearr_56036[(7)] = inst_56009);

(statearr_56036[(8)] = inst_56010);

(statearr_56036[(9)] = inst_56011);

return statearr_56036;
})();
var statearr_56037_56050 = state_56034__$1;
(statearr_56037_56050[(2)] = null);

(statearr_56037_56050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56035 === (2))){
var inst_56017 = (state_56034[(10)]);
var inst_56011 = (state_56034[(9)]);
var inst_56016 = cljs.core.seq.call(null,inst_56011);
var inst_56017__$1 = cljs.core.first.call(null,inst_56016);
var inst_56018 = cljs.core.next.call(null,inst_56016);
var inst_56019 = (inst_56017__$1 == null);
var inst_56020 = cljs.core.not.call(null,inst_56019);
var state_56034__$1 = (function (){var statearr_56038 = state_56034;
(statearr_56038[(10)] = inst_56017__$1);

(statearr_56038[(11)] = inst_56018);

return statearr_56038;
})();
if(inst_56020){
var statearr_56039_56051 = state_56034__$1;
(statearr_56039_56051[(1)] = (4));

} else {
var statearr_56040_56052 = state_56034__$1;
(statearr_56040_56052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56035 === (3))){
var inst_56032 = (state_56034[(2)]);
var state_56034__$1 = state_56034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56034__$1,inst_56032);
} else {
if((state_val_56035 === (4))){
var inst_56017 = (state_56034[(10)]);
var inst_56022 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56017);
var state_56034__$1 = state_56034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56034__$1,(7),inst_56022);
} else {
if((state_val_56035 === (5))){
var inst_56028 = cljs.core.async.close_BANG_.call(null,out);
var state_56034__$1 = state_56034;
var statearr_56041_56053 = state_56034__$1;
(statearr_56041_56053[(2)] = inst_56028);

(statearr_56041_56053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56035 === (6))){
var inst_56030 = (state_56034[(2)]);
var state_56034__$1 = state_56034;
var statearr_56042_56054 = state_56034__$1;
(statearr_56042_56054[(2)] = inst_56030);

(statearr_56042_56054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56035 === (7))){
var inst_56018 = (state_56034[(11)]);
var inst_56024 = (state_56034[(2)]);
var inst_56025 = cljs.core.async.put_BANG_.call(null,out,inst_56024);
var inst_56011 = inst_56018;
var state_56034__$1 = (function (){var statearr_56043 = state_56034;
(statearr_56043[(12)] = inst_56025);

(statearr_56043[(9)] = inst_56011);

return statearr_56043;
})();
var statearr_56044_56055 = state_56034__$1;
(statearr_56044_56055[(2)] = null);

(statearr_56044_56055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____0 = (function (){
var statearr_56045 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56045[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__);

(statearr_56045[(1)] = (1));

return statearr_56045;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____1 = (function (state_56034){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_56034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e56046){if((e56046 instanceof Object)){
var ex__53537__auto__ = e56046;
var statearr_56047_56056 = state_56034;
(statearr_56047_56056[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56057 = state_56034;
state_56034 = G__56057;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__ = function(state_56034){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____1.call(this,state_56034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_56048 = f__53629__auto__.call(null);
(statearr_56048[(6)] = c__53628__auto___56049);

return statearr_56048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__56058,opts){
var map__56059 = p__56058;
var map__56059__$1 = (((((!((map__56059 == null))))?(((((map__56059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56059):map__56059);
var eval_body = cljs.core.get.call(null,map__56059__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__56059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e56061){var e = e56061;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__56062_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56062_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__56063){
var vec__56064 = p__56063;
var k = cljs.core.nth.call(null,vec__56064,(0),null);
var v = cljs.core.nth.call(null,vec__56064,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__56067){
var vec__56068 = p__56067;
var k = cljs.core.nth.call(null,vec__56068,(0),null);
var v = cljs.core.nth.call(null,vec__56068,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__56074,p__56075){
var map__56076 = p__56074;
var map__56076__$1 = (((((!((map__56076 == null))))?(((((map__56076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56076):map__56076);
var opts = map__56076__$1;
var before_jsload = cljs.core.get.call(null,map__56076__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__56076__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__56076__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__56077 = p__56075;
var map__56077__$1 = (((((!((map__56077 == null))))?(((((map__56077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56077):map__56077);
var msg = map__56077__$1;
var files = cljs.core.get.call(null,map__56077__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__56077__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__56077__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__53628__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__53629__auto__ = (function (){var switch__53533__auto__ = (function (state_56231){
var state_val_56232 = (state_56231[(1)]);
if((state_val_56232 === (7))){
var inst_56093 = (state_56231[(7)]);
var inst_56091 = (state_56231[(8)]);
var inst_56094 = (state_56231[(9)]);
var inst_56092 = (state_56231[(10)]);
var inst_56099 = cljs.core._nth.call(null,inst_56092,inst_56094);
var inst_56100 = figwheel.client.file_reloading.eval_body.call(null,inst_56099,opts);
var inst_56101 = (inst_56094 + (1));
var tmp56233 = inst_56093;
var tmp56234 = inst_56091;
var tmp56235 = inst_56092;
var inst_56091__$1 = tmp56234;
var inst_56092__$1 = tmp56235;
var inst_56093__$1 = tmp56233;
var inst_56094__$1 = inst_56101;
var state_56231__$1 = (function (){var statearr_56236 = state_56231;
(statearr_56236[(11)] = inst_56100);

(statearr_56236[(7)] = inst_56093__$1);

(statearr_56236[(8)] = inst_56091__$1);

(statearr_56236[(9)] = inst_56094__$1);

(statearr_56236[(10)] = inst_56092__$1);

return statearr_56236;
})();
var statearr_56237_56320 = state_56231__$1;
(statearr_56237_56320[(2)] = null);

(statearr_56237_56320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (20))){
var inst_56134 = (state_56231[(12)]);
var inst_56142 = figwheel.client.file_reloading.sort_files.call(null,inst_56134);
var state_56231__$1 = state_56231;
var statearr_56238_56321 = state_56231__$1;
(statearr_56238_56321[(2)] = inst_56142);

(statearr_56238_56321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (27))){
var state_56231__$1 = state_56231;
var statearr_56239_56322 = state_56231__$1;
(statearr_56239_56322[(2)] = null);

(statearr_56239_56322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (1))){
var inst_56083 = (state_56231[(13)]);
var inst_56080 = before_jsload.call(null,files);
var inst_56081 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_56082 = (function (){return (function (p1__56071_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56071_SHARP_);
});
})();
var inst_56083__$1 = cljs.core.filter.call(null,inst_56082,files);
var inst_56084 = cljs.core.not_empty.call(null,inst_56083__$1);
var state_56231__$1 = (function (){var statearr_56240 = state_56231;
(statearr_56240[(13)] = inst_56083__$1);

(statearr_56240[(14)] = inst_56080);

(statearr_56240[(15)] = inst_56081);

return statearr_56240;
})();
if(cljs.core.truth_(inst_56084)){
var statearr_56241_56323 = state_56231__$1;
(statearr_56241_56323[(1)] = (2));

} else {
var statearr_56242_56324 = state_56231__$1;
(statearr_56242_56324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (24))){
var state_56231__$1 = state_56231;
var statearr_56243_56325 = state_56231__$1;
(statearr_56243_56325[(2)] = null);

(statearr_56243_56325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (39))){
var inst_56184 = (state_56231[(16)]);
var state_56231__$1 = state_56231;
var statearr_56244_56326 = state_56231__$1;
(statearr_56244_56326[(2)] = inst_56184);

(statearr_56244_56326[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (46))){
var inst_56226 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56245_56327 = state_56231__$1;
(statearr_56245_56327[(2)] = inst_56226);

(statearr_56245_56327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (4))){
var inst_56128 = (state_56231[(2)]);
var inst_56129 = cljs.core.List.EMPTY;
var inst_56130 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_56129);
var inst_56131 = (function (){return (function (p1__56072_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56072_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56072_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__56072_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_56132 = cljs.core.filter.call(null,inst_56131,files);
var inst_56133 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_56134 = cljs.core.concat.call(null,inst_56132,inst_56133);
var state_56231__$1 = (function (){var statearr_56246 = state_56231;
(statearr_56246[(12)] = inst_56134);

(statearr_56246[(17)] = inst_56128);

(statearr_56246[(18)] = inst_56130);

return statearr_56246;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_56247_56328 = state_56231__$1;
(statearr_56247_56328[(1)] = (16));

} else {
var statearr_56248_56329 = state_56231__$1;
(statearr_56248_56329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (15))){
var inst_56118 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56249_56330 = state_56231__$1;
(statearr_56249_56330[(2)] = inst_56118);

(statearr_56249_56330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (21))){
var inst_56144 = (state_56231[(19)]);
var inst_56144__$1 = (state_56231[(2)]);
var inst_56145 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_56144__$1);
var state_56231__$1 = (function (){var statearr_56250 = state_56231;
(statearr_56250[(19)] = inst_56144__$1);

return statearr_56250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56231__$1,(22),inst_56145);
} else {
if((state_val_56232 === (31))){
var inst_56229 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56231__$1,inst_56229);
} else {
if((state_val_56232 === (32))){
var inst_56184 = (state_56231[(16)]);
var inst_56189 = inst_56184.cljs$lang$protocol_mask$partition0$;
var inst_56190 = (inst_56189 & (64));
var inst_56191 = inst_56184.cljs$core$ISeq$;
var inst_56192 = (cljs.core.PROTOCOL_SENTINEL === inst_56191);
var inst_56193 = ((inst_56190) || (inst_56192));
var state_56231__$1 = state_56231;
if(cljs.core.truth_(inst_56193)){
var statearr_56251_56331 = state_56231__$1;
(statearr_56251_56331[(1)] = (35));

} else {
var statearr_56252_56332 = state_56231__$1;
(statearr_56252_56332[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (40))){
var inst_56206 = (state_56231[(20)]);
var inst_56205 = (state_56231[(2)]);
var inst_56206__$1 = cljs.core.get.call(null,inst_56205,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_56207 = cljs.core.get.call(null,inst_56205,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_56208 = cljs.core.not_empty.call(null,inst_56206__$1);
var state_56231__$1 = (function (){var statearr_56253 = state_56231;
(statearr_56253[(21)] = inst_56207);

(statearr_56253[(20)] = inst_56206__$1);

return statearr_56253;
})();
if(cljs.core.truth_(inst_56208)){
var statearr_56254_56333 = state_56231__$1;
(statearr_56254_56333[(1)] = (41));

} else {
var statearr_56255_56334 = state_56231__$1;
(statearr_56255_56334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (33))){
var state_56231__$1 = state_56231;
var statearr_56256_56335 = state_56231__$1;
(statearr_56256_56335[(2)] = false);

(statearr_56256_56335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (13))){
var inst_56104 = (state_56231[(22)]);
var inst_56108 = cljs.core.chunk_first.call(null,inst_56104);
var inst_56109 = cljs.core.chunk_rest.call(null,inst_56104);
var inst_56110 = cljs.core.count.call(null,inst_56108);
var inst_56091 = inst_56109;
var inst_56092 = inst_56108;
var inst_56093 = inst_56110;
var inst_56094 = (0);
var state_56231__$1 = (function (){var statearr_56257 = state_56231;
(statearr_56257[(7)] = inst_56093);

(statearr_56257[(8)] = inst_56091);

(statearr_56257[(9)] = inst_56094);

(statearr_56257[(10)] = inst_56092);

return statearr_56257;
})();
var statearr_56258_56336 = state_56231__$1;
(statearr_56258_56336[(2)] = null);

(statearr_56258_56336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (22))){
var inst_56144 = (state_56231[(19)]);
var inst_56147 = (state_56231[(23)]);
var inst_56148 = (state_56231[(24)]);
var inst_56152 = (state_56231[(25)]);
var inst_56147__$1 = (state_56231[(2)]);
var inst_56148__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56147__$1);
var inst_56149 = (function (){var all_files = inst_56144;
var res_SINGLEQUOTE_ = inst_56147__$1;
var res = inst_56148__$1;
return (function (p1__56073_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56073_SHARP_));
});
})();
var inst_56150 = cljs.core.filter.call(null,inst_56149,inst_56147__$1);
var inst_56151 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_56152__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56151);
var inst_56153 = cljs.core.not_empty.call(null,inst_56152__$1);
var state_56231__$1 = (function (){var statearr_56259 = state_56231;
(statearr_56259[(23)] = inst_56147__$1);

(statearr_56259[(24)] = inst_56148__$1);

(statearr_56259[(26)] = inst_56150);

(statearr_56259[(25)] = inst_56152__$1);

return statearr_56259;
})();
if(cljs.core.truth_(inst_56153)){
var statearr_56260_56337 = state_56231__$1;
(statearr_56260_56337[(1)] = (23));

} else {
var statearr_56261_56338 = state_56231__$1;
(statearr_56261_56338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (36))){
var state_56231__$1 = state_56231;
var statearr_56262_56339 = state_56231__$1;
(statearr_56262_56339[(2)] = false);

(statearr_56262_56339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (41))){
var inst_56206 = (state_56231[(20)]);
var inst_56210 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_56211 = cljs.core.map.call(null,inst_56210,inst_56206);
var inst_56212 = cljs.core.pr_str.call(null,inst_56211);
var inst_56213 = ["figwheel-no-load meta-data: ",inst_56212].join('');
var inst_56214 = figwheel.client.utils.log.call(null,inst_56213);
var state_56231__$1 = state_56231;
var statearr_56263_56340 = state_56231__$1;
(statearr_56263_56340[(2)] = inst_56214);

(statearr_56263_56340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (43))){
var inst_56207 = (state_56231[(21)]);
var inst_56217 = (state_56231[(2)]);
var inst_56218 = cljs.core.not_empty.call(null,inst_56207);
var state_56231__$1 = (function (){var statearr_56264 = state_56231;
(statearr_56264[(27)] = inst_56217);

return statearr_56264;
})();
if(cljs.core.truth_(inst_56218)){
var statearr_56265_56341 = state_56231__$1;
(statearr_56265_56341[(1)] = (44));

} else {
var statearr_56266_56342 = state_56231__$1;
(statearr_56266_56342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (29))){
var inst_56144 = (state_56231[(19)]);
var inst_56147 = (state_56231[(23)]);
var inst_56184 = (state_56231[(16)]);
var inst_56148 = (state_56231[(24)]);
var inst_56150 = (state_56231[(26)]);
var inst_56152 = (state_56231[(25)]);
var inst_56180 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_56183 = (function (){var all_files = inst_56144;
var res_SINGLEQUOTE_ = inst_56147;
var res = inst_56148;
var files_not_loaded = inst_56150;
var dependencies_that_loaded = inst_56152;
return (function (p__56182){
var map__56267 = p__56182;
var map__56267__$1 = (((((!((map__56267 == null))))?(((((map__56267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56267):map__56267);
var namespace = cljs.core.get.call(null,map__56267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_56184__$1 = cljs.core.group_by.call(null,inst_56183,inst_56150);
var inst_56186 = (inst_56184__$1 == null);
var inst_56187 = cljs.core.not.call(null,inst_56186);
var state_56231__$1 = (function (){var statearr_56269 = state_56231;
(statearr_56269[(16)] = inst_56184__$1);

(statearr_56269[(28)] = inst_56180);

return statearr_56269;
})();
if(inst_56187){
var statearr_56270_56343 = state_56231__$1;
(statearr_56270_56343[(1)] = (32));

} else {
var statearr_56271_56344 = state_56231__$1;
(statearr_56271_56344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (44))){
var inst_56207 = (state_56231[(21)]);
var inst_56220 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56207);
var inst_56221 = cljs.core.pr_str.call(null,inst_56220);
var inst_56222 = ["not required: ",inst_56221].join('');
var inst_56223 = figwheel.client.utils.log.call(null,inst_56222);
var state_56231__$1 = state_56231;
var statearr_56272_56345 = state_56231__$1;
(statearr_56272_56345[(2)] = inst_56223);

(statearr_56272_56345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (6))){
var inst_56125 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56273_56346 = state_56231__$1;
(statearr_56273_56346[(2)] = inst_56125);

(statearr_56273_56346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (28))){
var inst_56150 = (state_56231[(26)]);
var inst_56177 = (state_56231[(2)]);
var inst_56178 = cljs.core.not_empty.call(null,inst_56150);
var state_56231__$1 = (function (){var statearr_56274 = state_56231;
(statearr_56274[(29)] = inst_56177);

return statearr_56274;
})();
if(cljs.core.truth_(inst_56178)){
var statearr_56275_56347 = state_56231__$1;
(statearr_56275_56347[(1)] = (29));

} else {
var statearr_56276_56348 = state_56231__$1;
(statearr_56276_56348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (25))){
var inst_56148 = (state_56231[(24)]);
var inst_56164 = (state_56231[(2)]);
var inst_56165 = cljs.core.not_empty.call(null,inst_56148);
var state_56231__$1 = (function (){var statearr_56277 = state_56231;
(statearr_56277[(30)] = inst_56164);

return statearr_56277;
})();
if(cljs.core.truth_(inst_56165)){
var statearr_56278_56349 = state_56231__$1;
(statearr_56278_56349[(1)] = (26));

} else {
var statearr_56279_56350 = state_56231__$1;
(statearr_56279_56350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (34))){
var inst_56200 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
if(cljs.core.truth_(inst_56200)){
var statearr_56280_56351 = state_56231__$1;
(statearr_56280_56351[(1)] = (38));

} else {
var statearr_56281_56352 = state_56231__$1;
(statearr_56281_56352[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (17))){
var state_56231__$1 = state_56231;
var statearr_56282_56353 = state_56231__$1;
(statearr_56282_56353[(2)] = recompile_dependents);

(statearr_56282_56353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (3))){
var state_56231__$1 = state_56231;
var statearr_56283_56354 = state_56231__$1;
(statearr_56283_56354[(2)] = null);

(statearr_56283_56354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (12))){
var inst_56121 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56284_56355 = state_56231__$1;
(statearr_56284_56355[(2)] = inst_56121);

(statearr_56284_56355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (2))){
var inst_56083 = (state_56231[(13)]);
var inst_56090 = cljs.core.seq.call(null,inst_56083);
var inst_56091 = inst_56090;
var inst_56092 = null;
var inst_56093 = (0);
var inst_56094 = (0);
var state_56231__$1 = (function (){var statearr_56285 = state_56231;
(statearr_56285[(7)] = inst_56093);

(statearr_56285[(8)] = inst_56091);

(statearr_56285[(9)] = inst_56094);

(statearr_56285[(10)] = inst_56092);

return statearr_56285;
})();
var statearr_56286_56356 = state_56231__$1;
(statearr_56286_56356[(2)] = null);

(statearr_56286_56356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (23))){
var inst_56144 = (state_56231[(19)]);
var inst_56147 = (state_56231[(23)]);
var inst_56148 = (state_56231[(24)]);
var inst_56150 = (state_56231[(26)]);
var inst_56152 = (state_56231[(25)]);
var inst_56155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_56157 = (function (){var all_files = inst_56144;
var res_SINGLEQUOTE_ = inst_56147;
var res = inst_56148;
var files_not_loaded = inst_56150;
var dependencies_that_loaded = inst_56152;
return (function (p__56156){
var map__56287 = p__56156;
var map__56287__$1 = (((((!((map__56287 == null))))?(((((map__56287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56287):map__56287);
var request_url = cljs.core.get.call(null,map__56287__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_56158 = cljs.core.reverse.call(null,inst_56152);
var inst_56159 = cljs.core.map.call(null,inst_56157,inst_56158);
var inst_56160 = cljs.core.pr_str.call(null,inst_56159);
var inst_56161 = figwheel.client.utils.log.call(null,inst_56160);
var state_56231__$1 = (function (){var statearr_56289 = state_56231;
(statearr_56289[(31)] = inst_56155);

return statearr_56289;
})();
var statearr_56290_56357 = state_56231__$1;
(statearr_56290_56357[(2)] = inst_56161);

(statearr_56290_56357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (35))){
var state_56231__$1 = state_56231;
var statearr_56291_56358 = state_56231__$1;
(statearr_56291_56358[(2)] = true);

(statearr_56291_56358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (19))){
var inst_56134 = (state_56231[(12)]);
var inst_56140 = figwheel.client.file_reloading.expand_files.call(null,inst_56134);
var state_56231__$1 = state_56231;
var statearr_56292_56359 = state_56231__$1;
(statearr_56292_56359[(2)] = inst_56140);

(statearr_56292_56359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (11))){
var state_56231__$1 = state_56231;
var statearr_56293_56360 = state_56231__$1;
(statearr_56293_56360[(2)] = null);

(statearr_56293_56360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (9))){
var inst_56123 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56294_56361 = state_56231__$1;
(statearr_56294_56361[(2)] = inst_56123);

(statearr_56294_56361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (5))){
var inst_56093 = (state_56231[(7)]);
var inst_56094 = (state_56231[(9)]);
var inst_56096 = (inst_56094 < inst_56093);
var inst_56097 = inst_56096;
var state_56231__$1 = state_56231;
if(cljs.core.truth_(inst_56097)){
var statearr_56295_56362 = state_56231__$1;
(statearr_56295_56362[(1)] = (7));

} else {
var statearr_56296_56363 = state_56231__$1;
(statearr_56296_56363[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (14))){
var inst_56104 = (state_56231[(22)]);
var inst_56113 = cljs.core.first.call(null,inst_56104);
var inst_56114 = figwheel.client.file_reloading.eval_body.call(null,inst_56113,opts);
var inst_56115 = cljs.core.next.call(null,inst_56104);
var inst_56091 = inst_56115;
var inst_56092 = null;
var inst_56093 = (0);
var inst_56094 = (0);
var state_56231__$1 = (function (){var statearr_56297 = state_56231;
(statearr_56297[(7)] = inst_56093);

(statearr_56297[(8)] = inst_56091);

(statearr_56297[(32)] = inst_56114);

(statearr_56297[(9)] = inst_56094);

(statearr_56297[(10)] = inst_56092);

return statearr_56297;
})();
var statearr_56298_56364 = state_56231__$1;
(statearr_56298_56364[(2)] = null);

(statearr_56298_56364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (45))){
var state_56231__$1 = state_56231;
var statearr_56299_56365 = state_56231__$1;
(statearr_56299_56365[(2)] = null);

(statearr_56299_56365[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (26))){
var inst_56144 = (state_56231[(19)]);
var inst_56147 = (state_56231[(23)]);
var inst_56148 = (state_56231[(24)]);
var inst_56150 = (state_56231[(26)]);
var inst_56152 = (state_56231[(25)]);
var inst_56167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_56169 = (function (){var all_files = inst_56144;
var res_SINGLEQUOTE_ = inst_56147;
var res = inst_56148;
var files_not_loaded = inst_56150;
var dependencies_that_loaded = inst_56152;
return (function (p__56168){
var map__56300 = p__56168;
var map__56300__$1 = (((((!((map__56300 == null))))?(((((map__56300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56300):map__56300);
var namespace = cljs.core.get.call(null,map__56300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__56300__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_56170 = cljs.core.map.call(null,inst_56169,inst_56148);
var inst_56171 = cljs.core.pr_str.call(null,inst_56170);
var inst_56172 = figwheel.client.utils.log.call(null,inst_56171);
var inst_56173 = (function (){var all_files = inst_56144;
var res_SINGLEQUOTE_ = inst_56147;
var res = inst_56148;
var files_not_loaded = inst_56150;
var dependencies_that_loaded = inst_56152;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_56174 = setTimeout(inst_56173,(10));
var state_56231__$1 = (function (){var statearr_56302 = state_56231;
(statearr_56302[(33)] = inst_56172);

(statearr_56302[(34)] = inst_56167);

return statearr_56302;
})();
var statearr_56303_56366 = state_56231__$1;
(statearr_56303_56366[(2)] = inst_56174);

(statearr_56303_56366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (16))){
var state_56231__$1 = state_56231;
var statearr_56304_56367 = state_56231__$1;
(statearr_56304_56367[(2)] = reload_dependents);

(statearr_56304_56367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (38))){
var inst_56184 = (state_56231[(16)]);
var inst_56202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56184);
var state_56231__$1 = state_56231;
var statearr_56305_56368 = state_56231__$1;
(statearr_56305_56368[(2)] = inst_56202);

(statearr_56305_56368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (30))){
var state_56231__$1 = state_56231;
var statearr_56306_56369 = state_56231__$1;
(statearr_56306_56369[(2)] = null);

(statearr_56306_56369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (10))){
var inst_56104 = (state_56231[(22)]);
var inst_56106 = cljs.core.chunked_seq_QMARK_.call(null,inst_56104);
var state_56231__$1 = state_56231;
if(inst_56106){
var statearr_56307_56370 = state_56231__$1;
(statearr_56307_56370[(1)] = (13));

} else {
var statearr_56308_56371 = state_56231__$1;
(statearr_56308_56371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (18))){
var inst_56138 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
if(cljs.core.truth_(inst_56138)){
var statearr_56309_56372 = state_56231__$1;
(statearr_56309_56372[(1)] = (19));

} else {
var statearr_56310_56373 = state_56231__$1;
(statearr_56310_56373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (42))){
var state_56231__$1 = state_56231;
var statearr_56311_56374 = state_56231__$1;
(statearr_56311_56374[(2)] = null);

(statearr_56311_56374[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (37))){
var inst_56197 = (state_56231[(2)]);
var state_56231__$1 = state_56231;
var statearr_56312_56375 = state_56231__$1;
(statearr_56312_56375[(2)] = inst_56197);

(statearr_56312_56375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (8))){
var inst_56091 = (state_56231[(8)]);
var inst_56104 = (state_56231[(22)]);
var inst_56104__$1 = cljs.core.seq.call(null,inst_56091);
var state_56231__$1 = (function (){var statearr_56313 = state_56231;
(statearr_56313[(22)] = inst_56104__$1);

return statearr_56313;
})();
if(inst_56104__$1){
var statearr_56314_56376 = state_56231__$1;
(statearr_56314_56376[(1)] = (10));

} else {
var statearr_56315_56377 = state_56231__$1;
(statearr_56315_56377[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____0 = (function (){
var statearr_56316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56316[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__);

(statearr_56316[(1)] = (1));

return statearr_56316;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____1 = (function (state_56231){
while(true){
var ret_value__53535__auto__ = (function (){try{while(true){
var result__53536__auto__ = switch__53533__auto__.call(null,state_56231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53536__auto__;
}
break;
}
}catch (e56317){if((e56317 instanceof Object)){
var ex__53537__auto__ = e56317;
var statearr_56318_56378 = state_56231;
(statearr_56318_56378[(5)] = ex__53537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56379 = state_56231;
state_56231 = G__56379;
continue;
} else {
return ret_value__53535__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__ = function(state_56231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____1.call(this,state_56231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__53534__auto__;
})()
})();
var state__53630__auto__ = (function (){var statearr_56319 = f__53629__auto__.call(null);
(statearr_56319[(6)] = c__53628__auto__);

return statearr_56319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53630__auto__);
}));

return c__53628__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__56382,link){
var map__56383 = p__56382;
var map__56383__$1 = (((((!((map__56383 == null))))?(((((map__56383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56383):map__56383);
var file = cljs.core.get.call(null,map__56383__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__56380_SHARP_,p2__56381_SHARP_){
if(cljs.core._EQ_.call(null,p1__56380_SHARP_,p2__56381_SHARP_)){
return p1__56380_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__56386){
var map__56387 = p__56386;
var map__56387__$1 = (((((!((map__56387 == null))))?(((((map__56387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56387):map__56387);
var match_length = cljs.core.get.call(null,map__56387__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__56387__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__56385_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__56385_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__56389_SHARP_,p2__56390_SHARP_){
return cljs.core.assoc.call(null,p1__56389_SHARP_,cljs.core.get.call(null,p2__56390_SHARP_,key),p2__56390_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_56391 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_56391);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_56391);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__56392,p__56393){
var map__56394 = p__56392;
var map__56394__$1 = (((((!((map__56394 == null))))?(((((map__56394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56394):map__56394);
var on_cssload = cljs.core.get.call(null,map__56394__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__56395 = p__56393;
var map__56395__$1 = (((((!((map__56395 == null))))?(((((map__56395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56395):map__56395);
var files_msg = map__56395__$1;
var files = cljs.core.get.call(null,map__56395__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1615710655532
