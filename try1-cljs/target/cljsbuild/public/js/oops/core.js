// Compiled by ClojureScript 1.10.773 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__7682 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__7682)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__7682)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__7682)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7682)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__7683 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__7683)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__7683)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__7683)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7683)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7691 = arguments.length;
var i__4737__auto___7692 = (0);
while(true){
if((i__4737__auto___7692 < len__4736__auto___7691)){
args__4742__auto__.push((arguments[i__4737__auto___7692]));

var G__7693 = (i__4737__auto___7692 + (1));
i__4737__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__7686){
var vec__7687 = p__7686;
var info = cljs.core.nth.call(null,vec__7687,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__7690_7694 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__7690_7694)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__7690_7694)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__7690_7694)){
} else {
if(cljs.core._EQ_.call(null,null,G__7690_7694)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7690_7694)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq7684){
var G__7685 = cljs.core.first.call(null,seq7684);
var seq7684__$1 = cljs.core.next.call(null,seq7684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7685,seq7684__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && ((!(goog.object.containsKey(obj,key))))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_7695 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_7695);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_7696 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_7696,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_7698 = oops.config.get_child_factory.call(null);
var child_factory_7698__$1 = (function (){var G__7699 = child_factory_7698;
var G__7699__$1 = (((G__7699 instanceof cljs.core.Keyword))?G__7699.fqn:null);
switch (G__7699__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_7698;

}
})();

var child_obj_7697 = child_factory_7698__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_7697);
} else {
}

return child_obj_7697;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_7703 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_7703);

return selector_path_7703;
} else {
var selector_path_7704 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_7704);

