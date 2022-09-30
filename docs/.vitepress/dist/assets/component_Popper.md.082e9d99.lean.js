import{_ as N,c as O,a as E,w as y,b as D,d as t,e as n,r as b,o as T,V as x}from"./app.7e8d6341.js";const q={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,openBlock:e,createElementBlock:B}=x,h=l("Click");function c(i,r){const F=o("BaseButton"),g=o("Popper"),f=o("ClientOnly");return e(),B("div",null,[a(f,null,{default:s(()=>[a(g,{content:i.content},{default:s(()=>[a(F,{plain:""},{default:s(()=>[h]),_:1})]),_:1},8,["content"])]),_:1})])}const{ref:d}=x;return{render:c,...{setup(i,{expose:r}){r();const g={content:d("this is popper content, this is popper content, this is popper content"),ref:d};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}}}(),"render-demo-1":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,openBlock:e,createElementBlock:B}=x,h=l("\u51FD\u6570\u5F0F\u8C03\u7528"),c=l("Target");function d(g,f){const p=o("BaseButton"),u=o("ClientOnly");return e(),B("div",null,[a(u,null,{default:s(()=>[a(p,{onClick:g.showPopper},{default:s(()=>[h]),_:1},8,["onClick"]),a(p,{ref:"popperRef"},{default:s(()=>[c]),_:1},512)]),_:1})])}const{ref:_,getCurrentInstance:i,h:r}=x;return{render:d,...{setup(g,{expose:f}){f();const{proxy:p}=i(),{popper:u}=p.usePoppertip(),k=_(null),v={proxy:p,popper:u,popperRef:k,showPopper:()=>{u({target:k.value,render:()=>r("div",["Function Content","Function Content","Function Content","Function Content"])})},ref:_,getCurrentInstance:i,h:r};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}}}(),"render-demo-2":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,createElementVNode:e,openBlock:B,createElementBlock:h}=x,c=l("Click"),d=e("div",null,"Custom Render Content",-1),_=l("\u786E\u8BA4"),i=l("\u53D6\u6D88");function r(g,f){const p=o("BaseButton"),u=o("Popper"),k=o("ClientOnly");return B(),h("div",null,[a(k,null,{default:s(()=>[a(u,{placement:"right",trigger:"hover","show-arrow":!1},{content:s(()=>[d,e("div",null,[a(p,{small:""},{default:s(()=>[_]),_:1}),a(p,{info:"",small:""},{default:s(()=>[i]),_:1})])]),default:s(()=>[a(p,{plain:""},{default:s(()=>[c]),_:1})]),_:1})]),_:1})])}return{render:r,...{}}}(),"render-demo-3":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,createElementVNode:e,openBlock:B,createElementBlock:h}=x,c=l("Click"),d=e("div",null,"Some Content",-1),_=e("div",null,"Some Content",-1),i=e("div",null,"Some Content",-1),r=e("div",null,"Some Content",-1),F=e("div",null,"Some Content",-1);function g(p,u){const k=o("BaseButton"),m=o("Popper"),v=o("ClientOnly");return B(),h("div",null,[a(v,null,{default:s(()=>[a(m,{placement:"bottom",dark:"",onHide:p.hide,onShow:p.show,onAfterHide:p.afterHide},{content:s(()=>[d,_,i,r,F]),default:s(()=>[a(k,{plain:""},{default:s(()=>[c]),_:1})]),_:1},8,["onHide","onShow","onAfterHide"])]),_:1})])}return{render:g,...{setup(p,{expose:u}){u();const C={hide:A=>{console.log("hide",A)},show:A=>{console.log("show",A)},afterHide:()=>{console.log("afterHide","\u5728\u9690\u85CF\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1")}};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}}}(),"render-demo-4":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,createElementVNode:e,openBlock:B,createElementBlock:h}=x,c=l("Click"),d=e("div",null,"Some Content",-1),_=e("div",null,"Some Content",-1),i=e("div",null,"Some Content",-1),r=e("div",null,"Some Content",-1),F=e("div",null,"Some Content",-1);function g(u,k){const m=o("BaseButton"),v=o("Popper"),C=o("ClientOnly");return B(),h("div",null,[a(C,null,{default:s(()=>[a(v,{modelValue:u.visible,"onUpdate:modelValue":k[0]||(k[0]=A=>u.visible=A),placement:"bottom",trigger:"manual"},{content:s(()=>[d,_,i,r,F]),default:s(()=>[a(m,{onClick:u.handleManual,plain:""},{default:s(()=>[c]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1})])}const{ref:f}=x;return{render:g,...{setup(u,{expose:k}){k();const m=f(!1),C={visible:m,handleManual:()=>{m.value=!m.value},ref:f};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}}}(),"render-demo-5":function(){const{createTextVNode:l,resolveComponent:o,withCtx:s,createVNode:a,createElementVNode:e,openBlock:B,createElementBlock:h}=x,c=l("Click"),d=e("div",null,"Some Content",-1),_=e("div",null,"Some Content",-1),i=e("div",null,"Some Content",-1),r=e("div",null,"Some Content",-1),F=e("div",null,"Some Content",-1);function g(u,k){const m=o("BaseButton"),v=o("Popper"),C=o("ClientOnly");return B(),h("div",null,[a(C,null,{default:s(()=>[a(v,{placement:"bottom",dark:"","transition-class":u.getStyles(),"delay-close":1e3},{content:s(()=>[d,_,i,r,F]),default:s(()=>[a(m,null,{default:s(()=>[c]),_:1})]),_:1},8,["transition-class"])]),_:1})])}const{getCurrentInstance:f}=x;return{render:g,...{setup(u,{expose:k}){k();const{proxy:m}=f(),{css:v,tw:C,apply:A}=m.cssInJs,w={proxy:m,css:v,tw:C,apply:A,getStyles:()=>{const V=v`
    ${A`transform scale-y-100 opacity-100`}
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
    &[data-popper-placement^='top'] {
      transform-origin: center bottom;
    }
  `,S=C`${A(V)}`,P=C`opacity-0 transform scale-y-0`;return{"enter-active-class":S,"leave-active-class":S,"enter-from-class":P,"leave-to-class":P}},getCurrentInstance:f};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}}}()}},et='{"title":"Popper","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"template\u7528\u6CD5","slug":"template\u7528\u6CD5"},{"level":3,"title":"functional\u7528\u6CD5","slug":"functional\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":2,"title":"\u6697\u8272\u4E3B\u9898","slug":"\u6697\u8272\u4E3B\u9898"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u5F71\u85CF","slug":"\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u5F71\u85CF"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u52A8\u753B","slug":"\u81EA\u5B9A\u4E49\u52A8\u753B"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Modal \u63D2\u69FD \uFF08template \u4F7F\u7528\uFF09","slug":"modal-\u63D2\u69FD-\uFF08template-\u4F7F\u7528\uFF09"},{"level":2,"title":"events","slug":"events"}],"relativePath":"component/Popper.md"}',H=D('<h1 id="popper" tabindex="-1">Popper <a class="header-anchor" href="#popper" aria-hidden="true">#</a></h1><p>\u5F39\u51FA\u6C14\u6CE1<br> \u5E38\u7528\u4E8E\u5C55\u793A\u9F20\u6807 hover \u3001click \u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u6587\u5B57\u5F39\u51FA\u6846\u7684\u57FA\u7840\u7528\u6CD5</p><h3 id="template\u7528\u6CD5" tabindex="-1">template\u7528\u6CD5 <a class="header-anchor" href="#template\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Popper")]),n(),t("span",{class:"token attr-name"},":content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("content"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"plain"),t("span",{class:"token punctuation"},">")]),n("Click"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Popper")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" content "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),n(`
  `),t("span",{class:"token string"},"'this is popper content, this is popper content, this is popper content'"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=D(`<h3 id="functional\u7528\u6CD5" tabindex="-1">functional\u7528\u6CD5 <a class="header-anchor" href="#functional\u7528\u6CD5" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F7F\u7528 <code>function</code> \u65B9\u5F0F\u9700\u8981\u5168\u5C40\u6CE8\u518C\u4F7F\u7528 <code>usePoppertip</code> \u65B9\u6CD5 <br> \u66F4\u591A\u4F7F\u7528\u65B9\u6CD5\u53C2\u8003 <code>https://popper.js.org/docs/v2/constructors/</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePoppertip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@apathia/apathia&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>usePoppertip<span class="token punctuation">)</span>
</code></pre></div></div>`,2),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showPopper"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u51FD\u6570\u5F0F\u8C03\u7528"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("popperRef"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Target"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref"),t("span",{class:"token punctuation"},","),n(" getCurrentInstance"),t("span",{class:"token punctuation"},","),n(" h "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" proxy "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"getCurrentInstance"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" popper "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(" proxy"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"usePoppertip"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(" popperRef "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"showPopper"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"popper"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"target"),t("span",{class:"token operator"},":"),n(" popperRef"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token function-variable function"},"render"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"h"),t("span",{class:"token punctuation"},"("),n(`
      `),t("span",{class:"token string"},"'div'"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"["),n(),t("span",{class:"token string"},"'Function Content'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Function Content'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Function Content'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'Function Content'"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},")"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")])])])],-1),M=t("h2",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),$=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD("),t("code",null,"content"),n(")\u7684\u65B9\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u663E\u793A\u7684\u5185\u5BB9")],-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Popper")]),n(),t("span",{class:"token attr-name"},"placement"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":show-arrow"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"plain"),t("span",{class:"token punctuation"},">")]),n("Click"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Custom Render Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"small"),t("span",{class:"token punctuation"},">")]),n("\u786E\u8BA4"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"info"),n(),t("span",{class:"token attr-name"},"small"),t("span",{class:"token punctuation"},">")]),n("\u53D6\u6D88"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Popper")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),J=t("h2",{id:"\u6697\u8272\u4E3B\u9898",tabindex:"-1"},[n("\u6697\u8272\u4E3B\u9898 "),t("a",{class:"header-anchor",href:"#\u6697\u8272\u4E3B\u9898","aria-hidden":"true"},"#")],-1),L=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49"),t("code",null,"dark"),n("\u5C5E\u6027\u6765\u6307\u5B9A\u5F39\u51FA\u5185\u5BB9\u4E3A\u6DF1\u8272\u4E3B\u9898")],-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Popper")]),n(`
    `),t("span",{class:"token attr-name"},"placement"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"dark"),n(`
    `),t("span",{class:"token attr-name"},"@hide"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hide"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@show"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("show"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@after-hide"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("afterHide"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"plain"),t("span",{class:"token punctuation"},">")]),n("Click"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Popper")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"hide"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"val"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'hide'"),t("span",{class:"token punctuation"},","),n(" val"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"show"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"val"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'show'"),t("span",{class:"token punctuation"},","),n(" val"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"afterHide"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'afterHide'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'\u5728\u9690\u85CF\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1'"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=t("h2",{id:"\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u5F71\u85CF",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u5F71\u85CF "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u5F71\u85CF","aria-hidden":"true"},"#")],-1),K=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7"),t("code",null,"v-model"),n("\u7ED1\u5B9A\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF\u7684\u503C\uFF0C"),t("code",null,"trigger"),n("\u65B9\u5F0F\u8BBE\u7F6E\u4E3A "),t("code",null,"manual")],-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Popper")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("visible"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placement"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"trigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("manual"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleManual"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"plain"),t("span",{class:"token punctuation"},">")]),n("Click"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Popper")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" visible "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleManual"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  visible`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"!"),n("visible"),t("span",{class:"token punctuation"},"."),n(`value
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=t("h2",{id:"\u81EA\u5B9A\u4E49\u52A8\u753B",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u52A8\u753B "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u52A8\u753B","aria-hidden":"true"},"#")],-1),X=t("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"transition-class"),n("\u6765\u81EA\u5B9A\u4E49\u663E\u793A\u4E0E\u9690\u85CF\u65F6\u7684\u52A8\u753B")],-1),Y=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"transition-class \u4E2D\u53EF\u4EE5\u5305\u62EC\uFF1A enter-active-class, leave-active-class, enter-from-class, leave-to-class")],-1),Z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Popper")]),n(`
    `),t("span",{class:"token attr-name"},"placement"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"dark"),n(`
    `),t("span",{class:"token attr-name"},":transition-class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("getStyles()"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":delay-close"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1000"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n("Click"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("BaseButton")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#content"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("Some Content"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("Popper")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" getCurrentInstance "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" proxy "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"getCurrentInstance"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"{"),n(" css"),t("span",{class:"token punctuation"},","),n(" tw"),t("span",{class:"token punctuation"},","),n(" apply "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token operator"},"="),n(" proxy"),t("span",{class:"token punctuation"},"."),n("cssInJs "),t("span",{class:"token comment"},"// \u4E0D\u7528\u5168\u5C40\u7ED1\u5B9A\uFF0Cimport\u4E0A\u9762\u7684\u6CE8\u91CA"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"getStyles"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token keyword"},"const"),n(" placementTranstion "),t("span",{class:"token operator"},"="),n(" css"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},`
    `),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("apply"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"transform scale-y-100 opacity-100"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},`
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
    &[data-popper-placement^='top'] {
      transform-origin: center bottom;
    }
  `),t("span",{class:"token template-punctuation string"},"`")]),n(`
  `),t("span",{class:"token keyword"},"const"),n(" active "),t("span",{class:"token operator"},"="),n(" tw"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),t("span",{class:"token function"},"apply"),t("span",{class:"token punctuation"},"("),n("placementTranstion"),t("span",{class:"token punctuation"},")"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),n(`
  `),t("span",{class:"token keyword"},"const"),n(" state "),t("span",{class:"token operator"},"="),n(" tw"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"opacity-0 transform scale-y-0"),t("span",{class:"token template-punctuation string"},"`")]),n(`
  `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token string-property property"},"'enter-active-class'"),t("span",{class:"token operator"},":"),n(" active"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token string-property property"},"'leave-active-class'"),t("span",{class:"token operator"},":"),n(" active"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token string-property property"},"'enter-from-class'"),t("span",{class:"token operator"},":"),n(" state"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token string-property property"},"'leave-to-class'"),t("span",{class:"token operator"},":"),n(" state"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),tt=D('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td style="text-align:center;">\u662F\u5426\u5C55\u793A\uFF08\u4F20\u53C2\u63A7\u5236\u663E\u9690\uFF09</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>distance</td><td style="text-align:center;">\u5F39\u51FA\u6846\u8DDD\u79BB\u76EE\u6807\u7684\u957F\u5EA6</td><td style="text-align:right;">number</td><td style="text-align:right;">15</td></tr><tr><td>skidding</td><td style="text-align:center;">\u7BAD\u5934\u4E0E\u76EE\u6807\u7684\u504F\u79FB\u91CF</td><td style="text-align:right;">number</td><td style="text-align:right;">0</td></tr><tr><td>trigger</td><td style="text-align:center;">\u89E6\u53D1\u65B9\u5F0F &#39;click&#39;, &#39;hover&#39;, &#39;focus&#39;, &#39;manual&#39;</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;click&#39;</td></tr><tr><td>dark</td><td style="text-align:center;">\u6697\u8272\u4E3B\u9898</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>placement</td><td style="text-align:center;">\u5F39\u51FA\u6846\u4F4D\u7F6E <br>&#39;top&#39;,&#39;top-start&#39;,&#39;top-end&#39;,&#39;bottom&#39;,&#39;bottom-start&#39;,&#39;bottom-end&#39;,&#39;left&#39;,&#39;left-start&#39;,&#39;left-end&#39;,&#39;right&#39;,&#39;right-start&#39;,&#39;right-end&#39;,</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;top&#39;</td></tr><tr><td>content</td><td style="text-align:center;">\u5F39\u51FA\u6846\u5185\u5BB9</td><td style="text-align:right;">string,number</td><td style="text-align:right;">-</td></tr><tr><td>transitionClass</td><td style="text-align:center;">\u5F39\u51FA\u6D88\u5931\u52A8\u753B\u81EA\u5B9A\u4E49</td><td style="text-align:right;">object</td><td style="text-align:right;">-</td></tr><tr><td>showArrow</td><td style="text-align:center;">\u7BAD\u5934\u663E\u9690\u63A7\u5236</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>delay</td><td style="text-align:center;">hover\u65B9\u5F0F\u5EF6\u8FDF\u65F6\u95F4 ms</td><td style="text-align:right;">number</td><td style="text-align:right;">300</td></tr><tr><td>disabled</td><td style="text-align:center;">\u662F\u5426\u7981\u7528</td><td style="text-align:right;">boolean</td><td style="text-align:right;">false</td></tr><tr><td>popperClass</td><td style="text-align:center;">\u5F39\u51FA\u6846\u7C7B\u540D</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>appendToBody</td><td style="text-align:center;">\u662F\u5426\u8FFD\u52A0\u5230body\u540E</td><td style="text-align:right;">boolean</td><td style="text-align:right;">true</td></tr><tr><td>render</td><td style="text-align:center;">\u5F39\u51FA\u6846\u6E32\u67D3\u5185\u5BB9</td><td style="text-align:right;">CustomRender</td><td style="text-align:right;">undefined</td></tr><tr><td>target</td><td style="text-align:center;">\u5F39\u6846\u76EE\u6807\u5143\u7D20</td><td style="text-align:right;">HTMLElement</td><td style="text-align:right;">undefined</td></tr><tr><td>delayClose</td><td style="text-align:center;">\u81EA\u52A8\u5173\u95ED\uFF0C\u4F20\u53C2\u662F\u65F6\u95F4\uFF0C\u5355\u4F4Dms</td><td style="text-align:right;">number</td><td style="text-align:right;">undefined</td></tr></tbody></table><h2 id="modal-\u63D2\u69FD-\uFF08template-\u4F7F\u7528\uFF09" tabindex="-1">Modal \u63D2\u69FD \uFF08template \u4F7F\u7528\uFF09 <a class="header-anchor" href="#modal-\u63D2\u69FD-\uFF08template-\u4F7F\u7528\uFF09" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u63A5\u6536\u53C2\u6570</th></tr></thead><tbody><tr><td>-</td><td style="text-align:center;">default(\u9ED8\u8BA4\u63D2\u69FD)\uFF0C\u89E6\u53D1\u4E3B\u4F53</td><td style="text-align:center;">-</td></tr><tr><td>content</td><td style="text-align:center;">\u663E\u793A\u5185\u5BB9</td><td style="text-align:center;">-</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><blockquote><p>show: \u5F39\u51FA\u65F6\u89E6\u53D1 \u53C2\u6570\u662F\u663E\u9690\u72B6\u6001\u7684\u5E03\u5C14\u503C</p></blockquote><blockquote><p>hide: \u5173\u95ED\u65F6\u89E6\u53D1 \u53C2\u6570\u662F\u663E\u9690\u72B6\u6001\u7684\u5E03\u5C14\u503C</p></blockquote><blockquote><p>afterHide: \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1 \u65E0\u53C2\u6570</p></blockquote>',8);function nt(l,o,s,a,e,B){const h=b("render-demo-0"),c=b("demo"),d=b("render-demo-1"),_=b("render-demo-2"),i=b("render-demo-3"),r=b("render-demo-4"),F=b("render-demo-5");return T(),O("div",null,[H,E(c,{sourceCode:`<template><ClientOnly>
  <Popper :content="content">
    <BaseButton plain>Click</BaseButton>
  </Popper>
</ClientOnly></template>

<script setup>
import { ref } from 'vue'
const content = ref(
  'this is popper content, this is popper content, this is popper content',
)
<\/script>
`},{highlight:y(()=>[I]),default:y(()=>[E(h)]),_:1}),j,E(c,{sourceCode:`<template><ClientOnly>
  <BaseButton @click="showPopper">\u51FD\u6570\u5F0F\u8C03\u7528</BaseButton>
  <BaseButton ref="popperRef">Target</BaseButton>
</ClientOnly></template>

<script setup>
import { ref, getCurrentInstance, h } from 'vue'
const { proxy } = getCurrentInstance()
const { popper } = proxy.usePoppertip()
const popperRef = ref(null)

const showPopper = () => {
  popper({
    target: popperRef.value,
    render: () => h(
      'div',
      [ 'Function Content', 'Function Content', 'Function Content', 'Function Content']
    )
  })
}
<\/script>`},{highlight:y(()=>[R]),default:y(()=>[E(d)]),_:1}),M,$,E(c,{sourceCode:`<template><ClientOnly>
  <Popper placement="right" trigger="hover" :show-arrow="false">
    <BaseButton plain>Click</BaseButton>
    <template #content>
      <div>Custom Render Content</div>
      <div>
        <BaseButton small>\u786E\u8BA4</BaseButton>
        <BaseButton info small>\u53D6\u6D88</BaseButton>
      </div>
    </template>
  </Popper>
</ClientOnly></template>
`},{highlight:y(()=>[z]),default:y(()=>[E(_)]),_:1}),J,L,E(c,{sourceCode:`<template><ClientOnly>
  <Popper
    placement="bottom"
    dark
    @hide="hide"
    @show="show"
    @after-hide="afterHide"
  >
    <BaseButton plain>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</ClientOnly></template>

<script setup>
const hide = val => {
  console.log('hide', val)
}

const show = val => {
  console.log('show', val)
}

const afterHide = () => {
  console.log('afterHide', '\u5728\u9690\u85CF\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1')
}
<\/script>
`},{highlight:y(()=>[U]),default:y(()=>[E(i)]),_:1}),G,K,E(c,{sourceCode:`<template><ClientOnly>
  <Popper v-model="visible" placement="bottom" trigger="manual">
    <BaseButton @click="handleManual" plain>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</ClientOnly></template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleManual = () => {
  visible.value = !visible.value
}
<\/script>
`},{highlight:y(()=>[Q]),default:y(()=>[E(r)]),_:1}),W,X,Y,E(c,{sourceCode:`<template><ClientOnly>
  <Popper
    placement="bottom"
    dark
    :transition-class="getStyles()"
    :delay-close="1000"
  >
    <BaseButton>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</ClientOnly></template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const { css, tw, apply } = proxy.cssInJs // \u4E0D\u7528\u5168\u5C40\u7ED1\u5B9A\uFF0Cimport\u4E0A\u9762\u7684\u6CE8\u91CA
const getStyles = () => {
  const placementTranstion = css\`
    \${apply\`transform scale-y-100 opacity-100\`}
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
    &[data-popper-placement^='top'] {
      transform-origin: center bottom;
    }
  \`
  const active = tw\`\${apply(placementTranstion)}\`
  const state = tw\`opacity-0 transform scale-y-0\`
  return {
    'enter-active-class': active,
    'leave-active-class': active,
    'enter-from-class': state,
    'leave-to-class': state,
  }
}
<\/script>
`},{highlight:y(()=>[Z]),default:y(()=>[E(F)]),_:1}),tt])}var ot=N(q,[["render",nt]]);export{et as __pageData,ot as default};
