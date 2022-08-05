import{_ as y,V as f,c as D,a as F,w as b,e as B,b as n,d as t,r as V,o as A}from"./app.a6abf7db.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:m,resolveComponent:u,withCtx:l,createVNode:e,openBlock:s,createElementBlock:h}=f,k=m(" \u662F\u5426\u4E3A\u70ED\u8840\u9752\u5E74 ");function c(i,C){const v=u("Checkbox"),o=u("ClientOnly");return s(),h("div",null,[e(o,null,{default:l(()=>[e(v,{modelValue:i.base,"onUpdate:modelValue":C[0]||(C[0]=a=>i.base=a)},{default:l(()=>[k]),_:1},8,["modelValue"])]),_:1})])}const{ref:r,defineComponent:d}=f,g=d({setup(){return{base:r(!0)}}});return{render:c,...g}}(),"render-demo-1":function(){const{createElementVNode:m,createTextVNode:u,resolveComponent:l,withCtx:e,createVNode:s,openBlock:h,createElementBlock:k}=f,c=m("p",null,"\u4F60\u559C\u6B22\u5403\u5565",-1),r=u("\u82F9\u679C\u{1F34E}"),d=u("\u9999\u8549\u{1F34C}"),g=u("\u68A8\u{1F350}");function i(a,p){const _=l("Checkbox"),E=l("ClientOnly");return h(),k("div",null,[s(E,null,{default:e(()=>[c,s(_,{modelValue:a.likes,"onUpdate:modelValue":p[0]||(p[0]=x=>a.likes=x),value:"apple"},{default:e(()=>[r]),_:1},8,["modelValue"]),s(_,{modelValue:a.likes,"onUpdate:modelValue":p[1]||(p[1]=x=>a.likes=x),value:"banana"},{default:e(()=>[d]),_:1},8,["modelValue"]),s(_,{modelValue:a.likes,"onUpdate:modelValue":p[2]||(p[2]=x=>a.likes=x),value:"pear"},{default:e(()=>[g]),_:1},8,["modelValue"])]),_:1})])}const{ref:C,defineComponent:v}=f,o=v({setup(){return{likes:C([])}}});return{render:i,...o}}(),"render-demo-2":function(){const{createElementVNode:m,createTextVNode:u,resolveComponent:l,withCtx:e,createVNode:s,openBlock:h,createElementBlock:k}=f,c=m("p",null,"\u4F60\u559C\u6B22\u5403\u5565",-1),r=u("\u6C34\u679C"),d=u("\u9999\u8549\u{1F34C}");function g(o,a){const p=l("Checkbox"),_=l("ClientOnly");return h(),k("div",null,[s(_,null,{default:e(()=>[c,s(p,{modelValue:o.likes,"onUpdate:modelValue":a[0]||(a[0]=E=>o.likes=E),value:"fruit",indeterminate:o.indeterminate},{default:e(()=>[r]),_:1},8,["modelValue","indeterminate"]),s(p,{modelValue:o.indeterminate,"onUpdate:modelValue":a[1]||(a[1]=E=>o.indeterminate=E),value:"banana"},{default:e(()=>[d]),_:1},8,["modelValue"])]),_:1})])}const{ref:i,defineComponent:C}=f,v=C({setup(){const o=i(!1),a=i(!1);return{likes:o,indeterminate:a}}});return{render:g,...v}}()}},S='{"title":"Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u5355\u9009","slug":"\u5355\u9009"},{"level":3,"title":"\u591A\u9009","slug":"\u591A\u9009"},{"level":3,"title":"\u4E2D\u95F4\u72B6\u6001","slug":"\u4E2D\u95F4\u72B6\u6001"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"events","slug":"events"},{"level":2,"title":"slots","slug":"slots"}],"relativePath":"component/Checkbox.md"}',N=B('<h1 id="checkbox" tabindex="-1">Checkbox <a class="header-anchor" href="#checkbox" aria-hidden="true">#</a></h1><p>\u591A\u9009\u6846</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u5355\u9009" tabindex="-1">\u5355\u9009 <a class="header-anchor" href="#\u5355\u9009" aria-hidden="true">#</a></h3>',4),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("base"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" \u662F\u5426\u4E3A\u70ED\u8840\u9752\u5E74 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" base "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      base`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u591A\u9009",tabindex:"-1"},[t("\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u591A\u9009","aria-hidden":"true"},"#")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u4F60\u559C\u6B22\u5403\u5565"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("likes"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("apple"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u82F9\u679C\u{1F34E}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("likes"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("banana"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9999\u8549\u{1F34C}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("likes"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pear"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u68A8\u{1F350}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" likes "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      likes`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u4E2D\u95F4\u72B6\u6001",tabindex:"-1"},[t("\u4E2D\u95F4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u4E2D\u95F4\u72B6\u6001","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u4F60\u559C\u6B22\u5403\u5565"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("likes"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fruit"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":indeterminate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("indeterminate"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t("\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Checkbox")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("indeterminate"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("banana"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u9999\u8549\u{1F34C}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" likes "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" indeterminate "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      likes`),n("span",{class:"token punctuation"},","),t(`
      indeterminate`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=B('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F7F\u7528 indeterminate \u9700\u8981\u6CE8\u610F\uFF1Aindeterminate \u548C modelValue \u662F\u9694\u79BB\u7684 \u70B9\u51FB\u65F6\u6539\u53D8 modelValue\uFF0Cindeterminate \u8981\u81EA\u5DF1\u63A7\u5236\uFF0C\u4E00\u5171\u6709\u56DB\u4E2A\u72B6\u6001\uFF0C\u5982\u4E0B\uFF0C\u907F\u514D\u51FA\u73B0 \u90FD\u4E3ATrue\u7684\u60C5\u51B5</p></div><table><thead><tr><th></th><th>\u9009\u4E2D</th><th>\u53D6\u6D88\uFF08\u7A7A\u767D\uFF09</th><th>\u4E2D\u95F4\u6001</th><th>\u65E0\u6548\uFF08\u586B\u6EE1\uFF09</th></tr></thead><tbody><tr><td>interminate</td><td>false</td><td>false</td><td>true</td><td>true</td></tr><tr><td>modelValue</td><td>true</td><td>false</td><td>false</td><td>true</td></tr></tbody></table><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>string/number/boolean/array</td><td>\u662F</td><td>\u9009\u4E2D\u7684\u503C</td><td>-</td></tr><tr><td>trueValue</td><td>number/string/boolean</td><td>\u5426</td><td>\u9009\u4E2D\u7684\u503C</td><td>true</td></tr><tr><td>falseValue</td><td>number/string/boolean</td><td>\u5426</td><td>\u672A\u9009\u4E2D\u7684\u503C</td><td>false</td></tr><tr><td>value</td><td>number/string</td><td>\u5426</td><td>modelValue\u662F\u6570\u7EC4\u65F6\uFF0C\u9009\u4E2D\u65F6\u7684\u503C\uFF0C\u5982\u679C\u4E0D\u63D0\u4F9B\uFF0C\u5C06\u4F1A\u964D\u7EA7\u4F7F\u7528trueValue</td><td>undefined</td></tr><tr><td>disabled</td><td>boolean</td><td>\u5426</td><td>\u7981\u7528</td><td>-</td></tr><tr><td>indeterminate</td><td>number/string/boolean</td><td>\u5426</td><td>\u4E2D\u95F4\u72B6\u6001\uFF0C\u72EC\u7ACB\u4E8EmodelValue\uFF0C\u9700\u8981\u7528\u6237\u624B\u52A8\u63A7\u5236</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>upadte:modelValue</td><td>\u503C\u4FEE\u6539\u65F6\u89E6\u53D1</td><td>\u65B0\u7684\u503C</td></tr></tbody></table><h2 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td>\u8BF4\u660E</td><td>-</td></tr></tbody></table>',8);function P(m,u,l,e,s,h){const k=V("render-demo-0"),c=V("demo"),r=V("render-demo-1"),d=V("render-demo-2");return A(),D("div",null,[N,F(c,{sourceCode:`<template><ClientOnly>
  <Checkbox v-model="base"> \u662F\u5426\u4E3A\u70ED\u8840\u9752\u5E74 </Checkbox>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const base = ref(true)
    return {
      base,
    }
  },
})
<\/script>
`},{highlight:b(()=>[q]),default:b(()=>[F(k)]),_:1}),O,F(c,{sourceCode:`<template><ClientOnly>
  <p>\u4F60\u559C\u6B22\u5403\u5565</p>

  <Checkbox v-model="likes" value="apple">\u82F9\u679C\u{1F34E}</Checkbox>
  <Checkbox v-model="likes" value="banana">\u9999\u8549\u{1F34C}</Checkbox>
  <Checkbox v-model="likes" value="pear">\u68A8\u{1F350}</Checkbox>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const likes = ref([])
    return {
      likes,
    }
  },
})
<\/script>
`},{highlight:b(()=>[T]),default:b(()=>[F(r)]),_:1}),U,F(c,{sourceCode:`<template><ClientOnly>
  <p>\u4F60\u559C\u6B22\u5403\u5565</p>
  <Checkbox v-model="likes" value="fruit" :indeterminate="indeterminate"
    >\u6C34\u679C</Checkbox
  >
  <Checkbox v-model="indeterminate" value="banana">\u9999\u8549\u{1F34C}</Checkbox>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const likes = ref(false)
    const indeterminate = ref(false)
    return {
      likes,
      indeterminate,
    }
  },
})
<\/script>
`},{highlight:b(()=>[$]),default:b(()=>[F(d)]),_:1}),j])}var z=y(w,[["render",P]]);export{S as __pageData,z as default};
