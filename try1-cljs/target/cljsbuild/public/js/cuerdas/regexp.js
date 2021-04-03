// Compiled by ClojureScript 1.10.773 {}
goog.provide('cuerdas.regexp');
goog.require('cljs.core');
goog.require('goog.string');
cuerdas.regexp.xregexp = XRegExp;
/**
 * Return `true` if `x` is a regexp pattern
 *   instance.
 */
cuerdas.regexp.regexp_QMARK_ = (function cuerdas$regexp$regexp_QMARK_(x){
return cljs.core.regexp_QMARK_.call(null,x);
});
/**
 * Enhace the regexp instance with unicode support. This is noop
 *   in JVM because it already works perfectly with unicode.
 */
cuerdas.regexp.enhace = (function cuerdas$regexp$enhace(re){
if(cuerdas.regexp.regexp_QMARK_.call(null,re)){
} else {
throw (new Error("Assert failed: (regexp? re)"));
}

return cuerdas.regexp.xregexp.call(null,re.source,re.flags);
});
/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.regexp.escape = (function cuerdas$regexp$escape(s){
return goog.string.regExpEscape(s);
});
