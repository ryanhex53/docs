(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{638:function(s,a,t){"use strict";t.r(a);var r=t(53),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[s._v("프로그래밍 언어와 환경에 따라 Handlebars를 설치하는 방법이 다양합니다.")]),s._v(" "),t("h2",{attrs:{id:"npm-또는-yarn-권장"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-또는-yarn-권장"}},[s._v("#")]),s._v(" npm 또는 yarn (권장)")]),s._v(" "),t("p",[s._v("Handlebars의 참조 구현은 JavaScript로 작성되어 있습니다. 일반적으로 npm이나 yarn을 사용하여 설치됩니다.：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" handlebars\n")])])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" handlebars\n")])])]),t("p",[s._v("아래처럼 Handlebars를 import하여 사용할 수 있습니다.:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Handlebars "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"handlebars"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Handlebars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name: {{name}}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nils"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("CommonJS 환경에서 Handlebars를 사용하는 경우 require를 사용할 수 있습니다.：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Handlebars "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"handlebars"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Handlebars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name: {{name}}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nils"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("npm이나 yarn을 이용해 Handlebars를 사용하는 것을 권장합니다. 웹 브라우저에서 Handlebars 템플릿을 사용하려면 Webpack,\nBrowserify 또는 Parcel과 같은 빌드 엔진을 사용하는 것이 좋습니다.")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ko/installation/integrations.html"}},[s._v("integrations")]),s._v(" 페이지에는 템플릿을 자동으로 사전 컴파일하거나 다른 방식으로 Handlebars를 사용할 수 있도\n록하는 로더들의 플러그인 목록이 포함되어 있습니다.")],1),s._v(" "),t("p",[t("RouterLink",{staticClass:"button-link",attrs:{to:"/ko/installation/integrations.html"}},[s._v("더 알아보기: 통합")])],1)]),s._v(" "),t("h3",{attrs:{id:"npm-패키지의-브라우저-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-패키지의-브라우저-빌드"}},[s._v("#")]),s._v(" npm 패키지의 브라우저 빌드")]),s._v(" "),t("p",[s._v("브라우저 빌드는 "),t("code",[s._v("node_modules/handlebars/dist/")]),s._v(" 디렉토리에 있습니다. 브라우저에서 이를 사용할 수 있도록 만들려면 사용 중\n인빌드 시스템에 따라 다르지만, 파일을 접근 가능한 위치로 복사하는 것으로 간단히 처리할 수 있습니다.")]),s._v(" "),t("p",[s._v("사전 컴파일러를 사용할 때 이 방법을 사용하는 것이 권장됩니다. 이는 사전 컴파일된 템플릿이 항상 런타임의 동일한 버전에 대\n해실행되도록 보장합니다.")]),s._v(" "),t("h2",{attrs:{id:"handlebars-다운로드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-다운로드"}},[s._v("#")]),s._v(" Handlebars 다운로드")]),s._v(" "),t("p",[s._v("다음 다운로드는 커뮤니티를 위한 편의로 제공됩니다. production 목적으로는 부합하지 않으나, 빌드 엔진을 설정하지 않고도 빠\n르게시작할 수 있습니다.")]),s._v(" "),t("h3",{attrs:{id:"최신-릴리즈-version-handlebarsversions-latest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#최신-릴리즈-version-handlebarsversions-latest"}},[s._v("#")]),s._v(" 최신 릴리즈 （version "+s._s(s.$handlebarsVersions.latest)+"）")]),s._v(" "),t("DownloadHandlebars",[t("p",[s._v("브라우저에서 빠르게 시작해보기 위해서, 이 버전을 quick start로 사용할 수 있습니다.")])]),s._v(" "),t("DownloadHandlebars",{attrs:{runtimeOnly:!0}},[t("p",[s._v("이 버전은 브라우저에서 "),t("RouterLink",{attrs:{to:"/ko/installation/precompilation.html"}},[s._v("사전 컴파일된 템플릿")]),s._v("을 사용할 때 사용하세요. 이 버전에는 컴파일러가 포함되어\n있지 않습니다.")],1)]),s._v(" "),t("h3",{attrs:{id:"릴리즈되지-않은-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#릴리즈되지-않은-빌드"}},[s._v("#")]),s._v(" 릴리즈되지 않은 빌드")]),s._v(" "),t("p",[s._v("Handlebars의 모든 릴리즈된 버전과 CI 빌드는 S3에서 다운로드할 수 있습니다.\n"),t("a",{attrs:{href:"https://s3.amazonaws.com/builds.handlebarsjs.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("build page"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("가장 최근에 통과된 마스터 빌드는 "),t("code",[s._v("handlebars-latest.js")]),s._v("로 명명되며, 마스터 브랜치에서 통과한 SHA는 각각\n"),t("code",[s._v("handlebars-gitSHA.js")]),s._v(" 파일을 생성합니다. 이들은 모두 CI를 통과하지만, 태그된 릴리즈 중 하나를 사용하는 것이 좋습니다.")]),s._v(" "),t("p",[t("strong",[s._v("주의")]),s._v(": 빌드 페이지는 커뮤니티를 위한 편의성을 제공하기 위해 제공되었지만, production에서 Handlebars를 호스팅하는 데사\n용해서는 안 됩니다.")]),s._v(" "),t("h2",{attrs:{id:"cdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdns"}},[s._v("#")]),s._v(" CDNs")]),s._v(" "),t("p",[s._v("Handlebars는 여러 무료 CDN에 호스팅되어 있습니다.")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cdnjs.com/libraries/handlebars.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("cdnjs"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.jsdelivr.com/#!handlebarsjs",target:"_blank",rel:"noopener noreferrer"}},[s._v("jsDelivr"),t("OutboundLink")],1),s._v("。향상된 사용법, 예를 들어\n  "),t("a",{attrs:{href:"https://github.com/jsdelivr/jsdelivr#usage",target:"_blank",rel:"noopener noreferrer"}},[s._v("version aliasing & concocting"),t("OutboundLink")],1),s._v(", 이 가능합니다.")])]),s._v(" "),t("h2",{attrs:{id:"rubygems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubygems"}},[s._v("#")]),s._v(" RubyGems")]),s._v(" "),t("p",[s._v("공식 Handlebars 빌드는 "),t("a",{attrs:{href:"https://rubygems.org/gems/handlebars-source",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://rubygems.org/gems/handlebars-source"),t("OutboundLink")],1),s._v("에서 사용할 수 있습니다.")]),s._v(" "),t("h2",{attrs:{id:"bower-component-composer-jspm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bower-component-composer-jspm"}},[s._v("#")]),s._v(" Bower, Component, Composer, jspm")]),s._v(" "),t("p",[s._v("다른 패키지 관리자를 사용하여 Handlebars를 활성화할 수 있습니다. 예를 들어,")]),s._v(" "),t("ul",[t("li",[s._v("Bower (사용 중지됨)")]),s._v(" "),t("li",[s._v("Component")]),s._v(" "),t("li",[s._v("Composer")]),s._v(" "),t("li",[s._v("jspm")])]),s._v(" "),t("p",[s._v("자세한 사항은 "),t("a",{attrs:{href:"https://github.com/components/handlebars.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/components/handlebars.js"),t("OutboundLink")],1),s._v("를 참고하세요.")]),s._v(" "),t("h2",{attrs:{id:"사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[s._v("#")]),s._v(" 사용법")]),s._v(" "),t("p",[s._v("템플릿을 브라우저로 전달하려면 "),t("code",[s._v("<script>")]),s._v(" 태그에 포함시킬 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entry-template"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/x-handlebars-template"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"handlebars"}},[t("span",{pre:!0,attrs:{class:"xml"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entry"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n      ")]),t("span",{pre:!0,attrs:{class:"hljs-template-variable"}},[s._v("{{"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("title")]),s._v("}}")]),t("span",{pre:!0,attrs:{class:"xml"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"body"')]),s._v(">")]),s._v("\n      ")]),t("span",{pre:!0,attrs:{class:"hljs-template-variable"}},[s._v("{{"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v("}}")]),t("span",{pre:!0,attrs:{class:"xml"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),t("p",[s._v("::: 경고: 항상 템플릿에 스크립트 태그를 사용하세요.")]),s._v(" "),t("p",[s._v("이 방법을 사용하는 경우 템플릿을 "),t("code",[s._v("<script>")]),s._v(" 태그로 감싸야 합니다. 그렇지 않으면 브라우저가 템플릿의 일부를 제거하거나 수\n정할수 있습니다. 다음을 참조하세요.\n"),t("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html#unexpected-markup-in-tables",target:"_blank",rel:"noopener noreferrer"}},[s._v("“Unexpected markup in tables”"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v(":::")]),s._v(" "),t("p",[s._v("Handlebars.compile를 사용하여 JavaScript에서 템플릿을 컴파일하세요.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" source "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"entry-template"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Handlebars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Handlebars 템플릿을 컨텍스트와 함께 실행하여 HTML을 가져옵니다.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" context "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("title")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My New Post"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is my first post!"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" html "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("결과：")]),s._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entry"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("My New Post"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"body"')]),s._v(">")]),s._v("This is my first post!"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])]),t("h3",{attrs:{id:"템플릿-사전-컴파일하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#템플릿-사전-컴파일하기"}},[s._v("#")]),s._v(" 템플릿 사전 컴파일하기")]),s._v(" "),t("p",[s._v("이전 예제에서는 Handlebars의 컴파일러 및 런타임 버전을 로드했습니다. 템플릿을 미리 컴파일하고 웹 사이트에 사전 컴파일된\n버전을 포함하는 것이 훨씬 효율적입니다. 더 작은 런타임을 포함할 수 있으며 브라우저는 템플릿을 실행하기 전에 컴파일할 필\n요가 없습니다.")]),s._v(" "),t("p",[t("RouterLink",{staticClass:"button-link",attrs:{to:"/ko/installation/precompilation.html"}},[s._v("더 알아보기: 사전 컴파일")])],1),s._v(" "),t("h2",{attrs:{id:"bower-사용이-중지되었습니다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bower-사용이-중지되었습니다"}},[s._v("#")]),s._v(" Bower （사용이 중지되었습니다.）")]),s._v(" "),t("p",[s._v("::: 경고")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://bower.io/blog/2017/how-to-migrate-away-from-bower/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bower는 사용이 중지되었습니다"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("현재 Bower 버전의 Handlebars는 여전히 역 호환성을 위해 배포됩니다. 그러나 새 프로젝트를 설정하는 경우 더 이상 사용하지않\n아야 합니다.")]),s._v(" "),t("p",[s._v(":::")]),s._v(" "),t("h2",{attrs:{id:"다른-프로그래밍-언어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#다른-프로그래밍-언어"}},[s._v("#")]),s._v(" 다른 프로그래밍 언어")]),s._v(" "),t("p",[s._v("다양한 프로그래밍 언어에 대한 Handlebars 구현이 있습니다.")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Handlebars-Net/Handlebars.Net",target:"_blank",rel:"noopener noreferrer"}},[s._v(".Net"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jbboehr/handlebars.c",target:"_blank",rel:"noopener noreferrer"}},[s._v("C"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/aymerick/raymond",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/jknack/handlebars.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/zordius/lightncandy",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP (LightnCandy)"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/wbond/pybars3",target:"_blank",rel:"noopener noreferrer"}},[s._v("Python"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cowboyd/handlebars.rb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ruby"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/sunng87/handlebars-rust",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rust"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);