(this["webpackJsonpdonation-page"]=this["webpackJsonpdonation-page"]||[]).push([[0],{19:function(e,t,n){e.exports=n(29)},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(9),l=n(10),u=n(17),s=n(18),d=n(1),p=n(2),m=n(11),f=n.n(m),v=function(e){var t=e.srcUrl;return Object(a.useEffect)((function(){new f.a("#vdepa")})),r.a.createElement("div",{className:"vdepa"},r.a.createElement("video",{id:"vdepa",playsInline:!0,controls:!0,className:"media-player__Video-gqzi7w-5 kueHaM",autoPlay:!0},r.a.createElement("source",{src:t,type:"video/mp4"})))},b=function(e,t,n,a,r){return{strpId:e,btnId:t,btnCategory:n,btnText:a,priceId:r}},k=[b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVDscuGwFYhCls","A","$5 for \ud83e\udd1c\ud83e\udd1b","sku_HVDscuGwFYhCls"),b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVDsxxbXRqfRA8","B","$10 for \u270a","sku_HVDsxxbXRqfRA8"),b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVDsgbFVuaRLJo","C","$20 for \ud83d\ude4f","sku_HVDsgbFVuaRLJo"),b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVDsWxIrdcPaPD","D","$50 for \ud83d\udc4f","sku_HVDsWxIrdcPaPD"),b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVDs7rks2PPfFF","E","$100 for \ud83d\ude4c","sku_HVDs7rks2PPfFF"),b("pk_live_5GM16A7hC4non0p8vwxikBEy00ja0bU4Iq","checkout-button-sku_HVKFOGMOPERMOlrmor","F","Other amount",null)],h=function(e){var t=e.btnId,n=e.btnCategory,a=e.btnText;return r.a.createElement("button",{"data-qa":"poll-option-0",className:"poll__ItemButton-iptlde-0 fvmKtl",id:t},r.a.createElement("span",{className:"poll__Letter-iptlde-1 fxXBlX"},n),r.a.createElement("span",{className:"poll__Content-iptlde-3 jJameY"},a))},_=n(4),E=n.n(_),x=n(12),w=n(13),y=function(){var e=Object(x.a)(E.a.mark((function e(t,n,a){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(t);case 2:r=e.sent,document.getElementById(n).addEventListener("click",(function(){r.redirectToCheckout({lineItems:[{price:a,quantity:1}],mode:"payment",successUrl:"".concat(window.location.protocol,"//delovery.org/success"),cancelUrl:"".concat(window.location.protocol,"//delovery.org/canceled")}).then((function(e){e.error&&(document.getElementById("error-message").textContent=e.error.message)}))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),g=function(){Object(a.useEffect)((function(){k.map((function(e){return y(e.strpId,e.btnId,e.priceId)}))}));var e=k.map((function(e){return r.a.createElement("div",{id:e.btnId},r.a.createElement(h,{id:e.btnId,btnId:e.btnId,btnCategory:e.btnCategory,btnText:e.btnText}))}));return r.a.createElement("div",{className:"ksdla"},r.a.createElement("div",{id:"error-message"}),r.a.createElement("div",{className:"dntbtn"},r.a.createElement("div",{className:"poll__Wrapper-iptlde-5 dpBdeQ"},e)))};function I(){var e=Object(d.a)(["\n  height: 768px;\n  flex-direction: row;\n  display: flex;\n  flex: 1 1 0%;\n"]);return I=function(){return e},e}function j(){var e=Object(d.a)(["\n  width: 698px;\n  height: 768px;\n  background-color: #fff;\n"]);return j=function(){return e},e}function C(){var e=Object(d.a)(["\n  width: 668px;\n  height: 768px;\n  background-color: #fff;\n"]);return C=function(){return e},e}function O(){var e=Object(d.a)(["\n  // display: flex;\n  // flex-direction: row;\n  height: 100%;\n  width: 100%;\n"]);return O=function(){return e},e}var B=p.a.div(O()),D=p.a.div(C()),V=p.a.div(j()),H=p.a.div(I()),q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(H,null,r.a.createElement(D,null,r.a.createElement(v,{srcUrl:"https://res.cloudinary.com/dsdkssc5e/video/upload/v1593023516/Donation_video_copy_kzarti.mp4"})),r.a.createElement(V,null,r.a.createElement(g,null))))}}]),n}(a.Component);n(28);var F=function(){return r.a.createElement(q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2117d79d.chunk.js.map