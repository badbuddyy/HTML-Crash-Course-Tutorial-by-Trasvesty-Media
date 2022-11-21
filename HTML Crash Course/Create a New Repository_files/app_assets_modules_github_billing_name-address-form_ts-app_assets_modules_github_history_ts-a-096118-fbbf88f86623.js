"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_billing_name-address-form_ts-app_assets_modules_github_history_ts-a-096118"],{24727(a,b,c){var d=c(59753),e=c(64463);let f=["AM","AZ","BY","BR","CN","HU","IN","IQ","KZ","KG","MD","MM","PL","RU","SA","ZA","SS","TJ","TH","TR","UA","AE","UZ","VE","VN"],g=["UA","RU"];function h(a){let b=a.options[a.selectedIndex]?.value,c=a.closest(".js-name-address-collection"),d=c.querySelector(".js-select-state"),e=c.querySelector(".js-name-address-state"),h=c.querySelector(".js-name-address-select-province"),i=c.querySelector(".js-sdn-region-label"),j=c.querySelector(".js-sdn-vat-code-input.js-vat-code-region");if(b&&j){let k=c.querySelector(".js-sdn-vat-code-label");f.includes(b)?(j.setAttribute("required","required"),k.classList.add("required-asterisked")):(j.removeAttribute("required"),k.classList.remove("required-asterisked"))}let l=c.querySelector(".js-sdn-postal-code-input.js-postal-code-region");if(b&&l){let m=c.querySelector(".js-sdn-postal-code-label");g.includes(b)?(l.setAttribute("required","required"),m.classList.add("required-asterisked")):(l.removeAttribute("required"),m.classList.remove("required-asterisked"))}"US"===b?(d.required=!0,d.id="account_screening_profile_region",d.disabled=!1,d.hidden=!1):(d.disabled=!0,d.required=!1,d.value="",d.removeAttribute("id"),d.hidden=!0),"CA"===b?(h.disabled=!1,h.required=!0,h.id="account_screening_profile_region",h.hidden=!1):(h.disabled=!0,h.required=!1,h.value="",h.removeAttribute("id"),h.hidden=!0),"US"===b||"CA"===b?(e.disabled=!0,e.value="",e.removeAttribute("id"),e.hidden=!0,i&&i.classList.add("required-asterisked")):(e.disabled=!1,e.id="account_screening_profile_region",e.hidden=!1,i&&i.classList.remove("required-asterisked"))}function i(){let a=document.querySelector(".js-user-personal-profile-summary");a&&(a.hidden=!0)}function j(){let a=document.querySelector(".js-user-personal-profile-summary");a&&(a.hidden=!1)}function k(){let a=document.querySelector(".js-billing-section");a.hidden=!0;let b=document.querySelector(".js-billing-pay-with");b.hidden=!0;let c=document.querySelector(".js-payment-methods-radio");c.hidden=!0;let d=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");d.hidden=!0;let e=document.querySelector(".js-sponsors-form");e&&(e.hidden=!1);let f=document.querySelector(".js-zuora-existing-card");f&&f.classList.remove("d-none")}function l(){let a=document.querySelector(".js-billing-information-summary-wrapper");a.hidden=!0;let b=document.querySelector(".js-name-address-collection-wrapper");b.hidden=!1;let c=document.querySelector(".js-add-billing-information-btn");c.hidden=!0;let d=document.querySelector(".js-no-billing-information-message");d&&(d.hidden=!0);let e=document.querySelector(".js-org-payment-method-wrapper");e&&(e.hidden=!0)}function m(){let a=document.querySelector(".js-trade-controls-notice-container");a&&(a.hidden=!0)}function n(){return document.querySelector(".js-business-details-inputs-wrapper")}function o(){return document.querySelector(".js-individual-details-inputs-wrapper")}function p(a=""){let b;return a?document.querySelector(`.js-payment-methods-wrapper:not(.${a})`):document.querySelector(".js-payment-methods-wrapper")}function q(a=""){let b=p(a);b&&b.classList.add("has-removed-contents")}function r(){let a=p();a&&(a.hidden=!0)}function s(){let a=p();a&&(a.hidden=!1)}function t(){let a=p();a&&a.classList.remove("has-removed-contents")}(0,d.on)("click",".js-edit-user-personal-profile",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-user-personal-profile-wrapper");b&&(b.hidden=!0);let c=document.querySelector(".js-name-address-collection-wrapper");c&&(c.hidden=!1),i(),function(){let a=document.querySelector(".js-cancel-billing-info");a&&(a.hidden=!1)}();let d=document.querySelector(".js-awaiting-payment");if(d){let e=d.hasAttribute("hidden");e||(d.hidden=!0)}let f=document.querySelector(".js-sponsors-form");f&&(f.hidden=!0);let g=document.querySelector(".js-marketplace-form-wrapper");g&&(g.hidden=!0);let h=document.querySelector(".js-sdn-screening-error-wrapper");h&&(h.hidden=!0),r();let j=document.querySelector(".js-coupons-form-wrapper");j&&(j.hidden=!0);let k=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");k&&!k.hidden&&k.click();let l=document.querySelector(".js-org-payment-method-wrapper");l&&(l.hidden=!0);let m=document.querySelector(".js-billing-section.js-data-collection-org-signup");m&&m.classList.toggle("has-removed-contents")}),(0,d.on)("click",".js-edit-individual-owned-org-info-on-upgrade",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-individual-owned-org-info-on-upgrade-wrapper");b&&(b.hidden=!0),i(),o().classList.remove("has-removed-contents");let c=document.querySelector(".js-cancel-edit-individual-owned-org-info-on-upgrade");c&&(c.hidden=!1),q()}),(0,d.on)("click",".js-cancel-billing-info",function(a){if(!(a.currentTarget instanceof Element))return;!function(){let a=document.querySelector(".js-cancel-billing-info");a&&(a.hidden=!0)}();let b=document.querySelector(".js-name-address-collection-wrapper");b.hidden=!0,j();let c=document.querySelector(".js-edit-user-personal-profile-wrapper");c.hidden=!1,s();let d=document.querySelector(".js-sponsors-form");d&&(d.hidden=!1);let e=document.querySelector(".js-marketplace-form-wrapper");e&&(e.hidden=!1)}),(0,d.on)("click",".js-cancel-edit-individual-owned-org-info-on-upgrade",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-edit-individual-owned-org-info-on-upgrade-wrapper");b&&(b.hidden=!1),j(),o().classList.add("has-removed-contents");let c=document.querySelector(".js-cancel-edit-individual-owned-org-info-on-upgrade");c&&(c.hidden=!0),t()}),(0,d.on)("click",".js-view-user-personal-profile",function(){fetch("/account/user_profile_view?flow_from_page=SPONSORABLE",{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}})}),(0,d.on)("click",".js-edit-paypal-method",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-awaiting-payment");b&&(b.hidden=!0);let c=document.querySelector(".js-sponsors-form");c&&(c.hidden=!0);let d=document.querySelector(".js-marketplace-form-wrapper");d&&(d.hidden=!0);let e=document.querySelector(".js-payment-methods-radio");e.hidden=!1;let f=document.querySelector(".js-billing-pay-with");f&&(f.hidden=!1);let g=document.querySelector(".js-existing-paypal-summary");g.hidden=!0;let h=document.querySelector(".js-paypal-method-details");h.hidden=!1;let i=document.querySelector(".js-paypal-payment-method-form");i.hidden=!1}),(0,d.on)("click",".js-enter-new-card",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-awaiting-payment");b&&(b.hidden=!0);let c=document.querySelector(".js-sponsors-form");c&&(c.hidden=!0);let d=document.querySelector(".js-marketplace-form-wrapper");d&&(d.hidden=!0);let e=document.querySelector(".js-billing-pay-with");e&&(e.hidden=!1);let f=document.querySelector(".js-payment-methods-radio");f&&(f.hidden=!1);let g=document.querySelector(".js-sponsors-cancel-edit-payment-method-btn");g&&(g.hidden=!1)}),(0,d.on)("click",".js-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-update-billing-information-banner"),c=document.querySelector(".js-billing-information-summary"),d=document.querySelector(".js-edit-payment-method-btn"),e=d.classList.contains("js-skip-billing-info");if(c||e){b.hidden=!0;let f=document.querySelector(".js-payment-summary-wrapper");f.hidden=!0;let g=document.querySelector(".js-payment-method-section-wrapper");g.hidden=!1,d.hidden=!0;let h=document.querySelector("#z_hppm_iframe");null!=h&&(h.setAttribute("height","100%"),h.setAttribute("width","100%")),window.dispatchEvent(new Event("resize"))}else b.hidden=!1,l()}),(0,d.on)("click",".js-cancel-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-payment-summary-wrapper");b.hidden=!1;let c=document.querySelector(".js-payment-method-section-wrapper");c.hidden=!0;let d=document.querySelector(".js-edit-payment-method-btn");d.hidden=!1}),(0,d.on)("click",".js-sponsors-cancel-edit-payment-method-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-paypal-payment-method-form");if(null==b)k();else{let c=document.querySelector(".payment-methods");c.classList.add("js-sponsors-handle-cancel-edit-payment");let d=document.querySelector("#pay-by-credit-card");d.click()}}),(0,d.on)("click",".js-add-billing-information-btn",function(a){a.currentTarget instanceof Element&&l()}),(0,d.on)("click",".js-cancel-submit-personal-profile-btn",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-billing-information-summary-wrapper");b&&(b.hidden=!1);let c=document.querySelector(".js-name-address-collection-wrapper");c&&(c.hidden=!0);let d=document.querySelector(".js-add-billing-information-btn");d&&(d.hidden=!1);let e=document.querySelector(".js-no-billing-information-message");e&&(e.hidden=!1)}),(0,d.on)("click",".js-dismiss-flash-message",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-update-billing-information-banner");b.hidden=!0}),(0,d.on)("click",".js-sign-ctos-btn",function(a){let b=a.currentTarget;if(!b)return;b.hidden=!0;let c=document.querySelector(".js-tos-name-address-form");c&&(c.hidden=!1)}),(0,d.on)("click",".js-cancel-sign-ctos",function(a){if(!(a.currentTarget instanceof Element))return;let b=document.querySelector(".js-tos-name-address-form");b&&(b.hidden=!0);let c=document.querySelector(".js-sign-ctos-btn");c&&(c.hidden=!1)}),(0,d.on)("click",".js-show-individual-billing-info-inputs",function(){o().classList.remove("has-removed-contents"),n().classList.add("has-removed-contents"),q(),m()}),(0,d.on)("click",".js-show-business-billing-info-inputs",function(){o().classList.add("has-removed-contents"),n().classList.remove("has-removed-contents"),q(),m()}),(0,e.N7)(".js-name-address-select-country",{constructor:HTMLSelectElement,initialize(a){h(a),a.form&&(0,d.f)(a.form,"change"),a.addEventListener("change",function(){h(a)})}}),(0,e.N7)(".js-sponsors-handle-cancel-edit-payment .pay-by-credit-card .js-zuora-existing-card",{constructor:HTMLElement,add(){k();let a=document.querySelector(".payment-methods");a.classList.remove("js-sponsors-handle-cancel-edit-payment")}}),(0,e.N7)(".js-show-individual-billing-info-inputs",{constructor:HTMLInputElement,initialize(a){a.checked&&(o().classList.remove("has-removed-contents"),n().classList.add("has-removed-contents"),q("js-has-valid-payment-method"),m())}})},80721(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(16462);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},9302(a,b,c){c.d(b,{IW:()=>j,Mw:()=>o,"_C":()=>n,lO:()=>m,qA:()=>l,y0:()=>g});let d=[],e=0,f;function g(){return f}function h(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(a){return 0}}function i(){return h()-1+e}function j(a){f=a;let b=location.href;d[i()]={url:b,state:f},d.length=h(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function k(){return new Date().getTime()}function l(a,b,c){e=0;let d={_id:k(),...a};history.pushState(d,b,c),j(d)}function m(a,b,c){let d={...f,...a};history.replaceState(d,b,c),j(d)}function n(){let a=d[i()-1];if(a)return a.url}function o(){let a=d[i()+1];if(a)return a.url}f=function(){let a={_id:new Date().getTime(),...history.state};return j(a),a}(),window.addEventListener("popstate",function(a){let b=a.state;if(!b|| !b._id&&!b.turbo?.restorationIdentifier)return;let c=b.turbo?.restorationIdentifier,f=d[i()-1]?.state?.turbo?.restorationIdentifier;f===c?e--:e++,j(b)},!0);let p;window.addEventListener("turbo:visit",a=>{a instanceof CustomEvent&&(p=a.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==p&&(e=0,m(history.state,"",""))}),window.addEventListener("hashchange",function(){if(h()>d.length){let a={_id:k()};history.replaceState(a,"",location.href),j(a)}},!0),window.addEventListener("pageshow",()=>{d=[],e=0})},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(16462),e=c(34855);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(31167);let e=class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}};class SoftNavStartEvent extends e{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends e{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends e{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends e{constructor(a){super(a,d.QE.END)}}},31167(a,b,c){c.d(b,{BT:()=>l,FP:()=>n,LD:()=>k,QE:()=>g,TL:()=>o,Yl:()=>j,jN:()=>h,r_:()=>m,u5:()=>p});var d=c(55065),e=c(29573),f=c(58843);let g=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),h="reload",i=0;function j(){i=0,document.dispatchEvent(new Event(g.INITIAL)),(0,f.XL)()}function k(a){(0,f.sj)()||(q(),document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),(0,e.hY)())}function l(a={}){s(a)&&(i+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),i)),n(a))}function m(a={}){if(!s(a))return;i=0;let b=(0,f.Wl)()||h;document.dispatchEvent(new d.QW((0,f.Gj)(),b)),r(),(0,e.t3)(b),(0,f.XL)()}function n(a={}){s(a)&&(r(),document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function o(a={}){s(a)&&((0,e.mr)(),document.dispatchEvent(new Event(g.RENDER)))}function p(){document.dispatchEvent(new Event(g.FRAME_UPDATE))}function q(){document.dispatchEvent(new Event(g.PROGRESS_BAR.START))}function r(){document.dispatchEvent(new Event(g.PROGRESS_BAR.END))}function s({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},29573(a,b,c){c.d(b,{CF:()=>g,hY:()=>h,mr:()=>j,t3:()=>i});var d=c(34855),e=c(58843);let f="stats:soft-nav-duration",g={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function h(){performance.mark(f)}function i(a){(0,d.b)({turboFailureReason:a,turboStartUrl:(0,e.wP)(),turboEndUrl:window.location.href})}function j(){let a=function(){if(0===performance.getEntriesByName(f).length)return null;performance.measure(f,f);let a=performance.getEntriesByName(f),b=a.pop();return b?b.duration:null}();if(!a)return;let b=g[(0,e.Gj)()],c=Math.round(a);b===g.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,d.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,e.Nb)()||"rails",duration:c,initiator:(0,e.CI)()||"rails"}})}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(31167);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},34855(a,b,c){c.d(b,{B:()=>l,b:()=>g});var d=c(16462),e=c(80721);let f=[];function g(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=k(),a.staff=l(),f.push(a),b?j():i()}let h=null;async function i(){await e.C,null==h&&(h=window.requestIdleCallback(j))}function j(){if(h=null,!f.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:f});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}f=[]}function k(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function l(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",j),d.n4?.addEventListener("visibilitychange",j)},16462(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location}}])
//# sourceMappingURL=app_assets_modules_github_billing_name-address-form_ts-app_assets_modules_github_history_ts-a-096118-db6544d2e24a.js.map