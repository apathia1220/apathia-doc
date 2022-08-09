import{_ as B,V as d,c as E,a as g,w as h,b as t,d as n,e as A,r as m,o as D}from"./app.f009b584.js";const v={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:s,withCtx:a,createVNode:e,createElementVNode:i,openBlock:r,createElementBlock:o}=d,c=l("\u57FA\u672C\u7528\u6CD5");function f(u,k){const p=s("BaseButton"),x=s("ClientOnly");return r(),o("div",null,[e(x,null,{default:a(()=>[i("div",null,[e(p,{onClick:u.showConfirm},{default:a(()=>[c]),_:1},8,["onClick"])])]),_:1})])}const{defineComponent:C,getCurrentInstance:y}=d,_=C({setup(){const{proxy:u}=y(),{confirm:k}=u.useConfirm();function p(){k({title:"\u786E\u8BA4",render:"\u5185\u5BB9",btnPosition:"center"}).then(()=>{console.log("\u786E\u8BA4")}).catch(()=>{console.log("\u53D6\u6D88")})}return{showConfirm:p}}});return{render:f,..._}}()}},O='{"title":"confirm","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"props","slug":"props"}],"relativePath":"component/Confirm.md"}',w=t("h1",{id:"confirm",tabindex:"-1"},[n("confirm "),t("a",{class:"header-anchor",href:"#confirm","aria-hidden":"true"},"#")],-1),F=t("p",null,"\u786E\u8BA4\u6846",-1),b=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),V=t("p",null,"\u786E\u8BA4\u6846\u7684\u57FA\u7840\u7528\u6CD5 useConfirm",-1),N=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showConfirm"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u57FA\u672C\u7528\u6CD5"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" getCurrentInstance "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" proxy "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"getCurrentInstance"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" confirm "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(" proxy"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"useConfirm"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"showConfirm"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"confirm"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u786E\u8BA4'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"render"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5185\u5BB9'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"btnPosition"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'center'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"then"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u786E\u8BA4'"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"catch"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'\u53D6\u6D88'"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      showConfirm`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),I=A('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">\u6807\u9898</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>render</td><td style="text-align:center;">\u5185\u5BB9</td><td style="text-align:right;">string &amp; CustomRender</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>confirmText</td><td style="text-align:center;">\u786E\u8BA4\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u786E\u8BA4</td></tr><tr><td>cancelText</td><td style="text-align:center;">\u53D6\u6D88\u6309\u94AE</td><td style="text-align:right;">string</td><td style="text-align:right;">\u53D6\u6D88</td></tr><tr><td>btnPosition</td><td style="text-align:center;">\u6309\u94AE\u4F4D\u7F6E</td><td style="text-align:right;">[&#39;left&#39;, &#39;right&#39;, &#39;center&#39;]</td><td style="text-align:right;">right</td></tr><tr><td>renderFooter</td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u5E95\u90E8</td><td style="text-align:right;">CustomRender</td><td style="text-align:right;">() =&gt; {}</td></tr></tbody></table>',2);function P(l,s,a,e,i,r){const o=m("render-demo-0"),c=m("demo");return D(),E("div",null,[w,F,b,V,g(c,{sourceCode:`<template><ClientOnly>
  <div>
    <BaseButton @click="showConfirm">\u57FA\u672C\u7528\u6CD5</BaseButton>
  </div>
</ClientOnly></template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { confirm } = proxy.useConfirm()
    function showConfirm() {
      confirm({
        title: '\u786E\u8BA4',
        render: '\u5185\u5BB9',
        btnPosition: 'center',
      })
        .then(() => {
          console.log('\u786E\u8BA4')
        })
        .catch(() => {
          console.log('\u53D6\u6D88')
        })
    }

    return {
      showConfirm,
    }
  },
})
<\/script>
`},{highlight:h(()=>[N]),default:h(()=>[g(o)]),_:1}),I])}var $=B(v,[["render",P]]);export{O as __pageData,$ as default};
