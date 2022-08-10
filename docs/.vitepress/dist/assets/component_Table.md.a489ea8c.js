import{_ as A,V as m,c as v,a as h,w as f,d as n,e as a,b as D,r as F,o as _}from"./app.e2385e3b.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{columns:s.columns,data:s.data},null,8,["columns","data"])]),_:1})])}const{reactive:d,defineComponent:e}=m,g=e({setup(){return{data:d([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),columns:[{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone",prop:"phone"},{title:"Address",field:"address"}]}}});return{render:y,...g}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{columns:s.columns,data:s.data,"header-row-class-name":s.headerRowClass,"header-row-style":s.headerRowStyle,"header-cell-class-name":s.headerCellClassName,"header-cell-style":s.headerCellStyle,"row-class-name":s.rowClassName,"row-style":s.rowStyle,"cell-class-name":s.cellClassName,"cell-style":s.cellStyle},null,8,["columns","data","header-row-class-name","header-row-style","header-cell-class-name","header-cell-style","row-class-name","row-style","cell-class-name","cell-style"])]),_:1})])}const{reactive:d,defineComponent:e}=m,g=e({setup(){return{data:d([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),columns:[{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone",prop:"phone"},{title:"Address",field:"address"}],headerRowClass:()=>"outline-black",headerRowStyle:()=>({fontSize:"22px"}),headerCellClassName:({colIndex:w})=>"class-green",headerCellStyle:({colIndex:w})=>w===1?{fontSize:"22px"}:{color:"blue"},rowClassName:({rowIndex:w})=>w===1?"row-min":"row-large",rowStyle:({rowIndex:w})=>w===2?{fontSize:"16px"}:{fontSize:"14px"},cellClassName:({rowIndex:w,colIndex:x})=>w===1&&x===1?"oneone":"others",cellStyle:({row:w,colIndex:x})=>x===1&&w.age>20?{color:"red"}:null}}});return{render:y,...g}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{columns:s.columns,data:s.data,"cell-span":s.cellSpan},null,8,["columns","data","cell-span"])]),_:1})])}const{reactive:d,defineComponent:e}=m,g=e({setup(){return{data:d([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),columns:[{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone",prop:"phone"},{title:"Address",field:"address"}],cellSpan:({rowIndex:t,colIndex:b})=>b===2&&t===2?[2,1]:b===2&&t===3?[0,1]:b===1&&t===4?[1,5]:t===4?[1,0]:[1,1]}}});return{render:y,...g}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{columns:s.fixedColumns,data:s.data,scroll:{width:400}},null,8,["columns","data"])]),_:1})])}const{reactive:d,defineComponent:e}=m,g=e({setup(){return{data:d([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),fixedColumns:[{title:"\u59D3\u540D",field:"name",fixed:"left",width:100},{title:"age",field:"age"},{title:"Home phone",field:"tel",width:200},{title:"age",field:"age"},{title:"Home phone",field:"tel"},{title:"age",field:"age",width:200},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}]}}});return{render:y,...g}}(),"render-demo-4":function(){const{toDisplayString:p,createElementVNode:l,createTextVNode:u,resolveComponent:k,withCtx:i,createVNode:y,openBlock:d,createElementBlock:e}=m,g=u("\u5207\u6362");function s(c,C){const E=k("BaseButton"),B=k("Table"),N=k("ClientOnly");return d(),e("div",null,[y(N,null,{default:i(()=>[l("span",null,"\u663E\u793A\u59D3\u540D\uFF1A"+p(c.showName),1),y(E,{onClick:C[0]||(C[0]=w=>c.toggleShowName())},{default:i(()=>[g]),_:1}),y(B,{columns:c.toggledColumns,data:c.data},null,8,["columns","data"])]),_:1})])}const{reactive:r,defineComponent:o,ref:t}=m,b=o({setup(){const c=r([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),C=[{title:"\u59D3\u540D",field:"name",when:()=>E.value},{title:"age",field:"age"},{title:"Home phone",field:"tel",width:200},{title:"age",field:"age"},{title:"Home phone",field:"tel"},{title:"age",field:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}],E=t(!0);return{data:c,toggledColumns:C,showName:E,toggleShowName:()=>{E.value=!E.value}}}});return{render:s,...b}}(),"render-demo-5":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(r,o){const t=p("Table"),b=p("ClientOnly");return k(),i("div",null,[l(b,null,{default:u(()=>[l(t,{current:r.currentKey,"onUpdate:current":o[0]||(o[0]=c=>r.currentKey=c),"row-key":"key",columns:r.highlightColumns,data:r.data,"highlight-current-row":""},null,8,["current","columns","data"])]),_:1})])}const{reactive:d,defineComponent:e,ref:g}=m,s=e({setup(){const r=d([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),o=[{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel",width:200},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}],t=g("4");return{data:r,highlightColumns:o,currentKey:t}}});return{render:y,...s}}(),"render-demo-6":function(){const{resolveComponent:p,createVNode:l,createElementVNode:u,toDisplayString:k,createTextVNode:i,withCtx:y,openBlock:d,createElementBlock:e}=m,g=u("span",{style:{color:"#ba16e7"}},"selected:",-1),s=u("span",{style:{color:"#ba16e7"}},"selectedKeys:",-1);function r(c,C){const E=p("Table"),B=p("ClientOnly");return d(),e("div",null,[l(B,null,{default:y(()=>[l(E,{selected:c.selected,"onUpdate:selected":C[0]||(C[0]=N=>c.selected=N),selectedKeys:c.selectedKeys,"onUpdate:selectedKeys":C[1]||(C[1]=N=>c.selectedKeys=N),"row-key":"key",data:c.data,columns:c.multiselectColumns},null,8,["selected","selectedKeys","data","columns"]),u("p",null,[g,i(" "+k(c.selected),1)]),u("p",null,[s,i(" "+k(c.selectedKeys),1)])]),_:1})])}const{ref:o,defineComponent:t}=m,b=t({setup(){const c=o([]),C=o([]);return{data:[{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}],multiselectColumns:[{title:"\u5168\u9009",width:40,type:"selection"},{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}],selected:c,selectedKeys:C}}});return{render:r,...b}}(),"render-demo-7":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{"row-key":"key",sort:s.tableSort,columns:s.sortColumns,data:s.data},null,8,["sort","columns","data"])]),_:1})])}const{defineComponent:d,reactive:e}=m,g=d({setup(){const s=e({prop:"age",order:"desc"});return{data:[{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}],tableSort:s,sortColumns:[{title:"\u59D3\u540D",field:"name"},{title:"age",field:"age",sortable:!0,prop:"age"},{title:"Home phone",field:"tel",width:200},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel"},{title:"age",field:"age",prop:"age"},{title:"Home phone",field:"tel",sortable:!0,prop:"phone"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}]}}});return{render:y,...g}}(),"render-demo-8":function(){const{resolveComponent:p,createVNode:l,withCtx:u,openBlock:k,createElementBlock:i}=m;function y(s,r){const o=p("Table"),t=p("ClientOnly");return k(),i("div",null,[l(t,null,{default:u(()=>[l(o,{columns:s.expandColumns,data:s.data,expand:s.expandConfig},null,8,["columns","data","expand"])]),_:1})])}const{defineComponent:d,reactive:e}=m,g=d({setup(){const s=[{title:"\u7D22\u5F15",type:"index"},{title:"\u5C55\u5F00",type:"expand",width:50},{title:"\u59D3\u540D",field:"name",width:100},{title:"age",field:"age"},{title:"Home phone",field:"tel"},{title:"Phone",field:"phone"},{title:"Address",field:"address"}];return{data:e([{key:"11",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park",father:{name:"Bob",age:34}},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park",father:{name:"Cnaob",age:37}},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park",father:{name:"Jacy",age:56}},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park",father:{name:"Mike",age:43}},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park",father:{name:"Jerry",age:43}}]),expandColumns:s,expandConfig:{expandRowRender:({row:t})=>t.age,rowExpandable:({row:t})=>t.age>30}}}});return{render:y,...g}}()}},un='{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u5408\u5E76","slug":"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u5408\u5E76"},{"level":2,"title":"\u56FA\u5B9A\u5217","slug":"\u56FA\u5B9A\u5217"},{"level":2,"title":"\u52A8\u6001\u663E\u793A\u9690\u85CF\u67D0\u4E00\u4E2A\u5217","slug":"\u52A8\u6001\u663E\u793A\u9690\u85CF\u67D0\u4E00\u4E2A\u5217"},{"level":2,"title":"\u8868\u683C\u5355\u9009","slug":"\u8868\u683C\u5355\u9009"},{"level":2,"title":"\u8868\u683C\u591A\u9009","slug":"\u8868\u683C\u591A\u9009"},{"level":2,"title":"\u8868\u683C\u6392\u5E8F","slug":"\u8868\u683C\u6392\u5E8F"},{"level":2,"title":"\u8868\u683C\u5C55\u5F00\u62D3\u5C55\u884C","slug":"\u8868\u683C\u5C55\u5F00\u62D3\u5C55\u884C"},{"level":2,"title":"props","slug":"props"}],"relativePath":"component/Table.md"}',L=n("h1",{id:"table",tabindex:"-1"},[a("Table "),n("a",{class:"header-anchor",href:"#table","aria-hidden":"true"},"#")],-1),P=n("p",null,"\u8868\u683C",-1),S=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),R=n("p",null,[a("\u6307\u5B9A "),n("code",null,"columns"),a(" \u548C "),n("code",null,"data"),a(" \u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u8868\u683C")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),H=n("h2",{id:"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F","aria-hidden":"true"},"#")],-1),T=n("p",null,"\u6307\u5B9A table \u7684\u76F8\u5173\u7279\u6027\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u884C\uFF0C\u5217\uFF0C\u5355\u5143\u683C\u7684\u6837\u5F0F",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-row-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerRowClass"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-row-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerRowStyle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-cell-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerCellClassName"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-cell-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerCellStyle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":row-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rowClassName"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":row-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rowStyle"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":cell-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cellClassName"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":cell-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cellStyle"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"headerRowClass"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token string"},"'outline-black'"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"headerRowStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'22px'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"headerCellClassName"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" colIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      colIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'class-green'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'class-green'"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"headerCellStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" colIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      colIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'22px'"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blue'"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"rowClassName"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" rowIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      rowIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'row-min'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'row-large'"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"rowStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" rowIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      rowIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'16px'"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"fontSize"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'14px'"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"cellClassName"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" colIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      rowIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"&&"),a(" colIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'oneone'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'others'"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"cellStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" row"),n("span",{class:"token punctuation"},","),a(" colIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      colIndex `),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"&&"),a(" row"),n("span",{class:"token punctuation"},"."),a("age "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"20"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'red'"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"null"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`

      headerRowClass`),n("span",{class:"token punctuation"},","),a(`
      headerRowStyle`),n("span",{class:"token punctuation"},","),a(`
      headerCellClassName`),n("span",{class:"token punctuation"},","),a(`
      headerCellStyle`),n("span",{class:"token punctuation"},","),a(`
      rowClassName`),n("span",{class:"token punctuation"},","),a(`
      rowStyle`),n("span",{class:"token punctuation"},","),a(`
      cellClassName`),n("span",{class:"token punctuation"},","),a(`
      cellStyle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("h2",{id:"\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u5408\u5E76",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u5408\u5E76 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u5408\u5E76","aria-hidden":"true"},"#")],-1),K=n("p",null,[a("\u6307\u5B9A "),n("code",null,"cell-span"),a(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u63A7\u5236\u5355\u5143\u683C\u7684\u5408\u5E76")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":cell-span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cellSpan"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5408\u5E76\u3002\u8FD4\u56DE [colSpan, rowSpan]\u3002"),a(`
    `),n("span",{class:"token comment"},"// colSpan \u662F 2 \u8868\u793A\u5360\u7528\u4E24\u5217\u3002\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u3002\u7B2C2\u884C\u7B2C2\u5217\u5360\u7528\u4E86\u4E24\u5217[2, 1]\u3002\u6240\u4EE5\u7B2C2\u884C\u7B2C3\u5217\u5E94\u8BE5\u8BBE\u7F6EcolSpan\u4E3A0\u3002"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"cellSpan"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" colIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("colIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"&&"),a(" rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("colIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"&&"),a(" rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("colIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"&&"),a(" rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`
      cellSpan`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),G=n("h2",{id:"\u56FA\u5B9A\u5217",tabindex:"-1"},[a("\u56FA\u5B9A\u5217 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u5217","aria-hidden":"true"},"#")],-1),M=n("p",null,[a("\u5728 column \u4E2D\u52A0\u4E0A "),n("code",null,"fixed"),a(" \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u56FA\u5B9A\u5217\u3002\u4F7F\u7528\u56FA\u5B9A\u5217\uFF0C\u6700\u597D\u4F7F\u7528 "),n("code",null,"scroll"),a(" \u5C5E\u6027\u7F6E\u9876\u6700\u5927\u7684\u5BBD\u5EA6")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fixedColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ width: 400 }"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" fixedColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"fixed"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token comment"},"// fixed: 'right',"),a(`
        `),n("span",{class:"token comment"},"// width: 300,"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      fixedColumns`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h2",{id:"\u52A8\u6001\u663E\u793A\u9690\u85CF\u67D0\u4E00\u4E2A\u5217",tabindex:"-1"},[a("\u52A8\u6001\u663E\u793A\u9690\u85CF\u67D0\u4E00\u4E2A\u5217 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u663E\u793A\u9690\u85CF\u67D0\u4E00\u4E2A\u5217","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("\u663E\u793A\u59D3\u540D\uFF1A{{ showName }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("BaseButton")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggleShowName()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5207\u6362"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("BaseButton")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggledColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" toggledColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"when"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" showName"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" showName "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggleShowName"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showName`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("showName"),n("span",{class:"token punctuation"},"."),a(`value
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      toggledColumns`),n("span",{class:"token punctuation"},","),a(`
      showName`),n("span",{class:"token punctuation"},","),a(`
      toggleShowName`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),z=n("h2",{id:"\u8868\u683C\u5355\u9009",tabindex:"-1"},[a("\u8868\u683C\u5355\u9009 "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u5355\u9009","aria-hidden":"true"},"#")],-1),U=n("p",null,[a("\u901A\u8FC7\u5C06 "),n("code",null,"highlight-current-row"),a(" \u8BBE\u7F6E\u4E3Atrue \u5B9E\u73B0\u9AD8\u4EAE\u6548\u679C\u3002\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"v-model:current"),a(" \u62FF\u5230\u9009\u4E2D\u884C\u7684\u552F\u4E00\u7D22\u5F15\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"v-model:currentSelected"),a("\u62FF\u5230\u9009\u4E2D\u884C\u7684\u6570\u636E\u5BF9\u8C61\u3002")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("current")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("currentKey"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("key"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("highlightColumns"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"highlight-current-row"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" highlightColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" currentKey "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      highlightColumns`),n("span",{class:"token punctuation"},","),a(`
      currentKey`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=n("h2",{id:"\u8868\u683C\u591A\u9009",tabindex:"-1"},[a("\u8868\u683C\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u591A\u9009","aria-hidden":"true"},"#")],-1),X=n("p",null,[a("columns \u4E2D\u53EF\u4EE5\u5B9A\u4E49 \u4E00\u4E2A type: 'selection' \u7684\u591A\u9009\u5217\uFF0C\u5728Table\u4E0A\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"v-model:selected"),a(" \u62FF\u5230\u9009\u4E2D\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"v-model:selectedKeys"),a(" \u62FF\u5230 \u552F\u4E00id\u6570\u7EC4\uFF0C\u552F\u4E00id\u9700\u8981\u4F7F\u7528 "),n("code",null,"rowKey"),a(" \u6765\u6307\u5B9A\uFF0C\u5927\u90E8\u5206\u573A\u666F\u90FD\u53EA\u9700\u8981\u5355\u72EC\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A v-model")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("selected")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("selectedKeys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectedKeys"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("key"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiselectColumns"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #ba16e7")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("selected:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(" {{ selected }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #ba16e7")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("selectedKeys:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(" {{ selectedKeys }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// [obj1, obj2]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selected "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token comment"},"// [obj1[key], obj2[key]]"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectedKeys "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" multiselectColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token comment"},"// \u5B9A\u4E49\u4E00\u4E2A type: 'selection' \u5217\u663E\u793A <Checkbox />"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5168\u9009'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'selection'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      multiselectColumns`),n("span",{class:"token punctuation"},","),a(`
      selected`),n("span",{class:"token punctuation"},","),a(`
      selectedKeys`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=n("h2",{id:"\u8868\u683C\u6392\u5E8F",tabindex:"-1"},[a("\u8868\u683C\u6392\u5E8F "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u6392\u5E8F","aria-hidden":"true"},"#")],-1),an=n("p",null,[a("\u8868\u683C\u652F\u6301 "),n("code",null,"sort"),a(" \u5C5E\u6027\uFF0C\u5B9A\u4E49\u7528\u6765\u5B9A\u4E49\u5F53\u524D\u8868\u683C\u88AB\u6FC0\u6D3B\u7684\u6392\u5E8F")],-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("key"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":sort"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableSort"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sortColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"// \u8868\u793A\u5F53\u524D\u8868\u683C\u6FC0\u6D3B\u7684\u6392\u5E8F"),a(`
    `),n("span",{class:"token comment"},"// \u70B9\u51FB\u4E8B\u4EF6\u4E2D\u4F60\u9700\u8981\u5BF9\u6B21\u8FDB\u884C\u4FEE\u6539"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableSort "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"order"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'desc'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token comment"},"// const [tableUtils5] = createTable(sortColumns)"),a(`

    `),n("span",{class:"token comment"},"// sortable: true \u663E\u793A\u6392\u5E8F\u6309\u94AE"),a(`
    `),n("span",{class:"token comment"},"// prop \u8868\u793A\u4EE5\u4EC0\u4E48\u6392\u5E8F"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" sortColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"sortable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"sortable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token comment"},"// const onTableSortChange = ({ prop, order }) => {"),a(`
    `),n("span",{class:"token comment"},"//   // \u4FEE\u6539sort\u3002\u6570\u636E\u9A71\u52A8\u89C6\u56FE"),a(`
    `),n("span",{class:"token comment"},"//   tableSort.prop = prop"),a(`
    `),n("span",{class:"token comment"},"//   tableSort.order = order"),a(`

    `),n("span",{class:"token comment"},"//   // \u8FD9\u91CC\u53EF\u4EE5\u662F\u672C\u5730\u6392\u5E8F\u6216\u8005\u62C9\u53D6\u63A5\u53E3\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u5BF9\u8868\u683C\u5185\u5BB9\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C"),a(`
    `),n("span",{class:"token comment"},"//   tableUtils5.setData("),a(`
    `),n("span",{class:"token comment"},"//     cloneDeep("),a(`
    `),n("span",{class:"token comment"},"//       data.value.sort("),a(`
    `),n("span",{class:"token comment"},"//         (v1, v2) => (v1[prop] - v2[prop]) * (order === 'asc' ? 1 : -1),"),a(`
    `),n("span",{class:"token comment"},"//       ),"),a(`
    `),n("span",{class:"token comment"},"//     ),"),a(`
    `),n("span",{class:"token comment"},"//   )"),a(`
    `),n("span",{class:"token comment"},"// }"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      tableSort`),n("span",{class:"token punctuation"},","),a(`
      sortColumns`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"//   onTableSortChange,"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),tn=n("h2",{id:"\u8868\u683C\u5C55\u5F00\u62D3\u5C55\u884C",tabindex:"-1"},[a("\u8868\u683C\u5C55\u5F00\u62D3\u5C55\u884C "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u5C55\u5F00\u62D3\u5C55\u884C","aria-hidden":"true"},"#")],-1),en=n("p",null,[a("\u901A\u8FC7 "),n("code",null,"expand"),a(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u8868\u683C\u7684\u6269\u5C55\u884C\u663E\u793A")],-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("Table")]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("expandColumns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("expandConfig"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" expandColumns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7D22\u5F15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// type: 'expand' \u5B9A\u4E49\u4E00\u4E2A\u6269\u5C55\u5217\uFF0C\u5982\u679C\u8BE5\u884C\u53EF\u4EE5"),a(`
      `),n("span",{class:"token comment"},"// \u88AB\u6269\u5C55\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u4E00\u4E2A  + \u53F7"),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5C55\u5F00'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'expand'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u59D3\u540D'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Home phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tel'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Phone'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'phone'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Address'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"field"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'address'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'John Brown'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898989"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'New York No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`

        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"34"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0571-22098333'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18889898888"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Cnaob'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"37"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Joe Black'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Sidney No. 1 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacy'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jim Red'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'London No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mike'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jake White'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"tel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0575-22098909'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"phone"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"18900010002"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dublin No. 2 Lake Park'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"father"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jerry'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" expandConfig "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// \u6269\u5C55\u884C\u91CC\u663E\u793A\u7684\u5185\u5BB9"),a(`
      `),n("span",{class:"token function-variable function"},"expandRowRender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" row "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" row"),n("span",{class:"token punctuation"},"."),a("age"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token comment"},"// \u8FD4\u56DE\u4E00\u4E2Abool\u503C\u7528\u6765\u63A7\u5236\u8BE5\u884C\u662F\u5426\u53EF\u4EE5\u6709\u6269\u5C55\u884C"),a(`
      `),n("span",{class:"token function-variable function"},"rowExpandable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" row "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" row"),n("span",{class:"token punctuation"},"."),a("age "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      expandColumns`),n("span",{class:"token punctuation"},","),a(`
      expandConfig`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),pn=D(`<div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">BaseColumn</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6807\u9898\uFF0C \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u662F\u81EA\u5B9A\u4E49\u6E32\u67D3 title: () =&gt; &lt;span&gt;ab&lt;span&gt;</span>
  title<span class="token operator">:</span> CustomRender
  <span class="token comment">// \u5BBD\u5EA6</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token comment">// \u5BF9\u9F50\u65B9\u5F0F</span>
  align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>
  <span class="token comment">// \u5355\u5143\u683C class</span>
  <span class="token class-name">className</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// theader &gt; th \u7684colSpan</span>
  colSpan<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u662F\u5426\u53EF\u6392\u5E8F</span>
  sortable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u6392\u5E8Fprop</span>
  prop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u6392\u5E8F\u4F7F\u7528\u7684\u5B57\u6BB5</span>
  <span class="token comment">// \u7279\u6B8A\u7C7B\u578B\uFF0Cselection \u662F\u591A\u9009\uFF0Cindex \u662F\u7D22\u5F15\uFF0C expand\u662F\u5C55\u5F00\u6309\u94AE</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;index&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;expand&#39;</span>
  <span class="token comment">// \u56FA\u5B9A\u5230\u6628\u5929\u6216\u8005\u53F3\u8FB9</span>
  fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token comment">// \u4EC0\u4E48\u65F6\u5019\u663E\u793A\u8BE5\u5217</span>
  when<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u8FC7 field \u6307\u5B9A\u663E\u793A\u7684\u5185\u5BB9</span>
<span class="token keyword">interface</span> <span class="token class-name">FieldColumn</span> <span class="token keyword">extends</span> <span class="token class-name">BaseColumn</span> <span class="token punctuation">{</span>
  field<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u8FC7render \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u6E32\u67D3\uFF0C\u5165\u53C2\u662F row, rowIndex, colIndex</span>
<span class="token keyword">interface</span> <span class="token class-name">RenderColumn</span> <span class="token keyword">extends</span> <span class="token class-name">BaseColumn</span> <span class="token punctuation">{</span>
  render<span class="token operator">:</span> RenderFn<span class="token operator">&lt;</span><span class="token punctuation">{</span> row<span class="token operator">?</span><span class="token operator">:</span> DataItem<span class="token punctuation">;</span> colIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> rowIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u8FC7 buttons\u6765\u6E32\u67D3\u6309\u94AE</span>
<span class="token keyword">interface</span> <span class="token class-name">ButtonColumn</span> <span class="token keyword">extends</span> <span class="token class-name">BaseColumn</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">buttons</span><span class="token operator">:</span> <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token punctuation">{</span>
    row<span class="token operator">?</span><span class="token operator">:</span> DataItem
    rowIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    colIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Button<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Column</span> <span class="token operator">=</span> FieldColumn <span class="token operator">|</span> ButtonColumn <span class="token operator">|</span> RenderColumn <span class="token operator">|</span> ButtonColumn

</code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2>`,2),ln=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"prop"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"right"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"right"}},"\u9ED8\u8BA4\u503C")])]),n("tbody",null,[n("tr",null,[n("td",null,"data"),n("td",{style:{"text-align":"center"}},"\u8868\u683C\u91CC\u7684\u6570\u636E"),n("td",{style:{"text-align":"right"}},"Array"),n("td",{style:{"text-align":"right"}},"[]")]),n("tr",null,[n("td",null,"columns"),n("td",{style:{"text-align":"center"}},"\u5217\u9009\u9879"),n("td",{style:{"text-align":"right"}},"Column[]"),n("td",{style:{"text-align":"right"}},"[]")]),n("tr",null,[n("td",null,"stripe"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u542F\u7528\u6591\u9A6C\u7EB9"),n("td",{style:{"text-align":"right"}},"boolean"),n("td",{style:{"text-align":"right"}},"false")]),n("tr",null,[n("td",null,"border"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u542F\u7528\u8868\u683Cborder"),n("td",{style:{"text-align":"right"}},"boolean"),n("td",{style:{"text-align":"right"}},"false")]),n("tr",null,[n("td",null,"headerRowClassName"),n("td",{style:{"text-align":"center"}},"header row \u7684class \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 () => string"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"headerRowStyle"),n("td",{style:{"text-align":"center"}},"header row style \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 () => ({})"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"headerCellClassName"),n("td",{style:{"text-align":"center"}},"header cell \u7684class \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ colIndex }) => string"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"headerCellStyle"),n("td",{style:{"text-align":"center"}},"header cell \u7684style \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ colIndex}) => ({})"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"rowClassName"),n("td",{style:{"text-align":"center"}},"tbody row \u7684class \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ row, rowIndex }) => string"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"rowStyle"),n("td",{style:{"text-align":"center"}},"tbody row \u7684style \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ row, rowIndex }) => ({})"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"cellClassName"),n("td",{style:{"text-align":"center"}},"tbody td cell \u7684class \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ row, rowIndex, col, colIndex }) => string"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"cellStyle"),n("td",{style:{"text-align":"center"}},"tbody row \u7684style \u751F\u6210\u51FD\u6570"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ row, rowIndex, col, colIndex }) => ({})"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"cellSpan"),n("td",{style:{"text-align":"center"}},"\u7528\u6765\u5904\u7406\u5355\u5143\u683C\u5408\u5E76\uFF0C\u8FD4\u56DE[colspan, rowspan]\u8868\u793A\u4E00\u4E2Atd \u7684colspan\u548Crowspan\uFF0C\u5176\u4E2D\u4E00\u4E2A\u4E3A0\uFF0C\u8FD9\u4E2A\u5355\u5143\u683C\u4E0D\u73B0\u5B9E"),n("td",{style:{"text-align":"right"}},"\u51FD\u6570 ({ row, rowIndex, col, colIndex }) => ({})"),n("td",{style:{"text-align":"right"}},"() => [1, 1]")]),n("tr",null,[n("td",null,"height"),n("td",{style:{"text-align":"center"}},"table\u7684\u9AD8\u5EA6"),n("td",{style:{"text-align":"right"}},"Number"),n("td",{style:{"text-align":"right"}},"\u65E0")]),n("tr",null,[n("td",null,"showHeader"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u663E\u793Atable header"),n("td",{style:{"text-align":"right"}},"boolean"),n("td",{style:{"text-align":"right"}},"true")]),n("tr",null,[n("td",null,"showData"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u663E\u793Atable body"),n("td",{style:{"text-align":"right"}},"boolean"),n("td",{style:{"text-align":"right"}},"true")]),n("tr",null,[n("td",null,"rowKey"),n("td",{style:{"text-align":"center"}},"\u8868\u683C\u6570\u636E\u7684\u552F\u4E00\u952E\u7D22\u5F15"),n("td",{style:{"text-align":"right"}},"string"),n("td",{style:{"text-align":"right"}},"'id'")]),n("tr",null,[n("td",null,"highlightCurrentRow"),n("td",{style:{"text-align":"center"}},"\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u884C\uFF0C\u53EF\u4EE5\u7ED3\u5408 current\u5B9E\u73B0\u5355\u9009"),n("td",{style:{"text-align":"right"}},"boolean"),n("td",{style:{"text-align":"right"}},"true")]),n("tr",null,[n("td",null,"current"),n("td",{style:{"text-align":"center"}},"\u5F53\u524D\u9009\u4E2D\u7684\u884Cindex"),n("td",{style:{"text-align":"right"}},"Number"),n("td",{style:{"text-align":"right"}},"-1")]),n("tr",null,[n("td",null,"selected"),n("td",{style:{"text-align":"center"}},"\u591A\u9009\u9009\u4E2D\u7684\u884C"),n("td",{style:{"text-align":"right"}},"Array"),n("td",{style:{"text-align":"right"}},"[]")]),n("tr",null,[n("td",null,"selectedKeys"),n("td",{style:{"text-align":"center"}},"\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u884C\u7684\u552F\u4E00key \u96C6\u5408"),n("td",{style:{"text-align":"right"}},"Array"),n("td",{style:{"text-align":"right"}},"[]")]),n("tr",null,[n("td",null,"sort"),n("td",{style:{"text-align":"center"}},"\u8868\u683C\u6392\u5E8F"),n("td",{style:{"text-align":"right"}},"({ order: 'asc' | 'desc', prop: string })"),n("td",{style:{"text-align":"right"}},"{}")]),n("tr",null,[n("td",null,"expand"),n("td",{style:{"text-align":"center"}},"\u6269\u5C55\u884C\u914D\u7F6E"),n("td",{style:{"text-align":"right"}},"({ rowExpandable: () => boolean, expandRowRender: CustomeRender })"),n("td",{style:{"text-align":"right"}},"() => {}")]),n("tr",null,[n("td",null,"scroll"),n("td",{style:{"text-align":"center"}},"\u8868\u683C\u6A2A\u5411\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6307\u5B9Awidth\u5C5E\u6027"),n("td",{style:{"text-align":"right"},"width:":"",number:""}),n("td",{style:{"text-align":"right"}},"{}")])])],-1);function rn(p,l,u,k,i,y){const d=F("render-demo-0"),e=F("demo"),g=F("render-demo-1"),s=F("render-demo-2"),r=F("render-demo-3"),o=F("render-demo-4"),t=F("render-demo-5"),b=F("render-demo-6"),c=F("render-demo-7"),C=F("render-demo-8");return _(),v("div",null,[L,P,S,R,h(e,{sourceCode:`<template><ClientOnly>
  <Table :columns="columns" :data="data" />
</ClientOnly></template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])
    const columns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
        prop: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]
    return {
      data,
      columns,
    }
  },
})
<\/script>
`},{highlight:f(()=>[I]),default:f(()=>[h(d)]),_:1}),H,T,h(e,{sourceCode:`<template><ClientOnly>
  <Table
    :columns="columns"
    :data="data"
    :header-row-class-name="headerRowClass"
    :header-row-style="headerRowStyle"
    :header-cell-class-name="headerCellClassName"
    :header-cell-style="headerCellStyle"
    :row-class-name="rowClassName"
    :row-style="rowStyle"
    :cell-class-name="cellClassName"
    :cell-style="cellStyle"
  />
</ClientOnly></template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])
    const columns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
        prop: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    // \u81EA\u5B9A\u4E49\u8868\u683C\u7684\u6837\u5F0F
    const headerRowClass = () => 'outline-black'
    const headerRowStyle = () => ({ fontSize: '22px' })
    const headerCellClassName = ({ colIndex }) =>
      colIndex === 1 ? 'class-green' : 'class-green'
    const headerCellStyle = ({ colIndex }) =>
      colIndex === 1 ? { fontSize: '22px' } : { color: 'blue' }
    const rowClassName = ({ rowIndex }) =>
      rowIndex === 1 ? 'row-min' : 'row-large'
    const rowStyle = ({ rowIndex }) =>
      rowIndex === 2 ? { fontSize: '16px' } : { fontSize: '14px' }
    const cellClassName = ({ rowIndex, colIndex }) =>
      rowIndex === 1 && colIndex === 1 ? 'oneone' : 'others'
    const cellStyle = ({ row, colIndex }) =>
      colIndex === 1 && row.age > 20 ? { color: 'red' } : null

    return {
      data,
      columns,

      headerRowClass,
      headerRowStyle,
      headerCellClassName,
      headerCellStyle,
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,
    }
  },
})
<\/script>
`},{highlight:f(()=>[q]),default:f(()=>[h(g)]),_:1}),O,K,h(e,{sourceCode:`<template><ClientOnly>
  <Table :columns="columns" :data="data" :cell-span="cellSpan" />
</ClientOnly></template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])
    const columns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
        prop: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    // \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5408\u5E76\u3002\u8FD4\u56DE [colSpan, rowSpan]\u3002
    // colSpan \u662F 2 \u8868\u793A\u5360\u7528\u4E24\u5217\u3002\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u3002\u7B2C2\u884C\u7B2C2\u5217\u5360\u7528\u4E86\u4E24\u5217[2, 1]\u3002\u6240\u4EE5\u7B2C2\u884C\u7B2C3\u5217\u5E94\u8BE5\u8BBE\u7F6EcolSpan\u4E3A0\u3002
    const cellSpan = ({ rowIndex, colIndex }) => {
      if (colIndex === 2 && rowIndex === 2) return [2, 1]
      if (colIndex === 2 && rowIndex === 3) return [0, 1]
      if (colIndex === 1 && rowIndex === 4) return [1, 5]
      if (rowIndex === 4) return [1, 0]
      return [1, 1]
    }

    return {
      data,
      columns,
      cellSpan,
    }
  },
})
<\/script>
`},{highlight:f(()=>[V]),default:f(()=>[h(s)]),_:1}),G,M,h(e,{sourceCode:`<template><ClientOnly>
  <Table :columns="fixedColumns" :data="data" :scroll="{ width: 400 }" />
</ClientOnly></template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])

    const fixedColumns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
        fixed: 'left',
        width: 100,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'age',
        field: 'age',
        width: 200,
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
        // fixed: 'right',
        // width: 300,
      },
    ]

    return {
      data,
      fixedColumns,
    }
  },
})
<\/script>
`},{highlight:f(()=>[W]),default:f(()=>[h(r)]),_:1}),Y,h(e,{sourceCode:`<template><ClientOnly>
  <span>\u663E\u793A\u59D3\u540D\uFF1A{{ showName }}</span>

  <BaseButton @click="toggleShowName()">\u5207\u6362</BaseButton>
  <Table :columns="toggledColumns" :data="data" />
