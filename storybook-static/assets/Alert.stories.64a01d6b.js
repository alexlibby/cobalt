import"./jsx-runtime.38179261.js";import{c as o,M as H,C as q,S as x,A as R,a as Y}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as K,i as F,s as G,r as Z,w as c,a as O,p as z,d as j,n as V,E as P,e as $,b as _,t as M,c as ee,q as b,u as S,v as W,F as te,x as d,y as E,G as ne,z as U,H as ie,h as se,m as oe,l as ae,g as le}from"./index.cc1fc965.js";function re(n){let e,i=n[2].svg+"",t;return{c(){e=Z("svg"),c(e,"class",t=n[3].class),c(e,"width",n[0]),c(e,"height",n[1]),c(e,"viewBox","0 0 "+n[2].box+" "+n[2].box)},m(s,a){O(s,e,a),e.innerHTML=i},p(s,[a]){a&8&&t!==(t=s[3].class)&&c(e,"class",t),a&1&&c(e,"width",s[0]),a&2&&c(e,"height",s[1])},i:z,o:z,d(s){s&&j(e)}}}function ce(n,e,i){let{width:t="24px"}=e,{height:s="24px"}=e,{iconType:a=""}=e,y=[{box:512,name:"info",svg:`<path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88" /><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" fill="#ffffff" />`},{box:512,name:"warn",svg:'<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" stroke="#000000" fill="none" stroke-miterlimit="10" stroke-width="32"/><path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#000000" />'}].find(r=>r.name===a);return n.$$set=r=>{i(3,e=V(V({},e),P(r))),"width"in r&&i(0,t=r.width),"height"in r&&i(1,s=r.height),"iconType"in r&&i(4,a=r.iconType)},e=P(e),[t,s,y,e,a]}class J extends K{constructor(e){super(),F(this,e,ce,re,G,{width:0,height:1,iconType:4})}}J.__docgen={version:3,name:"Icon.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"24px"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"24px"},{visibility:"public",description:null,keywords:[],name:"iconType",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function B(n){let e,i,t,s,a,u,y,r,p,w,g,m,l,X,f=n[5]&&pe(n);return{c(){e=b("dialog"),i=b("div"),f&&f.c(),t=S(),s=b("div"),a=b("strong"),u=W(n[3]),y=S(),r=W(n[4]),p=S(),w=b("div"),g=b("button"),g.textContent="\u2716",c(i,"class","icon svelte-p9d6qo"),c(s,"class","message svelte-p9d6qo"),c(g,"class","svelte-p9d6qo"),e.open=!0,c(e,"class",te(n[6])+" svelte-p9d6qo"),c(e,"role","alert")},m(h,v){O(h,e,v),d(e,i),f&&f.m(i,null),d(e,t),d(e,s),d(s,a),d(a,u),d(s,y),d(s,r),d(e,p),d(e,w),d(w,g),m=!0,l||(X=[E(g,"click",n[7]),E(e,"click",function(){ne(n[1])&&n[1].apply(this,arguments)})],l=!0)},p(h,v){n=h,n[5]&&f.p(n,v),(!m||v&8)&&U(u,n[3]),(!m||v&16)&&U(r,n[4])},i(h){m||(_(f),m=!0)},o(h){M(f),m=!1},d(h){h&&j(e),f&&f.d(),l=!1,ie(X)}}}function pe(n){let e,i;return e=new J({props:{iconType:n[2]}}),{c(){se(e.$$.fragment)},m(t,s){oe(e,t,s),i=!0},p(t,s){const a={};s&4&&(a.iconType=t[2]),e.$set(a)},i(t){i||(_(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){ae(e,t)}}}function de(n){let e,i,t=n[0]&&B(n);return{c(){t&&t.c(),e=$()},m(s,a){t&&t.m(s,a),O(s,e,a),i=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&_(t,1)):(t=B(s),t.c(),_(t,1),t.m(e.parentNode,e)):t&&(le(),M(t,1,1,()=>{t=null}),ee())},i(s){i||(_(t),i=!0)},o(s){M(t),i=!1},d(s){t&&t.d(s),s&&j(e)}}}function fe(n,e,i){let{show:t}=e,{icon:s}=e,{close:a}=e,{type:u=""}=e,{title:y=""}=e,{description:r=""}=e,p,w=JSON.parse(s);switch(u){case"warn":p="alert-warn";break;case"dark":p="alert-dark";break;case"error":p="alert-error";break;case"info":p="alert-info";break;case"success":p="alert-success";break;default:p=""}const g=["alert",p,"fade-in"].filter(l=>l.length).join(" "),m=()=>{i(0,t=!1)};return n.$$set=l=>{"show"in l&&i(0,t=l.show),"icon"in l&&i(8,s=l.icon),"close"in l&&i(1,a=l.close),"type"in l&&i(2,u=l.type),"title"in l&&i(3,y=l.title),"description"in l&&i(4,r=l.description)},[t,a,u,y,r,w,g,m,s]}class k extends K{constructor(e){super(),F(this,e,fe,de,G,{show:0,icon:8,close:1,type:2,title:3,description:4})}}k.__docgen={version:3,name:"Alert.svelte",data:[{visibility:"public",description:null,keywords:[],name:"show",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"close",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"description",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function I(){return I=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},I.apply(this,arguments)}const ue={},me="wrapper";function C({components:n,...e}){return o(me,I({},ue,e,{components:n,mdxType:"MDXLayout"}),o(H,{title:"Cobalt UI Library/Notification Components/Alert",component:k,mdxType:"Meta"}),o("h1",null,"Alert"),o("p",null,"Alert is the primary component. It has two possible states."),o("ul",null,o("li",{parentName:"ul"},o("a",{parentName:"li",href:"#info"},"Info")),o("li",{parentName:"ul"},o("a",{parentName:"li",href:"#warning"},"Warning"))),o("a",{id:"info"}),o("h2",null,"Info"),o("p",null,"This is the default version of the Alert component."),o(q,{mdxType:"Canvas"},o(x,{id:"cobalt-ui-library-notification-components-alert--info",mdxType:"Story"})),o("a",{id:"warning"}),o("h2",null,"Warning"),o("p",null,"This variant displays the Alert component styled as a warning."),o(q,{mdxType:"Canvas"},o(x,{id:"cobalt-ui-library-notification-components-alert--warning",mdxType:"Story"})),o("h2",null,"Properties of component"),o("p",null,"Below is a list of arguments available for this component:"),o(R,{of:k,mdxType:"ArgsTable"}))}C.isMDXComponent=!0;function N(){return N=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},N.apply(this,arguments)}const A=n=>({Component:k,props:n}),ye={Template:A},ge="wrapper";function Q({components:n,...e}){return o(ge,N({},ye,e,{components:n,mdxType:"MDXLayout"}),o(H,{title:"Cobalt UI Library/Notification Components/Alert",component:k,parameters:{page:null},mdxType:"Meta"}),o(x,{name:"Info",args:{show:!0,description:"An info description",title:"Simple Info",icon:"true",type:"info"},parameters:{docs:{page:C}},mdxType:"Story"},A.bind({})),o(x,{name:"Warning",args:{show:!0,description:"An warning message",title:"Simple warning",icon:"true",type:"warn"},parameters:{docs:{page:C}},mdxType:"Story"},A.bind({})))}Q.isMDXComponent=!0;const L=A.bind({});L.storyName="Info";L.args={show:!0,description:"An info description",title:"Simple Info",icon:"true",type:"info"};L.parameters={storySource:{source:`args => ({
  Component: Alert,
  props: args
})`},docs:{page:C}};const D=A.bind({});D.storyName="Warning";D.args={show:!0,description:"An warning message",title:"Simple warning",icon:"true",type:"warn"};D.parameters={storySource:{source:`args => ({
  Component: Alert,
  props: args
})`},docs:{page:C}};const T={title:"Cobalt UI Library/Notification Components/Alert",parameters:{page:null},component:k,includeStories:["info","warning"]},he={Info:"info",Warning:"warning"};T.parameters=T.parameters||{};T.parameters.docs={...T.parameters.docs||{},page:()=>o(Y,{mdxStoryNameToKey:he,mdxComponentAnnotations:T},o(Q,null))};const _e=["Template","info","warning"];export{A as Template,_e as __namedExportsOrder,T as default,L as info,D as warning};
//# sourceMappingURL=Alert.stories.64a01d6b.js.map
