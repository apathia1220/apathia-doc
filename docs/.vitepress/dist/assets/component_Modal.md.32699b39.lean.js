import{_ as A,V as m,c as y,a as B,w as g,e as v,b as n,d as t,r as f,o as x}from"./app.722003d5.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:k,resolveComponent:u,withCtx:e,createVNode:o,createElementVNode:C,openBlock:h,createElementBlock:d}=m,i=k(" \u6211\u4EEC\u7684\u5B64\u72EC\u5C31\u50CF\u5929\u7A7A\u4E2D\u6F02\u6D6E\u7684\u57CE\u5E02\uFF0C\u4EFF\u4F5B\u662F\u4E00\u4E2A\u79D8\u5BC6\uFF0C\u5374\u65E0\u4ECE\u8FF0\u8BF4\u3002 "),F=k("\u57FA\u672C\u7528\u6CD5");function E(l,s){const a=u("Modal"),c=u("BaseButton"),p=u("ClientOnly");return h(),d("div",null,[o(p,null,{default:e(()=>[C("div",null,[o(a,{modelValue:l.show,"onUpdate:modelValue":s[0]||(s[0]=D=>l.show=D),title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[i]),_:1},8,["modelValue"]),o(c,{onClick:l.showModal},{default:e(()=>[F]),_:1},8,["onClick"])])]),_:1})])}const{ref:r}=m;return{render:E,...{setup(l,{expose:s}){s();const a=r(!1),p={show:a,showModal:()=>{a.value=!0},ref:r};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}}}(),"render-demo-1":function(){const{createTextVNode:k,resolveComponent:u,withCtx:e,createVNode:o,createElementVNode:C,openBlock:h,createElementBlock:d}=m,i=k(" \u5728\u4E24\u4E2A\u4EBA\u7684\u4E16\u754C\u91CC\uFF0C\u7BA1\u4ED6\u7684\u98CE\u96E8\u96F7\u7535\u98DE\u6C99\u8D70\u77F3\u5929\u5D29\u5730\u88C2\uFF0C\u53EA\u8981\u80FD\u5728\u4E00\u8D77\u5C31\u8DB3\u591F\u4E86\u3002 "),F=k("\u81EA\u5B9A\u4E49\u5BBD\u5EA6");function E(l,s){const a=u("Modal"),c=u("BaseButton"),p=u("ClientOnly");return h(),d("div",null,[o(p,null,{default:e(()=>[C("div",null,[o(a,{modelValue:l.show,"onUpdate:modelValue":s[0]||(s[0]=D=>l.show=D),title:"\u57FA\u7840\u7528\u6CD5",width:"400px"},{default:e(()=>[i]),_:1},8,["modelValue"]),o(c,{onClick:l.showModal},{default:e(()=>[F]),_:1},8,["onClick"])])]),_:1})])}const{ref:r}=m;return{render:E,...{setup(l,{expose:s}){s();const a=r(!1),p={show:a,showModal:()=>{a.value=!0},ref:r};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}}}(),"render-demo-2":function(){const{createTextVNode:k,resolveComponent:u,withCtx:e,createVNode:o,createElementVNode:C,openBlock:h,createElementBlock:d}=m,i=k(" \u5F53\u966A\u4F60\u7684\u4EBA\u8981\u4E0B\u8F66\u65F6\uFF0C\u5373\u4F7F\u4E0D\u820D\uFF0C\u4E5F\u8BE5\u5FC3\u5B58\u611F\u6FC0\uFF0C\u7136\u540E\u6325\u624B\u9053\u522B\u3002 "),F=k("\u70B9\u51FB\u8499\u5C42\u5173\u95ED");function E(s,a){const c=u("Modal"),p=u("BaseButton"),D=u("ClientOnly");return h(),d("div",null,[o(D,null,{default:e(()=>[C("div",null,[o(c,{modelValue:s.show,"onUpdate:modelValue":a[0]||(a[0]=w=>s.show=w),title:"\u57FA\u7840\u7528\u6CD5","mask-closable":""},{default:e(()=>[i]),_:1},8,["modelValue"]),o(p,{onClick:s.showModal},{default:e(()=>[F]),_:1},8,["onClick"])])]),_:1})])}const{ref:r,defineComponent:_}=m;return{render:E,...{setup(s,{expose:a}){a();const c=r(!1),D={show:c,showModal:()=>{c.value=!0},ref:r,defineComponent:_};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}}}(),"render-demo-3":function(){const{createTextVNode:k,resolveComponent:u,withCtx:e,createVNode:o,createElementVNode:C,openBlock:h,createElementBlock:d}=m,i=k("\u51FD\u6570\u8C03\u7528");function F(s,a){const c=u("BaseButton"),p=u("ClientOnly");return h(),d("div",null,[o(p,null,{default:e(()=>[C("div",null,[o(c,{onClick:s.showModalFn},{default:e(()=>[i]),_:1},8,["onClick"])])]),_:1})])}const{defineComponent:E,getCurrentInstance:r,h:_}=m,l=E({setup(){const{proxy:s}=r(),{modal:a,remove:c}=s.useModal();return{showModalFn:()=>{a({title:"\u51FD\u6570\u5F0F\u8C03\u7528",render:()=>_("div","\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002")})}}}});return{render:F,...l}}(),"render-demo-4":function(){const{createTextVNode:k,resolveComponent:u,withCtx:e,createVNode:o,openBlock:C,createElementBlock:h}=m,d=k("\u5D4C\u5957\u4F7F\u7528");function i(l,s){const a=u("BaseButton"),c=u("ClientOnly");return C(),h("div",null,[o(c,null,{default:e(()=>[o(a,{onClick:l.showModalFn1},{default:e(()=>[d]),_:1},8,["onClick"])]),_:1})])}const{defineComponent:F,getCurrentInstance:E,h:r}=m,_=F({setup(){const{proxy:l}=E(),{modal:s,remove:a}=l.useModal(),c=()=>{s({title:"\u51FD\u6570\u5F0F\u8C03\u7528 - \u5185\u5C42",render:()=>r("div","\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002")})};return{showModalFn1:()=>{s({title:"\u51FD\u6570\u5F0F\u8C03\u7528 - \u5916\u5C42",width:700,render:()=>r("div",{onClick:c},"\u70B9\u51FB\u6253\u5F00\u4E8C\u7EA7modal")})}}}});return{render:i,..._}}()}},L='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"template\u7528\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"template\u7528\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5BBD\u5EA6","slug":"\u81EA\u5B9A\u4E49\u5BBD\u5EA6"},{"level":3,"title":"\u795E\u5947\u7684\u5173\u95ED","slug":"\u795E\u5947\u7684\u5173\u95ED"},{"level":2,"title":"function","slug":"function"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5 | function","slug":"\u57FA\u7840\u7528\u6CD5-function"},{"level":3,"title":"\u5D4C\u5957\u4F7F\u7528","slug":"\u5D4C\u5957\u4F7F\u7528"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"events","slug":"events"}],"relativePath":"component/Modal.md"}',b=v('<h1 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h1><p>\u6A21\u6001\u7A97</p><h2 id="template\u7528\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">template\u7528\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#template\u7528\u6CD5\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>modal \u6A21\u6001\u7A97\u7EC4\u4EF6\u63A8\u8350\u4F7F\u7528 function \u65B9\u5F0F.\u6709\u76CA\u4E8E\u903B\u8F91\u62BD\u79BB\u548C\u540E\u7EED\u7EF4\u62A4\u3002</p></div><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      \u6211\u4EEC\u7684\u5B64\u72EC\u5C31\u50CF\u5929\u7A7A\u4E2D\u6F02\u6D6E\u7684\u57CE\u5E02\uFF0C\u4EFF\u4F5B\u662F\u4E00\u4E2A\u79D8\u5BC6\uFF0C\u5374\u65E0\u4ECE\u8FF0\u8BF4\u3002
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Modal")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u57FA\u672C\u7528\u6CD5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),N=n("h3",{id:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5BBD\u5EA6 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5BBD\u5EA6","aria-hidden":"true"},"#")],-1),O=n("p",null,"width \u8BBE\u7F6E\u5BBD\u5EA6",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("400px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      \u5728\u4E24\u4E2A\u4EBA\u7684\u4E16\u754C\u91CC\uFF0C\u7BA1\u4ED6\u7684\u98CE\u96E8\u96F7\u7535\u98DE\u6C99\u8D70\u77F3\u5929\u5D29\u5730\u88C2\uFF0C\u53EA\u8981\u80FD\u5728\u4E00\u8D77\u5C31\u8DB3\u591F\u4E86\u3002
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Modal")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u5BBD\u5EA6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u795E\u5947\u7684\u5173\u95ED",tabindex:"-1"},[t("\u795E\u5947\u7684\u5173\u95ED "),n("a",{class:"header-anchor",href:"#\u795E\u5947\u7684\u5173\u95ED","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u70B9\u51FB\u8499\u5C42\u5173\u95ED maskClosable \u548C 'esc'\u5173\u95ED\u5F39\u7A97(\u9ED8\u8BA4)",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Modal")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("show"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"mask-closable"),n("span",{class:"token punctuation"},">")]),t(`
      \u5F53\u966A\u4F60\u7684\u4EBA\u8981\u4E0B\u8F66\u65F6\uFF0C\u5373\u4F7F\u4E0D\u820D\uFF0C\u4E5F\u8BE5\u5FC3\u5B58\u611F\u6FC0\uFF0C\u7136\u540E\u6325\u624B\u9053\u522B\u3002
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Modal")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u70B9\u51FB\u8499\u5C42\u5173\u95ED"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"const"),t(" show "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  show`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h2",{id:"function",tabindex:"-1"},[t("function "),n("a",{class:"header-anchor",href:"#function","aria-hidden":"true"},"#")],-1),P=n("h3",{id:"\u57FA\u7840\u7528\u6CD5-function",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 | function "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5-function","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u51FD\u6570\u5F0F\u8C03\u7528\u6A21\u6001\u7A97\u7684\u57FA\u7840\u7528\u6CD5",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModalFn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u51FD\u6570\u8C03\u7528"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" modal"),n("span",{class:"token punctuation"},","),t(" remove "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" proxy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModalFn"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"modal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u51FD\u6570\u5F0F\u8C03\u7528'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
            `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token string"},"'\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showModalFn`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u5D4C\u5957\u4F7F\u7528",tabindex:"-1"},[t("\u5D4C\u5957\u4F7F\u7528 "),n("a",{class:"header-anchor",href:"#\u5D4C\u5957\u4F7F\u7528","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModalFn1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5D4C\u5957\u4F7F\u7528"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" modal"),n("span",{class:"token punctuation"},","),t(" remove "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" proxy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"useModal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModalFn"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"modal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u51FD\u6570\u5F0F\u8C03\u7528 - \u5185\u5C42'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
            `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token string"},"'\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModalFn1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"modal"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u51FD\u6570\u5F0F\u8C03\u7528 - \u5916\u5C42'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"700"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"onClick"),n("span",{class:"token operator"},":"),t(" showModalFn "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u70B9\u51FB\u6253\u5F00\u4E8C\u7EA7modal'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showModalFn1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=v('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>subTitle</td><td style="text-align:center;">\u526F\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>top</td><td style="text-align:center;">\u8DDD\u79BB\u9875\u9762\u9876\u90E8\u8DDD\u79BB</td><td style="text-align:right;">number,string</td><td style="text-align:right;">60(px)</td></tr><tr><td>width</td><td style="text-align:center;">\u6A21\u6001\u7A97\u5BBD\u5EA6</td><td style="text-align:right;">number,string</td><td style="text-align:right;">640(px)</td></tr><tr><td>showClose</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>maskClosable</td><td style="text-align:center;">\u662F\u5426\u53EF\u4EE5\u70B9\u51FB\u8499\u5C42\u5173\u95ED</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>keyboard</td><td style="text-align:center;">\u662F\u5426\u53EF\u4EE5\u901A\u8FC7 Esc \u6309\u952E\u5173\u95ED</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>beforeClose</td><td style="text-align:center;">\u5173\u95ED\u524D\u6821\u9A8C</td><td style="text-align:right;">function: () =&gt; bool.bool \u4E3Atrue\u5219\u5173\u95ED\uFF0C\u5426\u5219\u963B\u6B62\u5173\u95ED</td><td style="text-align:right;">() =&gt; true</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><blockquote><p>close: \u5173\u95ED\u65F6\u89E6\u53D1\u3002\u65E0\u53C2\u6570</p></blockquote>',4);function J(k,u,e,o,C,h){const d=f("render-demo-0"),i=f("demo"),F=f("render-demo-1"),E=f("render-demo-2"),r=f("render-demo-3"),_=f("render-demo-4");return x(),y("div",null,[b,B(i,{sourceCode:`<template><ClientOnly>
  <div>
    <Modal v-model="show" title="\u57FA\u7840\u7528\u6CD5">
      \u6211\u4EEC\u7684\u5B64\u72EC\u5C31\u50CF\u5929\u7A7A\u4E2D\u6F02\u6D6E\u7684\u57CE\u5E02\uFF0C\u4EFF\u4F5B\u662F\u4E00\u4E2A\u79D8\u5BC6\uFF0C\u5374\u65E0\u4ECE\u8FF0\u8BF4\u3002
    </Modal>
    <BaseButton @click="showModal">\u57FA\u672C\u7528\u6CD5</BaseButton>
  </div>
</ClientOnly></template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
<\/script>
`},{highlight:g(()=>[V]),default:g(()=>[B(d)]),_:1}),N,O,B(i,{sourceCode:`<template><ClientOnly>
  <div>
    <Modal v-model="show" title="\u57FA\u7840\u7528\u6CD5" width="400px">
      \u5728\u4E24\u4E2A\u4EBA\u7684\u4E16\u754C\u91CC\uFF0C\u7BA1\u4ED6\u7684\u98CE\u96E8\u96F7\u7535\u98DE\u6C99\u8D70\u77F3\u5929\u5D29\u5730\u88C2\uFF0C\u53EA\u8981\u80FD\u5728\u4E00\u8D77\u5C31\u8DB3\u591F\u4E86\u3002
    </Modal>
    <BaseButton @click="showModal">\u81EA\u5B9A\u4E49\u5BBD\u5EA6</BaseButton>
  </div>
</ClientOnly></template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
<\/script>
`},{highlight:g(()=>[q]),default:g(()=>[B(F)]),_:1}),T,I,B(i,{sourceCode:`<template><ClientOnly>
  <div>
    <Modal v-model="show" title="\u57FA\u7840\u7528\u6CD5" mask-closable>
      \u5F53\u966A\u4F60\u7684\u4EBA\u8981\u4E0B\u8F66\u65F6\uFF0C\u5373\u4F7F\u4E0D\u820D\uFF0C\u4E5F\u8BE5\u5FC3\u5B58\u611F\u6FC0\uFF0C\u7136\u540E\u6325\u624B\u9053\u522B\u3002
    </Modal>
    <BaseButton @click="showModal">\u70B9\u51FB\u8499\u5C42\u5173\u95ED</BaseButton>
  </div>
</ClientOnly></template>

<script setup>
import { ref, defineComponent } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
<\/script>
`},{highlight:g(()=>[j]),default:g(()=>[B(E)]),_:1}),S,P,$,B(i,{sourceCode:`<template><ClientOnly>
  <div>
    <BaseButton @click="showModalFn">\u51FD\u6570\u8C03\u7528</BaseButton>
  </div>
</ClientOnly></template>

<script>
import { defineComponent, getCurrentInstance, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { modal, remove } = proxy.useModal()

    const showModalFn = () => {
      modal({
        title: '\u51FD\u6570\u5F0F\u8C03\u7528',
        render: () =>
          h(
            'div',
            '\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002',
          ),
      })
    }
    return {
      showModalFn,
    }
  },
})
<\/script>
`},{highlight:g(()=>[U]),default:g(()=>[B(r)]),_:1}),z,B(i,{sourceCode:`<template><ClientOnly>
  <BaseButton @click="showModalFn1">\u5D4C\u5957\u4F7F\u7528</BaseButton>
</ClientOnly></template>

<script>
import { defineComponent, getCurrentInstance, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { modal, remove } = proxy.useModal()

    const showModalFn = () => {
      modal({
        title: '\u51FD\u6570\u5F0F\u8C03\u7528 - \u5185\u5C42',
        render: () =>
          h(
            'div',
            '\u4E00\u4E2A\u4EBA\u7684\u65F6\u5019\uFF0C\u600E\u4E48\u8FC7\uFF1F\u5C31\u7B97\u518D\u96BE\u4EE5\u627F\u53D7\uFF0C\u5176\u5B9E\u5230\u6700\u540E\u6211\u4EEC\u603B\u80FD\u8D70\u5F97\u8FC7\u6765\u3002',
          ),
      })
    }

    const showModalFn1 = () => {
      modal({
        title: '\u51FD\u6570\u5F0F\u8C03\u7528 - \u5916\u5C42',
        width: 700,
        render: () => h('div', { onClick: showModalFn }, '\u70B9\u51FB\u6253\u5F00\u4E8C\u7EA7modal'),
      })
    }
    return {
      showModalFn1,
    }
  },
})
<\/script>
`},{highlight:g(()=>[G]),default:g(()=>[B(_)]),_:1}),H])}var Q=A(M,[["render",J]]);export{L as __pageData,Q as default};
