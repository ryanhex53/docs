(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{413:function(e,t,a){"use strict";a.r(t);var s=a(3),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"utility-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utility-functions"}},[e._v("#")]),e._v(" Utility functions")]),e._v(" "),a("h2",{attrs:{id:"helper-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-utilities"}},[e._v("#")]),e._v(" Helper utilities")]),e._v(" "),a("p",[e._v("These methods come handy when you implement custom helpers.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-safestring-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-safestring-string"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.SafeString(string)")])]),e._v(" "),a("p",[e._v("Prevents "),a("code",[e._v("string")]),e._v(" from being escaped when the template is rendered.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SafeString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<div>HTML Content!</div>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("When constructing the string that will be marked as safe, any external content should be properly escaped using the\n"),a("code",[e._v("Handlebars.escapeExpression")]),e._v(" method to avoid potential security concerns.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-escapeexpression-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-escapeexpression-string"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.escapeExpression(string)")])]),e._v(" "),a("p",[e._v("HTML escapes the passed string, making it safe for rendering as text within HTML content.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("escapeExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Replaces "),a("code",[e._v("&")]),e._v(", "),a("code",[e._v("<")]),e._v(", "),a("code",[e._v(">")]),e._v(", "),a("code",[e._v('"')]),e._v(", "),a("code",[e._v("'")]),e._v(", "),a("code",[e._v("`")]),e._v(", "),a("code",[e._v("=")]),e._v(" with the HTML entity equivalent value for string values. "),a("code",[e._v("SafeString")]),e._v("\nvalues are left untouched.")]),e._v(" "),a("p",[e._v("The output of all expressions except for triple-braced expressions are passed through this method. Helpers should also\nuse this method when returning HTML content via a "),a("code",[e._v("SafeString")]),e._v(" instance, to prevent possible code injection.")]),e._v(" "),a("p",[e._v("This method is aliased at "),a("code",[e._v("Handlebars.Utils.escapeExpression")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"handlebars-createframe-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-createframe-data"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.createFrame(data)")])]),e._v(" "),a("p",[e._v("Used by block helpers to create child data objects.")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Handlebars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("createFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Helpers that modify the data state should create a new frame when doing so, to isolate themselves and avoid corrupting\nthe state of any parents. Generally, only one frame needs to be created per helper execution. For example, the "),a("code",[e._v("each")]),e._v("\niterator creates a single frame which is reused for all child execution.")]),e._v(" "),a("h2",{attrs:{id:"general-utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-utilities"}},[e._v("#")]),e._v(" General Utilities")]),e._v(" "),a("p",[e._v("Handlebars offers a variety of utility methods that are exposed through the "),a("code",[e._v("Handlebars.Utils")]),e._v(" object.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-utils-isempty-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-utils-isempty-value"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.Utils.isEmpty(value)")])]),e._v(" "),a("p",[e._v("Determines if a given value is empty.")]),e._v(" "),a("p",[e._v("Handlebars.Utils.isEmpty(value)")]),e._v(" "),a("p",[e._v("This is used by the built-in "),a("code",[e._v("if")]),e._v(" and "),a("code",[e._v("with")]),e._v(" helpers to control their execution flow. The Handlebars definition of empty\nis any of:")]),e._v(" "),a("ul",[a("li",[e._v("Array with length 0")]),e._v(" "),a("li",[e._v("falsy values other than 0")])]),e._v(" "),a("p",[e._v("This is intended to match the "),a("a",{attrs:{href:"http://mustache.github.io/mustache.5.html#Sections",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mustache behavior"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"handlebars-utils-extend-obj-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-utils-extend-obj-value"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.Utils.extend(obj, value)")])]),e._v(" "),a("p",[e._v("Simple utility method to augment "),a("code",[e._v("obj")]),e._v(" with all keys defined on "),a("code",[e._v("value")]),e._v(".")]),e._v(" "),a("p",[e._v("Handlebars.Utils.extend(foo, {bar: true})")]),e._v(" "),a("p",[e._v("Will set the key "),a("code",[e._v("bar")]),e._v(" on object "),a("code",[e._v("foo")]),e._v(" with the value "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"handlebars-utils-tostring-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-utils-tostring-obj"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.Utils.toString(obj)")])]),e._v(" "),a("p",[e._v("Generic "),a("code",[e._v("toString")]),e._v(" method.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-utils-isarray-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-utils-isarray-obj"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.Utils.isArray(obj)")])]),e._v(" "),a("p",[e._v("Determines if an object is an array.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-utils-isfunction-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-utils-isfunction-obj"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.Utils.isFunction(obj)")])]),e._v(" "),a("p",[e._v("Determines if an object is a function.")]),e._v(" "),a("h3",{attrs:{id:"handlebars-log-level-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-log-level-message"}},[e._v("#")]),e._v(" "),a("code",[e._v("Handlebars.log(level, message)")])]),e._v(" "),a("p",[e._v("Logger used by the "),a("code",[e._v("log")]),e._v(" helper.")]),e._v(" "),a("p",[e._v("May be overriden if desired.")])])}),[],!1,null,null,null);t.default=n.exports}}]);