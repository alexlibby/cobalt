import"./jsx-runtime.38179261.js";import{c as i,M as j,C as N,S as C,A as z,a as J}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as T,i as S,s as x,O as L,q as v,L as _,w as M,a as h,P as V,Q as X,R as A,b as m,t as p,d as b,p as w,h as q,m as U,l as B,e as Q,g as R,c as F,C as W}from"./index.cc1fc965.js";function Y(a){let e,n;const l=a[6].default,t=L(l,a,a[5],null);return{c(){e=v("div"),t&&t.c(),_(e,"grid-template-rows","repeat("+a[2]+", 1fr)"),_(e,"grid-template-columns","repeat("+a[1]+", auto)"),_(e,"border",a[0]),M(e,"class","svelte-1qstdq7")},m(o,r){h(o,e,r),t&&t.m(e,null),n=!0},p(o,[r]){t&&t.p&&(!n||r&32)&&V(t,l,o,o[5],n?A(l,o[5],r,null):X(o[5]),null),(!n||r&1)&&_(e,"border",o[0])},i(o){n||(m(t,o),n=!0)},o(o){p(t,o),n=!1},d(o){o&&b(e),t&&t.d(o)}}}function Z(a,e,n){let{$$slots:l={},$$scope:t}=e,{columns:o="2"}=e,{rows:r="4"}=e,{border:c="1px solid #000000"}=e,s=parseInt(o,0),u=parseInt(r,0);return a.$$set=d=>{"columns"in d&&n(3,o=d.columns),"rows"in d&&n(4,r=d.rows),"border"in d&&n(0,c=d.border),"$$scope"in d&&n(5,t=d.$$scope)},[c,s,u,o,r,t,l]}class E extends T{constructor(e){super(),S(this,e,Z,Y,x,{columns:3,rows:4,border:0})}}E.__docgen={version:3,name:"Grid.svelte",data:[{visibility:"public",description:null,keywords:[],name:"columns",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"2"},{visibility:"public",description:null,keywords:[],name:"rows",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"4"},{visibility:"public",description:null,keywords:[],name:"border",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"1px solid #000000"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function $(a){let e,n;const l=a[3].default,t=L(l,a,a[2],null);return{c(){e=v("div"),t&&t.c(),M(e,"class","cellSize svelte-1d0j6iu")},m(o,r){h(o,e,r),t&&t.m(e,null),n=!0},p(o,r){t&&t.p&&(!n||r&4)&&V(t,l,o,o[2],n?A(l,o[2],r,null):X(o[2]),null)},i(o){n||(m(t,o),n=!0)},o(o){p(t,o),n=!1},d(o){o&&b(e),t&&t.d(o)}}}function ee(a){let e;return{c(){e=v("div"),e.innerHTML=`<img src="https://loremflickr.com/150/160/camera" alt="placeholder" data-testid="placeholderImage" class="svelte-1d0j6iu"/> 
      <div class="description svelte-1d0j6iu" data-testid="placeholderLabel">This is a test image</div>`},m(n,l){h(n,e,l)},p:w,i:w,o:w,d(n){n&&b(e)}}}function te(a){let e,n,l,t;const o=[ee,$],r=[];function c(s,u){return s[0]?0:1}return n=c(a),l=r[n]=o[n](a),{c(){e=v("div"),l.c(),M(e,"class","cell svelte-1d0j6iu")},m(s,u){h(s,e,u),r[n].m(e,null),t=!0},p(s,[u]){l.p(s,u)},i(s){t||(m(l),t=!0)},o(s){p(l),t=!1},d(s){s&&b(e),r[n].d()}}}function le(a,e,n){let{$$slots:l={},$$scope:t}=e,{placeholderImages:o}=e,r=JSON.parse(o);return a.$$set=c=>{"placeholderImages"in c&&n(1,o=c.placeholderImages),"$$scope"in c&&n(2,t=c.$$scope)},[r,o,t,l]}class H extends T{constructor(e){super(),S(this,e,le,te,x,{placeholderImages:1})}}H.__docgen={version:3,name:"Cell.svelte",data:[{visibility:"public",description:null,keywords:[],name:"placeholderImages",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function O(a,e,n){const l=a.slice();return l[5]=e[n],l[7]=n,l}function P(a){let e,n;return e=new H({props:{placeholderImages:a[4]}}),{c(){q(e.$$.fragment)},m(l,t){U(e,l,t),n=!0},p(l,t){const o={};t&16&&(o.placeholderImages=l[4]),e.$set(o)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){p(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function ne(a){let e,n,l={length:parseInt(a[2],0)},t=[];for(let r=0;r<l.length;r+=1)t[r]=P(O(a,l,r));const o=r=>p(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=Q()},m(r,c){for(let s=0;s<t.length;s+=1)t[s].m(r,c);h(r,e,c),n=!0},p(r,c){if(c&20){l={length:parseInt(r[2],0)};let s;for(s=0;s<l.length;s+=1){const u=O(r,l,s);t[s]?(t[s].p(u,c),m(t[s],1)):(t[s]=P(u),t[s].c(),m(t[s],1),t[s].m(e.parentNode,e))}for(R(),s=l.length;s<t.length;s+=1)o(s);F()}},i(r){if(!n){for(let c=0;c<l.length;c+=1)m(t[c]);n=!0}},o(r){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)p(t[c]);n=!1},d(r){W(t,r),r&&b(e)}}}function oe(a){let e,n;return e=new E({props:{columns:a[0],rows:a[1],border:a[3],$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},m(l,t){U(e,l,t),n=!0},p(l,[t]){const o={};t&1&&(o.columns=l[0]),t&2&&(o.rows=l[1]),t&8&&(o.border=l[3]),t&276&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(m(e.$$.fragment,l),n=!0)},o(l){p(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function ae(a,e,n){let{columnCount:l="4"}=e,{rowCount:t="4"}=e,{itemCount:o=""}=e,{border:r=""}=e,{placeholderImages:c="false"}=e;return a.$$set=s=>{"columnCount"in s&&n(0,l=s.columnCount),"rowCount"in s&&n(1,t=s.rowCount),"itemCount"in s&&n(2,o=s.itemCount),"border"in s&&n(3,r=s.border),"placeholderImages"in s&&n(4,c=s.placeholderImages)},[l,t,o,r,c]}class f extends T{constructor(e){super(),S(this,e,ae,oe,x,{columnCount:0,rowCount:1,itemCount:2,border:3,placeholderImages:4})}}f.__docgen={version:3,name:"Table.svelte",data:[{visibility:"public",description:null,keywords:[],name:"columnCount",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"4"},{visibility:"public",description:null,keywords:[],name:"rowCount",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"4"},{visibility:"public",description:null,keywords:[],name:"itemCount",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"border",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"placeholderImages",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function I(){return I=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},I.apply(this,arguments)}const re={},se="wrapper";function y({components:a,...e}){return i(se,I({},re,e,{components:a,mdxType:"MDXLayout"}),i(j,{title:"Cobalt UI Library/Navigation Components/Grid",component:f,mdxType:"Meta"}),i("h1",null,"Grid"),i("p",null,"Grid is the primary component. It has two possible states."),i("ul",null,i("li",{parentName:"ul"},i("a",{parentName:"li",href:"#default"},"Default")),i("li",{parentName:"ul"},i("a",{parentName:"li",href:"#placeholder"},"Placeholder Images"))),i("a",{id:"default"}),i("h2",null,"Default"),i("p",null,"This is the default version of the ImageGrid component."),i(N,{mdxType:"Canvas"},i(C,{id:"cobalt-ui-library-grid-components-image-grid--default-story",mdxType:"Story"})),i("a",{id:"placeholder"}),i("h2",null,"Placeholder Images"),i("p",null,"This variant disables the ImageGrid component."),i(N,{mdxType:"Canvas"},i(C,{id:"cobalt-ui-library-grid-components-image-grid--placeholder-images",mdxType:"Story"})),i("h2",null,"Properties of component"),i("p",null,"Below is a list of arguments available for this component:"),i(z,{of:f,mdxType:"ArgsTable"}))}y.isMDXComponent=!0;function k(){return k=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},k.apply(this,arguments)}const ie=a=>({Component:f,props:a}),ce={Template:ie},ue="wrapper";function K({components:a,...e}){return i(ue,k({},ce,e,{components:a,mdxType:"MDXLayout"}),i(j,{title:"Cobalt UI Library/Grid Components/Image Grid",component:f,parameters:{page:null},mdxType:"Meta"}),i(C,{name:"Default",args:{columnCount:"1",rowCount:"4",border:"none",placeholderImages:"false",itemCount:"12"},parameters:{docs:{page:y}},mdxType:"Story"}),i(C,{name:"Placeholder Images",args:{columnCount:"1",rowCount:"4",border:"none",placeholderImages:"true",itemCount:"12"},parameters:{docs:{page:y}},mdxType:"Story"}))}K.isMDXComponent=!0;const D={};D.storyName="Default";D.args={columnCount:"1",rowCount:"4",border:"none",placeholderImages:"false",itemCount:"12"};D.parameters={storySource:{source:"{}"},docs:{page:y}};const G={};G.storyName="Placeholder Images";G.args={columnCount:"1",rowCount:"4",border:"none",placeholderImages:"true",itemCount:"12"};G.parameters={storySource:{source:"{}"},docs:{page:y}};const g={title:"Cobalt UI Library/Grid Components/Image Grid",parameters:{page:null},component:f,includeStories:["defaultStory","placeholderImages"]},de={Default:"defaultStory","Placeholder Images":"placeholderImages"};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>i(J,{mdxStoryNameToKey:de,mdxComponentAnnotations:g},i(K,null))};const ye=["Template","defaultStory","placeholderImages"];export{ie as Template,ye as __namedExportsOrder,g as default,D as defaultStory,G as placeholderImages};
//# sourceMappingURL=Table.stories.05c8a881.js.map