</ClientOnly></template>

<script>
import { reactive, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])

    const toggledColumns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
        when: () => showName.value,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    const showName = ref(true)
    const toggleShowName = () => {
      showName.value = !showName.value
    }

    return {
      data,
      toggledColumns,
      showName,
      toggleShowName,
    }
  },
})
<\/script>
`},{highlight:f(()=>[j]),default:f(()=>[h(o)]),_:1}),z,U,h(e,{sourceCode:`<template><ClientOnly>
  <Table
    v-model:current="currentKey"
    row-key="key"
    :columns="highlightColumns"
    :data="data"
    highlight-current-row
  />
</ClientOnly></template>

<script>
import { reactive, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])

    const highlightColumns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]
    const currentKey = ref('4')

    return {
      data,
      highlightColumns,
      currentKey,
    }
  },
})
<\/script>
`},{highlight:f(()=>[$]),default:f(()=>[h(t)]),_:1}),Q,X,h(e,{sourceCode:`<template><ClientOnly>
  <Table
    v-model:selected="selected"
    v-model:selectedKeys="selectedKeys"
    row-key="key"
    :data="data"
    :columns="multiselectColumns"
  />

  <p><span style="color: #ba16e7">selected:</span> {{ selected }}</p>
  <p><span style="color: #ba16e7">selectedKeys:</span> {{ selectedKeys }}</p>
