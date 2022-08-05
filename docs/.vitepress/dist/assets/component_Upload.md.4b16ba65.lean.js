import{_ as h,V as F,c as B,a as E,w as m,e as v,b as t,d as n,r as A,o as g}from"./app.4164b5eb.js";const D={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:o,withCtx:d,openBlock:r,createElementBlock:i}=F;function k(u,a){const e=s("Upload"),f=s("ClientOnly");return r(),i("div",null,[o(f,null,{default:d(()=>[o(e,{modelValue:u.file1,"onUpdate:modelValue":a[0]||(a[0]=C=>u.file1=C),action:"/x/admin/creative/material/upload","resolve-url":u.resolveLocation},null,8,["modelValue","resolve-url"])]),_:1})])}const{ref:c,defineComponent:l}=F,p=l({setup(){return{file1:c(""),resolveLocation:e=>e.data}}});return{render:k,...p}}(),"render-demo-1":function(){const{resolveComponent:s,createVNode:o,withCtx:d,openBlock:r,createElementBlock:i}=F;function k(u,a){const e=s("Upload"),f=s("ClientOnly");return r(),i("div",null,[o(f,null,{default:d(()=>[o(e,{modelValue:u.file2s,"onUpdate:modelValue":a[0]||(a[0]=C=>u.file2s=C),multiple:!0,action:"/x/admin/creative/material/upload","resolve-url":u.resolveLocation},null,8,["modelValue","resolve-url"])]),_:1})])}const{ref:c,defineComponent:l}=F,p=l({setup(){return{file2s:c(""),resolveLocation:e=>e.data}}});return{render:k,...p}}(),"render-demo-2":function(){const{resolveComponent:s,createVNode:o,withCtx:d,openBlock:r,createElementBlock:i}=F;function k(u,a){const e=s("Upload"),f=s("ClientOnly");return r(),i("div",null,[o(f,null,{default:d(()=>[o(e,{modelValue:u.file4s,"onUpdate:modelValue":a[0]||(a[0]=C=>u.file4s=C),draggable:!0,multiple:!0,action:"/x/admin/creative/material/upload","resolve-url":u.resolveLocation},null,8,["modelValue","resolve-url"])]),_:1})])}const{ref:c,defineComponent:l}=F,p=l({setup(){return{file4s:c([]),resolveLocation:e=>e.data}}});return{render:k,...p}}()}},P='{"title":"Upload","description":"","frontmatter":{},"headers":[{"level":2,"title":"Upload/","slug":"upload-1"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5 | Upload","slug":"\u57FA\u7840\u7528\u6CD5-upload"},{"level":3,"title":"\u4E0A\u4F20\u591A\u5F20\u56FE\u7247","slug":"\u4E0A\u4F20\u591A\u5F20\u56FE\u7247"},{"level":3,"title":"\u62D6\u62FD\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6","slug":"\u62D6\u62FD\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6"},{"level":3,"title":"props","slug":"props"},{"level":3,"title":"events","slug":"events"},{"level":3,"title":"slots","slug":"slots"}],"relativePath":"component/Upload.md"}',_=v('<h1 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-hidden="true">#</a></h1><p>\u4E0A\u4F20</p><p>\u4E0A\u4F20\u7EC4\u4EF6\u4E00\u5171\u6709 \u6700\u57FA\u7840\u7684Upload\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4E0A\u4F20\u5230BFS\u7684\u666E\u901A\u4E0A\u4F20\u7EC4\u4EF6 BfsUpload, \u4EE5\u53CA\u4E0A\u4F20\u5230BFS\u7684\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6 BfsImageUpload\u3002BfsUpload \u548C BfsImageUpload\u90FD\u662F\u5BF9 Upload\u7684\u4E8C\u6B21\u5C01\u88C5\u3002</p><h2 id="upload-1" tabindex="-1">Upload/ <a class="header-anchor" href="#upload-1" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u7528\u6CD5-upload" tabindex="-1">\u57FA\u7840\u7528\u6CD5 | Upload <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5-upload" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u4E0A\u4F20\u8DEF\u5F84</p>',6),b=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Upload")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("file1"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/x/admin/creative/material/upload"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":resolve-url"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resolveLocation"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref"),t("span",{class:"token punctuation"},","),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" file1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"resolveLocation"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"resp"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(" resp"),t("span",{class:"token punctuation"},"."),n(`data
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      file1`),t("span",{class:"token punctuation"},","),n(`
      resolveLocation`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),y=t("h3",{id:"\u4E0A\u4F20\u591A\u5F20\u56FE\u7247",tabindex:"-1"},[n("\u4E0A\u4F20\u591A\u5F20\u56FE\u7247 "),t("a",{class:"header-anchor",href:"#\u4E0A\u4F20\u591A\u5F20\u56FE\u7247","aria-hidden":"true"},"#")],-1),w=t("p",null,[n("\u901A\u8FC7\u6307\u5B9A "),t("code",null,"multiple"),n(" \u4E3A true \u53EF\u4EE5\u5141\u8BB8\u4E0A\u4F20\u591A\u5F20\u56FE\u7247")],-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Upload")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("file2s"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":multiple"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/x/admin/creative/material/upload"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":resolve-url"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resolveLocation"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref"),t("span",{class:"token punctuation"},","),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" file2s "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"resolveLocation"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"resp"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(" resp"),t("span",{class:"token punctuation"},"."),n(`data
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      file2s`),t("span",{class:"token punctuation"},","),n(`
      resolveLocation`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),x=t("h3",{id:"\u62D6\u62FD\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6",tabindex:"-1"},[n("\u62D6\u62FD\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6 "),t("a",{class:"header-anchor",href:"#\u62D6\u62FD\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6","aria-hidden":"true"},"#")],-1),L=t("p",null,[n("\u901A\u8FC7\u6307\u5B9A "),t("code",null,"draggable"),n(" \u4E3A true \u53EF\u4EE5\u5141\u8BB8\u62D6\u62FD\u4E0A\u4F20")],-1),V=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("Upload")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("file4s"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":draggable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":multiple"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"action"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/x/admin/creative/material/upload"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":resolve-url"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resolveLocation"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref"),t("span",{class:"token punctuation"},","),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" file4s "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"resolveLocation"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token parameter"},"resp"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(" resp"),t("span",{class:"token punctuation"},"."),n(`data
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      file4s`),t("span",{class:"token punctuation"},","),n(`
      resolveLocation`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),q=v('<h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u4F20</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>array/string</td><td>\u662F</td><td>\u4E0A\u4F20\u5730\u5740\u7684\u503C\uFF0C\u5982\u679Cmultiple\u662Ftrue\uFF0C\u5219\u662F\u6570\u7EC4\uFF0C\u5426\u5219\u662F\u5355\u4E2A\u5B57\u7B26\u4E32</td><td>-</td></tr><tr><td>valid</td><td>boolean</td><td>\u5426</td><td>\u4E0A\u4F20\u8D44\u6E90\u662F\u5426\u7B26\u5408\u8981\u6C42</td><td>false</td></tr><tr><td>draggable</td><td>boolean</td><td>\u5426</td><td>\u8BBE\u7F6E\u4E3Atrue\u5141\u8BB8\u62D6\u62FD\u4E0A\u4F20</td><td>false</td></tr><tr><td>headers</td><td>object</td><td>\u5426</td><td>\u4E0A\u4F20\u65F6\u9700\u8981\u9644\u5E26\u7684http \u8BF7\u6C42\u5934</td><td>false</td></tr><tr><td>action</td><td>string</td><td>\u662F</td><td>\u4E0A\u4F20\u5730\u5740</td><td>-</td></tr><tr><td>name</td><td>string</td><td>\u5426</td><td>\u4E0A\u4F20\u65F6\u6587\u4EF6\u7684\u540D\u5B57\uFF0CFormData\u7684key\u952E\u540D</td><td>&#39;file&#39;</td></tr><tr><td>data</td><td>object</td><td>\u5426</td><td>\u4E0A\u4F20\u65F6\u9700\u8981\u989D\u5916\u6DFB\u52A0\u5230FormData\u7684k-v\u5BF9</td><td>-</td></tr><tr><td>inputDisabled</td><td>boolean</td><td>\u5426</td><td>input\u8F93\u5165\u6846\u7981\u6B62\u8F93\u5165</td><td>false</td></tr><tr><td>noInput</td><td>boolean</td><td>\u5426</td><td>\u4E0D\u663E\u793A\u8F93\u5165\u6846</td><td>false</td></tr><tr><td>buttonName</td><td>string</td><td>\u5426</td><td>\u4E0A\u4F20\u6309\u94AE\u7684\u540D\u5B57</td><td>&#39;\u4E0A\u4F20&#39;</td></tr><tr><td>withCredentials</td><td>boolean</td><td>\u5426</td><td>http\u8BF7\u6C42\u662F\u5426\u5F00\u53D1withCredentials\uFF0C\u8DE8\u57DF\u65F6\u8BBE\u7F6E\u4E3Atrue\u624D\u4F1A\u5E26\u4E0Acookie</td><td>false</td></tr><tr><td>multiple</td><td>boolean</td><td>\u5426</td><td>\u662F\u5426\u652F\u6301\u591A\u9009</td><td>false</td></tr><tr><td>limit</td><td>number</td><td>\u5426</td><td>multiple\u4E3Atrue\u4E8B\uFF0C\u6700\u591A\u652F\u6301\u51E0\u4E2A\u95EE\u5929</td><td>5</td></tr><tr><td>filesize</td><td>string/number</td><td>\u5426</td><td>\u6587\u4EF6\u6700\u5927\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E0EFile.size\u4E00\u81F4</td><td>-</td></tr><tr><td>accept</td><td>string</td><td>\u5426</td><td>\u53EF\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0Einput\u6807\u7B7E\u7684accept\u4E00\u81F4</td><td>&#39;image/*&#39;</td></tr><tr><td>disabled</td><td>boolean</td><td>\u5426</td><td>multiple\u4E3Atrue\u4E8B\uFF0C\u6700\u591A\u652F\u6301\u51E0\u4E2A\u95EE\u5929</td><td>5</td></tr><tr><td>onBeforeEachUpload</td><td>function</td><td>\u5426</td><td>\u5728\u6BCF\u4E2A\u6587\u4EF6\u4E0A\u4F20\u524D\u8C03\u7528 \u53C2\u6570\u662F\u9009\u4E2D\u7684File\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8FD4\u56DEFile/Promise&lt;File&gt;\u6765\u7EE7\u7EED\u4E0A\u4F20\uFF0C\u901A\u8FC7\u629B\u51FA\u51FA\u9519\u8BEF\u6765\u963B\u6B62\u4E0A\u4F20</td><td>-</td></tr><tr><td>onBeforeAllUpload</td><td>function</td><td>\u5426</td><td>\u5728\u6BCF\u6587\u4EF6\u4E0A\u4F20\u524D\u8C03\u7528 \u53C2\u6570\u662F\u9009\u4E2D\u7684FileList\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8FD4\u56DEtrue/Promise&lt;true&gt;\u6765\u7EE7\u7EED\u4E0A\u4F20\uFF0C\u901A\u8FC7\u8FD4\u56DEfalse/Promise&lt;false&gt;/Promise.reject()\u6765\u963B\u6B62\u4E0A\u4F20</td><td>-</td></tr><tr><td>onAfterEachUpload</td><td>function</td><td>\u5426</td><td>\u5728\u6BCF\u4E2A\u6587\u4EF6\u4E0A\u4F20\u5B8C\u8C03\u7528\uFF0C \u53C2\u6570\u662F\u9009\u4E2D\u7684\u6587\u4EF6\u7684url\u5730\u5740\uFF0C\u8FD4\u56DEtrue/Promise&lt;true&gt;\uFF0C\u503C\u4F1A\u88AB\u5F53\u6210\u6709\u6548\u7684\u503C\uFF1B\u8FD4\u56DEfalse/Promise&lt;false&gt;/Promise.reject()\u6587\u4EF6\u4F1A\u88AB\u4E22\u5F03</td><td>-</td></tr><tr><td>onError</td><td>function</td><td>\u5426</td><td>\u5728\u4E0A\u4F20\u51FA\u9519\u65F6\u8C03\u7528</td><td>-</td></tr><tr><td>resolveUrl</td><td>function</td><td>\u5426</td><td>\u4ECEhttp\u8BF7\u6C42\uFF08\u5C31\u662Faction\u90A3\u4E2A\u5730\u5740\uFF09\u54CD\u5E94\u62FF\u5230\u56FE\u7247\u5730\u5740\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u56FE\u7247\u5730\u5740</td><td>-</td></tr><tr><td>checkUrl</td><td>function</td><td>\u5426</td><td>\u7528\u6765\u68C0\u67E5url\u662F\u5426\u5408\u6CD5\u7684\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u6709\u65F6\u5019\u7EC4\u4EF6\u662F\u6709\u521D\u59CB\u503C\u7684\uFF0C\u9700\u8981\u8FD9\u4E2A\u65B9\u6CD5\u6765\u68C0\u67E5\u4E00\u4E0Burl\u662F\u5426\u7B26\u5408\u8981\u6C42</td><td>-</td></tr></tbody></table><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>update:modelValue</td><td>\u56FE\u7247\u4E0A\u4F20\u65F6\u89E6\u53D1\u66F4\u65B0</td><td>\u65B0\u7684\u503C</td></tr><tr><td>update:valid</td><td>\u56FE\u7247</td><td>modelValue\u6709\u503C\u65F6\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u7ED3\u679C\u662F\u8BE5url\u662F\u5426\u7B26\u5408\u8981\u6C42\uFF0C\u6BD4\u5982url\u5BF9\u5E94\u7684\u6587\u4EF6\u5927\u5C0F</td></tr></tbody></table><h3 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>drag</td><td>\u5141\u8BB8\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u62D6\u62FD\u533A\u57DF\u7684\u663E\u793A\u3002</td><td>-</td></tr><tr><td>button</td><td>\u70B9\u51FB\u4E0A\u4F20\u65F6\uFF0C\u4E0A\u4F20\u6309\u94AE\u7684\u663E\u793A\u5185\u5BB9</td><td>-</td></tr></tbody></table>',6);function O(s,o,d,r,i,k){const c=A("render-demo-0"),l=A("demo"),p=A("render-demo-1"),u=A("render-demo-2");return g(),B("div",null,[_,E(l,{sourceCode:`<template><ClientOnly>
  <Upload
    v-model="file1"
    action="/x/admin/creative/material/upload"
    :resolve-url="resolveLocation"
  />
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file1 = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file1,
      resolveLocation,
    }
  },
})
<\/script>
`},{highlight:m(()=>[b]),default:m(()=>[E(c)]),_:1}),y,w,E(l,{sourceCode:`<template><ClientOnly>
  <Upload
    v-model="file2s"
    :multiple="true"
    action="/x/admin/creative/material/upload"
    :resolve-url="resolveLocation"
  />
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file2s = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file2s,
      resolveLocation,
    }
  },
})
<\/script>
`},{highlight:m(()=>[U]),default:m(()=>[E(p)]),_:1}),x,L,E(l,{sourceCode:`<template><ClientOnly>
  <Upload
    v-model="file4s"
    :draggable="true"
    :multiple="true"
    action="/x/admin/creative/material/upload"
    :resolve-url="resolveLocation"
  />
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file4s = ref([])

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file4s,
      resolveLocation,
    }
  },
})
<\/script>
`},{highlight:m(()=>[V]),default:m(()=>[E(u)]),_:1}),q])}var j=h(D,[["render",O]]);export{P as __pageData,j as default};
