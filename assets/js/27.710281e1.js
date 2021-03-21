(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{472:function(e,a,t){"use strict";t.r(a);var s=t(39),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"creating-interactive-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-interactive-examples"}},[e._v("#")]),e._v(" Creating interactive examples")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#creating-examples"}},[e._v("Creating examples")])]),t("li",[t("a",{attrs:{href:"#example-data"}},[e._v("Example data")])]),t("li",[t("a",{attrs:{href:"#embedding-parts-of-an-example"}},[e._v("Embedding parts of an example.")])]),t("li",[t("a",{attrs:{href:"#horizontal-layout"}},[e._v("Horizontal layout")])])])]),t("p"),e._v(" "),t("p",[e._v("It is possible to define interactive examples. Examples or parts of an example can be "),t("strong",[e._v("embedded in any page")]),e._v(". A\nauto-generated link enables the visitor to open the example in a "),t("strong",[e._v("playground")]),e._v(" where she can change the template,\npartials, input, and so on and can see the resulting output.")]),e._v(" "),t("h2",{attrs:{id:"creating-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-examples"}},[e._v("#")]),e._v(" Creating examples")]),e._v(" "),t("p",[e._v("In order to define an example, create a new markdown file in the "),t("code",[e._v("examples")]),e._v("-directory. The example data is defined in\nthe frontmatter of the referenced example page. See "),t("RouterLink",{attrs:{to:"/examples/all-features.html"}},[e._v("all-features-example-raw")]),e._v(" for a\ncomplete demonstration of all features.")],1),e._v(" "),t("p",[e._v("The following frontmatter properties are supported:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("layout")]),e._v(": Must always be "),t("code",[e._v("InteractivePlaygroundLayout")])]),e._v(" "),t("li",[t("code",[e._v("example")]),e._v(": Contains the example\n"),t("ul",[t("li",[t("code",[e._v("template")]),e._v(": The main Handlebars template")]),e._v(" "),t("li",[t("code",[e._v("partials")]),e._v(": An object with on property for each registered partial, the key is the partial-name, the value is the\npartial content")]),e._v(" "),t("li",[t("code",[e._v("preparationScript")]),e._v(": A script that is executed before compiling and running the template. "),t("code",[e._v("Handlebars")]),e._v(" is available\nas global variable in this script.")]),e._v(" "),t("li",[t("code",[e._v("input")]),e._v(": The template-input as embedded YAML-object.")]),e._v(" "),t("li",[t("code",[e._v("errorExpected")]),e._v(": A boolean (default: "),t("code",[e._v("false")]),e._v(") that specifies that this example is expected to throw an error. By\ndefault, examples that throw an error during execution, cause the build of the whole site to fail. If you write an\nexample that describes an error, you need to set this flag to "),t("code",[e._v("true")]),e._v(".")])])])]),e._v(" "),t("p",[e._v("The output of the example is automatically computed using the latest release version of Handlebars.")]),e._v(" "),t("h2",{attrs:{id:"example-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-data"}},[e._v("#")]),e._v(" Example data")]),e._v(" "),t("p",[e._v("If possible, examples should use variations of a common data set. Therefore, the file\n"),t("a",{attrs:{href:"https://github.com/handlebars-lang/docs/blob/master/src/examples/_example-base-data.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/examples/_example-base-data.yaml"),t("OutboundLink")],1),e._v("\ncontains data that can be reused and adapted to each example. If the data in that file is insufficient, please add new\ndata, but please make sure it is somehow related.")]),e._v(" "),t("h2",{attrs:{id:"embedding-parts-of-an-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#embedding-parts-of-an-example"}},[e._v("#")]),e._v(" Embedding parts of an example.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("<ExamplePart>")]),e._v("-component allows you to show a part of the example in the current part.")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ExamplePart")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("examplePage")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/examples/builtin-helper-each-block"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("show")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),t("p",[e._v("will result in")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block",show:"template"}}),e._v(" "),t("p",[e._v("The props for this component are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("examplePage")]),e._v(": path to the example page below the "),t("code",[e._v("src")]),e._v("-folder")]),e._v(" "),t("li",[t("code",[e._v("show")]),e._v(": The part of the example that should be inserted into the page. Possible values are "),t("code",[e._v("template")]),e._v(", "),t("code",[e._v("input")]),e._v(",\n"),t("code",[e._v("output")]),e._v(", "),t("code",[e._v("error")]),e._v(", "),t("code",[e._v("preparationScript")]),e._v(" and "),t("code",[e._v("partial")])]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(" (optional): This prop is needed only when "),t("code",[e._v('show="partial"')]),e._v(". It defines the name of the partial that should be\ninserted into the example.")])]),e._v(" "),t("p",[e._v("The component is very useful if you want to embed the parts of an example into flowing text, You can insert the input\nJSON by using "),t("code",[e._v('<ExamplePart examplePage="/examples/all-features" show="input" />')]),e._v(" and the following code snippet will\nappear in the page:")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/all-features",show:"input"}}),e._v(" "),t("p",[e._v("Then, in order to show the reader the template you can use "),t("code",[e._v('show="template"')]),e._v(" with the same "),t("code",[e._v("examplePage")]),e._v(".")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/all-features",show:"template"}}),e._v(" "),t("p",[e._v("You can render a partial using for example "),t("code",[e._v("show=partial")]),e._v(" and "),t("code",[e._v("name=person")])]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/all-features",show:"partial",name:"person"}}),e._v(" "),t("p",[e._v("If you have an example with helpers, you might also want to include the preparation script:")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/all-features",show:"preparationScript"}}),e._v(" "),t("h2",{attrs:{id:"horizontal-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-layout"}},[e._v("#")]),e._v(" Horizontal layout")]),e._v(" "),t("p",[e._v("If you want to layout two example-parts horizontally, you can use the "),t("code",[e._v("<Flex>")]),e._v("-component.")]),e._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ExamplePart")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("examplePage")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/examples/builtin-helper-each-block"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("show")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ExamplePart")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("examplePage")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("/examples/builtin-helper-each-block"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("show")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("input"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),t("p",[e._v("becomes")]),e._v(" "),t("Flex",[t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block",show:"template"}}),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block",show:"input"}})],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);