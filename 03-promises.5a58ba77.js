function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var l=o("7Y9D8");function u(e,n){return new Promise(((t,r)=>{const o=Math.random()>.3,l=setInterval((()=>{clearInterval(l),o?t(`✅ Fulfilled promise ${e} in ${n}ms`):r(`❌ Rejected promise ${e} in ${n}ms`)}))}),n)}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const{delay:t,step:r,amount:o}=n.currentTarget.elements;console.log(n.currentTarget.elements);const i=Number(o.value);let s,a=Number(t.value)+Number(r.value);for(let n=0;n<i;n+=1)s=n+1,u(s,a).then((n=>{console.log(e(l).Notify.success(n))})).catch((n=>{console.log(e(l).Notify.failure(n))}))}));
//# sourceMappingURL=03-promises.5a58ba77.js.map
