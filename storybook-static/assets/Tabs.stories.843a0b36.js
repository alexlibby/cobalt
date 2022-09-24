import"./jsx-runtime.38179261.js";import{c as i,M as I,C as j,S as T,A as E,a as K}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as z,i as B,s as F,q as v,u as H,w as d,J as k,a as _,x as f,p as D,d as x,C as M,v as J,F as w,y as G,G as Q,z as P,e as R}from"./index.cc1fc965.js";const W=[{id:1,name:"Name 1",text:"Text 1"},{id:2,name:"Name 2",text:"Text 2"},{id:3,name:"Name 3",text:"Text 3"}];function V(a,e,t){const n=a.slice();return n[4]=e[t][0],n[5]=e[t][1],n}function A(a,e,t){const n=a.slice();return n[4]=e[t][0],n[8]=e[t][1],n}function q(a){let e,t,n=JSON.stringify(a[1][a[4]].name).replace(/['"]+/g,"")+"",o,p,r,c,m;return{c(){e=v("li"),t=v("span"),o=J(n),p=H(),d(t,"class","svelte-11nojaq"),d(e,"class",r=w(a[0]===a[4]?"active":"")+" svelte-11nojaq"),d(e,"data-testid","tabHeader")},m(s,u){_(s,e,u),f(e,t),f(t,o),f(e,p),c||(m=G(t,"click",function(){Q(a[3](a[4]))&&a[3](a[4]).apply(this,arguments)}),c=!0)},p(s,u){a=s,u&2&&n!==(n=JSON.stringify(a[1][a[4]].name).replace(/['"]+/g,"")+"")&&P(o,n),u&3&&r!==(r=w(a[0]===a[4]?"active":"")+" svelte-11nojaq")&&d(e,"class",r)},d(s){s&&x(e),c=!1,m()}}}function X(a){let e=JSON.stringify(a[1][a[4]].text).replace(/['"]+/g,"")+"",t;return{c(){t=J(e)},m(n,o){_(n,t,o)},p(n,o){o&2&&e!==(e=JSON.stringify(n[1][n[4]].text).replace(/['"]+/g,"")+"")&&P(t,e)},d(n){n&&x(t)}}}function L(a){let e,t=a[0]===a[4]&&X(a);return{c(){t&&t.c(),e=R()},m(n,o){t&&t.m(n,o),_(n,e,o)},p(n,o){n[0]===n[4]?t?t.p(n,o):(t=X(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){t&&t.d(n),n&&x(e)}}}function Y(a){let e,t,n,o,p=Object.entries(a[1]),r=[];for(let s=0;s<p.length;s+=1)r[s]=q(A(a,p,s));let c=Object.entries(a[1]),m=[];for(let s=0;s<c.length;s+=1)m[s]=L(V(a,c,s));return{c(){e=v("div"),t=v("ul");for(let s=0;s<r.length;s+=1)r[s].c();n=H(),o=v("div");for(let s=0;s<m.length;s+=1)m[s].c();d(t,"class","svelte-11nojaq"),d(o,"class","content svelte-11nojaq"),d(o,"data-testid","tabContent"),d(e,"class","cobalt svelte-11nojaq"),k(e,"vertical",a[2])},m(s,u){_(s,e,u),f(e,t);for(let l=0;l<r.length;l+=1)r[l].m(t,null);f(e,n),f(e,o);for(let l=0;l<m.length;l+=1)m[l].m(o,null)},p(s,[u]){if(u&11){p=Object.entries(s[1]);let l;for(l=0;l<p.length;l+=1){const y=A(s,p,l);r[l]?r[l].p(y,u):(r[l]=q(y),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=p.length}if(u&3){c=Object.entries(s[1]);let l;for(l=0;l<c.length;l+=1){const y=V(s,c,l);m[l]?m[l].p(y,u):(m[l]=L(y),m[l].c(),m[l].m(o,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=c.length}u&4&&k(e,"vertical",s[2])},i:D,o:D,d(s){s&&x(e),M(r,s),M(m,s)}}}function Z(a,e,t){let{activeTabValue:n="0"}=e,{items:o}=e,{vertical:p=!1}=e;o==null&&(o=W);const r=c=>()=>t(0,n=c);return a.$$set=c=>{"activeTabValue"in c&&t(0,n=c.activeTabValue),"items"in c&&t(1,o=c.items),"vertical"in c&&t(2,p=c.vertical)},[n,o,p,r]}class b extends z{constructor(e){super(),B(this,e,Z,Y,F,{activeTabValue:0,items:1,vertical:2})}}b.__docgen={version:3,name:"Tabs.svelte",data:[{visibility:"public",description:null,keywords:[],name:"activeTabValue",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"0"},{visibility:"public",description:null,keywords:[],name:"items",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"vertical",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function C(){return C=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},C.apply(this,arguments)}const $={},ee="wrapper";function h({components:a,...e}){return i(ee,C({},$,e,{components:a,mdxType:"MDXLayout"}),i(I,{title:"Cobalt UI Library/Navigation Components/Tabs",component:b,mdxType:"Meta"}),i("h1",null,"Tabs"),i("p",null,"Tabs is the primary component. It has two possible states."),i("ul",null,i("li",{parentName:"ul"},i("a",{parentName:"li",href:"#default"},"Default")),i("li",{parentName:"ul"},i("a",{parentName:"li",href:"#vertical"},"Vertical"))),i("a",{id:"default"}),i("h2",null,"Default"),i("p",null,"This is the default version of the Tabs component."),i(j,{mdxType:"Canvas"},i(T,{id:"cobalt-ui-library-navigation-components-tabs--default-story",mdxType:"Story"})),i("a",{id:"vertical"}),i("h2",null,"Custom Image"),i("p",null,"This variant disables the Tabs component."),i(j,{mdxType:"Canvas"},i(T,{id:"cobalt-ui-library-navigation-components-tabs--vertical",mdxType:"Story"})),i("h2",null,"Properties of component"),i("p",null,"Below is a list of arguments available for this component:"),i(E,{of:b,mdxType:"ArgsTable"}))}h.isMDXComponent=!0;function S(){return S=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},S.apply(this,arguments)}const te=a=>({Component:b,props:a}),ae={Template:te},ne="wrapper";function U({components:a,...e}){return i(ne,S({},ae,e,{components:a,mdxType:"MDXLayout"}),i(I,{title:"Cobalt UI Library/Navigation Components/Tabs",component:b,parameters:{page:null},mdxType:"Meta"}),i(T,{name:"Default",args:{vertical:!1,items:[{id:1,name:"Tab 1",text:"This is a test"},{id:2,name:"Tab 2",text:"Here is tab 2"},{id:3,name:"Tab 3",text:"And this is tab 3"}]},parameters:{docs:{page:h}},mdxType:"Story"}),i(T,{name:"Vertical",args:{vertical:!0,items:[{id:1,name:"Tab 1",text:"This is a test"},{id:2,name:"Tab 2",text:"Here is tab 2"},{id:3,name:"Tab 3",text:"And this is tab 3"}]},parameters:{docs:{page:h}},mdxType:"Story"}))}U.isMDXComponent=!0;const N={};N.storyName="Default";N.args={vertical:!1,items:[{id:1,name:"Tab 1",text:"This is a test"},{id:2,name:"Tab 2",text:"Here is tab 2"},{id:3,name:"Tab 3",text:"And this is tab 3"}]};N.parameters={storySource:{source:"{}"},docs:{page:h}};const O={};O.storyName="Vertical";O.args={vertical:!0,items:[{id:1,name:"Tab 1",text:"This is a test"},{id:2,name:"Tab 2",text:"Here is tab 2"},{id:3,name:"Tab 3",text:"And this is tab 3"}]};O.parameters={storySource:{source:"{}"},docs:{page:h}};const g={title:"Cobalt UI Library/Navigation Components/Tabs",parameters:{page:null},component:b,includeStories:["defaultStory","vertical"]},se={Default:"defaultStory",Vertical:"vertical"};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>i(K,{mdxStoryNameToKey:se,mdxComponentAnnotations:g},i(U,null))};const ce=["Template","defaultStory","vertical"];export{te as Template,ce as __namedExportsOrder,g as default,N as defaultStory,O as vertical};
//# sourceMappingURL=Tabs.stories.843a0b36.js.map