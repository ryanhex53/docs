(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){"use strict";n(324)},331:function(e,t,n){},332:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){"use strict";var a=n(346),r=n.n(a),s=n(347),o=n.n(s),i=n(348),l=n.n(i),c=n(349),u=n.n(c),p=n(350),d=n.n(p);r.a.registerLanguage("handlebars",o.a),r.a.registerLanguage("xml",u.a),r.a.registerLanguage("javascript",l.a),r.a.registerLanguage("plaintext",d.a);var m={json:"javascript",javascript:"javascript",html:"xml",handlebars:"handlebars"},h={props:{value:{type:String,default:""},cssClass:{type:String,default:""},language:{type:String,required:!0}},computed:{hljsLanguage:function(){return m[this.$props.language]||"plaintext"},codeHtml:function(){return this.$emit("beforeUpdateHtml"),r.a.highlight(this.value,{language:this.hljsLanguage}).value}}},f=(n(330),n(53)),v=Object(f.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{class:this.cssClass},[t("code",{class:["ce-code-content","hljs",this.hljsLanguage],attrs:{spellcheck:"false"},domProps:{innerHTML:this._s(this.codeHtml)}})])}),[],!1,null,"35d837e2",null);t.a=v.exports},345:function(e,t,n){"use strict";n(329)},351:function(e,t,n){"use strict";n(331)},352:function(e,t,n){"use strict";n(332)},355:function(e,t,n){"use strict";n(335)},356:function(e,t,n){"use strict";n(336)},358:function(e,t,n){"use strict";n(337)},359:function(e,t,n){"use strict";n(338)},360:function(e,t,n){"use strict";var a=n(42),r=n(30),s=(n(72),n(6),n(12),n(13),n(389),n(74),n(1)),o={props:{title:{type:String,required:!0},cssClass:{type:String,default:""},headerCssClass:{type:String,default:""},canBeRenamed:{type:Boolean,default:!1}},methods:{titleChanged:function(){this.canBeRenamed&&this.$emit("renameTo",this.$refs.title.innerText)},focusAndSelectTitle:function(){this.$refs.title.focus();var e=document.createRange();e.selectNodeContents(this.$refs.title);var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}}},i=(n(345),n(53)),l=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["workspace-element",e.cssClass]},[n("div",{ref:"title",class:["we-header",e.headerCssClass],attrs:{contenteditable:e.canBeRenamed},domProps:{textContent:e._s(e.title)},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.titleChanged.apply(null,arguments))},blur:e.titleChanged}}),e._v(" "),n("div",{staticClass:"we-actions"},[e.canBeRenamed?n("span",{staticClass:"we-action we-rename",on:{click:function(t){return e.focusAndSelectTitle()}}},[e._v("[rename]")]):e._e(),e._v(" "),e.canBeRenamed?n("span",{staticClass:"we-action ",on:{click:function(t){return e.$emit("delete")}}},[e._v("[delete]")]):e._e()]),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports,c={components:{HighlightedCode:n(339).a,"code-editor":function(){return Promise.all([n.e(0),n.e(10),n.e(18)]).then(n.bind(null,496))},WorkspaceElementDecorator:l},props:{title:{type:String,required:!0},value:{type:String,default:""},cssClass:{type:String,default:""},headerCssClass:{type:String,default:""},language:{type:String,required:!0},interactive:{type:Boolean,required:!0},canBeRenamed:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},beforeMount:function(){this.$data.mounted=!0},methods:{delegateInputEvent:function(e){this.$emit("input",e)}}},u=(n(351),Object(i.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("workspace-element-decorator",e._b({on:{renameTo:function(t){return e.$emit("renameTo",t)},delete:function(t){return e.$emit("delete",t)}}},"workspace-element-decorator",{cssClass:e.cssClass,headerCssClass:e.headerCssClass,title:e.title,canBeRenamed:e.interactive&&e.canBeRenamed},!1),[e.interactive&&e.mounted?n("code-editor",{attrs:{"css-class":"we-content",value:e.value,language:e.language,active:!0},on:{input:e.delegateInputEvent}}):n("highlighted-code",{attrs:{"css-class":"we-content",value:e.value,language:e.language}})],1)}),[],!1,null,null,null).exports),p={components:{WorkspaceElementDecorator:l},props:{error:{type:Object,required:!0}}},d=(n(352),Object(i.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("workspace-element-decorator",{attrs:{title:"Error"}},[t("div",{staticClass:"workspace-error"},[this._v("\n    "+this._s(this.error.message)+"\n    "),t("hr"),this._v("\n    "+this._s(this.error.stack)+"\n  ")])])}),[],!1,null,null,null).exports),m={props:{value:{type:String,default:""}},data:function(){return{versions:this.$handlebarsVersions.allVersions,selected:this.$props.value}},watch:{selected:function(e){this.$emit("input",e)},value:function(e){this.$data.selected=e}}},h=Object(i.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("\n    Please select one\n  ")]),e._v(" "),e._l(e.versions,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n    "+e._s(t)+"\n  ")])}))],2)}),[],!1,null,null,null).exports,f=(n(182),n(101),n(102),n(27),n(323),n(390)),v=n.n(f),g=n(391),x=n.n(g);function w(e){var t=function(e){if(null==e.template)throw new Error("Example must have a 'template' property: "+JSON.stringify(e));var t={template:e.template};return n(),a(),r(),t;function n(){null!=e.partials&&0!==e.partials.length&&(t.partials={},e.partials.forEach((function(e){t.partials[e.name]=e.content})))}function a(){var n=e.preparationScript;null!=n&&0!==n.length&&(t.preparationScript=n)}function r(){var n=e.input;if(null!=n&&!n.match(/^\s*{\s*}\s*$/))try{t.input=v.a.parse(n)}catch(e){throw new Error("Error while parsing 'input' as json5 '".concat(n,"': ")+e.message)}}}(e);return x.a.safeDump(t)}n(354);var _={components:{},props:{show:{type:Boolean,required:!0}},computed:{},watch:{show:function(e){!0===e?(this.$closeKeyListener=function(e){"Escape"===e.key&&(this.close(),e.preventDefault())},this.$closeKeyListener=this.$closeKeyListener.bind(this),window.addEventListener("keydown",this.$closeKeyListener)):window.removeEventListener("keydown",this.$closeKeyListener)}},methods:{close:function(){this.$emit("close")}}},y=(n(355),Object(i.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-container"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal-background"})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal-content"},[n("header",[e._t("header"),e._v(" "),n("button",{staticClass:"modal-close-x",on:{click:e.close}},[e._v("x")])],2),e._v(" "),n("main",[e._t("default")],2),e._v(" "),n("footer",[e._t("footer"),e._v(" "),n("button",{on:{click:e.close}},[e._v("Close")])],2)])])],1)}),[],!1,null,"05e550a8",null).exports),E={components:{Modal:y},props:{yaml:{type:String,required:!1,default:null}},computed:{show:function(){return null!=this.$props.yaml}}},b=(n(356),Object(i.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{staticClass:"export-yaml-modal",attrs:{show:e.show},on:{close:function(t){return e.$emit("close")}},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Export YAML")]},proxy:!0}])},[e._v(" "),n("p",[e._v("\n    You can copy the yaml-code below and use it as frontmatter for an example page.\n  ")]),e._v(" "),n("hr"),e._v(" "),n("pre",{staticClass:"yaml-contents",attrs:{disabled:""},domProps:{textContent:e._s(e.yaml)}})])}),[],!1,null,"e3dadb5e",null).exports);n(180),n(394);function k(){var e=document.location.hash.match(/#format=(\d+)&currentExample=(.*)/);if(e){var t=Number(e[1]),n=e[2];switch(t){case 1:return function(e){var t=decodeURIComponent(e);return JSON.parse(t)}(n);default:throw new Error("Unknown example sharing format "+t)}}}n(357);var C={components:{Modal:y},props:{urlForSharing:{type:String,required:!1,default:null}},data:function(){return{successNotification:null}},computed:{show:function(){return null!=this.$props.urlForSharing}},watch:{show:function(){var e=this;s.a.nextTick((function(){return e.$refs.urlInput.select()}))}},methods:{copyToClipboard:function(){this.$refs.urlInput.select(),document.execCommand("copy"),this.notifySuccess("URL has been copied to clipboard")},notifySuccess:function(e){var t=this;this.$data.successNotification=e,setTimeout((function(){return t.successNotification=null}),2e3)},askQuestion:function(){var e="\n* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**\n\n# Example link\n\n".concat(this.$props.urlForSharing,"\n\n# Question\n\n");document.location.href="https://github.com/wycats/handlebars.js/issues/new?body=".concat(encodeURIComponent(e))},fileBug:function(){var e="\n* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**\n\n# Bug description\n\n# Example link\n\n".concat(this.$props.urlForSharing,"\n\n# Expected outcome\n\n# Actual outcome");document.location.href="https://github.com/wycats/handlebars.js/issues/new?body=".concat(encodeURIComponent(e))},reportSecurityIssue:function(){var e="\n\n--Insert description here--\n\nHere is a URL to verify the issue:\n\n".concat(this.$props.urlForSharing,"\n\n");document.location.href="mailto:security@npmjs.com?body=".concat(encodeURIComponent(e))}}};n(358);function S(e,t){return{template:e.template,partials:Object(a.a)(e.partials),input:e.input,output:e.output,preparationScript:e.preparationScript,handlebarsVersion:t}}var $={components:{ShareUrlModal:Object(i.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{attrs:{show:e.show},on:{close:function(t){return e.$emit("close")}},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Share this example ")]},proxy:!0}])},[e._v(" "),n("p",[e._v("\n    You can paste this URL into github issues to order to share your setup when filing bugs or questions\n  ")]),e._v(" "),n("hr"),e._v(" "),n("input",{ref:"urlInput",staticClass:"url-for-sharing",attrs:{type:"text",onfocus:"this.select()"},domProps:{value:e.urlForSharing}}),e._v(" "),n("button",{on:{click:e.copyToClipboard}},[e._v("Copy to clipboard")]),e._v(" "),n("div",{staticClass:"share"},[n("button",{on:{click:e.reportSecurityIssue}},[e._v("Report a security issue")]),e._v(" "),n("button",{on:{click:e.askQuestion}},[e._v("Ask question at github")]),e._v(" "),n("button",{on:{click:e.fileBug}},[e._v("File bug at github")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.successNotification,expression:"successNotification"}],staticClass:"success-notification"},[e._v(e._s(e.successNotification))])])}),[],!1,null,"53d45973",null).exports,WorkspaceElement:u,WorkspaceError:d,HandlebarsVersionChooser:h,ExportYamlModal:b},props:{parsedExample:{type:Object,required:!0},interactive:{type:Boolean,default:!1},showInputOutput:{type:Boolean,default:!1},hidePreparationScript:{type:Boolean,default:!1}},data:function(){var e=this.$props.parsedExample;return{currentExample:S(this.$props.parsedExample,this.$handlebarsVersions.latest),currentError:e.error||null,createdPartialCounter:0,exportedYaml:null,urlForSharing:null}},mounted:function(){var e=this;n.e(8).then(n.bind(null,490)).then((function(t){e.$executeExample=t.executeExample,e.loadSharedData()}))},methods:{addPartial:function(){null==this.currentExample.partials&&(this.currentExample.partials=[]),this.currentExample.partials.push({name:"new_partial",content:""}),this.exampleContentChanged()},deletePartial:function(e){this.currentExample.partials.splice(e,1),this.exampleContentChanged()},renamePartialTo:function(e,t){e.name=t,this.exampleContentChanged()},exampleContentChanged:function(){this.executeExample()},copyAsYaml:function(){this.$data.exportedYaml=w(this.currentExample)},deleteExportedYaml:function(){this.$data.exportedYaml=null},executeExample:function(){var e=this;s.a.nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$executeExample(e.currentExample);case 3:e.currentExample.output=t.sent,e.currentError=null,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.currentError={message:t.t0.message,stack:t.t0.stack};case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))))},share:function(){var e,t,n,a,r,s;this.urlForSharing=(e=this.$data.currentExample,t=JSON.stringify(e),n=document.location,a=n.protocol,r=n.host,s="#format=1&currentExample="+encodeURIComponent(t),"".concat(a,"//").concat(r,"/playground.html").concat(s))},deleteUrlForSharing:function(){this.urlForSharing=null},loadSharedData:function(){var e=k();e&&(this.$data.currentExample=e),this.executeExample()}}},j=(n(359),Object(i.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"workspace"},[n("ExportYamlModal",{attrs:{yaml:e.exportedYaml},on:{close:e.deleteExportedYaml}}),e._v(" "),n("ShareUrlModal",{attrs:{"url-for-sharing":e.urlForSharing},on:{close:e.deleteUrlForSharing}}),e._v(" "),e.interactive?n("div",{staticClass:"workspace-header"},[n("div",{staticClass:"version-chooser"},[e._v("\n      Handlebars:\n      "),n("handlebars-version-chooser",{on:{input:e.executeExample},model:{value:e.currentExample.handlebarsVersion,callback:function(t){e.$set(e.currentExample,"handlebarsVersion",t)},expression:"currentExample.handlebarsVersion"}}),e._v(" "),n("button",{on:{click:e.addPartial}},[e._v("\n        Add partial\n      ")]),e._v(" "),n("button",{on:{click:e.copyAsYaml}},[e._v("\n        Copy as YAML\n      ")]),e._v(" "),n("button",{on:{click:e.share}},[e._v("\n        Share (Experimental)\n      ")])],1)]):e._e(),e._v(" "),n("div",{staticClass:"workspace-row"},[n("workspace-element",{attrs:{title:"Template","style-class":"workspace-template",language:"handlebars",interactive:e.interactive},on:{input:e.executeExample},model:{value:e.currentExample.template,callback:function(t){e.$set(e.currentExample,"template",t)},expression:"currentExample.template"}}),e._v(" "),e._l(e.currentExample.partials,(function(t,a){return n("workspace-element",{key:t.name,attrs:{title:t.name,"style-class":"workspace-partial","header-css-class":"workspace-partial-header",language:"handlebars",interactive:e.interactive,"can-be-renamed":!0},on:{renameTo:function(n){return e.renamePartialTo(t,n)},delete:function(t){return e.deletePartial(a)},input:e.executeExample},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"partial.content"}})}))],2),e._v(" "),e.currentExample.preparationScript&&!e.hidePreparationScript?n("div",{staticClass:"workspace-row"},[n("workspace-element",{attrs:{title:"Preparation-Script","style-class":"workspace-partial",language:"javascript",interactive:e.interactive},on:{input:e.executeExample},model:{value:e.currentExample.preparationScript,callback:function(t){e.$set(e.currentExample,"preparationScript",t)},expression:"currentExample.preparationScript"}})],1):e._e(),e._v(" "),e.showInputOutput?n("div",{staticClass:"workspace-row"},[n("workspace-element",{attrs:{title:"Input","style-class":"workspace-input",language:"json",interactive:e.interactive},on:{input:e.executeExample},model:{value:e.currentExample.input,callback:function(t){e.$set(e.currentExample,"input",t)},expression:"currentExample.input"}}),e._v(" "),e.currentError?n("workspace-error",{attrs:{error:e.currentError}}):n("workspace-element",{attrs:{title:"Output","style-class":"workspace-output",language:"html",value:e.currentExample.output,interactive:e.interactive}})],1):e._e()],1)}),[],!1,null,null,null));t.a=j.exports},399:function(e,t,n){},465:function(e,t,n){var a=n(2),r=n(17),s=n(16);a({target:"String",stat:!0},{raw:function(e){for(var t=r(e.raw),n=s(t.length),a=arguments.length,o=[],i=0;n>i;)o.push(String(t[i++])),i<a&&o.push(String(arguments[i]));return o.join("")}})},466:function(e,t,n){"use strict";n(399)},489:function(e,t,n){"use strict";n.r(t);n(57),n(199),n(363);var a,r=n(403),s=n(483),o=n(360);n(465),n(180),n(27),n(71);var i={components:{Layout:s.default,Workspace:o.a},data:function(){return{nonInteractiveForPrerendering:!0}},computed:{parsedExampleWithEnsuredPreparationScript:function(){return Object(r.a)(Object(r.a)({},this.$frontmatter.parsedExample),{},{preparationScript:this.$frontmatter.parsedExample.preparationScript||this.emptyPreparationScript()})}},mounted:function(){this.nonInteractiveForPrerendering=!1},methods:{emptyPreparationScript:function(){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=String.raw.apply(String,[e].concat(n));return r.replace(/^\s*/gm,"")}(a||(e=["\n      // Handlebars.registerHelper('loud', function(string) {\n      //    return string.toUpperCase()\n      // });\n      "],t||(t=e.slice(0)),a=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}}},l=(n(466),n(53)),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{staticClass:"interactive-playground",scopedSlots:e._u([{key:"page-top",fn:function(){return[n("div",{staticClass:"try-handlebars"},[n("workspace",{attrs:{"parsed-example":e.parsedExampleWithEnsuredPreparationScript,interactive:!0,"show-input-output":!0}})],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=c.exports}}]);