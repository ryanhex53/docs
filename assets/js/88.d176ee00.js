(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{560:function(a,e,t){"use strict";t.r(e);var l=t(51),r=Object(l.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"partials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partials"}},[a._v("#")]),a._v(" Partials")]),a._v(" "),t("p",[a._v("Handlebars allows for template reuse through partials. Partials are normal Handlebars templates that may be called\ndirectly by other templates.")]),a._v(" "),t("h2",{attrs:{id:"basic-partials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-partials"}},[a._v("#")]),a._v(" Basic Partials")]),a._v(" "),t("p",[a._v("In order to use a partial, it must be registered via "),t("code",[a._v("Handlebars.registerPartial")]),a._v(".")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/basic.md",show:"preparationScript"}}),a._v(" "),t("p",[a._v("This call will register the "),t("code",[a._v("myPartial")]),a._v(" partial. Partials may be precompiled and the precompiled template passed into\nthe second parameter.")]),a._v(" "),t("p",[a._v("Calling the partial is done through the partial call syntax:")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/basic.md",show:"template"}}),a._v(" "),t("p",[a._v("Will render the partial named "),t("code",[a._v("myPartial")]),a._v(". When the partial executes, it will be run under the current execution\ncontext.")]),a._v(" "),t("h2",{attrs:{id:"dynamic-partials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-partials"}},[a._v("#")]),a._v(" Dynamic Partials")]),a._v(" "),t("p",[a._v("It's possible to dynamically select the partial to be executed by using sub expression syntax.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/dynamic.md",show:"template"}}),a._v(" "),t("p",[a._v("Will evaluate "),t("code",[a._v("whichPartial")]),a._v(" and then render the partial whose name is returned by this function.")]),a._v(" "),t("p",[a._v("Subexpressions do not resolve variables so "),t("code",[a._v("whichPartial")]),a._v(" must be a function. If a simple variable has the partial name,\nit's possible to resolve it via the "),t("code",[a._v("lookup")]),a._v(" helper.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/variable.md",show:"template"}}),a._v(" "),t("h2",{attrs:{id:"partial-contexts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial-contexts"}},[a._v("#")]),a._v(" Partial Contexts")]),a._v(" "),t("p",[a._v("It's possible to execute partials on a custom context by passing in the context to the partial call.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/other-context.md",show:"template"}}),a._v(" "),t("h2",{attrs:{id:"partial-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial-parameters"}},[a._v("#")]),a._v(" Partial Parameters")]),a._v(" "),t("p",[a._v("Custom data can be passed to partials through hash parameters.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/parameters.md",show:"template"}}),a._v(" "),t("p",[a._v("Will set parameter to "),t("code",[a._v("value")]),a._v(" when the partial runs.")]),a._v(" "),t("p",[a._v("This is particularly useful for exposing data from parent contexts to the partial:")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/parent-context.md",show:"template"}}),a._v(" "),t("h2",{attrs:{id:"partial-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial-blocks"}},[a._v("#")]),a._v(" Partial Blocks")]),a._v(" "),t("p",[a._v("The normal behavior when attempting to render a partial that is not found is for the implementation to throw an error.\nIf failover is desired instead, partials may be called using the block syntax.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/failover.md",show:"template"}}),a._v(" "),t("p",[a._v("Which will render "),t("code",[a._v("Failover content")]),a._v(" if the "),t("code",[a._v("myPartial")]),a._v(" partial is not registered.")]),a._v(" "),t("p",[a._v("This block syntax may also be used to pass templates to the partial, which can be executed by the specially named\npartial, "),t("code",[a._v("@partial-block")]),a._v(". A template of")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/partial-block.md",show:"template"}}),a._v(" "),t("p",[a._v("with the "),t("code",[a._v("layout")]),a._v(" partial containing")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/partial-block.md",show:"partial",name:"layout"}}),a._v(" "),t("p",[a._v("Would render")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/partial-block.md",show:"output"}}),a._v(" "),t("p",[a._v("When called in this manner, the block will execute under the context of the partial at the time of the call. Depthed\npaths and block parameters operate relative to the partial block rather than the partial template.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/partial-block-parameters.md",show:"template"}}),a._v(" "),t("p",[a._v("Will render "),t("code",[a._v("person.firstname")]),a._v(" from this template, not the partial.")]),a._v(" "),t("h2",{attrs:{id:"inline-partials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inline-partials"}},[a._v("#")]),a._v(" Inline Partials")]),a._v(" "),t("p",[a._v("Templates may define block scoped partials via the "),t("code",[a._v("inline")]),a._v(" decorator.")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/inline.md",show:"template"}}),a._v(" "),t("p",[a._v("Which will render the "),t("code",[a._v("myPartial")]),a._v(" partial for each child.")]),a._v(" "),t("p",[a._v("Each inline partial is available to the current block and all children, including execution of other partials. This\nallows for layout templates and similar functionality:")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/inline-blocks.md",show:"template"}}),a._v(" "),t("p",[a._v("Where the "),t("code",[a._v("layout")]),a._v(" partial may be:")]),a._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/partials/inline-blocks.md",show:"partial",name:"layout"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);