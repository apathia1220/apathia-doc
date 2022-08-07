import{_ as n,c as s,o as a,e as t}from"./app.304b8a2c.js";const g='{"title":"useToggle","description":"","frontmatter":{},"headers":[],"relativePath":"hook/useToggle.md"}',e={},o=t(`<h1 id="usetoggle" tabindex="-1">useToggle <a class="header-anchor" href="#usetoggle" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@apathia/apathia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * val: \u54CD\u5E94\u5F0F\u7684 bool \u503C
     * toggle: \u5207\u6362
     * setValue: fun \u63A5\u6536\u4E00\u4E2A bool \u503C\uFF0C\u5E76\u8D4B\u503C\u7ED9 val
     */</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> toggle<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),p=[o];function c(l,u,i,r,k,_){return a(),s("div",null,p)}var f=n(e,[["render",c]]);export{g as __pageData,f as default};
