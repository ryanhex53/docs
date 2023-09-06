(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{569:function(t,a,s){"use strict";s.r(a);var e=s(53),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"precompiling-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#precompiling-templates"}},[t._v("#")]),t._v(" Precompiling templates")]),t._v(" "),s("p",[t._v("Using the Handlebars precompiler, you can precompile your Handlebars templates to save time on the client and reduce the\nrequired runtime size of the handlebars library.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("p",[t._v("First, you will need to have "),s("em",[t._v("Node.js and npm")]),t._v(". Go to "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/en/download/"),s("OutboundLink")],1),t._v("\nto find out how to do that on your OS.")]),t._v(" "),s("p",[t._v("Next, install the Handlebars npm package, which contains the precompiler.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g handlebars\n")])])]),s("p",[t._v("Create a file name "),s("code",[t._v("example.handlebars")]),t._v(" containing your template:")]),t._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"xml"}},[t._v("Handlebars "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("b")]),t._v(">")])]),s("span",{pre:!0,attrs:{class:"hljs-template-variable"}},[t._v("{{"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("doesWhat")]),t._v("}}")]),s("span",{pre:!0,attrs:{class:"xml"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("b")]),t._v(">")]),t._v(" precompiled!")])])])]),s("p",[t._v("Run the precompiler.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("handlebars example.handlebars -f example.precompiled.js\n")])])]),s("p",[t._v("Include the Handlebars runtime and the precompile javascript.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"output"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.runtime.js"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"example.precompiled.js"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" template = Handlebars.templates.example;\n  "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'output'")]),t._v(").innerHTML = template({"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("doesWhat")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'rocks!'")]),t._v("})\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])]),s("p",[t._v("The runtime is also available for download on the "),s("RouterLink",{attrs:{to:"/installation/#downloading-handlebars"}},[t._v("installation page")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"optimizations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimizations"}},[t._v("#")]),t._v(" Optimizations")]),t._v(" "),s("p",[t._v("Because you are precompiling templates, you can also apply several optimization to the compiler. The first allows you to\nspecify a list of the known helpers to the compiler")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("handlebars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -k each -k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -k unless\n")])])]),s("p",[t._v("The Handlebars compiler will optimize accesses to those helpers for performance. When all helpers are known at compile\ntime, the "),s("code",[t._v("--knownOnly")]),t._v(" option provides the smallest generated code that also provides the fastest execution.")]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Precompile handlebar templates.\nUsage: handlebars [template|directory]...\nOptions:\n  -f, --output         Output File                                                                              [string]\n  --map                Source Map File                                                                          [string]\n  -a, --amd            Exports amd style (require.js)                                                          [boolean]\n  -c, --commonjs       Exports CommonJS style, path to Handlebars module                        [string] [default: null]\n  -h, --handlebarPath  Path to handlebar.js (only valid for amd-style)                            [string] [default: ""]\n  -k, --known          Known helpers                                                                            [string]\n  -o, --knownOnly      Known helpers only                                                                      [boolean]\n  -m, --min            Minimize output                                                                         [boolean]\n  -n, --namespace      Template namespace                                     [string] [default: "Handlebars.templates"]\n  -s, --simple         Output template function only.                                                          [boolean]\n  -N, --name           Name of passed string templates. Optional if running in a simple mode. Required when operating on\n                       multiple templates.                                                                      [string]\n  -i, --string         Generates a template from the passed CLI argument.\n                       "-" is treated as a special value and causes stdin to be read for the template value.    [string]\n  -r, --root           Template root. Base value that will be stripped from template names.                     [string]\n  -p, --partial        Compiling a partial template                                                            [boolean]\n  -d, --data           Include data when compiling                                                             [boolean]\n  -e, --extension      Template extension.                                              [string] [default: "handlebars"]\n  -b, --bom            Removes the BOM (Byte Order Mark) from the beginning of the templates.                  [boolean]\n  -v, --version        Prints the current compiler version                                                     [boolean]\n  --help               Outputs this message                                                                    [boolean]\n')])])]),s("p",[t._v("If using the precompiler's normal mode, the resulting templates will be stored to the Handlebars.templates object using\nthe relative template name sans the extension. These templates may be executed in the same manner as templates. If using\nthe simple mode the precompiler will generate a single javascript method. To execute this method it must be passed to\nthe "),s("code",[t._v("Handlebars.template()")]),t._v(" method and the resulting object may be used as normal.")]),t._v(" "),s("h2",{attrs:{id:"precompiling-templates-inside-nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#precompiling-templates-inside-nodejs"}},[t._v("#")]),t._v(" Precompiling Templates Inside NodeJS")]),t._v(" "),s("p",[t._v('If you wish to precompile templates from inside NodeJS--without invoking "handlebars" from the command line--that can be\ndone with Handlebars.precompile. Transmit the string result of this function to your clients, and they can in turn parse\nthat with Handlebars.template.')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Handlebars <b>{{doesWhat}}</b> precompiled!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Handlebars "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handlebars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" compiled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("precompile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The output will be the following:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"compiler"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">= 4.3.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("depth0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("partials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alias1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propertyIsEnumerable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Handlebars <b>"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("escapeExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doesWhat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" depth0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doesWhat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" depth0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" helper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("helperMissing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" helper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" depth0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nullContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doesWhat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"hash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" helper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"</b> precompiled!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"useData"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),s("p",[t._v("On the client side you have Javascript along the lines of the following.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Handlebars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** insert compiled output here **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Finally, you can reference these templates dynamically in your Javascript.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourname"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do whatever you want with the result")]),t._v("\n")])])]),s("h2",{attrs:{id:"integrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrations"}},[t._v("#")]),t._v(" Integrations")]),t._v(" "),s("p",[t._v("Some npm-packages can be used to integrate the Handlebars precompiler into your build system (i.e. Webpack,\nBrowserify...). Have a look at the integrations page:")]),t._v(" "),s("p",[s("RouterLink",{staticClass:"button-link",attrs:{to:"/installation/integrations.html"}},[t._v("Learn more: Integrations")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);