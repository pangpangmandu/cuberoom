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

var G__48669 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48669)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__48669)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__48669)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48669)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__48670 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48670)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__48670)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__48670)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48670)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48678 = arguments.length;
var i__4737__auto___48679 = (0);
while(true){
if((i__4737__auto___48679 < len__4736__auto___48678)){
args__4742__auto__.push((arguments[i__4737__auto___48679]));

var G__48680 = (i__4737__auto___48679 + (1));
i__4737__auto___48679 = G__48680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__48673){
var vec__48674 = p__48673;
var info = cljs.core.nth.call(null,vec__48674,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__48677_48681 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__48677_48681)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__48677_48681)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__48677_48681)){
} else {
if(cljs.core._EQ_.call(null,null,G__48677_48681)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48677_48681)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq48671){
var G__48672 = cljs.core.first.call(null,seq48671);
var seq48671__$1 = cljs.core.next.call(null,seq48671);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48672,seq48671__$1);
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
var descriptor_48682 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_48682);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_48683 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_48683,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_48685 = oops.config.get_child_factory.call(null);
var child_factory_48685__$1 = (function (){var G__48686 = child_factory_48685;
var G__48686__$1 = (((G__48686 instanceof cljs.core.Keyword))?G__48686.fqn:null);
switch (G__48686__$1) {
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
return child_factory_48685;

}
})();

var child_obj_48684 = child_factory_48685__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_48684);
} else {
}

return child_obj_48684;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_48690 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_48690);

return selector_path_48690;
} else {
var selector_path_48691 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_48691);

