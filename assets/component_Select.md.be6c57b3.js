import{_ as M,V as y,c as N,a as E,w as F,b as n,d as t,e as T,r as D,o as L}from"./app.304b8a2c.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{renderList:v,Fragment:C,openBlock:u,createElementBlock:p,toDisplayString:k,createTextVNode:c,resolveComponent:o,withCtx:a,createVNode:s,createElementVNode:f}=y;function g(i,d){const l=o("Option"),h=o("Select"),e=o("ClientOnly");return u(),p("div",null,[s(e,null,{default:a(()=>[s(h,{modelValue:i.demo,"onUpdate:modelValue":d[0]||(d[0]=m=>i.demo=m)},{default:a(()=>[(u(),p(C,null,v(66,m=>s(l,{key:m,value:m},{default:a(()=>[c(k(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),f("p",null,k(i.demo),1)]),_:1})])}const{ref:_,defineComponent:b}=y,r=b({setup(){return{demo:_("")}}});return{render:g,...r}}(),"render-demo-1":function(){const{renderList:v,Fragment:C,openBlock:u,createElementBlock:p,toDisplayString:k,createTextVNode:c,resolveComponent:o,withCtx:a,createVNode:s}=y;function f(r,i){const d=o("Option"),l=o("Select"),h=o("ClientOnly");return u(),p("div",null,[s(h,null,{default:a(()=>[s(l,{modelValue:r.demo,"onUpdate:modelValue":i[0]||(i[0]=e=>r.demo=e),disabled:""},{default:a(()=>[(u(),p(C,null,v(66,e=>s(d,{key:e,value:e},{default:a(()=>[c(k(e),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),s(l,{modelValue:r.demo1,"onUpdate:modelValue":i[1]||(i[1]=e=>r.demo1=e)},{default:a(()=>[(u(),p(C,null,v(20,e=>s(d,{key:e,value:e,disabled:e<10},{default:a(()=>[c(k(e),1)]),_:2},1032,["value","disabled"])),64))]),_:1},8,["modelValue"])]),_:1})])}const{ref:g,defineComponent:_}=y,b=_({setup(){const r=g(""),i=g("");return{demo:r,demo1:i}}});return{render:f,...b}}(),"render-demo-2":function(){const{renderList:v,Fragment:C,openBlock:u,createElementBlock:p,toDisplayString:k,createTextVNode:c,resolveComponent:o,withCtx:a,createVNode:s,createElementVNode:f}=y,g=c(" \u6CA1\u6709\u641C\u7D22\u7ED3\u679C\uFF08\u8FD9\u662Fslot\uFF09 ");function _(d,l){const h=o("Option"),e=o("Select"),m=o("ClientOnly");return u(),p("div",null,[s(m,null,{default:a(()=>[f("div",null,[s(e,{modelValue:d.demo,"onUpdate:modelValue":l[0]||(l[0]=B=>d.demo=B),filterable:""},{"no-result":a(()=>[g]),default:a(()=>[(u(),p(C,null,v(66,B=>s(h,{key:B,value:B},{default:a(()=>[c(k(B),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),c(" "+k(d.demo),1)])]),_:1})])}const{ref:b,defineComponent:r}=y,i=r({setup(){return{demo:b("")}}});return{render:_,...i}}(),"render-demo-3":function(){const{renderList:v,Fragment:C,openBlock:u,createElementBlock:p,toDisplayString:k,createTextVNode:c,resolveComponent:o,withCtx:a,createBlock:s,createVNode:f,createElementVNode:g}=y;function _(l,h){const e=o("Option"),m=o("Select"),B=o("ClientOnly");return u(),p("div",null,[f(B,null,{default:a(()=>[g("div",null,[f(m,{modelValue:l.demo,"onUpdate:modelValue":h[0]||(h[0]=q=>l.demo=q),filterable:"",remote:"",clearable:"",onQueryChange:l.queryChange},{default:a(()=>[(u(!0),p(C,null,v(l.list,q=>(u(),s(e,{key:q,value:q},{default:a(()=>[c(k(q),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onQueryChange"]),c(" "+k(l.demo),1)])]),_:1})])}const{ref:b,defineComponent:r,reactive:i}=y,d=r({setup(){const l=b(""),h=i([Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);return{demo:l,list:h,queryChange:m=>{m&&h.splice(0,1,m)}}}});return{render:_,...d}}(),"render-demo-4":function(){const{renderList:v,Fragment:C,openBlock:u,createElementBlock:p,toDisplayString:k,createElementVNode:c,createTextVNode:o,resolveComponent:a,withCtx:s,createBlock:f,createVNode:g}=y,_=o(" use slot here "),b=["label"],r=["label"],d=[c("img",{src:"http://uat-manager.bilibili.co/v2/static/img/logo.c7fe4713.svg",width:"20",height:"20",alt:""},null,-1)],l=["label"];function h(x,O){const w=a("Option"),S=a("Select"),V=a("ClientOnly");return u(),p("div",null,[g(V,null,{default:s(()=>[c("div",null,[g(S,{modelValue:x.demo,"onUpdate:modelValue":O[0]||(O[0]=A=>x.demo=A),filterable:"",remote:"",clearable:"",onQueryChange:x.queryChange},{default:s(()=>[(u(!0),p(C,null,v(x.list,A=>(u(),f(w,{key:A,value:A},{default:s(()=>[_,c("p",{label:"label="+A},k(A),9,b),c("p",{label:"label="+A},d,8,r),c("p",{label:"label="+A},"\u{1F60A}\u{1F97A}\u{1F609}\u{1F60D}\u{1F618}\u{1F61A}\u{1F61C}\u{1F602}\u{1F61D}\u{1F633}\u{1F601}\u{1F623}\u{1F622}\u{1F62D}\u{1F630}",8,l)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onQueryChange"]),o(" "+k(x.demo),1)])]),_:1})])}const{ref:e,defineComponent:m,reactive:B}=y,q=m({setup(){const x=e(""),O=B([Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);return{demo:x,list:O,queryChange:S=>{S&&O.splice(0,1,S)}}}});return{render:h,...q}}()}},en='{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"disabled","slug":"disabled"},{"level":2,"title":"filterable","slug":"filterable"},{"level":2,"title":"\u8FDC\u7A0B\u67E5\u8BE2\u548C\u6E05\u9664","slug":"\u8FDC\u7A0B\u67E5\u8BE2\u548C\u6E05\u9664"},{"level":2,"title":"slot\u548C\u81EA\u5B9A\u4E49","slug":"slot\u548C\u81EA\u5B9A\u4E49"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"events","slug":"events"}],"relativePath":"component/Select.md"}',j=n("h1",{id:"select",tabindex:"-1"},[t("Select "),n("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#")],-1),Q=n("p",null,"\u4E0B\u62C9\u9009\u62E9\u5668",-1),$=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in 66"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ i }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ demo }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demo`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h2",{id:"disabled",tabindex:"-1"},[t("disabled "),n("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),P=n("p",null,"disabled\u7981\u7528\uFF08\u6574\u4F53\u7981\u7528\u548C\u5355\u4E2A\u7981\u7528\uFF09",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in 66"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ i }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in 20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i < 10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      {{ i }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demo`),n("span",{class:"token punctuation"},","),t(`
      demo1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h2",{id:"filterable",tabindex:"-1"},[t("filterable "),n("a",{class:"header-anchor",href:"#filterable","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u8FC7\u6EE4 \u914D\u7F6E#no-result\uFF0C\u4E3A\u65E0\u7ED3\u679C\u5C55\u793A\uFF0C\u53EF\u4EE5\u4E0D\u505A\u914D\u7F6E",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filterable"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in 66"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ i }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#no-result"),n("span",{class:"token punctuation"},">")]),t(" \u6CA1\u6709\u641C\u7D22\u7ED3\u679C\uFF08\u8FD9\u662Fslot\uFF09 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`

    {{ demo }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demo`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h2",{id:"\u8FDC\u7A0B\u67E5\u8BE2\u548C\u6E05\u9664",tabindex:"-1"},[t("\u8FDC\u7A0B\u67E5\u8BE2\u548C\u6E05\u9664 "),n("a",{class:"header-anchor",href:"#\u8FDC\u7A0B\u67E5\u8BE2\u548C\u6E05\u9664","aria-hidden":"true"},"#")],-1),W=n("p",null,"filterable + remote + clearable + @query-change",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"filterable"),t(`
      `),n("span",{class:"token attr-name"},"remote"),t(`
      `),n("span",{class:"token attr-name"},"clearable"),t(`
      `),n("span",{class:"token attr-name"},"@query-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("queryChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ i }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`

    {{ demo }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"queryChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token comment"},"// list\u6539\u53D8\u8981\u5E26remote \u5426\u5219filterstr\u6709\u95EE\u9898"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demo`),n("span",{class:"token punctuation"},","),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      queryChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Y=n("h2",{id:"slot\u548C\u81EA\u5B9A\u4E49",tabindex:"-1"},[t("slot\u548C\u81EA\u5B9A\u4E49 "),n("a",{class:"header-anchor",href:"#slot\u548C\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),Z=n("p",null,"option Solt + \u81EA\u5B9A\u4E49label\u5C55\u793A",-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Select")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"filterable"),t(`
      `),n("span",{class:"token attr-name"},"remote"),t(`
      `),n("span",{class:"token attr-name"},"clearable"),t(`
      `),n("span",{class:"token attr-name"},"@query-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("queryChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i in list"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        use slot here
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("label="),n("span",{class:"token punctuation"},"'"),t(" + i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ i }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("label="),n("span",{class:"token punctuation"},"'"),t(" + i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(`
            `),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://uat-manager.bilibili.co/v2/static/img/logo.c7fe4713.svg"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("label="),n("span",{class:"token punctuation"},"'"),t(" + i"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u{1F60A}\u{1F97A}\u{1F609}\u{1F60D}\u{1F618}\u{1F61A}\u{1F61C}\u{1F602}\u{1F61D}\u{1F633}\u{1F601}\u{1F623}\u{1F622}\u{1F62D}\u{1F630}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Option")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Select")]),n("span",{class:"token punctuation"},">")]),t(`

    {{ demo }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"queryChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"val"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token comment"},"// list\u6539\u53D8\u8981\u5E26remote \u5426\u5219filterstr\u6709\u95EE\u9898"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demo`),n("span",{class:"token punctuation"},","),t(`
      list`),n("span",{class:"token punctuation"},","),t(`
      queryChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),tn=T('<h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>prop</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u7C7B\u578B</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td style="text-align:center;">\u63A7\u5236\u9009\u62E9\u503C</td><td style="text-align:right;">String, Number, Boolean</td><td style="text-align:right;">\u65E0</td></tr><tr><td>valueKey</td><td style="text-align:center;">\u9009\u62E9\u5BF9\u8C61\u65F6 \u533A\u5206\u4E0D\u540C\u7684\u5173\u952Ekey\u503C</td><td style="text-align:right;">String</td><td style="text-align:right;">value</td></tr><tr><td>placeholder</td><td style="text-align:center;">\u63D0\u793A\u503C</td><td style="text-align:right;">String</td><td style="text-align:right;">\u8BF7\u9009\u62E9\u2026</td></tr><tr><td>filterable</td><td style="text-align:center;">\u662F\u5426\u542F\u7528\u67E5\u8BE2\uFF08\u524D\u7AEF\u8F93\u5165\u67E5\u8BE2\u529F\u80FD\uFF09</td><td style="text-align:right;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>clearable</td><td style="text-align:center;">\u662F\u5426\u542F\u7528\u6E05\u9664\u6309\u94AE</td><td style="text-align:right;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>emptyText</td><td style="text-align:center;">\u9009\u9879\u4E3A\u7A7A\u65F6\u5C55\u73B0\u7684\u6587\u672C</td><td style="text-align:right;">String</td><td style="text-align:right;">&#39;&#39;</td></tr><tr><td>disabled</td><td style="text-align:center;">\u662F\u5426\u542F\u7528\u7981\u7528\u5F00\u5173</td><td style="text-align:right;">Boolean</td><td style="text-align:right;">false</td></tr><tr><td>maxHeight</td><td style="text-align:center;">\u4E0B\u62C9\u5C55\u793A\u6846\u6700\u5927\u9AD8\u5EA6</td><td style="text-align:right;">Number, String</td><td style="text-align:right;">235</td></tr><tr><td>isLoading</td><td style="text-align:center;">\u662F\u5426\u5F00\u542F\u52A0\u8F7D\u72B6\u6001</td><td style="text-align:right;">Boolean</td><td style="text-align:right;">false</td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><blockquote><p>change: \u9009\u62E9\u6539\u53D8\u65F6\u89E6\u53D1 \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u9009\u62E9\u503Cvalue \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A label</p></blockquote><blockquote><p>input: \u9009\u62E9\u6539\u53D8\u65F6\u89E6\u53D1 \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u9009\u62E9\u503Cvalue \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A label</p></blockquote><blockquote><p>native-change: \u53EA\u6709\u5185\u90E8Option\u9009\u62E9\u4E4B\u540E\u624D\u4F1A\u89E6\u53D1&#39;native-change&#39;\u4E8B\u4EF6 \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u9009\u62E9\u503Cvalue \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A label</p></blockquote><blockquote><p>query-change: \u914D\u5408\u8FDC\u7A0B\u67E5\u8BE2\u4F7F\u7528 \u4F7F\u7528\u65B9\u6CD5\u5982\u4E0A</p></blockquote>',7);function an(v,C,u,p,k,c){const o=D("render-demo-0"),a=D("demo"),s=D("render-demo-1"),f=D("render-demo-2"),g=D("render-demo-3"),_=D("render-demo-4");return L(),N("div",null,[j,Q,$,E(a,{sourceCode:`<template><ClientOnly>
  <Select v-model="demo">
    <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
  </Select>

  <p>{{ demo }}</p>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    return {
      demo,
    }
  },
})
<\/script>
`},{highlight:F(()=>[H]),default:F(()=>[E(o)]),_:1}),K,P,E(a,{sourceCode:`<template><ClientOnly>
  <Select v-model="demo" disabled>
    <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
  </Select>
  <Select v-model="demo1">
    <Option v-for="i in 20" :key="i" :value="i" :disabled="i < 10">
      {{ i }}
    </Option>
  </Select>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const demo1 = ref('')
    return {
      demo,
      demo1,
    }
  },
})
<\/script>
`},{highlight:F(()=>[z]),default:F(()=>[E(s)]),_:1}),G,I,E(a,{sourceCode:`<template><ClientOnly>
  <div>
    <Select v-model="demo" filterable>
      <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
      <template #no-result> \u6CA1\u6709\u641C\u7D22\u7ED3\u679C\uFF08\u8FD9\u662Fslot\uFF09 </template>
    </Select>

    {{ demo }}
  </div>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    return {
      demo,
    }
  },
})
<\/script>
`},{highlight:F(()=>[J]),default:F(()=>[E(f)]),_:1}),R,W,E(a,{sourceCode:`<template><ClientOnly>
  <div>
    <Select
      v-model="demo"
      filterable
      remote
      clearable
      @query-change="queryChange"
    >
      <Option v-for="i in list" :key="i" :value="i">{{ i }}</Option>
    </Select>

    {{ demo }}
  </div>
</ClientOnly></template>

<script>
import { ref, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const list = reactive([
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ])
    const queryChange = val => {
      if (val) {
        list.splice(0, 1, val)
        // list\u6539\u53D8\u8981\u5E26remote \u5426\u5219filterstr\u6709\u95EE\u9898
      }
    }
    return {
      demo,
      list,
      queryChange,
    }
  },
})
<\/script>
`},{highlight:F(()=>[X]),default:F(()=>[E(g)]),_:1}),Y,Z,E(a,{sourceCode:`<template><ClientOnly>
  <div>
    <Select
      v-model="demo"
      filterable
      remote
      clearable
      @query-change="queryChange"
    >
      <Option v-for="i in list" :key="i" :value="i">
        use slot here
        <p :label="'label=' + i">{{ i }}</p>
        <p :label="'label=' + i">
          <img
            src="http://uat-manager.bilibili.co/v2/static/img/logo.c7fe4713.svg"
            width="20"
            height="20"
            alt=""
          />
        </p>
        <p :label="'label=' + i">\u{1F60A}\u{1F97A}\u{1F609}\u{1F60D}\u{1F618}\u{1F61A}\u{1F61C}\u{1F602}\u{1F61D}\u{1F633}\u{1F601}\u{1F623}\u{1F622}\u{1F62D}\u{1F630}</p>
      </Option>
    </Select>

    {{ demo }}
  </div>
</ClientOnly></template>

<script>
import { ref, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const list = reactive([
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ])
    const queryChange = val => {
      if (val) {
        list.splice(0, 1, val)
        // list\u6539\u53D8\u8981\u5E26remote \u5426\u5219filterstr\u6709\u95EE\u9898
      }
    }
    return {
      demo,
      list,
      queryChange,
    }
  },
})
<\/script>
`},{highlight:F(()=>[nn]),default:F(()=>[E(_)]),_:1}),tn])}var on=M(U,[["render",an]]);export{en as __pageData,on as default};
