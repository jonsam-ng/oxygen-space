/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(539),a=r(540),i=r(541);function o(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(o()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return f(this,e)}return c(this,e,t,r)}function c(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=h(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|p(t,r),a=(e=s(e,n)).write(t,r);a!==n&&(e=e.slice(0,a));return e}(e,t,r):function(e,t){if(u.isBuffer(t)){var r=0|d(t.length);return 0===(e=s(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?s(e,0):h(e,t);if("Buffer"===t.type&&i(t.data))return h(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e,t){if(l(t),e=s(e,t<0?0:0|d(t)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function h(e,t){var r=t.length<0?0:0|d(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|e}function p(e,t){if(u.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return U(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(e).length;default:if(n)return U(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,r);case"utf8":case"utf-8":return C(this,t,r);case"ascii":return O(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return x(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function v(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,a){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1;r=e.length-1}else if(r<0){if(!a)return-1;r=0}if("string"==typeof t&&(t=u.from(t,n)),u.isBuffer(t))return 0===t.length?-1:y(e,t,r,n,a);if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):y(e,[t],r,n,a);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,n,a){var i,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){var l=-1;for(i=r;i<s;i++)if(c(e,i)===c(t,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===u)return l*o}else-1!==l&&(i-=i-l),l=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){for(var f=!0,h=0;h<u;h++)if(c(e,i+h)!==c(t,h)){f=!1;break}if(f)return i}return-1}function b(e,t,r,n){r=Number(r)||0;var a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;var i=t.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(isNaN(s))return o;e[r+o]=s}return o}function w(e,t,r,n){return H(U(t,e.length-r),e,r,n)}function k(e,t,r,n){return H(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return k(e,t,r,n)}function _(e,t,r,n){return H(q(t),e,r,n)}function A(e,t,r,n){return H(function(e,t){for(var r,n,a,i=[],o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,a=r%256,i.push(a),i.push(n);return i}(t,e.length-r),e,r,n)}function x(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function C(e,t,r){r=Math.min(e.length,r);for(var n=[],a=t;a<r;){var i,o,s,u,c=e[a],l=null,f=c>239?4:c>223?3:c>191?2:1;if(a+f<=r)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(i=e[a+1]))&&(u=(31&c)<<6|63&i)>127&&(l=u);break;case 3:i=e[a+1],o=e[a+2],128==(192&i)&&128==(192&o)&&(u=(15&c)<<12|(63&i)<<6|63&o)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:i=e[a+1],o=e[a+2],s=e[a+3],128==(192&i)&&128==(192&o)&&128==(192&s)&&(u=(15&c)<<18|(63&i)<<12|(63&o)<<6|63&s)>65535&&u<1114112&&(l=u)}null===l?(l=65533,f=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),a+=f}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}t.Buffer=u,t.SlowBuffer=function(e){+e!=e&&(e=0);return u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=o(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,r){return c(null,e,t,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,r){return function(e,t,r,n){return l(t),t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}(null,e,t,r)},u.allocUnsafe=function(e){return f(null,e)},u.allocUnsafeSlow=function(e){return f(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,a=0,i=Math.min(r,n);a<i;++a)if(e[a]!==t[a]){r=e[a],n=t[a];break}return r<n?-1:n<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=u.allocUnsafe(t),a=0;for(r=0;r<e.length;++r){var o=e[r];if(!u.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,a),a+=o.length}return n},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?C(this,0,e):g.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,r,n,a){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||r>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=r)return 0;if(n>=a)return-1;if(t>=r)return 1;if(this===e)return 0;for(var i=(a>>>=0)-(n>>>=0),o=(r>>>=0)-(t>>>=0),s=Math.min(i,o),c=this.slice(n,a),l=e.slice(t,r),f=0;f<s;++f)if(c[f]!==l[f]){i=c[f],o=l[f];break}return i<o?-1:o<i?1:0},u.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},u.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var a=this.length-t;if((void 0===r||r>a)&&(r=a),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":return k(this,e,t,r);case"latin1":case"binary":return S(this,e,t,r);case"base64":return _(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function O(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a]);return n}function P(e,t,r){var n="";r=Math.min(e.length,r);for(var a=t;a<r;++a)n+=String.fromCharCode(e[a]);return n}function T(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var a="",i=t;i<r;++i)a+=B(e[i]);return a}function E(e,t,r){for(var n=e.slice(t,r),a="",i=0;i<n.length;i+=2)a+=String.fromCharCode(n[i]+256*n[i+1]);return a}function I(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function F(e,t,r,n,a,i){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n){t<0&&(t=65535+t+1);for(var a=0,i=Math.min(e.length-r,2);a<i;++a)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}function M(e,t,r,n){t<0&&(t=4294967295+t+1);for(var a=0,i=Math.min(e.length-r,4);a<i;++a)e[r+a]=t>>>8*(n?a:3-a)&255}function j(e,t,r,n,a,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(e,t,r,n,i){return i||j(e,0,r,4),a.write(e,t,r,n,23,4),r+4}function N(e,t,r,n,i){return i||j(e,0,r,8),a.write(e,t,r,n,52,8),r+8}u.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=u.prototype;else{var a=t-e;r=new u(a,void 0);for(var i=0;i<a;++i)r[i]=this[i+e]}return r},u.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||I(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n},u.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||I(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n},u.prototype.readUInt8=function(e,t){return t||I(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||I(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||I(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||I(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||I(e,t,this.length);for(var n=this[e],a=1,i=0;++i<t&&(a*=256);)n+=this[e+i]*a;return n>=(a*=128)&&(n-=Math.pow(2,8*t)),n},u.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||I(e,t,this.length);for(var n=t,a=1,i=this[e+--n];n>0&&(a*=256);)i+=this[e+--n]*a;return i>=(a*=128)&&(i-=Math.pow(2,8*t)),i},u.prototype.readInt8=function(e,t){return t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||I(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){t||I(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||I(e,4,this.length),a.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||I(e,4,this.length),a.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||I(e,8,this.length),a.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||I(e,8,this.length),a.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var a=1,i=0;for(this[t]=255&e;++i<r&&(a*=256);)this[t+i]=e/a&255;return t+r},u.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||F(this,e,t,r,Math.pow(2,8*r)-1,0);var a=r-1,i=1;for(this[t+a]=255&e;--a>=0&&(i*=256);)this[t+a]=e/i&255;return t+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):M(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var a=Math.pow(2,8*r-1);F(this,e,t,r,a-1,-a)}var i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},u.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var a=Math.pow(2,8*r-1);F(this,e,t,r,a-1,-a)}var i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):M(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||F(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,r){return L(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return L(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var a,i=n-r;if(this===e&&r<t&&t<n)for(a=i-1;a>=0;--a)e[a+t]=this[a+r];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(a=0;a<i;++a)e[a+t]=this[a+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+i),t);return i},u.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var a=e.charCodeAt(0);a<256&&(e=a)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var o=u.isBuffer(e)?e:U(new u(e,n).toString()),s=o.length;for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function B(e){return e<16?"0"+e.toString(16):e.toString(16)}function U(e,t){var r;t=t||1/0;for(var n=e.length,a=null,i=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&i.push(239,191,189);continue}a=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),a=r;continue}r=65536+(a-55296<<10|r-56320)}else a&&(t-=3)>-1&&i.push(239,191,189);if(a=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function q(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(D,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function H(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a];return a}}).call(this,r(96))},539:function(e,t,r){"use strict";t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,n=c(e),o=n[0],s=n[1],u=new i(function(e,t,r){return 3*(t+r)/4-r}(0,o,s)),l=0,f=s>0?o-4:o;for(r=0;r<f;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],u[l++]=t>>16&255,u[l++]=t>>8&255,u[l++]=255&t;2===s&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,u[l++]=255&t);1===s&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,u[l++]=t>>8&255,u[l++]=255&t);return u},t.fromByteArray=function(e){for(var t,r=e.length,a=r%3,i=[],o=0,s=r-a;o<s;o+=16383)i.push(l(e,o,o+16383>s?s:o+16383));1===a?(t=e[r-1],i.push(n[t>>2]+n[t<<4&63]+"==")):2===a&&(t=(e[r-2]<<8)+e[r-1],i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return i.join("")};for(var n=[],a=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=o.length;s<u;++s)n[s]=o[s],a[o.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,r){for(var a,i,o=[],s=t;s<r;s+=3)a=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(n[(i=a)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return o.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},540:function(e,t){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.read=function(e,t,r,n,a){var i,o,s=8*a-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?a-1:0,h=r?-1:1,d=e[t+f];for(f+=h,i=d&(1<<-l)-1,d>>=-l,l+=s;l>0;i=256*i+e[t+f],f+=h,l-=8);for(o=i&(1<<-l)-1,i>>=-l,l+=n;l>0;o=256*o+e[t+f],f+=h,l-=8);if(0===i)i=1-c;else{if(i===u)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),i-=c}return(d?-1:1)*o*Math.pow(2,i-n)},t.write=function(e,t,r,n,a,i){var o,s,u,c=8*i-a-1,l=(1<<c)-1,f=l>>1,h=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,a),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,a),o=0));a>=8;e[r+d]=255&s,d+=p,s/=256,a-=8);for(o=o<<a|s,c+=a;c>0;e[r+d]=255&o,d+=p,o/=256,c-=8);e[r+d-p]|=128*g}},541:function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}}}]);