return selector_path_48691;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_48692 = temp__5739__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_48692);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48701 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48701,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48694 = (function (){var path_48693 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48693,(0));

return path_48693;
})();
var len_48695 = path_48694.length;
var i_48696 = (0);
var obj_48697 = obj;
while(true){
if((i_48696 < len_48695)){
var mode_48698 = (path_48694[i_48696]);
var key_48699 = (path_48694[(i_48696 + (1))]);
var next_obj_48700 = oops.core.get_key_dynamically.call(null,obj_48697,key_48699,mode_48698);
var G__48702 = mode_48698;
switch (G__48702) {
case (0):
var G__48704 = (i_48696 + (2));
var G__48705 = next_obj_48700;
i_48696 = G__48704;
obj_48697 = G__48705;
continue;

break;
case (1):
if((!((next_obj_48700 == null)))){
var G__48706 = (i_48696 + (2));
var G__48707 = next_obj_48700;
i_48696 = G__48706;
obj_48697 = G__48707;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48700 == null)))){
var G__48708 = (i_48696 + (2));
var G__48709 = next_obj_48700;
i_48696 = G__48708;
obj_48697 = G__48709;
continue;
} else {
var G__48710 = (i_48696 + (2));
var G__48711 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48697,key_48699);
i_48696 = G__48710;
obj_48697 = G__48711;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48702)].join('')));

}
} else {
return obj_48697;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48737 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48737,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48713 = (function (){var path_48712 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48712,(0));

return path_48712;
})();
var len_48714 = path_48713.length;
if((len_48714 < (4))){
return [obj,(function (){var path_48716 = path_48713;
var len_48717 = path_48716.length;
var i_48718 = (0);
var obj_48719 = obj;
while(true){
if((i_48718 < len_48717)){
var mode_48720 = (path_48716[i_48718]);
var key_48721 = (path_48716[(i_48718 + (1))]);
var next_obj_48722 = oops.core.get_key_dynamically.call(null,obj_48719,key_48721,mode_48720);
var G__48738 = mode_48720;
switch (G__48738) {
case (0):
var G__48742 = (i_48718 + (2));
var G__48743 = next_obj_48722;
i_48718 = G__48742;
obj_48719 = G__48743;
continue;

break;
case (1):
if((!((next_obj_48722 == null)))){
var G__48744 = (i_48718 + (2));
var G__48745 = next_obj_48722;
i_48718 = G__48744;
obj_48719 = G__48745;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48722 == null)))){
var G__48746 = (i_48718 + (2));
var G__48747 = next_obj_48722;
i_48718 = G__48746;
obj_48719 = G__48747;
continue;
} else {
var G__48748 = (i_48718 + (2));
var G__48749 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48719,key_48721);
i_48718 = G__48748;
obj_48719 = G__48749;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48738)].join('')));

}
} else {
return obj_48719;
}
break;
}
})()];
} else {
var target_obj_48715 = (function (){var path_48723 = path_48713.slice((0),(len_48714 - (2)));
var len_48724 = path_48723.length;
var i_48725 = (0);
var obj_48726 = obj;
while(true){
if((i_48725 < len_48724)){
var mode_48727 = (path_48723[i_48725]);
var key_48728 = (path_48723[(i_48725 + (1))]);
var next_obj_48729 = oops.core.get_key_dynamically.call(null,obj_48726,key_48728,mode_48727);
var G__48739 = mode_48727;
switch (G__48739) {
case (0):
var G__48751 = (i_48725 + (2));
var G__48752 = next_obj_48729;
i_48725 = G__48751;
obj_48726 = G__48752;
continue;

break;
case (1):
if((!((next_obj_48729 == null)))){
var G__48753 = (i_48725 + (2));
var G__48754 = next_obj_48729;
i_48725 = G__48753;
obj_48726 = G__48754;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48729 == null)))){
var G__48755 = (i_48725 + (2));
var G__48756 = next_obj_48729;
i_48725 = G__48755;
obj_48726 = G__48756;
continue;
} else {
var G__48757 = (i_48725 + (2));
var G__48758 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48726,key_48728);
i_48725 = G__48757;
obj_48726 = G__48758;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48739)].join('')));

}
} else {
return obj_48726;
}
break;
}
})();
return [target_obj_48715,(function (){var path_48730 = [(path_48713[(len_48714 - (2))]),(path_48713[(len_48714 - (1))])];
var len_48731 = path_48730.length;
var i_48732 = (0);
var obj_48733 = target_obj_48715;
while(true){
if((i_48732 < len_48731)){
var mode_48734 = (path_48730[i_48732]);
var key_48735 = (path_48730[(i_48732 + (1))]);
var next_obj_48736 = oops.core.get_key_dynamically.call(null,obj_48733,key_48735,mode_48734);
var G__48740 = mode_48734;
switch (G__48740) {
case (0):
var G__48760 = (i_48732 + (2));
var G__48761 = next_obj_48736;
i_48732 = G__48760;
obj_48733 = G__48761;
continue;

break;
case (1):
if((!((next_obj_48736 == null)))){
var G__48762 = (i_48732 + (2));
var G__48763 = next_obj_48736;
i_48732 = G__48762;
obj_48733 = G__48763;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48736 == null)))){
var G__48764 = (i_48732 + (2));
var G__48765 = next_obj_48736;
i_48732 = G__48764;
obj_48733 = G__48765;
continue;
} else {
var G__48766 = (i_48732 + (2));
var G__48767 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48733,key_48735);
i_48732 = G__48766;
obj_48733 = G__48767;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48740)].join('')));

}
} else {
return obj_48733;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48782 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48782,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48769 = (function (){var path_48768 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48768,(1));

return path_48768;
})();
var len_48772 = path_48769.length;
var parent_obj_path_48773 = path_48769.slice((0),(len_48772 - (2)));
var key_48770 = (path_48769[(len_48772 - (1))]);
var mode_48771 = (path_48769[(len_48772 - (2))]);
var parent_obj_48774 = (function (){var path_48775 = parent_obj_path_48773;
var len_48776 = path_48775.length;
var i_48777 = (0);
var obj_48778 = obj;
while(true){
if((i_48777 < len_48776)){
var mode_48779 = (path_48775[i_48777]);
var key_48780 = (path_48775[(i_48777 + (1))]);
var next_obj_48781 = oops.core.get_key_dynamically.call(null,obj_48778,key_48780,mode_48779);
var G__48783 = mode_48779;
switch (G__48783) {
case (0):
var G__48785 = (i_48777 + (2));
var G__48786 = next_obj_48781;
i_48777 = G__48785;
obj_48778 = G__48786;
continue;

break;
case (1):
if((!((next_obj_48781 == null)))){
var G__48787 = (i_48777 + (2));
var G__48788 = next_obj_48781;
i_48777 = G__48787;
obj_48778 = G__48788;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48781 == null)))){
var G__48789 = (i_48777 + (2));
var G__48790 = next_obj_48781;
i_48777 = G__48789;
obj_48778 = G__48790;
continue;
} else {
var G__48791 = (i_48777 + (2));
var G__48792 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48778,key_48780);
i_48777 = G__48791;
obj_48778 = G__48792;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48783)].join('')));

}
} else {
return obj_48778;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_48774,key_48770,val,mode_48771);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1615710650684
