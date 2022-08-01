const It=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};It();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),rt=new WeakMap;class _t{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}}const Ut=n=>new _t(typeof n=="string"?n:n+"",void 0,it),C=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new _t(e,n,it)},zt=(n,t)=>{et?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},ot=et?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ut(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;const lt=window.trustedTypes,Ht=lt?lt.emptyScript:"",at=window.reactiveElementPolyfillSupport,K={toAttribute(n,t){switch(t){case Boolean:n=n?Ht:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},$t=(n,t)=>t!==n&&(t==t||n==n),W={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:$t};class S extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(ot(i))}else t!==void 0&&e.push(ot(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=W){var i,r;const o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){const c=((r=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:K.toAttribute)(e,s.type);this._$El=t,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$El=null}}_$AK(t,e){var s,i;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const c=r.getPropertyOptions(o),l=c.converter,a=(i=(s=l==null?void 0:l.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&i!==void 0?i:K.fromAttribute;this._$El=o,this[o]=a(e,c.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||$t)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}S.finalized=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},at==null||at({ReactiveElement:S}),((V=globalThis.reactiveElementVersions)!==null&&V!==void 0?V:globalThis.reactiveElementVersions=[]).push("1.3.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const k=globalThis.trustedTypes,ct=k?k.createPolicy("lit-html",{createHTML:n=>n}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,st="?"+$,Lt=`<${st}>`,P=document,I=(n="")=>P.createComment(n),U=n=>n===null||typeof n!="object"&&typeof n!="function",bt=Array.isArray,wt=n=>bt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,dt=/>/g,b=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,xt=/^(?:script|style|textarea|title)$/i,Nt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=Nt(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),vt=new WeakMap,Rt=(n,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const c=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new M(t.insertBefore(I(),c),c,void 0,e!=null?e:{})}return o._$AI(n),o},E=P.createTreeWalker(P,129,null,!1),At=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=j;for(let l=0;l<e;l++){const a=n[l];let v,d,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===j?d[1]==="!--"?o=ht:d[1]!==void 0?o=dt:d[2]!==void 0?(xt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=b):d[3]!==void 0&&(o=b):o===b?d[0]===">"?(o=i!=null?i:j,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,v=d[1],o=d[3]===void 0?b:d[3]==='"'?pt:ut):o===pt||o===ut?o=b:o===ht||o===dt?o=j:(o=b,i=void 0);const p=o===b&&n[l+1].startsWith("/>")?" ":"";r+=o===j?a+Lt:h>=0?(s.push(v),a.slice(0,h)+"$lit$"+a.slice(h)+$+p):a+$+(h===-2?(s.push(void 0),l):p)}const c=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ct!==void 0?ct.createHTML(c):c,s]};class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[a,v]=At(t,e);if(this.el=z.createElement(a,s),E.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(i=E.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith($)){const u=v[o++];if(d.push(h),u!==void 0){const p=i.getAttribute(u.toLowerCase()+"$lit$").split($),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?St:f[1]==="?"?Et:f[1]==="@"?kt:H})}else l.push({type:6,index:r})}for(const h of d)i.removeAttribute(h)}if(xt.test(i.tagName)){const d=i.textContent.split($),h=d.length-1;if(h>0){i.textContent=k?k.emptyScript:"";for(let u=0;u<h;u++)i.append(d[u],I()),E.nextNode(),l.push({type:2,index:++r});i.append(d[h],I())}}}else if(i.nodeType===8)if(i.data===st)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf($,d+1))!==-1;)l.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function A(n,t,e=n,s){var i,r,o,c;if(t===x)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const a=U(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,s)),s!==void 0?((o=(c=e)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=A(n,l._$AS(n,t.values),l,s)),t}class Ct{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(s,!0);E.currentNode=r;let o=E.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new M(o,o.nextSibling,this,t):a.type===1?v=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(v=new Pt(o,this,t)),this.v.push(v),a=i[++l]}c!==(a==null?void 0:a.index)&&(o=E.nextNode(),c++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{constructor(t,e,s,i){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),U(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==x&&this.T(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.k(t):wt(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==g&&U(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const o=new Ct(r,this),c=o.p(this.options);o.m(s),this.k(c),this._$AH=o}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new z(t)),e}S(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new M(this.j(I()),this.j(I()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=A(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const c=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=A(this,c[s+l],e,l),a===x&&(a=this._$AH[l]),o||(o=!U(a)||a!==this._$AH[l]),a===g?t=g:t!==g&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}o&&!i&&this.P(t)}P(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class St extends H{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===g?void 0:t}}const Dt=k?k.emptyScript:"";class Et extends H{constructor(){super(...arguments),this.type=4}P(t){t&&t!==g?this.element.setAttribute(this.name,Dt):this.element.removeAttribute(this.name)}}class kt extends H{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=A(this,t,e,0))!==null&&s!==void 0?s:g)===x)return;const i=this._$AH,r=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const Bt={A:"$lit$",C:$,M:st,L:1,R:At,V:Ct,D:wt,I:A,H:M,N:H,U:Et,B:kt,F:St,W:Pt},ft=window.litHtmlPolyfillSupport;ft==null||ft(z,M),((Y=globalThis.litHtmlVersions)!==null&&Y!==void 0?Y:globalThis.litHtmlVersions=[]).push("2.2.7");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,F;class y extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}}y.finalized=!0,y._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:y});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:y});((F=globalThis.litElementVersions)!==null&&F!==void 0?F:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=n=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(n,t):((e,s)=>{const{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(o){window.customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function R(n){return(t,e)=>e!==void 0?((s,i,r)=>{i.constructor.createProperty(r,s)})(n,t,e):Vt(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=({finisher:n,descriptor:t})=>(e,s)=>{var i;if(s===void 0){const r=(i=e.originalKey)!==null&&i!==void 0?i:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return n!=null&&(o.finisher=function(c){n(c,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),n==null||n(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(n,t){return Wt({descriptor:e=>{const s={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;s.get=function(){var r,o;return this[i]===void 0&&(this[i]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[i]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;((J=window.HTMLSlotElement)===null||J===void 0?void 0:J.prototype.assignedElements)!=null;var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Ft=(n,t,e,s)=>{for(var i=s>1?void 0:s?Zt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Yt(t,e,i),i};let q=class extends y{static get styles(){return C`
      :host {
        display: block;
        width: 100%;
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0 60px 0;
        box-sizing: border-box;
        opacity: 0.125;
      }

      a {
        color: inherit;
      }
    `}render(){return m`
      <a
        title="made by luckydye :)"
        href="https://twitter.com/timh4v"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          x="0px"
          y="0px"
          width="32px"
          viewBox="0 0 38.3 76.6"
          style="enable-background:new 0 0 38.3 76.6;"
          xml:space="preserve"
        >
          <style type="text/css">
            .st0 {
              fill: currentColor;
            }
          </style>
          <defs></defs>
          <g>
            <polygon
              id="c12f0b6d-d8db-47df-9b83-7d0ad379aa2d_2_"
              class="st0"
              points="24,19.1 38.3,27.4 38.3,68.3 24,76.6 	"
            />
            <polygon class="st0" points="0,49.1 14.4,57.4 14.4,0 0,8.3 	" />
          </g>
        </svg>
      </a>
    `}};q=Ft([L("lucky-footer")],q);const Jt=Object.freeze(Object.defineProperty({__proto__:null,get Footer(){return q}},Symbol.toStringTag,{value:"Module"}));var Gt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,qt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Kt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Gt(t,e,i),i};let Q=class extends y{static get styles(){return C`
      :host {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto 1fr auto;
        padding: 50px 0px 60px 0px;
        position: relative;
        grid-gap: 12px 0;
        transform: translateY(calc(var(--scrollY) * 0.33));
        z-index: 100;
      }

      @media screen and (max-width: 700px) {
        :host {
          padding: 50px 0 10px 0;
        }
      }

      a {
        color: currentColor;
      }

      .breadcrumb {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: normal;
        font-size: 14px;
        justify-self: flex-start;
        grid-row: 2;
        grid-column: 1;
      }

      .breadcrumb .prefix {
        margin-right: 5px;
      }

      .breadcrumb svg {
        fill: currentColor;
      }

      .logo {
        display: flex;
        align-items: center;
        grid-row: 1;
        grid-column: 1;
      }

      .logo svg {
        fill: currentColor;
      }

      .meta {
        justify-self: flex-start;
        grid-column: 1;
      }

      .header-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        pointer-events: none;
        display: none;
      }

      .header-background svg {
        position: relative;
        top: -174px;
        left: -620px;
      }

      .meta {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10000;
        height: 50px;
        margin-right: 115px;
      }

      .meta-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .meta-nav a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        font-size: 14px;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin-right: 30px;
      }

      .meta-nav svg {
        fill: currentColor;
        height: 18px;
        transition: fill 0.1s ease-out;
      }
      .meta-nav a:hover svg {
        fill: #eee;
      }
      .meta-nav a:hover::after {
        color: #eee;
      }

      .meta-nav a::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        padding: 8px;
        background: currentColor;
        opacity: 0;
        border-radius: 4px;
        z-index: -1;
        transition: opacity 0.1s ease-out;
      }

      .meta-nav a:hover::before {
        opacity: 1;
      }

      .meta-nav svg:active {
        transform: scale(0.9);
      }
    `}render(){return m`
      <div class="breadcrumb">
        <span class="prefix">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
          >
            <path
              id="Polygon_2"
              data-name="Polygon 2"
              d="M3.628,1.549a1,1,0,0,1,1.743,0l2.79,4.96A1,1,0,0,1,7.29,8H1.71A1,1,0,0,1,.838,6.51Z"
              transform="translate(8) rotate(90)"
            />
          </svg>
        </span>
        <span>Projects</span>
      </div>
      <a href="/" title="go to home" class="logo">
        <svg
          height="50px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218.8 48.1"
        >
          <g>
            <path class="st0" d="M7.1,40.7h11.8v6.7H0V0.7h7.1V40.7z" />
            <path
              class="st0"
              d="M46.4,36.9c0,3.6-1,6.4-2.9,8.3c-1.9,1.9-4.6,2.9-8.1,2.9c-3.4,0-6-1-8-2.9c-1.9-1.9-2.9-4.7-2.9-8.3V0.7h6.8
                          v36c0,3.1,1.3,4.7,4,4.7s4-1.6,4-4.7v-36h7.1V36.9z"
            />
            <path
              class="st0"
              d="M72.2,3c1.9,2,2.9,4.7,2.9,8.2v4.2l-6.8,0.3v-3.8c0-3.6-1.3-5.4-4-5.4c-1.3,0-2.3,0.4-3,1.2
                          c-0.7,0.8-1,2-1,3.5v25.5c0,1.6,0.3,2.7,1,3.5c0.7,0.8,1.7,1.2,3,1.2c2.7,0,4-1.8,4-5.4v-5.2l6.8,0.3v5.6c0,3.5-1,6.3-2.9,8.2
                          c-1.9,2-4.6,3-8.1,3c-3.4,0-6.1-1-8-2.9c-1.9-2-2.9-4.7-2.9-8.3V11.2c0-3.6,1-6.3,2.9-8.3C58,1,60.7,0,64.1,0C67.6,0,70.3,1,72.2,3
                          z"
            />
            <path
              class="st0"
              d="M96.6,19.2l9.8,28.2h-7.5L91.9,27l-3.1,6v14.4h-7.1V0.7h7.1v19.5h0.1l9.8-19.5h7.4L96.6,19.2z"
            />
            <path
              class="st0"
              d="M126.8,26.3v21.1h-7.1V26.2l-9.8-25.6h7.5l5.9,16.6h0.1l5.7-16.6h7.3L126.8,26.3z"
            />
            <path
              class="st0"
              d="M160.7,3.7c2,2,3,5,3,8.8v23.1c0,3.8-1,6.8-3,8.8c-2,2-4.9,3-8.7,3h-10.1V0.7h10.1
                          C155.8,0.7,158.7,1.7,160.7,3.7z M148.9,7.2v33.6h2.8c1.7,0,2.9-0.5,3.7-1.4c0.8-0.9,1.2-2.4,1.2-4.3V12.9c0-2-0.4-3.4-1.2-4.3
                          c-0.8-0.9-2-1.4-3.7-1.4H148.9z"
            />
            <path
              class="st0"
              d="M184,26.3v21.1h-7.1V26.2l-9.8-25.6h7.5l5.9,16.6h0.1l5.7-16.6h7.3L184,26.3z"
            />
            <path
              class="st0"
              d="M218.8,7.2H206v13.2h10.3V27H206v13.9h12.8v6.5h-19.9V0.7h19.9V7.2z"
            />
          </g>
        </svg>
      </a>
      <div class="meta">
        <div class="meta-nav">
          <a
            href="https://www.instagram.com/luckydye/"
            target="blank"
            aria-label="Instagram"
          >
            <svg
              id="test1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.41 18.406"
            >
              <path
                id="Pfad_1"
                data-name="Pfad 1"
                d="M9.2,1.658c2.458,0,2.747.011,3.718.055a5.022,5.022,0,0,1,1.709.318,2.856,2.856,0,0,1,1.059.687,2.811,2.811,0,0,1,.687,1.059,5.116,5.116,0,0,1,.318,1.709c.044.972.055,1.26.055,3.718s-.011,2.747-.055,3.718a5.022,5.022,0,0,1-.318,1.709,2.856,2.856,0,0,1-.687,1.059,2.811,2.811,0,0,1-1.059.687,5.116,5.116,0,0,1-1.709.318c-.972.044-1.26.055-3.718.055S6.454,16.74,5.483,16.7a5.022,5.022,0,0,1-1.709-.318,2.856,2.856,0,0,1-1.059-.687,2.811,2.811,0,0,1-.687-1.059,5.116,5.116,0,0,1-.318-1.709c-.044-.972-.055-1.26-.055-3.718s.011-2.747.055-3.718a5.022,5.022,0,0,1,.318-1.709,2.856,2.856,0,0,1,.687-1.059,2.811,2.811,0,0,1,1.059-.687,5.116,5.116,0,0,1,1.709-.318c.972-.047,1.264-.055,3.718-.055M9.2,0c-2.5,0-2.813.011-3.8.055A6.745,6.745,0,0,0,3.174.482,4.485,4.485,0,0,0,1.545,1.545,4.564,4.564,0,0,0,.482,3.174,6.749,6.749,0,0,0,.055,5.41C.011,6.389,0,6.7,0,9.2S.011,12.014.055,13a6.789,6.789,0,0,0,.427,2.235,4.485,4.485,0,0,0,1.063,1.629,4.564,4.564,0,0,0,1.629,1.063,6.749,6.749,0,0,0,2.235.427c.983.044,1.293.055,3.8.055s2.813-.011,3.8-.055a6.789,6.789,0,0,0,2.235-.427,4.485,4.485,0,0,0,1.629-1.063,4.564,4.564,0,0,0,1.063-1.629A6.749,6.749,0,0,0,18.355,13c.044-.983.055-1.293.055-3.8s-.011-2.813-.055-3.8a6.789,6.789,0,0,0-.427-2.235,4.485,4.485,0,0,0-1.063-1.629A4.564,4.564,0,0,0,15.236.479,6.749,6.749,0,0,0,13,.051C12.014.011,11.7,0,9.2,0Z"
                transform="translate(0 0)"
              />
              <path
                id="Pfad_2"
                data-name="Pfad 2"
                d="M127.227,122.6a4.727,4.727,0,1,0,4.727,4.727A4.727,4.727,0,0,0,127.227,122.6Zm0,7.791a3.068,3.068,0,1,1,3.068-3.068A3.068,3.068,0,0,1,127.227,130.391Z"
                transform="translate(-118.025 -118.122)"
              />
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="1.103"
                cy="1.103"
                r="1.103"
                transform="translate(13.011 3.185)"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/timh4v"
            target="blank"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.092 14.701">
              <path
                id="test1"
                d="M80.69,113.151A10.49,10.49,0,0,0,91.251,102.59c0-.161,0-.321-.011-.48a7.552,7.552,0,0,0,1.852-1.921,7.408,7.408,0,0,1-2.132.584,3.725,3.725,0,0,0,1.632-2.053,7.439,7.439,0,0,1-2.357.9,3.715,3.715,0,0,0-6.326,3.385,10.538,10.538,0,0,1-7.65-3.878,3.715,3.715,0,0,0,1.149,4.955,3.684,3.684,0,0,1-1.685-.465v.047A3.713,3.713,0,0,0,78.7,107.3a3.706,3.706,0,0,1-1.676.064,3.716,3.716,0,0,0,3.468,2.578,7.448,7.448,0,0,1-4.61,1.592,7.556,7.556,0,0,1-.884-.054,10.509,10.509,0,0,0,5.69,1.664"
                transform="translate(-75 -98.45)"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="header-background">
        <svg width="2393.048" height="375.356" viewBox="0 0 2393.048 375.356">
          <defs>
            <filter
              id="Path_9"
              x="0"
              y="0"
              width="2393.048"
              height="375.356"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="7.5" result="blur" />
              <feFlood floodOpacity="0.051" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_9)">
            <path
              id="Path_9-2"
              data-name="Path 9"
              d="M210.292,21.106S7.232,9.744-18.376,101.914s74.209,194.412,191.489,238.94S345.035,266.7,576.319,307.716s283.506-29.3,430.406-86.5,299.5-7.8,429.5,19.5,290.307,41.37,443,5.2c63.978-15.155,106-38.2,199-20.2s238.318-2.484,247.106-94.758-180.156-109.85-180.156-109.85Z"
              transform="translate(44.92 -1.16)"
              fill="#272727"
            />
          </g>
        </svg>
      </div>
    `}};Q=qt([L("lucky-header")],Q);const Qt=Object.freeze(Object.defineProperty({__proto__:null,get Header(){return Q}},Symbol.toStringTag,{value:"Module"}));var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,Mt=(n,t,e,s)=>{for(var i=s>1?void 0:s?te(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Xt(t,e,i),i};class D extends y{constructor(t){super(),this.sourceImage=t,this.position=null,!this.src&&t!=null&&(this.src=t.src,this.position=t.getClientRects()[0]),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.close()})}static get properties(){return{src:{type:String}}}static get styles(){return C`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: darkgrey;
      }
      .content {
        position: absolute;
        inset: 0px auto auto 0px;
        transition: all 0.5s ease 0s, width 0.6s ease 0s, height 0.6s ease 0s;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
      .content img {
        height: 100%;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}updated(t){const e=this.content;e.style.width=this.position.width+"px",e.style.height=this.position.height+"px",e.style.transform=`translate(${this.position.x-this.position.width/2}px, ${this.position.y-this.position.height/2}px)`,this.image.onload=()=>{this.sourceImage.style.opacity=0,this.sourceImage.style.transition="opacity .125s ease",e.style.width="90vw",e.style.height="90vh",e.style.transform="translate(calc(50vw - 50%), calc(50vh - 50%))"},this.image.src=this.src}close(){this.remove(),this.sourceImage&&(this.sourceImage.style.opacity=null)}render(){return m`
      <div
        class="blackbox"
        @click="${t=>{t.target.className==="blackbox"&&this.close()}}"
      >
        <div class="close-btn" @click="${t=>this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <img />
        </div>
      </div>
    `}}Mt([Ot(".content")],D.prototype,"content",2);Mt([Ot("img")],D.prototype,"image",2);customElements.define("lucky-lightbox",D);const ee=Object.freeze(Object.defineProperty({__proto__:null,Lightbox:D},Symbol.toStringTag,{value:"Module"}));class jt extends y{static get properties(){return{href:{type:String},target:{type:String,default:"_self"}}}static get styles(){return C`
      :host {
        display: block;
        color: black;
        --padding: 4px 10px;
        --background: var(--accent-color, #eee);
        --background-hover: var(--accent-color-hover, #eee);
        --background-active: var(--accent-color-active, #eee);
        --border-radius: 4px;
        margin-top: 15px;
        font-size: 14px;
        font-weight: 600;
      }
      .open-link[href] {
        transition: background 0.15s ease-out, box-shadow 0.15s ease-out;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 100%;
        justify-self: flex-start;
        padding: var(--padding, 4px 10px);
        background: var(--background);
        color: inherit;
        border-radius: var(--border-radius);
        text-decoration: none;
      }
      :host(:hover) .open-link[href] {
        background: var(--background-hover);
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
      }
      :host(:active) .open-link[href] {
        background: var(--background-active);
        color: white;
        transition: none;
      }
      .material-icons {
        margin: 0 5px;
        display: var(--display-icon, "inherit");
      }
    `}render(){return m`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
        type="text/css"
      />
      <a target="_blank" rel="noreferrer" class="open-link" href="${this.href}">
        <slot></slot> <span class="material-icons">arrow_right_alt</span>
      </a>
    `}}customElements.define("link-button",jt);const ie=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"}));var se=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,re=(n,t,e,s)=>{for(var i=s>1?void 0:s?ne(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&se(t,e,i),i};const oe=(n,t)=>{let e=0;n.forEach(s=>{s.isIntersecting&&(setTimeout(()=>{s.target.show()},e*100),e++)})},le=new IntersectionObserver(oe,{rootMargin:"-100px"});let X=class extends y{static get styles(){return C`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        overflow: auto;
        will-change: transform;
        border-radius: 6px;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 0deg)) translate(0, 0px);
      }
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*2}deg`),le.observe(this)}render(){return m`<slot></slot>`}};X=re([L("lucky-tile")],X);const ae=Object.freeze(Object.defineProperty({__proto__:null,get Tile(){return X}},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},he=n=>(...t)=>({_$litDirective$:n,values:t});class de{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ue}=Bt,mt=()=>document.createComment(""),T=(n,t,e)=>{var s;const i=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){const o=i.insertBefore(mt(),r),c=i.insertBefore(mt(),r);e=new ue(o,c,n,n.options)}else{const o=e._$AB.nextSibling,c=e._$AM,l=c!==n;if(l){let a;(s=e._$AQ)===null||s===void 0||s.call(e,n),e._$AM=n,e._$AP!==void 0&&(a=n._$AU)!==c._$AU&&e._$AP(a)}if(o!==r||l){let a=e._$AA;for(;a!==o;){const v=a.nextSibling;i.insertBefore(a,r),a=v}}}return e},w=(n,t,e=n)=>(n._$AI(t,e),n),pe={},ve=(n,t=pe)=>n._$AH=t,fe=n=>n._$AH,G=n=>{var t;(t=n._$AP)===null||t===void 0||t.call(n,!1,!0);let e=n._$AA;const s=n._$AB.nextSibling;for(;e!==s;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(n,t,e)=>{const s=new Map;for(let i=t;i<=e;i++)s.set(n[i],i);return s},ge=he(class extends de{constructor(n){if(super(n),n.type!==ce.CHILD)throw Error("repeat() can only be used in text expressions")}ht(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const i=[],r=[];let o=0;for(const c of n)i[o]=s?s(c,o):o,r[o]=e(c,o),o++;return{values:r,keys:i}}render(n,t,e){return this.ht(n,t,e).values}update(n,[t,e,s]){var i;const r=fe(n),{values:o,keys:c}=this.ht(t,e,s);if(!Array.isArray(r))return this.ut=c,o;const l=(i=this.ut)!==null&&i!==void 0?i:this.ut=[],a=[];let v,d,h=0,u=r.length-1,p=0,f=o.length-1;for(;h<=u&&p<=f;)if(r[h]===null)h++;else if(r[u]===null)u--;else if(l[h]===c[p])a[p]=w(r[h],o[p]),h++,p++;else if(l[u]===c[f])a[f]=w(r[u],o[f]),u--,f--;else if(l[h]===c[f])a[f]=w(r[h],o[f]),T(n,a[f+1],r[h]),h++,f--;else if(l[u]===c[p])a[p]=w(r[u],o[p]),T(n,r[h],r[u]),u--,p++;else if(v===void 0&&(v=yt(c,p,f),d=yt(l,h,u)),v.has(l[h]))if(v.has(l[u])){const _=d.get(c[p]),B=_!==void 0?r[_]:null;if(B===null){const nt=T(n,r[h]);w(nt,o[p]),a[p]=nt}else a[p]=w(B,o[p]),T(n,r[h],B),r[_]=null;p++}else G(r[u]),u--;else G(r[h]),h++;for(;p<=f;){const _=T(n,a[f+1]);w(_,o[p]),a[p++]=_}for(;h<=u;){const _=r[h++];_!==null&&G(_)}return this.ut=c,ve(n,a),x}}),me=`{\r
    projects() {\r
        id\r
        title\r
        url\r
        editorialDate\r
        preview {\r
            url\r
        }\r
        description\r
    }\r
}`;var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,$e=(n,t,e,s)=>{for(var i=s>1?void 0:s?_e(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&ye(t,e,i),i};const be="https://api-eu-central-1.graphcms.com/v2/ckpyd6ueoo00f01z0eo4rgn07/master";function Tt(n){return fetch(be,{method:"POST",headers:{Authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjM4NzMyMjIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrcHlkNnVlb28wMGYwMXowZW80cmduMDcvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOGZhMmRhYjYtZWQ3Yi00Y2UyLTk4NTYtNGIwMDkxYWRlMjEyIiwianRpIjoiY2twenc2dHhpZ2ZiMDAxeXpiaWg0Z3UwZCJ9.V4MEFWNKBdAanX0IAVv0MxfiiCvuSiObUn55PkLoWoInXIUBeUhx-tabm-5uC4vgEuUhG_Htmw7-cqYFFUafud2f__98cUICglb0ATbzNpkIs6bsKeOOwm_bWEuja8BRGfpUItnKmALcHDV65s2Z2I_4Bv7uRCJnQJsD92XWxuKV0hnCtFy168TLRcywc_M6RthWC1-OMVZ0LqNZvx2QVx-Grd1UX4ewgrBKz0OJNHJJCqKh47xutTPvN6AJ0ZyFPb3vzwO_jTm4GxnuE0EayMYVjTCaFRpt6RC6QjE8xntxMwWbsIZnWzQJ9-rjZYDtODKl-MufVp-Wu83ZDc75IY1IY_8dGercjgV6JH7jH-MBjKUtypK-m02C9Eyn5qBLtx57V5Iunj8EH98RQwHgCTHCVtN5MBSLA0C4hbgAq_OLe5k7Fmi7ciA3ORYjF-IKx6vD9zWyPoQ374zZFI8Bngm6Jxgt7PZF6FOmOpie7RRylhn11yT_HfAvxHQtQuQvZ9U38b-PERtmKl_5PIGpjXlgLBKAvllCduy9HECDQAqV90oZc8QPyX8th6exCgh7ZMdrXY2RIUsU7P1O-QVL8tdYpt9t094YOYPAVD_Wg_7_5Opyl5w1uu_IZTtxhWdyJYLDMt7b4mi5jL3o0S5mskUcdYp3JwK2e8NvGuwc-Tk"},body:JSON.stringify({query:n,variables:null})}).then(async t=>t.json()).then(t=>t.data).catch(t=>{console.error(t)})}let tt=class extends y{constructor(){super(...arguments),this.projects=[],this.columnCount=4}static get styles(){return C`
      :host {
        display: block;

        --columnCount: 4;
      }

      aui-lazyimage {
        display: block;
        width: 100%;
        height: 100%;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(var(--columnCount), 1fr);
        gap: 10px;
      }

      lucky-tile {
        height: 250px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        overflow: hidden;
        flex-flow: column;
      }

      @media screen and (max-width: 700px) {
        lucky-tile {
          height: auto;
          min-height: 100px;
        }
      }

      link-button {
        position: absolute;
        transform: translateY(50px);
        transition: transform 0.3s 0.05s ease;
        margin: 5px 15px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      h3 {
        font-size: 2rem;
        margin: 5px 15px;
        font-weight: normal;
        max-width: 75%;
        transition: transform 0.3s ease 0s;
      }

      lucky-tile:hover > link-button {
        transform: translateY(-20px);
      }

      lucky-tile:hover > h3 {
        transform: translateY(-70px);
      }

      h2 {
        font-size: 3.5rem;
        margin: 15px;
        font-weight: bold;
      }

      .spacer {
      }

      .year {
        background: rgb(163 163 163);
        color: white;
        pointer-events: none;
        user-select: none;
      }

      .link {
        display: contents;
        color: inherit;
      }
    `}connectedCallback(){super.connectedCallback(),Tt(me).then(t=>{this.projects=t.projects,this.requestUpdate()});const n=()=>{window.innerWidth<700?(this.columnCount=1,this.style.setProperty("--columnCount",this.columnCount.toString()),this.requestUpdate()):window.innerWidth<1200?(this.columnCount=3,this.style.setProperty("--columnCount",this.columnCount.toString()),this.requestUpdate()):(this.columnCount=5,this.style.setProperty("--columnCount",this.columnCount.toString()),this.requestUpdate())};window.addEventListener("resize",n),n()}render(){let n=null,t=0,e=null;const s=2,i=this.columnCount;return m`
      <div class="grid">
        ${ge(this.projects.sort((r,o)=>new Date(o.editorialDate)-new Date(r.editorialDate)),r=>r.id,r=>{let o=0;if(n){const h=Math.abs((new Date(r.editorialDate)-new Date(n))/26784e5);o=Math.round(Math.min(h,s))}n=new Date(r.editorialDate);const c=n.getFullYear();let l=!1;c!==e&&(e=n.getFullYear(),c!==new Date().getFullYear()&&(l=!0));function a(h=1){return(t+h)%i+1}a(o)+1>i&&o++;function v(){const h=t;return t=(t+1)%i,h+1}return m`
              ${new Array(o).fill(1).map(()=>m`<div
                    class="spacer"
                    column="${v()}"
                  ></div>`)}
              ${t>i-3?m`
                    <a href="${r.url}" target="_blank" class="link">
                      <lucky-tile
                        column="${v()}"
                        style="align-items: flex-end; text-align: right;"
                      >
                        <h3>${r.title}</h3>
                        <link-button href="${r.url}"
                          >Open Project</link-button
                        >
                      </lucky-tile>
                      <lucky-tile column="${v()}">
                        <aui-lazyimage src="${r.preview.url}" />
                      </lucky-tile>
                    </a>
                  `:m`
                    <a href="${r.url}" target="_blank" class="link">
                      <lucky-tile column="${v()}">
                        <aui-lazyimage src="${r.preview.url}" />
                      </lucky-tile>
                      <lucky-tile column="${v()}">
                        <h3>${r.title}</h3>
                        <link-button href="${r.url}"
                          >Open Project</link-button
                        >
                      </lucky-tile>
                    </a>
                  `}
              ${l?m`
                    <lucky-tile class="year" column="${v()}">
                      <h2>${c}</h2>
                    </lucky-tile>
                  `:m``}
            `})}
      </div>
    `}};tt=$e([L("lucky-grid")],tt);const we=Object.freeze(Object.defineProperty({__proto__:null,fetchApi:Tt,get Grid(){return tt}},Symbol.toStringTag,{value:"Module"}));var xe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,N=(n,t,e,s)=>{for(var i=s>1?void 0:s?Ae(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&xe(t,e,i),i};let O=class extends y{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return C`
			:host {
				display: contents;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: opacity 0.5s ease;
				opacity: 1;
			}

			img.hidden {
				opacity: 0;
			}
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(n,t,e){super.attributeChangedCallback(n,t,e),n==="src"&&(this._image.src=e,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return m`${this._image}`}};N([R({type:String})],O.prototype,"src",2);N([R({type:String})],O.prototype,"alt",2);N([R({type:String})],O.prototype,"width",2);N([R({type:String})],O.prototype,"height",2);O=N([L("aui-lazyimage")],O);Object.assign({"./components/Footer.ts":Jt,"./components/Header.ts":Qt,"./components/Lightbox.ts":ee,"./components/LinkButton.ts":ie,"./components/Tile.ts":ae,"./components/TileGrid.ts":we});