</ClientOnly></template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // [obj1, obj2]
    const selected = ref([])
    // [obj1[key], obj2[key]]
    const selectedKeys = ref([])

    const multiselectColumns = [
      // \u5B9A\u4E49\u4E00\u4E2A type: 'selection' \u5217\u663E\u793A <Checkbox />
      {
        title: '\u5168\u9009',
        width: 40,
        type: 'selection',
      },
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    const data = [
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ]

    return {
      data,
      multiselectColumns,
      selected,
      selectedKeys,
    }
  },
})
<\/script>
`},{highlight:f(()=>[Z]),default:f(()=>[h(b)]),_:1}),nn,an,h(e,{sourceCode:`<template><ClientOnly>
  <Table row-key="key" :sort="tableSort" :columns="sortColumns" :data="data" />
</ClientOnly></template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    // \u8868\u793A\u5F53\u524D\u8868\u683C\u6FC0\u6D3B\u7684\u6392\u5E8F
    // \u70B9\u51FB\u4E8B\u4EF6\u4E2D\u4F60\u9700\u8981\u5BF9\u6B21\u8FDB\u884C\u4FEE\u6539
    const tableSort = reactive({
      prop: 'age',
      order: 'desc',
    })

    // const [tableUtils5] = createTable(sortColumns)

    // sortable: true \u663E\u793A\u6392\u5E8F\u6309\u94AE
    // prop \u8868\u793A\u4EE5\u4EC0\u4E48\u6392\u5E8F
    const sortColumns = [
      {
        title: '\u59D3\u540D',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        sortable: true,
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        sortable: true,
        prop: 'phone',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    const data = [
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ]

    // const onTableSortChange = ({ prop, order }) => {
    //   // \u4FEE\u6539sort\u3002\u6570\u636E\u9A71\u52A8\u89C6\u56FE
    //   tableSort.prop = prop
    //   tableSort.order = order

    //   // \u8FD9\u91CC\u53EF\u4EE5\u662F\u672C\u5730\u6392\u5E8F\u6216\u8005\u62C9\u53D6\u63A5\u53E3\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u5BF9\u8868\u683C\u5185\u5BB9\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C
    //   tableUtils5.setData(
    //     cloneDeep(
    //       data.value.sort(
    //         (v1, v2) => (v1[prop] - v2[prop]) * (order === 'asc' ? 1 : -1),
    //       ),
    //     ),
    //   )
    // }

    return {
      data,
      tableSort,
      sortColumns,
      //   onTableSortChange,
    }
  },
})
<\/script>
`},{highlight:f(()=>[sn]),default:f(()=>[h(c)]),_:1}),tn,en,h(e,{sourceCode:`<template><ClientOnly>
  <Table :columns="expandColumns" :data="data" :expand="expandConfig" />
