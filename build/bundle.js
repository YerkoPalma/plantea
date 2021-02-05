var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=u(e,n,r,c);t.p(o,a)}}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(e){return e&&s(e.destroy)?e.destroy:t}function d(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function w(){return y(" ")}function b(){return y("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?x(e):v(e)}function j(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return y(e)}function L(t){return j(t," ")}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function T(t,e,n){t.classList[n?"add":"remove"](e)}let N;function C(t){N=t}function D(){if(!N)throw new Error("Function called outside component initialization");return N}function M(t,e){D().$$.context.set(t,e)}function S(t){return D().$$.context.get(t)}const O=[],P=[],R=[],V=[],z=Promise.resolve();let q=!1;function U(t){R.push(t)}let H=!1;const F=new Set;function G(){if(!H){H=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];C(e),K(e.$$)}for(C(null),O.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];F.has(e)||(F.add(e),e())}R.length=0}while(O.length);for(;V.length;)V.pop()();q=!1,H=!1,F.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const J=new Set;let W;function Y(){W={r:0,c:[],p:W}}function Z(){W.r||o(W.c),W=W.p}function Q(t,e){t&&t.i&&(J.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),W.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function tt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function rt(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),U((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(U)}function ot(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(O.push(t),q||(q=!0,z.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,s,c,a,i,l=[-1]){const u=N;C(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&st(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=A(n.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();n.intro&&Q(e.$$.fragment),rt(e,n.target,n.anchor),G()}C(u)}class at{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function lt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!it.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ut(e,n,r){const c=!Array.isArray(e),i=c?[e]:e,l=n.length<2;return{subscribe:lt(r,(e=>{let r=!1;const u=[];let f=0,h=t;const p=()=>{if(f)return;h();const r=n(c?u[0]:u,e);l?e(r):h=s(r)?r:t},d=i.map(((t,e)=>a(t,(t=>{u[e]=t,f&=~(1<<e),r&&p()}),(()=>{f|=1<<e}))));return r=!0,p(),function(){o(d),h()}})).subscribe}}const ft={},ht={};function pt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const dt=function(t,e){const n=[];let r=pt(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=pt(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:s=!1}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[s?"replace":"assign"](e)}r=pt(t),n.forEach((t=>t({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,s){const[c,a=""]=s.split("?");e++,n.push({pathname:c,search:a}),r.push(t)},replaceState(t,o,s){const[c,a=""]=s.split("?");n[e]={pathname:c,search:a},r[e]=t}}}}()),{navigate:mt}=dt,gt=/^:(.+)/;function $t(t){return"*"===t[0]}function vt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function xt(t){return t.replace(/(^\/+|\/+$)/g,"")}function yt(t,e){return{route:t,score:t.default?0:vt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return gt.test(t)}(e)?$t(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function wt(t,e){let n,r;const[o]=e.split("?"),s=vt(o),c=""===s[0],a=function(t){return t.map(yt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,o=a.length;t<o;t++){const o=a[t].route;let i=!1;if(o.default){r={route:o,params:{},uri:e};continue}const l=vt(o.path),u={},f=Math.max(s.length,l.length);let h=0;for(;h<f;h++){const t=l[h],e=s[h];if(void 0!==t&&$t(t)){u["*"===t?"*":t.slice(1)]=s.slice(h).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=gt.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:o,params:u,uri:"/"+s.slice(0,h).join("/")};break}}return n||r||null}function bt(t,e){return`${xt("/"===e?t:`${xt(t)}/${xt(e)}`)}/`}function kt(t){let e;const n=t[9].default,r=l(n,t,t[8],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&256&e&&f(r,n,t,t[8],e,null,null)},i(t){e||(Q(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){r&&r.d(t)}}}function Et(t,e,n){let r,o,s,{$$slots:c={},$$scope:a}=e,{basepath:l="/"}=e,{url:u=null}=e;const f=S(ft),h=S(ht),p=lt([]);i(t,p,(t=>n(7,s=t)));const d=lt(null);let m=!1;const g=f||lt(u?{pathname:u}:dt.location);i(t,g,(t=>n(6,o=t)));const $=h?h.routerBase:lt({path:l,uri:l});i(t,$,(t=>n(5,r=t)));const v=ut([$,d],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}}));var x;return f||(x=()=>dt.listen((t=>{g.set(t.location)})),D().$$.on_mount.push(x),M(ft,g)),M(ht,{activeRoute:d,base:$,routerBase:v,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=bt(e,n),"undefined"==typeof window){if(m)return;const e=function(t,e){return wt([t],e)}(t,o.pathname);e&&(d.set(e),m=!0)}else p.update((e=>(e.push(t),e)))},unregisterRoute:function(t){p.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,l=t.basepath),"url"in t&&n(4,u=t.url),"$$scope"in t&&n(8,a=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=r;p.update((e=>(e.forEach((e=>e.path=bt(t,e._path))),e)))}if(192&t.$$.dirty){const t=wt(s,o.pathname);d.set(t)}},[p,g,$,l,u,r,o,s,a,c]}class At extends at{constructor(t){super(),ct(this,t,Et,kt,c,{basepath:3,url:4})}}const It=t=>({params:4&t,location:16&t}),jt=t=>({params:t[2],location:t[4]});function Lt(t){let e,n,r,o;const s=[Bt,_t],c=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=b()},l(t){n.l(t),r=b()},m(t,n){c[e].m(t,n),m(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(Y(),X(c[i],1,1,(()=>{c[i]=null})),Z(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),Q(n,1),n.m(r.parentNode,r))},i(t){o||(Q(n),o=!0)},o(t){X(n),o=!1},d(t){c[e].d(t),t&&g(r)}}}function _t(t){let e;const n=t[10].default,r=l(n,t,t[9],jt);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&532&e&&f(r,n,t,t[9],e,It,jt)},i(t){e||(Q(r,t),e=!0)},o(t){X(r,t),e=!1},d(t){r&&r.d(t)}}}function Bt(t){let n,r,o;const s=[{location:t[4]},t[2],t[3]];var c=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&et(n.$$.fragment),r=b()},l(t){n&&nt(n.$$.fragment,t),r=b()},m(t,e){n&&rt(n,t,e),m(t,r,e),o=!0},p(t,e){const o=28&e?function(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(s,[16&e&&{location:t[4]},4&e&&tt(t[2]),8&e&&tt(t[3])]):{};if(c!==(c=t[0])){if(n){Y();const t=n;X(t.$$.fragment,1,0,(()=>{ot(t,1)})),Z()}c?(n=new c(a()),et(n.$$.fragment),Q(n.$$.fragment,1),rt(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&Q(n.$$.fragment,t),o=!0)},o(t){n&&X(n.$$.fragment,t),o=!1},d(t){t&&g(r),n&&ot(n,t)}}}function Tt(t){let e,n,r=null!==t[1]&&t[1].route===t[7]&&Lt(t);return{c(){r&&r.c(),e=b()},l(t){r&&r.l(t),e=b()},m(t,o){r&&r.m(t,o),m(t,e,o),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?r?(r.p(t,n),2&n&&Q(r,1)):(r=Lt(t),r.c(),Q(r,1),r.m(e.parentNode,e)):r&&(Y(),X(r,1,1,(()=>{r=null})),Z())},i(t){n||(Q(r),n=!0)},o(t){X(r),n=!1},d(t){r&&r.d(t),t&&g(e)}}}function Nt(t,n,r){let o,s,{$$slots:c={},$$scope:a}=n,{path:l=""}=n,{component:u=null}=n;const{registerRoute:f,unregisterRoute:p,activeRoute:d}=S(ht);i(t,d,(t=>r(1,o=t)));const m=S(ft);i(t,m,(t=>r(4,s=t)));const g={path:l,default:""===l};let $={},v={};var x;return f(g),"undefined"!=typeof window&&(x=()=>{p(g)},D().$$.on_destroy.push(x)),t.$$set=t=>{r(13,n=e(e({},n),h(t))),"path"in t&&r(8,l=t.path),"component"in t&&r(0,u=t.component),"$$scope"in t&&r(9,a=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&o&&o.route===g&&r(2,$=o.params);{const{path:t,component:e,...o}=n;r(3,v=o)}},n=h(n),[u,o,$,v,s,d,m,g,l,a,c]}class Ct extends at{constructor(t){super(),ct(this,t,Nt,Tt,c,{path:8,component:0})}}function Dt(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf(`https://${e}`)||0===t.href.indexOf(`http://${e}`)}(e)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),mt(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}function Mt(e){let n,r,o,s,c,a;return{c(){n=v("div"),r=v("img"),s=w(),c=v("span"),a=y("Compartiendo nuestro mundo"),this.h()},l(t){n=I(t,"DIV",{class:!0});var e=A(n);r=I(e,"IMG",{class:!0,src:!0,alt:!0}),s=L(e),c=I(e,"SPAN",{class:!0});var o=A(c);a=j(o,"Compartiendo nuestro mundo"),o.forEach(g),e.forEach(g),this.h()},h(){E(r,"class","w-40 inline-block"),r.src!==(o=e[0].url)&&E(r,"src",o),E(r,"alt","Logo planTea"),E(c,"class","hero-span text-center w-3/5 sm:w-full svelte-1dqu75h"),E(n,"class","flex items-center justify-center flex-col")},m(t,e){m(t,n,e),d(n,r),d(n,s),d(n,c),d(c,a)},p(t,[e]){1&e&&r.src!==(o=t[0].url)&&E(r,"src",o)},i:t,o:t,d(t){t&&g(n)}}}function St(t,e,n){let r={};return(async()=>{const t=await fetch("https://murmuring-savannah-83332.herokuapp.com/upload/files/60072b2f1af90200155cc403");n(0,r=await t.json())})(),[r]}class Ot extends at{constructor(t){super(),ct(this,t,St,Mt,c,{})}}function Pt(e){let n,r,o,s,c,a,i,l,u,f,h;return{c(){n=v("a"),r=v("figure"),o=v("picture"),s=v("source"),c=w(),a=v("img"),l=w(),u=v("figcaption"),f=v("p"),h=y(e[2]),this.h()},l(t){n=I(t,"A",{style:!0,href:!0,class:!0});var i=A(n);r=I(i,"FIGURE",{class:!0});var p=A(r);o=I(p,"PICTURE",{class:!0});var d=A(o);s=I(d,"SOURCE",{srcset:!0,type:!0,class:!0}),c=L(d),a=I(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(g),l=L(p),u=I(p,"FIGCAPTION",{class:!0});var m=A(u);f=I(m,"P",{class:!0});var $=A(f);h=j($,e[2]),$.forEach(g),m.forEach(g),p.forEach(g),i.forEach(g),this.h()},h(){E(s,"srcset",e[0]),E(s,"type","image/png"),E(s,"class","svelte-k13pid"),a.src!==(i=e[0])&&E(a,"src",i),E(a,"alt",e[2]),E(a,"class","svelte-k13pid"),E(o,"class","svelte-k13pid"),E(f,"class","svelte-k13pid"),E(u,"class","svelte-k13pid"),E(r,"class","svelte-k13pid"),T(r,"chico",e[5]),B(n,"width",e[3]),E(n,"href",e[1]),E(n,"class","svelte-k13pid"),T(n,"center",e[4])},m(t,e){m(t,n,e),d(n,r),d(r,o),d(o,s),d(o,c),d(o,a),d(r,l),d(r,u),d(u,f),d(f,h)},p(t,[e]){1&e&&E(s,"srcset",t[0]),1&e&&a.src!==(i=t[0])&&E(a,"src",i),4&e&&E(a,"alt",t[2]),4&e&&_(h,t[2]),32&e&&T(r,"chico",t[5]),8&e&&B(n,"width",t[3]),2&e&&E(n,"href",t[1]),16&e&&T(n,"center",t[4])},i:t,o:t,d(t){t&&g(n)}}}function Rt(t,e,n){let{src:r}=e,{href:o}=e,{desc:s}=e,{width:c="100%"}=e,{center:a=!1}=e,{chico:i=!1}=e;return t.$$set=t=>{"src"in t&&n(0,r=t.src),"href"in t&&n(1,o=t.href),"desc"in t&&n(2,s=t.desc),"width"in t&&n(3,c=t.width),"center"in t&&n(4,a=t.center),"chico"in t&&n(5,i=t.chico)},[r,o,s,c,a,i]}class Vt extends at{constructor(t){super(),ct(this,t,Rt,Pt,c,{src:0,href:1,desc:2,width:3,center:4,chico:5})}}function zt(t,e,n){const r=t.slice();return r[1]=e[n].Imagen,r[2]=e[n].Titulo,r[3]=e[n].Link,r}function qt(t){let e,n;return e=new Vt({props:{chico:!0,width:"40%",src:t[1].url,href:t[3],desc:t[2]}}),{c(){et(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,r){rt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.src=t[1].url),1&n&&(r.href=t[3]),1&n&&(r.desc=t[2]),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function Ut(t){let e,n,r,o;e=new Ot({});let s=t[0],c=[];for(let e=0;e<s.length;e+=1)c[e]=qt(zt(t,s,e));const a=t=>X(c[t],1,1,(()=>{c[t]=null}));return{c(){et(e.$$.fragment),n=w(),r=v("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){nt(e.$$.fragment,t),n=L(t),r=I(t,"DIV",{class:!0});var o=A(r);for(let t=0;t<c.length;t+=1)c[t].l(o);o.forEach(g),this.h()},h(){E(r,"class","flex-wrap flex items-center justify-evenly")},m(t,s){rt(e,t,s),m(t,n,s),m(t,r,s);for(let t=0;t<c.length;t+=1)c[t].m(r,null);o=!0},p(t,[e]){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const o=zt(t,s,n);c[n]?(c[n].p(o,e),Q(c[n],1)):(c[n]=qt(o),c[n].c(),Q(c[n],1),c[n].m(r,null))}for(Y(),n=s.length;n<c.length;n+=1)a(n);Z()}},i(t){if(!o){Q(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)Q(c[t]);o=!0}},o(t){X(e.$$.fragment,t),c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)X(c[t]);o=!1},d(t){ot(e,t),t&&g(n),t&&g(r),$(c,t)}}}function Ht(t,e,n){let r=[];return(async()=>{const t=await fetch("https://murmuring-savannah-83332.herokuapp.com/accesos-directos");n(0,r=await t.json())})(),[r]}class Ft extends at{constructor(t){super(),ct(this,t,Ht,Ut,c,{})}}function Gt(t,e,n){const r=t.slice();return r[2]=e[n],r}function Kt(t){let e,n,r,o,c,a,i,l,u,f,h,p,$,b,B,N,C=t[2].nombre+"";return{c(){e=v("div"),n=x("svg"),r=x("path"),o=x("polyline"),c=w(),a=v("span"),i=y(C),l=w(),u=v("button"),f=x("svg"),h=x("path"),p=x("polyline"),$=x("line"),b=w(),this.h()},l(t){e=I(t,"DIV",{class:!0});var s=A(e);n=I(s,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var d=A(n);r=I(d,"path",{d:!0},1),A(r).forEach(g),o=I(d,"polyline",{points:!0},1),A(o).forEach(g),d.forEach(g),c=L(s),a=I(s,"SPAN",{class:!0});var m=A(a);i=j(m,C),m.forEach(g),l=L(s),u=I(s,"BUTTON",{class:!0});var v=A(u);f=I(v,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var x=A(f);h=I(x,"path",{d:!0},1),A(h).forEach(g),p=I(x,"polyline",{points:!0},1),A(p).forEach(g),$=I(x,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),A($).forEach(g),x.forEach(g),v.forEach(g),b=L(s),s.forEach(g),this.h()},h(){E(r,"d","M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"),E(o,"points","13 2 13 9 20 9"),E(n,"viewBox","0 0 24 24"),E(n,"width","24"),E(n,"height","24"),E(n,"stroke","currentColor"),E(n,"stroke-width","2"),E(n,"fill","none"),E(n,"stroke-linecap","round"),E(n,"stroke-linejoin","round"),E(n,"class","css-i6dzq1"),E(a,"class","cursor-pointer ml-4 hover:underline svelte-1qaxfhf"),E(h,"d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"),E(p,"points","7 10 12 15 17 10"),E($,"x1","12"),E($,"y1","15"),E($,"x2","12"),E($,"y2","3"),E(f,"viewBox","0 0 24 24"),E(f,"width","24"),E(f,"height","24"),E(f,"stroke","currentColor"),E(f,"stroke-width","2"),E(f,"fill","none"),E(f,"stroke-linecap","round"),E(f,"stroke-linejoin","round"),E(f,"class","css-i6dzq1"),E(u,"class","download-btn hover:cursor-pointer m-0 p-0 bg-transparent border-none hidden svelte-1qaxfhf"),E(e,"class","doc flex p-2 svelte-1qaxfhf"),T(e,"selected",t[1]===t[2].nombre)},m(g,v){m(g,e,v),d(e,n),d(n,r),d(n,o),d(e,c),d(e,a),d(a,i),d(e,l),d(e,u),d(u,f),d(f,h),d(f,p),d(f,$),d(e,b),B||(N=k(u,"click",(function(){s(void t[2])&&(void t[2]).apply(this,arguments)})),B=!0)},p(n,r){t=n,1&r&&C!==(C=t[2].nombre+"")&&_(i,C),3&r&&T(e,"selected",t[1]===t[2].nombre)},d(t){t&&g(e),B=!1,N()}}}function Jt(e){let n,r,o,s,c,a,i,l,u,f=e[0],h=[];for(let t=0;t<f.length;t+=1)h[t]=Kt(Gt(e,f,t));return{c(){n=v("div"),r=v("div"),o=v("div"),s=x("svg"),c=x("circle"),a=x("line"),i=w(),l=v("input"),u=w();for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){n=I(t,"DIV",{class:!0});var e=A(n);r=I(e,"DIV",{class:!0});var f=A(r);o=I(f,"DIV",{class:!0});var p=A(o);s=I(p,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var d=A(s);c=I(d,"circle",{cx:!0,cy:!0,r:!0},1),A(c).forEach(g),a=I(d,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),A(a).forEach(g),d.forEach(g),i=L(p),l=I(p,"INPUT",{class:!0,type:!0}),p.forEach(g),f.forEach(g),u=L(e);for(let t=0;t<h.length;t+=1)h[t].l(e);e.forEach(g),this.h()},h(){E(c,"cx","11"),E(c,"cy","11"),E(c,"r","8"),E(a,"x1","21"),E(a,"y1","21"),E(a,"x2","16.65"),E(a,"y2","16.65"),E(s,"viewBox","0 0 24 24"),E(s,"width","24"),E(s,"height","24"),E(s,"stroke","currentColor"),E(s,"stroke-width","2"),E(s,"fill","none"),E(s,"stroke-linecap","round"),E(s,"stroke-linejoin","round"),E(s,"class","css-i6dzq1"),E(l,"class","focus:outline-none bg-transparent ml-4"),E(l,"type","text"),E(o,"class","search-input search-input rounded-lg flex items-center h-10 mb-6 px-4 svelte-1qaxfhf"),E(r,"class","search"),E(n,"class","flex flex-col items-stretch max-w-4xl my-0 mx-auto")},m(t,e){m(t,n,e),d(n,r),d(r,o),d(o,s),d(s,c),d(s,a),d(o,i),d(o,l),d(n,u);for(let t=0;t<h.length;t+=1)h[t].m(n,null)},p(t,[e]){if(3&e){let r;for(f=t[0],r=0;r<f.length;r+=1){const o=Gt(t,f,r);h[r]?h[r].p(o,e):(h[r]=Kt(o),h[r].c(),h[r].m(n,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=f.length}},i:t,o:t,d(t){t&&g(n),$(h,t)}}}function Wt(t,e,n){let r=[];return(async()=>{const t=await fetch("https://murmuring-savannah-83332.herokuapp.com/recursos");n(0,r=await t.json())})(),[r,undefined]}class Yt extends at{constructor(t){super(),ct(this,t,Wt,Jt,c,{})}}function Zt(t,e,n){const r=t.slice();return r[2]=e[n],r}function Qt(t){let e,n,r,o,s,c,a,i,l,u,f,h,p,$,x,b,B,T,N=t[2].Titulo+"",C=ee(t[2].Contenido).html+"",D=t[2].Author.username+"",M=te(t[2].createdAt)+"";function S(...e){return t[1](t[2],...e)}return{c(){e=v("div"),n=v("h2"),r=y(N),o=w(),s=v("div"),c=w(),a=v("a"),i=y("Leer más"),l=w(),u=v("div"),f=v("span"),h=y(D),p=w(),$=v("span"),x=y(M),b=w(),this.h()},l(t){e=I(t,"DIV",{class:!0});var d=A(e);n=I(d,"H2",{class:!0});var m=A(n);r=j(m,N),m.forEach(g),o=L(d),s=I(d,"DIV",{class:!0}),A(s).forEach(g),c=L(d),a=I(d,"A",{class:!0});var v=A(a);i=j(v,"Leer más"),v.forEach(g),l=L(d),u=I(d,"DIV",{class:!0});var y=A(u);f=I(y,"SPAN",{class:!0});var w=A(f);h=j(w,D),w.forEach(g),p=L(y),$=I(y,"SPAN",{class:!0});var k=A($);x=j(k,M),k.forEach(g),y.forEach(g),b=L(d),d.forEach(g),this.h()},h(){E(n,"class","font-bold text-xl mb-4 px-4"),E(s,"class","text-gray-500 mb-8 px-4"),E(a,"class","cursor-pointer absolute inset-x-0 w-20 rounded-xl bg-purple-900 text-gray-100 py-1 px-2 justify-center items-center mx-auto my-0 flex text-sm bottom-20"),E(f,"class","text-white font-medium"),E($,"class","text-gray-200"),E(u,"class","flex flex-col px-4 pb-6 pt-4 bg-gradient-to-r from-purple-400 to-purple-300 rounded-b-md"),E(e,"class","relative pt-6 shadow-lg rounded-md bg-white")},m(t,g){m(t,e,g),d(e,n),d(n,r),d(e,o),d(e,s),s.innerHTML=C,d(e,c),d(e,a),d(a,i),d(e,l),d(e,u),d(u,f),d(f,h),d(u,p),d(u,$),d($,x),d(e,b),B||(T=k(a,"click",S),B=!0)},p(e,n){t=e,1&n&&N!==(N=t[2].Titulo+"")&&_(r,N),1&n&&C!==(C=ee(t[2].Contenido).html+"")&&(s.innerHTML=C),1&n&&D!==(D=t[2].Author.username+"")&&_(h,D),1&n&&M!==(M=te(t[2].createdAt)+"")&&_(x,M)},d(t){t&&g(e),B=!1,T()}}}function Xt(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=Qt(Zt(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=b()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);n=b()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);m(t,n,e)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const c=Zt(t,r,s);o[s]?o[s].p(c,e):(o[s]=Qt(c),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){$(o,t),t&&g(n)}}}function te(t){const e=new Date(t);return`${e.getDate()} de ${["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e.getMonth()]}, ${e.getFullYear()}`}function ee(t,e){const n=(e=e||{}).limit||100,r=void 0===e.preserveTags||e.preserveTags,o=void 0!==e.wordBreak&&e.wordBreak,s=e.suffix||"...",c=e.moreLink||"",a=e.moreText||"»",i=e.preserveWhiteSpace||!1,l=t.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n");let u,f,h,p,d,m,g=0,$=[],v=!1;for(let t=0;t<l.length;t++){if(u=l[t],m=i?u:u.replace(/[ ]+/g," "),!u.length)continue;const e=ne(m);if("<"!==u[0])if(g>=n)u="";else if(g+e.length>=n){if(f=n-g," "===e[f-1])for(;f&&(f-=1," "===e[f-1]););else h=e.slice(f).indexOf(" "),o||(-1!==h?f+=h:f=u.length);u=e.slice(0,f).join("")+s,c&&(u+='<a href="'+c+'" style="display:inline">'+a+"</a>"),g=n,v=!0}else g+=e.length;else if(r){if(g>=n)if(p=u.match(/[a-zA-Z]+/),d=p?p[0]:"",d)if("</"!==u.substring(0,2))$.push(d),u="";else{for(;$[$.length-1]!==d&&$.length;)$.pop();$.length&&(u=""),$.pop()}else u=""}else u="";l[t]=u}return{html:l.join("\n").replace(/\n/g,""),more:v}}function ne(t){let e,n,r,o=[];for(var s=0;s<t.length;s++)e=t.substring(s),n=e.match(/^&[a-z0-9#]+;/),n?(r=n[0],o.push(r),s+=r.length-1):o.push(t[s]);return o}function re(t,e,n){let r=[];(async()=>{const t=await fetch("https://murmuring-savannah-83332.herokuapp.com/posts");n(0,r=await t.json())})();return[r,(t,e)=>mt(`/blog/${t.id}`)]}class oe extends at{constructor(t){super(),ct(this,t,re,Xt,c,{})}}function se(t){let e,n=t[0].Contenido+"";return{c(){e=v("div"),this.h()},l(t){e=I(t,"DIV",{class:!0}),A(e).forEach(g),this.h()},h(){E(e,"class","post")},m(t,r){m(t,e,r),e.innerHTML=n},p(t,r){1&r&&n!==(n=t[0].Contenido+"")&&(e.innerHTML=n)},d(t){t&&g(e)}}}function ce(e){let n,r=e[0]&&e[0].Contenido&&se(e);return{c(){r&&r.c(),n=b()},l(t){r&&r.l(t),n=b()},m(t,e){r&&r.m(t,e),m(t,n,e)},p(t,[e]){t[0]&&t[0].Contenido?r?r.p(t,e):(r=se(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&g(n)}}}function ae(t,e,n){let r,{id:o}=e;return t.$$set=t=>{"id"in t&&n(1,o=t.id)},t.$$.update=()=>{2&t.$$.dirty&&o&&async function(){const t=await fetch(`https://murmuring-savannah-83332.herokuapp.com/posts/${o}`);n(0,r=await t.json())}()},[r,o]}class ie extends at{constructor(t){super(),ct(this,t,ae,ce,c,{id:1})}}function le(t){let e,n;return{c(){e=v("img"),this.h()},l(t){e=I(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(n=t[0].formats.thumbnail.url)&&E(e,"src",n),E(e,"alt","Logo planTea"),E(e,"class","svelte-ptnhrx")},m(t,n){m(t,e,n)},p(t,r){1&r&&e.src!==(n=t[0].formats.thumbnail.url)&&E(e,"src",n)},d(t){t&&g(e)}}}function ue(e){let n,r,o,s,c,a,i,l,u,f,h,p,$,b,k,_,B,T,N,C,D,M,S,O,P,R,V,z,q,U,H,F=e[0]&&e[0].formats&&le(e);return{c(){n=v("footer"),r=v("div"),o=v("div"),s=v("a"),c=x("svg"),a=x("rect"),i=x("path"),l=x("line"),u=w(),f=v("a"),h=x("svg"),p=x("path"),$=w(),b=v("a"),F&&F.c(),k=w(),_=v("div"),B=v("ul"),T=v("li"),N=v("a"),C=y("Inicio"),D=w(),M=v("li"),S=v("a"),O=y("Recursos"),P=w(),R=v("li"),V=v("a"),z=y("Blog"),q=w(),U=v("small"),H=y("© Plantea 2021, todos los derechos reservados"),this.h()},l(t){n=I(t,"FOOTER",{class:!0});var e=A(n);r=I(e,"DIV",{class:!0});var d=A(r);o=I(d,"DIV",{class:!0});var m=A(o);s=I(m,"A",{target:!0,href:!0,class:!0});var v=A(s);c=I(v,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var x=A(c);a=I(x,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0},1),A(a).forEach(g),i=I(x,"path",{d:!0},1),A(i).forEach(g),l=I(x,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),A(l).forEach(g),x.forEach(g),v.forEach(g),u=L(m),f=I(m,"A",{target:!0,href:!0,class:!0});var y=A(f);h=I(y,"svg",{viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var w=A(h);p=I(w,"path",{d:!0},1),A(p).forEach(g),w.forEach(g),y.forEach(g),m.forEach(g),$=L(d),b=I(d,"A",{href:!0});var E=A(b);F&&F.l(E),E.forEach(g),k=L(d),_=I(d,"DIV",{class:!0});var G=A(_);B=I(G,"UL",{class:!0});var K=A(B);T=I(K,"LI",{});var J=A(T);N=I(J,"A",{href:!0,class:!0});var W=A(N);C=j(W,"Inicio"),W.forEach(g),J.forEach(g),D=L(K),M=I(K,"LI",{});var Y=A(M);S=I(Y,"A",{href:!0,class:!0});var Z=A(S);O=j(Z,"Recursos"),Z.forEach(g),Y.forEach(g),P=L(K),R=I(K,"LI",{});var Q=A(R);V=I(Q,"A",{href:!0,class:!0});var X=A(V);z=j(X,"Blog"),X.forEach(g),Q.forEach(g),K.forEach(g),G.forEach(g),d.forEach(g),q=L(e),U=I(e,"SMALL",{class:!0});var tt=A(U);H=j(tt,"© Plantea 2021, todos los derechos reservados"),tt.forEach(g),e.forEach(g),this.h()},h(){E(a,"x","2"),E(a,"y","2"),E(a,"width","20"),E(a,"height","20"),E(a,"rx","5"),E(a,"ry","5"),E(i,"d","M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"),E(l,"x1","17.5"),E(l,"y1","6.5"),E(l,"x2","17.51"),E(l,"y2","6.5"),E(c,"viewBox","0 0 24 24"),E(c,"width","24"),E(c,"height","24"),E(c,"stroke","currentColor"),E(c,"stroke-width","2"),E(c,"fill","none"),E(c,"stroke-linecap","round"),E(c,"stroke-linejoin","round"),E(c,"class","css-i6dzq1"),E(s,"target","_blank"),E(s,"href","https://www.instagram.com/plantea9/"),E(s,"class","instagram visited:text-gray-100"),E(p,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),E(h,"viewBox","0 0 24 24"),E(h,"width","24"),E(h,"height","24"),E(h,"stroke","currentColor"),E(h,"stroke-width","2"),E(h,"fill","none"),E(h,"stroke-linecap","round"),E(h,"stroke-linejoin","round"),E(h,"class","css-i6dzq1"),E(f,"target","_blank"),E(f,"href","https://twitter.com/plantea9"),E(f,"class","twitter visited:text-gray-100"),E(o,"class","flex justify-around items-center text-white w-20"),E(b,"href","/"),E(N,"href","/"),E(N,"class","text-white visited:text-gray-100"),E(S,"href","/resources"),E(S,"class","text-white visited:text-gray-100"),E(V,"href","/blog"),E(V,"class","text-white visited:text-gray-100"),E(B,"class","list-none"),E(_,"class","site"),E(r,"class","flex justify-around pb-4 pt-8"),E(U,"class","text-center w-full block py-2 text-gray-100 text-xs"),E(n,"class","relative svelte-ptnhrx")},m(t,e){m(t,n,e),d(n,r),d(r,o),d(o,s),d(s,c),d(c,a),d(c,i),d(c,l),d(o,u),d(o,f),d(f,h),d(h,p),d(r,$),d(r,b),F&&F.m(b,null),d(r,k),d(r,_),d(_,B),d(B,T),d(T,N),d(N,C),d(B,D),d(B,M),d(M,S),d(S,O),d(B,P),d(B,R),d(R,V),d(V,z),d(n,q),d(n,U),d(U,H)},p(t,[e]){t[0]&&t[0].formats?F?F.p(t,e):(F=le(t),F.c(),F.m(b,null)):F&&(F.d(1),F=null)},i:t,o:t,d(t){t&&g(n),F&&F.d()}}}function fe(t,e,n){let r={};return(async()=>{const t=await fetch("https://murmuring-savannah-83332.herokuapp.com/upload/files/60072005483be90015938fe8");n(0,r=await t.json())})(),[r]}class he extends at{constructor(t){super(),ct(this,t,fe,ue,c,{})}}function pe(t){let e,n;return e=new ie({props:{id:t[1].id}}),{c(){et(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,r){rt(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.id=t[1].id),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function de(t){let e,n,r,s,c,a,i,l,u,f,h,$,x,b,k,_,B,T,N,C,D,M,S,O,P;return _=new Ct({props:{path:"/",component:Ft}}),T=new Ct({props:{path:"/resources",component:Yt}}),C=new Ct({props:{path:"/blog",component:oe}}),M=new Ct({props:{path:"/blog/:id",$$slots:{default:[pe,({params:t})=>({1:t}),({params:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){e=v("div"),n=v("nav"),r=v("a"),s=y("Inicio"),a=w(),i=v("a"),l=y("Recursos"),f=w(),h=v("a"),$=y("Blog"),b=w(),k=v("main"),et(_.$$.fragment),B=w(),et(T.$$.fragment),N=w(),et(C.$$.fragment),D=w(),et(M.$$.fragment),this.h()},l(t){e=I(t,"DIV",{class:!0});var o=A(e);n=I(o,"NAV",{class:!0});var c=A(n);r=I(c,"A",{class:!0,href:!0});var u=A(r);s=j(u,"Inicio"),u.forEach(g),a=L(c),i=I(c,"A",{class:!0,href:!0});var p=A(i);l=j(p,"Recursos"),p.forEach(g),f=L(c),h=I(c,"A",{class:!0,href:!0});var d=A(h);$=j(d,"Blog"),d.forEach(g),c.forEach(g),o.forEach(g),b=L(t),k=I(t,"MAIN",{class:!0});var m=A(k);nt(_.$$.fragment,m),B=L(m),nt(T.$$.fragment,m),N=L(m),nt(C.$$.fragment,m),D=L(m),nt(M.$$.fragment,m),m.forEach(g),this.h()},h(){E(r,"class","text-base font-medium text-gray-500 hover:text-gray-900"),E(r,"href","/"),E(i,"class","text-base font-medium text-gray-500 hover:text-gray-900"),E(i,"href","/resources"),E(h,"class","text-base font-medium text-gray-500 hover:text-gray-900"),E(h,"href","/blog"),E(n,"class","hidden md:flex space-x-10"),E(e,"class","flex justify-between px-8 items-center py-6 md:justify-start md:space-x-10"),E(k,"class","my-0 mx-auto relative max-w-4xl bg-transparent p-8 box-border z-10 pb-16 sm:pt-16 svelte-7b0kxo")},m(t,o){m(t,e,o),d(e,n),d(n,r),d(r,s),d(n,a),d(n,i),d(i,l),d(n,f),d(n,h),d(h,$),m(t,b,o),m(t,k,o),rt(_,k,null),d(k,B),rt(T,k,null),d(k,N),rt(C,k,null),d(k,D),rt(M,k,null),S=!0,O||(P=[p(c=Dt.call(null,r)),p(u=Dt.call(null,i)),p(x=Dt.call(null,h))],O=!0)},p(t,e){const n={};6&e&&(n.$$scope={dirty:e,ctx:t}),M.$set(n)},i(t){S||(Q(_.$$.fragment,t),Q(T.$$.fragment,t),Q(C.$$.fragment,t),Q(M.$$.fragment,t),S=!0)},o(t){X(_.$$.fragment,t),X(T.$$.fragment,t),X(C.$$.fragment,t),X(M.$$.fragment,t),S=!1},d(t){t&&g(e),t&&g(b),t&&g(k),ot(_),ot(T),ot(C),ot(M),O=!1,o(P)}}}function me(t){let e,n,r,o,s,c;return e=new At({props:{url:t[0],$$slots:{default:[de]},$$scope:{ctx:t}}}),r=new he({}),{c(){et(e.$$.fragment),n=w(),et(r.$$.fragment),o=w(),s=v("link"),this.h()},l(t){nt(e.$$.fragment,t),n=L(t),nt(r.$$.fragment,t),o=L(t);const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-1b4cl8c"]',document.head);s=I(c,"LINK",{href:!0,rel:!0}),c.forEach(g),this.h()},h(){E(s,"href","https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"),E(s,"rel","stylesheet")},m(t,a){rt(e,t,a),m(t,n,a),rt(r,t,a),m(t,o,a),d(document.head,s),c=!0},p(t,[n]){const r={};1&n&&(r.url=t[0]),4&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){c||(Q(e.$$.fragment,t),Q(r.$$.fragment,t),c=!0)},o(t){X(e.$$.fragment,t),X(r.$$.fragment,t),c=!1},d(t){ot(e,t),t&&g(n),ot(r,t),t&&g(o),g(s)}}}function ge(t,e,n){let{url:r=""}=e;return t.$$set=t=>{"url"in t&&n(0,r=t.url)},[r]}return new class extends at{constructor(t){super(),ct(this,t,ge,me,c,{url:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map