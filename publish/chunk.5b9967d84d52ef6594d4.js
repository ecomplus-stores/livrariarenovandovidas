(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{238:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return r}));var n=o(24),c=o(20),s=o(31);const a=n.$ecomConfig.get("currency")||"BRL",r=e=>{const[t,...o]=Object(c.a)(e).split(" / "),n={name:t,id:e.sku,price:Object(s.a)(e).toFixed(2)};return o&&o.length?n.variant=o.join(" / "):e.variation_id&&(n.name=t.replace(window.__customGTMVariantRegex||/\s[^\s]+$/,""),n.variant=t.replace(n.name,"").trim()),e.quantity&&(n.quantity=e.quantity),n}},255:function(e,t,o){"use strict";o(4);var n=o(83),c=o(84),s=o(7),a=o(26),r=o(238);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let o,i,u;const d=()=>{const e=[];return s.a.data&&Array.isArray(s.a.data.items)&&s.a.data.items.forEach((t=>{e.push(Object(r.b)(t))})),e},m=t=>{e.push({ecommerce:null}),e.push({event:"eec.checkout_option",ecommerce:{currencyCode:r.a,checkout_option:{actionField:t}}})},l=(t,n)=>{const c={step:t,option:n};1===t&&o||2===t&&i||(e.push({ecommerce:null}),e.push({event:"eec.checkout",ecommerce:{currencyCode:r.a,checkout:{actionField:c,products:d()}}}),e.push({event:"checkout"}),1===t?o=!0:i=!0)},p=(t,o)=>{if(!u){if(window.localStorage.getItem("gtm.orderIdSent")!==t){let i;if(o)try{i=JSON.parse(o)}catch(e){}const{amount:u}=i||window.storefrontApp,l={id:t,revenue:(u&&u.total||s.a.data&&s.a.data.subtotal||0).toFixed(2)};u&&(void 0!==u.freight&&(l.shipping=u.freight.toFixed(2)),void 0!==u.tax&&(l.tax=u.tax.toFixed(2))),i&&(["shipping_method_label","payment_method_label"].forEach(((e,t)=>{i[e]&&m({step:3+t,option:i[e]})})),i.extra_discount&&i.extra_discount.discount_coupon&&(l.coupon=i.extra_discount.discount_coupon));let p=1;if(window.__sendGTMExtraPurchaseData){const t=a.a.getCustomer(),o={};let s;t&&(o.customerDisplayName=Object(n.a)(t),t.name&&(o.customerGivenName=t.name.given_name,o.customerFamilyName=t.name.family_name),o.customerEmail=t.main_email,o.customerPhone=Object(c.a)(t),s=t.addresses&&t.addresses[0]);try{const e=JSON.parse(window.sessionStorage.getItem("ecomCustomerAddress"));"object"==typeof s&&s?Object.assign(s,e):s=e}catch{}s&&s.zip&&(o.shippingAddrZip=s.zip,o.shippingAddrStreet=s.street,o.shippingAddrNumber=s.number,s.street&&s.number&&(o.shippingAddrStreet+=`, ${s.number}`),o.shippingAddrCity=s.city,o.shippingAddrProvinceCode=s.province_code),e.push({event:"purchaseExtraData",...o}),p=100}setTimeout((()=>{e.push({ecommerce:null}),e.push({event:"eec.purchase",ecommerce:{currencyCode:r.a,purchase:{actionField:l,products:d()}}})}),p),window.localStorage.setItem("gtm.orderIdSent",t)}u=!0}};let h;const b=e=>{let{name:t,params:o}=e;switch(t){case"cart":l(1,"Review Cart");break;case"checkout":o.step&&i||l(2,"Login / Signup"),1===Number(o.step)?l(3,"Shipping Method"):2===Number(o.step)&&l(4,"Payment Method");break;case"confirmation":clearTimeout(h),o.json?p(o.id,decodeURIComponent(o.json)):h=setTimeout((()=>{p(o.id)}),1500)}};t.currentRoute&&b(t.currentRoute),t.afterEach(b)}}},256:function(e,t,o){"use strict";o(4);var n=o(7),c=o(238);t.a=e=>{const t={};setTimeout((()=>{n.a.data.items.forEach((e=>{t[e.sku]=Object(c.b)(e)}))}),10);const o=o=>{const n=Object(c.b)(o);e.push({ecommerce:null}),e.push({event:"eec.add",ecommerce:{currencyCode:c.a,add:{products:[n]}}}),e.push({event:"addToCart"}),t[o.sku]=n},s=o=>{const n=t[o.sku];e.push({ecommerce:null}),e.push({event:"eec.remove",ecommerce:{currencyCode:c.a,remove:{products:[n?Object.assign({},n):Object(c.b)(o)]}}}),e.push({event:"removeFromCart"}),delete t[o.sku]};n.a.on("addItem",(e=>{let{item:t}=e;return o(t)})),n.a.on("increaseItemQnt",(e=>{let{item:n}=e;const c=t[n.sku];if(c){const e=n.quantity-c.quantity;e>0?o({...n,quantity:e}):s({...n,quantity:-e})}else o(n)})),n.a.on("removeItem",(e=>{let{item:t}=e;return s(t)})),n.a.on("clear",(()=>{for(const e in t)t[e]&&s(t[e])}))}},383:function(e,t,o){"use strict";o.r(t);o(4);var n=o(78),c=o(238),s=o(7),a=o(255),r=o(256);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{dataLayerVar:t,parseDomMsDelay:o,isDebug:i}=e,u=window[t]||window.dataLayer;if(u){const e=i?{push:e=>{if(u.push(e),e){const{event:t,ecommerce:o}=e;t&&t.startsWith("eec.")&&console.log(t,o)}}}:u;(e=>{const t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){const{body:o}=t,s={...Object(c.b)(o)};s.stock=s.quantity,delete s.quantity;const a={event:"eec.detail",ecommerce:{currencyCode:c.a,detail:{products:[s]}}},r=Object(n.a)(o);r.length&&(s.category=o.category_tree?o.category_tree.replace(/\s>\s/g,"/"):r[0],a.ecommerce.detail.actionField={list:r[0]}),o.brands&&o.brands.length&&(s.brand=o.brands[0].name),e.push({ecommerce:null}),e.push(a)}})(e),Object(a.a)(e),Object(r.a)(e),setTimeout((()=>{(e=>{const t=document.querySelectorAll(".product-card[data-sku]");if(t.length){const o=[],n={},a="/search"===window.location.pathname;let r;if(a)r="Search results";else{const e=window.storefront&&window.storefront.context;if(e&&e.body){const{name:t}=e.body;switch(e.resource){case"categories":r=`Category: ${t}`;break;case"brands":r=`Brand: ${t}`;break;case"collections":r=`Collection: ${t}`}}else r="Home"}for(let c=0;c<t.length;c++){const r=t[c],{sku:i}=r.dataset;if(-1===o.indexOf(i)&&(o.push(i),r.closest)){const e=r.closest(".products-carousel");!a&&e&&(n[i]=e.dataset.title)}const d=r.parentElement;if(d&&d.classList.contains("product-item")){let t,o=!1,n=null,c=!1;const a=function(){clearTimeout(n),d.removeEventListener("click",r,!1),c||o||setTimeout((()=>{c||t.disabled||t.parentElement.disabled||t.click()}),"BUTTON"===t.tagName||"I"===t.tagName?150:20)},r=function(r){if(c)return;s.a.once("addItem",(e=>{let{item:t}=e;c=t.sku===i})),s.a.once("increaseItemQnt",(e=>{let{item:t}=e;c=t.sku===i})),t=r.target,r.stopPropagation(),r.preventDefault(),o=t.disabled||t.parentElement.disabled;const d=u.find((e=>{let{id:t}=e;return t===i}));e.push({ecommerce:null}),e.push({event:"eec.click",ecommerce:{click:{actionField:{list:d.list||""},products:[d]}},eventCallback:a}),n=setTimeout(a,700)};d.addEventListener("click",r,!1)}}const i={},u=o.map((e=>{const t=n[e]||r,o={id:e};return t&&(o.list=t,i[t]?i[t]++:i[t]=1,o.position=i[t]),o}));e.push({ecommerce:null}),e.push({event:"eec.impressions",ecommerce:{currencyCode:c.a,impressions:u}})}})(e)}),o>=0?o:300)}}}}]);