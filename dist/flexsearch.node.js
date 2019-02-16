/*
 FlexSearch v0.5.31
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(l,E,F){let C;(C=F.define)&&C.amd?C([],function(){return E}):(C=F.modules)?C[l.toLowerCase()]=E:"object"===typeof exports?module.exports=E:F[l]=E})("FlexSearch",function(){function l(a,b){const c=b?b.id:a&&a.id;this.id=c||0===c?c:Y++;this.init(a,b);C(this,"index",function(){return this.a?this.a.index[this.a.keys[0]].f:this.f});C(this,"length",function(){return Object.keys(this.index).length})}function E(a,b){const c=a.length,d=G(b),e=[];for(let h=0,f=0;h<c;h++){const c=a[h];
if(d&&b(c)||!d&&!b[c])e[f++]=c}return e}function F(a,b,c,d,e,h,f,k){b=c=R(c,h?0:e,f,this.m,b,k);c=this.g;f=b.length;k=Array(f);for(let a=0;a<f;a++)k[a]=c[b[a]];c=k;h&&(c=this.where(h,null,e,c));d&&(G(d)||(A=d.split(":"),1<A.length?d=Z:(A=A[0],d=aa)),c.sort(d));this.cache&&this.j.set(a,c);return c}function C(a,b,c){Object.defineProperty(a,b,{get:c})}function g(a){return new RegExp(a,"g")}function H(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function L(a,b,c,d,e,h,f,k){if(b[c])return b[c];
e=e?(k-(f||k/1.5))*h+(f||k/1.5)*e:h;b[c]=e;e>=f&&(a=a[k-(e+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=d);return e}function N(a,b){if(a){const c=Object.keys(a);for(let d=0,e=c.length;d<e;d++){const e=c[d],f=a[e];if(f)for(let c=0,d=f.length;c<d;c++)if(f[c]===b){1===d?delete a[e]:f.splice(c,1);break}else D(f[c])&&N(f[c],b)}}}function O(a){let b="",c="";var d="";for(let e=0;e<a.length;e++){const h=a[e];if(h!==c)if(e&&"h"===h){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===c||"e"===c||"i"===
c||"o"===c||"u"===c||"y"===c)&&d||" "===c)b+=h}else b+=h;d=e===a.length-1?"":a[e+1];c=h}return b}function ba(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function aa(a,b){a=a[A];b=b[A];return a<b?-1:a>b?1:0}function Z(a,b){const c=A.length;for(let d=0;d<c;d++)a=a[A[d]],b=b[A[d]];return a<b?-1:a>b?1:0}function R(a,b,c,d,e,h){c=[];const f=a.length;if(1<f){const m=q();let g,n,p=-1;var k;let I,u,l=!0,w,J=0,P,Q;if(h){for(g=q();++p<f;)if("not"===e[p])for(n=a[p],I=n.length,k=0;k<I;)g["@"+n[k++]]=1;else Q=
p+1;if(!Q)return c;p=-1}else P=B(e)&&e;for(;++p<f;){const r=p===(Q||f)-1;let S,q;if(!P||!p)if((k=P||e&&e[p])&&"and"!==k)if("or"===k)q=!0;else continue;else S=!0;n=a[p];I=n.length;if(!I){if(S&&!d)return n;continue}if(l)if(w){var t=w.length;for(k=0;k<t;)m["@"+w[k++]]=1;w=null;l=!1}else{w=n;continue}let v=!1;k=0;for(t=[];k<I;){u=n[k++];var z="@"+u;const a=m[z];if(a&&(!h||!g[z]))if(q||a===p){if(r){if(c[J++]=u,b&&J===b)return c}else m[z]=p+1;v=!0}else d&&(z=t[a]||(t[a]=[]),z[z.length]=u)}if(!v&&!d)break}if(w)if(h)for(a=
w.length,k=0;k<a;)e=w[k++],g["@"+e]||(c[J++]=e);else c=w;if(d&&(J=c.length,(p=t.length)&&(!b||J<b)))for(;p--;)if(u=t[p])for(k=0,I=u.length;k<I;k++)if(c[J++]=u[k],b&&J===b)return c}else!f||e&&"not"===e[0]||(c=a[0],b&&c.length>b&&(c=c.slice(0,b)));return c}function B(a){return"string"===typeof a}function x(a){return a.constructor===Array}function G(a){return"function"===typeof a}function D(a){return"object"===typeof a}function y(a){return"undefined"===typeof a}function T(a){const b=Array(a);for(let c=
0;c<a;c++)b[c]=q();return b}function q(){return Object.create(null)}const v={encode:"icase",c:"forward",m:!1,cache:!1,async:!1,F:!1,w:!1,a:!1,C:!1,b:9,threshold:0,depth:0},U={memory:{encode:"extra",c:"strict",threshold:0,b:1},speed:{encode:"icase",c:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",c:"full",threshold:1,b:3},score:{encode:"extra",c:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",c:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",c:"strict",threshold:8,b:9,depth:1}},
M=[];let Y=0;const V=/\W+/,W={},X={};l.create=function(a){return new l(a)};l.registerMatcher=function(a){for(const b in a)a.hasOwnProperty(b)&&M.push(g(b),a[b]);return this};l.registerEncoder=function(a,b){K[a]=b.bind(K);return this};l.registerLanguage=function(a,b){W[a]=b.filter;X[a]=b.stemmer;return this};l.encode=function(a,b){return K[a](b)};l.prototype.init=function(a,b){this.o=[];if(b){var c=b.preset;a=b}else a||(a=v),c=a.preset;b={};B(a)?(b=U[a],a={}):c&&(b=U[c]);this.c=a.tokenize||b.c||this.c||
v.c;this.w=a.rtl||this.w||v.w;this.async="undefined"===typeof Promise||y(c=a.async)?this.async||v.async:c;this.threshold=y(c=a.threshold)?b.threshold||this.threshold||v.threshold:c;this.b=y(c=a.resolution)?c=b.b||this.b||v.b:c;c<=this.threshold&&(this.b=this.threshold+1);this.depth=y(c=a.depth)?b.depth||this.depth||v.depth:c;this.C=y(c=a.paging)?this.C||v.C:c;this.m=y(c=a.suggest)?this.m||v.m:c;this.s=(c=y(c=a.encode)?b.encode||v.encode:c)&&K[c]&&K[c].bind(K)||(G(c)?c:this.s||!1);(c=a.matcher)&&this.addMatcher(c);
if(c=a.filter){B(c)&&(c=W[c]);if(x(c)){b=this.s;var d=q();for(var e=0;e<c.length;e++){var h=b?b(c[e]):c[e];d[h]=1}c=d}this.filter=c}if(c=a.stemmer){var f;b=B(c)?X[c]:c;d=this.s;e=[];for(f in b)b.hasOwnProperty(f)&&(h=d?d(f):f,e.push(g(h+"($|\\W)"),d?d(b[f]):b[f]));this.stemmer=f=e}this.a=e=(c=a.doc)?c:this.a||v.a;this.i=T(this.b-(this.threshold||0));this.h=q();this.f=q();if(e){this.g=q();a.doc=null;f=e.index={};b=e.keys=[];d=e.field;h=e.tag;x(e.id)||(e.id=e.id.split(":"));if(h){this.A=q();let b=q();
if(d)if(B(d))b[d]=a;else if(x(d))for(let c=0;c<d.length;c++)b[d[c]]=a;else D(d)&&(b=d);x(h)||(e.tag=h=[h]);for(d=0;d<h.length;d++)this.A[h[d]]=q();this.D=h;d=b}if(d){let c;x(d)||(D(d)?(c=d,e.field=d=Object.keys(d)):e.field=d=[d]);for(e=0;e<d.length;e++)h=d[e],x(h)||(c&&(a=c[h]),b[e]=h,d[e]=h.split(":")),f[h]=new l(a),f[h].g=this.g}}this.v=!0;this.j=(this.cache=c=y(c=a.cache)?this.cache||v.cache:c)?new ca(c):!1;return this};l.prototype.encode=function(a){a&&M.length&&(a=H(a,M));a&&this.o.length&&(a=
H(a,this.o));a&&this.s&&(a=this.s(a));a&&this.stemmer&&(a=H(a,this.stemmer));return a};l.prototype.addMatcher=function(a){const b=this.o;for(const c in a)a.hasOwnProperty(c)&&b.push(g(c),a[c]);return this};l.prototype.add=function(a,b,c,d,e){if(this.a&&D(a))return this.u("add",a,b);if(b&&B(b)&&(a||0===a)){var h="@"+a;if(this.f[h]&&!d)return this.update(a,b);if(!e){if(this.async&&"function"!==typeof importScripts){let e=this;h=new Promise(function(c){setTimeout(function(){e.add(a,b,null,d,!0);e=null;
c()})});if(c)h.then(c);else return h;return this}if(c)return this.add(a,b,null,d,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=this.c;e=G(c)?c(b):b.split(V);this.filter&&(e=E(e,this.filter));const r=q();r._ctx=q();const n=e.length,p=this.threshold,z=this.depth,u=this.b,l=this.i,w=this.w;for(let b=0;b<n;b++){var f=e[b];if(f){var k=f.length,t=(w?b+1:n-b)/n,g="";switch(c){case "reverse":case "both":for(var m=k;--m;)g=f[m]+g,L(l,r,g,a,w?1:(k-m)/k,t,p,u-1);g="";case "forward":for(m=0;m<k;m++)g+=
f[m],L(l,r,g,a,w?(m+1)/k:1,t,p,u-1);break;case "full":for(m=0;m<k;m++){const b=(w?m+1:k-m)/k;for(let c=k;c>m;c--)g=f.substring(m,c),L(l,r,g,a,b,t,p,u-1)}break;default:if(k=L(l,r,f,a,1,t,p,u-1),z&&1<n&&k>=p)for(k=r._ctx[f]||(r._ctx[f]=q()),f=this.h[f]||(this.h[f]=T(u-(p||0))),t=b-z,g=b+z+1,0>t&&(t=0),g>n&&(g=n);t<g;t++)t!==b&&L(f,k,e[t],a,0,u-(t<b?b-t:t-b),p,u-1)}}}this.f[h]=1;this.v=!1}return this};l.prototype.u=function(a,b,c){if(x(b))for(let d=0,e=b.length;d<e;d++){if(d===e-1)return this.u(a,b[d],
c);this.u(a,b[d])}else{const g=this.a.index,l=this.a.keys;var d=this.a.tag,e=this.a.id;let m;let r;for(var h=0;h<e.length;h++)m=(m||b)[e[h]];if(d){for(e=0;e<d.length;e++){var f=d[e];var k=f.split(":");for(h=0;h<k.length;h++)r=(r||b)[k[h]];r="@"+r}k=this.A[f];k=k[r]||(k[r]=[])}if("remove"===a){delete this.g[m];for(let a=0,b=l.length;a<b;a++){if(a===b-1)return g[l[a]].remove(m,c);g[l[a]].remove(m)}}e=this.a.field;k&&(k[k.length]=b);for(let h=0,k=e.length;h<k;h++){d=e[h];let t;for(f=0;f<d.length;f++)t=
(t||b)[d[f]];this.g[m]=b;d=g[l[h]];f="add"===a?d.add:d.update;if(h===k-1)return f.call(d,m,t,c);f.call(d,m,t)}}};l.prototype.update=function(a,b,c){if(this.a&&D(a))return this.u("update",a,b);this.f["@"+a]&&B(b)&&(this.remove(a),this.add(a,b,c,!0));return this};l.prototype.remove=function(a,b,c){if(this.a&&D(a))return this.u("remove",a,b);var d="@"+a;if(this.f[d]){if(!c){if(this.async&&"function"!==typeof importScripts){let c=this;d=new Promise(function(b){setTimeout(function(){c.remove(a,null,!0);
c=null;b()})});if(b)d.then(b);else return d;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<this.b-(this.threshold||0);b++)N(this.i[b],a);this.depth&&N(this.h,a);delete this.f[d];this.v=!1}return this};let A;l.prototype.search=function(a,b,c,d){if(D(b)){if(x(b))for(var e=0;e<b.length;e++)b[e].query=a;else b.query=a;a=b;b=0}let h=[],f=a;let k;if(D(a)&&!x(a)){(c=a.callback||b)&&(f.callback=null);k=a.sort;b=a.limit;var g=a.threshold;a=a.query}if(this.a){g=this.a.index;const t=f.where;
var l=f.bool||"or",m=f.field;let p=l;let q;if(m)x(m)||(m=[m]);else if(x(f)){var r=f;m=[];p=[];for(var n=0;n<f.length;n++)d=f[n],e=d.bool||l,m[n]=d.field,p[n]=e,"not"===e&&(q=!0)}else m=this.a.keys;l=m.length;for(n=0;n<l;n++)r&&(f=r[n]),h[n]=g[m[n]].search(f);if(c)return c(F.call(this,a,p,h,k,b,t,void 0,q));if(this.async){const c=this;return new Promise(function(d){Promise.all(h).then(function(e){d(F.call(c,a,p,e,k,b,t,void 0,q))})})}return F.call(this,a,p,h,k,b,t,void 0,q)}g||(g=this.threshold||0);
G(b)?(c=b,b=1E3):b||0===b||(b=1E3);if(!d){if(this.async&&"function"!==typeof importScripts){let a=this;g=new Promise(function(c){setTimeout(function(){c(a.search(f,b,null,!0));a=null})});if(c)g.then(c);else return g;return this}if(c)return c(this.search(f,b,null,!0)),this}if(!a||!B(a))return h;f=a;if(this.cache)if(this.v){if(c=this.j.get(a))return c}else this.j.clear(),this.v=!0;f=this.encode(f);if(!f.length)return h;c=this.c;c=G(c)?c(f):f.split(V);this.filter&&(c=E(c,this.filter));r=c.length;d=!0;
e=[];const p=q();1<r&&(this.depth?(m=!0,n=c[0],p[n]=1):c.sort(ba));if(!m||(l=this.h)[n]){const a=this.b;for(let b=m?1:0;b<r;b++){const f=c[b];if(f){if(!p[f]){const b=[];let c=!1,h=0;if(n=m?l[n]:this.i){let d;for(let e=0;e<a-g;e++)if(d=n[e][f])b[h++]=d,c=!0}if(c)e[e.length]=1<h?b.concat.apply([],b):b[0];else if(!this.m){d=!1;break}p[f]=1}n=f}}}else d=!1;this.a||(d&&(h=R(e,b,void 0,this.m)),this.cache&&this.j.set(a,h));return h};l.prototype.find=function(a,b){return this.where(a,b,1)[0]||null};l.prototype.where=
function(a,b,c,d){const e=d||this.g,h=[];let f=0;let g;if("number"===typeof a)return[e[a]];if(B(a)){if(y(b))return[e[a]];if("id"===a)return[e[b]];var l=[a];var q=1;var m=[a.split(":")];g=!0}else{if(G(a)){b=d||Object.keys(e);c=b.length;for(l=0;l<c;l++)q=d?d[l]:e[b[l]],a(q)&&(h[f++]=q);return h}c||(c=b);l=Object.keys(a);q=l.length;g=!1;if(1===q&&"id"===l[0])return[e[a.id]];if((m=this.D)&&!d)for(var r=0;r<m.length;r++){var n=m[r],p=a[n];if(!y(p)){d=this.A[n]["@"+p];if(0===--q)return d;l.splice(l.indexOf(n),
1);delete a[n];break}}m=Array(q);for(r=0;r<q;r++)m[r]=l[r].split(":")}r=d||Object.keys(e);n=r.length;for(p=0;p<n;p++){const k=d?d[p]:e[r[p]];let n=!0;for(let c=0;c<q;c++){g||(b=a[l[c]]);const d=m[c],e=d.length;let f=k;if(1<e)for(let b=0;b<e;b++)f=f[d[b]];else f=f[d[0]];if(f!==b){n=!1;break}}if(n&&(h[f++]=k,c&&f===c))break}return h};l.prototype.info=function(){return{id:this.id,items:this.length,cache:this.cache&&this.cache.l?this.cache.l.length:!1,matcher:M.length+(this.o?this.o.length:0),worker:this.F,
threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.c}};l.prototype.clear=function(){return this.destroy().init()};l.prototype.destroy=function(){this.cache&&(this.j.clear(),this.j=null);this.i=this.h=this.f=null;if(this.a){const a=this.a.keys;for(let b=0;b<a.length;b++)this.a.index[a[b]].destroy();this.a=this.g=null}return this};l.prototype.export=function(){if(this.a){const a=this.a.keys,b=Array(a.length+1);let c=0;for(;c<a.length;c++){const d=this.a.index[a[c]];
b[c]=[d.i,d.h,d.f]}b[c]=this.g;return JSON.stringify(b)}return JSON.stringify([this.i,this.h,this.f])};l.prototype.import=function(a){a=JSON.parse(a);if(this.a){const b=this.a.keys,c=b.length;for(let d=0;d<c;d++){const e=this.a.index[b[d]];e.i=a[d][0];e.h=a[d][1];e.f=a[d][2];e.g=a[c]}this.g=a[c]}else this.i=a[0],this.h=a[1],this.f=a[2]};const K={icase:function(a){return a.toLowerCase()},simple:function(){const a=[g("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",g("[\u00e8\u00e9\u00ea\u00eb]"),"e",
g("[\u00ec\u00ed\u00ee\u00ef]"),"i",g("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",g("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",g("[\u00fd\u0177\u00ff]"),"y",g("\u00f1"),"n",g("\u00e7"),"c",g("\u00df"),"s",g(" & ")," and ",g("[-/]")," ",g("[^a-z0-9 ]"),"",g("\\s+")," "];return function(b){b=H(b.toLowerCase(),a);return" "===b?"":b}}(),advanced:function(){const a=[g("ae"),"a",g("ai"),"ei",g("ay"),"ei",g("ey"),"ei",g("oe"),"o",g("ue"),"u",g("ie"),"i",g("sz"),"s",g("zs"),"s",g("sh"),"s",g("ck"),"k",g("cc"),
"k",g("dt"),"t",g("ph"),"f",g("pf"),"f",g("ou"),"o",g("uo"),"u"];return function(b,c){if(!b)return b;b=this.simple(b);2<b.length&&(b=H(b,a));c||1<b.length&&(b=O(b));return b}}(),extra:function(){const a=[g("p"),"b",g("z"),"s",g("[cgq]"),"k",g("n"),"m",g("d"),"t",g("[vw]"),"f",g("[aeiouy]"),""];return function(b){if(!b)return b;b=this.advanced(b,!0);if(1<b.length){b=b.split(" ");for(let c=0;c<b.length;c++){const d=b[c];1<d.length&&(b[c]=d[0]+H(d.substring(1),a))}b=b.join(" ");b=O(b)}return b}}(),balance:function(){const a=
[g("[-/]")," ",g("[^a-z0-9 ]"),"",g("\\s+")," "];return function(b){return O(H(b.toLowerCase(),a))}}()},ca=function(){function a(b){this.clear();this.B=!0!==b&&b}a.prototype.clear=function(){this.cache=q();this.count=q();this.index=q();this.l=[]};a.prototype.set=function(b,a){if(this.B&&y(this.cache[b])){let c=this.l.length;if(c===this.B){c--;const b=this.l[c];delete this.cache[b];delete this.count[b];delete this.index[b]}this.index[b]=c;this.l[c]=b;this.count[b]=-1;this.cache[b]=a;this.get(b)}else this.cache[b]=
a};a.prototype.get=function(b){const a=this.cache[b];if(this.B&&a){var d=++this.count[b];const a=this.index;let c=a[b];if(0<c){const f=this.l;for(var e=c;this.count[f[--c]]<=d&&-1!==c;);c++;if(c!==e){for(d=e;d>c;d--)e=f[d-1],f[d]=e,a[e]=d;f[c]=b;a[b]=c}}}return a};return a}();return l}(!1),this);