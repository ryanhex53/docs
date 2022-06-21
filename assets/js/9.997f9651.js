(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{324:function(t,a,e){},330:function(t,a,e){"use strict";e(324)},339:function(t,a,e){"use strict";var r=e(346),n=e.n(r),s=e(347),i=e.n(s),l=e(348),o=e.n(l),u=e(349),p=e.n(u),c=e(350),h=e.n(c);n.a.registerLanguage("handlebars",i.a),n.a.registerLanguage("xml",p.a),n.a.registerLanguage("javascript",o.a),n.a.registerLanguage("plaintext",h.a);var d={json:"javascript",javascript:"javascript",html:"xml",handlebars:"handlebars"},m={props:{value:{type:String,default:""},cssClass:{type:String,default:""},language:{type:String,required:!0}},computed:{hljsLanguage:function(){return d[this.$props.language]||"plaintext"},codeHtml:function(){return this.$emit("beforeUpdateHtml"),n.a.highlight(this.value,{language:this.hljsLanguage}).value}}},g=(e(330),e(53)),f=Object(g.a)(m,(function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{class:this.cssClass},[a("code",{class:["ce-code-content","hljs",this.hljsLanguage],attrs:{spellcheck:"false"},domProps:{innerHTML:this._s(this.codeHtml)}})])}),[],!1,null,"35d837e2",null);a.a=f.exports},396:function(t,a,e){},397:function(t,a,e){},462:function(t,a,e){"use strict";e(396)},463:function(t,a,e){"use strict";e(397)},487:function(t,a,e){"use strict";e.r(a);e(343),e(6),e(74),e(27),e(71);var r=e(339),n={},s=(e(462),e(53)),i=Object(s.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"}},[a("g",{attrs:{"fill-rule":"evenodd","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M227.059 899.053c2.55-73.662-43.23-144.975-62.127-176.173-35.678-58.903-94.85-119.215-137.5-175-9.596-12.552-14.786-49.151 3.75-68.75 18.609-19.676 47.526-18.971 65-8.75 48.776 28.529 65.847 50.928 100 97.5 11.68 15.928 34.944 62.726 35 98.75V257.88c0-36.53 34.4-62.204 70-60 35.6 2.203 64.769 33.137 65 61.25l2.5 303.75c-1.1-71.732 6.286-115.57 39.268-115.67 32.967-.101 46.789 48.063 48.232 118.17-1.443-73.023 9.456-93.69 43.964-94.268 34.509-.578 44.016 46.856 44.786 139.268.063-72.828 17.524-104.226 33.75-105 16.226-.775 56.873 32.177 57.134 106.605l.366 104.645c.112 32.014-46.568 56.55-46.844 88.598l-.808 93.977",fill:"none","stroke-width":"16",transform:"matrix(.06113 0 0 .06961 11.98 1.372)"}}),this._v(" "),a("path",{staticClass:"circle",attrs:{d:"M194.421 411.994a174.011 174.011 0 01-58.662-186.44 174.011 174.011 0 01151.61-123.351 174.011 174.011 0 01170.61 95.356 174.011 174.011 0 01-25.628 193.763",fill:"none","stroke-width":"32","stroke-opacity":".902",transform:"matrix(.06113 0 0 .06961 11.98 1.372)"}}),this._v(" "),a("path",{staticClass:"circle",attrs:{d:"M83.027 416.954A261.017 261.017 0 01134.2 75.991a261.017 261.017 0 01344.705 7.25 261.017 261.017 0 0136.79 342.812",fill:"none","stroke-width":"32","stroke-opacity":".902",transform:"matrix(.06113 0 0 .06961 11.98 1.372)"}})])])}),[],!1,null,"101f2525",null).exports,l={input:"json",preparationScript:"javascript",template:"handlebars",partial:"handlebars",output:"html",error:"text"},o={components:{HighlightedCode:r.a,TryoutIcon:i},props:{examplePage:{type:String,required:!0},show:{type:String,required:!0,validator:function(t){return null!=l[t]}},name:{type:String,required:!1,default:null}},computed:{examplePartAsString:function(){switch(this.$props.show){case"partial":return this.referencedPartial.content;case"error":return this.exampleData.error&&this.exampleData.error.message;default:return this.exampleData[this.$props.show]}},referencedPartial:function(){var t=this;return this.exampleData.partials&&this.exampleData.partials.find((function(a){return a.name===t.$props.name}))},language:function(){return l[this.$props.show]},exampleData:function(){return this.examplePageData&&this.examplePageData.frontmatter.parsedExample},examplePageData:function(){var t=this;return this.$site.pages.find((function(a){return a.regularPath===t.normalizedPath}))},normalizedPath:function(){return this.$props.examplePage.replace(/\.(html|md)$/,"")+".html"},title:function(){return"partial"===this.$props.show?"partial: "+this.$props.name:this.$props.show}},methods:{openInPlayground:function(){this.$router.push(this.normalizedPath)}}},u=(e(463),Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return null!=t.examplePartAsString?e("div",{staticClass:"handlebars-example-part",attrs:{title:"Click to try out"},on:{click:t.openInPlayground}},[e("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("router-link",{staticClass:"show-in-playground",attrs:{to:t.normalizedPath}},[e("TryoutIcon")],1),t._v(" "),e("highlighted-code",{staticClass:"example-part-code",attrs:{language:t.language,value:t.examplePartAsString}})],1):null==t.exampleData?e("div",{staticClass:"handlebars-example-part not-found"},[e("header",[t._v("Example "+t._s(t.normalizedPath)+" not found")]),t._v(" "),e("section",[t._v("Please verify that the path is correct.")])]):"partial"===t.show?e("div",{staticClass:"handlebars-example-part not-found"},[e("header",[t._v('Partial "'+t._s(t.name)+'" not found')]),t._v(" "),e("section",[t._v("Partial: "+t._s(t.partialName)+" not found in example "+t._s(t.normalizedPath)+".")])]):t._e()}),[],!1,null,null,null));a.default=u.exports}}]);