(this.webpackJsonpgrabtest=this.webpackJsonpgrabtest||[]).push([[26],{160:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_loading",(function(){return g}));var n=e(1),o=e(31),r=e(9),a=(e(19),e(17)),s=e(21),c=e(216),d=e(217),l=function(t){var i=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),n.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,n])},u=function(t){var i=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.3,0),n.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,n])},p=function(t){var i=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),n.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,n])},f=function(t){var i=Object(a.a)(),e=Object(a.a)(),n=Object(a.a)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.32,0),n.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,n])},g=function(){function t(t){var i=this;Object(o.l)(this,t),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){i.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(o.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionLoadingDidDismiss",7)}return t.prototype.componentWillLoad=function(){if(void 0===this.spinner){var t=Object(o.e)(this);this.spinner=r.b.get("loadingSpinner",r.b.get("spinner","ios"===t?"lines":"crescent"))}},t.prototype.present=function(){return Object(n.a)(this,void 0,void 0,(function(){var t=this;return Object(n.c)(this,(function(i){switch(i.label){case 0:return[4,Object(s.f)(this,"loadingEnter",l,p,void 0)];case 1:return i.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss()}),this.duration+10)),[2]}}))}))},t.prototype.dismiss=function(t,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,t,i,"loadingLeave",u,f)},t.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionLoadingDidDismiss")},t.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionLoadingWillDismiss")},t.prototype.render=function(){var t,i=this.message,e=this.spinner,n=Object(o.e)(this);return Object(o.i)(o.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),(t={},t[n]=!0,t["loading-translucent"]=this.translucent,t))},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(o.i)("div",{class:"loading-spinner"},Object(o.i)("ion-spinner",{name:e})),i&&Object(o.i)("div",{class:"loading-content",innerHTML:Object(d.a)(i)})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),t}()},216:function(t,i,e){"use strict";e.d(i,"a",(function(){return r})),e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"d",(function(){return c}));var n=e(1),o=function(t,i){return null!==i.closest(t)},r=function(t){var i;return"string"===typeof t&&t.length>0?((i={"ion-color":!0})["ion-color-"+t]=!0,i):void 0},a=function(t){var i={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return i[t]=!0})),i},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,i,e){return Object(n.a)(void 0,void 0,void 0,(function(){var o;return Object(n.c)(this,(function(n){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,o.push(t,e)]):[2,!1]}))}))}},217:function(t,i,e){"use strict";e.d(i,"a",(function(){return n}));var n=function(t){try{if("string"!==typeof t||""===t)return t;var i=document.createDocumentFragment(),e=document.createElement("div");i.appendChild(e),e.innerHTML=t,s.forEach((function(t){for(var e=i.querySelectorAll(t),n=e.length-1;n>=0;n--){var a=e[n];a.parentNode?a.parentNode.removeChild(a):i.removeChild(a);for(var s=r(a),c=0;c<s.length;c++)o(s[c])}}));for(var n=r(i),a=0;a<n.length;a++)o(n[a]);var c=document.createElement("div");c.appendChild(i);var d=c.querySelector("div");return null!==d?d.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},o=function t(i){if(!i.nodeType||1===i.nodeType){for(var e=i.attributes.length-1;e>=0;e--){var n=i.attributes.item(e),o=n.name;if(a.includes(o.toLowerCase())){var s=n.value;null!=s&&s.toLowerCase().includes("javascript:")&&i.removeAttribute(o)}else i.removeAttribute(o)}var c=r(i);for(e=0;e<c.length;e++)t(c[e])}},r=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=26.aca2ae87.chunk.js.map