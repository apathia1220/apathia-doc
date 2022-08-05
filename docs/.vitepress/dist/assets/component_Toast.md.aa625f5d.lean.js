import{_ as w,V as f,c as b,a as h,w as B,b as n,d as t,e as A,r as x,o as D}from"./app.12dc3f3c.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:c,withCtx:a,createVNode:e,openBlock:d,createElementBlock:g}=f,l=o("success"),u=o("danger"),i=o("default"),y=o("info"),m=o("warning");function _(s,v){const p=c("BaseButton"),E=c("ClientOnly");return d(),g("div",null,[e(E,null,{default:a(()=>[e(p,{success:"",onClick:s.success},{default:a(()=>[l]),_:1},8,["onClick"]),e(p,{danger:"",onClick:s.danger},{default:a(()=>[u]),_:1},8,["onClick"]),e(p,{default:"",onClick:s.default1},{default:a(()=>[i]),_:1},8,["onClick"]),e(p,{info:"",onClick:s.info},{default:a(()=>[y]),_:1},8,["onClick"]),e(p,{warning:"",onClick:s.warning},{default:a(()=>[m]),_:1},8,["onClick"])]),_:1})])}const{getCurrentInstance:r,defineComponent:C}=f,k=C({setup(){const{proxy:s}=r();return{success:()=>{s.$toast.success("title","subtitle")},info:()=>{s.$toast.info("title","subtitle")},warning:()=>{s.$toast.warning("title","subtitle")},danger:()=>{s.$toast.danger("title","subtitle")},default1:()=>{s.$toast.default("title","subtitle")}}}});return{render:_,...k}}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:c,withCtx:a,createVNode:e,openBlock:d,createElementBlock:g}=f,l=o("\u81EA\u5B9A\u4E49\u6E32\u67D3");function u(r,C){const k=c("BaseButton"),s=c("ClientOnly");return d(),g("div",null,[e(s,null,{default:a(()=>[e(k,{onClick:r.openRender},{default:a(()=>[l]),_:1},8,["onClick"])]),_:1})])}const{getCurrentInstance:i,defineComponent:y,h:m}=f,_=y({setup(){const{proxy:r}=i();return{openRender:()=>{r.$toast({type:"success",duration:0,render:({close:k})=>m("div",{onClick:k},"\u70B9\u6211\u5173\u95ED")})}}}});return{render:u,..._}}()}},z='{"title":"toast","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6E32\u67D3","slug":"\u81EA\u5B9A\u4E49\u6E32\u67D3"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"events","slug":"events"}],"relativePath":"component/Toast.md"}',F=n("h1",{id:"toast",tabindex:"-1"},[t("toast "),n("a",{class:"header-anchor",href:"#toast","aria-hidden":"true"},"#")],-1),V=n("p",null,"\u8F7B\u63D0\u793A",-1),N=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'subtitle'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"info"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'subtitle'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"warning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'subtitle'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"danger"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"danger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'subtitle'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"default1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),t("$toast"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'subtitle'"),n("span",{class:"token punctuation"},")"),t(`
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
`)])])],-1),R=n("h2",{id:"\u81EA\u5B9A\u4E49\u6E32\u67D3",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6E32\u67D3 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6E32\u67D3","aria-hidden":"true"},"#")],-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openRender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u6E32\u67D3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"openRender"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      proxy`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$toast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" close "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"onClick"),n("span",{class:"token operator"},":"),t(" close "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'\u70B9\u6211\u5173\u95ED'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      openRender`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=A('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td style="text-align:center;">info\u3001warning\u3001danger\u3001success\u3001default</td><td style="text-align:right;">string</td><td style="text-align:right;">default</td></tr><tr><td>duration</td><td style="text-align:center;">toast \u5EF6\u8FDF\u591A\u5C11\u6BEB\u79D2\u5173\u95ED(0 \u5219\u4E3A\u4E0D\u81EA\u52A8\u5173\u95ED)</td><td style="text-align:right;">number</td><td style="text-align:right;">3000</td></tr><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>message</td><td style="text-align:center;">\u5185\u5BB9</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>iconClass</td><td style="text-align:center;">\u5DE6\u4FA7 iconClass</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>showIcon</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u5DE6\u4FA7 icon</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>showClose</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u5220\u9664\u6309\u94AE(duration \u4E3A 0 \u65F6\u624D\u4F1A\u51FA\u73B0\u5173\u95ED icon)</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>render</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u6E32\u67D3</td><td style="text-align:right;">function</td><td style="text-align:right;">({close})=&gt;Node</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><blockquote><p>close: toast\u5173\u95ED\u65F6\u89E6\u53D1</p></blockquote>',4);function T(o,c,a,e,d,g){const l=x("render-demo-0"),u=x("demo"),i=x("render-demo-1");return D(),b("div",null,[F,V,N,h(u,{sourceCode:`<template><ClientOnly>
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
      proxy.$toast.success('title', 'subtitle')
    }
    const info = () => {
      proxy.$toast.info('title', 'subtitle')
    }
    const warning = () => {
      proxy.$toast.warning('title', 'subtitle')
    }
    const danger = () => {
      proxy.$toast.danger('title', 'subtitle')
    }
    const default1 = () => {
      proxy.$toast.default('title', 'subtitle')
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
`},{highlight:B(()=>[I]),default:B(()=>[h(l)]),_:1}),R,h(u,{sourceCode:`<template><ClientOnly>
  <BaseButton @click="openRender">\u81EA\u5B9A\u4E49\u6E32\u67D3</BaseButton>
</ClientOnly></template>

<script>
import { getCurrentInstance, defineComponent, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const openRender = () => {
      proxy.$toast({
        type: 'success',
        duration: 0,
        render: ({ close }) => h('div', { onClick: close }, '\u70B9\u6211\u5173\u95ED'),
      })
    }

    return {
      openRender,
    }
  },
})
<\/script>
`},{highlight:B(()=>[q]),default:B(()=>[h(i)]),_:1}),O])}var G=w($,[["render",T]]);export{z as __pageData,G as default};