</ClientOnly></template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const expandColumns = [
      {
        title: '\u7D22\u5F15',
        type: 'index',
      },
      // type: 'expand' \u5B9A\u4E49\u4E00\u4E2A\u6269\u5C55\u5217\uFF0C\u5982\u679C\u8BE5\u884C\u53EF\u4EE5
      // \u88AB\u6269\u5C55\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u4E00\u4E2A  + \u53F7
      {
        title: '\u5C55\u5F00',
        type: 'expand',
        width: 50,
      },
      {
        title: '\u59D3\u540D',
        field: 'name',
        width: 100,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    const data = reactive([
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ])

    const expandConfig = {
      // \u6269\u5C55\u884C\u91CC\u663E\u793A\u7684\u5185\u5BB9
      expandRowRender: ({ row }) => row.age,
      // \u8FD4\u56DE\u4E00\u4E2Abool\u503C\u7528\u6765\u63A7\u5236\u8BE5\u884C\u662F\u5426\u53EF\u4EE5\u6709\u6269\u5C55\u884C
      rowExpandable: ({ row }) => row.age > 30,
    }

    return {
      data,
      expandColumns,
      expandConfig,
    }
  },
})
<\/script>
`},{highlight:f(()=>[on]),default:f(()=>[h(C)]),_:1}),pn,ln])}var kn=A(J,[["render",rn]]);export{un as __pageData,kn as default};
