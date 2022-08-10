import{_ as v,V as m,c as b,a as h,w as y,d as n,e as t,b as D,r as w,o as $}from"./app.409598d1.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:u,resolveComponent:p,withCtx:a,createVNode:o,openBlock:f,createElementBlock:C}=m,r=u("\u70B9\u51FB\u5F39\u51FA"),l=u("danger");function k(g,E){const c=p("BaseButton"),s=p("ClientOnly");return f(),C("div",null,[o(s,null,{default:a(()=>[o(c,{onClick:g.open},{default:a(()=>[r]),_:1},8,["onClick"]),o(c,{onClick:g.openVn},{default:a(()=>[l]),_:1},8,["onClick"])]),_:1})])}const{getCurrentInstance:i,h:d}=m;return{render:k,...{setup(g,{expose:E}){E();const{proxy:c}=i(),e={proxy:c,open:()=>{c.$toast.info("","toast message")},openVn:()=>{c.$toast({type:"info",render:({close:B})=>d("div",{onClick:B},[d("span",null,"VNode")])})},getCurrentInstance:i,h:d};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}}}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:p,withCtx:a,createVNode:o,openBlock:f,createElementBlock:C}=m,r=u("success"),l=u("danger"),k=u("default"),i=u("info"),d=u("warning");function F(s,_){const e=p("BaseButton"),B=p("ClientOnly");return f(),C("div",null,[o(B,null,{default:a(()=>[o(e,{success:"",onClick:s.success},{default:a(()=>[r]),_:1},8,["onClick"]),o(e,{danger:"",onClick:s.danger},{default:a(()=>[l]),_:1},8,["onClick"]),o(e,{default:"",onClick:s.default1},{default:a(()=>[k]),_:1},8,["onClick"]),o(e,{info:"",onClick:s.info},{default:a(()=>[i]),_:1},8,["onClick"]),o(e,{warning:"",onClick:s.warning},{default:a(()=>[d]),_:1},8,["onClick"])]),_:1})])}const{getCurrentInstance:g,defineComponent:E}=m,c=E({setup(){const{proxy:s}=g();return{success:()=>{s.$toast({type:"success",title:"title",message:"message"})},info:()=>{s.$toast.info("title","message")},warning:()=>{s.$toast.warning("title","message")},danger:()=>{s.$toast.danger("title","message")},default1:()=>{s.$toast.default("title","message")}}}});return{render:F,...c}}(),"render-demo-2":function(){const{createTextVNode:u,resolveComponent:p,withCtx:a,createVNode:o,openBlock:f,createElementBlock:C}=m,r=u("success"),l=u("danger"),k=u("default"),i=u("info"),d=u("warning");function F(s,_){const e=p("BaseButton"),B=p("ClientOnly");return f(),C("div",null,[o(B,null,{default:a(()=>[o(e,{success:"",onClick:s.success},{default:a(()=>[r]),_:1},8,["onClick"]),o(e,{danger:"",onClick:s.danger},{default:a(()=>[l]),_:1},8,["onClick"]),o(e,{default:"",onClick:s.default1},{default:a(()=>[k]),_:1},8,["onClick"]),o(e,{info:"",onClick:s.info},{default:a(()=>[i]),_:1},8,["onClick"]),o(e,{warning:"",onClick:s.warning},{default:a(()=>[d]),_:1},8,["onClick"])]),_:1})])}const{getCurrentInstance:g,defineComponent:E}=m,c=E({setup(){const{proxy:s}=g();return{success:()=>{s.$toast({type:"success",title:"title",message:"message",showClose:!0})},info:()=>{s.$toast.info("title","message",{showClose:!0})},warning:()=>{s.$toast.warning("title","message",{showClose:!0})},danger:()=>{s.$toast.danger("title","message",{showClose:!0})},default1:()=>{s.$toast.default("title","message",{showClose:!0})}}}});return{render:F,...c}}()}},Q='{"title":"Toast \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u4E0D\u540C\u72B6\u6001","slug":"\u4E0D\u540C\u72B6\u6001"},{"level":2,"title":"\u53EF\u5173\u95ED\u7684\u63D0\u9192","slug":"\u53EF\u5173\u95ED\u7684\u63D0\u9192"},{"level":2,"title":"\u5168\u5C40\u65B9\u6CD5","slug":"\u5168\u5C40\u65B9\u6CD5"},{"level":2,"title":"\u5355\u72EC\u5F15\u7528","slug":"\u5355\u72EC\u5F15\u7528"},{"level":2,"title":"Toast Props","slug":"toast-props"},{"level":2,"title":"Toast \u65B9\u6CD5","slug":"toast-\u65B9\u6CD5"}],"relativePath":"component/Toast.md"}',N=n("h1",{id:"toast-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},[t("Toast \u6D88\u606F\u63D0\u793A "),n("a",{class:"header-anchor",href:"#toast-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002",-1),T=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),q=n("p",null,"\u4ECE\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),O=n("blockquote",null,[n("p",null,"\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A VNode \u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u4F1A\u88AB\u663E\u793A\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u70B9\u51FB\u5F39\u51FA"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openVn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("danger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t("proxy"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'toast message'"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"openVn"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  proxy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$toast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" close "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"onClick"),n("span",{class:"token operator"},":"),t(" close "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'span'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'VNode'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h2",{id:"\u4E0D\u540C\u72B6\u6001",tabindex:"-1"},[t("\u4E0D\u540C\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u4E0D\u540C\u72B6\u6001","aria-hidden":"true"},"#")],-1),S=n("p",null,"\u7528\u6765\u663E\u793A\u300C\u6210\u529F\u3001\u8B66\u544A\u3001\u6D88\u606F\u3001\u9519\u8BEF\u300D\u7C7B\u7684\u64CD\u4F5C\u53CD\u9988\u3002",-1),z=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"Types"),n("p",null,"\u5F53\u9700\u8981\u81EA\u5B9A\u4E49\u66F4\u591A\u5C5E\u6027\u65F6\uFF0Ctoast \u4E5F\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4E3A\u53C2\u6570\u3002 \u6BD4\u5982\uFF0C\u8BBE\u7F6E type \u5B57\u6BB5\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u72B6\u6001\u3002 \u6B64\u65F6\u6B63\u6587\u5185\u5BB9\u4EE5 toast \u7684\u503C\u4F20\u5165\u3002 \u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u4E3A toast \u7684\u5404\u79CD type \u6CE8\u518C\u4E86\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E0D\u4F20\u5165 type \u5B57\u6BB5\u7684\u60C5\u51B5\u4E0B\u76F4\u63A5\u901A\u8FC7\u5C5E\u6027\u65B9\u6CD5\u8C03\u7528\u3002")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"success"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"danger"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("danger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"default"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("default1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"info"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"warning"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"success"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$toast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'message'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"info"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"warning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"danger"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"danger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"default1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      success`),n("span",{class:"token punctuation"},","),t(`
      info`),n("span",{class:"token punctuation"},","),t(`
      warning`),n("span",{class:"token punctuation"},","),t(`
      danger`),n("span",{class:"token punctuation"},","),t(`
      default1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=D('<h2 id="\u53EF\u5173\u95ED\u7684\u63D0\u9192" tabindex="-1">\u53EF\u5173\u95ED\u7684\u63D0\u9192 <a class="header-anchor" href="#\u53EF\u5173\u95ED\u7684\u63D0\u9192" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u6DFB\u52A0\u5173\u95ED\u6309\u94AE\u3002</p><div class="tip custom-block"><p class="custom-block-title">closeable</p><p>\u9ED8\u8BA4\u4E0D\u53EF\u4EE5\u88AB\u4EBA\u5DE5\u5173\u95ED\u7684\u3002 \u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5173\u95ED\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u628A<code>showClose</code>\u8BBE\u7F6E\u4E3A true \u6B64\u5916\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4 <code>duration</code>\uFF0C \u9ED8\u8BA4\u7684\u5173\u95ED\u65F6\u95F4\u4E3A<code>3000</code>\u6BEB\u79D2\uFF0C\u5F53\u628A\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u8BBE\u7F6E\u4E3A<code>0</code>\u4FBF\u8868\u793A\u8BE5\u6D88\u606F\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED\u3002</p></div>',3),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"success"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"danger"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("danger"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"default"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("default1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"info"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"warning"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"success"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$toast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"info"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"warning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"danger"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"danger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"default1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'message'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      success`),n("span",{class:"token punctuation"},","),t(`
      info`),n("span",{class:"token punctuation"},","),t(`
      warning`),n("span",{class:"token punctuation"},","),t(`
      danger`),n("span",{class:"token punctuation"},","),t(`
      default1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=D(`<h2 id="\u5168\u5C40\u65B9\u6CD5" tabindex="-1">\u5168\u5C40\u65B9\u6CD5 <a class="header-anchor" href="#\u5168\u5C40\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u901A\u8FC7\u6CE8\u518C\u5168\u5C40\u65B9\u6CD5\u7684\u5F62\u5F0F\u6CE8\u518C<code>toast</code>, \u7136\u540E\u5C31\u53EF\u4EE5\u5728 vue \u5B9E\u4F8B\u4E2D\u4F7F\u7528 toast</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toastInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@apathia/apathia&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>toastInstall<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5355\u72EC\u5F15\u7528" tabindex="-1">\u5355\u72EC\u5F15\u7528 <a class="header-anchor" href="#\u5355\u72EC\u5F15\u7528" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@apathia/apathia&#39;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">\u4F7F\u7528\u65B9\u5F0F</p><p>\u6B64\u65F6\u8C03\u7528\u65B9\u6CD5\u4E3A toast(options)\u3002 \u6211\u4EEC\u4E5F\u4E3A\u6BCF\u4E2A type \u5B9A\u4E49\u4E86\u5404\u81EA\u7684\u65B9\u6CD5\uFF0C\u5982 toast.success(options)\u3002 \u5E76\u4E14\u53EF\u4EE5\u8C03\u7528 toast.closeAll() \u624B\u52A8\u5173\u95ED\u6240\u6709\u5B9E\u4F8B\u3002</p></div><h2 id="toast-props" tabindex="-1">Toast Props <a class="header-anchor" href="#toast-props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td style="text-align:center;">info\u3001warning\u3001danger\u3001success\u3001default</td><td style="text-align:right;">string</td><td style="text-align:right;">default</td></tr><tr><td>duration</td><td style="text-align:center;">toast \u5EF6\u8FDF\u591A\u5C11\u6BEB\u79D2\u5173\u95ED(0 \u5219\u4E3A\u4E0D\u81EA\u52A8\u5173\u95ED)</td><td style="text-align:right;">number</td><td style="text-align:right;">3000</td></tr><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>message</td><td style="text-align:center;">\u5185\u5BB9</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>iconClass</td><td style="text-align:center;">\u5DE6\u4FA7 iconClass</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>showIcon</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u5DE6\u4FA7 icon</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>showClose</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u5220\u9664\u6309\u94AE(duration \u4E3A 0 \u65F6\u624D\u4F1A\u51FA\u73B0\u5173\u95ED icon)</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>render</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u6E32\u67D3</td><td style="text-align:right;">function</td><td style="text-align:right;">({close})=&gt;Node</td></tr></tbody></table><h2 id="toast-\u65B9\u6CD5" tabindex="-1">Toast \u65B9\u6CD5 <a class="header-anchor" href="#toast-\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>close: toast\u5173\u95ED\u65F6\u89E6\u53D1</p></blockquote>`,10);function L(u,p,a,o,f,C){const r=w("render-demo-0"),l=w("demo"),k=w("render-demo-1"),i=w("render-demo-2");return $(),b("div",null,[N,I,T,q,O,h(l,{sourceCode:`<template><ClientOnly>
  <BaseButton @click="open">\u70B9\u51FB\u5F39\u51FA</BaseButton>
  <BaseButton @click="openVn">danger</BaseButton>
</ClientOnly></template>

<script setup>
import { getCurrentInstance, h } from 'vue'
const {proxy} = getCurrentInstance()
const open = () => {
  proxy.$toast.info('', 'toast message')
}
const openVn = () => {
  proxy.$toast({
    type: 'info',
    render: ({ close }) => h('div', { onClick: close }, [
      h('span', null, 'VNode')
    ])
  })
}
<\/script>
`},{highlight:y(()=>[j]),default:y(()=>[h(r)]),_:1}),P,S,z,h(l,{sourceCode:`<template><ClientOnly>
  <BaseButton success @click="success">success</BaseButton>
  <BaseButton danger @click="danger">danger</BaseButton>
  <BaseButton default @click="default1">default</BaseButton>
  <BaseButton info @click="info">info</BaseButton>
  <BaseButton warning @click="warning">warning</BaseButton>
</ClientOnly></template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const success = () => {
      proxy.$toast({
        type: 'success',
        title: 'title',
        message: 'message'
      })
    }
    const info = () => {
      proxy.$toast.info('title', 'message')
    }
    const warning = () => {
      proxy.$toast.warning('title', 'message')
    }
    const danger = () => {
      proxy.$toast.danger('title', 'message')
    }
    const default1 = () => {
      proxy.$toast.default('title', 'message')
    }
    return {
      success,
      info,
      warning,
      danger,
      default1,
    }
  },
})
<\/script>
`},{highlight:y(()=>[G]),default:y(()=>[h(k)]),_:1}),H,h(l,{sourceCode:`<template><ClientOnly>
  <BaseButton success @click="success">success</BaseButton>
  <BaseButton danger @click="danger">danger</BaseButton>
  <BaseButton default @click="default1">default</BaseButton>
  <BaseButton info @click="info">info</BaseButton>
  <BaseButton warning @click="warning">warning</BaseButton>
</ClientOnly></template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const success = () => {
      proxy.$toast({
        type: 'success',
        title: 'title',
        message: 'message',
        showClose: true
      })
    }
    const info = () => {
      proxy.$toast.info('title', 'message', { showClose: true })
    }
    const warning = () => {
      proxy.$toast.warning('title', 'message', { showClose: true })
    }
    const danger = () => {
      proxy.$toast.danger('title', 'message', { showClose: true })
    }
    const default1 = () => {
      proxy.$toast.default('title', 'message', { showClose: true })
    }
    return {
      success,
      info,
      warning,
      danger,
      default1,
    }
  },
})
<\/script>
`},{highlight:y(()=>[J]),default:y(()=>[h(i)]),_:1}),K])}var R=v(V,[["render",L]]);export{Q as __pageData,R as default};
