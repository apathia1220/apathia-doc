import{_ as F,c as w,a as C,w as E,b as D,d as n,e as t,r as x,o as b,V as y}from"./app.08e00fed.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:c,withCtx:u,createVNode:p,toDisplayString:g,createElementVNode:h,openBlock:i,createElementBlock:l}=y,k=e("\u57FA\u672C\u7528\u6CD5");function A(B,r){const o=c("BaseButton"),s=c("ClientOnly");return i(),l("div",null,[p(s,null,{default:u(()=>[h("div",null,[p(o,{onClick:B.showConfirm},{default:u(()=>[k]),_:1},8,["onClick"]),e(" "+g(B.confirmVal),1)])]),_:1})])}const{getCurrentInstance:d,ref:m}=y;return{render:A,...{setup(B,{expose:r}){r();const{proxy:o}=d(),{confirm:s}=o.useConfirm(),a=m("");function f(){s({title:"\u786E\u8BA4",render:"\u5185\u5BB9",btnPosition:"center"}).then(()=>{a.value="\u786E\u8BA4"}).catch(()=>{a.value="\u53D6\u6D88"})}const _={proxy:o,confirm:s,confirmVal:a,showConfirm:f,getCurrentInstance:d,ref:m};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:c,withCtx:u,createVNode:p,toDisplayString:g,createElementVNode:h,openBlock:i,createElementBlock:l}=y,k=e("\u81EA\u5B9A\u4E49footer");function A(r,o){const s=c("BaseButton"),a=c("ClientOnly");return i(),l("div",null,[p(a,null,{default:u(()=>[h("div",null,[p(s,{onClick:r.showConfirm},{default:u(()=>[k]),_:1},8,["onClick"]),e(" "+g(r.confirmVal),1)])]),_:1})])}const{getCurrentInstance:d,h:m,ref:v}=y;return{render:A,...{setup(r,{expose:o}){o();const{proxy:s}=d(),{confirm:a}=s.useConfirm(),f=v("");function _(){a({title:"\u786E\u8BA4",render:"\u5185\u5BB9",renderFooter:()=>m("div","\u81EA\u5B9A\u4E49footer")}).then(()=>{f.value="\u786E\u8BA4"}).catch(()=>{f.value="\u53D6\u6D88"})}const V={proxy:s,confirm:a,confirmVal:f,showConfirm:_,getCurrentInstance:d,h:m,ref:v};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}}}()}},R='{"title":"Confirm \u786E\u8BA4\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49 footer","slug":"\u81EA\u5B9A\u4E49-footer"},{"level":2,"title":"Confirm Props","slug":"confirm-props"}],"relativePath":"component/Confirm.md"}',I=D(`<h1 id="confirm-\u786E\u8BA4\u6846" tabindex="-1">Confirm \u786E\u8BA4\u6846 <a class="header-anchor" href="#confirm-\u786E\u8BA4\u6846" aria-hidden="true">#</a></h1><p>\u5728<code>modal</code>\u7684\u57FA\u7840\u4E0A\uFF0C\u5FEB\u901F\u5B9E\u73B0\u786E\u8BA4\u529F\u80FD</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u7528\u6CD5</p><p>\u4F7F\u7528\u9700\u8981\u5168\u5C40\u6CE8\u518C\u4F7F\u7528 <code>modalInstall</code> \u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> modalInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@apathia/apathia&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>modalInstall<span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528<code>useConfirm</code>\u65B9\u6CD5\u5B9E\u73B0</p></div>`,4),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u57FA\u672C\u7528\u6CD5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
    {{confirmVal}}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" confirm "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" proxy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"useConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" confirmVal "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"btnPosition"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      confirmVal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      confirmVal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u53D6\u6D88'"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h2",{id:"\u81EA\u5B9A\u4E49-footer",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49 footer "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49-footer","aria-hidden":"true"},"#")],-1),S=n("p",null,[t("\u53EF\u4EE5\u901A\u8FC7"),n("code",null,"renderFooter"),t("\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49 footer")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("BaseButton")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("BaseButton")]),n("span",{class:"token punctuation"},">")]),t(`
    {{confirmVal}}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" getCurrentInstance"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" proxy "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" confirm "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" proxy"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"useConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(" confirmVal "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"render"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5185\u5BB9'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function-variable function"},"renderFooter"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(` 
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
        `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49footer'"),t(`
      `),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      confirmVal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      confirmVal`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u53D6\u6D88'"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=D('<h2 id="confirm-props" tabindex="-1">Confirm Props <a class="header-anchor" href="#confirm-props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>render</td><td style="text-align:center;">\u5185\u5BB9</td><td style="text-align:right;">string &amp; CustomRender</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>confirmText</td><td style="text-align:center;">\u786E\u8BA4\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u786E\u8BA4</td></tr><tr><td>cancelText</td><td style="text-align:center;">\u53D6\u6D88\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u53D6\u6D88</td></tr><tr><td>btnPosition</td><td style="text-align:center;">\u6309\u94AE\u4F4D\u7F6E</td><td style="text-align:right;">[&#39;left&#39;, &#39;right&#39;, &#39;center&#39;]</td><td style="text-align:right;">right</td></tr><tr><td>renderFooter</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u5E95\u90E8</td><td style="text-align:right;">CustomRender</td><td style="text-align:right;">() =&gt; {}</td></tr></tbody></table>',2);function $(e,c,u,p,g,h){const i=x("render-demo-0"),l=x("demo"),k=x("render-demo-1");return b(),w("div",null,[I,C(l,{sourceCode:`<template><ClientOnly>
  <div>
    <BaseButton @click="showConfirm">\u57FA\u672C\u7528\u6CD5</BaseButton>
    {{confirmVal}}
  </div>
</ClientOnly></template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { confirm } = proxy.useConfirm()
const confirmVal = ref('')
function showConfirm() {
  confirm({
    title: '\u786E\u8BA4',
    render: '\u5185\u5BB9',
    btnPosition: 'center',
  })
    .then(() => {
      confirmVal.value = '\u786E\u8BA4'
    })
    .catch(() => {
      confirmVal.value = '\u53D6\u6D88'
    })
}
<\/script>
`},{highlight:E(()=>[O]),default:E(()=>[C(i)]),_:1}),P,S,C(l,{sourceCode:`<template><ClientOnly>
  <div>
    <BaseButton @click="showConfirm">\u81EA\u5B9A\u4E49footer</BaseButton>
    {{confirmVal}}
  </div>
</ClientOnly></template>

<script setup>
import { getCurrentInstance, h, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { confirm } = proxy.useConfirm()
const confirmVal = ref('')
function showConfirm() {
  confirm({
    title: '\u786E\u8BA4',
    render: '\u5185\u5BB9',
    renderFooter: () => 
      h(
        'div',
        '\u81EA\u5B9A\u4E49footer'
      )
  })
    .then(() => {
      confirmVal.value = '\u786E\u8BA4'
    })
    .catch(() => {
      confirmVal.value = '\u53D6\u6D88'
    })
}
<\/script>
`},{highlight:E(()=>[T]),default:E(()=>[C(k)]),_:1}),j])}var z=F(N,[["render",$]]);export{R as __pageData,z as default};