return selector_path_7704;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_7705 = temp__5739__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_7705);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_7714 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_7714,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_7707 = (function (){var path_7706 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_7706,(0));

return path_7706;
})();
var len_7708 = path_7707.length;
var i_7709 = (0);
var obj_7710 = obj;
while(true){
if((i_7709 < len_7708)){
var mode_7711 = (path_7707[i_7709]);
var key_7712 = (path_7707[(i_7709 + (1))]);
var next_obj_7713 = oops.core.get_key_dynamically.call(null,obj_7710,key_7712,mode_7711);
var G__7715 = mode_7711;
switch (G__7715) {
case (0):
var G__7717 = (i_7709 + (2));
var G__7718 = next_obj_7713;
i_7709 = G__7717;
obj_7710 = G__7718;
continue;

break;
case (1):
if((!((next_obj_7713 == null)))){
var G__7719 = (i_7709 + (2));
var G__7720 = next_obj_7713;
i_7709 = G__7719;
obj_7710 = G__7720;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_7713 == null)))){
var G__7721 = (i_7709 + (2));
var G__7722 = next_obj_7713;
i_7709 = G__7721;
obj_7710 = G__7722;
continue;
} else {
var G__7723 = (i_7709 + (2));
var G__7724 = oops.core.punch_key_dynamically_BANG_.call(null,obj_7710,key_7712);
i_7709 = G__7723;
obj_7710 = G__7724;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7715)].join('')));

}
} else {
return obj_7710;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_7750 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_7750,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_7726 = (function (){var path_7725 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_7725,(0));

return path_7725;
})();
var len_7727 = path_7726.length;
if((len_7727 < (4))){
return [obj,(function (){var path_7729 = path_7726;
var len_7730 = path_7729.length;
var i_7731 = (0);
var obj_7732 = obj;
while(true){
if((i_7731 < len_7730)){
var mode_7733 = (path_7729[i_7731]);
var key_7734 = (path_7729[(i_7731 + (1))]);
var next_obj_7735 = oops.core.get_key_dynamically.call(null,obj_7732,key_7734,mode_7733);
var G__7751 = mode_7733;
switch (G__7751) {
case (0):
var G__7755 = (i_7731 + (2));
var G__7756 = next_obj_7735;
i_7731 = G__7755;
obj_7732 = G__7756;
continue;

break;
case (1):
if((!((next_obj_7735 == null)))){
var G__7757 = (i_7731 + (2));
var G__7758 = next_obj_7735;
i_7731 = G__7757;
obj_7732 = G__7758;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_7735 == null)))){
var G__7759 = (i_7731 + (2));
var G__7760 = next_obj_7735;
i_7731 = G__7759;
obj_7732 = G__7760;
continue;
} else {
var G__7761 = (i_7731 + (2));
var G__7762 = oops.core.punch_key_dynamically_BANG_.call(null,obj_7732,key_7734);
i_7731 = G__7761;
obj_7732 = G__7762;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7751)].join('')));

}
} else {
return obj_7732;
}
break;
}
})()];
} else {
var target_obj_7728 = (function (){var path_7736 = path_7726.slice((0),(len_7727 - (2)));
var len_7737 = path_7736.length;
var i_7738 = (0);
var obj_7739 = obj;
while(true){
if((i_7738 < len_7737)){
var mode_7740 = (path_7736[i_7738]);
var key_7741 = (path_7736[(i_7738 + (1))]);
var next_obj_7742 = oops.core.get_key_dynamically.call(null,obj_7739,key_7741,mode_7740);
var G__7752 = mode_7740;
switch (G__7752) {
case (0):
var G__7764 = (i_7738 + (2));
var G__7765 = next_obj_7742;
i_7738 = G__7764;
obj_7739 = G__7765;
continue;

break;
case (1):
if((!((next_obj_7742 == null)))){
var G__7766 = (i_7738 + (2));
var G__7767 = next_obj_7742;
i_7738 = G__7766;
obj_7739 = G__7767;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_7742 == null)))){
var G__7768 = (i_7738 + (2));
var G__7769 = next_obj_7742;
i_7738 = G__7768;
obj_7739 = G__7769;
continue;
} else {
var G__7770 = (i_7738 + (2));
var G__7771 = oops.core.punch_key_dynamically_BANG_.call(null,obj_7739,key_7741);
i_7738 = G__7770;
obj_7739 = G__7771;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7752)].join('')));

}
} else {
return obj_7739;
}
break;
}
})();
return [target_obj_7728,(function (){var path_7743 = [(path_7726[(len_7727 - (2))]),(path_7726[(len_7727 - (1))])];
var len_7744 = path_7743.length;
var i_7745 = (0);
var obj_7746 = target_obj_7728;
while(true){
if((i_7745 < len_7744)){
var mode_7747 = (path_7743[i_7745]);
var key_7748 = (path_7743[(i_7745 + (1))]);
var next_obj_7749 = oops.core.get_key_dynamically.call(null,obj_7746,key_7748,mode_7747);
var G__7753 = mode_7747;
switch (G__7753) {
case (0):
var G__7773 = (i_7745 + (2));
var G__7774 = next_obj_7749;
i_7745 = G__7773;
obj_7746 = G__7774;
continue;

break;
case (1):
if((!((next_obj_7749 == null)))){
var G__7775 = (i_7745 + (2));
var G__7776 = next_obj_7749;
i_7745 = G__7775;
obj_7746 = G__7776;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_7749 == null)))){
var G__7777 = (i_7745 + (2));
var G__7778 = next_obj_7749;
i_7745 = G__7777;
obj_7746 = G__7778;
continue;
} else {
var G__7779 = (i_7745 + (2));
var G__7780 = oops.core.punch_key_dynamically_BANG_.call(null,obj_7746,key_7748);
i_7745 = G__7779;
obj_7746 = G__7780;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7753)].join('')));

}
} else {
return obj_7746;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_7795 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_7795,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_7782 = (function (){var path_7781 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_7781,(1));

return path_7781;
})();
var len_7785 = path_7782.length;
var parent_obj_path_7786 = path_7782.slice((0),(len_7785 - (2)));
var key_7783 = (path_7782[(len_7785 - (1))]);
var mode_7784 = (path_7782[(len_7785 - (2))]);
var parent_obj_7787 = (function (){var path_7788 = parent_obj_path_7786;
var len_7789 = path_7788.length;
var i_7790 = (0);
var obj_7791 = obj;
while(true){
if((i_7790 < len_7789)){
var mode_7792 = (path_7788[i_7790]);
var key_7793 = (path_7788[(i_7790 + (1))]);
var next_obj_7794 = oops.core.get_key_dynamically.call(null,obj_7791,key_7793,mode_7792);
var G__7796 = mode_7792;
switch (G__7796) {
case (0):
var G__7798 = (i_7790 + (2));
var G__7799 = next_obj_7794;
i_7790 = G__7798;
obj_7791 = G__7799;
continue;

break;
case (1):
if((!((next_obj_7794 == null)))){
var G__7800 = (i_7790 + (2));
var G__7801 = next_obj_7794;
i_7790 = G__7800;
obj_7791 = G__7801;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_7794 == null)))){
var G__7802 = (i_7790 + (2));
var G__7803 = next_obj_7794;
i_7790 = G__7802;
obj_7791 = G__7803;
continue;
} else {
var G__7804 = (i_7790 + (2));
var G__7805 = oops.core.punch_key_dynamically_BANG_.call(null,obj_7791,key_7793);
i_7790 = G__7804;
obj_7791 = G__7805;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7796)].join('')));

}
} else {
return obj_7791;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_7787,key_7783,val,mode_7784);
} else {
return null;
}
});
