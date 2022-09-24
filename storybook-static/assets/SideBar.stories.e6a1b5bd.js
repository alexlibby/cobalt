import"./jsx-runtime.38179261.js";import{c as u,M as B,A as j,a as P,S as H}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as O,i as L,s as N,q as v,u as I,e as U,a as f,y as X,b as y,t as _,c as q,d as m,O as E,w as $,P as K,Q as J,R as Q,A as R,B as C,g as V,J as M,p as T}from"./index.cc1fc965.js";import{f as D}from"./index.62606902.js";function k(n){let e,t,s;const i=n[3].default,o=E(i,n,n[2],null);return{c(){e=v("nav"),o&&o.c(),$(e,"class","svelte-1t1i19m")},m(r,a){f(r,e,a),o&&o.m(e,null),s=!0},p(r,a){o&&o.p&&(!s||a&4)&&K(o,i,r,r[2],s?Q(i,r[2],a,null):J(r[2]),null)},i(r){s||(y(o,r),R(()=>{t||(t=C(e,D,{x:250,opacity:1},!0)),t.run(1)}),s=!0)},o(r){_(o,r),t||(t=C(e,D,{x:250,opacity:1},!1)),t.run(0),s=!1},d(r){r&&m(e),o&&o.d(r),r&&t&&t.end()}}}function z(n){let e,t,s,i,o,r,a=n[0]&&k(n);return{c(){e=v("cobalt-hamburger"),t=I(),a&&a.c(),s=U()},m(l,p){f(l,e,p),f(l,t,p),a&&a.m(l,p),f(l,s,p),i=!0,o||(r=X(e,"click",n[4]),o=!0)},p(l,[p]){l[0]?a?(a.p(l,p),p&1&&y(a,1)):(a=k(l),a.c(),y(a,1),a.m(s.parentNode,s)):a&&(V(),_(a,1,1,()=>{a=null}),q())},i(l){i||(y(a),i=!0)},o(l){_(a),i=!1},d(l){l&&m(e),l&&m(t),a&&a.d(l),l&&m(s),o=!1,r()}}}function F(n,e,t){let{$$slots:s={},$$scope:i}=e,{show:o="true"}=e,r=o==="true";const a=()=>t(0,r=!r);return n.$$set=l=>{"show"in l&&t(1,o=l.show),"$$scope"in l&&t(2,i=l.$$scope)},[r,o,i,s,a]}class c extends O{constructor(e){super(),L(this,e,F,z,N,{show:1})}}c.__docgen={version:3,name:"SideBar.svelte",data:[{visibility:"public",description:null,keywords:[],name:"show",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"true"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function G(n){let e,t,s;return{c(){e=v("button"),e.innerHTML='<svg width="32" height="24" class="svelte-1sa5wbf"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-1sa5wbf"></line><line id="middle" x1="0" y1="12" x2="24" y2="12" class="svelte-1sa5wbf"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-1sa5wbf"></line></svg>',$(e,"class","svelte-1sa5wbf"),M(e,"open",n[0])},m(i,o){f(i,e,o),t||(s=X(e,"click",n[1]),t=!0)},p(i,[o]){o&1&&M(e,"open",i[0])},i:T,o:T,d(i){i&&m(e),t=!1,s()}}}function W(n,e,t){let s=!1;return[s,()=>t(0,s=!s)]}class h extends O{constructor(e){super(),L(this,e,W,G,N,{})}}h.__docgen={version:3,name:"Hamburger.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},b.apply(this,arguments)}const Y={},Z="wrapper";function S({components:n,...e}){return u(Z,b({},Y,e,{components:n,mdxType:"MDXLayout"}),u(B,{title:"Cobalt UI Library/Action Components/SideBar",component:c,mdxType:"Meta"}),u("h1",null,"SideBar"),u("p",null,"SideBar is the primary component. It only has one possible state."),u("ul",null,u("li",{parentName:"ul"},u("a",{parentName:"li",href:"#default"},"Default"))),u("a",{id:"default"}),u("h2",null,"Default"),u("p",null,"This is the default version of the SideBar component."),u("h2",null,"Properties of component"),u("p",null,"Below is a list of arguments available for this component:"),u(j,{of:c,mdxType:"ArgsTable"}))}S.isMDXComponent=!0;function g(){return g=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},g.apply(this,arguments)}const w=n=>({Component:c,subcomponent:h,props:n}),ee={Template:w},te="wrapper";function A({components:n,...e}){return u(te,g({},ee,e,{components:n,mdxType:"MDXLayout"}),u(B,{title:"Cobalt UI Library/Navigation Components/SideBar",component:c,subcomponent:h,parameters:{page:null},mdxType:"Meta"}),u(H,{name:"Default",args:{open:!1},parameters:{docs:{page:S}},mdxType:"Story"},w.bind({})))}A.isMDXComponent=!0;const x=w.bind({});x.storyName="Default";x.args={open:!1};x.parameters={storySource:{source:`args => ({
  Component: SideBar,
  subcomponent: Hamburger,
  props: args
})`},docs:{page:S}};const d={title:"Cobalt UI Library/Navigation Components/SideBar",parameters:{page:null},component:c,includeStories:["defaultStory"]},se={Default:"defaultStory"};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:()=>u(P,{mdxStoryNameToKey:se,mdxComponentAnnotations:d},u(A,null))};const ie=["Template","defaultStory"];export{w as Template,ie as __namedExportsOrder,d as default,x as defaultStory};
//# sourceMappingURL=SideBar.stories.e6a1b5bd.js.map