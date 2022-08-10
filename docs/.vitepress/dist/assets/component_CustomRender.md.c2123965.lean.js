import{_ as f,c as y,a as d,w as m,b as D,d as n,e as t,r as B,o as R,V as E}from"./app.409598d1.js";const x={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,withCtx:r,openBlock:u,createElementBlock:o}=E;function c(p,l){const a=e("CustomRender"),k=e("ClientOnly");return u(),o("div",null,[s(k,null,{default:r(()=>[s(a,{render:"h1 \u6807\u7B7E\u6E32\u67D3",as:"h1"}),s(a,{render:"h2 \u6807\u7B7E\u6E32\u67D3",as:"h2"}),s(a,{render:"span \u6807\u7B7E\u6E32\u67D3",as:"span"}),s(a,{render:"div \u6807\u7B7E\u6E32\u67D3",as:"div"})]),_:1})])}return{render:c,...{}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,withCtx:r,openBlock:u,createElementBlock:o}=E;function c(l,a){const k=e("CustomRender"),h=e("ClientOnly");return u(),o("div",null,[s(h,null,{default:r(()=>[s(k,{render:l.titleRender,custom:"custom render"},null,8,["render"])]),_:1})])}const{h:i}=E;return{render:c,...{setup(){return{titleRender:({custom:a})=>i("h1",{},`\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570 - \u53C2\u6570\u4E3A\uFF1A${a}`)}}}}}(),"render-demo-2":function(){const{toDisplayString:e,createElementVNode:s,createTextVNode:r,resolveComponent:u,withCtx:o,createVNode:c,openBlock:i,createElementBlock:p}=E,l=r("\u70B9\u6211 +1");function a(C,F){const _=u("CustomRender"),g=u("ClientOnly");return i(),p("div",null,[c(g,null,{default:o(()=>[s("div",null,e(C.count),1),c(_,{as:C.BaseButton,primary:"",small:"",onClick:C.handleClick},{default:o(()=>[l]),_:1},8,["as","onClick"])]),_:1})])}const{getCurrentInstance:k,ref:h}=E;return{render:a,...{setup(C,{expose:F}){F();const{root:_}=k(),{BaseButton:g}=_.appContext.components,v=h(0),A={root:_,BaseButton:g,count:v,handleClick:()=>{v.value+=1},getCurrentInstance:k,ref:h};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}}}()}},H='{"title":"CustomRender \u81EA\u5B9A\u4E49\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49 render \u51FD\u6570","slug":"\u81EA\u5B9A\u4E49-render-\u51FD\u6570"},{"level":2,"title":"\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6","slug":"\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"slots","slug":"slots"}],"relativePath":"component/CustomRender.md"}',b=D('<h1 id="customrender-\u81EA\u5B9A\u4E49\u6E32\u67D3" tabindex="-1">CustomRender \u81EA\u5B9A\u4E49\u6E32\u67D3 <a class="header-anchor" href="#customrender-\u81EA\u5B9A\u4E49\u6E32\u67D3" aria-hidden="true">#</a></h1><p>\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6E32\u67D3 <code>h\u51FD\u6570</code> <code>JSX</code> \u7B49</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u7684 <code>Html</code> \u6807\u7B7E</p><div class="tip custom-block"><p class="custom-block-title">as \u81EA\u5B9A\u4E49</p><p>\u53EF\u4EE5\u901A\u8FC7 <code>as</code> \u6307\u5B9A <code>html</code> \u7684\u6807\u7B7E\u8FDB\u884C\u6E32\u67D3</p></div>',5),w=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},"render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h1 \u6807\u7B7E\u6E32\u67D3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"as"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},"render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h2 \u6807\u7B7E\u6E32\u67D3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"as"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},"render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("span \u6807\u7B7E\u6E32\u67D3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"as"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("span"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},"render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("div \u6807\u7B7E\u6E32\u67D3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"as"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("div"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),V=n("h2",{id:"\u81EA\u5B9A\u4E49-render-\u51FD\u6570",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49 render \u51FD\u6570 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49-render-\u51FD\u6570","aria-hidden":"true"},"#")],-1),N=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"render \u51FD\u6570"),n("p",null,[t("\u53EF\u4EE5\u901A\u8FC7\u7ED9 "),n("code",null,"render"),t(" \u5C5E\u6027\u4F20\u5165 "),n("code",null,"h\u51FD\u6570"),t(" \u7684\u65B9\u5F0F\uFF0C\u8FDB\u884C\u6E32\u67D3")])],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("titleRender"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"custom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom render"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"titleRender"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" custom "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'h1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570 - \u53C2\u6570\u4E3A\uFF1A"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("custom"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      titleRender`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),q=n("h2",{id:"\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6",tabindex:"-1"},[t("\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528as\u6307\u5B9A\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
 `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("{{count}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("CustomRender")]),t(),n("span",{class:"token attr-name"},":as"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("BaseButton"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"primary"),t(),n("span",{class:"token attr-name"},"small"),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u70B9\u6211 +1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("CustomRender")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" root "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" BaseButton "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" root"),n("span",{class:"token punctuation"},"."),t("appContext"),n("span",{class:"token punctuation"},"."),t(`components
`),n("span",{class:"token keyword"},"const"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  count`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"1"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=D('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>render</td><td>RenderCustom</td><td>\u5426</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6E32\u67D3\u51FD\u6570</td><td>-</td></tr><tr><td>as</td><td>VNodeType</td><td>\u5426</td><td>\u6307\u5B9A\u6E32\u67D3\u6807\u7B7E\u6216\u8005\u7EC4\u4EF6</td><td>-</td></tr></tbody></table><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u663E\u793A\u5185\u5BB9</td><td>-</td></tr></tbody></table>',4);function I(e,s,r,u,o,c){const i=B("render-demo-0"),p=B("demo"),l=B("render-demo-1"),a=B("render-demo-2");return R(),y("div",null,[b,d(p,{sourceCode:`<template><ClientOnly>
  <CustomRender render="h1 \u6807\u7B7E\u6E32\u67D3" as="h1" />
  <CustomRender render="h2 \u6807\u7B7E\u6E32\u67D3" as="h2" />
  <CustomRender render="span \u6807\u7B7E\u6E32\u67D3" as="span" />
  <CustomRender render="div \u6807\u7B7E\u6E32\u67D3" as="div" />
</ClientOnly></template>
`},{highlight:m(()=>[w]),default:m(()=>[d(i)]),_:1}),V,N,d(p,{sourceCode:`<template><ClientOnly>
  <CustomRender :render="titleRender" custom="custom render"/>
</ClientOnly></template>

<script>
import { h } from 'vue'

export default {
  setup() {
    const titleRender = ({ custom }) =>
      h('h1', {}, \`\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570 - \u53C2\u6570\u4E3A\uFF1A\${custom}\`)

    return {
      titleRender,
    }
  },
}
<\/script>
`},{highlight:m(()=>[O]),default:m(()=>[d(l)]),_:1}),q,d(p,{sourceCode:`<template><ClientOnly>
 <div>{{count}}</div>
  <CustomRender :as="BaseButton" primary small @click="handleClick">\u70B9\u6211 +1</CustomRender>
</ClientOnly></template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { root } = getCurrentInstance()
const { BaseButton } = root.appContext.components
const count = ref(0)
const handleClick = () => {
  count.value += 1
}
<\/script>
`},{highlight:m(()=>[$]),default:m(()=>[d(a)]),_:1}),S])}var J=f(x,[["render",I]]);export{H as __pageData,J as default};
