import{d as u,o as t,c as s,F as n,D as _,k as a,l,f as c,t as r,a as p,n as h,_ as f}from"./framework.027d2da0.js";const g={class:"post-header"},m={class:"post-title"},v=["href"],k=["innerHTML"],x={class:"post-info"},y=["href"],M={class:"pagination"},N=["href"],P=u({__name:"Page",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(o){return(B,C)=>(t(),s(n,null,[(t(!0),s(n,null,_(o.posts,(e,i)=>(t(),s("div",{key:i,class:"post-list"},[a("div",g,[a("div",m,[a("a",{href:l(c)(e.regularPath)},r(e.frontMatter.title),9,v)])]),a("p",{class:"describe",innerHTML:e.frontMatter.description},null,8,k),a("div",x,[p(r(e.frontMatter.date)+" ",1),(t(!0),s(n,null,_(e.frontMatter.tags,d=>(t(),s("span",null,[a("a",{href:l(c)(`/pages/tags.html?tag=${d}`)},r(d),9,y)]))),256))])]))),128)),a("div",M,[(t(!0),s(n,null,_(o.pagesNum,e=>(t(),s("a",{class:h(["link",{active:o.pageCurrent===e}]),key:e,href:l(c)(e===1?"/index.html":`/page_${e}.html`)},r(e),11,N))),128))])],64))}});const L=f(P,[["__scopeId","data-v-95a2f036"]]);export{L as P};
