/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function( window, undefined ) {
var
  // A central reference to the root jQuery(document)
  rootjQuery,

  // The deferred used on DOM ready
  readyList,

  // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
  location = window.location,
  navigator = window.navigator,

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$,

  // Save a reference to some core methods
  core_push = Array.prototype.push,
  core_slice = Array.prototype.slice,
  core_indexOf = Array.prototype.indexOf,
  core_toString = Object.prototype.toString,
  core_hasOwn = Object.prototype.hasOwnProperty,
  core_trim = String.prototype.trim,

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init( selector, context, rootjQuery );
  },

  // Used for matching numbers
  core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,

  // Used for detecting and trimming whitespace
  core_rnotwhite = /\S/,
  core_rspace = /\s+/,

  // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

  // Match a standalone tag
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

  // JSON RegExp
  rvalidchars = /^[\],:{}\s]*$/,
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
  rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return ( letter + "" ).toUpperCase();
  },

  // The ready event handler and self cleanup method
  DOMContentLoaded = function() {
    if ( document.addEventListener ) {
      document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
      jQuery.ready();
    } else if ( document.readyState === "complete" ) {
      // we're here because readyState === "complete" in oldIE
      // which is good enough for us to call the dom ready!
      document.detachEvent( "onreadystatechange", DOMContentLoaded );
      jQuery.ready();
    }
  },

  // [[Class]] -> type pairs
  class2type = {};

jQuery.fn = jQuery.prototype = {
  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {
    var match, elem, ret, doc;

    // Handle $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Handle $(DOMElement)
    if ( selector.nodeType ) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];

      } else {
        match = rquickExpr.exec( selector );
      }

      // Match html or make sure no context is specified for #id
      if ( match && (match[1] || !context) ) {

        // HANDLE: $(html) -> $(array)
        if ( match[1] ) {
          context = context instanceof jQuery ? context[0] : context;
          doc = ( context && context.nodeType ? context.ownerDocument || context : document );

          // scripts is true for back-compat
          selector = jQuery.parseHTML( match[1], doc, true );
          if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
            this.attr.call( selector, context, true );
          }

          return jQuery.merge( this, selector );

        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[2] );

          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE and Opera return items
            // by name instead of ID
            if ( elem.id !== match[2] ) {
              return rootjQuery.find( selector );
            }

            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }

      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || rootjQuery ).find( selector );

      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return rootjQuery.ready( selector );
    }

    if ( selector.selector !== undefined ) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
  },

  // Start with an empty selector
  selector: "",

  // The current version of jQuery being used
  jquery: "1.8.3",

  // The default length of a jQuery object is 0
  length: 0,

  // The number of elements contained in the matched element set
  size: function() {
    return this.length;
  },

  toArray: function() {
    return core_slice.call( this );
  },

  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    return num == null ?

      // Return a 'clean' array
      this.toArray() :

      // Return just the object
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  },

  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems, name, selector ) {

    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;

    ret.context = this.context;

    if ( name === "find" ) {
      ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
    } else if ( name ) {
      ret.selector = this.selector + "." + name + "(" + selector + ")";
    }

    // Return the newly-formed element set
    return ret;
  },

  // Execute a callback for every element in the matched set.
  // (You can seed the arguments with an array of args, but this is
  // only used internally.)
  each: function( callback, args ) {
    return jQuery.each( this, callback, args );
  },

  ready: function( fn ) {
    // Add the callback
    jQuery.ready.promise().done( fn );

    return this;
  },

  eq: function( i ) {
    i = +i;
    return i === -1 ?
      this.slice( i ) :
      this.slice( i, i + 1 );
  },

  first: function() {
    return this.eq( 0 );
  },

  last: function() {
    return this.eq( -1 );
  },

  slice: function() {
    return this.pushStack( core_slice.apply( this, arguments ),
      "slice", core_slice.call(arguments).join(",") );
  },

  map: function( callback ) {
    return this.pushStack( jQuery.map(this, function( elem, i ) {
      return callback.call( elem, i, elem );
    }));
  },

  end: function() {
    return this.prevObject || this.constructor(null);
  },

  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: core_push,
  sort: [].sort,
  splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray(src) ? src : [];

          } else {
            clone = src && jQuery.isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

jQuery.extend({
  noConflict: function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  },

  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,

  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,

  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },

  // Handle when the DOM is ready
  ready: function( wait ) {

    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }

    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
    if ( !document.body ) {
      return setTimeout( jQuery.ready, 1 );
    }

    // Remember that the DOM is ready
    jQuery.isReady = true;

    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }

    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );

    // Trigger any bound ready events
    if ( jQuery.fn.trigger ) {
      jQuery( document ).trigger("ready").off("ready");
    }
  },

  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).
  isFunction: function( obj ) {
    return jQuery.type(obj) === "function";
  },

  isArray: Array.isArray || function( obj ) {
    return jQuery.type(obj) === "array";
  },

  isWindow: function( obj ) {
    return obj != null && obj == obj.window;
  },

  isNumeric: function( obj ) {
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },

  type: function( obj ) {
    return obj == null ?
      String( obj ) :
      class2type[ core_toString.call(obj) ] || "object";
  },

  isPlainObject: function( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }

    try {
      // Not own constructor property must be Object
      if ( obj.constructor &&
        !core_hasOwn.call(obj, "constructor") &&
        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
        return false;
      }
    } catch ( e ) {
      // IE8,9 Will throw exceptions on certain host objects #9897
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || core_hasOwn.call( obj, key );
  },

  isEmptyObject: function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },

  error: function( msg ) {
    throw new Error( msg );
  },

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context, defaults to document
  // scripts (optional): If true, will include scripts passed in the html string
  parseHTML: function( data, context, scripts ) {
    var parsed;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    if ( typeof context === "boolean" ) {
      scripts = context;
      context = 0;
    }
    context = context || document;

    // Single tag
    if ( (parsed = rsingleTag.exec( data )) ) {
      return [ context.createElement( parsed[1] ) ];
    }

    parsed = jQuery.buildFragment( [ data ], context, scripts ? null : [] );
    return jQuery.merge( [],
      (parsed.cacheable ? jQuery.clone( parsed.fragment ) : parsed.fragment).childNodes );
  },

  parseJSON: function( data ) {
    if ( !data || typeof data !== "string") {
      return null;
    }

    // Make sure leading/trailing whitespace is removed (IE can't handle it)
    data = jQuery.trim( data );

    // Attempt to parse using the native JSON parser first
    if ( window.JSON && window.JSON.parse ) {
      return window.JSON.parse( data );
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if ( rvalidchars.test( data.replace( rvalidescape, "@" )
      .replace( rvalidtokens, "]" )
      .replace( rvalidbraces, "")) ) {

      return ( new Function( "return " + data ) )();

    }
    jQuery.error( "Invalid JSON: " + data );
  },

  // Cross-browser xml parsing
  parseXML: function( data ) {
    var xml, tmp;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    try {
      if ( window.DOMParser ) { // Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
      } else { // IE
        xml = new ActiveXObject( "Microsoft.XMLDOM" );
        xml.async = "false";
        xml.loadXML( data );
      }
    } catch( e ) {
      xml = undefined;
    }
    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
      jQuery.error( "Invalid XML: " + data );
    }
    return xml;
  },

  noop: function() {},

  // Evaluates a script in a global context
  // Workarounds based on findings by Jim Driscoll
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  globalEval: function( data ) {
    if ( data && core_rnotwhite.test( data ) ) {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      ( window.execScript || function( data ) {
        window[ "eval" ].call( window, data );
      } )( data );
    }
  },

  // Convert dashed to camelCase; used by the css and data modules
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },

  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },

  // args is for internal usage only
  each: function( obj, callback, args ) {
    var name,
      i = 0,
      length = obj.length,
      isObj = length === undefined || jQuery.isFunction( obj );

    if ( args ) {
      if ( isObj ) {
        for ( name in obj ) {
          if ( callback.apply( obj[ name ], args ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.apply( obj[ i++ ], args ) === false ) {
            break;
          }
        }
      }

    // A special, fast, case for the most common use of each
    } else {
      if ( isObj ) {
        for ( name in obj ) {
          if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
            break;
          }
        }
      } else {
        for ( ; i < length; ) {
          if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
            break;
          }
        }
      }
    }

    return obj;
  },

  // Use native String.trim function wherever possible
  trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
    function( text ) {
      return text == null ?
        "" :
        core_trim.call( text );
    } :

    // Otherwise use our own trimming functionality
    function( text ) {
      return text == null ?
        "" :
        ( text + "" ).replace( rtrim, "" );
    },

  // results is for internal usage only
  makeArray: function( arr, results ) {
    var type,
      ret = results || [];

    if ( arr != null ) {
      // The window, strings (and functions) also have 'length'
      // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
      type = jQuery.type( arr );

      if ( arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( arr ) ) {
        core_push.call( ret, arr );
      } else {
        jQuery.merge( ret, arr );
      }
    }

    return ret;
  },

  inArray: function( elem, arr, i ) {
    var len;

    if ( arr ) {
      if ( core_indexOf ) {
        return core_indexOf.call( arr, elem, i );
      }

      len = arr.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in arr && arr[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  },

  merge: function( first, second ) {
    var l = second.length,
      i = first.length,
      j = 0;

    if ( typeof l === "number" ) {
      for ( ; j < l; j++ ) {
        first[ i++ ] = second[ j ];
      }

    } else {
      while ( second[j] !== undefined ) {
        first[ i++ ] = second[ j++ ];
      }
    }

    first.length = i;

    return first;
  },

  grep: function( elems, callback, inv ) {
    var retVal,
      ret = [],
      i = 0,
      length = elems.length;
    inv = !!inv;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      retVal = !!callback( elems[ i ], i );
      if ( inv !== retVal ) {
        ret.push( elems[ i ] );
      }
    }

    return ret;
  },

  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var value, key,
      ret = [],
      i = 0,
      length = elems.length,
      // jquery objects are treated as arrays
      isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

    // Go through the array, translating each of the items to their
    if ( isArray ) {
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }

    // Go through every key on the object,
    } else {
      for ( key in elems ) {
        value = callback( elems[ key ], key, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }
    }

    // Flatten any nested arrays
    return ret.concat.apply( [], ret );
  },

  // A global GUID counter for objects
  guid: 1,

  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var tmp, args, proxy;

    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }

    // Simulated bind
    args = core_slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context, args.concat( core_slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
  },

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  access: function( elems, fn, key, value, chainable, emptyGet, pass ) {
    var exec,
      bulk = key == null,
      i = 0,
      length = elems.length;

    // Sets many values
    if ( key && typeof key === "object" ) {
      for ( i in key ) {
        jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );
      }
      chainable = 1;

    // Sets one value
    } else if ( value !== undefined ) {
      // Optionally, function values get executed if exec is true
      exec = pass === undefined && jQuery.isFunction( value );

      if ( bulk ) {
        // Bulk operations only iterate when executing function values
        if ( exec ) {
          exec = fn;
          fn = function( elem, key, value ) {
            return exec.call( jQuery( elem ), value );
          };

        // Otherwise they run against the entire set
        } else {
          fn.call( elems, value );
          fn = null;
        }
      }

      if ( fn ) {
        for (; i < length; i++ ) {
          fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
        }
      }

      chainable = 1;
    }

    return chainable ?
      elems :

      // Gets
      bulk ?
        fn.call( elems ) :
        length ? fn( elems[0], key ) : emptyGet;
  },

  now: function() {
    return ( new Date() ).getTime();
  }
});

jQuery.ready.promise = function( obj ) {
  if ( !readyList ) {

    readyList = jQuery.Deferred();

    // Catch cases where $(document).ready() is called after the browser event has already occurred.
    // we once tried to use readyState "interactive" here, but it caused issues like the one
    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
    if ( document.readyState === "complete" ) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      setTimeout( jQuery.ready, 1 );

    // Standards-based browsers support DOMContentLoaded
    } else if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", jQuery.ready, false );

    // If IE event model is used
    } else {
      // Ensure firing before onload, maybe late but safe also for iframes
      document.attachEvent( "onreadystatechange", DOMContentLoaded );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", jQuery.ready );

      // If IE and not a frame
      // continually check to see if the document is ready
      var top = false;

      try {
        top = window.frameElement == null && document.documentElement;
      } catch(e) {}

      if ( top && top.doScroll ) {
        (function doScrollCheck() {
          if ( !jQuery.isReady ) {

            try {
              // Use the trick by Diego Perini
              // http://javascript.nwbox.com/IEContentLoaded/
              top.doScroll("left");
            } catch(e) {
              return setTimeout( doScrollCheck, 50 );
            }

            // and execute any waiting functions
            jQuery.ready();
          }
        })();
      }
    }
  }
  return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
  var object = optionsCache[ options ] = {};
  jQuery.each( options.split( core_rspace ), function( _, flag ) {
    object[ flag ] = true;
  });
  return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    ( optionsCache[ options ] || createOptions( options ) ) :
    jQuery.extend( {}, options );

  var // Last fire value (for non-forgettable lists)
    memory,
    // Flag to know if list was already fired
    fired,
    // Flag to know if list is currently firing
    firing,
    // First callback to fire (used internally by add and fireWith)
    firingStart,
    // End of the loop when firing
    firingLength,
    // Index of currently firing callback (modified by remove if needed)
    firingIndex,
    // Actual callback list
    list = [],
    // Stack of fire calls for repeatable lists
    stack = !options.once && [],
    // Fire callbacks
    fire = function( data ) {
      memory = options.memory && data;
      fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
          memory = false; // To prevent further calls using add
          break;
        }
      }
      firing = false;
      if ( list ) {
        if ( stack ) {
          if ( stack.length ) {
            fire( stack.shift() );
          }
        } else if ( memory ) {
          list = [];
        } else {
          self.disable();
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // First, we save the current length
          var start = list.length;
          (function add( args ) {
            jQuery.each( args, function( _, arg ) {
              var type = jQuery.type( arg );
              if ( type === "function" ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && type !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            });
          })( arguments );
          // Do we need to add the callbacks to the
          // current firing batch?
          if ( firing ) {
            firingLength = list.length;
          // With memory, if we're not firing then
          // we should call right away
          } else if ( memory ) {
            firingStart = start;
            fire( memory );
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        if ( list ) {
          jQuery.each( arguments, function( _, arg ) {
            var index;
            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
              list.splice( index, 1 );
              // Handle firing indexes
              if ( firing ) {
                if ( index <= firingLength ) {
                  firingLength--;
                }
                if ( index <= firingIndex ) {
                  firingIndex--;
                }
              }
            }
          });
        }
        return this;
      },
      // Control if a given callback is in the list
      has: function( fn ) {
        return jQuery.inArray( fn, list ) > -1;
      },
      // Remove all callbacks from the list
      empty: function() {
        list = [];
        return this;
      },
      // Have the list do nothing anymore
      disable: function() {
        list = stack = memory = undefined;
        return this;
      },
      // Is it disabled?
      disabled: function() {
        return !list;
      },
      // Lock the list in its current state
      lock: function() {
        stack = undefined;
        if ( !memory ) {
          self.disable();
        }
        return this;
      },
      // Is it locked?
      locked: function() {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        args = args || [];
        args = [ context, args.slice ? args.slice() : args ];
        if ( list && ( !fired || stack ) ) {
          if ( firing ) {
            stack.push( args );
          } else {
            fire( args );
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };

  return self;
};
jQuery.extend({

  Deferred: function( func ) {
    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
        [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
        [ "notify", "progress", jQuery.Callbacks("memory") ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred(function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              var action = tuple[ 0 ],
                fn = fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[1] ]( jQuery.isFunction( fn ) ?
                function() {
                  var returned = fn.apply( this, arguments );
                  if ( returned && jQuery.isFunction( returned.promise ) ) {
                    returned.promise()
                      .done( newDefer.resolve )
                      .fail( newDefer.reject )
                      .progress( newDefer.notify );
                  } else {
                    newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                  }
                } :
                newDefer[ action ]
              );
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Keep pipe for back-compat
    promise.pipe = promise.then;

    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];

      // promise[ done | fail | progress ] = list.add
      promise[ tuple[1] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(function() {
          // state = [ resolved | rejected ]
          state = stateString;

        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }

      // deferred[ resolve | reject | notify ] = list.fire
      deferred[ tuple[0] ] = list.fire;
      deferred[ tuple[0] + "With" ] = list.fireWith;
    });

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  },

  // Deferred helper
  when: function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = core_slice.call( arguments ),
      length = resolveValues.length,

      // the count of uncompleted subordinates
      remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
          if( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },

      progressValues, progressContexts, resolveContexts;

    // add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject )
            .progress( updateFunc( i, progressContexts, progressValues ) );
        } else {
          --remaining;
        }
      }
    }

    // if we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }

    return deferred.promise();
  }
});
jQuery.support = (function() {

  var support,
    all,
    a,
    select,
    opt,
    input,
    fragment,
    eventName,
    i,
    isSupported,
    clickFn,
    div = document.createElement("div");

  // Setup
  div.setAttribute( "className", "t" );
  div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

  // Support tests won't run in some limited or non-browser environments
  all = div.getElementsByTagName("*");
  a = div.getElementsByTagName("a")[ 0 ];
  if ( !all || !a || !all.length ) {
    return {};
  }

  // First batch of tests
  select = document.createElement("select");
  opt = select.appendChild( document.createElement("option") );
  input = div.getElementsByTagName("input")[ 0 ];

  a.style.cssText = "top:1px;float:left;opacity:.5";
  support = {
    // IE strips leading whitespace when .innerHTML is used
    leadingWhitespace: ( div.firstChild.nodeType === 3 ),

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    tbody: !div.getElementsByTagName("tbody").length,

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    htmlSerialize: !!div.getElementsByTagName("link").length,

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    style: /top/.test( a.getAttribute("style") ),

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    hrefNormalized: ( a.getAttribute("href") === "/a" ),

    // Make sure that element opacity exists
    // (IE uses filter instead)
    // Use a regex to work around a WebKit issue. See #5145
    opacity: /^0.5/.test( a.style.opacity ),

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    cssFloat: !!a.style.cssFloat,

    // Make sure that if no value is specified for a checkbox
    // that it defaults to "on".
    // (WebKit defaults to "" instead)
    checkOn: ( input.value === "on" ),

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    optSelected: opt.selected,

    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    getSetAttribute: div.className !== "t",

    // Tests for enctype support on a form (#6743)
    enctype: !!document.createElement("form").enctype,

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

    // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
    boxModel: ( document.compatMode === "CSS1Compat" ),

    // Will be defined later
    submitBubbles: true,
    changeBubbles: true,
    focusinBubbles: false,
    deleteExpando: true,
    noCloneEvent: true,
    inlineBlockNeedsLayout: false,
    shrinkWrapBlocks: false,
    reliableMarginRight: true,
    boxSizingReliable: true,
    pixelPosition: false
  };

  // Make sure checked status is properly cloned
  input.checked = true;
  support.noCloneChecked = input.cloneNode( true ).checked;

  // Make sure that the options inside disabled selects aren't marked as disabled
  // (WebKit marks them as disabled)
  select.disabled = true;
  support.optDisabled = !opt.disabled;

  // Test to see if it's possible to delete an expando from an element
  // Fails in Internet Explorer
  try {
    delete div.test;
  } catch( e ) {
    support.deleteExpando = false;
  }

  if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
    div.attachEvent( "onclick", clickFn = function() {
      // Cloning a node shouldn't copy over any
      // bound event handlers (IE does this)
      support.noCloneEvent = false;
    });
    div.cloneNode( true ).fireEvent("onclick");
    div.detachEvent( "onclick", clickFn );
  }

  // Check if a radio maintains its value
  // after being appended to the DOM
  input = document.createElement("input");
  input.value = "t";
  input.setAttribute( "type", "radio" );
  support.radioValue = input.value === "t";

  input.setAttribute( "checked", "checked" );

  // #11217 - WebKit loses check when the name is after the checked attribute
  input.setAttribute( "name", "t" );

  div.appendChild( input );
  fragment = document.createDocumentFragment();
  fragment.appendChild( div.lastChild );

  // WebKit doesn't clone checked state correctly in fragments
  support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

  // Check if a disconnected checkbox will retain its checked
  // value of true after appended to the DOM (IE6/7)
  support.appendChecked = input.checked;

  fragment.removeChild( input );
  fragment.appendChild( div );

  // Technique from Juriy Zaytsev
  // http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
  // We only care about the case where non-standard event systems
  // are used, namely in IE. Short-circuiting here helps us to
  // avoid an eval call (in setAttribute) which can cause CSP
  // to go haywire. See: https://developer.mozilla.org/en/Security/CSP
  if ( div.attachEvent ) {
    for ( i in {
      submit: true,
      change: true,
      focusin: true
    }) {
      eventName = "on" + i;
      isSupported = ( eventName in div );
      if ( !isSupported ) {
        div.setAttribute( eventName, "return;" );
        isSupported = ( typeof div[ eventName ] === "function" );
      }
      support[ i + "Bubbles" ] = isSupported;
    }
  }

  // Run tests that need a body at doc ready
  jQuery(function() {
    var container, div, tds, marginDiv,
      divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
      body = document.getElementsByTagName("body")[0];

    if ( !body ) {
      // Return for frameset docs that don't have a body
      return;
    }

    container = document.createElement("div");
    container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
    body.insertBefore( container, body.firstChild );

    // Construct the test element
    div = document.createElement("div");
    container.appendChild( div );

    // Check if table cells still have offsetWidth/Height when they are set
    // to display:none and there are still other visible table cells in a
    // table row; if so, offsetWidth/Height are not reliable for use when
    // determining if an element has been hidden directly using
    // display:none (it is still safe to use offsets if a parent element is
    // hidden; don safety goggles and see bug #4512 for more information).
    // (only IE 8 fails this test)
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    tds = div.getElementsByTagName("td");
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    isSupported = ( tds[ 0 ].offsetHeight === 0 );

    tds[ 0 ].style.display = "";
    tds[ 1 ].style.display = "none";

    // Check if empty table cells still have offsetWidth/Height
    // (IE <= 8 fail this test)
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

    // Check box-sizing and margin behavior
    div.innerHTML = "";
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    support.boxSizing = ( div.offsetWidth === 4 );
    support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

    // NOTE: To any future maintainer, we've window.getComputedStyle
    // because jsdom on node.js will break without it.
    if ( window.getComputedStyle ) {
      support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
      support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

      // Check if div with explicit width and no margin-right incorrectly
      // gets computed margin-right based on width of container. For more
      // info see bug #3333
      // Fails in WebKit before Feb 2011 nightlies
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      marginDiv = document.createElement("div");
      marginDiv.style.cssText = div.style.cssText = divReset;
      marginDiv.style.marginRight = marginDiv.style.width = "0";
      div.style.width = "1px";
      div.appendChild( marginDiv );
      support.reliableMarginRight =
        !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
    }

    if ( typeof div.style.zoom !== "undefined" ) {
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      // (IE < 8 does this)
      div.innerHTML = "";
      div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
      support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

      // Check if elements with layout shrink-wrap their children
      // (IE 6 does this)
      div.style.display = "block";
      div.style.overflow = "visible";
      div.innerHTML = "<div></div>";
      div.firstChild.style.width = "5px";
      support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

      container.style.zoom = 1;
    }

    // Null elements to avoid leaks in IE
    body.removeChild( container );
    container = div = tds = marginDiv = null;
  });

  // Null elements to avoid leaks in IE
  fragment.removeChild( div );
  all = a = select = opt = input = fragment = div = null;

  return support;
})();
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  rmultiDash = /([A-Z])/g;

jQuery.extend({
  cache: {},

  deletedIds: [],

  // Remove at next major release (1.9/2.0)
  uuid: 0,

  // Unique for each copy of jQuery on the page
  // Non-digits removed to match rinlinejQuery
  expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

  // The following elements throw uncatchable exceptions if you
  // attempt to add expando properties to them.
  noData: {
    "embed": true,
    // Ban all objects except for Flash (which handle expandos)
    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    "applet": true
  },

  hasData: function( elem ) {
    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
    return !!elem && !isEmptyDataObject( elem );
  },

  data: function( elem, name, data, pvt /* Internal Use Only */ ) {
    if ( !jQuery.acceptData( elem ) ) {
      return;
    }

    var thisCache, ret,
      internalKey = jQuery.expando,
      getByName = typeof name === "string",

      // We have to handle DOM nodes and JS objects differently because IE6-7
      // can't GC object references properly across the DOM-JS boundary
      isNode = elem.nodeType,

      // Only DOM nodes need the global jQuery cache; JS object data is
      // attached directly to the object so GC can occur automatically
      cache = isNode ? jQuery.cache : elem,

      // Only defining an ID for JS objects if its cache already exists allows
      // the code to shortcut on the same path as a DOM node with no cache
      id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

    // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all
    if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
      return;
    }

    if ( !id ) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if ( isNode ) {
        elem[ internalKey ] = id = jQuery.deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if ( !cache[ id ] ) {
      cache[ id ] = {};

      // Avoids exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify
      if ( !isNode ) {
        cache[ id ].toJSON = jQuery.noop;
      }
    }

    // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache
    if ( typeof name === "object" || typeof name === "function" ) {
      if ( pvt ) {
        cache[ id ] = jQuery.extend( cache[ id ], name );
      } else {
        cache[ id ].data = jQuery.extend( cache[ id ].data, name );
      }
    }

    thisCache = cache[ id ];

    // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.
    if ( !pvt ) {
      if ( !thisCache.data ) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if ( data !== undefined ) {
      thisCache[ jQuery.camelCase( name ) ] = data;
    }

    // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified
    if ( getByName ) {

      // First Try to find as-is property data
      ret = thisCache[ name ];

      // Test for null|undefined property data
      if ( ret == null ) {

        // Try to find the camelCased property
        ret = thisCache[ jQuery.camelCase( name ) ];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  },

  removeData: function( elem, name, pvt /* Internal Use Only */ ) {
    if ( !jQuery.acceptData( elem ) ) {
      return;
    }

    var thisCache, i, l,

      isNode = elem.nodeType,

      // See jQuery.data for more information
      cache = isNode ? jQuery.cache : elem,
      id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

    // If there is already no cache entry for this object, there is no
    // purpose in continuing
    if ( !cache[ id ] ) {
      return;
    }

    if ( name ) {

      thisCache = pvt ? cache[ id ] : cache[ id ].data;

      if ( thisCache ) {

        // Support array or space separated string names for data keys
        if ( !jQuery.isArray( name ) ) {

          // try the string as a key before any manipulation
          if ( name in thisCache ) {
            name = [ name ];
          } else {

            // split the camel cased version by spaces unless a key with the spaces exists
            name = jQuery.camelCase( name );
            if ( name in thisCache ) {
              name = [ name ];
            } else {
              name = name.split(" ");
            }
          }
        }

        for ( i = 0, l = name.length; i < l; i++ ) {
          delete thisCache[ name[i] ];
        }

        // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed
        if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
          return;
        }
      }
    }

    // See jQuery.data for more information
    if ( !pvt ) {
      delete cache[ id ].data;

      // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it
      if ( !isEmptyDataObject( cache[ id ] ) ) {
        return;
      }
    }

    // Destroy the cache
    if ( isNode ) {
      jQuery.cleanData( [ elem ], true );

    // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
    } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
      delete cache[ id ];

    // When all else fails, null
    } else {
      cache[ id ] = null;
    }
  },

  // For internal use only.
  _data: function( elem, name, data ) {
    return jQuery.data( elem, name, data, true );
  },

  // A method for determining if a DOM node can handle the data expando
  acceptData: function( elem ) {
    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

    // nodes accept data unless otherwise specified; rejection can be conditional
    return !noData || noData !== true && elem.getAttribute("classid") === noData;
  }
});

jQuery.fn.extend({
  data: function( key, value ) {
    var parts, part, attr, name, l,
      elem = this[0],
      i = 0,
      data = null;

    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = jQuery.data( elem );

        if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
          attr = elem.attributes;
          for ( l = attr.length; i < l; i++ ) {
            name = attr[i].name;

            if ( !name.indexOf( "data-" ) ) {
              name = jQuery.camelCase( name.substring(5) );

              dataAttr( elem, name, data[ name ] );
            }
          }
          jQuery._data( elem, "parsedAttrs", true );
        }
      }

      return data;
    }

    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each(function() {
        jQuery.data( this, key );
      });
    }

    parts = key.split( ".", 2 );
    parts[1] = parts[1] ? "." + parts[1] : "";
    part = parts[1] + "!";

    return jQuery.access( this, function( value ) {

      if ( value === undefined ) {
        data = this.triggerHandler( "getData" + part, [ parts[0] ] );

        // Try to fetch any internally stored data first
        if ( data === undefined && elem ) {
          data = jQuery.data( elem, key );
          data = dataAttr( elem, key, data );
        }

        return data === undefined && parts[1] ?
          this.data( parts[0] ) :
          data;
      }

      parts[1] = value;
      this.each(function() {
        var self = jQuery( this );

        self.triggerHandler( "setData" + part, parts );
        jQuery.data( this, key, value );
        self.triggerHandler( "changeData" + part, parts );
      });
    }, null, value, arguments.length > 1, null, false );
  },

  removeData: function( key ) {
    return this.each(function() {
      jQuery.removeData( this, key );
    });
  }
});

function dataAttr( elem, key, data ) {
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {

    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

    data = elem.getAttribute( name );

    if ( typeof data === "string" ) {
      try {
        data = data === "true" ? true :
        data === "false" ? false :
        data === "null" ? null :
        // Only convert to a number if it doesn't change the string
        +data + "" === data ? +data :
        rbrace.test( data ) ? jQuery.parseJSON( data ) :
          data;
      } catch( e ) {}

      // Make sure we set the data so it isn't changed later
      jQuery.data( elem, key, data );

    } else {
      data = undefined;
    }
  }

  return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
  var name;
  for ( name in obj ) {

    // if the public data object is empty, the private is still empty
    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
      continue;
    }
    if ( name !== "toJSON" ) {
      return false;
    }
  }

  return true;
}
jQuery.extend({
  queue: function( elem, type, data ) {
    var queue;

    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = jQuery._data( elem, type );

      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray(data) ) {
          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },

  dequeue: function( elem, type ) {
    type = type || "fx";

    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };

    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }

    if ( fn ) {

      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }

      // clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }

    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },

  // not intended for public consumption - generates a queueHooks object, or returns the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
      empty: jQuery.Callbacks("once memory").add(function() {
        jQuery.removeData( elem, type + "queue", true );
        jQuery.removeData( elem, key, true );
      })
    });
  }
});

jQuery.fn.extend({
  queue: function( type, data ) {
    var setter = 2;

    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }

    if ( arguments.length < setter ) {
      return jQuery.queue( this[0], type );
    }

    return data === undefined ?
      this :
      this.each(function() {
        var queue = jQuery.queue( this, type, data );

        // ensure a hooks for this queue
        jQuery._queueHooks( this, type );

        if ( type === "fx" && queue[0] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      });
  },
  dequeue: function( type ) {
    return this.each(function() {
      jQuery.dequeue( this, type );
    });
  },
  // Based off of the plugin by Clint Helfers, with permission.
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
  delay: function( time, type ) {
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    type = type || "fx";

    return this.queue( type, function( next, hooks ) {
      var timeout = setTimeout( next, time );
      hooks.stop = function() {
        clearTimeout( timeout );
      };
    });
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };

    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";

    while( i-- ) {
      tmp = jQuery._data( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
});
var nodeHook, boolHook, fixSpecified,
  rclass = /[\t\r\n]/g,
  rreturn = /\r/g,
  rtype = /^(?:button|input)$/i,
  rfocusable = /^(?:button|input|object|select|textarea)$/i,
  rclickable = /^a(?:rea|)$/i,
  rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  getSetAttribute = jQuery.support.getSetAttribute;

jQuery.fn.extend({
  attr: function( name, value ) {
    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
  },

  removeAttr: function( name ) {
    return this.each(function() {
      jQuery.removeAttr( this, name );
    });
  },

  prop: function( name, value ) {
    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
  },

  removeProp: function( name ) {
    name = jQuery.propFix[ name ] || name;
    return this.each(function() {
      // try/catch handles cases where IE balks (such as removing a property on window)
      try {
        this[ name ] = undefined;
        delete this[ name ];
      } catch( e ) {}
    });
  },

  addClass: function( value ) {
    var classNames, i, l, elem,
      setClass, c, cl;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).addClass( value.call(this, j, this.className) );
      });
    }

    if ( value && typeof value === "string" ) {
      classNames = value.split( core_rspace );

      for ( i = 0, l = this.length; i < l; i++ ) {
        elem = this[ i ];

        if ( elem.nodeType === 1 ) {
          if ( !elem.className && classNames.length === 1 ) {
            elem.className = value;

          } else {
            setClass = " " + elem.className + " ";

            for ( c = 0, cl = classNames.length; c < cl; c++ ) {
              if ( setClass.indexOf( " " + classNames[ c ] + " " ) < 0 ) {
                setClass += classNames[ c ] + " ";
              }
            }
            elem.className = jQuery.trim( setClass );
          }
        }
      }
    }

    return this;
  },

  removeClass: function( value ) {
    var removes, className, elem, c, cl, i, l;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).removeClass( value.call(this, j, this.className) );
      });
    }
    if ( (value && typeof value === "string") || value === undefined ) {
      removes = ( value || "" ).split( core_rspace );

      for ( i = 0, l = this.length; i < l; i++ ) {
        elem = this[ i ];
        if ( elem.nodeType === 1 && elem.className ) {

          className = (" " + elem.className + " ").replace( rclass, " " );

          // loop over each item in the removal list
          for ( c = 0, cl = removes.length; c < cl; c++ ) {
            // Remove until there is nothing to remove,
            while ( className.indexOf(" " + removes[ c ] + " ") >= 0 ) {
              className = className.replace( " " + removes[ c ] + " " , " " );
            }
          }
          elem.className = value ? jQuery.trim( className ) : "";
        }
      }
    }

    return this;
  },

  toggleClass: function( value, stateVal ) {
    var type = typeof value,
      isBool = typeof stateVal === "boolean";

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( i ) {
        jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
      });
    }

    return this.each(function() {
      if ( type === "string" ) {
        // toggle individual class names
        var className,
          i = 0,
          self = jQuery( this ),
          state = stateVal,
          classNames = value.split( core_rspace );

        while ( (className = classNames[ i++ ]) ) {
          // check each className given, space separated list
          state = isBool ? state : !self.hasClass( className );
          self[ state ? "addClass" : "removeClass" ]( className );
        }

      } else if ( type === "undefined" || type === "boolean" ) {
        if ( this.className ) {
          // store className if set
          jQuery._data( this, "__className__", this.className );
        }

        // toggle whole className
        this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
      }
    });
  },

  hasClass: function( selector ) {
    var className = " " + selector + " ",
      i = 0,
      l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
        return true;
      }
    }

    return false;
  },

  val: function( value ) {
    var hooks, ret, isFunction,
      elem = this[0];

    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

        if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
          return ret;
        }

        ret = elem.value;

        return typeof ret === "string" ?
          // handle most common string cases
          ret.replace(rreturn, "") :
          // handle cases where value is null/undef or number
          ret == null ? "" : ret;
      }

      return;
    }

    isFunction = jQuery.isFunction( value );

    return this.each(function( i ) {
      var val,
        self = jQuery(this);

      if ( this.nodeType !== 1 ) {
        return;
      }

      if ( isFunction ) {
        val = value.call( this, i, self.val() );
      } else {
        val = value;
      }

      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map(val, function ( value ) {
          return value == null ? "" : value + "";
        });
      }

      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

      // If set returns undefined, fall back to normal setting
      if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    });
  }
});

jQuery.extend({
  valHooks: {
    option: {
      get: function( elem ) {
        // attributes.value is undefined in Blackberry 4.7 but
        // uses .value. See #6932
        var val = elem.attributes.value;
        return !val || val.specified ? elem.value : elem.text;
      }
    },
    select: {
      get: function( elem ) {
        var value, option,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one" || index < 0,
          values = one ? null : [],
          max = one ? index + 1 : options.length,
          i = index < 0 ?
            max :
            one ? index : 0;

        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];

          // oldIE doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
              ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

            // Get the specific value for the option
            value = jQuery( option ).val();

            // We don't need an array for one selects
            if ( one ) {
              return value;
            }

            // Multi-Selects return an array
            values.push( value );
          }
        }

        return values;
      },

      set: function( elem, value ) {
        var values = jQuery.makeArray( value );

        jQuery(elem).find("option").each(function() {
          this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
        });

        if ( !values.length ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  },

  // Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
  attrFn: {},

  attr: function( elem, name, value, pass ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set attributes on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    if ( pass && jQuery.isFunction( jQuery.fn[ name ] ) ) {
      return jQuery( elem )[ name ]( value );
    }

    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === "undefined" ) {
      return jQuery.prop( elem, name, value );
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    // All attributes are lowercase
    // Grab necessary hook if one is defined
    if ( notxml ) {
      name = name.toLowerCase();
      hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
    }

    if ( value !== undefined ) {

      if ( value === null ) {
        jQuery.removeAttr( elem, name );
        return;

      } else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        elem.setAttribute( name, value + "" );
        return value;
      }

    } else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
      return ret;

    } else {

      ret = elem.getAttribute( name );

      // Non-existent attributes return null, we normalize to undefined
      return ret === null ?
        undefined :
        ret;
    }
  },

  removeAttr: function( elem, value ) {
    var propName, attrNames, name, isBool,
      i = 0;

    if ( value && elem.nodeType === 1 ) {

      attrNames = value.split( core_rspace );

      for ( ; i < attrNames.length; i++ ) {
        name = attrNames[ i ];

        if ( name ) {
          propName = jQuery.propFix[ name ] || name;
          isBool = rboolean.test( name );

          // See #9699 for explanation of this approach (setting first, then removal)
          // Do not do this for boolean attributes (see #10870)
          if ( !isBool ) {
            jQuery.attr( elem, name, "" );
          }
          elem.removeAttribute( getSetAttribute ? name : propName );

          // Set corresponding property to false for boolean attributes
          if ( isBool && propName in elem ) {
            elem[ propName ] = false;
          }
        }
      }
    }
  },

  attrHooks: {
    type: {
      set: function( elem, value ) {
        // We can't allow the type property to be changed (since it causes problems in IE)
        if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
          jQuery.error( "type property can't be changed" );
        } else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
          // Setting the type on a radio button after the value resets the value in IE6-9
          // Reset value to it's default in case type is set after value
          // This is for element creation
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    },
    // Use the value property for back compat
    // Use the nodeHook for button elements in IE6/7 (#1954)
    value: {
      get: function( elem, name ) {
        if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
          return nodeHook.get( elem, name );
        }
        return name in elem ?
          elem.value :
          null;
      },
      set: function( elem, value, name ) {
        if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
          return nodeHook.set( elem, value, name );
        }
        // Does not return so that setAttribute is also used
        elem.value = value;
      }
    }
  },

  propFix: {
    tabindex: "tabIndex",
    readonly: "readOnly",
    "for": "htmlFor",
    "class": "className",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    cellpadding: "cellPadding",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable"
  },

  prop: function( elem, name, value ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set properties on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    if ( notxml ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }

    if ( value !== undefined ) {
      if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        return ( elem[ name ] = value );
      }

    } else {
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
        return ret;

      } else {
        return elem[ name ];
      }
    }
  },

  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        var attributeNode = elem.getAttributeNode("tabindex");

        return attributeNode && attributeNode.specified ?
          parseInt( attributeNode.value, 10 ) :
          rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
            0 :
            undefined;
      }
    }
  }
});

// Hook for boolean attributes
boolHook = {
  get: function( elem, name ) {
    // Align boolean attributes with corresponding properties
    // Fall back to attribute presence where some booleans are not supported
    var attrNode,
      property = jQuery.prop( elem, name );
    return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
      name.toLowerCase() :
      undefined;
  },
  set: function( elem, value, name ) {
    var propName;
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else {
      // value is true since we know at this point it's type boolean and not false
      // Set boolean attributes to the same name and set the DOM property
      propName = jQuery.propFix[ name ] || name;
      if ( propName in elem ) {
        // Only set the IDL specifically if it already exists on the element
        elem[ propName ] = true;
      }

      elem.setAttribute( name, name.toLowerCase() );
    }
    return name;
  }
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

  fixSpecified = {
    name: true,
    id: true,
    coords: true
  };

  // Use this for any attribute in IE6/7
  // This fixes almost every IE6/7 issue
  nodeHook = jQuery.valHooks.button = {
    get: function( elem, name ) {
      var ret;
      ret = elem.getAttributeNode( name );
      return ret && ( fixSpecified[ name ] ? ret.value !== "" : ret.specified ) ?
        ret.value :
        undefined;
    },
    set: function( elem, value, name ) {
      // Set the existing or create a new attribute node
      var ret = elem.getAttributeNode( name );
      if ( !ret ) {
        ret = document.createAttribute( name );
        elem.setAttributeNode( ret );
      }
      return ( ret.value = value + "" );
    }
  };

  // Set width and height to auto instead of 0 on empty string( Bug #8150 )
  // This is for removals
  jQuery.each([ "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      set: function( elem, value ) {
        if ( value === "" ) {
          elem.setAttribute( name, "auto" );
          return value;
        }
      }
    });
  });

  // Set contenteditable to false on removals(#10429)
  // Setting to empty string throws an error as an invalid value
  jQuery.attrHooks.contenteditable = {
    get: nodeHook.get,
    set: function( elem, value, name ) {
      if ( value === "" ) {
        value = "false";
      }
      nodeHook.set( elem, value, name );
    }
  };
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
  jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      get: function( elem ) {
        var ret = elem.getAttribute( name, 2 );
        return ret === null ? undefined : ret;
      }
    });
  });
}

if ( !jQuery.support.style ) {
  jQuery.attrHooks.style = {
    get: function( elem ) {
      // Return undefined in the case of empty string
      // Normalize to lowercase since IE uppercases css property names
      return elem.style.cssText.toLowerCase() || undefined;
    },
    set: function( elem, value ) {
      return ( elem.style.cssText = value + "" );
    }
  };
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
  jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
    get: function( elem ) {
      var parent = elem.parentNode;

      if ( parent ) {
        parent.selectedIndex;

        // Make sure that it also works with optgroups, see #5701
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
      return null;
    }
  });
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
  jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
  jQuery.each([ "radio", "checkbox" ], function() {
    jQuery.valHooks[ this ] = {
      get: function( elem ) {
        // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
        return elem.getAttribute("value") === null ? "on" : elem.value;
      }
    };
  });
}
jQuery.each([ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
      }
    }
  });
});
var rformElems = /^(?:textarea|input|select)$/i,
  rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
  rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  hoverHack = function( events ) {
    return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
  };

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

  add: function( elem, types, handler, data, selector ) {

    var elemData, eventHandle, events,
      t, tns, type, namespaces, handleObj,
      handleObjIn, handlers, special;

    // Don't attach events to noData or text/comment nodes (allow plain objects tho)
    if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
      return;
    }

    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }

    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }

    // Init the element's event structure and main handler, if this is the first
    events = elemData.events;
    if ( !events ) {
      elemData.events = events = {};
    }
    eventHandle = elemData.handle;
    if ( !eventHandle ) {
      elemData.handle = eventHandle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
          undefined;
      };
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
      eventHandle.elem = elem;
    }

    // Handle multiple events separated by a space
    // jQuery(...).bind("mouseover mouseout", fn);
    types = jQuery.trim( hoverHack(types) ).split( " " );
    for ( t = 0; t < types.length; t++ ) {

      tns = rtypenamespace.exec( types[t] ) || [];
      type = tns[1];
      namespaces = ( tns[2] || "" ).split( "." ).sort();

      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};

      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;

      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};

      // handleObj is passed to all event handlers
      handleObj = jQuery.extend({
        type: type,
        origType: tns[1],
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join(".")
      }, handleObjIn );

      // Init the event handler queue if we're the first
      handlers = events[ type ];
      if ( !handlers ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener/attachEvent if the special events handler returns false
        if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          // Bind the global event handler to the element
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );

          } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
          }
        }
      }

      if ( special.add ) {
        special.add.call( elem, handleObj );

        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }

      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }

      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }

    // Nullify elem to prevent memory leaks in IE
    elem = null;
  },

  global: {},

  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {

    var t, tns, type, origType, namespaces, origCount,
      j, events, special, eventType, handleObj,
      elemData = jQuery.hasData( elem ) && jQuery._data( elem );

    if ( !elemData || !(events = elemData.events) ) {
      return;
    }

    // Once for each type.namespace in types; type may be omitted
    types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
    for ( t = 0; t < types.length; t++ ) {
      tns = rtypenamespace.exec( types[t] ) || [];
      type = origType = tns[1];
      namespaces = tns[2];

      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }

      special = jQuery.event.special[ type ] || {};
      type = ( selector? special.delegateType : special.bindType ) || type;
      eventType = events[ type ] || [];
      origCount = eventType.length;
      namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

      // Remove matching events
      for ( j = 0; j < eventType.length; j++ ) {
        handleObj = eventType[ j ];

        if ( ( mappedTypes || origType === handleObj.origType ) &&
           ( !handler || handler.guid === handleObj.guid ) &&
           ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
           ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
          eventType.splice( j--, 1 );

          if ( handleObj.selector ) {
            eventType.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }

      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( eventType.length === 0 && origCount !== eventType.length ) {
        if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }

        delete events[ type ];
      }
    }

    // Remove the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      delete elemData.handle;

      // removeData also checks for emptiness and clears the expando if empty
      // so use it instead of delete
      jQuery.removeData( elem, "events", true );
    }
  },

  // Events that are safe to short-circuit if no handlers are attached.
  // Native DOM events should not be added, they may have inline handlers.
  customEvent: {
    "getData": true,
    "setData": true,
    "changeData": true
  },

  trigger: function( event, data, elem, onlyHandlers ) {
    // Don't do events on text and comment nodes
    if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
      return;
    }

    // Event object or event type
    var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,
      type = event.type || event,
      namespaces = [];

    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }

    if ( type.indexOf( "!" ) >= 0 ) {
      // Exclusive events trigger only for the exact event (no namespaces)
      type = type.slice(0, -1);
      exclusive = true;
    }

    if ( type.indexOf( "." ) >= 0 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split(".");
      type = namespaces.shift();
      namespaces.sort();
    }

    if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
      // No jQuery handlers for this event type, and it can't have inline handlers
      return;
    }

    // Caller can pass in an Event, Object, or just an event type string
    event = typeof event === "object" ?
      // jQuery.Event object
      event[ jQuery.expando ] ? event :
      // Object literal
      new jQuery.Event( type, event ) :
      // Just the event type (string)
      new jQuery.Event( type );

    event.type = type;
    event.isTrigger = true;
    event.exclusive = exclusive;
    event.namespace = namespaces.join( "." );
    event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
    ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

    // Handle a global trigger
    if ( !elem ) {

      // TODO: Stop taunting the data cache; remove global events and always attach to document
      cache = jQuery.cache;
      for ( i in cache ) {
        if ( cache[ i ].events && cache[ i ].events[ type ] ) {
          jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
        }
      }
      return;
    }

    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }

    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data != null ? jQuery.makeArray( data ) : [];
    data.unshift( event );

    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }

    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    eventPath = [[ elem, special.bindType || type ]];
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

      bubbleType = special.delegateType || type;
      cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
      for ( old = elem; cur; cur = cur.parentNode ) {
        eventPath.push([ cur, bubbleType ]);
        old = cur;
      }

      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( old === (elem.ownerDocument || document) ) {
        eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
      }
    }

    // Fire handlers on the event path
    for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

      cur = eventPath[i][0];
      event.type = eventPath[i][1];

      handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }
      // Note that this is a bare JS function and not a jQuery handler
      handle = ontype && cur[ ontype ];
      if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
        event.preventDefault();
      }
    }
    event.type = type;

    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

      if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
        !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

        // Call a native DOM method on the target with the same name name as the event.
        // Can't use an .isFunction() check here because IE6/7 fails that test.
        // Don't do default actions on window, that's where global variables be (#6170)
        // IE<9 dies on focus/blur to hidden element (#1486)
        if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

          // Don't re-trigger an onFOO event when we call its FOO() method
          old = elem[ ontype ];

          if ( old ) {
            elem[ ontype ] = null;
          }

          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          elem[ type ]();
          jQuery.event.triggered = undefined;

          if ( old ) {
            elem[ ontype ] = old;
          }
        }
      }
    }

    return event.result;
  },

  dispatch: function( event ) {

    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix( event || window.event );

    var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,
      handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
      delegateCount = handlers.delegateCount,
      args = core_slice.call( arguments ),
      run_all = !event.exclusive && !event.namespace,
      special = jQuery.event.special[ event.type ] || {},
      handlerQueue = [];

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[0] = event;
    event.delegateTarget = this;

    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }

    // Determine handlers that should run if there are delegated events
    // Avoid non-left-click bubbling in Firefox (#3861)
    if ( delegateCount && !(event.button && event.type === "click") ) {

      for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

        // Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.disabled !== true || event.type !== "click" ) {
          selMatch = {};
          matches = [];
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];
            sel = handleObj.selector;

            if ( selMatch[ sel ] === undefined ) {
              selMatch[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) >= 0 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( selMatch[ sel ] ) {
              matches.push( handleObj );
            }
          }
          if ( matches.length ) {
            handlerQueue.push({ elem: cur, matches: matches });
          }
        }
      }
    }

    // Add the remaining (directly-bound) handlers
    if ( handlers.length > delegateCount ) {
      handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
    }

    // Run delegates first; they may want to stop propagation beneath us
    for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
      matched = handlerQueue[ i ];
      event.currentTarget = matched.elem;

      for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
        handleObj = matched.matches[ j ];

        // Triggered event must either 1) be non-exclusive and have no namespace, or
        // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
        if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

          event.data = handleObj.data;
          event.handleObj = handleObj;

          ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
              .apply( matched.elem, args );

          if ( ret !== undefined ) {
            event.result = ret;
            if ( ret === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }

    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }

    return event.result;
  },

  // Includes some event props shared by KeyEvent and MouseEvent
  // *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
  props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

  fixHooks: {},

  keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function( event, original ) {

      // Add which for key events
      if ( event.which == null ) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }

      return event;
    }
  },

  mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function( event, original ) {
      var eventDoc, doc, body,
        button = original.button,
        fromElement = original.fromElement;

      // Calculate pageX/Y if missing and clientX/Y available
      if ( event.pageX == null && original.clientX != null ) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add relatedTarget, if necessary
      if ( !event.relatedTarget && fromElement ) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
      }

      // Add which for click: 1 === left; 2 === middle; 3 === right
      // Note: button is not normalized, so don't use it
      if ( !event.which && button !== undefined ) {
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
      }

      return event;
    }
  },

  fix: function( event ) {
    if ( event[ jQuery.expando ] ) {
      return event;
    }

    // Create a writable copy of the event object and normalize some properties
    var i, prop,
      originalEvent = event,
      fixHook = jQuery.event.fixHooks[ event.type ] || {},
      copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

    event = jQuery.Event( originalEvent );

    for ( i = copy.length; i; ) {
      prop = copy[ --i ];
      event[ prop ] = originalEvent[ prop ];
    }

    // Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
    if ( !event.target ) {
      event.target = originalEvent.srcElement || document;
    }

    // Target should not be a text node (#504, Safari)
    if ( event.target.nodeType === 3 ) {
      event.target = event.target.parentNode;
    }

    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
    event.metaKey = !!event.metaKey;

    return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
  },

  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },

    focus: {
      delegateType: "focusin"
    },
    blur: {
      delegateType: "focusout"
    },

    beforeunload: {
      setup: function( data, namespaces, eventHandle ) {
        // We only want to do this special case on windows
        if ( jQuery.isWindow( this ) ) {
          this.onbeforeunload = eventHandle;
        }
      },

      teardown: function( namespaces, eventHandle ) {
        if ( this.onbeforeunload === eventHandle ) {
          this.onbeforeunload = null;
        }
      }
    }
  },

  simulate: function( type, elem, event, bubble ) {
    // Piggyback on a donor event to simulate a different one.
    // Fake originalEvent to avoid donor's stopPropagation, but if the
    // simulated event prevents default then we do the same on the donor.
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      { type: type,
        isSimulated: true,
        originalEvent: {}
      }
    );
    if ( bubble ) {
      jQuery.event.trigger( e, null, elem );
    } else {
      jQuery.event.dispatch.call( elem, e );
    }
    if ( e.isDefaultPrevented() ) {
      event.preventDefault();
    }
  }
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
  function( elem, type, handle ) {
    if ( elem.removeEventListener ) {
      elem.removeEventListener( type, handle, false );
    }
  } :
  function( elem, type, handle ) {
    var name = "on" + type;

    if ( elem.detachEvent ) {

      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if ( typeof elem[ name ] === "undefined" ) {
        elem[ name ] = null;
      }

      elem.detachEvent( name, handle );
    }
  };

jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !(this instanceof jQuery.Event) ) {
    return new jQuery.Event( src, props );
  }

  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();

  // Mark it as fixed
  this[ jQuery.expando ] = true;
};

function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  preventDefault: function() {
    this.isDefaultPrevented = returnTrue;

    var e = this.originalEvent;
    if ( !e ) {
      return;
    }

    // if preventDefault exists run it on the original event
    if ( e.preventDefault ) {
      e.preventDefault();

    // otherwise set the returnValue property of the original event to false (IE)
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    this.isPropagationStopped = returnTrue;

    var e = this.originalEvent;
    if ( !e ) {
      return;
    }
    // if stopPropagation exists run it on the original event
    if ( e.stopPropagation ) {
      e.stopPropagation();
    }
    // otherwise set the cancelBubble property of the original event to true (IE)
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,

    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj,
        selector = handleObj.selector;

      // For mousenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

  jQuery.event.special.submit = {
    setup: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Lazy-add a submit handler when a descendant form may potentially be submitted
      jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
        // Node name check avoids a VML-related crash in IE (#9807)
        var elem = e.target,
          form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
        if ( form && !jQuery._data( form, "_submit_attached" ) ) {
          jQuery.event.add( form, "submit._submit", function( event ) {
            event._submit_bubble = true;
          });
          jQuery._data( form, "_submit_attached", true );
        }
      });
      // return undefined since we don't need an event listener
    },

    postDispatch: function( event ) {
      // If form was submitted by the user, bubble the event up the tree
      if ( event._submit_bubble ) {
        delete event._submit_bubble;
        if ( this.parentNode && !event.isTrigger ) {
          jQuery.event.simulate( "submit", this.parentNode, event, true );
        }
      }
    },

    teardown: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
      jQuery.event.remove( this, "._submit" );
    }
  };
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

  jQuery.event.special.change = {

    setup: function() {

      if ( rformElems.test( this.nodeName ) ) {
        // IE doesn't fire change on a check/radio until blur; trigger it on click
        // after a propertychange. Eat the blur-change in special.change.handle.
        // This still fires onchange a second time for check/radio after blur.
        if ( this.type === "checkbox" || this.type === "radio" ) {
          jQuery.event.add( this, "propertychange._change", function( event ) {
            if ( event.originalEvent.propertyName === "checked" ) {
              this._just_changed = true;
            }
          });
          jQuery.event.add( this, "click._change", function( event ) {
            if ( this._just_changed && !event.isTrigger ) {
              this._just_changed = false;
            }
            // Allow triggered, simulated change events (#11500)
            jQuery.event.simulate( "change", this, event, true );
          });
        }
        return false;
      }
      // Delegated event; lazy-add a change handler on descendant inputs
      jQuery.event.add( this, "beforeactivate._change", function( e ) {
        var elem = e.target;

        if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "_change_attached" ) ) {
          jQuery.event.add( elem, "change._change", function( event ) {
            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
              jQuery.event.simulate( "change", this.parentNode, event, true );
            }
          });
          jQuery._data( elem, "_change_attached", true );
        }
      });
    },

    handle: function( event ) {
      var elem = event.target;

      // Swallow native change events from checkbox/radio, we already triggered them above
      if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
        return event.handleObj.handler.apply( this, arguments );
      }
    },

    teardown: function() {
      jQuery.event.remove( this, "._change" );

      return !rformElems.test( this.nodeName );
    }
  };
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    // Attach a single capturing handler while someone wants focusin/focusout
    var attaches = 0,
      handler = function( event ) {
        jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
      };

    jQuery.event.special[ fix ] = {
      setup: function() {
        if ( attaches++ === 0 ) {
          document.addEventListener( orig, handler, true );
        }
      },
      teardown: function() {
        if ( --attaches === 0 ) {
          document.removeEventListener( orig, handler, true );
        }
      }
    };
  });
}

jQuery.fn.extend({

  on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
    var origFn, type;

    // Types can be a map of types/handlers
    if ( typeof types === "object" ) {
      // ( types-Object, selector, data )
      if ( typeof selector !== "string" ) { // && selector != null
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for ( type in types ) {
        this.on( type, selector, data, types[ type ], one );
      }
      return this;
    }

    if ( data == null && fn == null ) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if ( fn === false ) {
      fn = returnFalse;
    } else if ( !fn ) {
      return this;
    }

    if ( one === 1 ) {
      origFn = fn;
      fn = function( event ) {
        // Can use an empty set, since event contains the info
        jQuery().off( event );
        return origFn.apply( this, arguments );
      };
      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    }
    return this.each( function() {
      jQuery.event.add( this, types, fn, data, selector );
    });
  },
  one: function( types, selector, data, fn ) {
    return this.on( types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each(function() {
      jQuery.event.remove( this, types, fn, selector );
    });
  },

  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },

  live: function( types, data, fn ) {
    jQuery( this.context ).on( types, this.selector, data, fn );
    return this;
  },
  die: function( types, fn ) {
    jQuery( this.context ).off( types, this.selector || "**", fn );
    return this;
  },

  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
  },

  trigger: function( type, data ) {
    return this.each(function() {
      jQuery.event.trigger( type, data, this );
    });
  },
  triggerHandler: function( type, data ) {
    if ( this[0] ) {
      return jQuery.event.trigger( type, data, this[0], true );
    }
  },

  toggle: function( fn ) {
    // Save reference to arguments for access in closure
    var args = arguments,
      guid = fn.guid || jQuery.guid++,
      i = 0,
      toggler = function( event ) {
        // Figure out which function to execute
        var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
        jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

        // Make sure that clicks stop
        event.preventDefault();

        // and execute the function
        return args[ lastToggle ].apply( this, arguments ) || false;
      };

    // link all the functions, so any of them can unbind this click handler
    toggler.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }

    return this.click( toggler );
  },

  hover: function( fnOver, fnOut ) {
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  }
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    if ( fn == null ) {
      fn = data;
      data = null;
    }

    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };

  if ( rkeyEvent.test( name ) ) {
    jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
  }

  if ( rmouseEvent.test( name ) ) {
    jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
  }
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var cachedruns,
  assertGetIdNotName,
  Expr,
  getText,
  isXML,
  contains,
  compile,
  sortOrder,
  hasDuplicate,
  outermostContext,

  baseHasDuplicate = true,
  strundefined = "undefined",

  expando = ( "sizcache" + Math.random() ).replace( ".", "" ),

  Token = String,
  document = window.document,
  docElem = document.documentElement,
  dirruns = 0,
  done = 0,
  pop = [].pop,
  push = [].push,
  slice = [].slice,
  // Use a stripped-down indexOf if a native one is unavailable
  indexOf = [].indexOf || function( elem ) {
    var i = 0,
      len = this.length;
    for ( ; i < len; i++ ) {
      if ( this[i] === elem ) {
        return i;
      }
    }
    return -1;
  },

  // Augment a function for special use by Sizzle
  markFunction = function( fn, value ) {
    fn[ expando ] = value == null || value;
    return fn;
  },

  createCache = function() {
    var cache = {},
      keys = [];

    return markFunction(function( key, value ) {
      // Only keep the most recent entries
      if ( keys.push( key ) > Expr.cacheLength ) {
        delete cache[ keys.shift() ];
      }

      // Retrieve with (key + " ") to avoid collision with native Object.prototype properties (see Issue #157)
      return (cache[ key + " " ] = value);
    }, cache );
  },

  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),

  // Regex

  // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/css3-syntax/#characters
  characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

  // Loosely modeled on CSS identifier characters
  // An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
  // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = characterEncoding.replace( "w", "w#" ),

  // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
  operators = "([*^$|!~]?=)",
  attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
    "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

  // Prefer arguments not in parens/brackets,
  //   then attribute selectors and non-pseudos (denoted by :),
  //   then anything else
  // These preferences are here to reduce the number of selectors
  //   needing tokenize in the PSEUDO preFilter
  pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

  // For matchExpr.POS and matchExpr.needsContext
  pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
    "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
  rpseudo = new RegExp( pseudos ),

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

  rnot = /^:not/,
  rsibling = /[\x20\t\r\n\f]*[+~]/,
  rendsWithNot = /:not\($/,

  rheader = /h\d/i,
  rinputs = /input|select|textarea|button/i,

  rbackslash = /\\(?!\\)/g,

  matchExpr = {
    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
    "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "POS": new RegExp( pos, "i" ),
    "CHILD": new RegExp( "^:(only|nth|first|last)-child(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    // For use in libraries implementing .is()
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|" + pos, "i" )
  },

  // Support

  // Used for testing something on an element
  assert = function( fn ) {
    var div = document.createElement("div");

    try {
      return fn( div );
    } catch (e) {
      return false;
    } finally {
      // release memory in IE
      div = null;
    }
  },

  // Check if getElementsByTagName("*") returns only elements
  assertTagNameNoComments = assert(function( div ) {
    div.appendChild( document.createComment("") );
    return !div.getElementsByTagName("*").length;
  }),

  // Check if getAttribute returns normalized href attributes
  assertHrefNotNormalized = assert(function( div ) {
    div.innerHTML = "<a href='#'></a>";
    return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
      div.firstChild.getAttribute("href") === "#";
  }),

  // Check if attributes should be retrieved by attribute nodes
  assertAttributes = assert(function( div ) {
    div.innerHTML = "<select></select>";
    var type = typeof div.lastChild.getAttribute("multiple");
    // IE8 returns a string for some attributes even when not present
    return type !== "boolean" && type !== "string";
  }),

  // Check if getElementsByClassName can be trusted
  assertUsableClassName = assert(function( div ) {
    // Opera can't find a second classname (in 9.6)
    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
    if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
      return false;
    }

    // Safari 3.2 caches class attributes and doesn't catch changes
    div.lastChild.className = "e";
    return div.getElementsByClassName("e").length === 2;
  }),

  // Check if getElementById returns elements by name
  // Check if getElementsByName privileges form controls or returns elements by ID
  assertUsableName = assert(function( div ) {
    // Inject content
    div.id = expando + 0;
    div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
    docElem.insertBefore( div, docElem.firstChild );

    // Test
    var pass = document.getElementsByName &&
      // buggy browsers will return fewer than the correct 2
      document.getElementsByName( expando ).length === 2 +
      // buggy browsers will return more than the correct 0
      document.getElementsByName( expando + 0 ).length;
    assertGetIdNotName = !document.getElementById( expando );

    // Cleanup
    docElem.removeChild( div );

    return pass;
  });

// If slice is not available, provide a backup
try {
  slice.call( docElem.childNodes, 0 )[0].nodeType;
} catch ( e ) {
  slice = function( i ) {
    var elem,
      results = [];
    for ( ; (elem = this[i]); i++ ) {
      results.push( elem );
    }
    return results;
  };
}

function Sizzle( selector, context, results, seed ) {
  results = results || [];
  context = context || document;
  var match, elem, xml, m,
    nodeType = context.nodeType;

  if ( !selector || typeof selector !== "string" ) {
    return results;
  }

  if ( nodeType !== 1 && nodeType !== 9 ) {
    return [];
  }

  xml = isXML( context );

  if ( !xml && !seed ) {
    if ( (match = rquickExpr.exec( selector )) ) {
      // Speed-up: Sizzle("#ID")
      if ( (m = match[1]) ) {
        if ( nodeType === 9 ) {
          elem = context.getElementById( m );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE, Opera, and Webkit return items
            // by name instead of ID
            if ( elem.id === m ) {
              results.push( elem );
              return results;
            }
          } else {
            return results;
          }
        } else {
          // Context is not a document
          if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
            contains( context, elem ) && elem.id === m ) {
            results.push( elem );
            return results;
          }
        }

      // Speed-up: Sizzle("TAG")
      } else if ( match[2] ) {
        push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
        return results;

      // Speed-up: Sizzle(".CLASS")
      } else if ( (m = match[3]) && assertUsableClassName && context.getElementsByClassName ) {
        push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
        return results;
      }
    }
  }

  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed, xml );
}

Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
  return Sizzle( expr, null, null, [ elem ] ).length > 0;
};

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;

      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;

  if ( nodeType ) {
    if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (see #11153)
      if ( typeof elem.textContent === "string" ) {
        return elem.textContent;
      } else {
        // Traverse its children
        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
          ret += getText( elem );
        }
      }
    } else if ( nodeType === 3 || nodeType === 4 ) {
      return elem.nodeValue;
    }
    // Do not include comment or processing instruction nodes
  } else {

    // If no nodeType, this is expected to be an array
    for ( ; (node = elem[i]); i++ ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  }
  return ret;
};

isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Element contains another
contains = Sizzle.contains = docElem.contains ?
  function( a, b ) {
    var adown = a.nodeType === 9 ? a.documentElement : a,
      bup = b && b.parentNode;
    return a === bup || !!( bup && bup.nodeType === 1 && adown.contains && adown.contains(bup) );
  } :
  docElem.compareDocumentPosition ?
  function( a, b ) {
    return b && !!( a.compareDocumentPosition( b ) & 16 );
  } :
  function( a, b ) {
    while ( (b = b.parentNode) ) {
      if ( b === a ) {
        return true;
      }
    }
    return false;
  };

Sizzle.attr = function( elem, name ) {
  var val,
    xml = isXML( elem );

  if ( !xml ) {
    name = name.toLowerCase();
  }
  if ( (val = Expr.attrHandle[ name ]) ) {
    return val( elem );
  }
  if ( xml || assertAttributes ) {
    return elem.getAttribute( name );
  }
  val = elem.getAttributeNode( name );
  return val ?
    typeof elem[ name ] === "boolean" ?
      elem[ name ] ? name : null :
      val.specified ? val.value : null :
    null;
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  // IE6/7 return a modified href
  attrHandle: assertHrefNotNormalized ?
    {} :
    {
      "href": function( elem ) {
        return elem.getAttribute( "href", 2 );
      },
      "type": function( elem ) {
        return elem.getAttribute("type");
      }
    },

  find: {
    "ID": assertGetIdNotName ?
      function( id, context, xml ) {
        if ( typeof context.getElementById !== strundefined && !xml ) {
          var m = context.getElementById( id );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          return m && m.parentNode ? [m] : [];
        }
      } :
      function( id, context, xml ) {
        if ( typeof context.getElementById !== strundefined && !xml ) {
          var m = context.getElementById( id );

          return m ?
            m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
              [m] :
              undefined :
            [];
        }
      },

    "TAG": assertTagNameNoComments ?
      function( tag, context ) {
        if ( typeof context.getElementsByTagName !== strundefined ) {
          return context.getElementsByTagName( tag );
        }
      } :
      function( tag, context ) {
        var results = context.getElementsByTagName( tag );

        // Filter out possible comments
        if ( tag === "*" ) {
          var elem,
            tmp = [],
            i = 0;

          for ( ; (elem = results[i]); i++ ) {
            if ( elem.nodeType === 1 ) {
              tmp.push( elem );
            }
          }

          return tmp;
        }
        return results;
      },

    "NAME": assertUsableName && function( tag, context ) {
      if ( typeof context.getElementsByName !== strundefined ) {
        return context.getElementsByName( name );
      }
    },

    "CLASS": assertUsableClassName && function( className, context, xml ) {
      if ( typeof context.getElementsByClassName !== strundefined && !xml ) {
        return context.getElementsByClassName( className );
      }
    }
  },

  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },

  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( rbackslash, "" );

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[4] || match[5] || "" ).replace( rbackslash, "" );

      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }

      return match.slice( 0, 4 );
    },

    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        3 xn-component of xn+y argument ([+-]?\d*n|)
        4 sign of xn-component
        5 x of xn-component
        6 sign of y-component
        7 y of y-component
      */
      match[1] = match[1].toLowerCase();

      if ( match[1] === "nth" ) {
        // nth-child requires argument
        if ( !match[2] ) {
          Sizzle.error( match[0] );
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[3] = +( match[3] ? match[4] + (match[5] || 1) : 2 * ( match[2] === "even" || match[2] === "odd" ) );
        match[4] = +( ( match[6] + match[7] ) || match[2] === "odd" );

      // other types prohibit arguments
      } else if ( match[2] ) {
        Sizzle.error( match[0] );
      }

      return match;
    },

    "PSEUDO": function( match ) {
      var unquoted, excess;
      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }

      if ( match[3] ) {
        match[2] = match[3];
      } else if ( (unquoted = match[4]) ) {
        // Only check arguments that contain a pseudo
        if ( rpseudo.test(unquoted) &&
          // Get excess from tokenize (recursively)
          (excess = tokenize( unquoted, true )) &&
          // advance to the next closing parenthesis
          (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

          // excess is a negative index
          unquoted = unquoted.slice( 0, excess );
          match[0] = match[0].slice( 0, excess );
        }
        match[2] = unquoted;
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },

  filter: {
    "ID": assertGetIdNotName ?
      function( id ) {
        id = id.replace( rbackslash, "" );
        return function( elem ) {
          return elem.getAttribute("id") === id;
        };
      } :
      function( id ) {
        id = id.replace( rbackslash, "" );
        return function( elem ) {
          var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
          return node && node.value === id;
        };
      },

    "TAG": function( nodeName ) {
      if ( nodeName === "*" ) {
        return function() { return true; };
      }
      nodeName = nodeName.replace( rbackslash, "" ).toLowerCase();

      return function( elem ) {
        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
      };
    },

    "CLASS": function( className ) {
      var pattern = classCache[ expando ][ className + " " ];

      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
        });
    },

    "ATTR": function( name, operator, check ) {
      return function( elem, context ) {
        var result = Sizzle.attr( elem, name );

        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }

        result += "";

        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.substr( result.length - check.length ) === check :
          operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },

    "CHILD": function( type, argument, first, last ) {

      if ( type === "nth" ) {
        return function( elem ) {
          var node, diff,
            parent = elem.parentNode;

          if ( first === 1 && last === 0 ) {
            return true;
          }

          if ( parent ) {
            diff = 0;
            for ( node = parent.firstChild; node; node = node.nextSibling ) {
              if ( node.nodeType === 1 ) {
                diff++;
                if ( elem === node ) {
                  break;
                }
              }
            }
          }

          // Incorporate the offset (or cast to NaN), then check against cycle size
          diff -= last;
          return diff === first || ( diff % first === 0 && diff / first >= 0 );
        };
      }

      return function( elem ) {
        var node = elem;

        switch ( type ) {
          case "only":
          case "first":
            while ( (node = node.previousSibling) ) {
              if ( node.nodeType === 1 ) {
                return false;
              }
            }

            if ( type === "first" ) {
              return true;
            }

            node = elem;

            /* falls through */
          case "last":
            while ( (node = node.nextSibling) ) {
              if ( node.nodeType === 1 ) {
                return false;
              }
            }

            return true;
        }
      };
    },

    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }

      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf.call( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }

      return fn;
    }
  },

  pseudos: {
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );

      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;

          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          return !results.pop();
        };
    }),

    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),

    "contains": markFunction(function( text ) {
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),

    "enabled": function( elem ) {
      return elem.disabled === false;
    },

    "disabled": function( elem ) {
      return elem.disabled === true;
    },

    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },

    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true;
    },

    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },

    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
      //   not comment, processing instructions, or others
      // Thanks to Diego Perini for the nodeName shortcut
      //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
      var nodeType;
      elem = elem.firstChild;
      while ( elem ) {
        if ( elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4 ) {
          return false;
        }
        elem = elem.nextSibling;
      }
      return true;
    },

    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },

    "text": function( elem ) {
      var type, attr;
      // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
      // use getAttribute instead to test this case
      return elem.nodeName.toLowerCase() === "input" &&
        (type = elem.type) === "text" &&
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type );
    },

    // Input types
    "radio": createInputPseudo("radio"),
    "checkbox": createInputPseudo("checkbox"),
    "file": createInputPseudo("file"),
    "password": createInputPseudo("password"),
    "image": createInputPseudo("image"),

    "submit": createButtonPseudo("submit"),
    "reset": createButtonPseudo("reset"),

    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },

    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },

    "focus": function( elem ) {
      var doc = elem.ownerDocument;
      return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },

    "active": function( elem ) {
      return elem === elem.ownerDocument.activeElement;
    },

    // Positional types
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),

    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),

    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),

    "even": createPositionalPseudo(function( matchIndexes, length ) {
      for ( var i = 0; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      for ( var i = 1; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      for ( var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      for ( var i = argument < 0 ? argument + length : argument; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};

function siblingCheck( a, b, ret ) {
  if ( a === b ) {
    return ret;
  }

  var cur = a.nextSibling;

  while ( cur ) {
    if ( cur === b ) {
      return -1;
    }

    cur = cur.nextSibling;
  }

  return 1;
}

sortOrder = docElem.compareDocumentPosition ?
  function( a, b ) {
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    return ( !a.compareDocumentPosition || !b.compareDocumentPosition ?
      a.compareDocumentPosition :
      a.compareDocumentPosition(b) & 4
    ) ? -1 : 1;
  } :
  function( a, b ) {
    // The nodes are identical, we can exit early
    if ( a === b ) {
      hasDuplicate = true;
      return 0;

    // Fallback to using sourceIndex (in IE) if it's available on both nodes
    } else if ( a.sourceIndex && b.sourceIndex ) {
      return a.sourceIndex - b.sourceIndex;
    }

    var al, bl,
      ap = [],
      bp = [],
      aup = a.parentNode,
      bup = b.parentNode,
      cur = aup;

    // If the nodes are siblings (or identical) we can do a quick check
    if ( aup === bup ) {
      return siblingCheck( a, b );

    // If no parents were found then the nodes are disconnected
    } else if ( !aup ) {
      return -1;

    } else if ( !bup ) {
      return 1;
    }

    // Otherwise they're somewhere else in the tree so we need
    // to build up a full list of the parentNodes for comparison
    while ( cur ) {
      ap.unshift( cur );
      cur = cur.parentNode;
    }

    cur = bup;

    while ( cur ) {
      bp.unshift( cur );
      cur = cur.parentNode;
    }

    al = ap.length;
    bl = bp.length;

    // Start walking down the tree looking for a discrepancy
    for ( var i = 0; i < al && i < bl; i++ ) {
      if ( ap[i] !== bp[i] ) {
        return siblingCheck( ap[i], bp[i] );
      }
    }

    // We ended someplace up the tree so do a sibling check
    return i === al ?
      siblingCheck( a, bp[i], -1 ) :
      siblingCheck( ap[i], b, 1 );
  };

// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
[0, 0].sort( sortOrder );
baseHasDuplicate = !hasDuplicate;

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    i = 1,
    j = 0;

  hasDuplicate = baseHasDuplicate;
  results.sort( sortOrder );

  if ( hasDuplicate ) {
    for ( ; (elem = results[i]); i++ ) {
      if ( elem === results[ i - 1 ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }

  return results;
};

Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};

function tokenize( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ expando ][ selector + " " ];

  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while ( soFar ) {

    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( tokens = [] );
    }

    matched = false;

    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      tokens.push( matched = new Token( match.shift() ) );
      soFar = soFar.slice( matched.length );

      // Cast descendant combinators to space
      matched.type = match[0].replace( rtrim, " " );
    }

    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {

        tokens.push( matched = new Token( match.shift() ) );
        soFar = soFar.slice( matched.length );
        matched.type = type;
        matched.matches = match;
      }
    }

    if ( !matched ) {
      break;
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
}

function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    checkNonElements = base && combinator.dir === "parentNode",
    doneName = done++;

  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( checkNonElements || elem.nodeType === 1  ) {
          return matcher( elem, context, xml );
        }
      }
    } :

    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
      if ( !xml ) {
        var cache,
          dirkey = dirruns + " " + doneName + " ",
          cachedkey = dirkey + cachedruns;
        while ( (elem = elem[ dir ]) ) {
          if ( checkNonElements || elem.nodeType === 1 ) {
            if ( (cache = elem[ expando ]) === cachedkey ) {
              return elem.sizset;
            } else if ( typeof cache === "string" && cache.indexOf(dirkey) === 0 ) {
              if ( elem.sizset ) {
                return elem;
              }
            } else {
              elem[ expando ] = cachedkey;
              if ( matcher( elem, context, xml ) ) {
                elem.sizset = true;
                return elem;
              }
              elem.sizset = false;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( checkNonElements || elem.nodeType === 1 ) {
            if ( matcher( elem, context, xml ) ) {
              return elem;
            }
          }
        }
      }
    };
}

function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;

  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }

  return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,

      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,

      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

          // ...intermediate processing is necessary
          [] :

          // ...otherwise use results directly
          results :
        matcherIn;

    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }

    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }

    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

            seed[temp] = !(results[temp] = elem);
          }
        }
      }

    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}

function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf.call( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
    } ];

  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && tokens.slice( 0, i - 1 ).join("").replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && tokens.join("")
        );
      }
      matchers.push( matcher );
    }
  }

  return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  var bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, expandContext ) {
      var elem, j, matcher,
        setMatched = [],
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        outermost = expandContext != null,
        contextBackup = outermostContext,
        // We must always have either seed elements or context
        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
        // Nested matchers should use non-integer dirruns
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

      if ( outermost ) {
        outermostContext = context !== document && context;
        cachedruns = superMatcher.el;
      }

      // Add elements passing elementMatchers directly to results
      for ( ; (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
            if ( matcher( elem, context, xml ) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
            cachedruns = ++superMatcher.el;
          }
        }

        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }

          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }

      // Apply set filters to unmatched elements
      matchedCount += i;
      if ( bySet && i !== matchedCount ) {
        for ( j = 0; (matcher = setMatchers[j]); j++ ) {
          matcher( unmatched, setMatched, context, xml );
        }

        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }

        // Add matches to results
        push.apply( results, setMatched );

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {

          Sizzle.uniqueSort( results );
        }
      }

      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

  superMatcher.el = 0;
  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ expando ][ selector + " " ];

  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !group ) {
      group = tokenize( selector );
    }
    i = group.length;
    while ( i-- ) {
      cached = matcherFromTokens( group[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }

    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  }
  return cached;
};

function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}

function select( selector, context, results, seed, xml ) {
  var i, tokens, token, type, find,
    match = tokenize( selector ),
    j = match.length;

  if ( !seed ) {
    // Try to minimize operations if there is only one group
    if ( match.length === 1 ) {

      // Take a shortcut and set the context if the root selector is an ID
      tokens = match[0] = match[0].slice( 0 );
      if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
          context.nodeType === 9 && !xml &&
          Expr.relative[ tokens[1].type ] ) {

        context = Expr.find["ID"]( token.matches[0].replace( rbackslash, "" ), context, xml )[0];
        if ( !context ) {
          return results;
        }

        selector = selector.slice( tokens.shift().length );
      }

      // Fetch a seed set for right-to-left matching
      for ( i = matchExpr["POS"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
        token = tokens[i];

        // Abort if we hit a combinator
        if ( Expr.relative[ (type = token.type) ] ) {
          break;
        }
        if ( (find = Expr.find[ type ]) ) {
          // Search, expanding context for leading sibling combinators
          if ( (seed = find(
            token.matches[0].replace( rbackslash, "" ),
            rsibling.test( tokens[0].type ) && context.parentNode || context,
            xml
          )) ) {

            // If seed is empty or no tokens remain, we can return early
            tokens.splice( i, 1 );
            selector = seed.length && tokens.join("");
            if ( !selector ) {
              push.apply( results, slice.call( seed, 0 ) );
              return results;
            }

            break;
          }
        }
      }
    }
  }

  // Compile and execute a filtering function
  // Provide `match` to avoid retokenization if we modified the selector above
  compile( selector, match )(
    seed,
    context,
    xml,
    results,
    rsibling.test( selector )
  );
  return results;
}

if ( document.querySelectorAll ) {
  (function() {
    var disconnectedMatch,
      oldSelect = select,
      rescape = /'|\\/g,
      rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

      // qSa(:focus) reports false when true (Chrome 21), no need to also add to buggyMatches since matches checks buggyQSA
      // A support test would require too much code (would include document ready)
      rbuggyQSA = [ ":focus" ],

      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      // A support test would require too much code (would include document ready)
      // just skip matchesSelector for :active
      rbuggyMatches = [ ":active" ],
      matches = docElem.matchesSelector ||
        docElem.mozMatchesSelector ||
        docElem.webkitMatchesSelector ||
        docElem.oMatchesSelector ||
        docElem.msMatchesSelector;

    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( div ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explictly
      // setting a boolean content attribute,
      // since its presence should be enough
      // http://bugs.jquery.com/ticket/12359
      div.innerHTML = "<select><option selected=''></option></select>";

      // IE8 - Some boolean attributes are not treated correctly
      if ( !div.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
      }

      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here (do not put tests after this one)
      if ( !div.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
    });

    assert(function( div ) {

      // Opera 10-12/IE9 - ^= $= *= and empty values
      // Should not select anything
      div.innerHTML = "<p test=''></p>";
      if ( div.querySelectorAll("[test^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
      }

      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here (do not put tests after this one)
      div.innerHTML = "<input type='hidden'/>";
      if ( !div.querySelectorAll(":enabled").length ) {
        rbuggyQSA.push(":enabled", ":disabled");
      }
    });

    // rbuggyQSA always contains :focus, so no need for a length check
    rbuggyQSA = /* rbuggyQSA.length && */ new RegExp( rbuggyQSA.join("|") );

    select = function( selector, context, results, seed, xml ) {
      // Only use querySelectorAll when not filtering,
      // when this is not xml,
      // and when no QSA bugs apply
      if ( !seed && !xml && !rbuggyQSA.test( selector ) ) {
        var groups, i,
          old = true,
          nid = expando,
          newContext = context,
          newSelector = context.nodeType === 9 && selector;

        // qSA works strangely on Element-rooted queries
        // We can work around this by specifying an extra ID on the root
        // and working up from there (Thanks to Andrew Dupont for the technique)
        // IE 8 doesn't work on object elements
        if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
          groups = tokenize( selector );

          if ( (old = context.getAttribute("id")) ) {
            nid = old.replace( rescape, "\\$&" );
          } else {
            context.setAttribute( "id", nid );
          }
          nid = "[id='" + nid + "'] ";

          i = groups.length;
          while ( i-- ) {
            groups[i] = nid + groups[i].join("");
          }
          newContext = rsibling.test( selector ) && context.parentNode || context;
          newSelector = groups.join(",");
        }

        if ( newSelector ) {
          try {
            push.apply( results, slice.call( newContext.querySelectorAll(
              newSelector
            ), 0 ) );
            return results;
          } catch(qsaError) {
          } finally {
            if ( !old ) {
              context.removeAttribute("id");
            }
          }
        }
      }

      return oldSelect( selector, context, results, seed, xml );
    };

    if ( matches ) {
      assert(function( div ) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        disconnectedMatch = matches.call( div, "div" );

        // This should fail with an exception
        // Gecko does not error, returns false instead
        try {
          matches.call( div, "[test!='']:sizzle" );
          rbuggyMatches.push( "!=", pseudos );
        } catch ( e ) {}
      });

      // rbuggyMatches always contains :active and :focus, so no need for a length check
      rbuggyMatches = /* rbuggyMatches.length && */ new RegExp( rbuggyMatches.join("|") );

      Sizzle.matchesSelector = function( elem, expr ) {
        // Make sure that attribute selectors are quoted
        expr = expr.replace( rattributeQuotes, "='$1']" );

        // rbuggyMatches always contains :active, so no need for an existence check
        if ( !isXML( elem ) && !rbuggyMatches.test( expr ) && !rbuggyQSA.test( expr ) ) {
          try {
            var ret = matches.call( elem, expr );

            // IE 9's matchesSelector returns false on disconnected nodes
            if ( ret || disconnectedMatch ||
                // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11 ) {
              return ret;
            }
          } catch(e) {}
        }

        return Sizzle( expr, null, null, [ elem ] ).length > 0;
      };
    }
  })();
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Back-compat
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  isSimple = /^.[^:#\[\.,]*$/,
  rneedsContext = jQuery.expr.match.needsContext,
  // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

jQuery.fn.extend({
  find: function( selector ) {
    var i, l, length, n, r, ret,
      self = this;

    if ( typeof selector !== "string" ) {
      return jQuery( selector ).filter(function() {
        for ( i = 0, l = self.length; i < l; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      });
    }

    ret = this.pushStack( "", "find", selector );

    for ( i = 0, l = this.length; i < l; i++ ) {
      length = ret.length;
      jQuery.find( selector, this[i], ret );

      if ( i > 0 ) {
        // Make sure that the results are unique
        for ( n = length; n < ret.length; n++ ) {
          for ( r = 0; r < length; r++ ) {
            if ( ret[r] === ret[n] ) {
              ret.splice(n--, 1);
              break;
            }
          }
        }
      }
    }

    return ret;
  },

  has: function( target ) {
    var i,
      targets = jQuery( target, this ),
      len = targets.length;

    return this.filter(function() {
      for ( i = 0; i < len; i++ ) {
        if ( jQuery.contains( this, targets[i] ) ) {
          return true;
        }
      }
    });
  },

  not: function( selector ) {
    return this.pushStack( winnow(this, selector, false), "not", selector);
  },

  filter: function( selector ) {
    return this.pushStack( winnow(this, selector, true), "filter", selector );
  },

  is: function( selector ) {
    return !!selector && (
      typeof selector === "string" ?
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        rneedsContext.test( selector ) ?
          jQuery( selector, this.context ).index( this[0] ) >= 0 :
          jQuery.filter( selector, this ).length > 0 :
        this.filter( selector ).length > 0 );
  },

  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      ret = [],
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
        jQuery( selectors, context || this.context ) :
        0;

    for ( ; i < l; i++ ) {
      cur = this[i];

      while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
        if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
          ret.push( cur );
          break;
        }
        cur = cur.parentNode;
      }
    }

    ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

    return this.pushStack( ret, "closest", selectors );
  },

  // Determine the position of an element within
  // the matched set of elements
  index: function( elem ) {

    // No argument, return index in parent
    if ( !elem ) {
      return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
    }

    // index in selector
    if ( typeof elem === "string" ) {
      return jQuery.inArray( this[0], jQuery( elem ) );
    }

    // Locate the position of the desired element
    return jQuery.inArray(
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this );
  },

  add: function( selector, context ) {
    var set = typeof selector === "string" ?
        jQuery( selector, context ) :
        jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
      all = jQuery.merge( this.get(), set );

    return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
      all :
      jQuery.unique( all ) );
  },

  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter(selector)
    );
  }
});

jQuery.fn.andSelf = jQuery.fn.addBack;

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
  return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

function sibling( cur, dir ) {
  do {
    cur = cur[ dir ];
  } while ( cur && cur.nodeType !== 1 );

  return cur;
}

jQuery.each({
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return jQuery.dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return jQuery.dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return jQuery.dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return jQuery.sibling( elem.firstChild );
  },
  contents: function( elem ) {
    return jQuery.nodeName( elem, "iframe" ) ?
      elem.contentDocument || elem.contentWindow.document :
      jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var ret = jQuery.map( this, fn, until );

    if ( !runtil.test( name ) ) {
      selector = until;
    }

    if ( selector && typeof selector === "string" ) {
      ret = jQuery.filter( selector, ret );
    }

    ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

    if ( this.length > 1 && rparentsprev.test( name ) ) {
      ret = ret.reverse();
    }

    return this.pushStack( ret, name, core_slice.call( arguments ).join(",") );
  };
});

jQuery.extend({
  filter: function( expr, elems, not ) {
    if ( not ) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 ?
      jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
      jQuery.find.matches(expr, elems);
  },

  dir: function( elem, dir, until ) {
    var matched = [],
      cur = elem[ dir ];

    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
      if ( cur.nodeType === 1 ) {
        matched.push( cur );
      }
      cur = cur[dir];
    }
    return matched;
  },

  sibling: function( n, elem ) {
    var r = [];

    for ( ; n; n = n.nextSibling ) {
      if ( n.nodeType === 1 && n !== elem ) {
        r.push( n );
      }
    }

    return r;
  }
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

  // Can't pass null or undefined to indexOf in Firefox 4
  // Set to 0 to skip string check
  qualifier = qualifier || 0;

  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep(elements, function( elem, i ) {
      var retVal = !!qualifier.call( elem, i, elem );
      return retVal === keep;
    });

  } else if ( qualifier.nodeType ) {
    return jQuery.grep(elements, function( elem, i ) {
      return ( elem === qualifier ) === keep;
    });

  } else if ( typeof qualifier === "string" ) {
    var filtered = jQuery.grep(elements, function( elem ) {
      return elem.nodeType === 1;
    });

    if ( isSimple.test( qualifier ) ) {
      return jQuery.filter(qualifier, filtered, !keep);
    } else {
      qualifier = jQuery.filter( qualifier, filtered );
    }
  }

  return jQuery.grep(elements, function( elem, i ) {
    return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
  });
}
function createSafeFragment( document ) {
  var list = nodeNames.split( "|" ),
  safeFrag = document.createDocumentFragment();

  if ( safeFrag.createElement ) {
    while ( list.length ) {
      safeFrag.createElement(
        list.pop()
      );
    }
  }
  return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  rleadingWhitespace = /^\s+/,
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  rtagName = /<([\w:]+)/,
  rtbody = /<tbody/i,
  rhtml = /<|&#?\w+;/,
  rnoInnerhtml = /<(?:script|style|link)/i,
  rnocache = /<(?:script|object|embed|option|style)/i,
  rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
  rcheckableType = /^(?:checkbox|radio)$/,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptType = /\/(java|ecma)script/i,
  rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
  wrapMap = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    area: [ 1, "<map>", "</map>" ],
    _default: [ 0, "", "" ]
  },
  safeFragment = createSafeFragment( document ),
  fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
if ( !jQuery.support.htmlSerialize ) {
  wrapMap._default = [ 1, "X<div>", "</div>" ];
}

jQuery.fn.extend({
  text: function( value ) {
    return jQuery.access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
    }, null, value, arguments.length );
  },

  wrapAll: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapAll( html.call(this, i) );
      });
    }

    if ( this[0] ) {
      // The elements to wrap the target around
      var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

      if ( this[0].parentNode ) {
        wrap.insertBefore( this[0] );
      }

      wrap.map(function() {
        var elem = this;

        while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
          elem = elem.firstChild;
        }

        return elem;
      }).append( this );
    }

    return this;
  },

  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapInner( html.call(this, i) );
      });
    }

    return this.each(function() {
      var self = jQuery( this ),
        contents = self.contents();

      if ( contents.length ) {
        contents.wrapAll( html );

      } else {
        self.append( html );
      }
    });
  },

  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );

    return this.each(function(i) {
      jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
    });
  },

  unwrap: function() {
    return this.parent().each(function() {
      if ( !jQuery.nodeName( this, "body" ) ) {
        jQuery( this ).replaceWith( this.childNodes );
      }
    }).end();
  },

  append: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 ) {
        this.appendChild( elem );
      }
    });
  },

  prepend: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 ) {
        this.insertBefore( elem, this.firstChild );
      }
    });
  },

  before: function() {
    if ( !isDisconnected( this[0] ) ) {
      return this.domManip(arguments, false, function( elem ) {
        this.parentNode.insertBefore( elem, this );
      });
    }

    if ( arguments.length ) {
      var set = jQuery.clean( arguments );
      return this.pushStack( jQuery.merge( set, this ), "before", this.selector );
    }
  },

  after: function() {
    if ( !isDisconnected( this[0] ) ) {
      return this.domManip(arguments, false, function( elem ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      });
    }

    if ( arguments.length ) {
      var set = jQuery.clean( arguments );
      return this.pushStack( jQuery.merge( this, set ), "after", this.selector );
    }
  },

  // keepData is for internal use only--do not document
  remove: function( selector, keepData ) {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
        if ( !keepData && elem.nodeType === 1 ) {
          jQuery.cleanData( elem.getElementsByTagName("*") );
          jQuery.cleanData( [ elem ] );
        }

        if ( elem.parentNode ) {
          elem.parentNode.removeChild( elem );
        }
      }
    }

    return this;
  },

  empty: function() {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      // Remove element nodes and prevent memory leaks
      if ( elem.nodeType === 1 ) {
        jQuery.cleanData( elem.getElementsByTagName("*") );
      }

      // Remove any remaining nodes
      while ( elem.firstChild ) {
        elem.removeChild( elem.firstChild );
      }
    }

    return this;
  },

  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    return this.map( function () {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    });
  },

  html: function( value ) {
    return jQuery.access( this, function( value ) {
      var elem = this[0] || {},
        i = 0,
        l = this.length;

      if ( value === undefined ) {
        return elem.nodeType === 1 ?
          elem.innerHTML.replace( rinlinejQuery, "" ) :
          undefined;
      }

      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
        ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
        !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

        value = value.replace( rxhtmlTag, "<$1></$2>" );

        try {
          for (; i < l; i++ ) {
            // Remove element nodes and prevent memory leaks
            elem = this[i] || {};
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( elem.getElementsByTagName( "*" ) );
              elem.innerHTML = value;
            }
          }

          elem = 0;

        // If using innerHTML throws an exception, use the fallback method
        } catch(e) {}
      }

      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },

  replaceWith: function( value ) {
    if ( !isDisconnected( this[0] ) ) {
      // Make sure that the elements are removed from the DOM before they are inserted
      // this can help fix replacing a parent with child elements
      if ( jQuery.isFunction( value ) ) {
        return this.each(function(i) {
          var self = jQuery(this), old = self.html();
          self.replaceWith( value.call( this, i, old ) );
        });
      }

      if ( typeof value !== "string" ) {
        value = jQuery( value ).detach();
      }

      return this.each(function() {
        var next = this.nextSibling,
          parent = this.parentNode;

        jQuery( this ).remove();

        if ( next ) {
          jQuery(next).before( value );
        } else {
          jQuery(parent).append( value );
        }
      });
    }

    return this.length ?
      this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
      this;
  },

  detach: function( selector ) {
    return this.remove( selector, true );
  },

  domManip: function( args, table, callback ) {

    // Flatten any nested arrays
    args = [].concat.apply( [], args );

    var results, first, fragment, iNoClone,
      i = 0,
      value = args[0],
      scripts = [],
      l = this.length;

    // We can't cloneNode fragments that contain checked, in WebKit
    if ( !jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test( value ) ) {
      return this.each(function() {
        jQuery(this).domManip( args, table, callback );
      });
    }

    if ( jQuery.isFunction(value) ) {
      return this.each(function(i) {
        var self = jQuery(this);
        args[0] = value.call( this, i, table ? self.html() : undefined );
        self.domManip( args, table, callback );
      });
    }

    if ( this[0] ) {
      results = jQuery.buildFragment( args, this, scripts );
      fragment = results.fragment;
      first = fragment.firstChild;

      if ( fragment.childNodes.length === 1 ) {
        fragment = first;
      }

      if ( first ) {
        table = table && jQuery.nodeName( first, "tr" );

        // Use the original fragment for the last item instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        // Fragments from the fragment cache must always be cloned and never used in place.
        for ( iNoClone = results.cacheable || l - 1; i < l; i++ ) {
          callback.call(
            table && jQuery.nodeName( this[i], "table" ) ?
              findOrAppend( this[i], "tbody" ) :
              this[i],
            i === iNoClone ?
              fragment :
              jQuery.clone( fragment, true, true )
          );
        }
      }

      // Fix #11809: Avoid leaking memory
      fragment = first = null;

      if ( scripts.length ) {
        jQuery.each( scripts, function( i, elem ) {
          if ( elem.src ) {
            if ( jQuery.ajax ) {
              jQuery.ajax({
                url: elem.src,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
              });
            } else {
              jQuery.error("no ajax");
            }
          } else {
            jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "" ) );
          }

          if ( elem.parentNode ) {
            elem.parentNode.removeChild( elem );
          }
        });
      }
    }

    return this;
  }
});

function findOrAppend( elem, tag ) {
  return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

function cloneCopyEvent( src, dest ) {

  if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
    return;
  }

  var type, i, l,
    oldData = jQuery._data( src ),
    curData = jQuery._data( dest, oldData ),
    events = oldData.events;

  if ( events ) {
    delete curData.handle;
    curData.events = {};

    for ( type in events ) {
      for ( i = 0, l = events[ type ].length; i < l; i++ ) {
        jQuery.event.add( dest, type, events[ type ][ i ] );
      }
    }
  }

  // make the cloned public data object a copy from the original
  if ( curData.data ) {
    curData.data = jQuery.extend( {}, curData.data );
  }
}

function cloneFixAttributes( src, dest ) {
  var nodeName;

  // We do not need to do anything for non-Elements
  if ( dest.nodeType !== 1 ) {
    return;
  }

  // clearAttributes removes the attributes, which we don't want,
  // but also removes the attachEvent events, which we *do* want
  if ( dest.clearAttributes ) {
    dest.clearAttributes();
  }

  // mergeAttributes, in contrast, only merges back on the
  // original attributes, not the events
  if ( dest.mergeAttributes ) {
    dest.mergeAttributes( src );
  }

  nodeName = dest.nodeName.toLowerCase();

  if ( nodeName === "object" ) {
    // IE6-10 improperly clones children of object elements using classid.
    // IE10 throws NoModificationAllowedError if parent is null, #12132.
    if ( dest.parentNode ) {
      dest.outerHTML = src.outerHTML;
    }

    // This path appears unavoidable for IE9. When cloning an object
    // element in IE9, the outerHTML strategy above is not sufficient.
    // If the src has innerHTML and the destination does not,
    // copy the src.innerHTML into the dest.innerHTML. #10324
    if ( jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML)) ) {
      dest.innerHTML = src.innerHTML;
    }

  } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    // IE6-8 fails to persist the checked state of a cloned checkbox
    // or radio button. Worse, IE6-7 fail to give the cloned element
    // a checked appearance if the defaultChecked value isn't also set

    dest.defaultChecked = dest.checked = src.checked;

    // IE6-7 get confused and end up setting the value of a cloned
    // checkbox/radio button to an empty string instead of "on"
    if ( dest.value !== src.value ) {
      dest.value = src.value;
    }

  // IE6-8 fails to return the selected option to the default selected
  // state when cloning options
  } else if ( nodeName === "option" ) {
    dest.selected = src.defaultSelected;

  // IE6-8 fails to set the defaultValue to the correct value when
  // cloning other types of input fields
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;

  // IE blanks contents when cloning scripts
  } else if ( nodeName === "script" && dest.text !== src.text ) {
    dest.text = src.text;
  }

  // Event data gets referenced instead of copied if the expando
  // gets copied too
  dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, context, scripts ) {
  var fragment, cacheable, cachehit,
    first = args[ 0 ];

  // Set context from what may come in as undefined or a jQuery collection or a node
  // Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
  // also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
  context = context || document;
  context = !context.nodeType && context[0] || context;
  context = context.ownerDocument || context;

  // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
  // Cloning options loses the selected state, so don't cache them
  // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
  // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
  // Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
  if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
    first.charAt(0) === "<" && !rnocache.test( first ) &&
    (jQuery.support.checkClone || !rchecked.test( first )) &&
    (jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

    // Mark cacheable and look for a hit
    cacheable = true;
    fragment = jQuery.fragments[ first ];
    cachehit = fragment !== undefined;
  }

  if ( !fragment ) {
    fragment = context.createDocumentFragment();
    jQuery.clean( args, context, fragment, scripts );

    // Update the cache, but only store false
    // unless this is a second parsing of the same content
    if ( cacheable ) {
      jQuery.fragments[ first ] = cachehit && fragment;
    }
  }

  return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      i = 0,
      ret = [],
      insert = jQuery( selector ),
      l = insert.length,
      parent = this.length === 1 && this[0].parentNode;

    if ( (parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1 ) {
      insert[ original ]( this[0] );
      return this;
    } else {
      for ( ; i < l; i++ ) {
        elems = ( i > 0 ? this.clone(true) : this ).get();
        jQuery( insert[i] )[ original ]( elems );
        ret = ret.concat( elems );
      }

      return this.pushStack( ret, name, insert.selector );
    }
  };
});

function getAll( elem ) {
  if ( typeof elem.getElementsByTagName !== "undefined" ) {
    return elem.getElementsByTagName( "*" );

  } else if ( typeof elem.querySelectorAll !== "undefined" ) {
    return elem.querySelectorAll( "*" );

  } else {
    return [];
  }
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
  if ( rcheckableType.test( elem.type ) ) {
    elem.defaultChecked = elem.checked;
  }
}

jQuery.extend({
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var srcElements,
      destElements,
      i,
      clone;

    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
      clone = elem.cloneNode( true );

    // IE<=8 does not properly clone detached, unknown element nodes
    } else {
      fragmentDiv.innerHTML = elem.outerHTML;
      fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
    }

    if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
      // IE copies events bound via attachEvent when using cloneNode.
      // Calling detachEvent on the clone will also remove the events
      // from the original. In order to get around this, we use some
      // proprietary methods to clear the events. Thanks to MooTools
      // guys for this hotness.

      cloneFixAttributes( elem, clone );

      // Using Sizzle here is crazy slow, so we use getElementsByTagName instead
      srcElements = getAll( elem );
      destElements = getAll( clone );

      // Weird iteration because IE will replace the length property
      // with an element if you are cloning the body and one of the
      // elements on the page has a name or id of "length"
      for ( i = 0; srcElements[i]; ++i ) {
        // Ensure that the destination node is not null; Fixes #9587
        if ( destElements[i] ) {
          cloneFixAttributes( srcElements[i], destElements[i] );
        }
      }
    }

    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      cloneCopyEvent( elem, clone );

      if ( deepDataAndEvents ) {
        srcElements = getAll( elem );
        destElements = getAll( clone );

        for ( i = 0; srcElements[i]; ++i ) {
          cloneCopyEvent( srcElements[i], destElements[i] );
        }
      }
    }

    srcElements = destElements = null;

    // Return the cloned set
    return clone;
  },

  clean: function( elems, context, fragment, scripts ) {
    var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
      safe = context === document && safeFragment,
      ret = [];

    // Ensure that context is a document
    if ( !context || typeof context.createDocumentFragment === "undefined" ) {
      context = document;
    }

    // Use the already-created safe fragment if context permits
    for ( i = 0; (elem = elems[i]) != null; i++ ) {
      if ( typeof elem === "number" ) {
        elem += "";
      }

      if ( !elem ) {
        continue;
      }

      // Convert html string into DOM nodes
      if ( typeof elem === "string" ) {
        if ( !rhtml.test( elem ) ) {
          elem = context.createTextNode( elem );
        } else {
          // Ensure a safe container in which to render the html
          safe = safe || createSafeFragment( context );
          div = context.createElement("div");
          safe.appendChild( div );

          // Fix "XHTML"-style tags in all browsers
          elem = elem.replace(rxhtmlTag, "<$1></$2>");

          // Go to html and back, then peel off extra wrappers
          tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
          wrap = wrapMap[ tag ] || wrapMap._default;
          depth = wrap[0];
          div.innerHTML = wrap[1] + elem + wrap[2];

          // Move to the right depth
          while ( depth-- ) {
            div = div.lastChild;
          }

          // Remove IE's autoinserted <tbody> from table fragments
          if ( !jQuery.support.tbody ) {

            // String was a <table>, *may* have spurious <tbody>
            hasBody = rtbody.test(elem);
              tbody = tag === "table" && !hasBody ?
                div.firstChild && div.firstChild.childNodes :

                // String was a bare <thead> or <tfoot>
                wrap[1] === "<table>" && !hasBody ?
                  div.childNodes :
                  [];

            for ( j = tbody.length - 1; j >= 0 ; --j ) {
              if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
                tbody[ j ].parentNode.removeChild( tbody[ j ] );
              }
            }
          }

          // IE completely kills leading whitespace when innerHTML is used
          if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
            div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
          }

          elem = div.childNodes;

          // Take out of fragment container (we need a fresh div each time)
          div.parentNode.removeChild( div );
        }
      }

      if ( elem.nodeType ) {
        ret.push( elem );
      } else {
        jQuery.merge( ret, elem );
      }
    }

    // Fix #11356: Clear elements from safeFragment
    if ( div ) {
      elem = div = safe = null;
    }

    // Reset defaultChecked for any radios and checkboxes
    // about to be appended to the DOM in IE 6/7 (#8060)
    if ( !jQuery.support.appendChecked ) {
      for ( i = 0; (elem = ret[i]) != null; i++ ) {
        if ( jQuery.nodeName( elem, "input" ) ) {
          fixDefaultChecked( elem );
        } else if ( typeof elem.getElementsByTagName !== "undefined" ) {
          jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
        }
      }
    }

    // Append elements to a provided document fragment
    if ( fragment ) {
      // Special handling of each script element
      handleScript = function( elem ) {
        // Check if we consider it executable
        if ( !elem.type || rscriptType.test( elem.type ) ) {
          // Detach the script and store it in the scripts array (if provided) or the fragment
          // Return truthy to indicate that it has been handled
          return scripts ?
            scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
            fragment.appendChild( elem );
        }
      };

      for ( i = 0; (elem = ret[i]) != null; i++ ) {
        // Check if we're done after handling an executable script
        if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
          // Append to fragment and handle embedded scripts
          fragment.appendChild( elem );
          if ( typeof elem.getElementsByTagName !== "undefined" ) {
            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
            jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

            // Splice the scripts into ret after their former ancestor and advance our index beyond them
            ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
            i += jsTags.length;
          }
        }
      }
    }

    return ret;
  },

  cleanData: function( elems, /* internal */ acceptData ) {
    var data, id, elem, type,
      i = 0,
      internalKey = jQuery.expando,
      cache = jQuery.cache,
      deleteExpando = jQuery.support.deleteExpando,
      special = jQuery.event.special;

    for ( ; (elem = elems[i]) != null; i++ ) {

      if ( acceptData || jQuery.acceptData( elem ) ) {

        id = elem[ internalKey ];
        data = id && cache[ id ];

        if ( data ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );

              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }

          // Remove cache only if it was not already removed by jQuery.event.remove
          if ( cache[ id ] ) {

            delete cache[ id ];

            // IE does not allow us to delete expando properties from nodes,
            // nor does it have a removeAttribute function on Document nodes;
            // we must handle all of these cases
            if ( deleteExpando ) {
              delete elem[ internalKey ];

            } else if ( elem.removeAttribute ) {
              elem.removeAttribute( internalKey );

            } else {
              elem[ internalKey ] = null;
            }

            jQuery.deletedIds.push( id );
          }
        }
      }
    }
  }
});
// Limit scope pollution from any deprecated API
(function() {

var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function( ua ) {
  ua = ua.toLowerCase();

  var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
    /(msie) ([\w.]+)/.exec( ua ) ||
    ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
    [];

  return {
    browser: match[ 1 ] || "",
    version: match[ 2 ] || "0"
  };
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
  browser[ matched.browser ] = true;
  browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
  browser.webkit = true;
} else if ( browser.webkit ) {
  browser.safari = true;
}

jQuery.browser = browser;

jQuery.sub = function() {
  function jQuerySub( selector, context ) {
    return new jQuerySub.fn.init( selector, context );
  }
  jQuery.extend( true, jQuerySub, this );
  jQuerySub.superclass = this;
  jQuerySub.fn = jQuerySub.prototype = this();
  jQuerySub.fn.constructor = jQuerySub;
  jQuerySub.sub = this.sub;
  jQuerySub.fn.init = function init( selector, context ) {
    if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
      context = jQuerySub( context );
    }

    return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
  };
  jQuerySub.fn.init.prototype = jQuerySub.fn;
  var rootjQuerySub = jQuerySub(document);
  return jQuerySub;
};

})();
var curCSS, iframe, iframeDoc,
  ralpha = /alpha\([^)]*\)/i,
  ropacity = /opacity=([^)]*)/,
  rposition = /^(top|right|bottom|left)$/,
  // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  rmargin = /^margin/,
  rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
  rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
  rrelNum = new RegExp( "^([-+])=(" + core_pnum + ")", "i" ),
  elemdisplay = { BODY: "block" },

  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: 0,
    fontWeight: 400
  },

  cssExpand = [ "Top", "Right", "Bottom", "Left" ],
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],

  eventsToggle = jQuery.fn.toggle;

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

  // shortcut for names that are not vendor prefixed
  if ( name in style ) {
    return name;
  }

  // check for vendor prefixed names
  var capName = name.charAt(0).toUpperCase() + name.slice(1),
    origName = name,
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in style ) {
      return name;
    }
  }

  return origName;
}

function isHidden( elem, el ) {
  elem = el || elem;
  return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
  var elem, display,
    values = [],
    index = 0,
    length = elements.length;

  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    values[ index ] = jQuery._data( elem, "olddisplay" );
    if ( show ) {
      // Reset the inline display of this element to learn if it is
      // being hidden by cascaded rules or not
      if ( !values[ index ] && elem.style.display === "none" ) {
        elem.style.display = "";
      }

      // Set elements which have been overridden with display: none
      // in a stylesheet to whatever the default browser style is
      // for such an element
      if ( elem.style.display === "" && isHidden( elem ) ) {
        values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
      }
    } else {
      display = curCSS( elem, "display" );

      if ( !values[ index ] && display !== "none" ) {
        jQuery._data( elem, "olddisplay", display );
      }
    }
  }

  // Set the display of most of the elements in a second loop
  // to avoid the constant reflow
  for ( index = 0; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
      elem.style.display = show ? values[ index ] || "" : "none";
    }
  }

  return elements;
}

jQuery.fn.extend({
  css: function( name, value ) {
    return jQuery.access( this, function( elem, name, value ) {
      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  },
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state, fn2 ) {
    var bool = typeof state === "boolean";

    if ( jQuery.isFunction( state ) && jQuery.isFunction( fn2 ) ) {
      return eventsToggle.apply( this, arguments );
    }

    return this.each(function() {
      if ( bool ? state : isHidden( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    });
  }
});

jQuery.extend({
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;

        }
      }
    }
  },

  // Exclude the following css properties to add px
  cssNumber: {
    "fillOpacity": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },

  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    // normalize float css property
    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
  },

  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }

    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;

    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;

      // convert relative number strings (+= or -=) to relative numbers. #7345
      if ( type === "string" && (ret = rrelNum.exec( value )) ) {
        value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
        // Fixes bug #9237
        type = "number";
      }

      // Make sure that NaN and null values aren't set. See: #7116
      if ( value == null || type === "number" && isNaN( value ) ) {
        return;
      }

      // If a number was passed in, add 'px' to the (except for certain CSS properties)
      if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
        value += "px";
      }

      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
        // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
        // Fixes bug #5509
        try {
          style[ name ] = value;
        } catch(e) {}
      }

    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
        return ret;
      }

      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },

  css: function( elem, name, numeric, extra ) {
    var val, num, hooks,
      origName = jQuery.camelCase( name );

    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }

    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name );
    }

    //convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }

    // Return, converting to number if forced or a qualifier was provided and val looks numeric
    if ( numeric || extra !== undefined ) {
      num = parseFloat( val );
      return numeric || jQuery.isNumeric( num ) ? num || 0 : val;
    }
    return val;
  },

  // A method for quickly swapping in/out CSS properties to get correct calculations
  swap: function( elem, options, callback ) {
    var ret, name,
      old = {};

    // Remember the old values, and insert the new ones
    for ( name in options ) {
      old[ name ] = elem.style[ name ];
      elem.style[ name ] = options[ name ];
    }

    ret = callback.call( elem );

    // Revert the old values
    for ( name in options ) {
      elem.style[ name ] = old[ name ];
    }

    return ret;
  }
});

// NOTE: To any future maintainer, we've window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
  curCSS = function( elem, name ) {
    var ret, width, minWidth, maxWidth,
      computed = window.getComputedStyle( elem, null ),
      style = elem.style;

    if ( computed ) {

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed.getPropertyValue( name ) || computed[ name ];

      if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
        ret = jQuery.style( elem, name );
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
      // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
      // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
      if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret;
  };
} else if ( document.documentElement.currentStyle ) {
  curCSS = function( elem, name ) {
    var left, rsLeft,
      ret = elem.currentStyle && elem.currentStyle[ name ],
      style = elem.style;

    // Avoid setting ret to empty string here
    // so we don't default to auto
    if ( ret == null && style && style[ name ] ) {
      ret = style[ name ];
    }

    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // but not position css attributes, as those are proportional to the parent element instead
    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

      // Remember the original values
      left = style.left;
      rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

      // Put in the new values to get a computed value out
      if ( rsLeft ) {
        elem.runtimeStyle.left = elem.currentStyle.left;
      }
      style.left = name === "fontSize" ? "1em" : ret;
      ret = style.pixelLeft + "px";

      // Revert the changed values
      style.left = left;
      if ( rsLeft ) {
        elem.runtimeStyle.left = rsLeft;
      }
    }

    return ret === "" ? "auto" : ret;
  };
}

function setPositiveNumber( elem, value, subtract ) {
  var matches = rnumsplit.exec( value );
  return matches ?
      Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
      value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox ) {
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
    // If we already have the right measurement, avoid augmentation
    4 :
    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,

    val = 0;

  for ( ; i < 4; i += 2 ) {
    // both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      // we use jQuery.css instead of curCSS here
      // because of the reliableMarginRight CSS hook!
      val += jQuery.css( elem, extra + cssExpand[ i ], true );
    }

    // From this point on we use curCSS for maximum performance (relevant in animations)
    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;
      }

      // at this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
      }
    } else {
      // at this point, extra isn't content, so add padding
      val += parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;

      // at this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
      }
    }
  }

  return val;
}

function getWidthOrHeight( elem, name, extra ) {

  // Start with offset property, which is equivalent to the border-box value
  var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
    valueIsBorderBox = true,
    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box";

  // some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }

    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test(val) ) {
      return val;
    }

    // we need the check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }

  // use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox
    )
  ) + "px";
}


// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
  if ( elemdisplay[ nodeName ] ) {
    return elemdisplay[ nodeName ];
  }

  var elem = jQuery( "<" + nodeName + ">" ).appendTo( document.body ),
    display = elem.css("display");
  elem.remove();

  // If the simple way fails,
  // get element's real default display by attaching it to a temp iframe
  if ( display === "none" || display === "" ) {
    // Use the already-created iframe if possible
    iframe = document.body.appendChild(
      iframe || jQuery.extend( document.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      })
    );

    // Create a cacheable copy of the iframe document on first call.
    // IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
    // document to it; WebKit & Firefox won't allow reusing the iframe document.
    if ( !iframeDoc || !iframe.createElement ) {
      iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
      iframeDoc.write("<!doctype html><html><body>");
      iframeDoc.close();
    }

    elem = iframeDoc.body.appendChild( iframeDoc.createElement(nodeName) );

    display = curCSS( elem, "display" );
    document.body.removeChild( iframe );
  }

  // Store the correct default display
  elemdisplay[ nodeName ] = display;

  return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // certain elements can have dimension info if we invisibly show them
        // however, it must have a current display style that would benefit from this
        if ( elem.offsetWidth === 0 && rdisplayswap.test( curCSS( elem, "display" ) ) ) {
          return jQuery.swap( elem, cssShow, function() {
            return getWidthOrHeight( elem, name, extra );
          });
        } else {
          return getWidthOrHeight( elem, name, extra );
        }
      }
    },

    set: function( elem, value, extra ) {
      return setPositiveNumber( elem, value, extra ?
        augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box"
        ) : 0
      );
    }
  };
});

if ( !jQuery.support.opacity ) {
  jQuery.cssHooks.opacity = {
    get: function( elem, computed ) {
      // IE uses filters for opacity
      return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
        computed ? "1" : "";
    },

    set: function( elem, value ) {
      var style = elem.style,
        currentStyle = elem.currentStyle,
        opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
        filter = currentStyle && currentStyle.filter || style.filter || "";

      // IE has trouble with opacity if it does not have layout
      // Force it by setting the zoom level
      style.zoom = 1;

      // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
      if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
        style.removeAttribute ) {

        // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
        // if "filter:" is present at all, clearType is disabled, we want to avoid this
        // style.removeAttribute is IE Only, but so apparently is this code path...
        style.removeAttribute( "filter" );

        // if there there is no filter style applied in a css rule, we are done
        if ( currentStyle && !currentStyle.filter ) {
          return;
        }
      }

      // otherwise, set new filter values
      style.filter = ralpha.test( filter ) ?
        filter.replace( ralpha, opacity ) :
        filter + " " + opacity;
    }
  };
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
  if ( !jQuery.support.reliableMarginRight ) {
    jQuery.cssHooks.marginRight = {
      get: function( elem, computed ) {
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        // Work around by temporarily setting element display to inline-block
        return jQuery.swap( elem, { "display": "inline-block" }, function() {
          if ( computed ) {
            return curCSS( elem, "marginRight" );
          }
        });
      }
    };
  }

  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = {
        get: function( elem, computed ) {
          if ( computed ) {
            var ret = curCSS( elem, prop );
            // if curCSS returns percentage, fallback to offset
            return rnumnonpx.test( ret ) ? jQuery( elem ).position()[ prop ] + "px" : ret;
          }
        }
      };
    });
  }

});

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.hidden = function( elem ) {
    return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS( elem, "display" )) === "none");
  };

  jQuery.expr.filters.visible = function( elem ) {
    return !jQuery.expr.filters.hidden( elem );
  };
}

// These hooks are used by animate to expand properties
jQuery.each({
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i,

        // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [ value ],
        expanded = {};

      for ( i = 0; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }

      return expanded;
    }
  };

  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
});
var r20 = /%20/g,
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
  rselectTextarea = /^(?:select|textarea)/i;

jQuery.fn.extend({
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map(function(){
      return this.elements ? jQuery.makeArray( this.elements ) : this;
    })
    .filter(function(){
      return this.name && !this.disabled &&
        ( this.checked || rselectTextarea.test( this.nodeName ) ||
          rinput.test( this.type ) );
    })
    .map(function( i, elem ){
      var val = jQuery( this ).val();

      return val == null ?
        null :
        jQuery.isArray( val ) ?
          jQuery.map( val, function( val, i ){
            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          }) :
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    }).get();
  }
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, value ) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
    };

  // Set traditional to true for jQuery <= 1.3.2 behavior.
  if ( traditional === undefined ) {
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
  }

  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    });

  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }

  // Return the resulting serialization
  return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
  var name;

  if ( jQuery.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );

      } else {
        // If array item is non-scalar (array or object), encode its
        // numeric index to resolve deserialization ambiguity issues.
        // Note that rack (as of 1.0.0) can't currently deserialize
        // nested arrays properly, and attempting to do so may cause
        // a server error. Possible fixes are to modify rack's
        // deserialization algorithm or to provide an option or flag
        // to force array serialization to be shallow.
        buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
      }
    });

  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }

  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
var
  // Document location
  ajaxLocParts,
  ajaxLocation,

  rhash = /#.*$/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  rquery = /\?/,
  rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  rts = /([?&])_=[^&]*/,
  rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

  // Keep a copy of the old load method
  _load = jQuery.fn.load,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
  ajaxLocation = location.href;
} catch( e ) {
  // Use the href attribute of an A element
  // since IE will modify it given document.location
  ajaxLocation = document.createElement( "a" );
  ajaxLocation.href = "";
  ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {

    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }

    var dataType, list, placeBefore,
      dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),
      i = 0,
      length = dataTypes.length;

    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      for ( ; i < length; i++ ) {
        dataType = dataTypes[ i ];
        // We control if we're asked to add before
        // any existing element
        placeBefore = /^\+/.test( dataType );
        if ( placeBefore ) {
          dataType = dataType.substr( 1 ) || "*";
        }
        list = structure[ dataType ] = structure[ dataType ] || [];
        // then we add to the structure accordingly
        list[ placeBefore ? "unshift" : "push" ]( func );
      }
    }
  };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
    dataType /* internal */, inspected /* internal */ ) {

  dataType = dataType || options.dataTypes[ 0 ];
  inspected = inspected || {};

  inspected[ dataType ] = true;

  var selection,
    list = structure[ dataType ],
    i = 0,
    length = list ? list.length : 0,
    executeOnly = ( structure === prefilters );

  for ( ; i < length && ( executeOnly || !selection ); i++ ) {
    selection = list[ i ]( options, originalOptions, jqXHR );
    // If we got redirected to another dataType
    // we try there if executing only and not done already
    if ( typeof selection === "string" ) {
      if ( !executeOnly || inspected[ selection ] ) {
        selection = undefined;
      } else {
        options.dataTypes.unshift( selection );
        selection = inspectPrefiltersOrTransports(
            structure, options, originalOptions, jqXHR, selection, inspected );
      }
    }
  }
  // If we're only executing or nothing was selected
  // we try the catchall dataType if not done already
  if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
    selection = inspectPrefiltersOrTransports(
        structure, options, originalOptions, jqXHR, "*", inspected );
  }
  // unnecessary when only executing (prefilters)
  // but it'll be ignored by the caller in that case
  return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var key, deep,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};
  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }
}

jQuery.fn.load = function( url, params, callback ) {
  if ( typeof url !== "string" && _load ) {
    return _load.apply( this, arguments );
  }

  // Don't do a request if no elements are being requested
  if ( !this.length ) {
    return this;
  }

  var selector, type, response,
    self = this,
    off = url.indexOf(" ");

  if ( off >= 0 ) {
    selector = url.slice( off, url.length );
    url = url.slice( 0, off );
  }

  // If it's a function
  if ( jQuery.isFunction( params ) ) {

    // We assume that it's the callback
    callback = params;
    params = undefined;

  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }

  // Request the remote document
  jQuery.ajax({
    url: url,

    // if "type" variable is undefined, then "GET" method will be used
    type: type,
    dataType: "html",
    data: params,
    complete: function( jqXHR, status ) {
      if ( callback ) {
        self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
      }
    }
  }).done(function( responseText ) {

    // Save response for use in complete callback
    response = arguments;

    // See if a selector was specified
    self.html( selector ?

      // Create a dummy div to hold the results
      jQuery("<div>")

        // inject the contents of the document in, removing the scripts
        // to avoid any 'Permission Denied' errors in IE
        .append( responseText.replace( rscript, "" ) )

        // Locate the specified elements
        .find( selector ) :

      // If not, just inject the full result
      responseText );

  });

  return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
  jQuery.fn[ o ] = function( f ){
    return this.on( o, f );
  };
});

jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      type: method,
      url: url,
      data: data,
      success: callback,
      dataType: type
    });
  };
});

jQuery.extend({

  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  },

  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  },

  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    if ( settings ) {
      // Building a settings object
      ajaxExtend( target, jQuery.ajaxSettings );
    } else {
      // Extending ajaxSettings
      settings = target;
      target = jQuery.ajaxSettings;
    }
    ajaxExtend( target, settings );
    return target;
  },

  ajaxSettings: {
    url: ajaxLocation,
    isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
    global: true,
    type: "GET",
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    processData: true,
    async: true,
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

    accepts: {
      xml: "application/xml, text/xml",
      html: "text/html",
      text: "text/plain",
      json: "application/json, text/javascript",
      "*": allTypes
    },

    contents: {
      xml: /xml/,
      html: /html/,
      json: /json/
    },

    responseFields: {
      xml: "responseXML",
      text: "responseText"
    },

    // List of data converters
    // 1) key format is "source_type destination_type" (a single space in-between)
    // 2) the catchall symbol "*" can be used for source_type
    converters: {

      // Convert anything to text
      "* text": window.String,

      // Text to html (true = no transformation)
      "text html": true,

      // Evaluate text as a json expression
      "text json": jQuery.parseJSON,

      // Parse text as xml
      "text xml": jQuery.parseXML
    },

    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      context: true,
      url: true
    }
  },

  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),

  // Main method
  ajax: function( url, options ) {

    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }

    // Force options to be an object
    options = options || {};

    var // ifModified key
      ifModifiedKey,
      // Response headers
      responseHeadersString,
      responseHeaders,
      // transport
      transport,
      // timeout handle
      timeoutTimer,
      // Cross-domain detection vars
      parts,
      // To know if global events are to be dispatched
      fireGlobals,
      // Loop variable
      i,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events
      // It's the callbackContext if one was provided in the options
      // and if it's a DOM node or a jQuery collection
      globalEventContext = callbackContext !== s &&
        ( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
            jQuery( callbackContext ) : jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks( "once memory" ),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // The jqXHR state
      state = 0,
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {

        readyState: 0,

        // Caches the header
        setRequestHeader: function( name, value ) {
          if ( !state ) {
            var lname = name.toLowerCase();
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match === undefined ? null : match;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          statusText = statusText || strAbort;
          if ( transport ) {
            transport.abort( statusText );
          }
          done( 0, statusText );
          return this;
        }
      };

    // Callback for when everything is done
    // It is defined here because jslint complains if it is declared
    // at the end of the function (which would be more logical and readable)
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;

      // Called once
      if ( state === 2 ) {
        return;
      }

      // State is "done" now
      state = 2;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;

      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }

      // If successful, handle type chaining
      if ( status >= 200 && status < 300 || status === 304 ) {

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {

          modified = jqXHR.getResponseHeader("Last-Modified");
          if ( modified ) {
            jQuery.lastModified[ ifModifiedKey ] = modified;
          }
          modified = jqXHR.getResponseHeader("Etag");
          if ( modified ) {
            jQuery.etag[ ifModifiedKey ] = modified;
          }
        }

        // If not modified
        if ( status === 304 ) {

          statusText = "notmodified";
          isSuccess = true;

        // If we have data
        } else {

          isSuccess = ajaxConvert( s, response );
          statusText = isSuccess.state;
          success = isSuccess.data;
          error = isSuccess.error;
          isSuccess = !error;
        }
      } else {
        // We extract error from statusText
        // then normalize statusText and status for non-aborts
        error = statusText;
        if ( !statusText || status ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";

      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }

      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
            [ jqXHR, s, isSuccess ? success : error ] );
      }

      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger( "ajaxStop" );
        }
      }
    }

    // Attach deferreds
    deferred.promise( jqXHR );
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;
    jqXHR.complete = completeDeferred.add;

    // Status-dependent callbacks
    jqXHR.statusCode = function( map ) {
      if ( map ) {
        var tmp;
        if ( state < 2 ) {
          for ( tmp in map ) {
            statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
          }
        } else {
          tmp = map[ jqXHR.status ];
          jqXHR.always( tmp );
        }
      }
      return this;
    };

    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
    // We also use the url parameter if available
    s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

    // Extract dataTypes list
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );

    // A cross-domain request is in order when we have a protocol:host:port mismatch
    if ( s.crossDomain == null ) {
      parts = rurl.exec( s.url.toLowerCase() );
      s.crossDomain = !!( parts &&
        ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
          ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
      );
    }

    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }

    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    // If request was aborted inside a prefilter, stop there
    if ( state === 2 ) {
      return jqXHR;
    }

    // We can fire global events as of now if asked to
    fireGlobals = s.global;

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );

    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger( "ajaxStart" );
    }

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // If data is available, append data to url
      if ( s.data ) {
        s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }

      // Get ifModifiedKey before adding the anti-cache parameter
      ifModifiedKey = s.url;

      // Add anti-cache in url if needed
      if ( s.cache === false ) {

        var ts = jQuery.now(),
          // try replacing _= if it is there
          ret = s.url.replace( rts, "$1_=" + ts );

        // if nothing was replaced, add timestamp to the end
        s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      ifModifiedKey = ifModifiedKey || s.url;
      if ( jQuery.lastModified[ ifModifiedKey ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
      }
      if ( jQuery.etag[ ifModifiedKey ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
      }
    }

    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );

    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }

    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
        // Abort if not done already and return
        return jqXHR.abort();

    }

    // aborting is no longer a cancellation
    strAbort = "abort";

    // Install callbacks on deferreds
    for ( i in { success: 1, error: 1, complete: 1 } ) {
      jqXHR[ i ]( s[ i ] );
    }

    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;
      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = setTimeout( function(){
          jqXHR.abort( "timeout" );
        }, s.timeout );
      }

      try {
        state = 1;
        transport.send( requestHeaders, done );
      } catch (e) {
        // Propagate exception as error if not done
        if ( state < 2 ) {
          done( -1, e );
        // Simply rethrow otherwise
        } else {
          throw e;
        }
      }
    }

    return jqXHR;
  },

  // Counter for holding the number of active queries
  active: 0,

  // Last-Modified header cache for next request
  lastModified: {},
  etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

  var ct, type, finalDataType, firstDataType,
    contents = s.contents,
    dataTypes = s.dataTypes,
    responseFields = s.responseFields;

  // Fill responseXXX fields
  for ( type in responseFields ) {
    if ( type in responses ) {
      jqXHR[ responseFields[type] ] = responses[ type ];
    }
  }

  // Remove auto dataType and get content-type in the process
  while( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
    }
  }

  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }

  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }

  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

  var conv, conv2, current, tmp,
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(),
    prev = dataTypes[ 0 ],
    converters = {},
    i = 0;

  // Apply the dataFilter if provided
  if ( s.dataFilter ) {
    response = s.dataFilter( response, s.dataType );
  }

  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }

  // Convert to each sequential dataType, tolerating list modification
  for ( ; (current = dataTypes[++i]); ) {

    // There's only work to do if current dataType is non-auto
    if ( current !== "*" ) {

      // Convert response if prev dataType is non-auto and differs from current
      if ( prev !== "*" && prev !== current ) {

        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {

            // If conv2 outputs current
            tmp = conv2.split(" ");
            if ( tmp[ 1 ] === current ) {

              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];

                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.splice( i--, 0, current );
                }

                break;
              }
            }
          }
        }

        // Apply converter (if not an equivalence)
        if ( conv !== true ) {

          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s["throws"] ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
            }
          }
        }
      }

      // Update prev for next iteration
      prev = current;
    }
  }

  return { state: "success", data: response };
}
var oldCallbacks = [],
  rquestion = /\?/,
  rjsonp = /(=)\?(?=&|$)|\?\?/,
  nonce = jQuery.now();

// Default jsonp settings
jQuery.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  var callbackName, overwritten, responseContainer,
    data = s.data,
    url = s.url,
    hasCallback = s.jsonp !== false,
    replaceInUrl = hasCallback && rjsonp.test( url ),
    replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&
      !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&
      rjsonp.test( data );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {

    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;
    overwritten = window[ callbackName ];

    // Insert callback into url or form data
    if ( replaceInUrl ) {
      s.url = url.replace( rjsonp, "$1" + callbackName );
    } else if ( replaceInData ) {
      s.data = data.replace( rjsonp, "$1" + callbackName );
    } else if ( hasCallback ) {
      s.url += ( rquestion.test( url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }

    // Use data converter to retrieve json after script execution
    s.converters["script json"] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };

    // force json dataType
    s.dataTypes[ 0 ] = "json";

    // Install callback
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };

    // Clean-up function (fires after converters)
    jqXHR.always(function() {
      // Restore preexisting value
      window[ callbackName ] = overwritten;

      // Save back as free
      if ( s[ callbackName ] ) {
        // make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;

        // save the callback name for future use
        oldCallbacks.push( callbackName );
      }

      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }

      responseContainer = overwritten = undefined;
    });

    // Delegate to script
    return "script";
  }
});
// Install script dataType
jQuery.ajaxSetup({
  accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /javascript|ecmascript/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
    s.global = false;
  }
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {

    var script,
      head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

    return {

      send: function( _, callback ) {

        script = document.createElement( "script" );

        script.async = "async";

        if ( s.scriptCharset ) {
          script.charset = s.scriptCharset;
        }

        script.src = s.url;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function( _, isAbort ) {

          if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            // Remove the script
            if ( head && script.parentNode ) {
              head.removeChild( script );
            }

            // Dereference the script
            script = undefined;

            // Callback if not abort
            if ( !isAbort ) {
              callback( 200, "success" );
            }
          }
        };
        // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
        // This arises when a base node is used (#2709 and #4378).
        head.insertBefore( script, head.firstChild );
      },

      abort: function() {
        if ( script ) {
          script.onload( 0, 1 );
        }
      }
    };
  }
});
var xhrCallbacks,
  // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = window.ActiveXObject ? function() {
    // Abort all pending requests
    for ( var key in xhrCallbacks ) {
      xhrCallbacks[ key ]( 0, 1 );
    }
  } : false,
  xhrId = 0;

// Functions to create xhrs
function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch( e ) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject( "Microsoft.XMLHTTP" );
  } catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function() {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } :
  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;

// Determine support properties
(function( xhr ) {
  jQuery.extend( jQuery.support, {
    ajax: !!xhr,
    cors: !!xhr && ( "withCredentials" in xhr )
  });
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

  jQuery.ajaxTransport(function( s ) {
    // Cross domain only allowed if supported through XMLHttpRequest
    if ( !s.crossDomain || jQuery.support.cors ) {

      var callback;

      return {
        send: function( headers, complete ) {

          // Get a new xhr
          var handle, i,
            xhr = s.xhr();

          // Open the socket
          // Passing null username, generates a login popup on Opera (#2865)
          if ( s.username ) {
            xhr.open( s.type, s.url, s.async, s.username, s.password );
          } else {
            xhr.open( s.type, s.url, s.async );
          }

          // Apply custom fields if provided
          if ( s.xhrFields ) {
            for ( i in s.xhrFields ) {
              xhr[ i ] = s.xhrFields[ i ];
            }
          }

          // Override mime type if needed
          if ( s.mimeType && xhr.overrideMimeType ) {
            xhr.overrideMimeType( s.mimeType );
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
            headers[ "X-Requested-With" ] = "XMLHttpRequest";
          }

          // Need an extra try/catch for cross domain requests in Firefox 3
          try {
            for ( i in headers ) {
              xhr.setRequestHeader( i, headers[ i ] );
            }
          } catch( _ ) {}

          // Do send the request
          // This may raise an exception which is actually
          // handled in jQuery.ajax (so no try/catch here)
          xhr.send( ( s.hasContent && s.data ) || null );

          // Listener
          callback = function( _, isAbort ) {

            var status,
              statusText,
              responseHeaders,
              responses,
              xml;

            // Firefox throws exceptions when accessing properties
            // of an xhr when a network error occurred
            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
            try {

              // Was never called and is aborted or complete
              if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                // Only called once
                callback = undefined;

                // Do not keep as active anymore
                if ( handle ) {
                  xhr.onreadystatechange = jQuery.noop;
                  if ( xhrOnUnloadAbort ) {
                    delete xhrCallbacks[ handle ];
                  }
                }

                // If it's an abort
                if ( isAbort ) {
                  // Abort it manually if needed
                  if ( xhr.readyState !== 4 ) {
                    xhr.abort();
                  }
                } else {
                  status = xhr.status;
                  responseHeaders = xhr.getAllResponseHeaders();
                  responses = {};
                  xml = xhr.responseXML;

                  // Construct response list
                  if ( xml && xml.documentElement /* #4958 */ ) {
                    responses.xml = xml;
                  }

                  // When requesting binary data, IE6-9 will throw an exception
                  // on any attempt to access responseText (#11426)
                  try {
                    responses.text = xhr.responseText;
                  } catch( e ) {
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch( e ) {
                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if ( !status && s.isLocal && !s.crossDomain ) {
                    status = responses.text ? 200 : 404;
                  // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if ( status === 1223 ) {
                    status = 204;
                  }
                }
              }
            } catch( firefoxAccessException ) {
              if ( !isAbort ) {
                complete( -1, firefoxAccessException );
              }
            }

            // Call complete if needed
            if ( responses ) {
              complete( status, statusText, responses, responseHeaders );
            }
          };

          if ( !s.async ) {
            // if we're in sync mode we fire the callback
            callback();
          } else if ( xhr.readyState === 4 ) {
            // (IE6 & IE7) if it's in cache and has been
            // retrieved directly we need to fire the callback
            setTimeout( callback, 0 );
          } else {
            handle = ++xhrId;
            if ( xhrOnUnloadAbort ) {
              // Create the active xhrs callbacks list if needed
              // and attach the unload handler
              if ( !xhrCallbacks ) {
                xhrCallbacks = {};
                jQuery( window ).unload( xhrOnUnloadAbort );
              }
              // Add to list of active xhrs callbacks
              xhrCallbacks[ handle ] = callback;
            }
            xhr.onreadystatechange = callback;
          }
        },

        abort: function() {
          if ( callback ) {
            callback(0,1);
          }
        }
      };
    }
  });
}
var fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rfxnum = new RegExp( "^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
  rrun = /queueHooks$/,
  animationPrefilters = [ defaultPrefilter ],
  tweeners = {
    "*": [function( prop, value ) {
      var end, unit,
        tween = this.createTween( prop, value ),
        parts = rfxnum.exec( value ),
        target = tween.cur(),
        start = +target || 0,
        scale = 1,
        maxIterations = 20;

      if ( parts ) {
        end = +parts[2];
        unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

        // We need to compute starting value
        if ( unit !== "px" && start ) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = jQuery.css( tween.elem, prop, true ) || end || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            start = start / scale;
            jQuery.style( tween.elem, prop, start + unit );

          // Update scale, tolerating zero or NaN from tween.cur()
          // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
        }

        tween.unit = unit;
        tween.start = start;
        // If a +=/-= token was provided, we're doing a relative animation
        tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
      }
      return tween;
    }]
  };

// Animations created synchronously will run synchronously
function createFxNow() {
  setTimeout(function() {
    fxNow = undefined;
  }, 0 );
  return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
  jQuery.each( props, function( prop, value ) {
    var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
      index = 0,
      length = collection.length;
    for ( ; index < length; index++ ) {
      if ( collection[ index ].call( animation, prop, value ) ) {

        // we're done with this property
        return;
      }
    }
  });
}

function Animation( elem, properties, options ) {
  var result,
    index = 0,
    tweenerIndex = 0,
    length = animationPrefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // don't match elem in the :animated selector
      delete tick.elem;
    }),
    tick = function() {
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;

      for ( ; index < length ; index++ ) {
        animation.tweens[ index ].run( percent );
      }

      deferred.notifyWith( elem, [ animation, percent, remaining ]);

      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise({
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, { specialEasing: {} }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end, easing ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // if we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;

        for ( ; index < length ; index++ ) {
          animation.tweens[ index ].run( 1 );
        }

        // resolve when we played the last frame
        // otherwise, reject
        if ( gotoEnd ) {
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    }),
    props = animation.props;

  propFilter( props, animation.opts.specialEasing );

  for ( ; index < length ; index++ ) {
    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      return result;
    }
  }

  createTweens( animation, props );

  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }

  jQuery.fx.timer(
    jQuery.extend( tick, {
      anim: animation,
      queue: animation.opts.queue,
      elem: elem
    })
  );

  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
  var index, name, easing, value, hooks;

  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }

    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }

    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];

      // not quite $.extend, this wont overwrite keys already present.
      // also - reusing 'index' from above because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}

jQuery.Animation = jQuery.extend( Animation, {

  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.split(" ");
    }

    var prop,
      index = 0,
      length = props.length;

    for ( ; index < length ; index++ ) {
      prop = props[ index ];
      tweeners[ prop ] = tweeners[ prop ] || [];
      tweeners[ prop ].unshift( callback );
    }
  },

  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      animationPrefilters.unshift( callback );
    } else {
      animationPrefilters.push( callback );
    }
  }
});

function defaultPrefilter( elem, props, opts ) {
  var index, prop, value, length, dataShow, toggle, tween, hooks, oldfire,
    anim = this,
    style = elem.style,
    orig = {},
    handled = [],
    hidden = elem.nodeType && isHidden( elem );

  // handle queue: false promises
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;

    anim.always(function() {
      // doing this makes sure that the complete handler will be called
      // before this completes
      anim.always(function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      });
    });
  }

  // height/width overflow pass
  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    // Make sure that nothing sneaks out
    // Record all 3 overflow attributes because IE does not
    // change the overflow attribute when overflowX and
    // overflowY are set to the same value
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    // Set display property to inline-block for height/width
    // animations on inline elements that are having width/height animated
    if ( jQuery.css( elem, "display" ) === "inline" &&
        jQuery.css( elem, "float" ) === "none" ) {

      // inline-level elements accept inline-block;
      // block-level elements need to be inline with layout
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
        style.display = "inline-block";

      } else {
        style.zoom = 1;
      }
    }
  }

  if ( opts.overflow ) {
    style.overflow = "hidden";
    if ( !jQuery.support.shrinkWrapBlocks ) {
      anim.done(function() {
        style.overflow = opts.overflow[ 0 ];
        style.overflowX = opts.overflow[ 1 ];
        style.overflowY = opts.overflow[ 2 ];
      });
    }
  }


  // show/hide pass
  for ( index in props ) {
    value = props[ index ];
    if ( rfxtypes.exec( value ) ) {
      delete props[ index ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        continue;
      }
      handled.push( index );
    }
  }

  length = handled.length;
  if ( length ) {
    dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
    if ( "hidden" in dataShow ) {
      hidden = dataShow.hidden;
    }

    // store state if its toggle - enables .stop().toggle() to "reverse"
    if ( toggle ) {
      dataShow.hidden = !hidden;
    }
    if ( hidden ) {
      jQuery( elem ).show();
    } else {
      anim.done(function() {
        jQuery( elem ).hide();
      });
    }
    anim.done(function() {
      var prop;
      jQuery.removeData( elem, "fxshow", true );
      for ( prop in orig ) {
        jQuery.style( elem, prop, orig[ prop ] );
      }
    });
    for ( index = 0 ; index < length ; index++ ) {
      prop = handled[ index ];
      tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
      orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

      if ( !( prop in dataShow ) ) {
        dataShow[ prop ] = tween.start;
        if ( hidden ) {
          tween.end = tween.start;
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
        }
      }
    }
  }
}

function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || "swing";
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];

    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];

    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;

    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }

    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;

      if ( tween.elem[ tween.prop ] != null &&
        (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
        return tween.elem[ tween.prop ];
      }

      // passing any value as a 4th parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails
      // so, simple values such as "10px" are parsed to Float.
      // complex values such as "rotate(1rad)" are returned as is.
      result = jQuery.css( tween.elem, tween.prop, false, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // use step hook for back compat - use cssHook if its there - use .style if its
      // available and use plain properties where available
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ||
      // special check for .toggle( handler, handler, ... )
      ( !i && jQuery.isFunction( speed ) && jQuery.isFunction( easing ) ) ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
});

jQuery.fn.extend({
  fadeTo: function( speed, to, easing, callback ) {

    // show any hidden elements after setting opacity to 0
    return this.filter( isHidden ).css( "opacity", 0 ).show()

      // animate to the value specified
      .end().animate({ opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );

        // Empty animations resolve immediately
        if ( empty ) {
          anim.stop( true );
        }
      };

    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };

    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }

    return this.each(function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = jQuery._data( this );

      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }

      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }

      // start the next in the queue if the last step wasn't forced
      // timers currently will call their complete callbacks, which will dequeue
      // but only if they were gotoEnd
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    });
  }
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    attrs = { height: type },
    i = 0;

  // if we include width, step value is 1 to do all cssExpand values,
  // if we don't include width, step value is 2 to skip over Left and Right
  includeWidth = includeWidth? 1 : 0;
  for( ; i < 4 ; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }

  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
  slideDown: genFx("show"),
  slideUp: genFx("hide"),
  slideToggle: genFx("toggle"),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
});

jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };

  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

  // normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }

  // Queueing
  opt.old = opt.complete;

  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }

    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };

  return opt;
};

jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p*Math.PI ) / 2;
  }
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
  var timer,
    timers = jQuery.timers,
    i = 0;

  fxNow = jQuery.now();

  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }

  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
  if ( timer() && jQuery.timers.push( timer ) && !timerId ) {
    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};

jQuery.fx.interval = 13;

jQuery.fx.stop = function() {
  clearInterval( timerId );
  timerId = null;
};

jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.animated = function( elem ) {
    return jQuery.grep(jQuery.timers, function( fn ) {
      return elem === fn.elem;
    }).length;
  };
}
var rroot = /^(?:body|html)$/i;

jQuery.fn.offset = function( options ) {
  if ( arguments.length ) {
    return options === undefined ?
      this :
      this.each(function( i ) {
        jQuery.offset.setOffset( this, options, i );
      });
  }

  var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft,
    box = { top: 0, left: 0 },
    elem = this[ 0 ],
    doc = elem && elem.ownerDocument;

  if ( !doc ) {
    return;
  }

  if ( (body = doc.body) === elem ) {
    return jQuery.offset.bodyOffset( elem );
  }

  docElem = doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if ( !jQuery.contains( docElem, elem ) ) {
    return box;
  }

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if ( typeof elem.getBoundingClientRect !== "undefined" ) {
    box = elem.getBoundingClientRect();
  }
  win = getWindow( doc );
  clientTop  = docElem.clientTop  || body.clientTop  || 0;
  clientLeft = docElem.clientLeft || body.clientLeft || 0;
  scrollTop  = win.pageYOffset || docElem.scrollTop;
  scrollLeft = win.pageXOffset || docElem.scrollLeft;
  return {
    top: box.top  + scrollTop  - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
};

jQuery.offset = {

  bodyOffset: function( body ) {
    var top = body.offsetTop,
      left = body.offsetLeft;

    if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
      top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
      left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
    }

    return { top: top, left: left };
  },

  setOffset: function( elem, options, i ) {
    var position = jQuery.css( elem, "position" );

    // set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }

    var curElem = jQuery( elem ),
      curOffset = curElem.offset(),
      curCSSTop = jQuery.css( elem, "top" ),
      curCSSLeft = jQuery.css( elem, "left" ),
      calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
      props = {}, curPosition = {}, curTop, curLeft;

    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }

    if ( jQuery.isFunction( options ) ) {
      options = options.call( elem, i, curOffset );
    }

    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }

    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};


jQuery.fn.extend({

  position: function() {
    if ( !this[0] ) {
      return;
    }

    var elem = this[0],

    // Get *real* offsetParent
    offsetParent = this.offsetParent(),

    // Get correct offsets
    offset       = this.offset(),
    parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

    // Subtract element margins
    // note: when an element has margin: auto the offsetLeft and marginLeft
    // are the same in Safari causing offset.left to incorrectly be 0
    offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
    offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

    // Add offsetParent borders
    parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
    parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

    // Subtract the two offsets
    return {
      top:  offset.top  - parentOffset.top,
      left: offset.left - parentOffset.left
    };
  },

  offsetParent: function() {
    return this.map(function() {
      var offsetParent = this.offsetParent || document.body;
      while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || document.body;
    });
  }
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
  var top = /Y/.test( prop );

  jQuery.fn[ method ] = function( val ) {
    return jQuery.access( this, function( elem, method, val ) {
      var win = getWindow( elem );

      if ( val === undefined ) {
        return win ? (prop in win) ? win[ prop ] :
          win.document.documentElement[ method ] :
          elem[ method ];
      }

      if ( win ) {
        win.scrollTo(
          !top ? val : jQuery( win ).scrollLeft(),
           top ? val : jQuery( win ).scrollTop()
        );

      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length, null );
  };
});

function getWindow( elem ) {
  return jQuery.isWindow( elem ) ?
    elem :
    elem.nodeType === 9 ?
      elem.defaultView || elem.parentWindow :
      false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
    // margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

      return jQuery.access( this, function( elem, type, value ) {
        var doc;

        if ( jQuery.isWindow( elem ) ) {
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
          // isn't a whole lot we can do. See pull request at this URL for discussion:
          // https://github.com/jquery/jquery/pull/764
          return elem.document.documentElement[ "client" + name ];
        }

        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;

          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
          // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }

        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, value, extra ) :

          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable, null );
    };
  });
});
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
  define( "jquery", [], function () { return jQuery; } );
}

})( window );





/*! jQuery UI - v1.9.2 - 2012-11-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */

(function( $, undefined ) {

var uuid = 0,
  runiqueId = /^ui-id-\d+$/;

// prevent duplicate loading
// this is only a problem because we proxy existing functions
// and we don't want to double proxy them
$.ui = $.ui || {};
if ( $.ui.version ) {
  return;
}

$.extend( $.ui, {
  version: "1.9.2",

  keyCode: {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    NUMPAD_ADD: 107,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    NUMPAD_ENTER: 108,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_SUBTRACT: 109,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }
});

// plugins
$.fn.extend({
  _focus: $.fn.focus,
  focus: function( delay, fn ) {
    return typeof delay === "number" ?
      this.each(function() {
        var elem = this;
        setTimeout(function() {
          $( elem ).focus();
          if ( fn ) {
            fn.call( elem );
          }
        }, delay );
      }) :
      this._focus.apply( this, arguments );
  },

  scrollParent: function() {
    var scrollParent;
    if (($.ui.ie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
      scrollParent = this.parents().filter(function() {
        return (/(relative|absolute|fixed)/).test($.css(this,'position')) && (/(auto|scroll)/).test($.css(this,'overflow')+$.css(this,'overflow-y')+$.css(this,'overflow-x'));
      }).eq(0);
    } else {
      scrollParent = this.parents().filter(function() {
        return (/(auto|scroll)/).test($.css(this,'overflow')+$.css(this,'overflow-y')+$.css(this,'overflow-x'));
      }).eq(0);
    }

    return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
  },

  zIndex: function( zIndex ) {
    if ( zIndex !== undefined ) {
      return this.css( "zIndex", zIndex );
    }

    if ( this.length ) {
      var elem = $( this[ 0 ] ), position, value;
      while ( elem.length && elem[ 0 ] !== document ) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = elem.css( "position" );
        if ( position === "absolute" || position === "relative" || position === "fixed" ) {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt( elem.css( "zIndex" ), 10 );
          if ( !isNaN( value ) && value !== 0 ) {
            return value;
          }
        }
        elem = elem.parent();
      }
    }

    return 0;
  },

  uniqueId: function() {
    return this.each(function() {
      if ( !this.id ) {
        this.id = "ui-id-" + (++uuid);
      }
    });
  },

  removeUniqueId: function() {
    return this.each(function() {
      if ( runiqueId.test( this.id ) ) {
        $( this ).removeAttr( "id" );
      }
    });
  }
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
  var map, mapName, img,
    nodeName = element.nodeName.toLowerCase();
  if ( "area" === nodeName ) {
    map = element.parentNode;
    mapName = map.name;
    if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
      return false;
    }
    img = $( "img[usemap=#" + mapName + "]" )[0];
    return !!img && visible( img );
  }
  return ( /input|select|textarea|button|object/.test( nodeName ) ?
    !element.disabled :
    "a" === nodeName ?
      element.href || isTabIndexNotNaN :
      isTabIndexNotNaN) &&
    // the element and all of its ancestors must be visible
    visible( element );
}

function visible( element ) {
  return $.expr.filters.visible( element ) &&
    !$( element ).parents().andSelf().filter(function() {
      return $.css( this, "visibility" ) === "hidden";
    }).length;
}

$.extend( $.expr[ ":" ], {
  data: $.expr.createPseudo ?
    $.expr.createPseudo(function( dataName ) {
      return function( elem ) {
        return !!$.data( elem, dataName );
      };
    }) :
    // support: jQuery <1.8
    function( elem, i, match ) {
      return !!$.data( elem, match[ 3 ] );
    },

  focusable: function( element ) {
    return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
  },

  tabbable: function( element ) {
    var tabIndex = $.attr( element, "tabindex" ),
      isTabIndexNaN = isNaN( tabIndex );
    return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
  }
});

// support
$(function() {
  var body = document.body,
    div = body.appendChild( div = document.createElement( "div" ) );

  // access offsetHeight before setting the style to prevent a layout bug
  // in IE 9 which causes the element to continue to take up space even
  // after it is removed from the DOM (#8026)
  div.offsetHeight;

  $.extend( div.style, {
    minHeight: "100px",
    height: "auto",
    padding: 0,
    borderWidth: 0
  });

  $.support.minHeight = div.offsetHeight === 100;
  $.support.selectstart = "onselectstart" in div;

  // set display to none to avoid a layout bug in IE
  // http://dev.jquery.com/ticket/4014
  body.removeChild( div ).style.display = "none";
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
  $.each( [ "Width", "Height" ], function( i, name ) {
    var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
      type = name.toLowerCase(),
      orig = {
        innerWidth: $.fn.innerWidth,
        innerHeight: $.fn.innerHeight,
        outerWidth: $.fn.outerWidth,
        outerHeight: $.fn.outerHeight
      };

    function reduce( elem, size, border, margin ) {
      $.each( side, function() {
        size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
        if ( border ) {
          size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
        }
        if ( margin ) {
          size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
        }
      });
      return size;
    }

    $.fn[ "inner" + name ] = function( size ) {
      if ( size === undefined ) {
        return orig[ "inner" + name ].call( this );
      }

      return this.each(function() {
        $( this ).css( type, reduce( this, size ) + "px" );
      });
    };

    $.fn[ "outer" + name] = function( size, margin ) {
      if ( typeof size !== "number" ) {
        return orig[ "outer" + name ].call( this, size );
      }

      return this.each(function() {
        $( this).css( type, reduce( this, size, true, margin ) + "px" );
      });
    };
  });
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
  $.fn.removeData = (function( removeData ) {
    return function( key ) {
      if ( arguments.length ) {
        return removeData.call( this, $.camelCase( key ) );
      } else {
        return removeData.call( this );
      }
    };
  })( $.fn.removeData );
}





// deprecated

(function() {
  var uaMatch = /msie ([\w.]+)/.exec( navigator.userAgent.toLowerCase() ) || [];
  $.ui.ie = uaMatch.length ? true : false;
  $.ui.ie6 = parseFloat( uaMatch[ 1 ], 10 ) === 6;
})();

$.fn.extend({
  disableSelection: function() {
    return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
      ".ui-disableSelection", function( event ) {
        event.preventDefault();
      });
  },

  enableSelection: function() {
    return this.unbind( ".ui-disableSelection" );
  }
});

$.extend( $.ui, {
  // $.ui.plugin is deprecated.  Use the proxy pattern instead.
  plugin: {
    add: function( module, option, set ) {
      var i,
        proto = $.ui[ module ].prototype;
      for ( i in set ) {
        proto.plugins[ i ] = proto.plugins[ i ] || [];
        proto.plugins[ i ].push( [ option, set[ i ] ] );
      }
    },
    call: function( instance, name, args ) {
      var i,
        set = instance.plugins[ name ];
      if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
        return;
      }

      for ( i = 0; i < set.length; i++ ) {
        if ( instance.options[ set[ i ][ 0 ] ] ) {
          set[ i ][ 1 ].apply( instance.element, args );
        }
      }
    }
  },

  contains: $.contains,

  // only used by resizable
  hasScroll: function( el, a ) {

    //If overflow is hidden, the element might have extra content, but the user wants to hide it
    if ( $( el ).css( "overflow" ) === "hidden") {
      return false;
    }

    var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
      has = false;

    if ( el[ scroll ] > 0 ) {
      return true;
    }

    // TODO: determine which cases actually cause this to happen
    // if the element doesn't have the scroll set, see if it's possible to
    // set the scroll
    el[ scroll ] = 1;
    has = ( el[ scroll ] > 0 );
    el[ scroll ] = 0;
    return has;
  },

  // these are odd functions, fix the API or move into individual plugins
  isOverAxis: function( x, reference, size ) {
    //Determines when x coordinate is over "b" element axis
    return ( x > reference ) && ( x < ( reference + size ) );
  },
  isOver: function( y, x, top, left, height, width ) {
    //Determines when x, y coordinates is over "b" element
    return $.ui.isOverAxis( y, top, height ) && $.ui.isOverAxis( x, left, width );
  }
});

})( jQuery );

(function( $, undefined ) {

var uuid = 0,
  slice = Array.prototype.slice,
  _cleanData = $.cleanData;
$.cleanData = function( elems ) {
  for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
    try {
      $( elem ).triggerHandler( "remove" );
    // http://bugs.jquery.com/ticket/8235
    } catch( e ) {}
  }
  _cleanData( elems );
};

$.widget = function( name, base, prototype ) {
  var fullName, existingConstructor, constructor, basePrototype,
    namespace = name.split( "." )[ 0 ];

  name = name.split( "." )[ 1 ];
  fullName = namespace + "-" + name;

  if ( !prototype ) {
    prototype = base;
    base = $.Widget;
  }

  // create selector for plugin
  $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
    return !!$.data( elem, fullName );
  };

  $[ namespace ] = $[ namespace ] || {};
  existingConstructor = $[ namespace ][ name ];
  constructor = $[ namespace ][ name ] = function( options, element ) {
    // allow instantiation without "new" keyword
    if ( !this._createWidget ) {
      return new constructor( options, element );
    }

    // allow instantiation without initializing for simple inheritance
    // must use "new" keyword (the code above always passes args)
    if ( arguments.length ) {
      this._createWidget( options, element );
    }
  };
  // extend with the existing constructor to carry over any static properties
  $.extend( constructor, existingConstructor, {
    version: prototype.version,
    // copy the object used to create the prototype in case we need to
    // redefine the widget later
    _proto: $.extend( {}, prototype ),
    // track widgets that inherit from this widget in case this widget is
    // redefined after a widget inherits from it
    _childConstructors: []
  });

  basePrototype = new base();
  // we need to make the options hash a property directly on the new instance
  // otherwise we'll modify the options hash on the prototype that we're
  // inheriting from
  basePrototype.options = $.widget.extend( {}, basePrototype.options );
  $.each( prototype, function( prop, value ) {
    if ( $.isFunction( value ) ) {
      prototype[ prop ] = (function() {
        var _super = function() {
            return base.prototype[ prop ].apply( this, arguments );
          },
          _superApply = function( args ) {
            return base.prototype[ prop ].apply( this, args );
          };
        return function() {
          var __super = this._super,
            __superApply = this._superApply,
            returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      })();
    }
  });
  constructor.prototype = $.widget.extend( basePrototype, {
    // TODO: remove support for widgetEventPrefix
    // always use the name + a colon as the prefix, e.g., draggable:start
    // don't prefix for widgets that aren't DOM-based
    widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
  }, prototype, {
    constructor: constructor,
    namespace: namespace,
    widgetName: name,
    // TODO remove widgetBaseClass, see #8155
    widgetBaseClass: fullName,
    widgetFullName: fullName
  });

  // If this widget is being redefined then we need to find all widgets that
  // are inheriting from it and redefine all of them so that they inherit from
  // the new version of this widget. We're essentially trying to replace one
  // level in the prototype chain.
  if ( existingConstructor ) {
    $.each( existingConstructor._childConstructors, function( i, child ) {
      var childPrototype = child.prototype;

      // redefine the child widget using the same prototype that was
      // originally used, but inherit from the new version of the base
      $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
    });
    // remove the list of existing child constructors from the old constructor
    // so the old child constructors can be garbage collected
    delete existingConstructor._childConstructors;
  } else {
    base._childConstructors.push( constructor );
  }

  $.widget.bridge( name, constructor );
};

$.widget.extend = function( target ) {
  var input = slice.call( arguments, 1 ),
    inputIndex = 0,
    inputLength = input.length,
    key,
    value;
  for ( ; inputIndex < inputLength; inputIndex++ ) {
    for ( key in input[ inputIndex ] ) {
      value = input[ inputIndex ][ key ];
      if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
        // Clone objects
        if ( $.isPlainObject( value ) ) {
          target[ key ] = $.isPlainObject( target[ key ] ) ?
            $.widget.extend( {}, target[ key ], value ) :
            // Don't extend strings, arrays, etc. with objects
            $.widget.extend( {}, value );
        // Copy everything else by reference
        } else {
          target[ key ] = value;
        }
      }
    }
  }
  return target;
};

$.widget.bridge = function( name, object ) {
  var fullName = object.prototype.widgetFullName || name;
  $.fn[ name ] = function( options ) {
    var isMethodCall = typeof options === "string",
      args = slice.call( arguments, 1 ),
      returnValue = this;

    // allow multiple hashes to be passed on init
    options = !isMethodCall && args.length ?
      $.widget.extend.apply( null, [ options ].concat(args) ) :
      options;

    if ( isMethodCall ) {
      this.each(function() {
        var methodValue,
          instance = $.data( this, fullName );
        if ( !instance ) {
          return $.error( "cannot call methods on " + name + " prior to initialization; " +
            "attempted to call method '" + options + "'" );
        }
        if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
          return $.error( "no such method '" + options + "' for " + name + " widget instance" );
        }
        methodValue = instance[ options ].apply( instance, args );
        if ( methodValue !== instance && methodValue !== undefined ) {
          returnValue = methodValue && methodValue.jquery ?
            returnValue.pushStack( methodValue.get() ) :
            methodValue;
          return false;
        }
      });
    } else {
      this.each(function() {
        var instance = $.data( this, fullName );
        if ( instance ) {
          instance.option( options || {} )._init();
        } else {
          $.data( this, fullName, new object( options, this ) );
        }
      });
    }

    return returnValue;
  };
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
  widgetName: "widget",
  widgetEventPrefix: "",
  defaultElement: "<div>",
  options: {
    disabled: false,

    // callbacks
    create: null
  },
  _createWidget: function( options, element ) {
    element = $( element || this.defaultElement || this )[ 0 ];
    this.element = $( element );
    this.uuid = uuid++;
    this.eventNamespace = "." + this.widgetName + this.uuid;
    this.options = $.widget.extend( {},
      this.options,
      this._getCreateOptions(),
      options );

    this.bindings = $();
    this.hoverable = $();
    this.focusable = $();

    if ( element !== this ) {
      // 1.9 BC for #7810
      // TODO remove dual storage
      $.data( element, this.widgetName, this );
      $.data( element, this.widgetFullName, this );
      this._on( true, this.element, {
        remove: function( event ) {
          if ( event.target === element ) {
            this.destroy();
          }
        }
      });
      this.document = $( element.style ?
        // element within the document
        element.ownerDocument :
        // element is window or document
        element.document || element );
      this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
    }

    this._create();
    this._trigger( "create", null, this._getCreateEventData() );
    this._init();
  },
  _getCreateOptions: $.noop,
  _getCreateEventData: $.noop,
  _create: $.noop,
  _init: $.noop,

  destroy: function() {
    this._destroy();
    // we can probably remove the unbind calls in 2.0
    // all event bindings should go through this._on()
    this.element
      .unbind( this.eventNamespace )
      // 1.9 BC for #7810
      // TODO remove dual storage
      .removeData( this.widgetName )
      .removeData( this.widgetFullName )
      // support: jquery <1.6.3
      // http://bugs.jquery.com/ticket/9413
      .removeData( $.camelCase( this.widgetFullName ) );
    this.widget()
      .unbind( this.eventNamespace )
      .removeAttr( "aria-disabled" )
      .removeClass(
        this.widgetFullName + "-disabled " +
        "ui-state-disabled" );

    // clean up events and states
    this.bindings.unbind( this.eventNamespace );
    this.hoverable.removeClass( "ui-state-hover" );
    this.focusable.removeClass( "ui-state-focus" );
  },
  _destroy: $.noop,

  widget: function() {
    return this.element;
  },

  option: function( key, value ) {
    var options = key,
      parts,
      curOption,
      i;

    if ( arguments.length === 0 ) {
      // don't return a reference to the internal hash
      return $.widget.extend( {}, this.options );
    }

    if ( typeof key === "string" ) {
      // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split( "." );
      key = parts.shift();
      if ( parts.length ) {
        curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
        for ( i = 0; i < parts.length - 1; i++ ) {
          curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
          curOption = curOption[ parts[ i ] ];
        }
        key = parts.pop();
        if ( value === undefined ) {
          return curOption[ key ] === undefined ? null : curOption[ key ];
        }
        curOption[ key ] = value;
      } else {
        if ( value === undefined ) {
          return this.options[ key ] === undefined ? null : this.options[ key ];
        }
        options[ key ] = value;
      }
    }

    this._setOptions( options );

    return this;
  },
  _setOptions: function( options ) {
    var key;

    for ( key in options ) {
      this._setOption( key, options[ key ] );
    }

    return this;
  },
  _setOption: function( key, value ) {
    this.options[ key ] = value;

    if ( key === "disabled" ) {
      this.widget()
        .toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
        .attr( "aria-disabled", value );
      this.hoverable.removeClass( "ui-state-hover" );
      this.focusable.removeClass( "ui-state-focus" );
    }

    return this;
  },

  enable: function() {
    return this._setOption( "disabled", false );
  },
  disable: function() {
    return this._setOption( "disabled", true );
  },

  _on: function( suppressDisabledCheck, element, handlers ) {
    var delegateElement,
      instance = this;

    // no suppressDisabledCheck flag, shuffle arguments
    if ( typeof suppressDisabledCheck !== "boolean" ) {
      handlers = element;
      element = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }

    // no element argument, shuffle and use this.element
    if ( !handlers ) {
      handlers = element;
      element = this.element;
      delegateElement = this.widget();
    } else {
      // accept selectors, DOM elements
      element = delegateElement = $( element );
      this.bindings = this.bindings.add( element );
    }

    $.each( handlers, function( event, handler ) {
      function handlerProxy() {
        // allow widgets to customize the disabled handling
        // - disabled as an array instead of boolean
        // - disabled class as method for disabling individual parts
        if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
          return;
        }
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }

      // copy the guid so direct unbinding works
      if ( typeof handler !== "string" ) {
        handlerProxy.guid = handler.guid =
          handler.guid || handlerProxy.guid || $.guid++;
      }

      var match = event.match( /^(\w+)\s*(.*)$/ ),
        eventName = match[1] + instance.eventNamespace,
        selector = match[2];
      if ( selector ) {
        delegateElement.delegate( selector, eventName, handlerProxy );
      } else {
        element.bind( eventName, handlerProxy );
      }
    });
  },

  _off: function( element, eventName ) {
    eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
    element.unbind( eventName ).undelegate( eventName );
  },

  _delay: function( handler, delay ) {
    function handlerProxy() {
      return ( typeof handler === "string" ? instance[ handler ] : handler )
        .apply( instance, arguments );
    }
    var instance = this;
    return setTimeout( handlerProxy, delay || 0 );
  },

  _hoverable: function( element ) {
    this.hoverable = this.hoverable.add( element );
    this._on( element, {
      mouseenter: function( event ) {
        $( event.currentTarget ).addClass( "ui-state-hover" );
      },
      mouseleave: function( event ) {
        $( event.currentTarget ).removeClass( "ui-state-hover" );
      }
    });
  },

  _focusable: function( element ) {
    this.focusable = this.focusable.add( element );
    this._on( element, {
      focusin: function( event ) {
        $( event.currentTarget ).addClass( "ui-state-focus" );
      },
      focusout: function( event ) {
        $( event.currentTarget ).removeClass( "ui-state-focus" );
      }
    });
  },

  _trigger: function( type, event, data ) {
    var prop, orig,
      callback = this.options[ type ];

    data = data || {};
    event = $.Event( event );
    event.type = ( type === this.widgetEventPrefix ?
      type :
      this.widgetEventPrefix + type ).toLowerCase();
    // the original event may come from any element
    // so we need to reset the target on the new event
    event.target = this.element[ 0 ];

    // copy original event properties over to the new event
    orig = event.originalEvent;
    if ( orig ) {
      for ( prop in orig ) {
        if ( !( prop in event ) ) {
          event[ prop ] = orig[ prop ];
        }
      }
    }

    this.element.trigger( event, data );
    return !( $.isFunction( callback ) &&
      callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
      event.isDefaultPrevented() );
  }
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
  $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
    if ( typeof options === "string" ) {
      options = { effect: options };
    }
    var hasOptions,
      effectName = !options ?
        method :
        options === true || typeof options === "number" ?
          defaultEffect :
          options.effect || defaultEffect;
    options = options || {};
    if ( typeof options === "number" ) {
      options = { duration: options };
    }
    hasOptions = !$.isEmptyObject( options );
    options.complete = callback;
    if ( options.delay ) {
      element.delay( options.delay );
    }
    if ( hasOptions && $.effects && ( $.effects.effect[ effectName ] || $.uiBackCompat !== false && $.effects[ effectName ] ) ) {
      element[ method ]( options );
    } else if ( effectName !== method && element[ effectName ] ) {
      element[ effectName ]( options.duration, options.easing, callback );
    } else {
      element.queue(function( next ) {
        $( this )[ method ]();
        if ( callback ) {
          callback.call( element[ 0 ] );
        }
        next();
      });
    }
  };
});

// DEPRECATED
if ( $.uiBackCompat !== false ) {
  $.Widget.prototype._getCreateOptions = function() {
    return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
  };
}

})( jQuery );

(function( $, undefined ) {

var mouseHandled = false;
$( document ).mouseup( function( e ) {
  mouseHandled = false;
});

$.widget("ui.mouse", {
  version: "1.9.2",
  options: {
    cancel: 'input,textarea,button,select,option',
    distance: 1,
    delay: 0
  },
  _mouseInit: function() {
    var that = this;

    this.element
      .bind('mousedown.'+this.widgetName, function(event) {
        return that._mouseDown(event);
      })
      .bind('click.'+this.widgetName, function(event) {
        if (true === $.data(event.target, that.widgetName + '.preventClickEvent')) {
          $.removeData(event.target, that.widgetName + '.preventClickEvent');
          event.stopImmediatePropagation();
          return false;
        }
      });

    this.started = false;
  },

  // TODO: make sure destroying one instance of mouse doesn't mess with
  // other instances of mouse
  _mouseDestroy: function() {
    this.element.unbind('.'+this.widgetName);
    if ( this._mouseMoveDelegate ) {
      $(document)
        .unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
        .unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);
    }
  },

  _mouseDown: function(event) {
    // don't let more than one widget handle mouseStart
    if( mouseHandled ) { return; }

    // we may have missed mouseup (out of window)
    (this._mouseStarted && this._mouseUp(event));

    this._mouseDownEvent = event;

    var that = this,
      btnIsLeft = (event.which === 1),
      // event.target.nodeName works around a bug in IE 8 with
      // disabled inputs (#7620)
      elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
    if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
      return true;
    }

    this.mouseDelayMet = !this.options.delay;
    if (!this.mouseDelayMet) {
      this._mouseDelayTimer = setTimeout(function() {
        that.mouseDelayMet = true;
      }, this.options.delay);
    }

    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
      this._mouseStarted = (this._mouseStart(event) !== false);
      if (!this._mouseStarted) {
        event.preventDefault();
        return true;
      }
    }

    // Click event may never have fired (Gecko & Opera)
    if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
      $.removeData(event.target, this.widgetName + '.preventClickEvent');
    }

    // these delegates are required to keep context
    this._mouseMoveDelegate = function(event) {
      return that._mouseMove(event);
    };
    this._mouseUpDelegate = function(event) {
      return that._mouseUp(event);
    };
    $(document)
      .bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
      .bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

    event.preventDefault();

    mouseHandled = true;
    return true;
  },

  _mouseMove: function(event) {
    // IE mouseup check - mouseup happened when mouse was out of window
    if ($.ui.ie && !(document.documentMode >= 9) && !event.button) {
      return this._mouseUp(event);
    }

    if (this._mouseStarted) {
      this._mouseDrag(event);
      return event.preventDefault();
    }

    if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
      this._mouseStarted =
        (this._mouseStart(this._mouseDownEvent, event) !== false);
      (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
    }

    return !this._mouseStarted;
  },

  _mouseUp: function(event) {
    $(document)
      .unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
      .unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

    if (this._mouseStarted) {
      this._mouseStarted = false;

      if (event.target === this._mouseDownEvent.target) {
        $.data(event.target, this.widgetName + '.preventClickEvent', true);
      }

      this._mouseStop(event);
    }

    return false;
  },

  _mouseDistanceMet: function(event) {
    return (Math.max(
        Math.abs(this._mouseDownEvent.pageX - event.pageX),
        Math.abs(this._mouseDownEvent.pageY - event.pageY)
      ) >= this.options.distance
    );
  },

  _mouseDelayMet: function(event) {
    return this.mouseDelayMet;
  },

  // These are placeholder methods, to be overriden by extending plugin
  _mouseStart: function(event) {},
  _mouseDrag: function(event) {},
  _mouseStop: function(event) {},
  _mouseCapture: function(event) { return true; }
});

})(jQuery);

(function( $, undefined ) {

$.widget("ui.draggable", $.ui.mouse, {
  version: "1.9.2",
  widgetEventPrefix: "drag",
  options: {
    addClasses: true,
    appendTo: "parent",
    axis: false,
    connectToSortable: false,
    containment: false,
    cursor: "auto",
    cursorAt: false,
    grid: false,
    handle: false,
    helper: "original",
    iframeFix: false,
    opacity: false,
    refreshPositions: false,
    revert: false,
    revertDuration: 500,
    scope: "default",
    scroll: true,
    scrollSensitivity: 20,
    scrollSpeed: 20,
    snap: false,
    snapMode: "both",
    snapTolerance: 20,
    stack: false,
    zIndex: false
  },
  _create: function() {

    if (this.options.helper == 'original' && !(/^(?:r|a|f)/).test(this.element.css("position")))
      this.element[0].style.position = 'relative';

    (this.options.addClasses && this.element.addClass("ui-draggable"));
    (this.options.disabled && this.element.addClass("ui-draggable-disabled"));

    this._mouseInit();

  },

  _destroy: function() {
    this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
    this._mouseDestroy();
  },

  _mouseCapture: function(event) {

    var o = this.options;

    // among others, prevent a drag on a resizable-handle
    if (this.helper || o.disabled || $(event.target).is('.ui-resizable-handle'))
      return false;

    //Quit if we're not on a valid handle
    this.handle = this._getHandle(event);
    if (!this.handle)
      return false;

    $(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
      $('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>')
      .css({
        width: this.offsetWidth+"px", height: this.offsetHeight+"px",
        position: "absolute", opacity: "0.001", zIndex: 1000
      })
      .css($(this).offset())
      .appendTo("body");
    });

    return true;

  },

  _mouseStart: function(event) {

    var o = this.options;

    //Create and append the visible helper
    this.helper = this._createHelper(event);

    this.helper.addClass("ui-draggable-dragging");

    //Cache the helper size
    this._cacheHelperProportions();

    //If ddmanager is used for droppables, set the global draggable
    if($.ui.ddmanager)
      $.ui.ddmanager.current = this;

    /*
     * - Position generation -
     * This block generates everything position related - it's the core of draggables.
     */

    //Cache the margins of the original element
    this._cacheMargins();

    //Store the helper's css position
    this.cssPosition = this.helper.css("position");
    this.scrollParent = this.helper.scrollParent();

    //The element's absolute position on the page minus margins
    this.offset = this.positionAbs = this.element.offset();
    this.offset = {
      top: this.offset.top - this.margins.top,
      left: this.offset.left - this.margins.left
    };

    $.extend(this.offset, {
      click: { //Where the click happened, relative to the element
        left: event.pageX - this.offset.left,
        top: event.pageY - this.offset.top
      },
      parent: this._getParentOffset(),
      relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
    });

    //Generate the original position
    this.originalPosition = this.position = this._generatePosition(event);
    this.originalPageX = event.pageX;
    this.originalPageY = event.pageY;

    //Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
    (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

    //Set a containment if given in the options
    if(o.containment)
      this._setContainment();

    //Trigger event + callbacks
    if(this._trigger("start", event) === false) {
      this._clear();
      return false;
    }

    //Recache the helper size
    this._cacheHelperProportions();

    //Prepare the droppable offsets
    if ($.ui.ddmanager && !o.dropBehaviour)
      $.ui.ddmanager.prepareOffsets(this, event);


    this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

    //If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
    if ( $.ui.ddmanager ) $.ui.ddmanager.dragStart(this, event);

    return true;
  },

  _mouseDrag: function(event, noPropagation) {

    //Compute the helpers position
    this.position = this._generatePosition(event);
    this.positionAbs = this._convertPositionTo("absolute");

    //Call plugins and callbacks and use the resulting position if something is returned
    if (!noPropagation) {
      var ui = this._uiHash();
      if(this._trigger('drag', event, ui) === false) {
        this._mouseUp({});
        return false;
      }
      this.position = ui.position;
    }

    if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
    if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';
    if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

    return false;
  },

  _mouseStop: function(event) {

    //If we are using droppables, inform the manager about the drop
    var dropped = false;
    if ($.ui.ddmanager && !this.options.dropBehaviour)
      dropped = $.ui.ddmanager.drop(this, event);

    //if a drop comes from outside (a sortable)
    if(this.dropped) {
      dropped = this.dropped;
      this.dropped = false;
    }

    //if the original element is no longer in the DOM don't bother to continue (see #8269)
    var element = this.element[0], elementInDom = false;
    while ( element && (element = element.parentNode) ) {
      if (element == document ) {
        elementInDom = true;
      }
    }
    if ( !elementInDom && this.options.helper === "original" )
      return false;

    if((this.options.revert == "invalid" && !dropped) || (this.options.revert == "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
      var that = this;
      $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        if(that._trigger("stop", event) !== false) {
          that._clear();
        }
      });
    } else {
      if(this._trigger("stop", event) !== false) {
        this._clear();
      }
    }

    return false;
  },

  _mouseUp: function(event) {
    //Remove frame helpers
    $("div.ui-draggable-iframeFix").each(function() {
      this.parentNode.removeChild(this);
    });

    //If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
    if( $.ui.ddmanager ) $.ui.ddmanager.dragStop(this, event);

    return $.ui.mouse.prototype._mouseUp.call(this, event);
  },

  cancel: function() {

    if(this.helper.is(".ui-draggable-dragging")) {
      this._mouseUp({});
    } else {
      this._clear();
    }

    return this;

  },

  _getHandle: function(event) {

    var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;
    $(this.options.handle, this.element)
      .find("*")
      .andSelf()
      .each(function() {
        if(this == event.target) handle = true;
      });

    return handle;

  },

  _createHelper: function(event) {

    var o = this.options;
    var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper == 'clone' ? this.element.clone().removeAttr('id') : this.element);

    if(!helper.parents('body').length)
      helper.appendTo((o.appendTo == 'parent' ? this.element[0].parentNode : o.appendTo));

    if(helper[0] != this.element[0] && !(/(fixed|absolute)/).test(helper.css("position")))
      helper.css("position", "absolute");

    return helper;

  },

  _adjustOffsetFromHelper: function(obj) {
    if (typeof obj == 'string') {
      obj = obj.split(' ');
    }
    if ($.isArray(obj)) {
      obj = {left: +obj[0], top: +obj[1] || 0};
    }
    if ('left' in obj) {
      this.offset.click.left = obj.left + this.margins.left;
    }
    if ('right' in obj) {
      this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
    }
    if ('top' in obj) {
      this.offset.click.top = obj.top + this.margins.top;
    }
    if ('bottom' in obj) {
      this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
    }
  },

  _getParentOffset: function() {

    //Get the offsetParent and cache its position
    this.offsetParent = this.helper.offsetParent();
    var po = this.offsetParent.offset();

    // This is a special case where we need to modify a offset calculated on start, since the following happened:
    // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
    // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
    //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
    if(this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
      po.left += this.scrollParent.scrollLeft();
      po.top += this.scrollParent.scrollTop();
    }

    if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
    || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.ui.ie)) //Ugly IE fix
      po = { top: 0, left: 0 };

    return {
      top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
      left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
    };

  },

  _getRelativeOffset: function() {

    if(this.cssPosition == "relative") {
      var p = this.element.position();
      return {
        top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
        left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
      };
    } else {
      return { top: 0, left: 0 };
    }

  },

  _cacheMargins: function() {
    this.margins = {
      left: (parseInt(this.element.css("marginLeft"),10) || 0),
      top: (parseInt(this.element.css("marginTop"),10) || 0),
      right: (parseInt(this.element.css("marginRight"),10) || 0),
      bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
    };
  },

  _cacheHelperProportions: function() {
    this.helperProportions = {
      width: this.helper.outerWidth(),
      height: this.helper.outerHeight()
    };
  },

  _setContainment: function() {

    var o = this.options;
    if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
    if(o.containment == 'document' || o.containment == 'window') this.containment = [
      o.containment == 'document' ? 0 : $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
      o.containment == 'document' ? 0 : $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
      (o.containment == 'document' ? 0 : $(window).scrollLeft()) + $(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left,
      (o.containment == 'document' ? 0 : $(window).scrollTop()) + ($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
    ];

    if(!(/^(document|window|parent)$/).test(o.containment) && o.containment.constructor != Array) {
      var c = $(o.containment);
      var ce = c[0]; if(!ce) return;
      var co = c.offset();
      var over = ($(ce).css("overflow") != 'hidden');

      this.containment = [
        (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0),
        (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0),
        (over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
        (over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top  - this.margins.bottom
      ];
      this.relative_container = c;

    } else if(o.containment.constructor == Array) {
      this.containment = o.containment;
    }

  },

  _convertPositionTo: function(d, pos) {

    if(!pos) pos = this.position;
    var mod = d == "absolute" ? 1 : -1;
    var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

    return {
      top: (
        pos.top                                 // The absolute mouse position
        + this.offset.relative.top * mod                    // Only for relative positioned nodes: Relative offset from element to offset parent
        + this.offset.parent.top * mod                      // The offsetParent's offset without borders (offset + border)
        - ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
      ),
      left: (
        pos.left                                // The absolute mouse position
        + this.offset.relative.left * mod                   // Only for relative positioned nodes: Relative offset from element to offset parent
        + this.offset.parent.left * mod                     // The offsetParent's offset without borders (offset + border)
        - ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
      )
    };

  },

  _generatePosition: function(event) {

    var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
    var pageX = event.pageX;
    var pageY = event.pageY;

    /*
     * - Position constraining -
     * Constrain the position to a mix of grid, containment.
     */

    if(this.originalPosition) { //If we are not dragging yet, we won't check for options
      var containment;
      if(this.containment) {
      if (this.relative_container){
        var co = this.relative_container.offset();
        containment = [ this.containment[0] + co.left,
          this.containment[1] + co.top,
          this.containment[2] + co.left,
          this.containment[3] + co.top ];
      }
      else {
        containment = this.containment;
      }

        if(event.pageX - this.offset.click.left < containment[0]) pageX = containment[0] + this.offset.click.left;
        if(event.pageY - this.offset.click.top < containment[1]) pageY = containment[1] + this.offset.click.top;
        if(event.pageX - this.offset.click.left > containment[2]) pageX = containment[2] + this.offset.click.left;
        if(event.pageY - this.offset.click.top > containment[3]) pageY = containment[3] + this.offset.click.top;
      }

      if(o.grid) {
        //Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
        var top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
        pageY = containment ? (!(top - this.offset.click.top < containment[1] || top - this.offset.click.top > containment[3]) ? top : (!(top - this.offset.click.top < containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

        var left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
        pageX = containment ? (!(left - this.offset.click.left < containment[0] || left - this.offset.click.left > containment[2]) ? left : (!(left - this.offset.click.left < containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
      }

    }

    return {
      top: (
        pageY                               // The absolute mouse position
        - this.offset.click.top                         // Click offset (relative to the element)
        - this.offset.relative.top                        // Only for relative positioned nodes: Relative offset from element to offset parent
        - this.offset.parent.top                        // The offsetParent's offset without borders (offset + border)
        + ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
      ),
      left: (
        pageX                               // The absolute mouse position
        - this.offset.click.left                        // Click offset (relative to the element)
        - this.offset.relative.left                       // Only for relative positioned nodes: Relative offset from element to offset parent
        - this.offset.parent.left                       // The offsetParent's offset without borders (offset + border)
        + ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
      )
    };

  },

  _clear: function() {
    this.helper.removeClass("ui-draggable-dragging");
    if(this.helper[0] != this.element[0] && !this.cancelHelperRemoval) this.helper.remove();
    //if($.ui.ddmanager) $.ui.ddmanager.current = null;
    this.helper = null;
    this.cancelHelperRemoval = false;
  },

  // From now on bulk stuff - mainly helpers

  _trigger: function(type, event, ui) {
    ui = ui || this._uiHash();
    $.ui.plugin.call(this, type, [event, ui]);
    if(type == "drag") this.positionAbs = this._convertPositionTo("absolute"); //The absolute position has to be recalculated after plugins
    return $.Widget.prototype._trigger.call(this, type, event, ui);
  },

  plugins: {},

  _uiHash: function(event) {
    return {
      helper: this.helper,
      position: this.position,
      originalPosition: this.originalPosition,
      offset: this.positionAbs
    };
  }

});

$.ui.plugin.add("draggable", "connectToSortable", {
  start: function(event, ui) {

    var inst = $(this).data("draggable"), o = inst.options,
      uiSortable = $.extend({}, ui, { item: inst.element });
    inst.sortables = [];
    $(o.connectToSortable).each(function() {
      var sortable = $.data(this, 'sortable');
      if (sortable && !sortable.options.disabled) {
        inst.sortables.push({
          instance: sortable,
          shouldRevert: sortable.options.revert
        });
        sortable.refreshPositions();  // Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
        sortable._trigger("activate", event, uiSortable);
      }
    });

  },
  stop: function(event, ui) {

    //If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
    var inst = $(this).data("draggable"),
      uiSortable = $.extend({}, ui, { item: inst.element });

    $.each(inst.sortables, function() {
      if(this.instance.isOver) {

        this.instance.isOver = 0;

        inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
        this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

        //The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: 'valid/invalid'
        if(this.shouldRevert) this.instance.options.revert = true;

        //Trigger the stop of the sortable
        this.instance._mouseStop(event);

        this.instance.options.helper = this.instance.options._helper;

        //If the helper has been the original item, restore properties in the sortable
        if(inst.options.helper == 'original')
          this.instance.currentItem.css({ top: 'auto', left: 'auto' });

      } else {
        this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
        this.instance._trigger("deactivate", event, uiSortable);
      }

    });

  },
  drag: function(event, ui) {

    var inst = $(this).data("draggable"), that = this;

    var checkPos = function(o) {
      var dyClick = this.offset.click.top, dxClick = this.offset.click.left;
      var helperTop = this.positionAbs.top, helperLeft = this.positionAbs.left;
      var itemHeight = o.height, itemWidth = o.width;
      var itemTop = o.top, itemLeft = o.left;

      return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth);
    };

    $.each(inst.sortables, function(i) {

      var innermostIntersecting = false;
      var thisSortable = this;
      //Copy over some variables to allow calling the sortable's native _intersectsWith
      this.instance.positionAbs = inst.positionAbs;
      this.instance.helperProportions = inst.helperProportions;
      this.instance.offset.click = inst.offset.click;

      if(this.instance._intersectsWith(this.instance.containerCache)) {
        innermostIntersecting = true;
        $.each(inst.sortables, function () {
          this.instance.positionAbs = inst.positionAbs;
          this.instance.helperProportions = inst.helperProportions;
          this.instance.offset.click = inst.offset.click;
          if  (this != thisSortable
            && this.instance._intersectsWith(this.instance.containerCache)
            && $.ui.contains(thisSortable.instance.element[0], this.instance.element[0]))
            innermostIntersecting = false;
            return innermostIntersecting;
        });
      }


      if(innermostIntersecting) {
        //If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
        if(!this.instance.isOver) {

          this.instance.isOver = 1;
          //Now we fake the start of dragging for the sortable instance,
          //by cloning the list group item, appending it to the sortable and using it as inst.currentItem
          //We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
          this.instance.currentItem = $(that).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item", true);
          this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
          this.instance.options.helper = function() { return ui.helper[0]; };

          event.target = this.instance.currentItem[0];
          this.instance._mouseCapture(event, true);
          this.instance._mouseStart(event, true, true);

          //Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
          this.instance.offset.click.top = inst.offset.click.top;
          this.instance.offset.click.left = inst.offset.click.left;
          this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
          this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

          inst._trigger("toSortable", event);
          inst.dropped = this.instance.element; //draggable revert needs that
          //hack so receive/update callbacks work (mostly)
          inst.currentItem = inst.element;
          this.instance.fromOutside = inst;

        }

        //Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
        if(this.instance.currentItem) this.instance._mouseDrag(event);

      } else {

        //If it doesn't intersect with the sortable, and it intersected before,
        //we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
        if(this.instance.isOver) {

          this.instance.isOver = 0;
          this.instance.cancelHelperRemoval = true;

          //Prevent reverting on this forced stop
          this.instance.options.revert = false;

          // The out event needs to be triggered independently
          this.instance._trigger('out', event, this.instance._uiHash(this.instance));

          this.instance._mouseStop(event, true);
          this.instance.options.helper = this.instance.options._helper;

          //Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
          this.instance.currentItem.remove();
          if(this.instance.placeholder) this.instance.placeholder.remove();

          inst._trigger("fromSortable", event);
          inst.dropped = false; //draggable revert needs that
        }

      };

    });

  }
});

$.ui.plugin.add("draggable", "cursor", {
  start: function(event, ui) {
    var t = $('body'), o = $(this).data('draggable').options;
    if (t.css("cursor")) o._cursor = t.css("cursor");
    t.css("cursor", o.cursor);
  },
  stop: function(event, ui) {
    var o = $(this).data('draggable').options;
    if (o._cursor) $('body').css("cursor", o._cursor);
  }
});

$.ui.plugin.add("draggable", "opacity", {
  start: function(event, ui) {
    var t = $(ui.helper), o = $(this).data('draggable').options;
    if(t.css("opacity")) o._opacity = t.css("opacity");
    t.css('opacity', o.opacity);
  },
  stop: function(event, ui) {
    var o = $(this).data('draggable').options;
    if(o._opacity) $(ui.helper).css('opacity', o._opacity);
  }
});

$.ui.plugin.add("draggable", "scroll", {
  start: function(event, ui) {
    var i = $(this).data("draggable");
    if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') i.overflowOffset = i.scrollParent.offset();
  },
  drag: function(event, ui) {

    var i = $(this).data("draggable"), o = i.options, scrolled = false;

    if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') {

      if(!o.axis || o.axis != 'x') {
        if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
          i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
        else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity)
          i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
      }

      if(!o.axis || o.axis != 'y') {
        if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
          i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
        else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity)
          i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
      }

    } else {

      if(!o.axis || o.axis != 'x') {
        if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
          scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
        else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
          scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
      }

      if(!o.axis || o.axis != 'y') {
        if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
          scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
        else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
          scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
      }

    }

    if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
      $.ui.ddmanager.prepareOffsets(i, event);

  }
});

$.ui.plugin.add("draggable", "snap", {
  start: function(event, ui) {

    var i = $(this).data("draggable"), o = i.options;
    i.snapElements = [];

    $(o.snap.constructor != String ? ( o.snap.items || ':data(draggable)' ) : o.snap).each(function() {
      var $t = $(this); var $o = $t.offset();
      if(this != i.element[0]) i.snapElements.push({
        item: this,
        width: $t.outerWidth(), height: $t.outerHeight(),
        top: $o.top, left: $o.left
      });
    });

  },
  drag: function(event, ui) {

    var inst = $(this).data("draggable"), o = inst.options;
    var d = o.snapTolerance;

    var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
      y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

    for (var i = inst.snapElements.length - 1; i >= 0; i--){

      var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,
        t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;

      //Yes, I know, this is insane ;)
      if(!((l-d < x1 && x1 < r+d && t-d < y1 && y1 < b+d) || (l-d < x1 && x1 < r+d && t-d < y2 && y2 < b+d) || (l-d < x2 && x2 < r+d && t-d < y1 && y1 < b+d) || (l-d < x2 && x2 < r+d && t-d < y2 && y2 < b+d))) {
        if(inst.snapElements[i].snapping) (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
        inst.snapElements[i].snapping = false;
        continue;
      }

      if(o.snapMode != 'inner') {
        var ts = Math.abs(t - y2) <= d;
        var bs = Math.abs(b - y1) <= d;
        var ls = Math.abs(l - x2) <= d;
        var rs = Math.abs(r - x1) <= d;
        if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
        if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
        if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
        if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
      }

      var first = (ts || bs || ls || rs);

      if(o.snapMode != 'outer') {
        var ts = Math.abs(t - y1) <= d;
        var bs = Math.abs(b - y2) <= d;
        var ls = Math.abs(l - x1) <= d;
        var rs = Math.abs(r - x2) <= d;
        if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
        if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
        if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
        if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
      }

      if(!inst.snapElements[i].snapping && (ts || bs || ls || rs || first))
        (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
      inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

    };

  }
});

$.ui.plugin.add("draggable", "stack", {
  start: function(event, ui) {

    var o = $(this).data("draggable").options;

    var group = $.makeArray($(o.stack)).sort(function(a,b) {
      return (parseInt($(a).css("zIndex"),10) || 0) - (parseInt($(b).css("zIndex"),10) || 0);
    });
    if (!group.length) { return; }

    var min = parseInt(group[0].style.zIndex) || 0;
    $(group).each(function(i) {
      this.style.zIndex = min + i;
    });

    this[0].style.zIndex = min + group.length;

  }
});

$.ui.plugin.add("draggable", "zIndex", {
  start: function(event, ui) {
    var t = $(ui.helper), o = $(this).data("draggable").options;
    if(t.css("zIndex")) o._zIndex = t.css("zIndex");
    t.css('zIndex', o.zIndex);
  },
  stop: function(event, ui) {
    var o = $(this).data("draggable").options;
    if(o._zIndex) $(ui.helper).css('zIndex', o._zIndex);
  }
});

})(jQuery);

(function( $, undefined ) {

$.widget("ui.droppable", {
  version: "1.9.2",
  widgetEventPrefix: "drop",
  options: {
    accept: '*',
    activeClass: false,
    addClasses: true,
    greedy: false,
    hoverClass: false,
    scope: 'default',
    tolerance: 'intersect'
  },
  _create: function() {

    var o = this.options, accept = o.accept;
    this.isover = 0; this.isout = 1;

    this.accept = $.isFunction(accept) ? accept : function(d) {
      return d.is(accept);
    };

    //Store the droppable's proportions
    this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };

    // Add the reference and positions to the manager
    $.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
    $.ui.ddmanager.droppables[o.scope].push(this);

    (o.addClasses && this.element.addClass("ui-droppable"));

  },

  _destroy: function() {
    var drop = $.ui.ddmanager.droppables[this.options.scope];
    for ( var i = 0; i < drop.length; i++ )
      if ( drop[i] == this )
        drop.splice(i, 1);

    this.element.removeClass("ui-droppable ui-droppable-disabled");
  },

  _setOption: function(key, value) {

    if(key == 'accept') {
      this.accept = $.isFunction(value) ? value : function(d) {
        return d.is(value);
      };
    }
    $.Widget.prototype._setOption.apply(this, arguments);
  },

  _activate: function(event) {
    var draggable = $.ui.ddmanager.current;
    if(this.options.activeClass) this.element.addClass(this.options.activeClass);
    (draggable && this._trigger('activate', event, this.ui(draggable)));
  },

  _deactivate: function(event) {
    var draggable = $.ui.ddmanager.current;
    if(this.options.activeClass) this.element.removeClass(this.options.activeClass);
    (draggable && this._trigger('deactivate', event, this.ui(draggable)));
  },

  _over: function(event) {

    var draggable = $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return; // Bail if draggable and droppable are same element

    if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
      if(this.options.hoverClass) this.element.addClass(this.options.hoverClass);
      this._trigger('over', event, this.ui(draggable));
    }

  },

  _out: function(event) {

    var draggable = $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return; // Bail if draggable and droppable are same element

    if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
      if(this.options.hoverClass) this.element.removeClass(this.options.hoverClass);
      this._trigger('out', event, this.ui(draggable));
    }

  },

  _drop: function(event,custom) {

    var draggable = custom || $.ui.ddmanager.current;
    if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return false; // Bail if draggable and droppable are same element

    var childrenIntersection = false;
    this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
      var inst = $.data(this, 'droppable');
      if(
        inst.options.greedy
        && !inst.options.disabled
        && inst.options.scope == draggable.options.scope
        && inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element))
        && $.ui.intersect(draggable, $.extend(inst, { offset: inst.element.offset() }), inst.options.tolerance)
      ) { childrenIntersection = true; return false; }
    });
    if(childrenIntersection) return false;

    if(this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
      if(this.options.activeClass) this.element.removeClass(this.options.activeClass);
      if(this.options.hoverClass) this.element.removeClass(this.options.hoverClass);
      this._trigger('drop', event, this.ui(draggable));
      return this.element;
    }

    return false;

  },

  ui: function(c) {
    return {
      draggable: (c.currentItem || c.element),
      helper: c.helper,
      position: c.position,
      offset: c.positionAbs
    };
  }

});

$.ui.intersect = function(draggable, droppable, toleranceMode) {

  if (!droppable.offset) return false;

  var x1 = (draggable.positionAbs || draggable.position.absolute).left, x2 = x1 + draggable.helperProportions.width,
    y1 = (draggable.positionAbs || draggable.position.absolute).top, y2 = y1 + draggable.helperProportions.height;
  var l = droppable.offset.left, r = l + droppable.proportions.width,
    t = droppable.offset.top, b = t + droppable.proportions.height;

  switch (toleranceMode) {
    case 'fit':
      return (l <= x1 && x2 <= r
        && t <= y1 && y2 <= b);
      break;
    case 'intersect':
      return (l < x1 + (draggable.helperProportions.width / 2) // Right Half
        && x2 - (draggable.helperProportions.width / 2) < r // Left Half
        && t < y1 + (draggable.helperProportions.height / 2) // Bottom Half
        && y2 - (draggable.helperProportions.height / 2) < b ); // Top Half
      break;
    case 'pointer':
      var draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left),
        draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top),
        isOver = $.ui.isOver(draggableTop, draggableLeft, t, l, droppable.proportions.height, droppable.proportions.width);
      return isOver;
      break;
    case 'touch':
      return (
          (y1 >= t && y1 <= b) || // Top edge touching
          (y2 >= t && y2 <= b) || // Bottom edge touching
          (y1 < t && y2 > b)    // Surrounded vertically
        ) && (
          (x1 >= l && x1 <= r) || // Left edge touching
          (x2 >= l && x2 <= r) || // Right edge touching
          (x1 < l && x2 > r)    // Surrounded horizontally
        );
      break;
    default:
      return false;
      break;
    }

};

/*
  This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
  current: null,
  droppables: { 'default': [] },
  prepareOffsets: function(t, event) {

    var m = $.ui.ddmanager.droppables[t.options.scope] || [];
    var type = event ? event.type : null; // workaround for #2317
    var list = (t.currentItem || t.element).find(":data(droppable)").andSelf();

    droppablesLoop: for (var i = 0; i < m.length; i++) {

      if(m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0],(t.currentItem || t.element)))) continue; //No disabled and non-accepted
      for (var j=0; j < list.length; j++) { if(list[j] == m[i].element[0]) { m[i].proportions.height = 0; continue droppablesLoop; } }; //Filter out elements in the current dragged item
      m[i].visible = m[i].element.css("display") != "none"; if(!m[i].visible) continue;                   //If the element is not visible, continue

      if(type == "mousedown") m[i]._activate.call(m[i], event); //Activate the droppable if used directly from draggables

      m[i].offset = m[i].element.offset();
      m[i].proportions = { width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight };

    }

  },
  drop: function(draggable, event) {

    var dropped = false;
    $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

      if(!this.options) return;
      if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance))
        dropped = this._drop.call(this, event) || dropped;

      if (!this.options.disabled && this.visible && this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
        this.isout = 1; this.isover = 0;
        this._deactivate.call(this, event);
      }

    });
    return dropped;

  },
  dragStart: function( draggable, event ) {
    //Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
    draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
      if( !draggable.options.refreshPositions ) $.ui.ddmanager.prepareOffsets( draggable, event );
    });
  },
  drag: function(draggable, event) {

    //If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
    if(draggable.options.refreshPositions) $.ui.ddmanager.prepareOffsets(draggable, event);

    //Run through all droppables and check their positions based on specific tolerance options
    $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

      if(this.options.disabled || this.greedyChild || !this.visible) return;
      var intersects = $.ui.intersect(draggable, this, this.options.tolerance);

      var c = !intersects && this.isover == 1 ? 'isout' : (intersects && this.isover == 0 ? 'isover' : null);
      if(!c) return;

      var parentInstance;
      if (this.options.greedy) {
        // find droppable parents with same scope
        var scope = this.options.scope;
        var parent = this.element.parents(':data(droppable)').filter(function () {
          return $.data(this, 'droppable').options.scope === scope;
        });

        if (parent.length) {
          parentInstance = $.data(parent[0], 'droppable');
          parentInstance.greedyChild = (c == 'isover' ? 1 : 0);
        }
      }

      // we just moved into a greedy child
      if (parentInstance && c == 'isover') {
        parentInstance['isover'] = 0;
        parentInstance['isout'] = 1;
        parentInstance._out.call(parentInstance, event);
      }

      this[c] = 1; this[c == 'isout' ? 'isover' : 'isout'] = 0;
      this[c == "isover" ? "_over" : "_out"].call(this, event);

      // we just moved out of a greedy child
      if (parentInstance && c == 'isout') {
        parentInstance['isout'] = 0;
        parentInstance['isover'] = 1;
        parentInstance._over.call(parentInstance, event);
      }
    });

  },
  dragStop: function( draggable, event ) {
    draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
    //Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
    if( !draggable.options.refreshPositions ) $.ui.ddmanager.prepareOffsets( draggable, event );
  }
};

})(jQuery);

(function( $, undefined ) {

$.widget("ui.resizable", $.ui.mouse, {
  version: "1.9.2",
  widgetEventPrefix: "resize",
  options: {
    alsoResize: false,
    animate: false,
    animateDuration: "slow",
    animateEasing: "swing",
    aspectRatio: false,
    autoHide: false,
    containment: false,
    ghost: false,
    grid: false,
    handles: "e,s,se",
    helper: false,
    maxHeight: null,
    maxWidth: null,
    minHeight: 10,
    minWidth: 10,
    zIndex: 1000
  },
  _create: function() {

    var that = this, o = this.options;
    this.element.addClass("ui-resizable");

    $.extend(this, {
      _aspectRatio: !!(o.aspectRatio),
      aspectRatio: o.aspectRatio,
      originalElement: this.element,
      _proportionallyResizeElements: [],
      _helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
    });

    //Wrap the element if it cannot hold child nodes
    if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

      //Create a wrapper element and set the wrapper to the new current internal element
      this.element.wrap(
        $('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
          position: this.element.css('position'),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css('top'),
          left: this.element.css('left')
        })
      );

      //Overwrite the original this.element
      this.element = this.element.parent().data(
        "resizable", this.element.data('resizable')
      );

      this.elementIsWrapper = true;

      //Move margins to the wrapper
      this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
      this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});

      //Prevent Safari textarea resize
      this.originalResizeStyle = this.originalElement.css('resize');
      this.originalElement.css('resize', 'none');

      //Push the actual element to our proportionallyResize internal array
      this._proportionallyResizeElements.push(this.originalElement.css({ position: 'static', zoom: 1, display: 'block' }));

      // avoid IE jump (hard set the margin)
      this.originalElement.css({ margin: this.originalElement.css('margin') });

      // fix handlers offset
      this._proportionallyResize();

    }

    this.handles = o.handles || (!$('.ui-resizable-handle', this.element).length ? "e,s,se" : { n: '.ui-resizable-n', e: '.ui-resizable-e', s: '.ui-resizable-s', w: '.ui-resizable-w', se: '.ui-resizable-se', sw: '.ui-resizable-sw', ne: '.ui-resizable-ne', nw: '.ui-resizable-nw' });
    if(this.handles.constructor == String) {

      if(this.handles == 'all') this.handles = 'n,e,s,w,se,sw,ne,nw';
      var n = this.handles.split(","); this.handles = {};

      for(var i = 0; i < n.length; i++) {

        var handle = $.trim(n[i]), hname = 'ui-resizable-'+handle;
        var axis = $('<div class="ui-resizable-handle ' + hname + '"></div>');

        // Apply zIndex to all handles - see #7960
        axis.css({ zIndex: o.zIndex });

        //TODO : What's going on here?
        if ('se' == handle) {
          axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');
        };

        //Insert into internal handles object and append to element
        this.handles[handle] = '.ui-resizable-'+handle;
        this.element.append(axis);
      }

    }

    this._renderAxis = function(target) {

      target = target || this.element;

      for(var i in this.handles) {

        if(this.handles[i].constructor == String)
          this.handles[i] = $(this.handles[i], this.element).show();

        //Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
        if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

          var axis = $(this.handles[i], this.element), padWrapper = 0;

          //Checking the correct pad and border
          padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

          //The padding type i have to apply...
          var padPos = [ 'padding',
            /ne|nw|n/.test(i) ? 'Top' :
            /se|sw|s/.test(i) ? 'Bottom' :
            /^e$/.test(i) ? 'Right' : 'Left' ].join("");

          target.css(padPos, padWrapper);

          this._proportionallyResize();

        }

        //TODO: What's that good for? There's not anything to be executed left
        if(!$(this.handles[i]).length)
          continue;

      }
    };

    //TODO: make renderAxis a prototype function
    this._renderAxis(this.element);

    this._handles = $('.ui-resizable-handle', this.element)
      .disableSelection();

    //Matching axis name
    this._handles.mouseover(function() {
      if (!that.resizing) {
        if (this.className)
          var axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
        //Axis, default = se
        that.axis = axis && axis[1] ? axis[1] : 'se';
      }
    });

    //If we want to auto hide the elements
    if (o.autoHide) {
      this._handles.hide();
      $(this.element)
        .addClass("ui-resizable-autohide")
        .mouseenter(function() {
          if (o.disabled) return;
          $(this).removeClass("ui-resizable-autohide");
          that._handles.show();
        })
        .mouseleave(function(){
          if (o.disabled) return;
          if (!that.resizing) {
            $(this).addClass("ui-resizable-autohide");
            that._handles.hide();
          }
        });
    }

    //Initialize the mouse interaction
    this._mouseInit();

  },

  _destroy: function() {

    this._mouseDestroy();

    var _destroy = function(exp) {
      $(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
        .removeData("resizable").removeData("ui-resizable").unbind(".resizable").find('.ui-resizable-handle').remove();
    };

    //TODO: Unwrap at same DOM position
    if (this.elementIsWrapper) {
      _destroy(this.element);
      var wrapper = this.element;
      this.originalElement.css({
        position: wrapper.css('position'),
        width: wrapper.outerWidth(),
        height: wrapper.outerHeight(),
        top: wrapper.css('top'),
        left: wrapper.css('left')
      }).insertAfter( wrapper );
      wrapper.remove();
    }

    this.originalElement.css('resize', this.originalResizeStyle);
    _destroy(this.originalElement);

    return this;
  },

  _mouseCapture: function(event) {
    var handle = false;
    for (var i in this.handles) {
      if ($(this.handles[i])[0] == event.target) {
        handle = true;
      }
    }

    return !this.options.disabled && handle;
  },

  _mouseStart: function(event) {

    var o = this.options, iniPos = this.element.position(), el = this.element;

    this.resizing = true;
    this.documentScroll = { top: $(document).scrollTop(), left: $(document).scrollLeft() };

    // bugfix for http://dev.jquery.com/ticket/1749
    if (el.is('.ui-draggable') || (/absolute/).test(el.css('position'))) {
      el.css({ position: 'absolute', top: iniPos.top, left: iniPos.left });
    }

    this._renderProxy();

    var curleft = num(this.helper.css('left')), curtop = num(this.helper.css('top'));

    if (o.containment) {
      curleft += $(o.containment).scrollLeft() || 0;
      curtop += $(o.containment).scrollTop() || 0;
    }

    //Store needed variables
    this.offset = this.helper.offset();
    this.position = { left: curleft, top: curtop };
    this.size = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
    this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
    this.originalPosition = { left: curleft, top: curtop };
    this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
    this.originalMousePosition = { left: event.pageX, top: event.pageY };

    //Aspect Ratio
    this.aspectRatio = (typeof o.aspectRatio == 'number') ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

    var cursor = $('.ui-resizable-' + this.axis).css('cursor');
    $('body').css('cursor', cursor == 'auto' ? this.axis + '-resize' : cursor);

    el.addClass("ui-resizable-resizing");
    this._propagate("start", event);
    return true;
  },

  _mouseDrag: function(event) {

    //Increase performance, avoid regex
    var el = this.helper, o = this.options, props = {},
      that = this, smp = this.originalMousePosition, a = this.axis;

    var dx = (event.pageX-smp.left)||0, dy = (event.pageY-smp.top)||0;
    var trigger = this._change[a];
    if (!trigger) return false;

    // Calculate the attrs that will be change
    var data = trigger.apply(this, [event, dx, dy]);

    // Put this in the mouseDrag handler since the user can start pressing shift while resizing
    this._updateVirtualBoundaries(event.shiftKey);
    if (this._aspectRatio || event.shiftKey)
      data = this._updateRatio(data, event);

    data = this._respectSize(data, event);

    // plugins callbacks need to be called first
    this._propagate("resize", event);

    el.css({
      top: this.position.top + "px", left: this.position.left + "px",
      width: this.size.width + "px", height: this.size.height + "px"
    });

    if (!this._helper && this._proportionallyResizeElements.length)
      this._proportionallyResize();

    this._updateCache(data);

    // calling the user callback at the end
    this._trigger('resize', event, this.ui());

    return false;
  },

  _mouseStop: function(event) {

    this.resizing = false;
    var o = this.options, that = this;

    if(this._helper) {
      var pr = this._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
        soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : that.sizeDiff.height,
        soffsetw = ista ? 0 : that.sizeDiff.width;

      var s = { width: (that.helper.width()  - soffsetw), height: (that.helper.height() - soffseth) },
        left = (parseInt(that.element.css('left'), 10) + (that.position.left - that.originalPosition.left)) || null,
        top = (parseInt(that.element.css('top'), 10) + (that.position.top - that.originalPosition.top)) || null;

      if (!o.animate)
        this.element.css($.extend(s, { top: top, left: left }));

      that.helper.height(that.size.height);
      that.helper.width(that.size.width);

      if (this._helper && !o.animate) this._proportionallyResize();
    }

    $('body').css('cursor', 'auto');

    this.element.removeClass("ui-resizable-resizing");

    this._propagate("stop", event);

    if (this._helper) this.helper.remove();
    return false;

  },

  _updateVirtualBoundaries: function(forceAspectRatio) {
    var o = this.options, pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b;

    b = {
      minWidth: isNumber(o.minWidth) ? o.minWidth : 0,
      maxWidth: isNumber(o.maxWidth) ? o.maxWidth : Infinity,
      minHeight: isNumber(o.minHeight) ? o.minHeight : 0,
      maxHeight: isNumber(o.maxHeight) ? o.maxHeight : Infinity
    };

    if(this._aspectRatio || forceAspectRatio) {
      // We want to create an enclosing box whose aspect ration is the requested one
      // First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
      pMinWidth = b.minHeight * this.aspectRatio;
      pMinHeight = b.minWidth / this.aspectRatio;
      pMaxWidth = b.maxHeight * this.aspectRatio;
      pMaxHeight = b.maxWidth / this.aspectRatio;

      if(pMinWidth > b.minWidth) b.minWidth = pMinWidth;
      if(pMinHeight > b.minHeight) b.minHeight = pMinHeight;
      if(pMaxWidth < b.maxWidth) b.maxWidth = pMaxWidth;
      if(pMaxHeight < b.maxHeight) b.maxHeight = pMaxHeight;
    }
    this._vBoundaries = b;
  },

  _updateCache: function(data) {
    var o = this.options;
    this.offset = this.helper.offset();
    if (isNumber(data.left)) this.position.left = data.left;
    if (isNumber(data.top)) this.position.top = data.top;
    if (isNumber(data.height)) this.size.height = data.height;
    if (isNumber(data.width)) this.size.width = data.width;
  },

  _updateRatio: function(data, event) {

    var o = this.options, cpos = this.position, csize = this.size, a = this.axis;

    if (isNumber(data.height)) data.width = (data.height * this.aspectRatio);
    else if (isNumber(data.width)) data.height = (data.width / this.aspectRatio);

    if (a == 'sw') {
      data.left = cpos.left + (csize.width - data.width);
      data.top = null;
    }
    if (a == 'nw') {
      data.top = cpos.top + (csize.height - data.height);
      data.left = cpos.left + (csize.width - data.width);
    }

    return data;
  },

  _respectSize: function(data, event) {

    var el = this.helper, o = this._vBoundaries, pRatio = this._aspectRatio || event.shiftKey, a = this.axis,
        ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
          isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height);

    if (isminw) data.width = o.minWidth;
    if (isminh) data.height = o.minHeight;
    if (ismaxw) data.width = o.maxWidth;
    if (ismaxh) data.height = o.maxHeight;

    var dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height;
    var cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);

    if (isminw && cw) data.left = dw - o.minWidth;
    if (ismaxw && cw) data.left = dw - o.maxWidth;
    if (isminh && ch) data.top = dh - o.minHeight;
    if (ismaxh && ch) data.top = dh - o.maxHeight;

    // fixing jump error on top/left - bug #2330
    var isNotwh = !data.width && !data.height;
    if (isNotwh && !data.left && data.top) data.top = null;
    else if (isNotwh && !data.top && data.left) data.left = null;

    return data;
  },

  _proportionallyResize: function() {

    var o = this.options;
    if (!this._proportionallyResizeElements.length) return;
    var element = this.helper || this.element;

    for (var i=0; i < this._proportionallyResizeElements.length; i++) {

      var prel = this._proportionallyResizeElements[i];

      if (!this.borderDif) {
        var b = [prel.css('borderTopWidth'), prel.css('borderRightWidth'), prel.css('borderBottomWidth'), prel.css('borderLeftWidth')],
          p = [prel.css('paddingTop'), prel.css('paddingRight'), prel.css('paddingBottom'), prel.css('paddingLeft')];

        this.borderDif = $.map(b, function(v, i) {
          var border = parseInt(v,10)||0, padding = parseInt(p[i],10)||0;
          return border + padding;
        });
      }

      prel.css({
        height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
        width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
      });

    };

  },

  _renderProxy: function() {

    var el = this.element, o = this.options;
    this.elementOffset = el.offset();

    if(this._helper) {

      this.helper = this.helper || $('<div style="overflow:hidden;"></div>');

      // fix ie6 offset TODO: This seems broken
      var ie6offset = ($.ui.ie6 ? 1 : 0),
      pxyoffset = ( $.ui.ie6 ? 2 : -1 );

      this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() + pxyoffset,
        height: this.element.outerHeight() + pxyoffset,
        position: 'absolute',
        left: this.elementOffset.left - ie6offset +'px',
        top: this.elementOffset.top - ie6offset +'px',
        zIndex: ++o.zIndex //TODO: Don't modify option
      });

      this.helper
        .appendTo("body")
        .disableSelection();

    } else {
      this.helper = this.element;
    }

  },

  _change: {
    e: function(event, dx, dy) {
      return { width: this.originalSize.width + dx };
    },
    w: function(event, dx, dy) {
      var o = this.options, cs = this.originalSize, sp = this.originalPosition;
      return { left: sp.left + dx, width: cs.width - dx };
    },
    n: function(event, dx, dy) {
      var o = this.options, cs = this.originalSize, sp = this.originalPosition;
      return { top: sp.top + dy, height: cs.height - dy };
    },
    s: function(event, dx, dy) {
      return { height: this.originalSize.height + dy };
    },
    se: function(event, dx, dy) {
      return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
    },
    sw: function(event, dx, dy) {
      return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
    },
    ne: function(event, dx, dy) {
      return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
    },
    nw: function(event, dx, dy) {
      return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
    }
  },

  _propagate: function(n, event) {
    $.ui.plugin.call(this, n, [event, this.ui()]);
    (n != "resize" && this._trigger(n, event, this.ui()));
  },

  plugins: {},

  ui: function() {
    return {
      originalElement: this.originalElement,
      element: this.element,
      helper: this.helper,
      position: this.position,
      size: this.size,
      originalSize: this.originalSize,
      originalPosition: this.originalPosition
    };
  }

});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "alsoResize", {

  start: function (event, ui) {
    var that = $(this).data("resizable"), o = that.options;

    var _store = function (exp) {
      $(exp).each(function() {
        var el = $(this);
        el.data("resizable-alsoresize", {
          width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
          left: parseInt(el.css('left'), 10), top: parseInt(el.css('top'), 10)
        });
      });
    };

    if (typeof(o.alsoResize) == 'object' && !o.alsoResize.parentNode) {
      if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0]; _store(o.alsoResize); }
      else { $.each(o.alsoResize, function (exp) { _store(exp); }); }
    }else{
      _store(o.alsoResize);
    }
  },

  resize: function (event, ui) {
    var that = $(this).data("resizable"), o = that.options, os = that.originalSize, op = that.originalPosition;

    var delta = {
      height: (that.size.height - os.height) || 0, width: (that.size.width - os.width) || 0,
      top: (that.position.top - op.top) || 0, left: (that.position.left - op.left) || 0
    },

    _alsoResize = function (exp, c) {
      $(exp).each(function() {
        var el = $(this), start = $(this).data("resizable-alsoresize"), style = {},
          css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];

        $.each(css, function (i, prop) {
          var sum = (start[prop]||0) + (delta[prop]||0);
          if (sum && sum >= 0)
            style[prop] = sum || null;
        });

        el.css(style);
      });
    };

    if (typeof(o.alsoResize) == 'object' && !o.alsoResize.nodeType) {
      $.each(o.alsoResize, function (exp, c) { _alsoResize(exp, c); });
    }else{
      _alsoResize(o.alsoResize);
    }
  },

  stop: function (event, ui) {
    $(this).removeData("resizable-alsoresize");
  }
});

$.ui.plugin.add("resizable", "animate", {

  stop: function(event, ui) {
    var that = $(this).data("resizable"), o = that.options;

    var pr = that._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
          soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : that.sizeDiff.height,
            soffsetw = ista ? 0 : that.sizeDiff.width;

    var style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
          left = (parseInt(that.element.css('left'), 10) + (that.position.left - that.originalPosition.left)) || null,
            top = (parseInt(that.element.css('top'), 10) + (that.position.top - that.originalPosition.top)) || null;

    that.element.animate(
      $.extend(style, top && left ? { top: top, left: left } : {}), {
        duration: o.animateDuration,
        easing: o.animateEasing,
        step: function() {

          var data = {
            width: parseInt(that.element.css('width'), 10),
            height: parseInt(that.element.css('height'), 10),
            top: parseInt(that.element.css('top'), 10),
            left: parseInt(that.element.css('left'), 10)
          };

          if (pr && pr.length) $(pr[0]).css({ width: data.width, height: data.height });

          // propagating resize, and updating values for each animation step
          that._updateCache(data);
          that._propagate("resize", event);

        }
      }
    );
  }

});

$.ui.plugin.add("resizable", "containment", {

  start: function(event, ui) {
    var that = $(this).data("resizable"), o = that.options, el = that.element;
    var oc = o.containment, ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;
    if (!ce) return;

    that.containerElement = $(ce);

    if (/document/.test(oc) || oc == document) {
      that.containerOffset = { left: 0, top: 0 };
      that.containerPosition = { left: 0, top: 0 };

      that.parentData = {
        element: $(document), left: 0, top: 0,
        width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight
      };
    }

    // i'm a node, so compute top, left, right, bottom
    else {
      var element = $(ce), p = [];
      $([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) { p[i] = num(element.css("padding" + name)); });

      that.containerOffset = element.offset();
      that.containerPosition = element.position();
      that.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) };

      var co = that.containerOffset, ch = that.containerSize.height,  cw = that.containerSize.width,
            width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw ), height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

      that.parentData = {
        element: ce, left: co.left, top: co.top, width: width, height: height
      };
    }
  },

  resize: function(event, ui) {
    var that = $(this).data("resizable"), o = that.options,
        ps = that.containerSize, co = that.containerOffset, cs = that.size, cp = that.position,
        pRatio = that._aspectRatio || event.shiftKey, cop = { top:0, left:0 }, ce = that.containerElement;

    if (ce[0] != document && (/static/).test(ce.css('position'))) cop = co;

    if (cp.left < (that._helper ? co.left : 0)) {
      that.size.width = that.size.width + (that._helper ? (that.position.left - co.left) : (that.position.left - cop.left));
      if (pRatio) that.size.height = that.size.width / that.aspectRatio;
      that.position.left = o.helper ? co.left : 0;
    }

    if (cp.top < (that._helper ? co.top : 0)) {
      that.size.height = that.size.height + (that._helper ? (that.position.top - co.top) : that.position.top);
      if (pRatio) that.size.width = that.size.height * that.aspectRatio;
      that.position.top = that._helper ? co.top : 0;
    }

    that.offset.left = that.parentData.left+that.position.left;
    that.offset.top = that.parentData.top+that.position.top;

    var woset = Math.abs( (that._helper ? that.offset.left - cop.left : (that.offset.left - cop.left)) + that.sizeDiff.width ),
          hoset = Math.abs( (that._helper ? that.offset.top - cop.top : (that.offset.top - co.top)) + that.sizeDiff.height );

    var isParent = that.containerElement.get(0) == that.element.parent().get(0),
      isOffsetRelative = /relative|absolute/.test(that.containerElement.css('position'));

    if(isParent && isOffsetRelative) woset -= that.parentData.left;

    if (woset + that.size.width >= that.parentData.width) {
      that.size.width = that.parentData.width - woset;
      if (pRatio) that.size.height = that.size.width / that.aspectRatio;
    }

    if (hoset + that.size.height >= that.parentData.height) {
      that.size.height = that.parentData.height - hoset;
      if (pRatio) that.size.width = that.size.height * that.aspectRatio;
    }
  },

  stop: function(event, ui){
    var that = $(this).data("resizable"), o = that.options, cp = that.position,
        co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement;

    var helper = $(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height;

    if (that._helper && !o.animate && (/relative/).test(ce.css('position')))
      $(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

    if (that._helper && !o.animate && (/static/).test(ce.css('position')))
      $(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

  }
});

$.ui.plugin.add("resizable", "ghost", {

  start: function(event, ui) {

    var that = $(this).data("resizable"), o = that.options, cs = that.size;

    that.ghost = that.originalElement.clone();
    that.ghost
      .css({ opacity: .25, display: 'block', position: 'relative', height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 })
      .addClass('ui-resizable-ghost')
      .addClass(typeof o.ghost == 'string' ? o.ghost : '');

    that.ghost.appendTo(that.helper);

  },

  resize: function(event, ui){
    var that = $(this).data("resizable"), o = that.options;
    if (that.ghost) that.ghost.css({ position: 'relative', height: that.size.height, width: that.size.width });
  },

  stop: function(event, ui){
    var that = $(this).data("resizable"), o = that.options;
    if (that.ghost && that.helper) that.helper.get(0).removeChild(that.ghost.get(0));
  }

});

$.ui.plugin.add("resizable", "grid", {

  resize: function(event, ui) {
    var that = $(this).data("resizable"), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, ratio = o._aspectRatio || event.shiftKey;
    o.grid = typeof o.grid == "number" ? [o.grid, o.grid] : o.grid;
    var ox = Math.round((cs.width - os.width) / (o.grid[0]||1)) * (o.grid[0]||1), oy = Math.round((cs.height - os.height) / (o.grid[1]||1)) * (o.grid[1]||1);

    if (/^(se|s|e)$/.test(a)) {
      that.size.width = os.width + ox;
      that.size.height = os.height + oy;
    }
    else if (/^(ne)$/.test(a)) {
      that.size.width = os.width + ox;
      that.size.height = os.height + oy;
      that.position.top = op.top - oy;
    }
    else if (/^(sw)$/.test(a)) {
      that.size.width = os.width + ox;
      that.size.height = os.height + oy;
      that.position.left = op.left - ox;
    }
    else {
      that.size.width = os.width + ox;
      that.size.height = os.height + oy;
      that.position.top = op.top - oy;
      that.position.left = op.left - ox;
    }
  }

});

var num = function(v) {
  return parseInt(v, 10) || 0;
};

var isNumber = function(value) {
  return !isNaN(parseInt(value, 10));
};

})(jQuery);

(function( $, undefined ) {

$.widget("ui.selectable", $.ui.mouse, {
  version: "1.9.2",
  options: {
    appendTo: 'body',
    autoRefresh: true,
    distance: 0,
    filter: '*',
    tolerance: 'touch'
  },
  _create: function() {
    var that = this;

    this.element.addClass("ui-selectable");

    this.dragged = false;

    // cache selectee children based on filter
    var selectees;
    this.refresh = function() {
      selectees = $(that.options.filter, that.element[0]);
      selectees.addClass("ui-selectee");
      selectees.each(function() {
        var $this = $(this);
        var pos = $this.offset();
        $.data(this, "selectable-item", {
          element: this,
          $element: $this,
          left: pos.left,
          top: pos.top,
          right: pos.left + $this.outerWidth(),
          bottom: pos.top + $this.outerHeight(),
          startselected: false,
          selected: $this.hasClass('ui-selected'),
          selecting: $this.hasClass('ui-selecting'),
          unselecting: $this.hasClass('ui-unselecting')
        });
      });
    };
    this.refresh();

    this.selectees = selectees.addClass("ui-selectee");

    this._mouseInit();

    this.helper = $("<div class='ui-selectable-helper'></div>");
  },

  _destroy: function() {
    this.selectees
      .removeClass("ui-selectee")
      .removeData("selectable-item");
    this.element
      .removeClass("ui-selectable ui-selectable-disabled");
    this._mouseDestroy();
  },

  _mouseStart: function(event) {
    var that = this;

    this.opos = [event.pageX, event.pageY];

    if (this.options.disabled)
      return;

    var options = this.options;

    this.selectees = $(options.filter, this.element[0]);

    this._trigger("start", event);

    $(options.appendTo).append(this.helper);
    // position helper (lasso)
    this.helper.css({
      "left": event.clientX,
      "top": event.clientY,
      "width": 0,
      "height": 0
    });

    if (options.autoRefresh) {
      this.refresh();
    }

    this.selectees.filter('.ui-selected').each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.startselected = true;
      if (!event.metaKey && !event.ctrlKey) {
        selectee.$element.removeClass('ui-selected');
        selectee.selected = false;
        selectee.$element.addClass('ui-unselecting');
        selectee.unselecting = true;
        // selectable UNSELECTING callback
        that._trigger("unselecting", event, {
          unselecting: selectee.element
        });
      }
    });

    $(event.target).parents().andSelf().each(function() {
      var selectee = $.data(this, "selectable-item");
      if (selectee) {
        var doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass('ui-selected');
        selectee.$element
          .removeClass(doSelect ? "ui-unselecting" : "ui-selected")
          .addClass(doSelect ? "ui-selecting" : "ui-unselecting");
        selectee.unselecting = !doSelect;
        selectee.selecting = doSelect;
        selectee.selected = doSelect;
        // selectable (UN)SELECTING callback
        if (doSelect) {
          that._trigger("selecting", event, {
            selecting: selectee.element
          });
        } else {
          that._trigger("unselecting", event, {
            unselecting: selectee.element
          });
        }
        return false;
      }
    });

  },

  _mouseDrag: function(event) {
    var that = this;
    this.dragged = true;

    if (this.options.disabled)
      return;

    var options = this.options;

    var x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
    if (x1 > x2) { var tmp = x2; x2 = x1; x1 = tmp; }
    if (y1 > y2) { var tmp = y2; y2 = y1; y1 = tmp; }
    this.helper.css({left: x1, top: y1, width: x2-x1, height: y2-y1});

    this.selectees.each(function() {
      var selectee = $.data(this, "selectable-item");
      //prevent helper from being selected if appendTo: selectable
      if (!selectee || selectee.element == that.element[0])
        return;
      var hit = false;
      if (options.tolerance == 'touch') {
        hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
      } else if (options.tolerance == 'fit') {
        hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
      }

      if (hit) {
        // SELECT
        if (selectee.selected) {
          selectee.$element.removeClass('ui-selected');
          selectee.selected = false;
        }
        if (selectee.unselecting) {
          selectee.$element.removeClass('ui-unselecting');
          selectee.unselecting = false;
        }
        if (!selectee.selecting) {
          selectee.$element.addClass('ui-selecting');
          selectee.selecting = true;
          // selectable SELECTING callback
          that._trigger("selecting", event, {
            selecting: selectee.element
          });
        }
      } else {
        // UNSELECT
        if (selectee.selecting) {
          if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
            selectee.$element.removeClass('ui-selecting');
            selectee.selecting = false;
            selectee.$element.addClass('ui-selected');
            selectee.selected = true;
          } else {
            selectee.$element.removeClass('ui-selecting');
            selectee.selecting = false;
            if (selectee.startselected) {
              selectee.$element.addClass('ui-unselecting');
              selectee.unselecting = true;
            }
            // selectable UNSELECTING callback
            that._trigger("unselecting", event, {
              unselecting: selectee.element
            });
          }
        }
        if (selectee.selected) {
          if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
            selectee.$element.removeClass('ui-selected');
            selectee.selected = false;

            selectee.$element.addClass('ui-unselecting');
            selectee.unselecting = true;
            // selectable UNSELECTING callback
            that._trigger("unselecting", event, {
              unselecting: selectee.element
            });
          }
        }
      }
    });

    return false;
  },

  _mouseStop: function(event) {
    var that = this;

    this.dragged = false;

    var options = this.options;

    $('.ui-unselecting', this.element[0]).each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.$element.removeClass('ui-unselecting');
      selectee.unselecting = false;
      selectee.startselected = false;
      that._trigger("unselected", event, {
        unselected: selectee.element
      });
    });
    $('.ui-selecting', this.element[0]).each(function() {
      var selectee = $.data(this, "selectable-item");
      selectee.$element.removeClass('ui-selecting').addClass('ui-selected');
      selectee.selecting = false;
      selectee.selected = true;
      selectee.startselected = true;
      that._trigger("selected", event, {
        selected: selectee.element
      });
    });
    this._trigger("stop", event);

    this.helper.remove();

    return false;
  }

});

})(jQuery);

(function( $, undefined ) {

$.widget("ui.sortable", $.ui.mouse, {
  version: "1.9.2",
  widgetEventPrefix: "sort",
  ready: false,
  options: {
    appendTo: "parent",
    axis: false,
    connectWith: false,
    containment: false,
    cursor: 'auto',
    cursorAt: false,
    dropOnEmpty: true,
    forcePlaceholderSize: false,
    forceHelperSize: false,
    grid: false,
    handle: false,
    helper: "original",
    items: '> *',
    opacity: false,
    placeholder: false,
    revert: false,
    scroll: true,
    scrollSensitivity: 20,
    scrollSpeed: 20,
    scope: "default",
    tolerance: "intersect",
    zIndex: 1000
  },
  _create: function() {

    var o = this.options;
    this.containerCache = {};
    this.element.addClass("ui-sortable");

    //Get the items
    this.refresh();

    //Let's determine if the items are being displayed horizontally
    this.floating = this.items.length ? o.axis === 'x' || (/left|right/).test(this.items[0].item.css('float')) || (/inline|table-cell/).test(this.items[0].item.css('display')) : false;

    //Let's determine the parent's offset
    this.offset = this.element.offset();

    //Initialize mouse events for interaction
    this._mouseInit();

    //We're ready to go
    this.ready = true

  },

  _destroy: function() {
    this.element
      .removeClass("ui-sortable ui-sortable-disabled");
    this._mouseDestroy();

    for ( var i = this.items.length - 1; i >= 0; i-- )
      this.items[i].item.removeData(this.widgetName + "-item");

    return this;
  },

  _setOption: function(key, value){
    if ( key === "disabled" ) {
      this.options[ key ] = value;

      this.widget().toggleClass( "ui-sortable-disabled", !!value );
    } else {
      // Don't call widget base _setOption for disable as it adds ui-state-disabled class
      $.Widget.prototype._setOption.apply(this, arguments);
    }
  },

  _mouseCapture: function(event, overrideHandle) {
    var that = this;

    if (this.reverting) {
      return false;
    }

    if(this.options.disabled || this.options.type == 'static') return false;

    //We have to refresh the items data once first
    this._refreshItems(event);

    //Find out if the clicked node (or one of its parents) is a actual item in this.items
    var currentItem = null, nodes = $(event.target).parents().each(function() {
      if($.data(this, that.widgetName + '-item') == that) {
        currentItem = $(this);
        return false;
      }
    });
    if($.data(event.target, that.widgetName + '-item') == that) currentItem = $(event.target);

    if(!currentItem) return false;
    if(this.options.handle && !overrideHandle) {
      var validHandle = false;

      $(this.options.handle, currentItem).find("*").andSelf().each(function() { if(this == event.target) validHandle = true; });
      if(!validHandle) return false;
    }

    this.currentItem = currentItem;
    this._removeCurrentsFromItems();
    return true;

  },

  _mouseStart: function(event, overrideHandle, noActivation) {

    var o = this.options;
    this.currentContainer = this;

    //We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
    this.refreshPositions();

    //Create and append the visible helper
    this.helper = this._createHelper(event);

    //Cache the helper size
    this._cacheHelperProportions();

    /*
     * - Position generation -
     * This block generates everything position related - it's the core of draggables.
     */

    //Cache the margins of the original element
    this._cacheMargins();

    //Get the next scrolling parent
    this.scrollParent = this.helper.scrollParent();

    //The element's absolute position on the page minus margins
    this.offset = this.currentItem.offset();
    this.offset = {
      top: this.offset.top - this.margins.top,
      left: this.offset.left - this.margins.left
    };

    $.extend(this.offset, {
      click: { //Where the click happened, relative to the element
        left: event.pageX - this.offset.left,
        top: event.pageY - this.offset.top
      },
      parent: this._getParentOffset(),
      relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
    });

    // Only after we got the offset, we can change the helper's position to absolute
    // TODO: Still need to figure out a way to make relative sorting possible
    this.helper.css("position", "absolute");
    this.cssPosition = this.helper.css("position");

    //Generate the original position
    this.originalPosition = this._generatePosition(event);
    this.originalPageX = event.pageX;
    this.originalPageY = event.pageY;

    //Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
    (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

    //Cache the former DOM position
    this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

    //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
    if(this.helper[0] != this.currentItem[0]) {
      this.currentItem.hide();
    }

    //Create the placeholder
    this._createPlaceholder();

    //Set a containment if given in the options
    if(o.containment)
      this._setContainment();

    if(o.cursor) { // cursor option
      if ($('body').css("cursor")) this._storedCursor = $('body').css("cursor");
      $('body').css("cursor", o.cursor);
    }

    if(o.opacity) { // opacity option
      if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
      this.helper.css("opacity", o.opacity);
    }

    if(o.zIndex) { // zIndex option
      if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
      this.helper.css("zIndex", o.zIndex);
    }

    //Prepare scrolling
    if(this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML')
      this.overflowOffset = this.scrollParent.offset();

    //Call callbacks
    this._trigger("start", event, this._uiHash());

    //Recache the helper size
    if(!this._preserveHelperProportions)
      this._cacheHelperProportions();


    //Post 'activate' events to possible containers
    if(!noActivation) {
       for (var i = this.containers.length - 1; i >= 0; i--) { this.containers[i]._trigger("activate", event, this._uiHash(this)); }
    }

    //Prepare possible droppables
    if($.ui.ddmanager)
      $.ui.ddmanager.current = this;

    if ($.ui.ddmanager && !o.dropBehaviour)
      $.ui.ddmanager.prepareOffsets(this, event);

    this.dragging = true;

    this.helper.addClass("ui-sortable-helper");
    this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
    return true;

  },

  _mouseDrag: function(event) {

    //Compute the helpers position
    this.position = this._generatePosition(event);
    this.positionAbs = this._convertPositionTo("absolute");

    if (!this.lastPositionAbs) {
      this.lastPositionAbs = this.positionAbs;
    }

    //Do scrolling
    if(this.options.scroll) {
      var o = this.options, scrolled = false;
      if(this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML') {

        if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
          this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
        else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity)
          this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;

        if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
          this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
        else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity)
          this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;

      } else {

        if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
          scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
        else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
          scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);

        if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
          scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
        else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
          scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);

      }

      if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
        $.ui.ddmanager.prepareOffsets(this, event);
    }

    //Regenerate the absolute position used for position checks
    this.positionAbs = this._convertPositionTo("absolute");

    //Set the helper position
    if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
    if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';

    //Rearrange
    for (var i = this.items.length - 1; i >= 0; i--) {

      //Cache variables and intersection, continue if no intersection
      var item = this.items[i], itemElement = item.item[0], intersection = this._intersectsWithPointer(item);
      if (!intersection) continue;

      // Only put the placeholder inside the current Container, skip all
      // items form other containers. This works because when moving
      // an item from one container to another the
      // currentContainer is switched before the placeholder is moved.
      //
      // Without this moving items in "sub-sortables" can cause the placeholder to jitter
      // beetween the outer and inner container.
      if (item.instance !== this.currentContainer) continue;

      if (itemElement != this.currentItem[0] //cannot intersect with itself
        &&  this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement //no useless actions that have been done before
        &&  !$.contains(this.placeholder[0], itemElement) //no action if the item moved is the parent of the item checked
        && (this.options.type == 'semi-dynamic' ? !$.contains(this.element[0], itemElement) : true)
        //&& itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container
      ) {

        this.direction = intersection == 1 ? "down" : "up";

        if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
          this._rearrange(event, item);
        } else {
          break;
        }

        this._trigger("change", event, this._uiHash());
        break;
      }
    }

    //Post events to containers
    this._contactContainers(event);

    //Interconnect with droppables
    if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

    //Call callbacks
    this._trigger('sort', event, this._uiHash());

    this.lastPositionAbs = this.positionAbs;
    return false;

  },

  _mouseStop: function(event, noPropagation) {

    if(!event) return;

    //If we are using droppables, inform the manager about the drop
    if ($.ui.ddmanager && !this.options.dropBehaviour)
      $.ui.ddmanager.drop(this, event);

    if(this.options.revert) {
      var that = this;
      var cur = this.placeholder.offset();

      this.reverting = true;

      $(this.helper).animate({
        left: cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
        top: cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
      }, parseInt(this.options.revert, 10) || 500, function() {
        that._clear(event);
      });
    } else {
      this._clear(event, noPropagation);
    }

    return false;

  },

  cancel: function() {

    if(this.dragging) {

      this._mouseUp({ target: null });

      if(this.options.helper == "original")
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      else
        this.currentItem.show();

      //Post deactivating events to containers
      for (var i = this.containers.length - 1; i >= 0; i--){
        this.containers[i]._trigger("deactivate", null, this._uiHash(this));
        if(this.containers[i].containerCache.over) {
          this.containers[i]._trigger("out", null, this._uiHash(this));
          this.containers[i].containerCache.over = 0;
        }
      }

    }

    if (this.placeholder) {
      //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
      if(this.placeholder[0].parentNode) this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
      if(this.options.helper != "original" && this.helper && this.helper[0].parentNode) this.helper.remove();

      $.extend(this, {
        helper: null,
        dragging: false,
        reverting: false,
        _noFinalSort: null
      });

      if(this.domPosition.prev) {
        $(this.domPosition.prev).after(this.currentItem);
      } else {
        $(this.domPosition.parent).prepend(this.currentItem);
      }
    }

    return this;

  },

  serialize: function(o) {

    var items = this._getItemsAsjQuery(o && o.connected);
    var str = []; o = o || {};

    $(items).each(function() {
      var res = ($(o.item || this).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
      if(res) str.push((o.key || res[1]+'[]')+'='+(o.key && o.expression ? res[1] : res[2]));
    });

    if(!str.length && o.key) {
      str.push(o.key + '=');
    }

    return str.join('&');

  },

  toArray: function(o) {

    var items = this._getItemsAsjQuery(o && o.connected);
    var ret = []; o = o || {};

    items.each(function() { ret.push($(o.item || this).attr(o.attribute || 'id') || ''); });
    return ret;

  },

  /* Be careful with the following core functions */
  _intersectsWith: function(item) {

    var x1 = this.positionAbs.left,
      x2 = x1 + this.helperProportions.width,
      y1 = this.positionAbs.top,
      y2 = y1 + this.helperProportions.height;

    var l = item.left,
      r = l + item.width,
      t = item.top,
      b = t + item.height;

    var dyClick = this.offset.click.top,
      dxClick = this.offset.click.left;

    var isOverElement = (y1 + dyClick) > t && (y1 + dyClick) < b && (x1 + dxClick) > l && (x1 + dxClick) < r;

    if(    this.options.tolerance == "pointer"
      || this.options.forcePointerForContainers
      || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? 'width' : 'height'] > item[this.floating ? 'width' : 'height'])
    ) {
      return isOverElement;
    } else {

      return (l < x1 + (this.helperProportions.width / 2) // Right Half
        && x2 - (this.helperProportions.width / 2) < r // Left Half
        && t < y1 + (this.helperProportions.height / 2) // Bottom Half
        && y2 - (this.helperProportions.height / 2) < b ); // Top Half

    }
  },

  _intersectsWithPointer: function(item) {

    var isOverElementHeight = (this.options.axis === 'x') || $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
      isOverElementWidth = (this.options.axis === 'y') || $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
      isOverElement = isOverElementHeight && isOverElementWidth,
      verticalDirection = this._getDragVerticalDirection(),
      horizontalDirection = this._getDragHorizontalDirection();

    if (!isOverElement)
      return false;

    return this.floating ?
      ( ((horizontalDirection && horizontalDirection == "right") || verticalDirection == "down") ? 2 : 1 )
      : ( verticalDirection && (verticalDirection == "down" ? 2 : 1) );

  },

  _intersectsWithSides: function(item) {

    var isOverBottomHalf = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
      isOverRightHalf = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
      verticalDirection = this._getDragVerticalDirection(),
      horizontalDirection = this._getDragHorizontalDirection();

    if (this.floating && horizontalDirection) {
      return ((horizontalDirection == "right" && isOverRightHalf) || (horizontalDirection == "left" && !isOverRightHalf));
    } else {
      return verticalDirection && ((verticalDirection == "down" && isOverBottomHalf) || (verticalDirection == "up" && !isOverBottomHalf));
    }

  },

  _getDragVerticalDirection: function() {
    var delta = this.positionAbs.top - this.lastPositionAbs.top;
    return delta != 0 && (delta > 0 ? "down" : "up");
  },

  _getDragHorizontalDirection: function() {
    var delta = this.positionAbs.left - this.lastPositionAbs.left;
    return delta != 0 && (delta > 0 ? "right" : "left");
  },

  refresh: function(event) {
    this._refreshItems(event);
    this.refreshPositions();
    return this;
  },

  _connectWith: function() {
    var options = this.options;
    return options.connectWith.constructor == String
      ? [options.connectWith]
      : options.connectWith;
  },

  _getItemsAsjQuery: function(connected) {

    var items = [];
    var queries = [];
    var connectWith = this._connectWith();

    if(connectWith && connected) {
      for (var i = connectWith.length - 1; i >= 0; i--){
        var cur = $(connectWith[i]);
        for (var j = cur.length - 1; j >= 0; j--){
          var inst = $.data(cur[j], this.widgetName);
          if(inst && inst != this && !inst.options.disabled) {
            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), inst]);
          }
        };
      };
    }

    queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), this]);

    for (var i = queries.length - 1; i >= 0; i--){
      queries[i][0].each(function() {
        items.push(this);
      });
    };

    return $(items);

  },

  _removeCurrentsFromItems: function() {

    var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

    this.items = $.grep(this.items, function (item) {
      for (var j=0; j < list.length; j++) {
        if(list[j] == item.item[0])
          return false;
      };
      return true;
    });

  },

  _refreshItems: function(event) {

    this.items = [];
    this.containers = [this];
    var items = this.items;
    var queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]];
    var connectWith = this._connectWith();

    if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
      for (var i = connectWith.length - 1; i >= 0; i--){
        var cur = $(connectWith[i]);
        for (var j = cur.length - 1; j >= 0; j--){
          var inst = $.data(cur[j], this.widgetName);
          if(inst && inst != this && !inst.options.disabled) {
            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
            this.containers.push(inst);
          }
        };
      };
    }

    for (var i = queries.length - 1; i >= 0; i--) {
      var targetData = queries[i][1];
      var _queries = queries[i][0];

      for (var j=0, queriesLength = _queries.length; j < queriesLength; j++) {
        var item = $(_queries[j]);

        item.data(this.widgetName + '-item', targetData); // Data for target checking (mouse manager)

        items.push({
          item: item,
          instance: targetData,
          width: 0, height: 0,
          left: 0, top: 0
        });
      };
    };

  },

  refreshPositions: function(fast) {

    //This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
    if(this.offsetParent && this.helper) {
      this.offset.parent = this._getParentOffset();
    }

    for (var i = this.items.length - 1; i >= 0; i--){
      var item = this.items[i];

      //We ignore calculating positions of all connected containers when we're not over them
      if(item.instance != this.currentContainer && this.currentContainer && item.item[0] != this.currentItem[0])
        continue;

      var t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

      if (!fast) {
        item.width = t.outerWidth();
        item.height = t.outerHeight();
      }

      var p = t.offset();
      item.left = p.left;
      item.top = p.top;
    };

    if(this.options.custom && this.options.custom.refreshContainers) {
      this.options.custom.refreshContainers.call(this);
    } else {
      for (var i = this.containers.length - 1; i >= 0; i--){
        var p = this.containers[i].element.offset();
        this.containers[i].containerCache.left = p.left;
        this.containers[i].containerCache.top = p.top;
        this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
        this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      };
    }

    return this;
  },

  _createPlaceholder: function(that) {
    that = that || this;
    var o = that.options;

    if(!o.placeholder || o.placeholder.constructor == String) {
      var className = o.placeholder;
      o.placeholder = {
        element: function() {

          var el = $(document.createElement(that.currentItem[0].nodeName))
            .addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
            .removeClass("ui-sortable-helper")[0];

          if(!className)
            el.style.visibility = "hidden";

          return el;
        },
        update: function(container, p) {

          // 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
          // 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
          if(className && !o.forcePlaceholderSize) return;

          //If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
          if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css('paddingTop')||0, 10) - parseInt(that.currentItem.css('paddingBottom')||0, 10)); };
          if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css('paddingLeft')||0, 10) - parseInt(that.currentItem.css('paddingRight')||0, 10)); };
        }
      };
    }

    //Create the placeholder
    that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

    //Append it after the actual current item
    that.currentItem.after(that.placeholder);

    //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
    o.placeholder.update(that, that.placeholder);

  },

  _contactContainers: function(event) {

    // get innermost container that intersects with item
    var innermostContainer = null, innermostIndex = null;


    for (var i = this.containers.length - 1; i >= 0; i--){

      // never consider a container that's located within the item itself
      if($.contains(this.currentItem[0], this.containers[i].element[0]))
        continue;

      if(this._intersectsWith(this.containers[i].containerCache)) {

        // if we've already found a container and it's more "inner" than this, then continue
        if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0]))
          continue;

        innermostContainer = this.containers[i];
        innermostIndex = i;

      } else {
        // container doesn't intersect. trigger "out" event if necessary
        if(this.containers[i].containerCache.over) {
          this.containers[i]._trigger("out", event, this._uiHash(this));
          this.containers[i].containerCache.over = 0;
        }
      }

    }

    // if no intersecting containers found, return
    if(!innermostContainer) return;

    // move the item into the container if it's not there already
    if(this.containers.length === 1) {
      this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
      this.containers[innermostIndex].containerCache.over = 1;
    } else {

      //When entering a new container, we will find the item with the least distance and append our item near it
      var dist = 10000; var itemWithLeastDistance = null;
      var posProperty = this.containers[innermostIndex].floating ? 'left' : 'top';
      var sizeProperty = this.containers[innermostIndex].floating ? 'width' : 'height';
      var base = this.positionAbs[posProperty] + this.offset.click[posProperty];
      for (var j = this.items.length - 1; j >= 0; j--) {
        if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) continue;
        if(this.items[j].item[0] == this.currentItem[0]) continue;
        var cur = this.items[j].item.offset()[posProperty];
        var nearBottom = false;
        if(Math.abs(cur - base) > Math.abs(cur + this.items[j][sizeProperty] - base)){
          nearBottom = true;
          cur += this.items[j][sizeProperty];
        }

        if(Math.abs(cur - base) < dist) {
          dist = Math.abs(cur - base); itemWithLeastDistance = this.items[j];
          this.direction = nearBottom ? "up": "down";
        }
      }

      if(!itemWithLeastDistance && !this.options.dropOnEmpty) //Check if dropOnEmpty is enabled
        return;

      this.currentContainer = this.containers[innermostIndex];
      itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
      this._trigger("change", event, this._uiHash());
      this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));

      //Update the placeholder
      this.options.placeholder.update(this.currentContainer, this.placeholder);

      this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
      this.containers[innermostIndex].containerCache.over = 1;
    }


  },

  _createHelper: function(event) {

    var o = this.options;
    var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper == 'clone' ? this.currentItem.clone() : this.currentItem);

    if(!helper.parents('body').length) //Add the helper to the DOM if that didn't happen already
      $(o.appendTo != 'parent' ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);

    if(helper[0] == this.currentItem[0])
      this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };

    if(helper[0].style.width == '' || o.forceHelperSize) helper.width(this.currentItem.width());
    if(helper[0].style.height == '' || o.forceHelperSize) helper.height(this.currentItem.height());

    return helper;

  },

  _adjustOffsetFromHelper: function(obj) {
    if (typeof obj == 'string') {
      obj = obj.split(' ');
    }
    if ($.isArray(obj)) {
      obj = {left: +obj[0], top: +obj[1] || 0};
    }
    if ('left' in obj) {
      this.offset.click.left = obj.left + this.margins.left;
    }
    if ('right' in obj) {
      this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
    }
    if ('top' in obj) {
      this.offset.click.top = obj.top + this.margins.top;
    }
    if ('bottom' in obj) {
      this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
    }
  },

  _getParentOffset: function() {


    //Get the offsetParent and cache its position
    this.offsetParent = this.helper.offsetParent();
    var po = this.offsetParent.offset();

    // This is a special case where we need to modify a offset calculated on start, since the following happened:
    // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
    // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
    //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
    if(this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
      po.left += this.scrollParent.scrollLeft();
      po.top += this.scrollParent.scrollTop();
    }

    if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
    || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.ui.ie)) //Ugly IE fix
      po = { top: 0, left: 0 };

    return {
      top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
      left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
    };

  },

  _getRelativeOffset: function() {

    if(this.cssPosition == "relative") {
      var p = this.currentItem.position();
      return {
        top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
        left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
      };
    } else {
      return { top: 0, left: 0 };
    }

  },

  _cacheMargins: function() {
    this.margins = {
      left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
      top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
    };
  },

  _cacheHelperProportions: function() {
    this.helperProportions = {
      width: this.helper.outerWidth(),
      height: this.helper.outerHeight()
    };
  },

  _setContainment: function() {

    var o = this.options;
    if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
    if(o.containment == 'document' || o.containment == 'window') this.containment = [
      0 - this.offset.relative.left - this.offset.parent.left,
      0 - this.offset.relative.top - this.offset.parent.top,
      $(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left,
      ($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
    ];

    if(!(/^(document|window|parent)$/).test(o.containment)) {
      var ce = $(o.containment)[0];
      var co = $(o.containment).offset();
      var over = ($(ce).css("overflow") != 'hidden');

      this.containment = [
        co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
        co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
        co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
        co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
      ];
    }

  },

  _convertPositionTo: function(d, pos) {

    if(!pos) pos = this.position;
    var mod = d == "absolute" ? 1 : -1;
    var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

    return {
      top: (
        pos.top                                 // The absolute mouse position
        + this.offset.relative.top * mod                    // Only for relative positioned nodes: Relative offset from element to offset parent
        + this.offset.parent.top * mod                      // The offsetParent's offset without borders (offset + border)
        - ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
      ),
      left: (
        pos.left                                // The absolute mouse position
        + this.offset.relative.left * mod                   // Only for relative positioned nodes: Relative offset from element to offset parent
        + this.offset.parent.left * mod                     // The offsetParent's offset without borders (offset + border)
        - ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
      )
    };

  },

  _generatePosition: function(event) {

    var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

    // This is another very weird special case that only happens for relative elements:
    // 1. If the css position is relative
    // 2. and the scroll parent is the document or similar to the offset parent
    // we have to refresh the relative offset during the scroll so there are no jumps
    if(this.cssPosition == 'relative' && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
      this.offset.relative = this._getRelativeOffset();
    }

    var pageX = event.pageX;
    var pageY = event.pageY;

    /*
     * - Position constraining -
     * Constrain the position to a mix of grid, containment.
     */

    if(this.originalPosition) { //If we are not dragging yet, we won't check for options

      if(this.containment) {
        if(event.pageX - this.offset.click.left < this.containment[0]) pageX = this.containment[0] + this.offset.click.left;
        if(event.pageY - this.offset.click.top < this.containment[1]) pageY = this.containment[1] + this.offset.click.top;
        if(event.pageX - this.offset.click.left > this.containment[2]) pageX = this.containment[2] + this.offset.click.left;
        if(event.pageY - this.offset.click.top > this.containment[3]) pageY = this.containment[3] + this.offset.click.top;
      }

      if(o.grid) {
        var top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
        pageY = this.containment ? (!(top - this.offset.click.top < this.containment[1] || top - this.offset.click.top > this.containment[3]) ? top : (!(top - this.offset.click.top < this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

        var left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
        pageX = this.containment ? (!(left - this.offset.click.left < this.containment[0] || left - this.offset.click.left > this.containment[2]) ? left : (!(left - this.offset.click.left < this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
      }

    }

    return {
      top: (
        pageY                               // The absolute mouse position
        - this.offset.click.top                         // Click offset (relative to the element)
        - this.offset.relative.top                        // Only for relative positioned nodes: Relative offset from element to offset parent
        - this.offset.parent.top                        // The offsetParent's offset without borders (offset + border)
        + ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
      ),
      left: (
        pageX                               // The absolute mouse position
        - this.offset.click.left                        // Click offset (relative to the element)
        - this.offset.relative.left                       // Only for relative positioned nodes: Relative offset from element to offset parent
        - this.offset.parent.left                       // The offsetParent's offset without borders (offset + border)
        + ( ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
      )
    };

  },

  _rearrange: function(event, i, a, hardRefresh) {

    a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == 'down' ? i.item[0] : i.item[0].nextSibling));

    //Various things done here to improve the performance:
    // 1. we create a setTimeout, that calls refreshPositions
    // 2. on the instance, we have a counter variable, that get's higher after every append
    // 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
    // 4. this lets only the last addition to the timeout stack through
    this.counter = this.counter ? ++this.counter : 1;
    var counter = this.counter;

    this._delay(function() {
      if(counter == this.counter) this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
    });

  },

  _clear: function(event, noPropagation) {

    this.reverting = false;
    // We delay all events that have to be triggered to after the point where the placeholder has been removed and
    // everything else normalized again
    var delayedTriggers = [];

    // We first have to update the dom position of the actual currentItem
    // Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
    if(!this._noFinalSort && this.currentItem.parent().length) this.placeholder.before(this.currentItem);
    this._noFinalSort = null;

    if(this.helper[0] == this.currentItem[0]) {
      for(var i in this._storedCSS) {
        if(this._storedCSS[i] == 'auto' || this._storedCSS[i] == 'static') this._storedCSS[i] = '';
      }
      this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
    } else {
      this.currentItem.show();
    }

    if(this.fromOutside && !noPropagation) delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
    if((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !noPropagation) delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed

    // Check if the items Container has Changed and trigger appropriate
    // events.
    if (this !== this.currentContainer) {
      if(!noPropagation) {
        delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
        delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
        delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
      }
    }


    //Post events to containers
    for (var i = this.containers.length - 1; i >= 0; i--){
      if(!noPropagation) delayedTriggers.push((function(c) { return function(event) { c._trigger("deactivate", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
      if(this.containers[i].containerCache.over) {
        delayedTriggers.push((function(c) { return function(event) { c._trigger("out", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
        this.containers[i].containerCache.over = 0;
      }
    }

    //Do what was originally in plugins
    if(this._storedCursor) $('body').css("cursor", this._storedCursor); //Reset cursor
    if(this._storedOpacity) this.helper.css("opacity", this._storedOpacity); //Reset opacity
    if(this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == 'auto' ? '' : this._storedZIndex); //Reset z-index

    this.dragging = false;
    if(this.cancelHelperRemoval) {
      if(!noPropagation) {
        this._trigger("beforeStop", event, this._uiHash());
        for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
        this._trigger("stop", event, this._uiHash());
      }

      this.fromOutside = false;
      return false;
    }

    if(!noPropagation) this._trigger("beforeStop", event, this._uiHash());

    //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

    if(this.helper[0] != this.currentItem[0]) this.helper.remove(); this.helper = null;

    if(!noPropagation) {
      for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
      this._trigger("stop", event, this._uiHash());
    }

    this.fromOutside = false;
    return true;

  },

  _trigger: function() {
    if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
      this.cancel();
    }
  },

  _uiHash: function(_inst) {
    var inst = _inst || this;
    return {
      helper: inst.helper,
      placeholder: inst.placeholder || $([]),
      position: inst.position,
      originalPosition: inst.originalPosition,
      offset: inst.positionAbs,
      item: inst.currentItem,
      sender: _inst ? _inst.element : null
    };
  }

});

})(jQuery);

;(jQuery.effects || (function($, undefined) {

var backCompat = $.uiBackCompat !== false,
  // prefix used for storing data on .data()
  dataSpace = "ui-effects-";

$.effects = {
  effect: {}
};

/*!
 * jQuery Color Animations v2.0.0
 * http://jquery.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Mon Aug 13 13:41:02 2012 -0500
 */
(function( jQuery, undefined ) {

  var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),

  // plusequals test for += 100 -= 100
  rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
  // a set of RE's that can match strings and generate color tuples.
  stringParsers = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function( execResult ) {
        return [
          execResult[ 1 ],
          execResult[ 2 ],
          execResult[ 3 ],
          execResult[ 4 ]
        ];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function( execResult ) {
        return [
          execResult[ 1 ] * 2.55,
          execResult[ 2 ] * 2.55,
          execResult[ 3 ] * 2.55,
          execResult[ 4 ]
        ];
      }
    }, {
      // this regex ignores A-F because it's compared against an already lowercased string
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function( execResult ) {
        return [
          parseInt( execResult[ 1 ], 16 ),
          parseInt( execResult[ 2 ], 16 ),
          parseInt( execResult[ 3 ], 16 )
        ];
      }
    }, {
      // this regex ignores A-F because it's compared against an already lowercased string
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function( execResult ) {
        return [
          parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
          parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
          parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
        ];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function( execResult ) {
        return [
          execResult[ 1 ],
          execResult[ 2 ] / 100,
          execResult[ 3 ] / 100,
          execResult[ 4 ]
        ];
      }
    }],

  // jQuery.Color( )
  color = jQuery.Color = function( color, green, blue, alpha ) {
    return new jQuery.Color.fn.parse( color, green, blue, alpha );
  },
  spaces = {
    rgba: {
      props: {
        red: {
          idx: 0,
          type: "byte"
        },
        green: {
          idx: 1,
          type: "byte"
        },
        blue: {
          idx: 2,
          type: "byte"
        }
      }
    },

    hsla: {
      props: {
        hue: {
          idx: 0,
          type: "degrees"
        },
        saturation: {
          idx: 1,
          type: "percent"
        },
        lightness: {
          idx: 2,
          type: "percent"
        }
      }
    }
  },
  propTypes = {
    "byte": {
      floor: true,
      max: 255
    },
    "percent": {
      max: 1
    },
    "degrees": {
      mod: 360,
      floor: true
    }
  },
  support = color.support = {},

  // element for support tests
  supportElem = jQuery( "<p>" )[ 0 ],

  // colors = jQuery.Color.names
  colors,

  // local aliases of functions called often
  each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
  space.cache = "_" + spaceName;
  space.props.alpha = {
    idx: 3,
    type: "percent",
    def: 1
  };
});

function clamp( value, prop, allowEmpty ) {
  var type = propTypes[ prop.type ] || {};

  if ( value == null ) {
    return (allowEmpty || !prop.def) ? null : prop.def;
  }

  // ~~ is an short way of doing floor for positive numbers
  value = type.floor ? ~~value : parseFloat( value );

  // IE will pass in empty strings as value for alpha,
  // which will hit this case
  if ( isNaN( value ) ) {
    return prop.def;
  }

  if ( type.mod ) {
    // we add mod before modding to make sure that negatives values
    // get converted properly: -10 -> 350
    return (value + type.mod) % type.mod;
  }

  // for now all property types without mod have min and max
  return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
  var inst = color(),
    rgba = inst._rgba = [];

  string = string.toLowerCase();

  each( stringParsers, function( i, parser ) {
    var parsed,
      match = parser.re.exec( string ),
      values = match && parser.parse( match ),
      spaceName = parser.space || "rgba";

    if ( values ) {
      parsed = inst[ spaceName ]( values );

      // if this was an rgba parse the assignment might happen twice
      // oh well....
      inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
      rgba = inst._rgba = parsed._rgba;

      // exit each( stringParsers ) here because we matched
      return false;
    }
  });

  // Found a stringParser that handled it
  if ( rgba.length ) {

    // if this came from a parsed string, force "transparent" when alpha is 0
    // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
    if ( rgba.join() === "0,0,0,0" ) {
      jQuery.extend( rgba, colors.transparent );
    }
    return inst;
  }

  // named colors
  return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
  parse: function( red, green, blue, alpha ) {
    if ( red === undefined ) {
      this._rgba = [ null, null, null, null ];
      return this;
    }
    if ( red.jquery || red.nodeType ) {
      red = jQuery( red ).css( green );
      green = undefined;
    }

    var inst = this,
      type = jQuery.type( red ),
      rgba = this._rgba = [];

    // more than 1 argument specified - assume ( red, green, blue, alpha )
    if ( green !== undefined ) {
      red = [ red, green, blue, alpha ];
      type = "array";
    }

    if ( type === "string" ) {
      return this.parse( stringParse( red ) || colors._default );
    }

    if ( type === "array" ) {
      each( spaces.rgba.props, function( key, prop ) {
        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
      });
      return this;
    }

    if ( type === "object" ) {
      if ( red instanceof color ) {
        each( spaces, function( spaceName, space ) {
          if ( red[ space.cache ] ) {
            inst[ space.cache ] = red[ space.cache ].slice();
          }
        });
      } else {
        each( spaces, function( spaceName, space ) {
          var cache = space.cache;
          each( space.props, function( key, prop ) {

            // if the cache doesn't exist, and we know how to convert
            if ( !inst[ cache ] && space.to ) {

              // if the value was null, we don't need to copy it
              // if the key was alpha, we don't need to copy it either
              if ( key === "alpha" || red[ key ] == null ) {
                return;
              }
              inst[ cache ] = space.to( inst._rgba );
            }

            // this is the only case where we allow nulls for ALL properties.
            // call clamp with alwaysAllowEmpty
            inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
          });

          // everything defined but alpha?
          if ( inst[ cache ] && $.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
            // use the default of 1
            inst[ cache ][ 3 ] = 1;
            if ( space.from ) {
              inst._rgba = space.from( inst[ cache ] );
            }
          }
        });
      }
      return this;
    }
  },
  is: function( compare ) {
    var is = color( compare ),
      same = true,
      inst = this;

    each( spaces, function( _, space ) {
      var localCache,
        isCache = is[ space.cache ];
      if (isCache) {
        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
        each( space.props, function( _, prop ) {
          if ( isCache[ prop.idx ] != null ) {
            same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
            return same;
          }
        });
      }
      return same;
    });
    return same;
  },
  _space: function() {
    var used = [],
      inst = this;
    each( spaces, function( spaceName, space ) {
      if ( inst[ space.cache ] ) {
        used.push( spaceName );
      }
    });
    return used.pop();
  },
  transition: function( other, distance ) {
    var end = color( other ),
      spaceName = end._space(),
      space = spaces[ spaceName ],
      startColor = this.alpha() === 0 ? color( "transparent" ) : this,
      start = startColor[ space.cache ] || space.to( startColor._rgba ),
      result = start.slice();

    end = end[ space.cache ];
    each( space.props, function( key, prop ) {
      var index = prop.idx,
        startValue = start[ index ],
        endValue = end[ index ],
        type = propTypes[ prop.type ] || {};

      // if null, don't override start value
      if ( endValue === null ) {
        return;
      }
      // if null - use end
      if ( startValue === null ) {
        result[ index ] = endValue;
      } else {
        if ( type.mod ) {
          if ( endValue - startValue > type.mod / 2 ) {
            startValue += type.mod;
          } else if ( startValue - endValue > type.mod / 2 ) {
            startValue -= type.mod;
          }
        }
        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
      }
    });
    return this[ spaceName ]( result );
  },
  blend: function( opaque ) {
    // if we are already opaque - return ourself
    if ( this._rgba[ 3 ] === 1 ) {
      return this;
    }

    var rgb = this._rgba.slice(),
      a = rgb.pop(),
      blend = color( opaque )._rgba;

    return color( jQuery.map( rgb, function( v, i ) {
      return ( 1 - a ) * blend[ i ] + a * v;
    }));
  },
  toRgbaString: function() {
    var prefix = "rgba(",
      rgba = jQuery.map( this._rgba, function( v, i ) {
        return v == null ? ( i > 2 ? 1 : 0 ) : v;
      });

    if ( rgba[ 3 ] === 1 ) {
      rgba.pop();
      prefix = "rgb(";
    }

    return prefix + rgba.join() + ")";
  },
  toHslaString: function() {
    var prefix = "hsla(",
      hsla = jQuery.map( this.hsla(), function( v, i ) {
        if ( v == null ) {
          v = i > 2 ? 1 : 0;
        }

        // catch 1 and 2
        if ( i && i < 3 ) {
          v = Math.round( v * 100 ) + "%";
        }
        return v;
      });

    if ( hsla[ 3 ] === 1 ) {
      hsla.pop();
      prefix = "hsl(";
    }
    return prefix + hsla.join() + ")";
  },
  toHexString: function( includeAlpha ) {
    var rgba = this._rgba.slice(),
      alpha = rgba.pop();

    if ( includeAlpha ) {
      rgba.push( ~~( alpha * 255 ) );
    }

    return "#" + jQuery.map( rgba, function( v ) {

      // default to 0 when nulls exist
      v = ( v || 0 ).toString( 16 );
      return v.length === 1 ? "0" + v : v;
    }).join("");
  },
  toString: function() {
    return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
  }
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
  h = ( h + 1 ) % 1;
  if ( h * 6 < 1 ) {
    return p + (q - p) * h * 6;
  }
  if ( h * 2 < 1) {
    return q;
  }
  if ( h * 3 < 2 ) {
    return p + (q - p) * ((2/3) - h) * 6;
  }
  return p;
}

spaces.hsla.to = function ( rgba ) {
  if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
    return [ null, null, null, rgba[ 3 ] ];
  }
  var r = rgba[ 0 ] / 255,
    g = rgba[ 1 ] / 255,
    b = rgba[ 2 ] / 255,
    a = rgba[ 3 ],
    max = Math.max( r, g, b ),
    min = Math.min( r, g, b ),
    diff = max - min,
    add = max + min,
    l = add * 0.5,
    h, s;

  if ( min === max ) {
    h = 0;
  } else if ( r === max ) {
    h = ( 60 * ( g - b ) / diff ) + 360;
  } else if ( g === max ) {
    h = ( 60 * ( b - r ) / diff ) + 120;
  } else {
    h = ( 60 * ( r - g ) / diff ) + 240;
  }

  if ( l === 0 || l === 1 ) {
    s = l;
  } else if ( l <= 0.5 ) {
    s = diff / add;
  } else {
    s = diff / ( 2 - add );
  }
  return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function ( hsla ) {
  if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
    return [ null, null, null, hsla[ 3 ] ];
  }
  var h = hsla[ 0 ] / 360,
    s = hsla[ 1 ],
    l = hsla[ 2 ],
    a = hsla[ 3 ],
    q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
    p = 2 * l - q;

  return [
    Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
    Math.round( hue2rgb( p, q, h ) * 255 ),
    Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
    a
  ];
};


each( spaces, function( spaceName, space ) {
  var props = space.props,
    cache = space.cache,
    to = space.to,
    from = space.from;

  // makes rgba() and hsla()
  color.fn[ spaceName ] = function( value ) {

    // generate a cache for this space if it doesn't exist
    if ( to && !this[ cache ] ) {
      this[ cache ] = to( this._rgba );
    }
    if ( value === undefined ) {
      return this[ cache ].slice();
    }

    var ret,
      type = jQuery.type( value ),
      arr = ( type === "array" || type === "object" ) ? value : arguments,
      local = this[ cache ].slice();

    each( props, function( key, prop ) {
      var val = arr[ type === "object" ? key : prop.idx ];
      if ( val == null ) {
        val = local[ prop.idx ];
      }
      local[ prop.idx ] = clamp( val, prop );
    });

    if ( from ) {
      ret = color( from( local ) );
      ret[ cache ] = local;
      return ret;
    } else {
      return color( local );
    }
  };

  // makes red() green() blue() alpha() hue() saturation() lightness()
  each( props, function( key, prop ) {
    // alpha is included in more than one space
    if ( color.fn[ key ] ) {
      return;
    }
    color.fn[ key ] = function( value ) {
      var vtype = jQuery.type( value ),
        fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
        local = this[ fn ](),
        cur = local[ prop.idx ],
        match;

      if ( vtype === "undefined" ) {
        return cur;
      }

      if ( vtype === "function" ) {
        value = value.call( this, cur );
        vtype = jQuery.type( value );
      }
      if ( value == null && prop.empty ) {
        return this;
      }
      if ( vtype === "string" ) {
        match = rplusequals.exec( value );
        if ( match ) {
          value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
        }
      }
      local[ prop.idx ] = value;
      return this[ fn ]( local );
    };
  });
});

// add .fx.step functions
each( stepHooks, function( i, hook ) {
  jQuery.cssHooks[ hook ] = {
    set: function( elem, value ) {
      var parsed, curElem,
        backgroundColor = "";

      if ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) {
        value = color( parsed || value );
        if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
          curElem = hook === "backgroundColor" ? elem.parentNode : elem;
          while (
            (backgroundColor === "" || backgroundColor === "transparent") &&
            curElem && curElem.style
          ) {
            try {
              backgroundColor = jQuery.css( curElem, "backgroundColor" );
              curElem = curElem.parentNode;
            } catch ( e ) {
            }
          }

          value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
            backgroundColor :
            "_default" );
        }

        value = value.toRgbaString();
      }
      try {
        elem.style[ hook ] = value;
      } catch( error ) {
        // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
      }
    }
  };
  jQuery.fx.step[ hook ] = function( fx ) {
    if ( !fx.colorInit ) {
      fx.start = color( fx.elem, hook );
      fx.end = color( fx.end );
      fx.colorInit = true;
    }
    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
  };
});

jQuery.cssHooks.borderColor = {
  expand: function( value ) {
    var expanded = {};

    each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
      expanded[ "border" + part + "Color" ] = value;
    });
    return expanded;
  }
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
  // 4.1. Basic color keywords
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",

  // 4.2.3. "transparent" color keyword
  transparent: [ null, null, null, 0 ],

  _default: "#ffffff"
};

})( jQuery );



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
  shorthandStyles = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
  };

$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
  $.fx.step[ prop ] = function( fx ) {
    if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
      jQuery.style( fx.elem, prop, fx.end );
      fx.setAttr = true;
    }
  };
});

function getElementStyles() {
  var style = this.ownerDocument.defaultView ?
      this.ownerDocument.defaultView.getComputedStyle( this, null ) :
      this.currentStyle,
    newStyle = {},
    key,
    len;

  // webkit enumerates style porperties
  if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
    len = style.length;
    while ( len-- ) {
      key = style[ len ];
      if ( typeof style[ key ] === "string" ) {
        newStyle[ $.camelCase( key ) ] = style[ key ];
      }
    }
  } else {
    for ( key in style ) {
      if ( typeof style[ key ] === "string" ) {
        newStyle[ key ] = style[ key ];
      }
    }
  }

  return newStyle;
}


function styleDifference( oldStyle, newStyle ) {
  var diff = {},
    name, value;

  for ( name in newStyle ) {
    value = newStyle[ name ];
    if ( oldStyle[ name ] !== value ) {
      if ( !shorthandStyles[ name ] ) {
        if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
          diff[ name ] = value;
        }
      }
    }
  }

  return diff;
}

$.effects.animateClass = function( value, duration, easing, callback ) {
  var o = $.speed( duration, easing, callback );

  return this.queue( function() {
    var animated = $( this ),
      baseClass = animated.attr( "class" ) || "",
      applyClassChange,
      allAnimations = o.children ? animated.find( "*" ).andSelf() : animated;

    // map the animated objects to store the original styles.
    allAnimations = allAnimations.map(function() {
      var el = $( this );
      return {
        el: el,
        start: getElementStyles.call( this )
      };
    });

    // apply class change
    applyClassChange = function() {
      $.each( classAnimationActions, function(i, action) {
        if ( value[ action ] ) {
          animated[ action + "Class" ]( value[ action ] );
        }
      });
    };
    applyClassChange();

    // map all animated objects again - calculate new styles and diff
    allAnimations = allAnimations.map(function() {
      this.end = getElementStyles.call( this.el[ 0 ] );
      this.diff = styleDifference( this.start, this.end );
      return this;
    });

    // apply original class
    animated.attr( "class", baseClass );

    // map all animated objects again - this time collecting a promise
    allAnimations = allAnimations.map(function() {
      var styleInfo = this,
        dfd = $.Deferred(),
        opts = jQuery.extend({}, o, {
          queue: false,
          complete: function() {
            dfd.resolve( styleInfo );
          }
        });

      this.el.animate( this.diff, opts );
      return dfd.promise();
    });

    // once all animations have completed:
    $.when.apply( $, allAnimations.get() ).done(function() {

      // set the final class
      applyClassChange();

      // for each animated element,
      // clear all css properties that were animated
      $.each( arguments, function() {
        var el = this.el;
        $.each( this.diff, function(key) {
          el.css( key, '' );
        });
      });

      // this is guarnteed to be there if you use jQuery.speed()
      // it also handles dequeuing the next anim...
      o.complete.call( animated[ 0 ] );
    });
  });
};

$.fn.extend({
  _addClass: $.fn.addClass,
  addClass: function( classNames, speed, easing, callback ) {
    return speed ?
      $.effects.animateClass.call( this,
        { add: classNames }, speed, easing, callback ) :
      this._addClass( classNames );
  },

  _removeClass: $.fn.removeClass,
  removeClass: function( classNames, speed, easing, callback ) {
    return speed ?
      $.effects.animateClass.call( this,
        { remove: classNames }, speed, easing, callback ) :
      this._removeClass( classNames );
  },

  _toggleClass: $.fn.toggleClass,
  toggleClass: function( classNames, force, speed, easing, callback ) {
    if ( typeof force === "boolean" || force === undefined ) {
      if ( !speed ) {
        // without speed parameter
        return this._toggleClass( classNames, force );
      } else {
        return $.effects.animateClass.call( this,
          (force ? { add: classNames } : { remove: classNames }),
          speed, easing, callback );
      }
    } else {
      // without force parameter
      return $.effects.animateClass.call( this,
        { toggle: classNames }, force, speed, easing );
    }
  },

  switchClass: function( remove, add, speed, easing, callback) {
    return $.effects.animateClass.call( this, {
      add: add,
      remove: remove
    }, speed, easing, callback );
  }
});

})();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(function() {

$.extend( $.effects, {
  version: "1.9.2",

  // Saves a set of properties in a data storage
  save: function( element, set ) {
    for( var i=0; i < set.length; i++ ) {
      if ( set[ i ] !== null ) {
        element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
      }
    }
  },

  // Restores a set of previously saved properties from a data storage
  restore: function( element, set ) {
    var val, i;
    for( i=0; i < set.length; i++ ) {
      if ( set[ i ] !== null ) {
        val = element.data( dataSpace + set[ i ] );
        // support: jQuery 1.6.2
        // http://bugs.jquery.com/ticket/9917
        // jQuery 1.6.2 incorrectly returns undefined for any falsy value.
        // We can't differentiate between "" and 0 here, so we just assume
        // empty string since it's likely to be a more common value...
        if ( val === undefined ) {
          val = "";
        }
        element.css( set[ i ], val );
      }
    }
  },

  setMode: function( el, mode ) {
    if (mode === "toggle") {
      mode = el.is( ":hidden" ) ? "show" : "hide";
    }
    return mode;
  },

  // Translates a [top,left] array into a baseline value
  // this should be a little more flexible in the future to handle a string & hash
  getBaseline: function( origin, original ) {
    var y, x;
    switch ( origin[ 0 ] ) {
      case "top": y = 0; break;
      case "middle": y = 0.5; break;
      case "bottom": y = 1; break;
      default: y = origin[ 0 ] / original.height;
    }
    switch ( origin[ 1 ] ) {
      case "left": x = 0; break;
      case "center": x = 0.5; break;
      case "right": x = 1; break;
      default: x = origin[ 1 ] / original.width;
    }
    return {
      x: x,
      y: y
    };
  },

  // Wraps the element around a wrapper that copies position properties
  createWrapper: function( element ) {

    // if the element is already wrapped, return it
    if ( element.parent().is( ".ui-effects-wrapper" )) {
      return element.parent();
    }

    // wrap the element
    var props = {
        width: element.outerWidth(true),
        height: element.outerHeight(true),
        "float": element.css( "float" )
      },
      wrapper = $( "<div></div>" )
        .addClass( "ui-effects-wrapper" )
        .css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
      // Store the size in case width/height are defined in % - Fixes #5245
      size = {
        width: element.width(),
        height: element.height()
      },
      active = document.activeElement;

    // support: Firefox
    // Firefox incorrectly exposes anonymous content
    // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
    try {
      active.id;
    } catch( e ) {
      active = document.body;
    }

    element.wrap( wrapper );

    // Fixes #7595 - Elements lose focus when wrapped.
    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
      $( active ).focus();
    }

    wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

    // transfer positioning properties to the wrapper
    if ( element.css( "position" ) === "static" ) {
      wrapper.css({ position: "relative" });
      element.css({ position: "relative" });
    } else {
      $.extend( props, {
        position: element.css( "position" ),
        zIndex: element.css( "z-index" )
      });
      $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
        props[ pos ] = element.css( pos );
        if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
          props[ pos ] = "auto";
        }
      });
      element.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      });
    }
    element.css(size);

    return wrapper.css( props ).show();
  },

  removeWrapper: function( element ) {
    var active = document.activeElement;

    if ( element.parent().is( ".ui-effects-wrapper" ) ) {
      element.parent().replaceWith( element );

      // Fixes #7595 - Elements lose focus when wrapped.
      if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
        $( active ).focus();
      }
    }


    return element;
  },

  setTransition: function( element, list, factor, value ) {
    value = value || {};
    $.each( list, function( i, x ) {
      var unit = element.cssUnit( x );
      if ( unit[ 0 ] > 0 ) {
        value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
      }
    });
    return value;
  }
});

// return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

  // allow passing all options as the first parameter
  if ( $.isPlainObject( effect ) ) {
    options = effect;
    effect = effect.effect;
  }

  // convert to an object
  effect = { effect: effect };

  // catch (effect, null, ...)
  if ( options == null ) {
    options = {};
  }

  // catch (effect, callback)
  if ( $.isFunction( options ) ) {
    callback = options;
    speed = null;
    options = {};
  }

  // catch (effect, speed, ?)
  if ( typeof options === "number" || $.fx.speeds[ options ] ) {
    callback = speed;
    speed = options;
    options = {};
  }

  // catch (effect, options, callback)
  if ( $.isFunction( speed ) ) {
    callback = speed;
    speed = null;
  }

  // add options to effect
  if ( options ) {
    $.extend( effect, options );
  }

  speed = speed || options.duration;
  effect.duration = $.fx.off ? 0 :
    typeof speed === "number" ? speed :
    speed in $.fx.speeds ? $.fx.speeds[ speed ] :
    $.fx.speeds._default;

  effect.complete = callback || options.complete;

  return effect;
}

function standardSpeed( speed ) {
  // valid standard speeds
  if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
    return true;
  }

  // invalid strings - treat as "normal" speed
  if ( typeof speed === "string" && !$.effects.effect[ speed ] ) {
    // TODO: remove in 2.0 (#7115)
    if ( backCompat && $.effects[ speed ] ) {
      return false;
    }
    return true;
  }

  return false;
}

$.fn.extend({
  effect: function( /* effect, options, speed, callback */ ) {
    var args = _normalizeArguments.apply( this, arguments ),
      mode = args.mode,
      queue = args.queue,
      effectMethod = $.effects.effect[ args.effect ],

      // DEPRECATED: remove in 2.0 (#7115)
      oldEffectMethod = !effectMethod && backCompat && $.effects[ args.effect ];

    if ( $.fx.off || !( effectMethod || oldEffectMethod ) ) {
      // delegate to the original method (e.g., .show()) if possible
      if ( mode ) {
        return this[ mode ]( args.duration, args.complete );
      } else {
        return this.each( function() {
          if ( args.complete ) {
            args.complete.call( this );
          }
        });
      }
    }

    function run( next ) {
      var elem = $( this ),
        complete = args.complete,
        mode = args.mode;

      function done() {
        if ( $.isFunction( complete ) ) {
          complete.call( elem[0] );
        }
        if ( $.isFunction( next ) ) {
          next();
        }
      }

      // if the element is hiddden and mode is hide,
      // or element is visible and mode is show
      if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
        done();
      } else {
        effectMethod.call( elem[0], args, done );
      }
    }

    // TODO: remove this check in 2.0, effectMethod will always be true
    if ( effectMethod ) {
      return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
    } else {
      // DEPRECATED: remove in 2.0 (#7115)
      return oldEffectMethod.call(this, {
        options: args,
        duration: args.duration,
        callback: args.complete,
        mode: args.mode
      });
    }
  },

  _show: $.fn.show,
  show: function( speed ) {
    if ( standardSpeed( speed ) ) {
      return this._show.apply( this, arguments );
    } else {
      var args = _normalizeArguments.apply( this, arguments );
      args.mode = "show";
      return this.effect.call( this, args );
    }
  },

  _hide: $.fn.hide,
  hide: function( speed ) {
    if ( standardSpeed( speed ) ) {
      return this._hide.apply( this, arguments );
    } else {
      var args = _normalizeArguments.apply( this, arguments );
      args.mode = "hide";
      return this.effect.call( this, args );
    }
  },

  // jQuery core overloads toggle and creates _toggle
  __toggle: $.fn.toggle,
  toggle: function( speed ) {
    if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
      return this.__toggle.apply( this, arguments );
    } else {
      var args = _normalizeArguments.apply( this, arguments );
      args.mode = "toggle";
      return this.effect.call( this, args );
    }
  },

  // helper functions
  cssUnit: function(key) {
    var style = this.css( key ),
      val = [];

    $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
      if ( style.indexOf( unit ) > 0 ) {
        val = [ parseFloat( style ), unit ];
      }
    });
    return val;
  }
});

})();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
  baseEasings[ name ] = function( p ) {
    return Math.pow( p, i + 2 );
  };
});

$.extend( baseEasings, {
  Sine: function ( p ) {
    return 1 - Math.cos( p * Math.PI / 2 );
  },
  Circ: function ( p ) {
    return 1 - Math.sqrt( 1 - p * p );
  },
  Elastic: function( p ) {
    return p === 0 || p === 1 ? p :
      -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
  },
  Back: function( p ) {
    return p * p * ( 3 * p - 2 );
  },
  Bounce: function ( p ) {
    var pow2,
      bounce = 4;

    while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
    return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
  }
});

$.each( baseEasings, function( name, easeIn ) {
  $.easing[ "easeIn" + name ] = easeIn;
  $.easing[ "easeOut" + name ] = function( p ) {
    return 1 - easeIn( 1 - p );
  };
  $.easing[ "easeInOut" + name ] = function( p ) {
    return p < 0.5 ?
      easeIn( p * 2 ) / 2 :
      1 - easeIn( p * -2 + 2 ) / 2;
  };
});

})();

})(jQuery));

(function( $, undefined ) {

var uid = 0,
  hideProps = {},
  showProps = {};

hideProps.height = hideProps.paddingTop = hideProps.paddingBottom =
  hideProps.borderTopWidth = hideProps.borderBottomWidth = "hide";
showProps.height = showProps.paddingTop = showProps.paddingBottom =
  showProps.borderTopWidth = showProps.borderBottomWidth = "show";

$.widget( "ui.accordion", {
  version: "1.9.2",
  options: {
    active: 0,
    animate: {},
    collapsible: false,
    event: "click",
    header: "> li > :first-child,> :not(li):even",
    heightStyle: "auto",
    icons: {
      activeHeader: "ui-icon-triangle-1-s",
      header: "ui-icon-triangle-1-e"
    },

    // callbacks
    activate: null,
    beforeActivate: null
  },

  _create: function() {
    var accordionId = this.accordionId = "ui-accordion-" +
        (this.element.attr( "id" ) || ++uid),
      options = this.options;

    this.prevShow = this.prevHide = $();
    this.element.addClass( "ui-accordion ui-widget ui-helper-reset" );

    this.headers = this.element.find( options.header )
      .addClass( "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" );
    this._hoverable( this.headers );
    this._focusable( this.headers );

    this.headers.next()
      .addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
      .hide();

    // don't allow collapsible: false and active: false / null
    if ( !options.collapsible && (options.active === false || options.active == null) ) {
      options.active = 0;
    }
    // handle negative values
    if ( options.active < 0 ) {
      options.active += this.headers.length;
    }
    this.active = this._findActive( options.active )
      .addClass( "ui-accordion-header-active ui-state-active" )
      .toggleClass( "ui-corner-all ui-corner-top" );
    this.active.next()
      .addClass( "ui-accordion-content-active" )
      .show();

    this._createIcons();
    this.refresh();

    // ARIA
    this.element.attr( "role", "tablist" );

    this.headers
      .attr( "role", "tab" )
      .each(function( i ) {
        var header = $( this ),
          headerId = header.attr( "id" ),
          panel = header.next(),
          panelId = panel.attr( "id" );
        if ( !headerId ) {
          headerId = accordionId + "-header-" + i;
          header.attr( "id", headerId );
        }
        if ( !panelId ) {
          panelId = accordionId + "-panel-" + i;
          panel.attr( "id", panelId );
        }
        header.attr( "aria-controls", panelId );
        panel.attr( "aria-labelledby", headerId );
      })
      .next()
        .attr( "role", "tabpanel" );

    this.headers
      .not( this.active )
      .attr({
        "aria-selected": "false",
        tabIndex: -1
      })
      .next()
        .attr({
          "aria-expanded": "false",
          "aria-hidden": "true"
        })
        .hide();

    // make sure at least one header is in the tab order
    if ( !this.active.length ) {
      this.headers.eq( 0 ).attr( "tabIndex", 0 );
    } else {
      this.active.attr({
        "aria-selected": "true",
        tabIndex: 0
      })
      .next()
        .attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        });
    }

    this._on( this.headers, { keydown: "_keydown" });
    this._on( this.headers.next(), { keydown: "_panelKeyDown" });
    this._setupEvents( options.event );
  },

  _getCreateEventData: function() {
    return {
      header: this.active,
      content: !this.active.length ? $() : this.active.next()
    };
  },

  _createIcons: function() {
    var icons = this.options.icons;
    if ( icons ) {
      $( "<span>" )
        .addClass( "ui-accordion-header-icon ui-icon " + icons.header )
        .prependTo( this.headers );
      this.active.children( ".ui-accordion-header-icon" )
        .removeClass( icons.header )
        .addClass( icons.activeHeader );
      this.headers.addClass( "ui-accordion-icons" );
    }
  },

  _destroyIcons: function() {
    this.headers
      .removeClass( "ui-accordion-icons" )
      .children( ".ui-accordion-header-icon" )
        .remove();
  },

  _destroy: function() {
    var contents;

    // clean up main element
    this.element
      .removeClass( "ui-accordion ui-widget ui-helper-reset" )
      .removeAttr( "role" );

    // clean up headers
    this.headers
      .removeClass( "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
      .removeAttr( "role" )
      .removeAttr( "aria-selected" )
      .removeAttr( "aria-controls" )
      .removeAttr( "tabIndex" )
      .each(function() {
        if ( /^ui-accordion/.test( this.id ) ) {
          this.removeAttribute( "id" );
        }
      });
    this._destroyIcons();

    // clean up content panels
    contents = this.headers.next()
      .css( "display", "" )
      .removeAttr( "role" )
      .removeAttr( "aria-expanded" )
      .removeAttr( "aria-hidden" )
      .removeAttr( "aria-labelledby" )
      .removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled" )
      .each(function() {
        if ( /^ui-accordion/.test( this.id ) ) {
          this.removeAttribute( "id" );
        }
      });
    if ( this.options.heightStyle !== "content" ) {
      contents.css( "height", "" );
    }
  },

  _setOption: function( key, value ) {
    if ( key === "active" ) {
      // _activate() will handle invalid values and update this.options
      this._activate( value );
      return;
    }

    if ( key === "event" ) {
      if ( this.options.event ) {
        this._off( this.headers, this.options.event );
      }
      this._setupEvents( value );
    }

    this._super( key, value );

    // setting collapsible: false while collapsed; open first panel
    if ( key === "collapsible" && !value && this.options.active === false ) {
      this._activate( 0 );
    }

    if ( key === "icons" ) {
      this._destroyIcons();
      if ( value ) {
        this._createIcons();
      }
    }

    // #5332 - opacity doesn't cascade to positioned elements in IE
    // so we need to add the disabled class to the headers and panels
    if ( key === "disabled" ) {
      this.headers.add( this.headers.next() )
        .toggleClass( "ui-state-disabled", !!value );
    }
  },

  _keydown: function( event ) {
    if ( event.altKey || event.ctrlKey ) {
      return;
    }

    var keyCode = $.ui.keyCode,
      length = this.headers.length,
      currentIndex = this.headers.index( event.target ),
      toFocus = false;

    switch ( event.keyCode ) {
      case keyCode.RIGHT:
      case keyCode.DOWN:
        toFocus = this.headers[ ( currentIndex + 1 ) % length ];
        break;
      case keyCode.LEFT:
      case keyCode.UP:
        toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
        break;
      case keyCode.SPACE:
      case keyCode.ENTER:
        this._eventHandler( event );
        break;
      case keyCode.HOME:
        toFocus = this.headers[ 0 ];
        break;
      case keyCode.END:
        toFocus = this.headers[ length - 1 ];
        break;
    }

    if ( toFocus ) {
      $( event.target ).attr( "tabIndex", -1 );
      $( toFocus ).attr( "tabIndex", 0 );
      toFocus.focus();
      event.preventDefault();
    }
  },

  _panelKeyDown : function( event ) {
    if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
      $( event.currentTarget ).prev().focus();
    }
  },

  refresh: function() {
    var maxHeight, overflow,
      heightStyle = this.options.heightStyle,
      parent = this.element.parent();


    if ( heightStyle === "fill" ) {
      // IE 6 treats height like minHeight, so we need to turn off overflow
      // in order to get a reliable height
      // we use the minHeight support test because we assume that only
      // browsers that don't support minHeight will treat height as minHeight
      if ( !$.support.minHeight ) {
        overflow = parent.css( "overflow" );
        parent.css( "overflow", "hidden");
      }
      maxHeight = parent.height();
      this.element.siblings( ":visible" ).each(function() {
        var elem = $( this ),
          position = elem.css( "position" );

        if ( position === "absolute" || position === "fixed" ) {
          return;
        }
        maxHeight -= elem.outerHeight( true );
      });
      if ( overflow ) {
        parent.css( "overflow", overflow );
      }

      this.headers.each(function() {
        maxHeight -= $( this ).outerHeight( true );
      });

      this.headers.next()
        .each(function() {
          $( this ).height( Math.max( 0, maxHeight -
            $( this ).innerHeight() + $( this ).height() ) );
        })
        .css( "overflow", "auto" );
    } else if ( heightStyle === "auto" ) {
      maxHeight = 0;
      this.headers.next()
        .each(function() {
          maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
        })
        .height( maxHeight );
    }
  },

  _activate: function( index ) {
    var active = this._findActive( index )[ 0 ];

    // trying to activate the already active panel
    if ( active === this.active[ 0 ] ) {
      return;
    }

    // trying to collapse, simulate a click on the currently active header
    active = active || this.active[ 0 ];

    this._eventHandler({
      target: active,
      currentTarget: active,
      preventDefault: $.noop
    });
  },

  _findActive: function( selector ) {
    return typeof selector === "number" ? this.headers.eq( selector ) : $();
  },

  _setupEvents: function( event ) {
    var events = {};
    if ( !event ) {
      return;
    }
    $.each( event.split(" "), function( index, eventName ) {
      events[ eventName ] = "_eventHandler";
    });
    this._on( this.headers, events );
  },

  _eventHandler: function( event ) {
    var options = this.options,
      active = this.active,
      clicked = $( event.currentTarget ),
      clickedIsActive = clicked[ 0 ] === active[ 0 ],
      collapsing = clickedIsActive && options.collapsible,
      toShow = collapsing ? $() : clicked.next(),
      toHide = active.next(),
      eventData = {
        oldHeader: active,
        oldPanel: toHide,
        newHeader: collapsing ? $() : clicked,
        newPanel: toShow
      };

    event.preventDefault();

    if (
        // click on active header, but not collapsible
        ( clickedIsActive && !options.collapsible ) ||
        // allow canceling activation
        ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
      return;
    }

    options.active = collapsing ? false : this.headers.index( clicked );

    // when the call to ._toggle() comes after the class changes
    // it causes a very odd bug in IE 8 (see #6720)
    this.active = clickedIsActive ? $() : clicked;
    this._toggle( eventData );

    // switch classes
    // corner classes on the previously active header stay after the animation
    active.removeClass( "ui-accordion-header-active ui-state-active" );
    if ( options.icons ) {
      active.children( ".ui-accordion-header-icon" )
        .removeClass( options.icons.activeHeader )
        .addClass( options.icons.header );
    }

    if ( !clickedIsActive ) {
      clicked
        .removeClass( "ui-corner-all" )
        .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
      if ( options.icons ) {
        clicked.children( ".ui-accordion-header-icon" )
          .removeClass( options.icons.header )
          .addClass( options.icons.activeHeader );
      }

      clicked
        .next()
        .addClass( "ui-accordion-content-active" );
    }
  },

  _toggle: function( data ) {
    var toShow = data.newPanel,
      toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

    // handle activating a panel during the animation for another activation
    this.prevShow.add( this.prevHide ).stop( true, true );
    this.prevShow = toShow;
    this.prevHide = toHide;

    if ( this.options.animate ) {
      this._animate( toShow, toHide, data );
    } else {
      toHide.hide();
      toShow.show();
      this._toggleComplete( data );
    }

    toHide.attr({
      "aria-expanded": "false",
      "aria-hidden": "true"
    });
    toHide.prev().attr( "aria-selected", "false" );
    // if we're switching panels, remove the old header from the tab order
    // if we're opening from collapsed state, remove the previous header from the tab order
    // if we're collapsing, then keep the collapsing header in the tab order
    if ( toShow.length && toHide.length ) {
      toHide.prev().attr( "tabIndex", -1 );
    } else if ( toShow.length ) {
      this.headers.filter(function() {
        return $( this ).attr( "tabIndex" ) === 0;
      })
      .attr( "tabIndex", -1 );
    }

    toShow
      .attr({
        "aria-expanded": "true",
        "aria-hidden": "false"
      })
      .prev()
        .attr({
          "aria-selected": "true",
          tabIndex: 0
        });
  },

  _animate: function( toShow, toHide, data ) {
    var total, easing, duration,
      that = this,
      adjust = 0,
      down = toShow.length &&
        ( !toHide.length || ( toShow.index() < toHide.index() ) ),
      animate = this.options.animate || {},
      options = down && animate.down || animate,
      complete = function() {
        that._toggleComplete( data );
      };

    if ( typeof options === "number" ) {
      duration = options;
    }
    if ( typeof options === "string" ) {
      easing = options;
    }
    // fall back from options to animation in case of partial down settings
    easing = easing || options.easing || animate.easing;
    duration = duration || options.duration || animate.duration;

    if ( !toHide.length ) {
      return toShow.animate( showProps, duration, easing, complete );
    }
    if ( !toShow.length ) {
      return toHide.animate( hideProps, duration, easing, complete );
    }

    total = toShow.show().outerHeight();
    toHide.animate( hideProps, {
      duration: duration,
      easing: easing,
      step: function( now, fx ) {
        fx.now = Math.round( now );
      }
    });
    toShow
      .hide()
      .animate( showProps, {
        duration: duration,
        easing: easing,
        complete: complete,
        step: function( now, fx ) {
          fx.now = Math.round( now );
          if ( fx.prop !== "height" ) {
            adjust += fx.now;
          } else if ( that.options.heightStyle !== "content" ) {
            fx.now = Math.round( total - toHide.outerHeight() - adjust );
            adjust = 0;
          }
        }
      });
  },

  _toggleComplete: function( data ) {
    var toHide = data.oldPanel;

    toHide
      .removeClass( "ui-accordion-content-active" )
      .prev()
        .removeClass( "ui-corner-top" )
        .addClass( "ui-corner-all" );

    // Work around for rendering bug in IE (#5421)
    if ( toHide.length ) {
      toHide.parent()[0].className = toHide.parent()[0].className;
    }

    this._trigger( "activate", null, data );
  }
});



// DEPRECATED
if ( $.uiBackCompat !== false ) {
  // navigation options
  (function( $, prototype ) {
    $.extend( prototype.options, {
      navigation: false,
      navigationFilter: function() {
        return this.href.toLowerCase() === location.href.toLowerCase();
      }
    });

    var _create = prototype._create;
    prototype._create = function() {
      if ( this.options.navigation ) {
        var that = this,
          headers = this.element.find( this.options.header ),
          content = headers.next(),
          current = headers.add( content )
            .find( "a" )
            .filter( this.options.navigationFilter )
            [ 0 ];
        if ( current ) {
          headers.add( content ).each( function( index ) {
            if ( $.contains( this, current ) ) {
              that.options.active = Math.floor( index / 2 );
              return false;
            }
          });
        }
      }
      _create.call( this );
    };
  }( jQuery, jQuery.ui.accordion.prototype ) );

  // height options
  (function( $, prototype ) {
    $.extend( prototype.options, {
      heightStyle: null, // remove default so we fall back to old values
      autoHeight: true, // use heightStyle: "auto"
      clearStyle: false, // use heightStyle: "content"
      fillSpace: false // use heightStyle: "fill"
    });

    var _create = prototype._create,
      _setOption = prototype._setOption;

    $.extend( prototype, {
      _create: function() {
        this.options.heightStyle = this.options.heightStyle ||
          this._mergeHeightStyle();

        _create.call( this );
      },

      _setOption: function( key ) {
        if ( key === "autoHeight" || key === "clearStyle" || key === "fillSpace" ) {
          this.options.heightStyle = this._mergeHeightStyle();
        }
        _setOption.apply( this, arguments );
      },

      _mergeHeightStyle: function() {
        var options = this.options;

        if ( options.fillSpace ) {
          return "fill";
        }

        if ( options.clearStyle ) {
          return "content";
        }

        if ( options.autoHeight ) {
          return "auto";
        }
      }
    });
  }( jQuery, jQuery.ui.accordion.prototype ) );

  // icon options
  (function( $, prototype ) {
    $.extend( prototype.options.icons, {
      activeHeader: null, // remove default so we fall back to old values
      headerSelected: "ui-icon-triangle-1-s"
    });

    var _createIcons = prototype._createIcons;
    prototype._createIcons = function() {
      if ( this.options.icons ) {
        this.options.icons.activeHeader = this.options.icons.activeHeader ||
          this.options.icons.headerSelected;
      }
      _createIcons.call( this );
    };
  }( jQuery, jQuery.ui.accordion.prototype ) );

  // expanded active option, activate method
  (function( $, prototype ) {
    prototype.activate = prototype._activate;

    var _findActive = prototype._findActive;
    prototype._findActive = function( index ) {
      if ( index === -1 ) {
        index = false;
      }
      if ( index && typeof index !== "number" ) {
        index = this.headers.index( this.headers.filter( index ) );
        if ( index === -1 ) {
          index = false;
        }
      }
      return _findActive.call( this, index );
    };
  }( jQuery, jQuery.ui.accordion.prototype ) );

  // resize method
  jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh;

  // change events
  (function( $, prototype ) {
    $.extend( prototype.options, {
      change: null,
      changestart: null
    });

    var _trigger = prototype._trigger;
    prototype._trigger = function( type, event, data ) {
      var ret = _trigger.apply( this, arguments );
      if ( !ret ) {
        return false;
      }

      if ( type === "beforeActivate" ) {
        ret = _trigger.call( this, "changestart", event, {
          oldHeader: data.oldHeader,
          oldContent: data.oldPanel,
          newHeader: data.newHeader,
          newContent: data.newPanel
        });
      } else if ( type === "activate" ) {
        ret = _trigger.call( this, "change", event, {
          oldHeader: data.oldHeader,
          oldContent: data.oldPanel,
          newHeader: data.newHeader,
          newContent: data.newPanel
        });
      }
      return ret;
    };
  }( jQuery, jQuery.ui.accordion.prototype ) );

  // animated option
  // NOTE: this only provides support for "slide", "bounceslide", and easings
  // not the full $.ui.accordion.animations API
  (function( $, prototype ) {
    $.extend( prototype.options, {
      animate: null,
      animated: "slide"
    });

    var _create = prototype._create;
    prototype._create = function() {
      var options = this.options;
      if ( options.animate === null ) {
        if ( !options.animated ) {
          options.animate = false;
        } else if ( options.animated === "slide" ) {
          options.animate = 300;
        } else if ( options.animated === "bounceslide" ) {
          options.animate = {
            duration: 200,
            down: {
              easing: "easeOutBounce",
              duration: 1000
            }
          };
        } else {
          options.animate = options.animated;
        }
      }

      _create.call( this );
    };
  }( jQuery, jQuery.ui.accordion.prototype ) );
}

})( jQuery );

(function( $, undefined ) {

// used to prevent race conditions with remote data sources
var requestIndex = 0;

$.widget( "ui.autocomplete", {
  version: "1.9.2",
  defaultElement: "<input>",
  options: {
    appendTo: "body",
    autoFocus: false,
    delay: 300,
    minLength: 1,
    position: {
      my: "left top",
      at: "left bottom",
      collision: "none"
    },
    source: null,

    // callbacks
    change: null,
    close: null,
    focus: null,
    open: null,
    response: null,
    search: null,
    select: null
  },

  pending: 0,

  _create: function() {
    // Some browsers only repeat keydown events, not keypress events,
    // so we use the suppressKeyPress flag to determine if we've already
    // handled the keydown event. #7269
    // Unfortunately the code for & in keypress is the same as the up arrow,
    // so we use the suppressKeyPressRepeat flag to avoid handling keypress
    // events when we know the keydown event was used to modify the
    // search term. #7799
    var suppressKeyPress, suppressKeyPressRepeat, suppressInput;

    this.isMultiLine = this._isMultiLine();
    this.valueMethod = this.element[ this.element.is( "input,textarea" ) ? "val" : "text" ];
    this.isNewMenu = true;

    this.element
      .addClass( "ui-autocomplete-input" )
      .attr( "autocomplete", "off" );

    this._on( this.element, {
      keydown: function( event ) {
        if ( this.element.prop( "readOnly" ) ) {
          suppressKeyPress = true;
          suppressInput = true;
          suppressKeyPressRepeat = true;
          return;
        }

        suppressKeyPress = false;
        suppressInput = false;
        suppressKeyPressRepeat = false;
        var keyCode = $.ui.keyCode;
        switch( event.keyCode ) {
        case keyCode.PAGE_UP:
          suppressKeyPress = true;
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          suppressKeyPress = true;
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          suppressKeyPress = true;
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          suppressKeyPress = true;
          this._keyEvent( "next", event );
          break;
        case keyCode.ENTER:
        case keyCode.NUMPAD_ENTER:
          // when menu is open and has focus
          if ( this.menu.active ) {
            // #6055 - Opera still allows the keypress to occur
            // which causes forms to submit
            suppressKeyPress = true;
            event.preventDefault();
            this.menu.select( event );
          }
          break;
        case keyCode.TAB:
          if ( this.menu.active ) {
            this.menu.select( event );
          }
          break;
        case keyCode.ESCAPE:
          if ( this.menu.element.is( ":visible" ) ) {
            this._value( this.term );
            this.close( event );
            // Different browsers have different default behavior for escape
            // Single press can mean undo or clear
            // Double press in IE means clear the whole form
            event.preventDefault();
          }
          break;
        default:
          suppressKeyPressRepeat = true;
          // search timeout should be triggered before the input value is changed
          this._searchTimeout( event );
          break;
        }
      },
      keypress: function( event ) {
        if ( suppressKeyPress ) {
          suppressKeyPress = false;
          event.preventDefault();
          return;
        }
        if ( suppressKeyPressRepeat ) {
          return;
        }

        // replicate some key handlers to allow them to repeat in Firefox and Opera
        var keyCode = $.ui.keyCode;
        switch( event.keyCode ) {
        case keyCode.PAGE_UP:
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          this._keyEvent( "next", event );
          break;
        }
      },
      input: function( event ) {
        if ( suppressInput ) {
          suppressInput = false;
          event.preventDefault();
          return;
        }
        this._searchTimeout( event );
      },
      focus: function() {
        this.selectedItem = null;
        this.previous = this._value();
      },
      blur: function( event ) {
        if ( this.cancelBlur ) {
          delete this.cancelBlur;
          return;
        }

        clearTimeout( this.searching );
        this.close( event );
        this._change( event );
      }
    });

    this._initSource();
    this.menu = $( "<ul>" )
      .addClass( "ui-autocomplete" )
      .appendTo( this.document.find( this.options.appendTo || "body" )[ 0 ] )
      .menu({
        // custom key handling for now
        input: $(),
        // disable ARIA support, the live region takes care of that
        role: null
      })
      .zIndex( this.element.zIndex() + 1 )
      .hide()
      .data( "menu" );

    this._on( this.menu.element, {
      mousedown: function( event ) {
        // prevent moving focus out of the text field
        event.preventDefault();

        // IE doesn't prevent moving focus even with event.preventDefault()
        // so we set a flag to know when we should ignore the blur event
        this.cancelBlur = true;
        this._delay(function() {
          delete this.cancelBlur;
        });

        // clicking on the scrollbar causes focus to shift to the body
        // but we can't detect a mouseup or a click immediately afterward
        // so we have to track the next mousedown and close the menu if
        // the user clicks somewhere outside of the autocomplete
        var menuElement = this.menu.element[ 0 ];
        if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
          this._delay(function() {
            var that = this;
            this.document.one( "mousedown", function( event ) {
              if ( event.target !== that.element[ 0 ] &&
                  event.target !== menuElement &&
                  !$.contains( menuElement, event.target ) ) {
                that.close();
              }
            });
          });
        }
      },
      menufocus: function( event, ui ) {
        // #7024 - Prevent accidental activation of menu items in Firefox
        if ( this.isNewMenu ) {
          this.isNewMenu = false;
          if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
            this.menu.blur();

            this.document.one( "mousemove", function() {
              $( event.target ).trigger( event.originalEvent );
            });

            return;
          }
        }

        // back compat for _renderItem using item.autocomplete, via #7810
        // TODO remove the fallback, see #8156
        var item = ui.item.data( "ui-autocomplete-item" ) || ui.item.data( "item.autocomplete" );
        if ( false !== this._trigger( "focus", event, { item: item } ) ) {
          // use value to match what will end up in the input, if it was a key event
          if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
            this._value( item.value );
          }
        } else {
          // Normally the input is populated with the item's value as the
          // menu is navigated, causing screen readers to notice a change and
          // announce the item. Since the focus event was canceled, this doesn't
          // happen, so we update the live region so that screen readers can
          // still notice the change and announce it.
          this.liveRegion.text( item.value );
        }
      },
      menuselect: function( event, ui ) {
        // back compat for _renderItem using item.autocomplete, via #7810
        // TODO remove the fallback, see #8156
        var item = ui.item.data( "ui-autocomplete-item" ) || ui.item.data( "item.autocomplete" ),
          previous = this.previous;

        // only trigger when focus was lost (click on menu)
        if ( this.element[0] !== this.document[0].activeElement ) {
          this.element.focus();
          this.previous = previous;
          // #6109 - IE triggers two focus events and the second
          // is asynchronous, so we need to reset the previous
          // term synchronously and asynchronously :-(
          this._delay(function() {
            this.previous = previous;
            this.selectedItem = item;
          });
        }

        if ( false !== this._trigger( "select", event, { item: item } ) ) {
          this._value( item.value );
        }
        // reset the term after the select event
        // this allows custom select handling to work properly
        this.term = this._value();

        this.close( event );
        this.selectedItem = item;
      }
    });

    this.liveRegion = $( "<span>", {
        role: "status",
        "aria-live": "polite"
      })
      .addClass( "ui-helper-hidden-accessible" )
      .insertAfter( this.element );

    if ( $.fn.bgiframe ) {
      this.menu.element.bgiframe();
    }

    // turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on( this.window, {
      beforeunload: function() {
        this.element.removeAttr( "autocomplete" );
      }
    });
  },

  _destroy: function() {
    clearTimeout( this.searching );
    this.element
      .removeClass( "ui-autocomplete-input" )
      .removeAttr( "autocomplete" );
    this.menu.element.remove();
    this.liveRegion.remove();
  },

  _setOption: function( key, value ) {
    this._super( key, value );
    if ( key === "source" ) {
      this._initSource();
    }
    if ( key === "appendTo" ) {
      this.menu.element.appendTo( this.document.find( value || "body" )[0] );
    }
    if ( key === "disabled" && value && this.xhr ) {
      this.xhr.abort();
    }
  },

  _isMultiLine: function() {
    // Textareas are always multi-line
    if ( this.element.is( "textarea" ) ) {
      return true;
    }
    // Inputs are always single-line, even if inside a contentEditable element
    // IE also treats inputs as contentEditable
    if ( this.element.is( "input" ) ) {
      return false;
    }
    // All other element types are determined by whether or not they're contentEditable
    return this.element.prop( "isContentEditable" );
  },

  _initSource: function() {
    var array, url,
      that = this;
    if ( $.isArray(this.options.source) ) {
      array = this.options.source;
      this.source = function( request, response ) {
        response( $.ui.autocomplete.filter( array, request.term ) );
      };
    } else if ( typeof this.options.source === "string" ) {
      url = this.options.source;
      this.source = function( request, response ) {
        if ( that.xhr ) {
          that.xhr.abort();
        }
        that.xhr = $.ajax({
          url: url,
          data: request,
          dataType: "json",
          success: function( data ) {
            response( data );
          },
          error: function() {
            response( [] );
          }
        });
      };
    } else {
      this.source = this.options.source;
    }
  },

  _searchTimeout: function( event ) {
    clearTimeout( this.searching );
    this.searching = this._delay(function() {
      // only search if the value has changed
      if ( this.term !== this._value() ) {
        this.selectedItem = null;
        this.search( null, event );
      }
    }, this.options.delay );
  },

  search: function( value, event ) {
    value = value != null ? value : this._value();

    // always save the actual value, not the one passed as an argument
    this.term = this._value();

    if ( value.length < this.options.minLength ) {
      return this.close( event );
    }

    if ( this._trigger( "search", event ) === false ) {
      return;
    }

    return this._search( value );
  },

  _search: function( value ) {
    this.pending++;
    this.element.addClass( "ui-autocomplete-loading" );
    this.cancelSearch = false;

    this.source( { term: value }, this._response() );
  },

  _response: function() {
    var that = this,
      index = ++requestIndex;

    return function( content ) {
      if ( index === requestIndex ) {
        that.__response( content );
      }

      that.pending--;
      if ( !that.pending ) {
        that.element.removeClass( "ui-autocomplete-loading" );
      }
    };
  },

  __response: function( content ) {
    if ( content ) {
      content = this._normalize( content );
    }
    this._trigger( "response", null, { content: content } );
    if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
      this._suggest( content );
      this._trigger( "open" );
    } else {
      // use ._close() instead of .close() so we don't cancel future searches
      this._close();
    }
  },

  close: function( event ) {
    this.cancelSearch = true;
    this._close( event );
  },

  _close: function( event ) {
    if ( this.menu.element.is( ":visible" ) ) {
      this.menu.element.hide();
      this.menu.blur();
      this.isNewMenu = true;
      this._trigger( "close", event );
    }
  },

  _change: function( event ) {
    if ( this.previous !== this._value() ) {
      this._trigger( "change", event, { item: this.selectedItem } );
    }
  },

  _normalize: function( items ) {
    // assume all items have the right format when the first item is complete
    if ( items.length && items[0].label && items[0].value ) {
      return items;
    }
    return $.map( items, function( item ) {
      if ( typeof item === "string" ) {
        return {
          label: item,
          value: item
        };
      }
      return $.extend({
        label: item.label || item.value,
        value: item.value || item.label
      }, item );
    });
  },

  _suggest: function( items ) {
    var ul = this.menu.element
      .empty()
      .zIndex( this.element.zIndex() + 1 );
    this._renderMenu( ul, items );
    this.menu.refresh();

    // size and position menu
    ul.show();
    this._resizeMenu();
    ul.position( $.extend({
      of: this.element
    }, this.options.position ));

    if ( this.options.autoFocus ) {
      this.menu.next();
    }
  },

  _resizeMenu: function() {
    var ul = this.menu.element;
    ul.outerWidth( Math.max(
      // Firefox wraps long text (possibly a rounding bug)
      // so we add 1px to avoid the wrapping (#7513)
      ul.width( "" ).outerWidth() + 1,
      this.element.outerWidth()
    ) );
  },

  _renderMenu: function( ul, items ) {
    var that = this;
    $.each( items, function( index, item ) {
      that._renderItemData( ul, item );
    });
  },

  _renderItemData: function( ul, item ) {
    return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
  },

  _renderItem: function( ul, item ) {
    return $( "<li>" )
      .append( $( "<a>" ).text( item.label ) )
      .appendTo( ul );
  },

  _move: function( direction, event ) {
    if ( !this.menu.element.is( ":visible" ) ) {
      this.search( null, event );
      return;
    }
    if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
        this.menu.isLastItem() && /^next/.test( direction ) ) {
      this._value( this.term );
      this.menu.blur();
      return;
    }
    this.menu[ direction ]( event );
  },

  widget: function() {
    return this.menu.element;
  },

  _value: function() {
    return this.valueMethod.apply( this.element, arguments );
  },

  _keyEvent: function( keyEvent, event ) {
    if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
      this._move( keyEvent, event );

      // prevents moving cursor to beginning/end of the text field in some browsers
      event.preventDefault();
    }
  }
});

$.extend( $.ui.autocomplete, {
  escapeRegex: function( value ) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  },
  filter: function(array, term) {
    var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
    return $.grep( array, function(value) {
      return matcher.test( value.label || value.value || value );
    });
  }
});


// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
  options: {
    messages: {
      noResults: "No search results.",
      results: function( amount ) {
        return amount + ( amount > 1 ? " results are" : " result is" ) +
          " available, use up and down arrow keys to navigate.";
      }
    }
  },

  __response: function( content ) {
    var message;
    this._superApply( arguments );
    if ( this.options.disabled || this.cancelSearch ) {
      return;
    }
    if ( content && content.length ) {
      message = this.options.messages.results( content.length );
    } else {
      message = this.options.messages.noResults;
    }
    this.liveRegion.text( message );
  }
});


}( jQuery ));

(function( $, undefined ) {

var lastActive, startXPos, startYPos, clickDragged,
  baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
  stateClasses = "ui-state-hover ui-state-active ",
  typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
  formResetHandler = function() {
    var buttons = $( this ).find( ":ui-button" );
    setTimeout(function() {
      buttons.button( "refresh" );
    }, 1 );
  },
  radioGroup = function( radio ) {
    var name = radio.name,
      form = radio.form,
      radios = $( [] );
    if ( name ) {
      if ( form ) {
        radios = $( form ).find( "[name='" + name + "']" );
      } else {
        radios = $( "[name='" + name + "']", radio.ownerDocument )
          .filter(function() {
            return !this.form;
          });
      }
    }
    return radios;
  };

$.widget( "ui.button", {
  version: "1.9.2",
  defaultElement: "<button>",
  options: {
    disabled: null,
    text: true,
    label: null,
    icons: {
      primary: null,
      secondary: null
    }
  },
  _create: function() {
    this.element.closest( "form" )
      .unbind( "reset" + this.eventNamespace )
      .bind( "reset" + this.eventNamespace, formResetHandler );

    if ( typeof this.options.disabled !== "boolean" ) {
      this.options.disabled = !!this.element.prop( "disabled" );
    } else {
      this.element.prop( "disabled", this.options.disabled );
    }

    this._determineButtonType();
    this.hasTitle = !!this.buttonElement.attr( "title" );

    var that = this,
      options = this.options,
      toggleButton = this.type === "checkbox" || this.type === "radio",
      activeClass = !toggleButton ? "ui-state-active" : "",
      focusClass = "ui-state-focus";

    if ( options.label === null ) {
      options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
    }

    this._hoverable( this.buttonElement );

    this.buttonElement
      .addClass( baseClasses )
      .attr( "role", "button" )
      .bind( "mouseenter" + this.eventNamespace, function() {
        if ( options.disabled ) {
          return;
        }
        if ( this === lastActive ) {
          $( this ).addClass( "ui-state-active" );
        }
      })
      .bind( "mouseleave" + this.eventNamespace, function() {
        if ( options.disabled ) {
          return;
        }
        $( this ).removeClass( activeClass );
      })
      .bind( "click" + this.eventNamespace, function( event ) {
        if ( options.disabled ) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });

    this.element
      .bind( "focus" + this.eventNamespace, function() {
        // no need to check disabled, focus won't be triggered anyway
        that.buttonElement.addClass( focusClass );
      })
      .bind( "blur" + this.eventNamespace, function() {
        that.buttonElement.removeClass( focusClass );
      });

    if ( toggleButton ) {
      this.element.bind( "change" + this.eventNamespace, function() {
        if ( clickDragged ) {
          return;
        }
        that.refresh();
      });
      // if mouse moves between mousedown and mouseup (drag) set clickDragged flag
      // prevents issue where button state changes but checkbox/radio checked state
      // does not in Firefox (see ticket #6970)
      this.buttonElement
        .bind( "mousedown" + this.eventNamespace, function( event ) {
          if ( options.disabled ) {
            return;
          }
          clickDragged = false;
          startXPos = event.pageX;
          startYPos = event.pageY;
        })
        .bind( "mouseup" + this.eventNamespace, function( event ) {
          if ( options.disabled ) {
            return;
          }
          if ( startXPos !== event.pageX || startYPos !== event.pageY ) {
            clickDragged = true;
          }
      });
    }

    if ( this.type === "checkbox" ) {
      this.buttonElement.bind( "click" + this.eventNamespace, function() {
        if ( options.disabled || clickDragged ) {
          return false;
        }
        $( this ).toggleClass( "ui-state-active" );
        that.buttonElement.attr( "aria-pressed", that.element[0].checked );
      });
    } else if ( this.type === "radio" ) {
      this.buttonElement.bind( "click" + this.eventNamespace, function() {
        if ( options.disabled || clickDragged ) {
          return false;
        }
        $( this ).addClass( "ui-state-active" );
        that.buttonElement.attr( "aria-pressed", "true" );

        var radio = that.element[ 0 ];
        radioGroup( radio )
          .not( radio )
          .map(function() {
            return $( this ).button( "widget" )[ 0 ];
          })
          .removeClass( "ui-state-active" )
          .attr( "aria-pressed", "false" );
      });
    } else {
      this.buttonElement
        .bind( "mousedown" + this.eventNamespace, function() {
          if ( options.disabled ) {
            return false;
          }
          $( this ).addClass( "ui-state-active" );
          lastActive = this;
          that.document.one( "mouseup", function() {
            lastActive = null;
          });
        })
        .bind( "mouseup" + this.eventNamespace, function() {
          if ( options.disabled ) {
            return false;
          }
          $( this ).removeClass( "ui-state-active" );
        })
        .bind( "keydown" + this.eventNamespace, function(event) {
          if ( options.disabled ) {
            return false;
          }
          if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
            $( this ).addClass( "ui-state-active" );
          }
        })
        .bind( "keyup" + this.eventNamespace, function() {
          $( this ).removeClass( "ui-state-active" );
        });

      if ( this.buttonElement.is("a") ) {
        this.buttonElement.keyup(function(event) {
          if ( event.keyCode === $.ui.keyCode.SPACE ) {
            // TODO pass through original event correctly (just as 2nd argument doesn't work)
            $( this ).click();
          }
        });
      }
    }

    // TODO: pull out $.Widget's handling for the disabled option into
    // $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
    // be overridden by individual plugins
    this._setOption( "disabled", options.disabled );
    this._resetButton();
  },

  _determineButtonType: function() {
    var ancestor, labelSelector, checked;

    if ( this.element.is("[type=checkbox]") ) {
      this.type = "checkbox";
    } else if ( this.element.is("[type=radio]") ) {
      this.type = "radio";
    } else if ( this.element.is("input") ) {
      this.type = "input";
    } else {
      this.type = "button";
    }

    if ( this.type === "checkbox" || this.type === "radio" ) {
      // we don't search against the document in case the element
      // is disconnected from the DOM
      ancestor = this.element.parents().last();
      labelSelector = "label[for='" + this.element.attr("id") + "']";
      this.buttonElement = ancestor.find( labelSelector );
      if ( !this.buttonElement.length ) {
        ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
        this.buttonElement = ancestor.filter( labelSelector );
        if ( !this.buttonElement.length ) {
          this.buttonElement = ancestor.find( labelSelector );
        }
      }
      this.element.addClass( "ui-helper-hidden-accessible" );

      checked = this.element.is( ":checked" );
      if ( checked ) {
        this.buttonElement.addClass( "ui-state-active" );
      }
      this.buttonElement.prop( "aria-pressed", checked );
    } else {
      this.buttonElement = this.element;
    }
  },

  widget: function() {
    return this.buttonElement;
  },

  _destroy: function() {
    this.element
      .removeClass( "ui-helper-hidden-accessible" );
    this.buttonElement
      .removeClass( baseClasses + " " + stateClasses + " " + typeClasses )
      .removeAttr( "role" )
      .removeAttr( "aria-pressed" )
      .html( this.buttonElement.find(".ui-button-text").html() );

    if ( !this.hasTitle ) {
      this.buttonElement.removeAttr( "title" );
    }
  },

  _setOption: function( key, value ) {
    this._super( key, value );
    if ( key === "disabled" ) {
      if ( value ) {
        this.element.prop( "disabled", true );
      } else {
        this.element.prop( "disabled", false );
      }
      return;
    }
    this._resetButton();
  },

  refresh: function() {
    //See #8237 & #8828
    var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

    if ( isDisabled !== this.options.disabled ) {
      this._setOption( "disabled", isDisabled );
    }
    if ( this.type === "radio" ) {
      radioGroup( this.element[0] ).each(function() {
        if ( $( this ).is( ":checked" ) ) {
          $( this ).button( "widget" )
            .addClass( "ui-state-active" )
            .attr( "aria-pressed", "true" );
        } else {
          $( this ).button( "widget" )
            .removeClass( "ui-state-active" )
            .attr( "aria-pressed", "false" );
        }
      });
    } else if ( this.type === "checkbox" ) {
      if ( this.element.is( ":checked" ) ) {
        this.buttonElement
          .addClass( "ui-state-active" )
          .attr( "aria-pressed", "true" );
      } else {
        this.buttonElement
          .removeClass( "ui-state-active" )
          .attr( "aria-pressed", "false" );
      }
    }
  },

  _resetButton: function() {
    if ( this.type === "input" ) {
      if ( this.options.label ) {
        this.element.val( this.options.label );
      }
      return;
    }
    var buttonElement = this.buttonElement.removeClass( typeClasses ),
      buttonText = $( "<span></span>", this.document[0] )
        .addClass( "ui-button-text" )
        .html( this.options.label )
        .appendTo( buttonElement.empty() )
        .text(),
      icons = this.options.icons,
      multipleIcons = icons.primary && icons.secondary,
      buttonClasses = [];

    if ( icons.primary || icons.secondary ) {
      if ( this.options.text ) {
        buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
      }

      if ( icons.primary ) {
        buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
      }

      if ( icons.secondary ) {
        buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
      }

      if ( !this.options.text ) {
        buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

        if ( !this.hasTitle ) {
          buttonElement.attr( "title", $.trim( buttonText ) );
        }
      }
    } else {
      buttonClasses.push( "ui-button-text-only" );
    }
    buttonElement.addClass( buttonClasses.join( " " ) );
  }
});

$.widget( "ui.buttonset", {
  version: "1.9.2",
  options: {
    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
  },

  _create: function() {
    this.element.addClass( "ui-buttonset" );
  },

  _init: function() {
    this.refresh();
  },

  _setOption: function( key, value ) {
    if ( key === "disabled" ) {
      this.buttons.button( "option", key, value );
    }

    this._super( key, value );
  },

  refresh: function() {
    var rtl = this.element.css( "direction" ) === "rtl";

    this.buttons = this.element.find( this.options.items )
      .filter( ":ui-button" )
        .button( "refresh" )
      .end()
      .not( ":ui-button" )
        .button()
      .end()
      .map(function() {
        return $( this ).button( "widget" )[ 0 ];
      })
        .removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
        .filter( ":first" )
          .addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
        .end()
        .filter( ":last" )
          .addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
        .end()
      .end();
  },

  _destroy: function() {
    this.element.removeClass( "ui-buttonset" );
    this.buttons
      .map(function() {
        return $( this ).button( "widget" )[ 0 ];
      })
        .removeClass( "ui-corner-left ui-corner-right" )
      .end()
      .button( "destroy" );
  }
});

}( jQuery ) );

(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.9.2" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();
var instActive;

/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
  this.debug = false; // Change this to true to start debugging
  this._curInst = null; // The current instance in use
  this._keyEvent = false; // If the last event was a key event
  this._disabledInputs = []; // List of date picker inputs that have been disabled
  this._datepickerShowing = false; // True if the popup picker is showing , false if not
  this._inDialog = false; // True if showing within a "dialog", false if not
  this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
  this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
  this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
  this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
  this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
  this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
  this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
  this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
  this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
  this.regional = []; // Available regional settings, indexed by language code
  this.regional[''] = { // Default regional settings
    closeText: 'Done', // Display text for close link
    prevText: 'Prev', // Display text for previous month link
    nextText: 'Next', // Display text for next month link
    currentText: 'Today', // Display text for current month link
    monthNames: ['January','February','March','April','May','June',
      'July','August','September','October','November','December'], // Names of months for drop-down and formatting
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
    dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
    weekHeader: 'Wk', // Column header for week of the year
    dateFormat: 'mm/dd/yy', // See format options on parseDate
    firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
    isRTL: false, // True if right-to-left language, false if left-to-right
    showMonthAfterYear: false, // True if the year select precedes month, false for month then year
    yearSuffix: '' // Additional text to append to the year in the month headers
  };
  this._defaults = { // Global defaults for all the date picker instances
    showOn: 'focus', // 'focus' for popup on focus,
      // 'button' for trigger button, or 'both' for either
    showAnim: 'fadeIn', // Name of jQuery animation for popup
    showOptions: {}, // Options for enhanced animations
    defaultDate: null, // Used when field is blank: actual date,
      // +/-number for offset from today, null for today
    appendText: '', // Display text following the input box, e.g. showing the format
    buttonText: '...', // Text for trigger button
    buttonImage: '', // URL for trigger button image
    buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
    hideIfNoPrevNext: false, // True to hide next/previous month links
      // if not applicable, false to just disable them
    navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
    gotoCurrent: false, // True if today link goes back to current selection instead
    changeMonth: false, // True if month can be selected directly, false if only prev/next
    changeYear: false, // True if year can be selected directly, false if only prev/next
    yearRange: 'c-10:c+10', // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
    showOtherMonths: false, // True to show dates in other months, false to leave blank
    selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
    showWeek: false, // True to show week of the year, false to not show it
    calculateWeek: this.iso8601Week, // How to calculate the week of the year,
      // takes a Date and returns the number of the week for it
    shortYearCutoff: '+10', // Short year values < this are in the current century,
      // > this are in the previous century,
      // string value starting with '+' for current year + value
    minDate: null, // The earliest selectable date, or null for no limit
    maxDate: null, // The latest selectable date, or null for no limit
    duration: 'fast', // Duration of display/closure
    beforeShowDay: null, // Function that takes a date and returns an array with
      // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
      // [2] = cell title (optional), e.g. $.datepicker.noWeekends
    beforeShow: null, // Function that takes an input field and
      // returns a set of custom settings for the date picker
    onSelect: null, // Define a callback function when a date is selected
    onChangeMonthYear: null, // Define a callback function when the month or year is changed
    onClose: null, // Define a callback function when the datepicker is closed
    numberOfMonths: 1, // Number of months to show at a time
    showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
    stepMonths: 1, // Number of months to step back/forward
    stepBigMonths: 12, // Number of months to step back/forward for the big links
    altField: '', // Selector for an alternate field to store selected dates into
    altFormat: '', // The date format to use for the alternate field
    constrainInput: true, // The input is constrained by the current date format
    showButtonPanel: false, // True to show button panel, false to not show it
    autoSize: false, // True to size the input for the date format, false to leave as is
    disabled: false // The initial disabled state
  };
  $.extend(this._defaults, this.regional['']);
  this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
}

$.extend(Datepicker.prototype, {
  /* Class name added to elements to indicate already configured with a date picker. */
  markerClassName: 'hasDatepicker',

  //Keep track of the maximum number of rows displayed (see #7043)
  maxRows: 4,

  /* Debug logging (if enabled). */
  log: function () {
    if (this.debug)
      console.log.apply('', arguments);
  },

  // TODO rename to "widget" when switching to widget factory
  _widgetDatepicker: function() {
    return this.dpDiv;
  },

  /* Override the default settings for all instances of the date picker.
     @param  settings  object - the new settings to use as defaults (anonymous object)
     @return the manager object */
  setDefaults: function(settings) {
    extendRemove(this._defaults, settings || {});
    return this;
  },

  /* Attach the date picker to a jQuery selection.
     @param  target    element - the target input field or division or span
     @param  settings  object - the new settings to use for this date picker instance (anonymous) */
  _attachDatepicker: function(target, settings) {
    // check for settings on the control itself - in namespace 'date:'
    var inlineSettings = null;
    for (var attrName in this._defaults) {
      var attrValue = target.getAttribute('date:' + attrName);
      if (attrValue) {
        inlineSettings = inlineSettings || {};
        try {
          inlineSettings[attrName] = eval(attrValue);
        } catch (err) {
          inlineSettings[attrName] = attrValue;
        }
      }
    }
    var nodeName = target.nodeName.toLowerCase();
    var inline = (nodeName == 'div' || nodeName == 'span');
    if (!target.id) {
      this.uuid += 1;
      target.id = 'dp' + this.uuid;
    }
    var inst = this._newInst($(target), inline);
    inst.settings = $.extend({}, settings || {}, inlineSettings || {});
    if (nodeName == 'input') {
      this._connectDatepicker(target, inst);
    } else if (inline) {
      this._inlineDatepicker(target, inst);
    }
  },

  /* Create a new instance object. */
  _newInst: function(target, inline) {
    var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
    return {id: id, input: target, // associated target
      selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
      drawMonth: 0, drawYear: 0, // month being drawn
      inline: inline, // is datepicker inline or not
      dpDiv: (!inline ? this.dpDiv : // presentation div
      bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
  },

  /* Attach the date picker to an input field. */
  _connectDatepicker: function(target, inst) {
    var input = $(target);
    inst.append = $([]);
    inst.trigger = $([]);
    if (input.hasClass(this.markerClassName))
      return;
    this._attachments(input, inst);
    input.addClass(this.markerClassName).keydown(this._doKeyDown).
      keypress(this._doKeyPress).keyup(this._doKeyUp).
      bind("setData.datepicker", function(event, key, value) {
        inst.settings[key] = value;
      }).bind("getData.datepicker", function(event, key) {
        return this._get(inst, key);
      });
    this._autoSize(inst);
    $.data(target, PROP_NAME, inst);
    //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
    if( inst.settings.disabled ) {
      this._disableDatepicker( target );
    }
  },

  /* Make attachments based on settings. */
  _attachments: function(input, inst) {
    var appendText = this._get(inst, 'appendText');
    var isRTL = this._get(inst, 'isRTL');
    if (inst.append)
      inst.append.remove();
    if (appendText) {
      inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
      input[isRTL ? 'before' : 'after'](inst.append);
    }
    input.unbind('focus', this._showDatepicker);
    if (inst.trigger)
      inst.trigger.remove();
    var showOn = this._get(inst, 'showOn');
    if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
      input.focus(this._showDatepicker);
    if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
      var buttonText = this._get(inst, 'buttonText');
      var buttonImage = this._get(inst, 'buttonImage');
      inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
        $('<img/>').addClass(this._triggerClass).
          attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
        $('<button type="button"></button>').addClass(this._triggerClass).
          html(buttonImage == '' ? buttonText : $('<img/>').attr(
          { src:buttonImage, alt:buttonText, title:buttonText })));
      input[isRTL ? 'before' : 'after'](inst.trigger);
      inst.trigger.click(function() {
        if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
          $.datepicker._hideDatepicker();
        else if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
          $.datepicker._hideDatepicker();
          $.datepicker._showDatepicker(input[0]);
        } else
          $.datepicker._showDatepicker(input[0]);
        return false;
      });
    }
  },

  /* Apply the maximum length for the date format. */
  _autoSize: function(inst) {
    if (this._get(inst, 'autoSize') && !inst.inline) {
      var date = new Date(2009, 12 - 1, 20); // Ensure double digits
      var dateFormat = this._get(inst, 'dateFormat');
      if (dateFormat.match(/[DM]/)) {
        var findMax = function(names) {
          var max = 0;
          var maxI = 0;
          for (var i = 0; i < names.length; i++) {
            if (names[i].length > max) {
              max = names[i].length;
              maxI = i;
            }
          }
          return maxI;
        };
        date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
          'monthNames' : 'monthNamesShort'))));
        date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
          'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
      }
      inst.input.attr('size', this._formatDate(inst, date).length);
    }
  },

  /* Attach an inline date picker to a div. */
  _inlineDatepicker: function(target, inst) {
    var divSpan = $(target);
    if (divSpan.hasClass(this.markerClassName))
      return;
    divSpan.addClass(this.markerClassName).append(inst.dpDiv).
      bind("setData.datepicker", function(event, key, value){
        inst.settings[key] = value;
      }).bind("getData.datepicker", function(event, key){
        return this._get(inst, key);
      });
    $.data(target, PROP_NAME, inst);
    this._setDate(inst, this._getDefaultDate(inst), true);
    this._updateDatepicker(inst);
    this._updateAlternate(inst);
    //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
    if( inst.settings.disabled ) {
      this._disableDatepicker( target );
    }
    // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
    // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
    inst.dpDiv.css( "display", "block" );
  },

  /* Pop-up the date picker in a "dialog" box.
     @param  input     element - ignored
     @param  date      string or Date - the initial date to display
     @param  onSelect  function - the function to call when a date is selected
     @param  settings  object - update the dialog date picker instance's settings (anonymous object)
     @param  pos       int[2] - coordinates for the dialog's position within the screen or
                       event - with x/y coordinates or
                       leave empty for default (screen centre)
     @return the manager object */
  _dialogDatepicker: function(input, date, onSelect, settings, pos) {
    var inst = this._dialogInst; // internal instance
    if (!inst) {
      this.uuid += 1;
      var id = 'dp' + this.uuid;
      this._dialogInput = $('<input type="text" id="' + id +
        '" style="position: absolute; top: -100px; width: 0px;"/>');
      this._dialogInput.keydown(this._doKeyDown);
      $('body').append(this._dialogInput);
      inst = this._dialogInst = this._newInst(this._dialogInput, false);
      inst.settings = {};
      $.data(this._dialogInput[0], PROP_NAME, inst);
    }
    extendRemove(inst.settings, settings || {});
    date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
    this._dialogInput.val(date);

    this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
    if (!this._pos) {
      var browserWidth = document.documentElement.clientWidth;
      var browserHeight = document.documentElement.clientHeight;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      this._pos = // should use actual width/height below
        [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
    }

    // move input on screen for focus, but hidden behind dialog
    this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
    inst.settings.onSelect = onSelect;
    this._inDialog = true;
    this.dpDiv.addClass(this._dialogClass);
    this._showDatepicker(this._dialogInput[0]);
    if ($.blockUI)
      $.blockUI(this.dpDiv);
    $.data(this._dialogInput[0], PROP_NAME, inst);
    return this;
  },

  /* Detach a datepicker from its control.
     @param  target    element - the target input field or division or span */
  _destroyDatepicker: function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    $.removeData(target, PROP_NAME);
    if (nodeName == 'input') {
      inst.append.remove();
      inst.trigger.remove();
      $target.removeClass(this.markerClassName).
        unbind('focus', this._showDatepicker).
        unbind('keydown', this._doKeyDown).
        unbind('keypress', this._doKeyPress).
        unbind('keyup', this._doKeyUp);
    } else if (nodeName == 'div' || nodeName == 'span')
      $target.removeClass(this.markerClassName).empty();
  },

  /* Enable the date picker to a jQuery selection.
     @param  target    element - the target input field or division or span */
  _enableDatepicker: function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    if (nodeName == 'input') {
      target.disabled = false;
      inst.trigger.filter('button').
        each(function() { this.disabled = false; }).end().
        filter('img').css({opacity: '1.0', cursor: ''});
    }
    else if (nodeName == 'div' || nodeName == 'span') {
      var inline = $target.children('.' + this._inlineClass);
      inline.children().removeClass('ui-state-disabled');
      inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
        prop("disabled", false);
    }
    this._disabledInputs = $.map(this._disabledInputs,
      function(value) { return (value == target ? null : value); }); // delete entry
  },

  /* Disable the date picker to a jQuery selection.
     @param  target    element - the target input field or division or span */
  _disableDatepicker: function(target) {
    var $target = $(target);
    var inst = $.data(target, PROP_NAME);
    if (!$target.hasClass(this.markerClassName)) {
      return;
    }
    var nodeName = target.nodeName.toLowerCase();
    if (nodeName == 'input') {
      target.disabled = true;
      inst.trigger.filter('button').
        each(function() { this.disabled = true; }).end().
        filter('img').css({opacity: '0.5', cursor: 'default'});
    }
    else if (nodeName == 'div' || nodeName == 'span') {
      var inline = $target.children('.' + this._inlineClass);
      inline.children().addClass('ui-state-disabled');
      inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
        prop("disabled", true);
    }
    this._disabledInputs = $.map(this._disabledInputs,
      function(value) { return (value == target ? null : value); }); // delete entry
    this._disabledInputs[this._disabledInputs.length] = target;
  },

  /* Is the first field in a jQuery collection disabled as a datepicker?
     @param  target    element - the target input field or division or span
     @return boolean - true if disabled, false if enabled */
  _isDisabledDatepicker: function(target) {
    if (!target) {
      return false;
    }
    for (var i = 0; i < this._disabledInputs.length; i++) {
      if (this._disabledInputs[i] == target)
        return true;
    }
    return false;
  },

  /* Retrieve the instance data for the target control.
     @param  target  element - the target input field or division or span
     @return  object - the associated instance data
     @throws  error if a jQuery problem getting data */
  _getInst: function(target) {
    try {
      return $.data(target, PROP_NAME);
    }
    catch (err) {
      throw 'Missing instance data for this datepicker';
    }
  },

  /* Update or retrieve the settings for a date picker attached to an input field or division.
     @param  target  element - the target input field or division or span
     @param  name    object - the new settings to update or
                     string - the name of the setting to change or retrieve,
                     when retrieving also 'all' for all instance settings or
                     'defaults' for all global defaults
     @param  value   any - the new value for the setting
                     (omit if above is an object or to retrieve a value) */
  _optionDatepicker: function(target, name, value) {
    var inst = this._getInst(target);
    if (arguments.length == 2 && typeof name == 'string') {
      return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
        (inst ? (name == 'all' ? $.extend({}, inst.settings) :
        this._get(inst, name)) : null));
    }
    var settings = name || {};
    if (typeof name == 'string') {
      settings = {};
      settings[name] = value;
    }
    if (inst) {
      if (this._curInst == inst) {
        this._hideDatepicker();
      }
      var date = this._getDateDatepicker(target, true);
      var minDate = this._getMinMaxDate(inst, 'min');
      var maxDate = this._getMinMaxDate(inst, 'max');
      extendRemove(inst.settings, settings);
      // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
      if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
        inst.settings.minDate = this._formatDate(inst, minDate);
      if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
        inst.settings.maxDate = this._formatDate(inst, maxDate);
      this._attachments($(target), inst);
      this._autoSize(inst);
      this._setDate(inst, date);
      this._updateAlternate(inst);
      this._updateDatepicker(inst);
    }
  },

  // change method deprecated
  _changeDatepicker: function(target, name, value) {
    this._optionDatepicker(target, name, value);
  },

  /* Redraw the date picker attached to an input field or division.
     @param  target  element - the target input field or division or span */
  _refreshDatepicker: function(target) {
    var inst = this._getInst(target);
    if (inst) {
      this._updateDatepicker(inst);
    }
  },

  /* Set the dates for a jQuery selection.
     @param  target   element - the target input field or division or span
     @param  date     Date - the new date */
  _setDateDatepicker: function(target, date) {
    var inst = this._getInst(target);
    if (inst) {
      this._setDate(inst, date);
      this._updateDatepicker(inst);
      this._updateAlternate(inst);
    }
  },

  /* Get the date(s) for the first entry in a jQuery selection.
     @param  target     element - the target input field or division or span
     @param  noDefault  boolean - true if no default date is to be used
     @return Date - the current date */
  _getDateDatepicker: function(target, noDefault) {
    var inst = this._getInst(target);
    if (inst && !inst.inline)
      this._setDateFromField(inst, noDefault);
    return (inst ? this._getDate(inst) : null);
  },

  /* Handle keystrokes. */
  _doKeyDown: function(event) {
    var inst = $.datepicker._getInst(event.target);
    var handled = true;
    var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
    inst._keyEvent = true;
    if ($.datepicker._datepickerShowing)
      switch (event.keyCode) {
        case 9: $.datepicker._hideDatepicker();
            handled = false;
            break; // hide on tab out
        case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
                  $.datepicker._currentClass + ')', inst.dpDiv);
            if (sel[0])
              $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
              var onSelect = $.datepicker._get(inst, 'onSelect');
              if (onSelect) {
                var dateStr = $.datepicker._formatDate(inst);

                // trigger custom callback
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
              }
            else
              $.datepicker._hideDatepicker();
            return false; // don't submit the form
            break; // select the value on enter
        case 27: $.datepicker._hideDatepicker();
            break; // hide on escape
        case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
              -$.datepicker._get(inst, 'stepBigMonths') :
              -$.datepicker._get(inst, 'stepMonths')), 'M');
            break; // previous month/year on page up/+ ctrl
        case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
              +$.datepicker._get(inst, 'stepBigMonths') :
              +$.datepicker._get(inst, 'stepMonths')), 'M');
            break; // next month/year on page down/+ ctrl
        case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
            handled = event.ctrlKey || event.metaKey;
            break; // clear on ctrl or command +end
        case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
            handled = event.ctrlKey || event.metaKey;
            break; // current on ctrl or command +home
        case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
            handled = event.ctrlKey || event.metaKey;
            // -1 day on ctrl or command +left
            if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                  -$.datepicker._get(inst, 'stepBigMonths') :
                  -$.datepicker._get(inst, 'stepMonths')), 'M');
            // next month/year on alt +left on Mac
            break;
        case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
            handled = event.ctrlKey || event.metaKey;
            break; // -1 week on ctrl or command +up
        case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
            handled = event.ctrlKey || event.metaKey;
            // +1 day on ctrl or command +right
            if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                  +$.datepicker._get(inst, 'stepBigMonths') :
                  +$.datepicker._get(inst, 'stepMonths')), 'M');
            // next month/year on alt +right
            break;
        case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
            handled = event.ctrlKey || event.metaKey;
            break; // +1 week on ctrl or command +down
        default: handled = false;
      }
    else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
      $.datepicker._showDatepicker(this);
    else {
      handled = false;
    }
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  },

  /* Filter entered characters - based on date format. */
  _doKeyPress: function(event) {
    var inst = $.datepicker._getInst(event.target);
    if ($.datepicker._get(inst, 'constrainInput')) {
      var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
      var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
      return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
    }
  },

  /* Synchronise manual entry and field/alternate field. */
  _doKeyUp: function(event) {
    var inst = $.datepicker._getInst(event.target);
    if (inst.input.val() != inst.lastVal) {
      try {
        var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
          (inst.input ? inst.input.val() : null),
          $.datepicker._getFormatConfig(inst));
        if (date) { // only if valid
          $.datepicker._setDateFromField(inst);
          $.datepicker._updateAlternate(inst);
          $.datepicker._updateDatepicker(inst);
        }
      }
      catch (err) {
        $.datepicker.log(err);
      }
    }
    return true;
  },

  /* Pop-up the date picker for a given input field.
     If false returned from beforeShow event handler do not show.
     @param  input  element - the input field attached to the date picker or
                    event - if triggered by focus */
  _showDatepicker: function(input) {
    input = input.target || input;
    if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
      input = $('input', input.parentNode)[0];
    if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
      return;
    var inst = $.datepicker._getInst(input);
    if ($.datepicker._curInst && $.datepicker._curInst != inst) {
      $.datepicker._curInst.dpDiv.stop(true, true);
      if ( inst && $.datepicker._datepickerShowing ) {
        $.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
      }
    }
    var beforeShow = $.datepicker._get(inst, 'beforeShow');
    var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
    if(beforeShowSettings === false){
      //false
      return;
    }
    extendRemove(inst.settings, beforeShowSettings);
    inst.lastVal = null;
    $.datepicker._lastInput = input;
    $.datepicker._setDateFromField(inst);
    if ($.datepicker._inDialog) // hide cursor
      input.value = '';
    if (!$.datepicker._pos) { // position below input
      $.datepicker._pos = $.datepicker._findPos(input);
      $.datepicker._pos[1] += input.offsetHeight; // add the height
    }
    var isFixed = false;
    $(input).parents().each(function() {
      isFixed |= $(this).css('position') == 'fixed';
      return !isFixed;
    });
    var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
    $.datepicker._pos = null;
    //to avoid flashes on Firefox
    inst.dpDiv.empty();
    // determine sizing offscreen
    inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
    $.datepicker._updateDatepicker(inst);
    // fix width for dynamic number of date pickers
    // and adjust position before showing
    offset = $.datepicker._checkOffset(inst, offset, isFixed);
    inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
      'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
      left: offset.left + 'px', top: offset.top + 'px'});
    if (!inst.inline) {
      var showAnim = $.datepicker._get(inst, 'showAnim');
      var duration = $.datepicker._get(inst, 'duration');
      var postProcess = function() {
        var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
        if( !! cover.length ){
          var borders = $.datepicker._getBorders(inst.dpDiv);
          cover.css({left: -borders[0], top: -borders[1],
            width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
        }
      };
      inst.dpDiv.zIndex($(input).zIndex()+1);
      $.datepicker._datepickerShowing = true;

      // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
      if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
        inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
      else
        inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
      if (!showAnim || !duration)
        postProcess();
      if (inst.input.is(':visible') && !inst.input.is(':disabled'))
        inst.input.focus();
      $.datepicker._curInst = inst;
    }
  },

  /* Generate the date picker content. */
  _updateDatepicker: function(inst) {
    this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
    var borders = $.datepicker._getBorders(inst.dpDiv);
    instActive = inst; // for delegate hover events
    inst.dpDiv.empty().append(this._generateHTML(inst));
    this._attachHandlers(inst);
    var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
    if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
      cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
    }
    inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
    var numMonths = this._getNumberOfMonths(inst);
    var cols = numMonths[1];
    var width = 17;
    inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
    if (cols > 1)
      inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
    inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
      'Class']('ui-datepicker-multi');
    inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
      'Class']('ui-datepicker-rtl');
    if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
      inst.input.focus();
    // deffered render of the years select (to avoid flashes on Firefox)
    if( inst.yearshtml ){
      var origyearshtml = inst.yearshtml;
      setTimeout(function(){
        //assure that inst.yearshtml didn't change.
        if( origyearshtml === inst.yearshtml && inst.yearshtml ){
          inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
        }
        origyearshtml = inst.yearshtml = null;
      }, 0);
    }
  },

  /* Retrieve the size of left and top borders for an element.
     @param  elem  (jQuery object) the element of interest
     @return  (number[2]) the left and top borders */
  _getBorders: function(elem) {
    var convert = function(value) {
      return {thin: 1, medium: 2, thick: 3}[value] || value;
    };
    return [parseFloat(convert(elem.css('border-left-width'))),
      parseFloat(convert(elem.css('border-top-width')))];
  },

  /* Check positioning to remain on screen. */
  _checkOffset: function(inst, offset, isFixed) {
    var dpWidth = inst.dpDiv.outerWidth();
    var dpHeight = inst.dpDiv.outerHeight();
    var inputWidth = inst.input ? inst.input.outerWidth() : 0;
    var inputHeight = inst.input ? inst.input.outerHeight() : 0;
    var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
    var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

    offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
    offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
    offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

    // now check if datepicker is showing outside window viewport - move to a better place if so.
    offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
      Math.abs(offset.left + dpWidth - viewWidth) : 0);
    offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
      Math.abs(dpHeight + inputHeight) : 0);

    return offset;
  },

  /* Find an object's position on the screen. */
  _findPos: function(obj) {
    var inst = this._getInst(obj);
    var isRTL = this._get(inst, 'isRTL');
    while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
      obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
    }
    var position = $(obj).offset();
    return [position.left, position.top];
  },

  /* Hide the date picker from view.
     @param  input  element - the input field attached to the date picker */
  _hideDatepicker: function(input) {
    var inst = this._curInst;
    if (!inst || (input && inst != $.data(input, PROP_NAME)))
      return;
    if (this._datepickerShowing) {
      var showAnim = this._get(inst, 'showAnim');
      var duration = this._get(inst, 'duration');
      var postProcess = function() {
        $.datepicker._tidyDialog(inst);
      };

      // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
      if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
        inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
      else
        inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
          (showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
      if (!showAnim)
        postProcess();
      this._datepickerShowing = false;
      var onClose = this._get(inst, 'onClose');
      if (onClose)
        onClose.apply((inst.input ? inst.input[0] : null),
          [(inst.input ? inst.input.val() : ''), inst]);
      this._lastInput = null;
      if (this._inDialog) {
        this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
        if ($.blockUI) {
          $.unblockUI();
          $('body').append(this.dpDiv);
        }
      }
      this._inDialog = false;
    }
  },

  /* Tidy up after a dialog display. */
  _tidyDialog: function(inst) {
    inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
  },

  /* Close date picker if clicked elsewhere. */
  _checkExternalClick: function(event) {
    if (!$.datepicker._curInst)
      return;

    var $target = $(event.target),
      inst = $.datepicker._getInst($target[0]);

    if ( ( ( $target[0].id != $.datepicker._mainDivId &&
        $target.parents('#' + $.datepicker._mainDivId).length == 0 &&
        !$target.hasClass($.datepicker.markerClassName) &&
        !$target.closest("." + $.datepicker._triggerClass).length &&
        $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
      ( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst ) )
      $.datepicker._hideDatepicker();
  },

  /* Adjust one of the date sub-fields. */
  _adjustDate: function(id, offset, period) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._isDisabledDatepicker(target[0])) {
      return;
    }
    this._adjustInstDate(inst, offset +
      (period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
      period);
    this._updateDatepicker(inst);
  },

  /* Action for current link. */
  _gotoToday: function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
      inst.selectedDay = inst.currentDay;
      inst.drawMonth = inst.selectedMonth = inst.currentMonth;
      inst.drawYear = inst.selectedYear = inst.currentYear;
    }
    else {
      var date = new Date();
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
    }
    this._notifyChange(inst);
    this._adjustDate(target);
  },

  /* Action for selecting a new month/year. */
  _selectMonthYear: function(id, select, period) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
    inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
      parseInt(select.options[select.selectedIndex].value,10);
    this._notifyChange(inst);
    this._adjustDate(target);
  },

  /* Action for selecting a day. */
  _selectDay: function(id, month, year, td) {
    var target = $(id);
    if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
      return;
    }
    var inst = this._getInst(target[0]);
    inst.selectedDay = inst.currentDay = $('a', td).html();
    inst.selectedMonth = inst.currentMonth = month;
    inst.selectedYear = inst.currentYear = year;
    this._selectDate(id, this._formatDate(inst,
      inst.currentDay, inst.currentMonth, inst.currentYear));
  },

  /* Erase the input field and hide the date picker. */
  _clearDate: function(id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    this._selectDate(target, '');
  },

  /* Update the input field with the selected date. */
  _selectDate: function(id, dateStr) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
    if (inst.input)
      inst.input.val(dateStr);
    this._updateAlternate(inst);
    var onSelect = this._get(inst, 'onSelect');
    if (onSelect)
      onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
    else if (inst.input)
      inst.input.trigger('change'); // fire the change event
    if (inst.inline)
      this._updateDatepicker(inst);
    else {
      this._hideDatepicker();
      this._lastInput = inst.input[0];
      if (typeof(inst.input[0]) != 'object')
        inst.input.focus(); // restore focus
      this._lastInput = null;
    }
  },

  /* Update any alternate field to synchronise with the main field. */
  _updateAlternate: function(inst) {
    var altField = this._get(inst, 'altField');
    if (altField) { // update alternate field too
      var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
      var date = this._getDate(inst);
      var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
      $(altField).each(function() { $(this).val(dateStr); });
    }
  },

  /* Set as beforeShowDay function to prevent selection of weekends.
     @param  date  Date - the date to customise
     @return [boolean, string] - is this date selectable?, what is its CSS class? */
  noWeekends: function(date) {
    var day = date.getDay();
    return [(day > 0 && day < 6), ''];
  },

  /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
     @param  date  Date - the date to get the week for
     @return  number - the number of the week within the year that contains this date */
  iso8601Week: function(date) {
    var checkDate = new Date(date.getTime());
    // Find Thursday of this week starting on Monday
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  },

  /* Parse a string value into a date object.
     See formatDate below for the possible formats.

     @param  format    string - the expected format of the date
     @param  value     string - the date in the above format
     @param  settings  Object - attributes include:
                       shortYearCutoff  number - the cutoff year for determining the century (optional)
                       dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
                       dayNames         string[7] - names of the days from Sunday (optional)
                       monthNamesShort  string[12] - abbreviated names of the months (optional)
                       monthNames       string[12] - names of the months (optional)
     @return  Date - the extracted date value or null if value is blank */
  parseDate: function (format, value, settings) {
    if (format == null || value == null)
      throw 'Invalid arguments';
    value = (typeof value == 'object' ? value.toString() : value + '');
    if (value == '')
      return null;
    var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
    shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
        new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
    var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
    var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
    var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
    var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
    var year = -1;
    var month = -1;
    var day = -1;
    var doy = -1;
    var literal = false;
    // Check whether a format character is doubled
    var lookAhead = function(match) {
      var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
      if (matches)
        iFormat++;
      return matches;
    };
    // Extract a number from the string value
    var getNumber = function(match) {
      var isDoubled = lookAhead(match);
      var size = (match == '@' ? 14 : (match == '!' ? 20 :
        (match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
      var digits = new RegExp('^\\d{1,' + size + '}');
      var num = value.substring(iValue).match(digits);
      if (!num)
        throw 'Missing number at position ' + iValue;
      iValue += num[0].length;
      return parseInt(num[0], 10);
    };
    // Extract a name from the string value and convert to an index
    var getName = function(match, shortNames, longNames) {
      var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
        return [ [k, v] ];
      }).sort(function (a, b) {
        return -(a[1].length - b[1].length);
      });
      var index = -1;
      $.each(names, function (i, pair) {
        var name = pair[1];
        if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
          index = pair[0];
          iValue += name.length;
          return false;
        }
      });
      if (index != -1)
        return index + 1;
      else
        throw 'Unknown name at position ' + iValue;
    };
    // Confirm that a literal character matches the string value
    var checkLiteral = function() {
      if (value.charAt(iValue) != format.charAt(iFormat))
        throw 'Unexpected literal at position ' + iValue;
      iValue++;
    };
    var iValue = 0;
    for (var iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal)
        if (format.charAt(iFormat) == "'" && !lookAhead("'"))
          literal = false;
        else
          checkLiteral();
      else
        switch (format.charAt(iFormat)) {
          case 'd':
            day = getNumber('d');
            break;
          case 'D':
            getName('D', dayNamesShort, dayNames);
            break;
          case 'o':
            doy = getNumber('o');
            break;
          case 'm':
            month = getNumber('m');
            break;
          case 'M':
            month = getName('M', monthNamesShort, monthNames);
            break;
          case 'y':
            year = getNumber('y');
            break;
          case '@':
            var date = new Date(getNumber('@'));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case '!':
            var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'"))
              checkLiteral();
            else
              literal = true;
            break;
          default:
            checkLiteral();
        }
    }
    if (iValue < value.length){
      var extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year == -1)
      year = new Date().getFullYear();
    else if (year < 100)
      year += new Date().getFullYear() - new Date().getFullYear() % 100 +
        (year <= shortYearCutoff ? 0 : -100);
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        var dim = this._getDaysInMonth(year, month - 1);
        if (day <= dim)
          break;
        month++;
        day -= dim;
      } while (true);
    }
    var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
      throw 'Invalid date'; // E.g. 31/02/00
    return date;
  },

  /* Standard date formats. */
  ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
  COOKIE: 'D, dd M yy',
  ISO_8601: 'yy-mm-dd',
  RFC_822: 'D, d M y',
  RFC_850: 'DD, dd-M-y',
  RFC_1036: 'D, d M y',
  RFC_1123: 'D, d M yy',
  RFC_2822: 'D, d M yy',
  RSS: 'D, d M y', // RFC 822
  TICKS: '!',
  TIMESTAMP: '@',
  W3C: 'yy-mm-dd', // ISO 8601

  _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
    Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

  /* Format a date object into a string value.
     The format can be combinations of the following:
     d  - day of month (no leading zero)
     dd - day of month (two digit)
     o  - day of year (no leading zeros)
     oo - day of year (three digit)
     D  - day name short
     DD - day name long
     m  - month of year (no leading zero)
     mm - month of year (two digit)
     M  - month name short
     MM - month name long
     y  - year (two digit)
     yy - year (four digit)
     @ - Unix timestamp (ms since 01/01/1970)
     ! - Windows ticks (100ns since 01/01/0001)
     '...' - literal text
     '' - single quote

     @param  format    string - the desired format of the date
     @param  date      Date - the date value to format
     @param  settings  Object - attributes include:
                       dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
                       dayNames         string[7] - names of the days from Sunday (optional)
                       monthNamesShort  string[12] - abbreviated names of the months (optional)
                       monthNames       string[12] - names of the months (optional)
     @return  string - the date in the above format */
  formatDate: function (format, date, settings) {
    if (!date)
      return '';
    var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
    var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
    var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
    var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
    // Check whether a format character is doubled
    var lookAhead = function(match) {
      var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
      if (matches)
        iFormat++;
      return matches;
    };
    // Format a number, with leading zero if necessary
    var formatNumber = function(match, value, len) {
      var num = '' + value;
      if (lookAhead(match))
        while (num.length < len)
          num = '0' + num;
      return num;
    };
    // Format a name, short or long as requested
    var formatName = function(match, value, shortNames, longNames) {
      return (lookAhead(match) ? longNames[value] : shortNames[value]);
    };
    var output = '';
    var literal = false;
    if (date)
      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal)
          if (format.charAt(iFormat) == "'" && !lookAhead("'"))
            literal = false;
          else
            output += format.charAt(iFormat);
        else
          switch (format.charAt(iFormat)) {
            case 'd':
              output += formatNumber('d', date.getDate(), 2);
              break;
            case 'D':
              output += formatName('D', date.getDay(), dayNamesShort, dayNames);
              break;
            case 'o':
              output += formatNumber('o',
                Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
              break;
            case 'm':
              output += formatNumber('m', date.getMonth() + 1, 2);
              break;
            case 'M':
              output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
              break;
            case 'y':
              output += (lookAhead('y') ? date.getFullYear() :
                (date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
              break;
            case '@':
              output += date.getTime();
              break;
            case '!':
              output += date.getTime() * 10000 + this._ticksTo1970;
              break;
            case "'":
              if (lookAhead("'"))
                output += "'";
              else
                literal = true;
              break;
            default:
              output += format.charAt(iFormat);
          }
      }
    return output;
  },

  /* Extract all possible characters from the date format. */
  _possibleChars: function (format) {
    var chars = '';
    var literal = false;
    // Check whether a format character is doubled
    var lookAhead = function(match) {
      var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
      if (matches)
        iFormat++;
      return matches;
    };
    for (var iFormat = 0; iFormat < format.length; iFormat++)
      if (literal)
        if (format.charAt(iFormat) == "'" && !lookAhead("'"))
          literal = false;
        else
          chars += format.charAt(iFormat);
      else
        switch (format.charAt(iFormat)) {
          case 'd': case 'm': case 'y': case '@':
            chars += '0123456789';
            break;
          case 'D': case 'M':
            return null; // Accept anything
          case "'":
            if (lookAhead("'"))
              chars += "'";
            else
              literal = true;
            break;
          default:
            chars += format.charAt(iFormat);
        }
    return chars;
  },

  /* Get a setting value, defaulting if necessary. */
  _get: function(inst, name) {
    return inst.settings[name] !== undefined ?
      inst.settings[name] : this._defaults[name];
  },

  /* Parse existing date and initialise date picker. */
  _setDateFromField: function(inst, noDefault) {
    if (inst.input.val() == inst.lastVal) {
      return;
    }
    var dateFormat = this._get(inst, 'dateFormat');
    var dates = inst.lastVal = inst.input ? inst.input.val() : null;
    var date, defaultDate;
    date = defaultDate = this._getDefaultDate(inst);
    var settings = this._getFormatConfig(inst);
    try {
      date = this.parseDate(dateFormat, dates, settings) || defaultDate;
    } catch (event) {
      this.log(event);
      dates = (noDefault ? '' : dates);
    }
    inst.selectedDay = date.getDate();
    inst.drawMonth = inst.selectedMonth = date.getMonth();
    inst.drawYear = inst.selectedYear = date.getFullYear();
    inst.currentDay = (dates ? date.getDate() : 0);
    inst.currentMonth = (dates ? date.getMonth() : 0);
    inst.currentYear = (dates ? date.getFullYear() : 0);
    this._adjustInstDate(inst);
  },

  /* Retrieve the default date shown on opening. */
  _getDefaultDate: function(inst) {
    return this._restrictMinMax(inst,
      this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
  },

  /* A date may be specified as an exact value or a relative one. */
  _determineDate: function(inst, date, defaultDate) {
    var offsetNumeric = function(offset) {
      var date = new Date();
      date.setDate(date.getDate() + offset);
      return date;
    };
    var offsetString = function(offset) {
      try {
        return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
          offset, $.datepicker._getFormatConfig(inst));
      }
      catch (e) {
        // Ignore
      }
      var date = (offset.toLowerCase().match(/^c/) ?
        $.datepicker._getDate(inst) : null) || new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
      var matches = pattern.exec(offset);
      while (matches) {
        switch (matches[2] || 'd') {
          case 'd' : case 'D' :
            day += parseInt(matches[1],10); break;
          case 'w' : case 'W' :
            day += parseInt(matches[1],10) * 7; break;
          case 'm' : case 'M' :
            month += parseInt(matches[1],10);
            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
            break;
          case 'y': case 'Y' :
            year += parseInt(matches[1],10);
            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
            break;
        }
        matches = pattern.exec(offset);
      }
      return new Date(year, month, day);
    };
    var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
      (typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
    newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
    if (newDate) {
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
    }
    return this._daylightSavingAdjust(newDate);
  },

  /* Handle switch to/from daylight saving.
     Hours may be non-zero on daylight saving cut-over:
     > 12 when midnight changeover, but then cannot generate
     midnight datetime, so jump to 1AM, otherwise reset.
     @param  date  (Date) the date to check
     @return  (Date) the corrected date */
  _daylightSavingAdjust: function(date) {
    if (!date) return null;
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  },

  /* Set the date(s) directly. */
  _setDate: function(inst, date, noChange) {
    var clear = !date;
    var origMonth = inst.selectedMonth;
    var origYear = inst.selectedYear;
    var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
    inst.selectedDay = inst.currentDay = newDate.getDate();
    inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
    inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
    if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
      this._notifyChange(inst);
    this._adjustInstDate(inst);
    if (inst.input) {
      inst.input.val(clear ? '' : this._formatDate(inst));
    }
  },

  /* Retrieve the date(s) directly. */
  _getDate: function(inst) {
    var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
      this._daylightSavingAdjust(new Date(
      inst.currentYear, inst.currentMonth, inst.currentDay)));
      return startDate;
  },

  /* Attach the onxxx handlers.  These are declared statically so
   * they work with static code transformers like Caja.
   */
  _attachHandlers: function(inst) {
    var stepMonths = this._get(inst, 'stepMonths');
    var id = '#' + inst.id.replace( /\\\\/g, "\\" );
    inst.dpDiv.find('[data-handler]').map(function () {
      var handler = {
        prev: function () {
          window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, -stepMonths, 'M');
        },
        next: function () {
          window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, +stepMonths, 'M');
        },
        hide: function () {
          window['DP_jQuery_' + dpuuid].datepicker._hideDatepicker();
        },
        today: function () {
          window['DP_jQuery_' + dpuuid].datepicker._gotoToday(id);
        },
        selectDay: function () {
          window['DP_jQuery_' + dpuuid].datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
          return false;
        },
        selectMonth: function () {
          window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'M');
          return false;
        },
        selectYear: function () {
          window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'Y');
          return false;
        }
      };
      $(this).bind(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
    });
  },

  /* Generate the HTML for the current state of the date picker. */
  _generateHTML: function(inst) {
    var today = new Date();
    today = this._daylightSavingAdjust(
      new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
    var isRTL = this._get(inst, 'isRTL');
    var showButtonPanel = this._get(inst, 'showButtonPanel');
    var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
    var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
    var numMonths = this._getNumberOfMonths(inst);
    var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
    var stepMonths = this._get(inst, 'stepMonths');
    var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
    var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
      new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
    var minDate = this._getMinMaxDate(inst, 'min');
    var maxDate = this._getMinMaxDate(inst, 'max');
    var drawMonth = inst.drawMonth - showCurrentAtPos;
    var drawYear = inst.drawYear;
    if (drawMonth < 0) {
      drawMonth += 12;
      drawYear--;
    }
    if (maxDate) {
      var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
        maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
      maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
      while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
        drawMonth--;
        if (drawMonth < 0) {
          drawMonth = 11;
          drawYear--;
        }
      }
    }
    inst.drawMonth = drawMonth;
    inst.drawYear = drawYear;
    var prevText = this._get(inst, 'prevText');
    prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
      this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
      this._getFormatConfig(inst)));
    var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
      '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"' +
      ' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
      (hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
    var nextText = this._get(inst, 'nextText');
    nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
      this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
      this._getFormatConfig(inst)));
    var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
      '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"' +
      ' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
      (hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
    var currentText = this._get(inst, 'currentText');
    var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
    currentText = (!navigationAsDateFormat ? currentText :
      this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
    var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
      this._get(inst, 'closeText') + '</button>' : '');
    var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
      (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"' +
      '>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
    var firstDay = parseInt(this._get(inst, 'firstDay'),10);
    firstDay = (isNaN(firstDay) ? 0 : firstDay);
    var showWeek = this._get(inst, 'showWeek');
    var dayNames = this._get(inst, 'dayNames');
    var dayNamesShort = this._get(inst, 'dayNamesShort');
    var dayNamesMin = this._get(inst, 'dayNamesMin');
    var monthNames = this._get(inst, 'monthNames');
    var monthNamesShort = this._get(inst, 'monthNamesShort');
    var beforeShowDay = this._get(inst, 'beforeShowDay');
    var showOtherMonths = this._get(inst, 'showOtherMonths');
    var selectOtherMonths = this._get(inst, 'selectOtherMonths');
    var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
    var defaultDate = this._getDefaultDate(inst);
    var html = '';
    for (var row = 0; row < numMonths[0]; row++) {
      var group = '';
      this.maxRows = 4;
      for (var col = 0; col < numMonths[1]; col++) {
        var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
        var cornerClass = ' ui-corner-all';
        var calender = '';
        if (isMultiMonth) {
          calender += '<div class="ui-datepicker-group';
          if (numMonths[1] > 1)
            switch (col) {
              case 0: calender += ' ui-datepicker-group-first';
                cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
              case numMonths[1]-1: calender += ' ui-datepicker-group-last';
                cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
              default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
            }
          calender += '">';
        }
        calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
          (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
          (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
          this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
          row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
          '</div><table class="ui-datepicker-calendar"><thead>' +
          '<tr>';
        var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
        for (var dow = 0; dow < 7; dow++) { // days of the week
          var day = (dow + firstDay) % 7;
          thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
            '<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
        }
        calender += thead + '</tr></thead><tbody>';
        var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
        if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
          inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
        var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
        var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
        var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
        this.maxRows = numRows;
        var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
        for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
          calender += '<tr>';
          var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
            this._get(inst, 'calculateWeek')(printDate) + '</td>');
          for (var dow = 0; dow < 7; dow++) { // create date picker days
            var daySettings = (beforeShowDay ?
              beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
            var otherMonth = (printDate.getMonth() != drawMonth);
            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
              (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
            tbody += '<td class="' +
              ((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
              (otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
              ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
              (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
              // or defaultDate is current printedDate and defaultDate is selectedDate
              ' ' + this._dayOverClass : '') + // highlight selected day
              (unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
              (otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
              (printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
              (printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
              ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
              (unselectable ? '' : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + '>' + // actions
              (otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
              (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
              (printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
              (printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
              (otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
              '" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
            printDate.setDate(printDate.getDate() + 1);
            printDate = this._daylightSavingAdjust(printDate);
          }
          calender += tbody + '</tr>';
        }
        drawMonth++;
        if (drawMonth > 11) {
          drawMonth = 0;
          drawYear++;
        }
        calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
              ((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
        group += calender;
      }
      html += group;
    }
    html += buttonPanel + ($.ui.ie6 && !inst.inline ?
      '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
    inst._keyEvent = false;
    return html;
  },

  /* Generate the month and year header. */
  _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
      secondary, monthNames, monthNamesShort) {
    var changeMonth = this._get(inst, 'changeMonth');
    var changeYear = this._get(inst, 'changeYear');
    var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
    var html = '<div class="ui-datepicker-title">';
    var monthHtml = '';
    // month selection
    if (secondary || !changeMonth)
      monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
    else {
      var inMinYear = (minDate && minDate.getFullYear() == drawYear);
      var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
      monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
      for (var month = 0; month < 12; month++) {
        if ((!inMinYear || month >= minDate.getMonth()) &&
            (!inMaxYear || month <= maxDate.getMonth()))
          monthHtml += '<option value="' + month + '"' +
            (month == drawMonth ? ' selected="selected"' : '') +
            '>' + monthNamesShort[month] + '</option>';
      }
      monthHtml += '</select>';
    }
    if (!showMonthAfterYear)
      html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
    // year selection
    if ( !inst.yearshtml ) {
      inst.yearshtml = '';
      if (secondary || !changeYear)
        html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
      else {
        // determine range of years to display
        var years = this._get(inst, 'yearRange').split(':');
        var thisYear = new Date().getFullYear();
        var determineYear = function(value) {
          var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
            (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
            parseInt(value, 10)));
          return (isNaN(year) ? thisYear : year);
        };
        var year = determineYear(years[0]);
        var endYear = Math.max(year, determineYear(years[1] || ''));
        year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
        endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
        inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
        for (; year <= endYear; year++) {
          inst.yearshtml += '<option value="' + year + '"' +
            (year == drawYear ? ' selected="selected"' : '') +
            '>' + year + '</option>';
        }
        inst.yearshtml += '</select>';

        html += inst.yearshtml;
        inst.yearshtml = null;
      }
    }
    html += this._get(inst, 'yearSuffix');
    if (showMonthAfterYear)
      html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
    html += '</div>'; // Close datepicker_header
    return html;
  },

  /* Adjust one of the date sub-fields. */
  _adjustInstDate: function(inst, offset, period) {
    var year = inst.drawYear + (period == 'Y' ? offset : 0);
    var month = inst.drawMonth + (period == 'M' ? offset : 0);
    var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
      (period == 'D' ? offset : 0);
    var date = this._restrictMinMax(inst,
      this._daylightSavingAdjust(new Date(year, month, day)));
    inst.selectedDay = date.getDate();
    inst.drawMonth = inst.selectedMonth = date.getMonth();
    inst.drawYear = inst.selectedYear = date.getFullYear();
    if (period == 'M' || period == 'Y')
      this._notifyChange(inst);
  },

  /* Ensure a date is within any min/max bounds. */
  _restrictMinMax: function(inst, date) {
    var minDate = this._getMinMaxDate(inst, 'min');
    var maxDate = this._getMinMaxDate(inst, 'max');
    var newDate = (minDate && date < minDate ? minDate : date);
    newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
    return newDate;
  },

  /* Notify change of month/year. */
  _notifyChange: function(inst) {
    var onChange = this._get(inst, 'onChangeMonthYear');
    if (onChange)
      onChange.apply((inst.input ? inst.input[0] : null),
        [inst.selectedYear, inst.selectedMonth + 1, inst]);
  },

  /* Determine the number of months to show. */
  _getNumberOfMonths: function(inst) {
    var numMonths = this._get(inst, 'numberOfMonths');
    return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
  },

  /* Determine the current maximum date - ensure no time components are set. */
  _getMinMaxDate: function(inst, minMax) {
    return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
  },

  /* Find the number of days in a given month. */
  _getDaysInMonth: function(year, month) {
    return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
  },

  /* Find the day of the week of the first of a month. */
  _getFirstDayOfMonth: function(year, month) {
    return new Date(year, month, 1).getDay();
  },

  /* Determines if we should allow a "next/prev" month display change. */
  _canAdjustMonth: function(inst, offset, curYear, curMonth) {
    var numMonths = this._getNumberOfMonths(inst);
    var date = this._daylightSavingAdjust(new Date(curYear,
      curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
    if (offset < 0)
      date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
    return this._isInRange(inst, date);
  },

  /* Is the given date in the accepted range? */
  _isInRange: function(inst, date) {
    var minDate = this._getMinMaxDate(inst, 'min');
    var maxDate = this._getMinMaxDate(inst, 'max');
    return ((!minDate || date.getTime() >= minDate.getTime()) &&
      (!maxDate || date.getTime() <= maxDate.getTime()));
  },

  /* Provide the configuration settings for formatting/parsing. */
  _getFormatConfig: function(inst) {
    var shortYearCutoff = this._get(inst, 'shortYearCutoff');
    shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
      new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
    return {shortYearCutoff: shortYearCutoff,
      dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
      monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
  },

  /* Format the given date for display. */
  _formatDate: function(inst, day, month, year) {
    if (!day) {
      inst.currentDay = inst.selectedDay;
      inst.currentMonth = inst.selectedMonth;
      inst.currentYear = inst.selectedYear;
    }
    var date = (day ? (typeof day == 'object' ? day :
      this._daylightSavingAdjust(new Date(year, month, day))) :
      this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
    return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
  }
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function bindHover(dpDiv) {
  var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
  return dpDiv.delegate(selector, 'mouseout', function() {
      $(this).removeClass('ui-state-hover');
      if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
      if (this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
    })
    .delegate(selector, 'mouseover', function(){
      if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
        $(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
        $(this).addClass('ui-state-hover');
        if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
        if (this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
      }
    });
}

/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
  $.extend(target, props);
  for (var name in props)
    if (props[name] == null || props[name] == undefined)
      target[name] = props[name];
  return target;
};

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
                  Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

  /* Verify an empty collection wasn't passed - Fixes #6976 */
  if ( !this.length ) {
    return this;
  }

  /* Initialise the date picker. */
  if (!$.datepicker.initialized) {
    $(document).mousedown($.datepicker._checkExternalClick).
      find(document.body).append($.datepicker.dpDiv);
    $.datepicker.initialized = true;
  }

  var otherArgs = Array.prototype.slice.call(arguments, 1);
  if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
    return $.datepicker['_' + options + 'Datepicker'].
      apply($.datepicker, [this[0]].concat(otherArgs));
  if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
    return $.datepicker['_' + options + 'Datepicker'].
      apply($.datepicker, [this[0]].concat(otherArgs));
  return this.each(function() {
    typeof options == 'string' ?
      $.datepicker['_' + options + 'Datepicker'].
        apply($.datepicker, [this].concat(otherArgs)) :
      $.datepicker._attachDatepicker(this, options);
  });
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.9.2";

// Workaround for #4055
// Add another global to avoid noConflict issues with inline event handlers
window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

(function( $, undefined ) {

var uiDialogClasses = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
  sizeRelatedOptions = {
    buttons: true,
    height: true,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    width: true
  },
  resizableRelatedOptions = {
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true
  };

$.widget("ui.dialog", {
  version: "1.9.2",
  options: {
    autoOpen: true,
    buttons: {},
    closeOnEscape: true,
    closeText: "close",
    dialogClass: "",
    draggable: true,
    hide: null,
    height: "auto",
    maxHeight: false,
    maxWidth: false,
    minHeight: 150,
    minWidth: 150,
    modal: false,
    position: {
      my: "center",
      at: "center",
      of: window,
      collision: "fit",
      // ensure that the titlebar is never outside the document
      using: function( pos ) {
        var topOffset = $( this ).css( pos ).offset().top;
        if ( topOffset < 0 ) {
          $( this ).css( "top", pos.top - topOffset );
        }
      }
    },
    resizable: true,
    show: null,
    stack: true,
    title: "",
    width: 300,
    zIndex: 1000
  },

  _create: function() {
    this.originalTitle = this.element.attr( "title" );
    // #5742 - .attr() might return a DOMElement
    if ( typeof this.originalTitle !== "string" ) {
      this.originalTitle = "";
    }
    this.oldPosition = {
      parent: this.element.parent(),
      index: this.element.parent().children().index( this.element )
    };
    this.options.title = this.options.title || this.originalTitle;
    var that = this,
      options = this.options,

      title = options.title || "&#160;",
      uiDialog,
      uiDialogTitlebar,
      uiDialogTitlebarClose,
      uiDialogTitle,
      uiDialogButtonPane;

      uiDialog = ( this.uiDialog = $( "<div>" ) )
        .addClass( uiDialogClasses + options.dialogClass )
        .css({
          display: "none",
          outline: 0, // TODO: move to stylesheet
          zIndex: options.zIndex
        })
        // setting tabIndex makes the div focusable
        .attr( "tabIndex", -1)
        .keydown(function( event ) {
          if ( options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
              event.keyCode === $.ui.keyCode.ESCAPE ) {
            that.close( event );
            event.preventDefault();
          }
        })
        .mousedown(function( event ) {
          that.moveToTop( false, event );
        })
        .appendTo( "body" );

      this.element
        .show()
        .removeAttr( "title" )
        .addClass( "ui-dialog-content ui-widget-content" )
        .appendTo( uiDialog );

      uiDialogTitlebar = ( this.uiDialogTitlebar = $( "<div>" ) )
        .addClass( "ui-dialog-titlebar  ui-widget-header  " +
          "ui-corner-all  ui-helper-clearfix" )
        .bind( "mousedown", function() {
          // Dialog isn't getting focus when dragging (#8063)
          uiDialog.focus();
        })
        .prependTo( uiDialog );

      uiDialogTitlebarClose = $( "<a href='#'></a>" )
        .addClass( "ui-dialog-titlebar-close  ui-corner-all" )
        .attr( "role", "button" )
        .click(function( event ) {
          event.preventDefault();
          that.close( event );
        })
        .appendTo( uiDialogTitlebar );

      ( this.uiDialogTitlebarCloseText = $( "<span>" ) )
        .addClass( "ui-icon ui-icon-closethick" )
        .text( options.closeText )
        .appendTo( uiDialogTitlebarClose );

      uiDialogTitle = $( "<span>" )
        .uniqueId()
        .addClass( "ui-dialog-title" )
        .html( title )
        .prependTo( uiDialogTitlebar );

      uiDialogButtonPane = ( this.uiDialogButtonPane = $( "<div>" ) )
        .addClass( "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" );

      ( this.uiButtonSet = $( "<div>" ) )
        .addClass( "ui-dialog-buttonset" )
        .appendTo( uiDialogButtonPane );

    uiDialog.attr({
      role: "dialog",
      "aria-labelledby": uiDialogTitle.attr( "id" )
    });

    uiDialogTitlebar.find( "*" ).add( uiDialogTitlebar ).disableSelection();
    this._hoverable( uiDialogTitlebarClose );
    this._focusable( uiDialogTitlebarClose );

    if ( options.draggable && $.fn.draggable ) {
      this._makeDraggable();
    }
    if ( options.resizable && $.fn.resizable ) {
      this._makeResizable();
    }

    this._createButtons( options.buttons );
    this._isOpen = false;

    if ( $.fn.bgiframe ) {
      uiDialog.bgiframe();
    }

    // prevent tabbing out of modal dialogs
    this._on( uiDialog, { keydown: function( event ) {
      if ( !options.modal || event.keyCode !== $.ui.keyCode.TAB ) {
        return;
      }

      var tabbables = $( ":tabbable", uiDialog ),
        first = tabbables.filter( ":first" ),
        last  = tabbables.filter( ":last" );

      if ( event.target === last[0] && !event.shiftKey ) {
        first.focus( 1 );
        return false;
      } else if ( event.target === first[0] && event.shiftKey ) {
        last.focus( 1 );
        return false;
      }
    }});
  },

  _init: function() {
    if ( this.options.autoOpen ) {
      this.open();
    }
  },

  _destroy: function() {
    var next,
      oldPosition = this.oldPosition;

    if ( this.overlay ) {
      this.overlay.destroy();
    }
    this.uiDialog.hide();
    this.element
      .removeClass( "ui-dialog-content ui-widget-content" )
      .hide()
      .appendTo( "body" );
    this.uiDialog.remove();

    if ( this.originalTitle ) {
      this.element.attr( "title", this.originalTitle );
    }

    next = oldPosition.parent.children().eq( oldPosition.index );
    // Don't try to place the dialog next to itself (#8613)
    if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
      next.before( this.element );
    } else {
      oldPosition.parent.append( this.element );
    }
  },

  widget: function() {
    return this.uiDialog;
  },

  close: function( event ) {
    var that = this,
      maxZ, thisZ;

    if ( !this._isOpen ) {
      return;
    }

    if ( false === this._trigger( "beforeClose", event ) ) {
      return;
    }

    this._isOpen = false;

    if ( this.overlay ) {
      this.overlay.destroy();
    }

    if ( this.options.hide ) {
      this._hide( this.uiDialog, this.options.hide, function() {
        that._trigger( "close", event );
      });
    } else {
      this.uiDialog.hide();
      this._trigger( "close", event );
    }

    $.ui.dialog.overlay.resize();

    // adjust the maxZ to allow other modal dialogs to continue to work (see #4309)
    if ( this.options.modal ) {
      maxZ = 0;
      $( ".ui-dialog" ).each(function() {
        if ( this !== that.uiDialog[0] ) {
          thisZ = $( this ).css( "z-index" );
          if ( !isNaN( thisZ ) ) {
            maxZ = Math.max( maxZ, thisZ );
          }
        }
      });
      $.ui.dialog.maxZ = maxZ;
    }

    return this;
  },

  isOpen: function() {
    return this._isOpen;
  },

  // the force parameter allows us to move modal dialogs to their correct
  // position on open
  moveToTop: function( force, event ) {
    var options = this.options,
      saveScroll;

    if ( ( options.modal && !force ) ||
        ( !options.stack && !options.modal ) ) {
      return this._trigger( "focus", event );
    }

    if ( options.zIndex > $.ui.dialog.maxZ ) {
      $.ui.dialog.maxZ = options.zIndex;
    }
    if ( this.overlay ) {
      $.ui.dialog.maxZ += 1;
      $.ui.dialog.overlay.maxZ = $.ui.dialog.maxZ;
      this.overlay.$el.css( "z-index", $.ui.dialog.overlay.maxZ );
    }

    // Save and then restore scroll
    // Opera 9.5+ resets when parent z-index is changed.
    // http://bugs.jqueryui.com/ticket/3193
    saveScroll = {
      scrollTop: this.element.scrollTop(),
      scrollLeft: this.element.scrollLeft()
    };
    $.ui.dialog.maxZ += 1;
    this.uiDialog.css( "z-index", $.ui.dialog.maxZ );
    this.element.attr( saveScroll );
    this._trigger( "focus", event );

    return this;
  },

  open: function() {
    if ( this._isOpen ) {
      return;
    }

    var hasFocus,
      options = this.options,
      uiDialog = this.uiDialog;

    this._size();
    this._position( options.position );
    uiDialog.show( options.show );
    this.overlay = options.modal ? new $.ui.dialog.overlay( this ) : null;
    this.moveToTop( true );

    // set focus to the first tabbable element in the content area or the first button
    // if there are no tabbable elements, set focus on the dialog itself
    hasFocus = this.element.find( ":tabbable" );
    if ( !hasFocus.length ) {
      hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
      if ( !hasFocus.length ) {
        hasFocus = uiDialog;
      }
    }
    hasFocus.eq( 0 ).focus();

    this._isOpen = true;
    this._trigger( "open" );

    return this;
  },

  _createButtons: function( buttons ) {
    var that = this,
      hasButtons = false;

    // if we already have a button pane, remove it
    this.uiDialogButtonPane.remove();
    this.uiButtonSet.empty();

    if ( typeof buttons === "object" && buttons !== null ) {
      $.each( buttons, function() {
        return !(hasButtons = true);
      });
    }
    if ( hasButtons ) {
      $.each( buttons, function( name, props ) {
        var button, click;
        props = $.isFunction( props ) ?
          { click: props, text: name } :
          props;
        // Default to a non-submitting button
        props = $.extend( { type: "button" }, props );
        // Change the context for the click callback to be the main element
        click = props.click;
        props.click = function() {
          click.apply( that.element[0], arguments );
        };
        button = $( "<button></button>", props )
          .appendTo( that.uiButtonSet );
        if ( $.fn.button ) {
          button.button();
        }
      });
      this.uiDialog.addClass( "ui-dialog-buttons" );
      this.uiDialogButtonPane.appendTo( this.uiDialog );
    } else {
      this.uiDialog.removeClass( "ui-dialog-buttons" );
    }
  },

  _makeDraggable: function() {
    var that = this,
      options = this.options;

    function filteredUi( ui ) {
      return {
        position: ui.position,
        offset: ui.offset
      };
    }

    this.uiDialog.draggable({
      cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
      handle: ".ui-dialog-titlebar",
      containment: "document",
      start: function( event, ui ) {
        $( this )
          .addClass( "ui-dialog-dragging" );
        that._trigger( "dragStart", event, filteredUi( ui ) );
      },
      drag: function( event, ui ) {
        that._trigger( "drag", event, filteredUi( ui ) );
      },
      stop: function( event, ui ) {
        options.position = [
          ui.position.left - that.document.scrollLeft(),
          ui.position.top - that.document.scrollTop()
        ];
        $( this )
          .removeClass( "ui-dialog-dragging" );
        that._trigger( "dragStop", event, filteredUi( ui ) );
        $.ui.dialog.overlay.resize();
      }
    });
  },

  _makeResizable: function( handles ) {
    handles = (handles === undefined ? this.options.resizable : handles);
    var that = this,
      options = this.options,
      // .ui-resizable has position: relative defined in the stylesheet
      // but dialogs have to use absolute or fixed positioning
      position = this.uiDialog.css( "position" ),
      resizeHandles = typeof handles === 'string' ?
        handles :
        "n,e,s,w,se,sw,ne,nw";

    function filteredUi( ui ) {
      return {
        originalPosition: ui.originalPosition,
        originalSize: ui.originalSize,
        position: ui.position,
        size: ui.size
      };
    }

    this.uiDialog.resizable({
      cancel: ".ui-dialog-content",
      containment: "document",
      alsoResize: this.element,
      maxWidth: options.maxWidth,
      maxHeight: options.maxHeight,
      minWidth: options.minWidth,
      minHeight: this._minHeight(),
      handles: resizeHandles,
      start: function( event, ui ) {
        $( this ).addClass( "ui-dialog-resizing" );
        that._trigger( "resizeStart", event, filteredUi( ui ) );
      },
      resize: function( event, ui ) {
        that._trigger( "resize", event, filteredUi( ui ) );
      },
      stop: function( event, ui ) {
        $( this ).removeClass( "ui-dialog-resizing" );
        options.height = $( this ).height();
        options.width = $( this ).width();
        that._trigger( "resizeStop", event, filteredUi( ui ) );
        $.ui.dialog.overlay.resize();
      }
    })
    .css( "position", position )
    .find( ".ui-resizable-se" )
      .addClass( "ui-icon ui-icon-grip-diagonal-se" );
  },

  _minHeight: function() {
    var options = this.options;

    if ( options.height === "auto" ) {
      return options.minHeight;
    } else {
      return Math.min( options.minHeight, options.height );
    }
  },

  _position: function( position ) {
    var myAt = [],
      offset = [ 0, 0 ],
      isVisible;

    if ( position ) {
      // deep extending converts arrays to objects in jQuery <= 1.3.2 :-(
  //    if (typeof position == 'string' || $.isArray(position)) {
  //      myAt = $.isArray(position) ? position : position.split(' ');

      if ( typeof position === "string" || (typeof position === "object" && "0" in position ) ) {
        myAt = position.split ? position.split( " " ) : [ position[ 0 ], position[ 1 ] ];
        if ( myAt.length === 1 ) {
          myAt[ 1 ] = myAt[ 0 ];
        }

        $.each( [ "left", "top" ], function( i, offsetPosition ) {
          if ( +myAt[ i ] === myAt[ i ] ) {
            offset[ i ] = myAt[ i ];
            myAt[ i ] = offsetPosition;
          }
        });

        position = {
          my: myAt[0] + (offset[0] < 0 ? offset[0] : "+" + offset[0]) + " " +
            myAt[1] + (offset[1] < 0 ? offset[1] : "+" + offset[1]),
          at: myAt.join( " " )
        };
      }

      position = $.extend( {}, $.ui.dialog.prototype.options.position, position );
    } else {
      position = $.ui.dialog.prototype.options.position;
    }

    // need to show the dialog to get the actual offset in the position plugin
    isVisible = this.uiDialog.is( ":visible" );
    if ( !isVisible ) {
      this.uiDialog.show();
    }
    this.uiDialog.position( position );
    if ( !isVisible ) {
      this.uiDialog.hide();
    }
  },

  _setOptions: function( options ) {
    var that = this,
      resizableOptions = {},
      resize = false;

    $.each( options, function( key, value ) {
      that._setOption( key, value );

      if ( key in sizeRelatedOptions ) {
        resize = true;
      }
      if ( key in resizableRelatedOptions ) {
        resizableOptions[ key ] = value;
      }
    });

    if ( resize ) {
      this._size();
    }
    if ( this.uiDialog.is( ":data(resizable)" ) ) {
      this.uiDialog.resizable( "option", resizableOptions );
    }
  },

  _setOption: function( key, value ) {
    var isDraggable, isResizable,
      uiDialog = this.uiDialog;

    switch ( key ) {
      case "buttons":
        this._createButtons( value );
        break;
      case "closeText":
        // ensure that we always pass a string
        this.uiDialogTitlebarCloseText.text( "" + value );
        break;
      case "dialogClass":
        uiDialog
          .removeClass( this.options.dialogClass )
          .addClass( uiDialogClasses + value );
        break;
      case "disabled":
        if ( value ) {
          uiDialog.addClass( "ui-dialog-disabled" );
        } else {
          uiDialog.removeClass( "ui-dialog-disabled" );
        }
        break;
      case "draggable":
        isDraggable = uiDialog.is( ":data(draggable)" );
        if ( isDraggable && !value ) {
          uiDialog.draggable( "destroy" );
        }

        if ( !isDraggable && value ) {
          this._makeDraggable();
        }
        break;
      case "position":
        this._position( value );
        break;
      case "resizable":
        // currently resizable, becoming non-resizable
        isResizable = uiDialog.is( ":data(resizable)" );
        if ( isResizable && !value ) {
          uiDialog.resizable( "destroy" );
        }

        // currently resizable, changing handles
        if ( isResizable && typeof value === "string" ) {
          uiDialog.resizable( "option", "handles", value );
        }

        // currently non-resizable, becoming resizable
        if ( !isResizable && value !== false ) {
          this._makeResizable( value );
        }
        break;
      case "title":
        // convert whatever was passed in o a string, for html() to not throw up
        $( ".ui-dialog-title", this.uiDialogTitlebar )
          .html( "" + ( value || "&#160;" ) );
        break;
    }

    this._super( key, value );
  },

  _size: function() {
    /* If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
     * divs will both have width and height set, so we need to reset them
     */
    var nonContentHeight, minContentHeight, autoHeight,
      options = this.options,
      isVisible = this.uiDialog.is( ":visible" );

    // reset content sizing
    this.element.show().css({
      width: "auto",
      minHeight: 0,
      height: 0
    });

    if ( options.minWidth > options.width ) {
      options.width = options.minWidth;
    }

    // reset wrapper sizing
    // determine the height of all the non-content elements
    nonContentHeight = this.uiDialog.css({
        height: "auto",
        width: options.width
      })
      .outerHeight();
    minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );

    if ( options.height === "auto" ) {
      // only needed for IE6 support
      if ( $.support.minHeight ) {
        this.element.css({
          minHeight: minContentHeight,
          height: "auto"
        });
      } else {
        this.uiDialog.show();
        autoHeight = this.element.css( "height", "auto" ).height();
        if ( !isVisible ) {
          this.uiDialog.hide();
        }
        this.element.height( Math.max( autoHeight, minContentHeight ) );
      }
    } else {
      this.element.height( Math.max( options.height - nonContentHeight, 0 ) );
    }

    if (this.uiDialog.is( ":data(resizable)" ) ) {
      this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
    }
  }
});

$.extend($.ui.dialog, {
  uuid: 0,
  maxZ: 0,

  getTitleId: function($el) {
    var id = $el.attr( "id" );
    if ( !id ) {
      this.uuid += 1;
      id = this.uuid;
    }
    return "ui-dialog-title-" + id;
  },

  overlay: function( dialog ) {
    this.$el = $.ui.dialog.overlay.create( dialog );
  }
});

$.extend( $.ui.dialog.overlay, {
  instances: [],
  // reuse old instances due to IE memory leak with alpha transparency (see #5185)
  oldInstances: [],
  maxZ: 0,
  events: $.map(
    "focus,mousedown,mouseup,keydown,keypress,click".split( "," ),
    function( event ) {
      return event + ".dialog-overlay";
    }
  ).join( " " ),
  create: function( dialog ) {
    if ( this.instances.length === 0 ) {
      // prevent use of anchors and inputs
      // we use a setTimeout in case the overlay is created from an
      // event that we're going to be cancelling (see #2804)
      setTimeout(function() {
        // handle $(el).dialog().dialog('close') (see #4065)
        if ( $.ui.dialog.overlay.instances.length ) {
          $( document ).bind( $.ui.dialog.overlay.events, function( event ) {
            // stop events if the z-index of the target is < the z-index of the overlay
            // we cannot return true when we don't want to cancel the event (#3523)
            if ( $( event.target ).zIndex() < $.ui.dialog.overlay.maxZ ) {
              return false;
            }
          });
        }
      }, 1 );

      // handle window resize
      $( window ).bind( "resize.dialog-overlay", $.ui.dialog.overlay.resize );
    }

    var $el = ( this.oldInstances.pop() || $( "<div>" ).addClass( "ui-widget-overlay" ) );

    // allow closing by pressing the escape key
    $( document ).bind( "keydown.dialog-overlay", function( event ) {
      var instances = $.ui.dialog.overlay.instances;
      // only react to the event if we're the top overlay
      if ( instances.length !== 0 && instances[ instances.length - 1 ] === $el &&
        dialog.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
        event.keyCode === $.ui.keyCode.ESCAPE ) {

        dialog.close( event );
        event.preventDefault();
      }
    });

    $el.appendTo( document.body ).css({
      width: this.width(),
      height: this.height()
    });

    if ( $.fn.bgiframe ) {
      $el.bgiframe();
    }

    this.instances.push( $el );
    return $el;
  },

  destroy: function( $el ) {
    var indexOf = $.inArray( $el, this.instances ),
      maxZ = 0;

    if ( indexOf !== -1 ) {
      this.oldInstances.push( this.instances.splice( indexOf, 1 )[ 0 ] );
    }

    if ( this.instances.length === 0 ) {
      $( [ document, window ] ).unbind( ".dialog-overlay" );
    }

    $el.height( 0 ).width( 0 ).remove();

    // adjust the maxZ to allow other modal dialogs to continue to work (see #4309)
    $.each( this.instances, function() {
      maxZ = Math.max( maxZ, this.css( "z-index" ) );
    });
    this.maxZ = maxZ;
  },

  height: function() {
    var scrollHeight,
      offsetHeight;
    // handle IE
    if ( $.ui.ie ) {
      scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      offsetHeight = Math.max(
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );

      if ( scrollHeight < offsetHeight ) {
        return $( window ).height() + "px";
      } else {
        return scrollHeight + "px";
      }
    // handle "good" browsers
    } else {
      return $( document ).height() + "px";
    }
  },

  width: function() {
    var scrollWidth,
      offsetWidth;
    // handle IE
    if ( $.ui.ie ) {
      scrollWidth = Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth
      );
      offsetWidth = Math.max(
        document.documentElement.offsetWidth,
        document.body.offsetWidth
      );

      if ( scrollWidth < offsetWidth ) {
        return $( window ).width() + "px";
      } else {
        return scrollWidth + "px";
      }
    // handle "good" browsers
    } else {
      return $( document ).width() + "px";
    }
  },

  resize: function() {
    /* If the dialog is draggable and the user drags it past the
     * right edge of the window, the document becomes wider so we
     * need to stretch the overlay. If the user then drags the
     * dialog back to the left, the document will become narrower,
     * so we need to shrink the overlay to the appropriate size.
     * This is handled by shrinking the overlay before setting it
     * to the full document size.
     */
    var $overlays = $( [] );
    $.each( $.ui.dialog.overlay.instances, function() {
      $overlays = $overlays.add( this );
    });

    $overlays.css({
      width: 0,
      height: 0
    }).css({
      width: $.ui.dialog.overlay.width(),
      height: $.ui.dialog.overlay.height()
    });
  }
});

$.extend( $.ui.dialog.overlay.prototype, {
  destroy: function() {
    $.ui.dialog.overlay.destroy( this.$el );
  }
});

}( jQuery ) );

(function( $, undefined ) {

var rvertical = /up|down|vertical/,
  rpositivemotion = /up|left|vertical|horizontal/;

$.effects.effect.blind = function( o, done ) {
  // Create element
  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
    mode = $.effects.setMode( el, o.mode || "hide" ),
    direction = o.direction || "up",
    vertical = rvertical.test( direction ),
    ref = vertical ? "height" : "width",
    ref2 = vertical ? "top" : "left",
    motion = rpositivemotion.test( direction ),
    animation = {},
    show = mode === "show",
    wrapper, distance, margin;

  // if already wrapped, the wrapper's properties are my property. #6245
  if ( el.parent().is( ".ui-effects-wrapper" ) ) {
    $.effects.save( el.parent(), props );
  } else {
    $.effects.save( el, props );
  }
  el.show();
  wrapper = $.effects.createWrapper( el ).css({
    overflow: "hidden"
  });

  distance = wrapper[ ref ]();
  margin = parseFloat( wrapper.css( ref2 ) ) || 0;

  animation[ ref ] = show ? distance : 0;
  if ( !motion ) {
    el
      .css( vertical ? "bottom" : "right", 0 )
      .css( vertical ? "top" : "left", "auto" )
      .css({ position: "absolute" });

    animation[ ref2 ] = show ? margin : distance + margin;
  }

  // start at 0 if we are showing
  if ( show ) {
    wrapper.css( ref, 0 );
    if ( ! motion ) {
      wrapper.css( ref2, margin + distance );
    }
  }

  // Animate
  wrapper.animate( animation, {
    duration: o.duration,
    easing: o.easing,
    queue: false,
    complete: function() {
      if ( mode === "hide" ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    }
  });

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.bounce = function( o, done ) {
  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

    // defaults:
    mode = $.effects.setMode( el, o.mode || "effect" ),
    hide = mode === "hide",
    show = mode === "show",
    direction = o.direction || "up",
    distance = o.distance,
    times = o.times || 5,

    // number of internal animations
    anims = times * 2 + ( show || hide ? 1 : 0 ),
    speed = o.duration / anims,
    easing = o.easing,

    // utility:
    ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
    motion = ( direction === "up" || direction === "left" ),
    i,
    upAnim,
    downAnim,

    // we will need to re-assemble the queue to stack our animations in place
    queue = el.queue(),
    queuelen = queue.length;

  // Avoid touching opacity to prevent clearType and PNG issues in IE
  if ( show || hide ) {
    props.push( "opacity" );
  }

  $.effects.save( el, props );
  el.show();
  $.effects.createWrapper( el ); // Create Wrapper

  // default distance for the BIGGEST bounce is the outer Distance / 3
  if ( !distance ) {
    distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
  }

  if ( show ) {
    downAnim = { opacity: 1 };
    downAnim[ ref ] = 0;

    // if we are showing, force opacity 0 and set the initial position
    // then do the "first" animation
    el.css( "opacity", 0 )
      .css( ref, motion ? -distance * 2 : distance * 2 )
      .animate( downAnim, speed, easing );
  }

  // start at the smallest distance if we are hiding
  if ( hide ) {
    distance = distance / Math.pow( 2, times - 1 );
  }

  downAnim = {};
  downAnim[ ref ] = 0;
  // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
  for ( i = 0; i < times; i++ ) {
    upAnim = {};
    upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

    el.animate( upAnim, speed, easing )
      .animate( downAnim, speed, easing );

    distance = hide ? distance * 2 : distance / 2;
  }

  // Last Bounce when Hiding
  if ( hide ) {
    upAnim = { opacity: 0 };
    upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

    el.animate( upAnim, speed, easing );
  }

  el.queue(function() {
    if ( hide ) {
      el.hide();
    }
    $.effects.restore( el, props );
    $.effects.removeWrapper( el );
    done();
  });

  // inject all the animations we just queued to be first in line (after "inprogress")
  if ( queuelen > 1) {
    queue.splice.apply( queue,
      [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
  }
  el.dequeue();

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.clip = function( o, done ) {
  // Create element
  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
    mode = $.effects.setMode( el, o.mode || "hide" ),
    show = mode === "show",
    direction = o.direction || "vertical",
    vert = direction === "vertical",
    size = vert ? "height" : "width",
    position = vert ? "top" : "left",
    animation = {},
    wrapper, animate, distance;

  // Save & Show
  $.effects.save( el, props );
  el.show();

  // Create Wrapper
  wrapper = $.effects.createWrapper( el ).css({
    overflow: "hidden"
  });
  animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
  distance = animate[ size ]();

  // Shift
  if ( show ) {
    animate.css( size, 0 );
    animate.css( position, distance / 2 );
  }

  // Create Animation Object:
  animation[ size ] = show ? distance : 0;
  animation[ position ] = show ? 0 : distance / 2;

  // Animate
  animate.animate( animation, {
    queue: false,
    duration: o.duration,
    easing: o.easing,
    complete: function() {
      if ( !show ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    }
  });

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.drop = function( o, done ) {

  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
    mode = $.effects.setMode( el, o.mode || "hide" ),
    show = mode === "show",
    direction = o.direction || "left",
    ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
    motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
    animation = {
      opacity: show ? 1 : 0
    },
    distance;

  // Adjust
  $.effects.save( el, props );
  el.show();
  $.effects.createWrapper( el );

  distance = o.distance || el[ ref === "top" ? "outerHeight": "outerWidth" ]( true ) / 2;

  if ( show ) {
    el
      .css( "opacity", 0 )
      .css( ref, motion === "pos" ? -distance : distance );
  }

  // Animation
  animation[ ref ] = ( show ?
    ( motion === "pos" ? "+=" : "-=" ) :
    ( motion === "pos" ? "-=" : "+=" ) ) +
    distance;

  // Animate
  el.animate( animation, {
    queue: false,
    duration: o.duration,
    easing: o.easing,
    complete: function() {
      if ( mode === "hide" ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    }
  });
};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.explode = function( o, done ) {

  var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
    cells = rows,
    el = $( this ),
    mode = $.effects.setMode( el, o.mode || "hide" ),
    show = mode === "show",

    // show and then visibility:hidden the element before calculating offset
    offset = el.show().css( "visibility", "hidden" ).offset(),

    // width and height of a piece
    width = Math.ceil( el.outerWidth() / cells ),
    height = Math.ceil( el.outerHeight() / rows ),
    pieces = [],

    // loop
    i, j, left, top, mx, my;

  // children animate complete:
  function childComplete() {
    pieces.push( this );
    if ( pieces.length === rows * cells ) {
      animComplete();
    }
  }

  // clone the element for each row and cell.
  for( i = 0; i < rows ; i++ ) { // ===>
    top = offset.top + i * height;
    my = i - ( rows - 1 ) / 2 ;

    for( j = 0; j < cells ; j++ ) { // |||
      left = offset.left + j * width;
      mx = j - ( cells - 1 ) / 2 ;

      // Create a clone of the now hidden main element that will be absolute positioned
      // within a wrapper div off the -left and -top equal to size of our pieces
      el
        .clone()
        .appendTo( "body" )
        .wrap( "<div></div>" )
        .css({
          position: "absolute",
          visibility: "visible",
          left: -j * width,
          top: -i * height
        })

      // select the wrapper - make it overflow: hidden and absolute positioned based on
      // where the original was located +left and +top equal to the size of pieces
        .parent()
        .addClass( "ui-effects-explode" )
        .css({
          position: "absolute",
          overflow: "hidden",
          width: width,
          height: height,
          left: left + ( show ? mx * width : 0 ),
          top: top + ( show ? my * height : 0 ),
          opacity: show ? 0 : 1
        }).animate({
          left: left + ( show ? 0 : mx * width ),
          top: top + ( show ? 0 : my * height ),
          opacity: show ? 1 : 0
        }, o.duration || 500, o.easing, childComplete );
    }
  }

  function animComplete() {
    el.css({
      visibility: "visible"
    });
    $( pieces ).remove();
    if ( !show ) {
      el.hide();
    }
    done();
  }
};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.fade = function( o, done ) {
  var el = $( this ),
    mode = $.effects.setMode( el, o.mode || "toggle" );

  el.animate({
    opacity: mode
  }, {
    queue: false,
    duration: o.duration,
    easing: o.easing,
    complete: done
  });
};

})( jQuery );

(function( $, undefined ) {

$.effects.effect.fold = function( o, done ) {

  // Create element
  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
    mode = $.effects.setMode( el, o.mode || "hide" ),
    show = mode === "show",
    hide = mode === "hide",
    size = o.size || 15,
    percent = /([0-9]+)%/.exec( size ),
    horizFirst = !!o.horizFirst,
    widthFirst = show !== horizFirst,
    ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
    duration = o.duration / 2,
    wrapper, distance,
    animation1 = {},
    animation2 = {};

  $.effects.save( el, props );
  el.show();

  // Create Wrapper
  wrapper = $.effects.createWrapper( el ).css({
    overflow: "hidden"
  });
  distance = widthFirst ?
    [ wrapper.width(), wrapper.height() ] :
    [ wrapper.height(), wrapper.width() ];

  if ( percent ) {
    size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
  }
  if ( show ) {
    wrapper.css( horizFirst ? {
      height: 0,
      width: size
    } : {
      height: size,
      width: 0
    });
  }

  // Animation
  animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
  animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

  // Animate
  wrapper
    .animate( animation1, duration, o.easing )
    .animate( animation2, duration, o.easing, function() {
      if ( hide ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    });

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.highlight = function( o, done ) {
  var elem = $( this ),
    props = [ "backgroundImage", "backgroundColor", "opacity" ],
    mode = $.effects.setMode( elem, o.mode || "show" ),
    animation = {
      backgroundColor: elem.css( "backgroundColor" )
    };

  if (mode === "hide") {
    animation.opacity = 0;
  }

  $.effects.save( elem, props );

  elem
    .show()
    .css({
      backgroundImage: "none",
      backgroundColor: o.color || "#ffff99"
    })
    .animate( animation, {
      queue: false,
      duration: o.duration,
      easing: o.easing,
      complete: function() {
        if ( mode === "hide" ) {
          elem.hide();
        }
        $.effects.restore( elem, props );
        done();
      }
    });
};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.pulsate = function( o, done ) {
  var elem = $( this ),
    mode = $.effects.setMode( elem, o.mode || "show" ),
    show = mode === "show",
    hide = mode === "hide",
    showhide = ( show || mode === "hide" ),

    // showing or hiding leaves of the "last" animation
    anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
    duration = o.duration / anims,
    animateTo = 0,
    queue = elem.queue(),
    queuelen = queue.length,
    i;

  if ( show || !elem.is(":visible")) {
    elem.css( "opacity", 0 ).show();
    animateTo = 1;
  }

  // anims - 1 opacity "toggles"
  for ( i = 1; i < anims; i++ ) {
    elem.animate({
      opacity: animateTo
    }, duration, o.easing );
    animateTo = 1 - animateTo;
  }

  elem.animate({
    opacity: animateTo
  }, duration, o.easing);

  elem.queue(function() {
    if ( hide ) {
      elem.hide();
    }
    done();
  });

  // We just queued up "anims" animations, we need to put them next in the queue
  if ( queuelen > 1 ) {
    queue.splice.apply( queue,
      [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
  }
  elem.dequeue();
};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.puff = function( o, done ) {
  var elem = $( this ),
    mode = $.effects.setMode( elem, o.mode || "hide" ),
    hide = mode === "hide",
    percent = parseInt( o.percent, 10 ) || 150,
    factor = percent / 100,
    original = {
      height: elem.height(),
      width: elem.width(),
      outerHeight: elem.outerHeight(),
      outerWidth: elem.outerWidth()
    };

  $.extend( o, {
    effect: "scale",
    queue: false,
    fade: true,
    mode: mode,
    complete: done,
    percent: hide ? percent : 100,
    from: hide ?
      original :
      {
        height: original.height * factor,
        width: original.width * factor,
        outerHeight: original.outerHeight * factor,
        outerWidth: original.outerWidth * factor
      }
  });

  elem.effect( o );
};

$.effects.effect.scale = function( o, done ) {

  // Create element
  var el = $( this ),
    options = $.extend( true, {}, o ),
    mode = $.effects.setMode( el, o.mode || "effect" ),
    percent = parseInt( o.percent, 10 ) ||
      ( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
    direction = o.direction || "both",
    origin = o.origin,
    original = {
      height: el.height(),
      width: el.width(),
      outerHeight: el.outerHeight(),
      outerWidth: el.outerWidth()
    },
    factor = {
      y: direction !== "horizontal" ? (percent / 100) : 1,
      x: direction !== "vertical" ? (percent / 100) : 1
    };

  // We are going to pass this effect to the size effect:
  options.effect = "size";
  options.queue = false;
  options.complete = done;

  // Set default origin and restore for show/hide
  if ( mode !== "effect" ) {
    options.origin = origin || ["middle","center"];
    options.restore = true;
  }

  options.from = o.from || ( mode === "show" ? {
    height: 0,
    width: 0,
    outerHeight: 0,
    outerWidth: 0
  } : original );
  options.to = {
    height: original.height * factor.y,
    width: original.width * factor.x,
    outerHeight: original.outerHeight * factor.y,
    outerWidth: original.outerWidth * factor.x
  };

  // Fade option to support puff
  if ( options.fade ) {
    if ( mode === "show" ) {
      options.from.opacity = 0;
      options.to.opacity = 1;
    }
    if ( mode === "hide" ) {
      options.from.opacity = 1;
      options.to.opacity = 0;
    }
  }

  // Animate
  el.effect( options );

};

$.effects.effect.size = function( o, done ) {

  // Create element
  var original, baseline, factor,
    el = $( this ),
    props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

    // Always restore
    props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

    // Copy for children
    props2 = [ "width", "height", "overflow" ],
    cProps = [ "fontSize" ],
    vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
    hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

    // Set options
    mode = $.effects.setMode( el, o.mode || "effect" ),
    restore = o.restore || mode !== "effect",
    scale = o.scale || "both",
    origin = o.origin || [ "middle", "center" ],
    position = el.css( "position" ),
    props = restore ? props0 : props1,
    zero = {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    };

  if ( mode === "show" ) {
    el.show();
  }
  original = {
    height: el.height(),
    width: el.width(),
    outerHeight: el.outerHeight(),
    outerWidth: el.outerWidth()
  };

  if ( o.mode === "toggle" && mode === "show" ) {
    el.from = o.to || zero;
    el.to = o.from || original;
  } else {
    el.from = o.from || ( mode === "show" ? zero : original );
    el.to = o.to || ( mode === "hide" ? zero : original );
  }

  // Set scaling factor
  factor = {
    from: {
      y: el.from.height / original.height,
      x: el.from.width / original.width
    },
    to: {
      y: el.to.height / original.height,
      x: el.to.width / original.width
    }
  };

  // Scale the css box
  if ( scale === "box" || scale === "both" ) {

    // Vertical props scaling
    if ( factor.from.y !== factor.to.y ) {
      props = props.concat( vProps );
      el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
      el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
    }

    // Horizontal props scaling
    if ( factor.from.x !== factor.to.x ) {
      props = props.concat( hProps );
      el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
      el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
    }
  }

  // Scale the content
  if ( scale === "content" || scale === "both" ) {

    // Vertical props scaling
    if ( factor.from.y !== factor.to.y ) {
      props = props.concat( cProps ).concat( props2 );
      el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
      el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
    }
  }

  $.effects.save( el, props );
  el.show();
  $.effects.createWrapper( el );
  el.css( "overflow", "hidden" ).css( el.from );

  // Adjust
  if (origin) { // Calculate baseline shifts
    baseline = $.effects.getBaseline( origin, original );
    el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
    el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
    el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
    el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
  }
  el.css( el.from ); // set top & left

  // Animate
  if ( scale === "content" || scale === "both" ) { // Scale the children

    // Add margins/font-size
    vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
    hProps = hProps.concat([ "marginLeft", "marginRight" ]);
    props2 = props0.concat(vProps).concat(hProps);

    el.find( "*[width]" ).each( function(){
      var child = $( this ),
        c_original = {
          height: child.height(),
          width: child.width(),
          outerHeight: child.outerHeight(),
          outerWidth: child.outerWidth()
        };
      if (restore) {
        $.effects.save(child, props2);
      }

      child.from = {
        height: c_original.height * factor.from.y,
        width: c_original.width * factor.from.x,
        outerHeight: c_original.outerHeight * factor.from.y,
        outerWidth: c_original.outerWidth * factor.from.x
      };
      child.to = {
        height: c_original.height * factor.to.y,
        width: c_original.width * factor.to.x,
        outerHeight: c_original.height * factor.to.y,
        outerWidth: c_original.width * factor.to.x
      };

      // Vertical props scaling
      if ( factor.from.y !== factor.to.y ) {
        child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
        child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
      }

      // Horizontal props scaling
      if ( factor.from.x !== factor.to.x ) {
        child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
        child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
      }

      // Animate children
      child.css( child.from );
      child.animate( child.to, o.duration, o.easing, function() {

        // Restore children
        if ( restore ) {
          $.effects.restore( child, props2 );
        }
      });
    });
  }

  // Animate
  el.animate( el.to, {
    queue: false,
    duration: o.duration,
    easing: o.easing,
    complete: function() {
      if ( el.to.opacity === 0 ) {
        el.css( "opacity", el.from.opacity );
      }
      if( mode === "hide" ) {
        el.hide();
      }
      $.effects.restore( el, props );
      if ( !restore ) {

        // we need to calculate our new positioning based on the scaling
        if ( position === "static" ) {
          el.css({
            position: "relative",
            top: el.to.top,
            left: el.to.left
          });
        } else {
          $.each([ "top", "left" ], function( idx, pos ) {
            el.css( pos, function( _, str ) {
              var val = parseInt( str, 10 ),
                toRef = idx ? el.to.left : el.to.top;

              // if original was "auto", recalculate the new value from wrapper
              if ( str === "auto" ) {
                return toRef + "px";
              }

              return val + toRef + "px";
            });
          });
        }
      }

      $.effects.removeWrapper( el );
      done();
    }
  });

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.shake = function( o, done ) {

  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
    mode = $.effects.setMode( el, o.mode || "effect" ),
    direction = o.direction || "left",
    distance = o.distance || 20,
    times = o.times || 3,
    anims = times * 2 + 1,
    speed = Math.round(o.duration/anims),
    ref = (direction === "up" || direction === "down") ? "top" : "left",
    positiveMotion = (direction === "up" || direction === "left"),
    animation = {},
    animation1 = {},
    animation2 = {},
    i,

    // we will need to re-assemble the queue to stack our animations in place
    queue = el.queue(),
    queuelen = queue.length;

  $.effects.save( el, props );
  el.show();
  $.effects.createWrapper( el );

  // Animation
  animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
  animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
  animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

  // Animate
  el.animate( animation, speed, o.easing );

  // Shakes
  for ( i = 1; i < times; i++ ) {
    el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
  }
  el
    .animate( animation1, speed, o.easing )
    .animate( animation, speed / 2, o.easing )
    .queue(function() {
      if ( mode === "hide" ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    });

  // inject all the animations we just queued to be first in line (after "inprogress")
  if ( queuelen > 1) {
    queue.splice.apply( queue,
      [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
  }
  el.dequeue();

};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.slide = function( o, done ) {

  // Create element
  var el = $( this ),
    props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
    mode = $.effects.setMode( el, o.mode || "show" ),
    show = mode === "show",
    direction = o.direction || "left",
    ref = (direction === "up" || direction === "down") ? "top" : "left",
    positiveMotion = (direction === "up" || direction === "left"),
    distance,
    animation = {};

  // Adjust
  $.effects.save( el, props );
  el.show();
  distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

  $.effects.createWrapper( el ).css({
    overflow: "hidden"
  });

  if ( show ) {
    el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
  }

  // Animation
  animation[ ref ] = ( show ?
    ( positiveMotion ? "+=" : "-=") :
    ( positiveMotion ? "-=" : "+=")) +
    distance;

  // Animate
  el.animate( animation, {
    queue: false,
    duration: o.duration,
    easing: o.easing,
    complete: function() {
      if ( mode === "hide" ) {
        el.hide();
      }
      $.effects.restore( el, props );
      $.effects.removeWrapper( el );
      done();
    }
  });
};

})(jQuery);

(function( $, undefined ) {

$.effects.effect.transfer = function( o, done ) {
  var elem = $( this ),
    target = $( o.to ),
    targetFixed = target.css( "position" ) === "fixed",
    body = $("body"),
    fixTop = targetFixed ? body.scrollTop() : 0,
    fixLeft = targetFixed ? body.scrollLeft() : 0,
    endPosition = target.offset(),
    animation = {
      top: endPosition.top - fixTop ,
      left: endPosition.left - fixLeft ,
      height: target.innerHeight(),
      width: target.innerWidth()
    },
    startPosition = elem.offset(),
    transfer = $( '<div class="ui-effects-transfer"></div>' )
      .appendTo( document.body )
      .addClass( o.className )
      .css({
        top: startPosition.top - fixTop ,
        left: startPosition.left - fixLeft ,
        height: elem.innerHeight(),
        width: elem.innerWidth(),
        position: targetFixed ? "fixed" : "absolute"
      })
      .animate( animation, o.duration, o.easing, function() {
        transfer.remove();
        done();
      });
};

})(jQuery);

(function( $, undefined ) {

var mouseHandled = false;

$.widget( "ui.menu", {
  version: "1.9.2",
  defaultElement: "<ul>",
  delay: 300,
  options: {
    icons: {
      submenu: "ui-icon-carat-1-e"
    },
    menus: "ul",
    position: {
      my: "left top",
      at: "right top"
    },
    role: "menu",

    // callbacks
    blur: null,
    focus: null,
    select: null
  },

  _create: function() {
    this.activeMenu = this.element;
    this.element
      .uniqueId()
      .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
      .toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
      .attr({
        role: this.options.role,
        tabIndex: 0
      })
      // need to catch all clicks on disabled menu
      // not possible through _on
      .bind( "click" + this.eventNamespace, $.proxy(function( event ) {
        if ( this.options.disabled ) {
          event.preventDefault();
        }
      }, this ));

    if ( this.options.disabled ) {
      this.element
        .addClass( "ui-state-disabled" )
        .attr( "aria-disabled", "true" );
    }

    this._on({
      // Prevent focus from sticking to links inside menu after clicking
      // them (focus should always stay on UL during navigation).
      "mousedown .ui-menu-item > a": function( event ) {
        event.preventDefault();
      },
      "click .ui-state-disabled > a": function( event ) {
        event.preventDefault();
      },
      "click .ui-menu-item:has(a)": function( event ) {
        var target = $( event.target ).closest( ".ui-menu-item" );
        if ( !mouseHandled && target.not( ".ui-state-disabled" ).length ) {
          mouseHandled = true;

          this.select( event );
          // Open submenu on click
          if ( target.has( ".ui-menu" ).length ) {
            this.expand( event );
          } else if ( !this.element.is( ":focus" ) ) {
            // Redirect focus to the menu
            this.element.trigger( "focus", [ true ] );

            // If the active item is on the top level, let it stay active.
            // Otherwise, blur the active item since it is no longer visible.
            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
              clearTimeout( this.timer );
            }
          }
        }
      },
      "mouseenter .ui-menu-item": function( event ) {
        var target = $( event.currentTarget );
        // Remove ui-state-active class from siblings of the newly focused menu item
        // to avoid a jump caused by adjacent elements both having a class with a border
        target.siblings().children( ".ui-state-active" ).removeClass( "ui-state-active" );
        this.focus( event, target );
      },
      mouseleave: "collapseAll",
      "mouseleave .ui-menu": "collapseAll",
      focus: function( event, keepActiveItem ) {
        // If there's already an active item, keep it active
        // If not, activate the first item
        var item = this.active || this.element.children( ".ui-menu-item" ).eq( 0 );

        if ( !keepActiveItem ) {
          this.focus( event, item );
        }
      },
      blur: function( event ) {
        this._delay(function() {
          if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
            this.collapseAll( event );
          }
        });
      },
      keydown: "_keydown"
    });

    this.refresh();

    // Clicks outside of a menu collapse any open menus
    this._on( this.document, {
      click: function( event ) {
        if ( !$( event.target ).closest( ".ui-menu" ).length ) {
          this.collapseAll( event );
        }

        // Reset the mouseHandled flag
        mouseHandled = false;
      }
    });
  },

  _destroy: function() {
    // Destroy (sub)menus
    this.element
      .removeAttr( "aria-activedescendant" )
      .find( ".ui-menu" ).andSelf()
        .removeClass( "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons" )
        .removeAttr( "role" )
        .removeAttr( "tabIndex" )
        .removeAttr( "aria-labelledby" )
        .removeAttr( "aria-expanded" )
        .removeAttr( "aria-hidden" )
        .removeAttr( "aria-disabled" )
        .removeUniqueId()
        .show();

    // Destroy menu items
    this.element.find( ".ui-menu-item" )
      .removeClass( "ui-menu-item" )
      .removeAttr( "role" )
      .removeAttr( "aria-disabled" )
      .children( "a" )
        .removeUniqueId()
        .removeClass( "ui-corner-all ui-state-hover" )
        .removeAttr( "tabIndex" )
        .removeAttr( "role" )
        .removeAttr( "aria-haspopup" )
        .children().each( function() {
          var elem = $( this );
          if ( elem.data( "ui-menu-submenu-carat" ) ) {
            elem.remove();
          }
        });

    // Destroy menu dividers
    this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
  },

  _keydown: function( event ) {
    var match, prev, character, skip, regex,
      preventDefault = true;

    function escape( value ) {
      return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
    }

    switch ( event.keyCode ) {
    case $.ui.keyCode.PAGE_UP:
      this.previousPage( event );
      break;
    case $.ui.keyCode.PAGE_DOWN:
      this.nextPage( event );
      break;
    case $.ui.keyCode.HOME:
      this._move( "first", "first", event );
      break;
    case $.ui.keyCode.END:
      this._move( "last", "last", event );
      break;
    case $.ui.keyCode.UP:
      this.previous( event );
      break;
    case $.ui.keyCode.DOWN:
      this.next( event );
      break;
    case $.ui.keyCode.LEFT:
      this.collapse( event );
      break;
    case $.ui.keyCode.RIGHT:
      if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
        this.expand( event );
      }
      break;
    case $.ui.keyCode.ENTER:
    case $.ui.keyCode.SPACE:
      this._activate( event );
      break;
    case $.ui.keyCode.ESCAPE:
      this.collapse( event );
      break;
    default:
      preventDefault = false;
      prev = this.previousFilter || "";
      character = String.fromCharCode( event.keyCode );
      skip = false;

      clearTimeout( this.filterTimer );

      if ( character === prev ) {
        skip = true;
      } else {
        character = prev + character;
      }

      regex = new RegExp( "^" + escape( character ), "i" );
      match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
        return regex.test( $( this ).children( "a" ).text() );
      });
      match = skip && match.index( this.active.next() ) !== -1 ?
        this.active.nextAll( ".ui-menu-item" ) :
        match;

      // If no matches on the current filter, reset to the last character pressed
      // to move down the menu to the first item that starts with that character
      if ( !match.length ) {
        character = String.fromCharCode( event.keyCode );
        regex = new RegExp( "^" + escape( character ), "i" );
        match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
          return regex.test( $( this ).children( "a" ).text() );
        });
      }

      if ( match.length ) {
        this.focus( event, match );
        if ( match.length > 1 ) {
          this.previousFilter = character;
          this.filterTimer = this._delay(function() {
            delete this.previousFilter;
          }, 1000 );
        } else {
          delete this.previousFilter;
        }
      } else {
        delete this.previousFilter;
      }
    }

    if ( preventDefault ) {
      event.preventDefault();
    }
  },

  _activate: function( event ) {
    if ( !this.active.is( ".ui-state-disabled" ) ) {
      if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
        this.expand( event );
      } else {
        this.select( event );
      }
    }
  },

  refresh: function() {
    var menus,
      icon = this.options.icons.submenu,
      submenus = this.element.find( this.options.menus );

    // Initialize nested menus
    submenus.filter( ":not(.ui-menu)" )
      .addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
      .hide()
      .attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      })
      .each(function() {
        var menu = $( this ),
          item = menu.prev( "a" ),
          submenuCarat = $( "<span>" )
            .addClass( "ui-menu-icon ui-icon " + icon )
            .data( "ui-menu-submenu-carat", true );

        item
          .attr( "aria-haspopup", "true" )
          .prepend( submenuCarat );
        menu.attr( "aria-labelledby", item.attr( "id" ) );
      });

    menus = submenus.add( this.element );

    // Don't refresh list items that are already adapted
    menus.children( ":not(.ui-menu-item):has(a)" )
      .addClass( "ui-menu-item" )
      .attr( "role", "presentation" )
      .children( "a" )
        .uniqueId()
        .addClass( "ui-corner-all" )
        .attr({
          tabIndex: -1,
          role: this._itemRole()
        });

    // Initialize unlinked menu-items containing spaces and/or dashes only as dividers
    menus.children( ":not(.ui-menu-item)" ).each(function() {
      var item = $( this );
      // hyphen, em dash, en dash
      if ( !/[^\-—–\s]/.test( item.text() ) ) {
        item.addClass( "ui-widget-content ui-menu-divider" );
      }
    });

    // Add aria-disabled attribute to any disabled menu item
    menus.children( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

    // If the active item has been removed, blur the menu
    if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
      this.blur();
    }
  },

  _itemRole: function() {
    return {
      menu: "menuitem",
      listbox: "option"
    }[ this.options.role ];
  },

  focus: function( event, item ) {
    var nested, focused;
    this.blur( event, event && event.type === "focus" );

    this._scrollIntoView( item );

    this.active = item.first();
    focused = this.active.children( "a" ).addClass( "ui-state-focus" );
    // Only update aria-activedescendant if there's a role
    // otherwise we assume focus is managed elsewhere
    if ( this.options.role ) {
      this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
    }

    // Highlight active parent menu item, if any
    this.active
      .parent()
      .closest( ".ui-menu-item" )
      .children( "a:first" )
      .addClass( "ui-state-active" );

    if ( event && event.type === "keydown" ) {
      this._close();
    } else {
      this.timer = this._delay(function() {
        this._close();
      }, this.delay );
    }

    nested = item.children( ".ui-menu" );
    if ( nested.length && ( /^mouse/.test( event.type ) ) ) {
      this._startOpening(nested);
    }
    this.activeMenu = item.parent();

    this._trigger( "focus", event, { item: item } );
  },

  _scrollIntoView: function( item ) {
    var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
    if ( this._hasScroll() ) {
      borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
      paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
      offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
      scroll = this.activeMenu.scrollTop();
      elementHeight = this.activeMenu.height();
      itemHeight = item.height();

      if ( offset < 0 ) {
        this.activeMenu.scrollTop( scroll + offset );
      } else if ( offset + itemHeight > elementHeight ) {
        this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
      }
    }
  },

  blur: function( event, fromFocus ) {
    if ( !fromFocus ) {
      clearTimeout( this.timer );
    }

    if ( !this.active ) {
      return;
    }

    this.active.children( "a" ).removeClass( "ui-state-focus" );
    this.active = null;

    this._trigger( "blur", event, { item: this.active } );
  },

  _startOpening: function( submenu ) {
    clearTimeout( this.timer );

    // Don't open if already open fixes a Firefox bug that caused a .5 pixel
    // shift in the submenu position when mousing over the carat icon
    if ( submenu.attr( "aria-hidden" ) !== "true" ) {
      return;
    }

    this.timer = this._delay(function() {
      this._close();
      this._open( submenu );
    }, this.delay );
  },

  _open: function( submenu ) {
    var position = $.extend({
      of: this.active
    }, this.options.position );

    clearTimeout( this.timer );
    this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
      .hide()
      .attr( "aria-hidden", "true" );

    submenu
      .show()
      .removeAttr( "aria-hidden" )
      .attr( "aria-expanded", "true" )
      .position( position );
  },

  collapseAll: function( event, all ) {
    clearTimeout( this.timer );
    this.timer = this._delay(function() {
      // If we were passed an event, look for the submenu that contains the event
      var currentMenu = all ? this.element :
        $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

      // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
      if ( !currentMenu.length ) {
        currentMenu = this.element;
      }

      this._close( currentMenu );

      this.blur( event );
      this.activeMenu = currentMenu;
    }, this.delay );
  },

  // With no arguments, closes the currently active menu - if nothing is active
  // it closes all menus.  If passed an argument, it will search for menus BELOW
  _close: function( startMenu ) {
    if ( !startMenu ) {
      startMenu = this.active ? this.active.parent() : this.element;
    }

    startMenu
      .find( ".ui-menu" )
        .hide()
        .attr( "aria-hidden", "true" )
        .attr( "aria-expanded", "false" )
      .end()
      .find( "a.ui-state-active" )
        .removeClass( "ui-state-active" );
  },

  collapse: function( event ) {
    var newItem = this.active &&
      this.active.parent().closest( ".ui-menu-item", this.element );
    if ( newItem && newItem.length ) {
      this._close();
      this.focus( event, newItem );
    }
  },

  expand: function( event ) {
    var newItem = this.active &&
      this.active
        .children( ".ui-menu " )
        .children( ".ui-menu-item" )
        .first();

    if ( newItem && newItem.length ) {
      this._open( newItem.parent() );

      // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
      this._delay(function() {
        this.focus( event, newItem );
      });
    }
  },

  next: function( event ) {
    this._move( "next", "first", event );
  },

  previous: function( event ) {
    this._move( "prev", "last", event );
  },

  isFirstItem: function() {
    return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
  },

  isLastItem: function() {
    return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
  },

  _move: function( direction, filter, event ) {
    var next;
    if ( this.active ) {
      if ( direction === "first" || direction === "last" ) {
        next = this.active
          [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
          .eq( -1 );
      } else {
        next = this.active
          [ direction + "All" ]( ".ui-menu-item" )
          .eq( 0 );
      }
    }
    if ( !next || !next.length || !this.active ) {
      next = this.activeMenu.children( ".ui-menu-item" )[ filter ]();
    }

    this.focus( event, next );
  },

  nextPage: function( event ) {
    var item, base, height;

    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isLastItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.nextAll( ".ui-menu-item" ).each(function() {
        item = $( this );
        return item.offset().top - base - height < 0;
      });

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.children( ".ui-menu-item" )
        [ !this.active ? "first" : "last" ]() );
    }
  },

  previousPage: function( event ) {
    var item, base, height;
    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isFirstItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.prevAll( ".ui-menu-item" ).each(function() {
        item = $( this );
        return item.offset().top - base + height > 0;
      });

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.children( ".ui-menu-item" ).first() );
    }
  },

  _hasScroll: function() {
    return this.element.outerHeight() < this.element.prop( "scrollHeight" );
  },

  select: function( event ) {
    // TODO: It should never be possible to not have an active item at this
    // point, but the tests don't trigger mouseenter before click.
    this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
    var ui = { item: this.active };
    if ( !this.active.has( ".ui-menu" ).length ) {
      this.collapseAll( event, true );
    }
    this._trigger( "select", event, ui );
  }
});

}( jQuery ));

(function( $, undefined ) {

$.ui = $.ui || {};

var cachedScrollbarWidth,
  max = Math.max,
  abs = Math.abs,
  round = Math.round,
  rhorizontal = /left|center|right/,
  rvertical = /top|center|bottom/,
  roffset = /[\+\-]\d+%?/,
  rposition = /^\w+/,
  rpercent = /%$/,
  _position = $.fn.position;

function getOffsets( offsets, width, height ) {
  return [
    parseInt( offsets[ 0 ], 10 ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
    parseInt( offsets[ 1 ], 10 ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
  ];
}
function parseCss( element, property ) {
  return parseInt( $.css( element, property ), 10 ) || 0;
}

$.position = {
  scrollbarWidth: function() {
    if ( cachedScrollbarWidth !== undefined ) {
      return cachedScrollbarWidth;
    }
    var w1, w2,
      div = $( "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
      innerDiv = div.children()[0];

    $( "body" ).append( div );
    w1 = innerDiv.offsetWidth;
    div.css( "overflow", "scroll" );

    w2 = innerDiv.offsetWidth;

    if ( w1 === w2 ) {
      w2 = div[0].clientWidth;
    }

    div.remove();

    return (cachedScrollbarWidth = w1 - w2);
  },
  getScrollInfo: function( within ) {
    var overflowX = within.isWindow ? "" : within.element.css( "overflow-x" ),
      overflowY = within.isWindow ? "" : within.element.css( "overflow-y" ),
      hasOverflowX = overflowX === "scroll" ||
        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
      hasOverflowY = overflowY === "scroll" ||
        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
    return {
      width: hasOverflowX ? $.position.scrollbarWidth() : 0,
      height: hasOverflowY ? $.position.scrollbarWidth() : 0
    };
  },
  getWithinInfo: function( element ) {
    var withinElement = $( element || window ),
      isWindow = $.isWindow( withinElement[0] );
    return {
      element: withinElement,
      isWindow: isWindow,
      offset: withinElement.offset() || { left: 0, top: 0 },
      scrollLeft: withinElement.scrollLeft(),
      scrollTop: withinElement.scrollTop(),
      width: isWindow ? withinElement.width() : withinElement.outerWidth(),
      height: isWindow ? withinElement.height() : withinElement.outerHeight()
    };
  }
};

$.fn.position = function( options ) {
  if ( !options || !options.of ) {
    return _position.apply( this, arguments );
  }

  // make a copy, we don't want to modify arguments
  options = $.extend( {}, options );

  var atOffset, targetWidth, targetHeight, targetOffset, basePosition,
    target = $( options.of ),
    within = $.position.getWithinInfo( options.within ),
    scrollInfo = $.position.getScrollInfo( within ),
    targetElem = target[0],
    collision = ( options.collision || "flip" ).split( " " ),
    offsets = {};

  if ( targetElem.nodeType === 9 ) {
    targetWidth = target.width();
    targetHeight = target.height();
    targetOffset = { top: 0, left: 0 };
  } else if ( $.isWindow( targetElem ) ) {
    targetWidth = target.width();
    targetHeight = target.height();
    targetOffset = { top: target.scrollTop(), left: target.scrollLeft() };
  } else if ( targetElem.preventDefault ) {
    // force left top to allow flipping
    options.at = "left top";
    targetWidth = targetHeight = 0;
    targetOffset = { top: targetElem.pageY, left: targetElem.pageX };
  } else {
    targetWidth = target.outerWidth();
    targetHeight = target.outerHeight();
    targetOffset = target.offset();
  }
  // clone to reuse original targetOffset later
  basePosition = $.extend( {}, targetOffset );

  // force my and at to have valid horizontal and vertical positions
  // if a value is missing or invalid, it will be converted to center
  $.each( [ "my", "at" ], function() {
    var pos = ( options[ this ] || "" ).split( " " ),
      horizontalOffset,
      verticalOffset;

    if ( pos.length === 1) {
      pos = rhorizontal.test( pos[ 0 ] ) ?
        pos.concat( [ "center" ] ) :
        rvertical.test( pos[ 0 ] ) ?
          [ "center" ].concat( pos ) :
          [ "center", "center" ];
    }
    pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
    pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

    // calculate offsets
    horizontalOffset = roffset.exec( pos[ 0 ] );
    verticalOffset = roffset.exec( pos[ 1 ] );
    offsets[ this ] = [
      horizontalOffset ? horizontalOffset[ 0 ] : 0,
      verticalOffset ? verticalOffset[ 0 ] : 0
    ];

    // reduce to just the positions without the offsets
    options[ this ] = [
      rposition.exec( pos[ 0 ] )[ 0 ],
      rposition.exec( pos[ 1 ] )[ 0 ]
    ];
  });

  // normalize collision option
  if ( collision.length === 1 ) {
    collision[ 1 ] = collision[ 0 ];
  }

  if ( options.at[ 0 ] === "right" ) {
    basePosition.left += targetWidth;
  } else if ( options.at[ 0 ] === "center" ) {
    basePosition.left += targetWidth / 2;
  }

  if ( options.at[ 1 ] === "bottom" ) {
    basePosition.top += targetHeight;
  } else if ( options.at[ 1 ] === "center" ) {
    basePosition.top += targetHeight / 2;
  }

  atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
  basePosition.left += atOffset[ 0 ];
  basePosition.top += atOffset[ 1 ];

  return this.each(function() {
    var collisionPosition, using,
      elem = $( this ),
      elemWidth = elem.outerWidth(),
      elemHeight = elem.outerHeight(),
      marginLeft = parseCss( this, "marginLeft" ),
      marginTop = parseCss( this, "marginTop" ),
      collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
      collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
      position = $.extend( {}, basePosition ),
      myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

    if ( options.my[ 0 ] === "right" ) {
      position.left -= elemWidth;
    } else if ( options.my[ 0 ] === "center" ) {
      position.left -= elemWidth / 2;
    }

    if ( options.my[ 1 ] === "bottom" ) {
      position.top -= elemHeight;
    } else if ( options.my[ 1 ] === "center" ) {
      position.top -= elemHeight / 2;
    }

    position.left += myOffset[ 0 ];
    position.top += myOffset[ 1 ];

    // if the browser doesn't support fractions, then round for consistent results
    if ( !$.support.offsetFractions ) {
      position.left = round( position.left );
      position.top = round( position.top );
    }

    collisionPosition = {
      marginLeft: marginLeft,
      marginTop: marginTop
    };

    $.each( [ "left", "top" ], function( i, dir ) {
      if ( $.ui.position[ collision[ i ] ] ) {
        $.ui.position[ collision[ i ] ][ dir ]( position, {
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          elemWidth: elemWidth,
          elemHeight: elemHeight,
          collisionPosition: collisionPosition,
          collisionWidth: collisionWidth,
          collisionHeight: collisionHeight,
          offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
          my: options.my,
          at: options.at,
          within: within,
          elem : elem
        });
      }
    });

    if ( $.fn.bgiframe ) {
      elem.bgiframe();
    }

    if ( options.using ) {
      // adds feedback as second argument to using callback, if present
      using = function( props ) {
        var left = targetOffset.left - position.left,
          right = left + targetWidth - elemWidth,
          top = targetOffset.top - position.top,
          bottom = top + targetHeight - elemHeight,
          feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
            vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
          };
        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
          feedback.horizontal = "center";
        }
        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
          feedback.vertical = "middle";
        }
        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
          feedback.important = "horizontal";
        } else {
          feedback.important = "vertical";
        }
        options.using.call( this, props, feedback );
      };
    }

    elem.offset( $.extend( position, { using: using } ) );
  });
};

$.ui.position = {
  fit: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
        outerWidth = within.width,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = withinOffset - collisionPosLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
        newOverRight;

      // element is wider than within
      if ( data.collisionWidth > outerWidth ) {
        // element is initially over the left side of within
        if ( overLeft > 0 && overRight <= 0 ) {
          newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
          position.left += overLeft - newOverRight;
        // element is initially over right side of within
        } else if ( overRight > 0 && overLeft <= 0 ) {
          position.left = withinOffset;
        // element is initially over both left and right sides of within
        } else {
          if ( overLeft > overRight ) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        }
      // too far left -> align with left edge
      } else if ( overLeft > 0 ) {
        position.left += overLeft;
      // too far right -> align with right edge
      } else if ( overRight > 0 ) {
        position.left -= overRight;
      // adjust based on position and margin
      } else {
        position.left = max( position.left - collisionPosLeft, position.left );
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
        outerHeight = data.within.height,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = withinOffset - collisionPosTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
        newOverBottom;

      // element is taller than within
      if ( data.collisionHeight > outerHeight ) {
        // element is initially over the top of within
        if ( overTop > 0 && overBottom <= 0 ) {
          newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
          position.top += overTop - newOverBottom;
        // element is initially over bottom of within
        } else if ( overBottom > 0 && overTop <= 0 ) {
          position.top = withinOffset;
        // element is initially over both top and bottom of within
        } else {
          if ( overTop > overBottom ) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        }
      // too far up -> align with top
      } else if ( overTop > 0 ) {
        position.top += overTop;
      // too far down -> align with bottom edge
      } else if ( overBottom > 0 ) {
        position.top -= overBottom;
      // adjust based on position and margin
      } else {
        position.top = max( position.top - collisionPosTop, position.top );
      }
    }
  },
  flip: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.left + within.scrollLeft,
        outerWidth = within.width,
        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = collisionPosLeft - offsetLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
        myOffset = data.my[ 0 ] === "left" ?
          -data.elemWidth :
          data.my[ 0 ] === "right" ?
            data.elemWidth :
            0,
        atOffset = data.at[ 0 ] === "left" ?
          data.targetWidth :
          data.at[ 0 ] === "right" ?
            -data.targetWidth :
            0,
        offset = -2 * data.offset[ 0 ],
        newOverRight,
        newOverLeft;

      if ( overLeft < 0 ) {
        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
          position.left += myOffset + atOffset + offset;
        }
      }
      else if ( overRight > 0 ) {
        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
          position.left += myOffset + atOffset + offset;
        }
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.top + within.scrollTop,
        outerHeight = within.height,
        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = collisionPosTop - offsetTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
        top = data.my[ 1 ] === "top",
        myOffset = top ?
          -data.elemHeight :
          data.my[ 1 ] === "bottom" ?
            data.elemHeight :
            0,
        atOffset = data.at[ 1 ] === "top" ?
          data.targetHeight :
          data.at[ 1 ] === "bottom" ?
            -data.targetHeight :
            0,
        offset = -2 * data.offset[ 1 ],
        newOverTop,
        newOverBottom;
      if ( overTop < 0 ) {
        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
        if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
          position.top += myOffset + atOffset + offset;
        }
      }
      else if ( overBottom > 0 ) {
        newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
        if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
          position.top += myOffset + atOffset + offset;
        }
      }
    }
  },
  flipfit: {
    left: function() {
      $.ui.position.flip.left.apply( this, arguments );
      $.ui.position.fit.left.apply( this, arguments );
    },
    top: function() {
      $.ui.position.flip.top.apply( this, arguments );
      $.ui.position.fit.top.apply( this, arguments );
    }
  }
};

// fraction support test
(function () {
  var testElement, testElementParent, testElementStyle, offsetLeft, i,
    body = document.getElementsByTagName( "body" )[ 0 ],
    div = document.createElement( "div" );

  //Create a "fake body" for testing based on method used in jQuery.support
  testElement = document.createElement( body ? "div" : "body" );
  testElementStyle = {
    visibility: "hidden",
    width: 0,
    height: 0,
    border: 0,
    margin: 0,
    background: "none"
  };
  if ( body ) {
    $.extend( testElementStyle, {
      position: "absolute",
      left: "-1000px",
      top: "-1000px"
    });
  }
  for ( i in testElementStyle ) {
    testElement.style[ i ] = testElementStyle[ i ];
  }
  testElement.appendChild( div );
  testElementParent = body || document.documentElement;
  testElementParent.insertBefore( testElement, testElementParent.firstChild );

  div.style.cssText = "position: absolute; left: 10.7432222px;";

  offsetLeft = $( div ).offset().left;
  $.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

  testElement.innerHTML = "";
  testElementParent.removeChild( testElement );
})();

// DEPRECATED
if ( $.uiBackCompat !== false ) {
  // offset option
  (function( $ ) {
    var _position = $.fn.position;
    $.fn.position = function( options ) {
      if ( !options || !options.offset ) {
        return _position.call( this, options );
      }
      var offset = options.offset.split( " " ),
        at = options.at.split( " " );
      if ( offset.length === 1 ) {
        offset[ 1 ] = offset[ 0 ];
      }
      if ( /^\d/.test( offset[ 0 ] ) ) {
        offset[ 0 ] = "+" + offset[ 0 ];
      }
      if ( /^\d/.test( offset[ 1 ] ) ) {
        offset[ 1 ] = "+" + offset[ 1 ];
      }
      if ( at.length === 1 ) {
        if ( /left|center|right/.test( at[ 0 ] ) ) {
          at[ 1 ] = "center";
        } else {
          at[ 1 ] = at[ 0 ];
          at[ 0 ] = "center";
        }
      }
      return _position.call( this, $.extend( options, {
        at: at[ 0 ] + offset[ 0 ] + " " + at[ 1 ] + offset[ 1 ],
        offset: undefined
      } ) );
    };
  }( jQuery ) );
}

}( jQuery ) );

(function( $, undefined ) {

$.widget( "ui.progressbar", {
  version: "1.9.2",
  options: {
    value: 0,
    max: 100
  },

  min: 0,

  _create: function() {
    this.element
      .addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
      .attr({
        role: "progressbar",
        "aria-valuemin": this.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._value()
      });

    this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
      .appendTo( this.element );

    this.oldValue = this._value();
    this._refreshValue();
  },

  _destroy: function() {
    this.element
      .removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
      .removeAttr( "role" )
      .removeAttr( "aria-valuemin" )
      .removeAttr( "aria-valuemax" )
      .removeAttr( "aria-valuenow" );

    this.valueDiv.remove();
  },

  value: function( newValue ) {
    if ( newValue === undefined ) {
      return this._value();
    }

    this._setOption( "value", newValue );
    return this;
  },

  _setOption: function( key, value ) {
    if ( key === "value" ) {
      this.options.value = value;
      this._refreshValue();
      if ( this._value() === this.options.max ) {
        this._trigger( "complete" );
      }
    }

    this._super( key, value );
  },

  _value: function() {
    var val = this.options.value;
    // normalize invalid value
    if ( typeof val !== "number" ) {
      val = 0;
    }
    return Math.min( this.options.max, Math.max( this.min, val ) );
  },

  _percentage: function() {
    return 100 * this._value() / this.options.max;
  },

  _refreshValue: function() {
    var value = this.value(),
      percentage = this._percentage();

    if ( this.oldValue !== value ) {
      this.oldValue = value;
      this._trigger( "change" );
    }

    this.valueDiv
      .toggle( value > this.min )
      .toggleClass( "ui-corner-right", value === this.options.max )
      .width( percentage.toFixed(0) + "%" );
    this.element.attr( "aria-valuenow", value );
  }
});

})( jQuery );

(function( $, undefined ) {

// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var numPages = 5;

$.widget( "ui.slider", $.ui.mouse, {
  version: "1.9.2",
  widgetEventPrefix: "slide",

  options: {
    animate: false,
    distance: 0,
    max: 100,
    min: 0,
    orientation: "horizontal",
    range: false,
    step: 1,
    value: 0,
    values: null
  },

  _create: function() {
    var i, handleCount,
      o = this.options,
      existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
      handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
      handles = [];

    this._keySliding = false;
    this._mouseSliding = false;
    this._animateOff = true;
    this._handleIndex = null;
    this._detectOrientation();
    this._mouseInit();

    this.element
      .addClass( "ui-slider" +
        " ui-slider-" + this.orientation +
        " ui-widget" +
        " ui-widget-content" +
        " ui-corner-all" +
        ( o.disabled ? " ui-slider-disabled ui-disabled" : "" ) );

    this.range = $([]);

    if ( o.range ) {
      if ( o.range === true ) {
        if ( !o.values ) {
          o.values = [ this._valueMin(), this._valueMin() ];
        }
        if ( o.values.length && o.values.length !== 2 ) {
          o.values = [ o.values[0], o.values[0] ];
        }
      }

      this.range = $( "<div></div>" )
        .appendTo( this.element )
        .addClass( "ui-slider-range" +
        // note: this isn't the most fittingly semantic framework class for this element,
        // but worked best visually with a variety of themes
        " ui-widget-header" +
        ( ( o.range === "min" || o.range === "max" ) ? " ui-slider-range-" + o.range : "" ) );
    }

    handleCount = ( o.values && o.values.length ) || 1;

    for ( i = existingHandles.length; i < handleCount; i++ ) {
      handles.push( handle );
    }

    this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

    this.handle = this.handles.eq( 0 );

    this.handles.add( this.range ).filter( "a" )
      .click(function( event ) {
        event.preventDefault();
      })
      .mouseenter(function() {
        if ( !o.disabled ) {
          $( this ).addClass( "ui-state-hover" );
        }
      })
      .mouseleave(function() {
        $( this ).removeClass( "ui-state-hover" );
      })
      .focus(function() {
        if ( !o.disabled ) {
          $( ".ui-slider .ui-state-focus" ).removeClass( "ui-state-focus" );
          $( this ).addClass( "ui-state-focus" );
        } else {
          $( this ).blur();
        }
      })
      .blur(function() {
        $( this ).removeClass( "ui-state-focus" );
      });

    this.handles.each(function( i ) {
      $( this ).data( "ui-slider-handle-index", i );
    });

    this._on( this.handles, {
      keydown: function( event ) {
        var allowed, curVal, newVal, step,
          index = $( event.target ).data( "ui-slider-handle-index" );

        switch ( event.keyCode ) {
          case $.ui.keyCode.HOME:
          case $.ui.keyCode.END:
          case $.ui.keyCode.PAGE_UP:
          case $.ui.keyCode.PAGE_DOWN:
          case $.ui.keyCode.UP:
          case $.ui.keyCode.RIGHT:
          case $.ui.keyCode.DOWN:
          case $.ui.keyCode.LEFT:
            event.preventDefault();
            if ( !this._keySliding ) {
              this._keySliding = true;
              $( event.target ).addClass( "ui-state-active" );
              allowed = this._start( event, index );
              if ( allowed === false ) {
                return;
              }
            }
            break;
        }

        step = this.options.step;
        if ( this.options.values && this.options.values.length ) {
          curVal = newVal = this.values( index );
        } else {
          curVal = newVal = this.value();
        }

        switch ( event.keyCode ) {
          case $.ui.keyCode.HOME:
            newVal = this._valueMin();
            break;
          case $.ui.keyCode.END:
            newVal = this._valueMax();
            break;
          case $.ui.keyCode.PAGE_UP:
            newVal = this._trimAlignValue( curVal + ( (this._valueMax() - this._valueMin()) / numPages ) );
            break;
          case $.ui.keyCode.PAGE_DOWN:
            newVal = this._trimAlignValue( curVal - ( (this._valueMax() - this._valueMin()) / numPages ) );
            break;
          case $.ui.keyCode.UP:
          case $.ui.keyCode.RIGHT:
            if ( curVal === this._valueMax() ) {
              return;
            }
            newVal = this._trimAlignValue( curVal + step );
            break;
          case $.ui.keyCode.DOWN:
          case $.ui.keyCode.LEFT:
            if ( curVal === this._valueMin() ) {
              return;
            }
            newVal = this._trimAlignValue( curVal - step );
            break;
        }

        this._slide( event, index, newVal );
      },
      keyup: function( event ) {
        var index = $( event.target ).data( "ui-slider-handle-index" );

        if ( this._keySliding ) {
          this._keySliding = false;
          this._stop( event, index );
          this._change( event, index );
          $( event.target ).removeClass( "ui-state-active" );
        }
      }
    });

    this._refreshValue();

    this._animateOff = false;
  },

  _destroy: function() {
    this.handles.remove();
    this.range.remove();

    this.element
      .removeClass( "ui-slider" +
        " ui-slider-horizontal" +
        " ui-slider-vertical" +
        " ui-slider-disabled" +
        " ui-widget" +
        " ui-widget-content" +
        " ui-corner-all" );

    this._mouseDestroy();
  },

  _mouseCapture: function( event ) {
    var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
      that = this,
      o = this.options;

    if ( o.disabled ) {
      return false;
    }

    this.elementSize = {
      width: this.element.outerWidth(),
      height: this.element.outerHeight()
    };
    this.elementOffset = this.element.offset();

    position = { x: event.pageX, y: event.pageY };
    normValue = this._normValueFromMouse( position );
    distance = this._valueMax() - this._valueMin() + 1;
    this.handles.each(function( i ) {
      var thisDistance = Math.abs( normValue - that.values(i) );
      if ( distance > thisDistance ) {
        distance = thisDistance;
        closestHandle = $( this );
        index = i;
      }
    });

    // workaround for bug #3736 (if both handles of a range are at 0,
    // the first is always used as the one with least distance,
    // and moving it is obviously prevented by preventing negative ranges)
    if( o.range === true && this.values(1) === o.min ) {
      index += 1;
      closestHandle = $( this.handles[index] );
    }

    allowed = this._start( event, index );
    if ( allowed === false ) {
      return false;
    }
    this._mouseSliding = true;

    this._handleIndex = index;

    closestHandle
      .addClass( "ui-state-active" )
      .focus();

    offset = closestHandle.offset();
    mouseOverHandle = !$( event.target ).parents().andSelf().is( ".ui-slider-handle" );
    this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
      left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
      top: event.pageY - offset.top -
        ( closestHandle.height() / 2 ) -
        ( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
        ( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
        ( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
    };

    if ( !this.handles.hasClass( "ui-state-hover" ) ) {
      this._slide( event, index, normValue );
    }
    this._animateOff = true;
    return true;
  },

  _mouseStart: function() {
    return true;
  },

  _mouseDrag: function( event ) {
    var position = { x: event.pageX, y: event.pageY },
      normValue = this._normValueFromMouse( position );

    this._slide( event, this._handleIndex, normValue );

    return false;
  },

  _mouseStop: function( event ) {
    this.handles.removeClass( "ui-state-active" );
    this._mouseSliding = false;

    this._stop( event, this._handleIndex );
    this._change( event, this._handleIndex );

    this._handleIndex = null;
    this._clickOffset = null;
    this._animateOff = false;

    return false;
  },

  _detectOrientation: function() {
    this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
  },

  _normValueFromMouse: function( position ) {
    var pixelTotal,
      pixelMouse,
      percentMouse,
      valueTotal,
      valueMouse;

    if ( this.orientation === "horizontal" ) {
      pixelTotal = this.elementSize.width;
      pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
    } else {
      pixelTotal = this.elementSize.height;
      pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
    }

    percentMouse = ( pixelMouse / pixelTotal );
    if ( percentMouse > 1 ) {
      percentMouse = 1;
    }
    if ( percentMouse < 0 ) {
      percentMouse = 0;
    }
    if ( this.orientation === "vertical" ) {
      percentMouse = 1 - percentMouse;
    }

    valueTotal = this._valueMax() - this._valueMin();
    valueMouse = this._valueMin() + percentMouse * valueTotal;

    return this._trimAlignValue( valueMouse );
  },

  _start: function( event, index ) {
    var uiHash = {
      handle: this.handles[ index ],
      value: this.value()
    };
    if ( this.options.values && this.options.values.length ) {
      uiHash.value = this.values( index );
      uiHash.values = this.values();
    }
    return this._trigger( "start", event, uiHash );
  },

  _slide: function( event, index, newVal ) {
    var otherVal,
      newValues,
      allowed;

    if ( this.options.values && this.options.values.length ) {
      otherVal = this.values( index ? 0 : 1 );

      if ( ( this.options.values.length === 2 && this.options.range === true ) &&
          ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
        ) {
        newVal = otherVal;
      }

      if ( newVal !== this.values( index ) ) {
        newValues = this.values();
        newValues[ index ] = newVal;
        // A slide can be canceled by returning false from the slide callback
        allowed = this._trigger( "slide", event, {
          handle: this.handles[ index ],
          value: newVal,
          values: newValues
        } );
        otherVal = this.values( index ? 0 : 1 );
        if ( allowed !== false ) {
          this.values( index, newVal, true );
        }
      }
    } else {
      if ( newVal !== this.value() ) {
        // A slide can be canceled by returning false from the slide callback
        allowed = this._trigger( "slide", event, {
          handle: this.handles[ index ],
          value: newVal
        } );
        if ( allowed !== false ) {
          this.value( newVal );
        }
      }
    }
  },

  _stop: function( event, index ) {
    var uiHash = {
      handle: this.handles[ index ],
      value: this.value()
    };
    if ( this.options.values && this.options.values.length ) {
      uiHash.value = this.values( index );
      uiHash.values = this.values();
    }

    this._trigger( "stop", event, uiHash );
  },

  _change: function( event, index ) {
    if ( !this._keySliding && !this._mouseSliding ) {
      var uiHash = {
        handle: this.handles[ index ],
        value: this.value()
      };
      if ( this.options.values && this.options.values.length ) {
        uiHash.value = this.values( index );
        uiHash.values = this.values();
      }

      this._trigger( "change", event, uiHash );
    }
  },

  value: function( newValue ) {
    if ( arguments.length ) {
      this.options.value = this._trimAlignValue( newValue );
      this._refreshValue();
      this._change( null, 0 );
      return;
    }

    return this._value();
  },

  values: function( index, newValue ) {
    var vals,
      newValues,
      i;

    if ( arguments.length > 1 ) {
      this.options.values[ index ] = this._trimAlignValue( newValue );
      this._refreshValue();
      this._change( null, index );
      return;
    }

    if ( arguments.length ) {
      if ( $.isArray( arguments[ 0 ] ) ) {
        vals = this.options.values;
        newValues = arguments[ 0 ];
        for ( i = 0; i < vals.length; i += 1 ) {
          vals[ i ] = this._trimAlignValue( newValues[ i ] );
          this._change( null, i );
        }
        this._refreshValue();
      } else {
        if ( this.options.values && this.options.values.length ) {
          return this._values( index );
        } else {
          return this.value();
        }
      }
    } else {
      return this._values();
    }
  },

  _setOption: function( key, value ) {
    var i,
      valsLength = 0;

    if ( $.isArray( this.options.values ) ) {
      valsLength = this.options.values.length;
    }

    $.Widget.prototype._setOption.apply( this, arguments );

    switch ( key ) {
      case "disabled":
        if ( value ) {
          this.handles.filter( ".ui-state-focus" ).blur();
          this.handles.removeClass( "ui-state-hover" );
          this.handles.prop( "disabled", true );
          this.element.addClass( "ui-disabled" );
        } else {
          this.handles.prop( "disabled", false );
          this.element.removeClass( "ui-disabled" );
        }
        break;
      case "orientation":
        this._detectOrientation();
        this.element
          .removeClass( "ui-slider-horizontal ui-slider-vertical" )
          .addClass( "ui-slider-" + this.orientation );
        this._refreshValue();
        break;
      case "value":
        this._animateOff = true;
        this._refreshValue();
        this._change( null, 0 );
        this._animateOff = false;
        break;
      case "values":
        this._animateOff = true;
        this._refreshValue();
        for ( i = 0; i < valsLength; i += 1 ) {
          this._change( null, i );
        }
        this._animateOff = false;
        break;
      case "min":
      case "max":
        this._animateOff = true;
        this._refreshValue();
        this._animateOff = false;
        break;
    }
  },

  //internal value getter
  // _value() returns value trimmed by min and max, aligned by step
  _value: function() {
    var val = this.options.value;
    val = this._trimAlignValue( val );

    return val;
  },

  //internal values getter
  // _values() returns array of values trimmed by min and max, aligned by step
  // _values( index ) returns single value trimmed by min and max, aligned by step
  _values: function( index ) {
    var val,
      vals,
      i;

    if ( arguments.length ) {
      val = this.options.values[ index ];
      val = this._trimAlignValue( val );

      return val;
    } else {
      // .slice() creates a copy of the array
      // this copy gets trimmed by min and max and then returned
      vals = this.options.values.slice();
      for ( i = 0; i < vals.length; i+= 1) {
        vals[ i ] = this._trimAlignValue( vals[ i ] );
      }

      return vals;
    }
  },

  // returns the step-aligned value that val is closest to, between (inclusive) min and max
  _trimAlignValue: function( val ) {
    if ( val <= this._valueMin() ) {
      return this._valueMin();
    }
    if ( val >= this._valueMax() ) {
      return this._valueMax();
    }
    var step = ( this.options.step > 0 ) ? this.options.step : 1,
      valModStep = (val - this._valueMin()) % step,
      alignValue = val - valModStep;

    if ( Math.abs(valModStep) * 2 >= step ) {
      alignValue += ( valModStep > 0 ) ? step : ( -step );
    }

    // Since JavaScript has problems with large floats, round
    // the final value to 5 digits after the decimal point (see #4124)
    return parseFloat( alignValue.toFixed(5) );
  },

  _valueMin: function() {
    return this.options.min;
  },

  _valueMax: function() {
    return this.options.max;
  },

  _refreshValue: function() {
    var lastValPercent, valPercent, value, valueMin, valueMax,
      oRange = this.options.range,
      o = this.options,
      that = this,
      animate = ( !this._animateOff ) ? o.animate : false,
      _set = {};

    if ( this.options.values && this.options.values.length ) {
      this.handles.each(function( i ) {
        valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
        _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
        $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
        if ( that.options.range === true ) {
          if ( that.orientation === "horizontal" ) {
            if ( i === 0 ) {
              that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
            }
            if ( i === 1 ) {
              that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
            }
          } else {
            if ( i === 0 ) {
              that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
            }
            if ( i === 1 ) {
              that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
            }
          }
        }
        lastValPercent = valPercent;
      });
    } else {
      value = this.value();
      valueMin = this._valueMin();
      valueMax = this._valueMax();
      valPercent = ( valueMax !== valueMin ) ?
          ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
          0;
      _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
      this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

      if ( oRange === "min" && this.orientation === "horizontal" ) {
        this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
      }
      if ( oRange === "max" && this.orientation === "horizontal" ) {
        this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
      }
      if ( oRange === "min" && this.orientation === "vertical" ) {
        this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
      }
      if ( oRange === "max" && this.orientation === "vertical" ) {
        this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
      }
    }
  }

});

}(jQuery));

(function( $ ) {

function modifier( fn ) {
  return function() {
    var previous = this.element.val();
    fn.apply( this, arguments );
    this._refresh();
    if ( previous !== this.element.val() ) {
      this._trigger( "change" );
    }
  };
}

$.widget( "ui.spinner", {
  version: "1.9.2",
  defaultElement: "<input>",
  widgetEventPrefix: "spin",
  options: {
    culture: null,
    icons: {
      down: "ui-icon-triangle-1-s",
      up: "ui-icon-triangle-1-n"
    },
    incremental: true,
    max: null,
    min: null,
    numberFormat: null,
    page: 10,
    step: 1,

    change: null,
    spin: null,
    start: null,
    stop: null
  },

  _create: function() {
    // handle string values that need to be parsed
    this._setOption( "max", this.options.max );
    this._setOption( "min", this.options.min );
    this._setOption( "step", this.options.step );

    // format the value, but don't constrain
    this._value( this.element.val(), true );

    this._draw();
    this._on( this._events );
    this._refresh();

    // turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on( this.window, {
      beforeunload: function() {
        this.element.removeAttr( "autocomplete" );
      }
    });
  },

  _getCreateOptions: function() {
    var options = {},
      element = this.element;

    $.each( [ "min", "max", "step" ], function( i, option ) {
      var value = element.attr( option );
      if ( value !== undefined && value.length ) {
        options[ option ] = value;
      }
    });

    return options;
  },

  _events: {
    keydown: function( event ) {
      if ( this._start( event ) && this._keydown( event ) ) {
        event.preventDefault();
      }
    },
    keyup: "_stop",
    focus: function() {
      this.previous = this.element.val();
    },
    blur: function( event ) {
      if ( this.cancelBlur ) {
        delete this.cancelBlur;
        return;
      }

      this._refresh();
      if ( this.previous !== this.element.val() ) {
        this._trigger( "change", event );
      }
    },
    mousewheel: function( event, delta ) {
      if ( !delta ) {
        return;
      }
      if ( !this.spinning && !this._start( event ) ) {
        return false;
      }

      this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
      clearTimeout( this.mousewheelTimer );
      this.mousewheelTimer = this._delay(function() {
        if ( this.spinning ) {
          this._stop( event );
        }
      }, 100 );
      event.preventDefault();
    },
    "mousedown .ui-spinner-button": function( event ) {
      var previous;

      // We never want the buttons to have focus; whenever the user is
      // interacting with the spinner, the focus should be on the input.
      // If the input is focused then this.previous is properly set from
      // when the input first received focus. If the input is not focused
      // then we need to set this.previous based on the value before spinning.
      previous = this.element[0] === this.document[0].activeElement ?
        this.previous : this.element.val();
      function checkFocus() {
        var isActive = this.element[0] === this.document[0].activeElement;
        if ( !isActive ) {
          this.element.focus();
          this.previous = previous;
          // support: IE
          // IE sets focus asynchronously, so we need to check if focus
          // moved off of the input because the user clicked on the button.
          this._delay(function() {
            this.previous = previous;
          });
        }
      }

      // ensure focus is on (or stays on) the text field
      event.preventDefault();
      checkFocus.call( this );

      // support: IE
      // IE doesn't prevent moving focus even with event.preventDefault()
      // so we set a flag to know when we should ignore the blur event
      // and check (again) if focus moved off of the input.
      this.cancelBlur = true;
      this._delay(function() {
        delete this.cancelBlur;
        checkFocus.call( this );
      });

      if ( this._start( event ) === false ) {
        return;
      }

      this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
    },
    "mouseup .ui-spinner-button": "_stop",
    "mouseenter .ui-spinner-button": function( event ) {
      // button will add ui-state-active if mouse was down while mouseleave and kept down
      if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
        return;
      }

      if ( this._start( event ) === false ) {
        return false;
      }
      this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
    },
    // TODO: do we really want to consider this a stop?
    // shouldn't we just stop the repeater and wait until mouseup before
    // we trigger the stop event?
    "mouseleave .ui-spinner-button": "_stop"
  },

  _draw: function() {
    var uiSpinner = this.uiSpinner = this.element
      .addClass( "ui-spinner-input" )
      .attr( "autocomplete", "off" )
      .wrap( this._uiSpinnerHtml() )
      .parent()
        // add buttons
        .append( this._buttonHtml() );

    this.element.attr( "role", "spinbutton" );

    // button bindings
    this.buttons = uiSpinner.find( ".ui-spinner-button" )
      .attr( "tabIndex", -1 )
      .button()
      .removeClass( "ui-corner-all" );

    // IE 6 doesn't understand height: 50% for the buttons
    // unless the wrapper has an explicit height
    if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
        uiSpinner.height() > 0 ) {
      uiSpinner.height( uiSpinner.height() );
    }

    // disable spinner if element was already disabled
    if ( this.options.disabled ) {
      this.disable();
    }
  },

  _keydown: function( event ) {
    var options = this.options,
      keyCode = $.ui.keyCode;

    switch ( event.keyCode ) {
    case keyCode.UP:
      this._repeat( null, 1, event );
      return true;
    case keyCode.DOWN:
      this._repeat( null, -1, event );
      return true;
    case keyCode.PAGE_UP:
      this._repeat( null, options.page, event );
      return true;
    case keyCode.PAGE_DOWN:
      this._repeat( null, -options.page, event );
      return true;
    }

    return false;
  },

  _uiSpinnerHtml: function() {
    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
  },

  _buttonHtml: function() {
    return "" +
      "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
        "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
      "</a>" +
      "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
        "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
      "</a>";
  },

  _start: function( event ) {
    if ( !this.spinning && this._trigger( "start", event ) === false ) {
      return false;
    }

    if ( !this.counter ) {
      this.counter = 1;
    }
    this.spinning = true;
    return true;
  },

  _repeat: function( i, steps, event ) {
    i = i || 500;

    clearTimeout( this.timer );
    this.timer = this._delay(function() {
      this._repeat( 40, steps, event );
    }, i );

    this._spin( steps * this.options.step, event );
  },

  _spin: function( step, event ) {
    var value = this.value() || 0;

    if ( !this.counter ) {
      this.counter = 1;
    }

    value = this._adjustValue( value + step * this._increment( this.counter ) );

    if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
      this._value( value );
      this.counter++;
    }
  },

  _increment: function( i ) {
    var incremental = this.options.incremental;

    if ( incremental ) {
      return $.isFunction( incremental ) ?
        incremental( i ) :
        Math.floor( i*i*i/50000 - i*i/500 + 17*i/200 + 1 );
    }

    return 1;
  },

  _precision: function() {
    var precision = this._precisionOf( this.options.step );
    if ( this.options.min !== null ) {
      precision = Math.max( precision, this._precisionOf( this.options.min ) );
    }
    return precision;
  },

  _precisionOf: function( num ) {
    var str = num.toString(),
      decimal = str.indexOf( "." );
    return decimal === -1 ? 0 : str.length - decimal - 1;
  },

  _adjustValue: function( value ) {
    var base, aboveMin,
      options = this.options;

    // make sure we're at a valid step
    // - find out where we are relative to the base (min or 0)
    base = options.min !== null ? options.min : 0;
    aboveMin = value - base;
    // - round to the nearest step
    aboveMin = Math.round(aboveMin / options.step) * options.step;
    // - rounding is based on 0, so adjust back to our base
    value = base + aboveMin;

    // fix precision from bad JS floating point math
    value = parseFloat( value.toFixed( this._precision() ) );

    // clamp the value
    if ( options.max !== null && value > options.max) {
      return options.max;
    }
    if ( options.min !== null && value < options.min ) {
      return options.min;
    }

    return value;
  },

  _stop: function( event ) {
    if ( !this.spinning ) {
      return;
    }

    clearTimeout( this.timer );
    clearTimeout( this.mousewheelTimer );
    this.counter = 0;
    this.spinning = false;
    this._trigger( "stop", event );
  },

  _setOption: function( key, value ) {
    if ( key === "culture" || key === "numberFormat" ) {
      var prevValue = this._parse( this.element.val() );
      this.options[ key ] = value;
      this.element.val( this._format( prevValue ) );
      return;
    }

    if ( key === "max" || key === "min" || key === "step" ) {
      if ( typeof value === "string" ) {
        value = this._parse( value );
      }
    }

    this._super( key, value );

    if ( key === "disabled" ) {
      if ( value ) {
        this.element.prop( "disabled", true );
        this.buttons.button( "disable" );
      } else {
        this.element.prop( "disabled", false );
        this.buttons.button( "enable" );
      }
    }
  },

  _setOptions: modifier(function( options ) {
    this._super( options );
    this._value( this.element.val() );
  }),

  _parse: function( val ) {
    if ( typeof val === "string" && val !== "" ) {
      val = window.Globalize && this.options.numberFormat ?
        Globalize.parseFloat( val, 10, this.options.culture ) : +val;
    }
    return val === "" || isNaN( val ) ? null : val;
  },

  _format: function( value ) {
    if ( value === "" ) {
      return "";
    }
    return window.Globalize && this.options.numberFormat ?
      Globalize.format( value, this.options.numberFormat, this.options.culture ) :
      value;
  },

  _refresh: function() {
    this.element.attr({
      "aria-valuemin": this.options.min,
      "aria-valuemax": this.options.max,
      // TODO: what should we do with values that can't be parsed?
      "aria-valuenow": this._parse( this.element.val() )
    });
  },

  // update the value without triggering change
  _value: function( value, allowAny ) {
    var parsed;
    if ( value !== "" ) {
      parsed = this._parse( value );
      if ( parsed !== null ) {
        if ( !allowAny ) {
          parsed = this._adjustValue( parsed );
        }
        value = this._format( parsed );
      }
    }
    this.element.val( value );
    this._refresh();
  },

  _destroy: function() {
    this.element
      .removeClass( "ui-spinner-input" )
      .prop( "disabled", false )
      .removeAttr( "autocomplete" )
      .removeAttr( "role" )
      .removeAttr( "aria-valuemin" )
      .removeAttr( "aria-valuemax" )
      .removeAttr( "aria-valuenow" );
    this.uiSpinner.replaceWith( this.element );
  },

  stepUp: modifier(function( steps ) {
    this._stepUp( steps );
  }),
  _stepUp: function( steps ) {
    this._spin( (steps || 1) * this.options.step );
  },

  stepDown: modifier(function( steps ) {
    this._stepDown( steps );
  }),
  _stepDown: function( steps ) {
    this._spin( (steps || 1) * -this.options.step );
  },

  pageUp: modifier(function( pages ) {
    this._stepUp( (pages || 1) * this.options.page );
  }),

  pageDown: modifier(function( pages ) {
    this._stepDown( (pages || 1) * this.options.page );
  }),

  value: function( newVal ) {
    if ( !arguments.length ) {
      return this._parse( this.element.val() );
    }
    modifier( this._value ).call( this, newVal );
  },

  widget: function() {
    return this.uiSpinner;
  }
});

}( jQuery ) );

(function( $, undefined ) {

var tabId = 0,
  rhash = /#.*$/;

function getNextTabId() {
  return ++tabId;
}

function isLocal( anchor ) {
  return anchor.hash.length > 1 &&
    anchor.href.replace( rhash, "" ) ===
      location.href.replace( rhash, "" )
        // support: Safari 5.1
        // Safari 5.1 doesn't encode spaces in window.location
        // but it does encode spaces from anchors (#8777)
        .replace( /\s/g, "%20" );
}

$.widget( "ui.tabs", {
  version: "1.9.2",
  delay: 300,
  options: {
    active: null,
    collapsible: false,
    event: "click",
    heightStyle: "content",
    hide: null,
    show: null,

    // callbacks
    activate: null,
    beforeActivate: null,
    beforeLoad: null,
    load: null
  },

  _create: function() {
    var that = this,
      options = this.options,
      active = options.active,
      locationHash = location.hash.substring( 1 );

    this.running = false;

    this.element
      .addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
      .toggleClass( "ui-tabs-collapsible", options.collapsible )
      // Prevent users from focusing disabled tabs via click
      .delegate( ".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function( event ) {
        if ( $( this ).is( ".ui-state-disabled" ) ) {
          event.preventDefault();
        }
      })
      // support: IE <9
      // Preventing the default action in mousedown doesn't prevent IE
      // from focusing the element, so if the anchor gets focused, blur.
      // We don't have to worry about focusing the previously focused
      // element since clicking on a non-focusable element should focus
      // the body anyway.
      .delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
        if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
          this.blur();
        }
      });

    this._processTabs();

    if ( active === null ) {
      // check the fragment identifier in the URL
      if ( locationHash ) {
        this.tabs.each(function( i, tab ) {
          if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
            active = i;
            return false;
          }
        });
      }

      // check for a tab marked active via a class
      if ( active === null ) {
        active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
      }

      // no active tab, set to false
      if ( active === null || active === -1 ) {
        active = this.tabs.length ? 0 : false;
      }
    }

    // handle numbers: negative, out of range
    if ( active !== false ) {
      active = this.tabs.index( this.tabs.eq( active ) );
      if ( active === -1 ) {
        active = options.collapsible ? false : 0;
      }
    }
    options.active = active;

    // don't allow collapsible: false and active: false
    if ( !options.collapsible && options.active === false && this.anchors.length ) {
      options.active = 0;
    }

    // Take disabling tabs via class attribute from HTML
    // into account and update option properly.
    if ( $.isArray( options.disabled ) ) {
      options.disabled = $.unique( options.disabled.concat(
        $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
          return that.tabs.index( li );
        })
      ) ).sort();
    }

    // check for length avoids error when initializing empty list
    if ( this.options.active !== false && this.anchors.length ) {
      this.active = this._findActive( this.options.active );
    } else {
      this.active = $();
    }

    this._refresh();

    if ( this.active.length ) {
      this.load( options.active );
    }
  },

  _getCreateEventData: function() {
    return {
      tab: this.active,
      panel: !this.active.length ? $() : this._getPanelForTab( this.active )
    };
  },

  _tabKeydown: function( event ) {
    var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
      selectedIndex = this.tabs.index( focusedTab ),
      goingForward = true;

    if ( this._handlePageNav( event ) ) {
      return;
    }

    switch ( event.keyCode ) {
      case $.ui.keyCode.RIGHT:
      case $.ui.keyCode.DOWN:
        selectedIndex++;
        break;
      case $.ui.keyCode.UP:
      case $.ui.keyCode.LEFT:
        goingForward = false;
        selectedIndex--;
        break;
      case $.ui.keyCode.END:
        selectedIndex = this.anchors.length - 1;
        break;
      case $.ui.keyCode.HOME:
        selectedIndex = 0;
        break;
      case $.ui.keyCode.SPACE:
        // Activate only, no collapsing
        event.preventDefault();
        clearTimeout( this.activating );
        this._activate( selectedIndex );
        return;
      case $.ui.keyCode.ENTER:
        // Toggle (cancel delayed activation, allow collapsing)
        event.preventDefault();
        clearTimeout( this.activating );
        // Determine if we should collapse or activate
        this._activate( selectedIndex === this.options.active ? false : selectedIndex );
        return;
      default:
        return;
    }

    // Focus the appropriate tab, based on which key was pressed
    event.preventDefault();
    clearTimeout( this.activating );
    selectedIndex = this._focusNextTab( selectedIndex, goingForward );

    // Navigating with control key will prevent automatic activation
    if ( !event.ctrlKey ) {
      // Update aria-selected immediately so that AT think the tab is already selected.
      // Otherwise AT may confuse the user by stating that they need to activate the tab,
      // but the tab will already be activated by the time the announcement finishes.
      focusedTab.attr( "aria-selected", "false" );
      this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

      this.activating = this._delay(function() {
        this.option( "active", selectedIndex );
      }, this.delay );
    }
  },

  _panelKeydown: function( event ) {
    if ( this._handlePageNav( event ) ) {
      return;
    }

    // Ctrl+up moves focus to the current tab
    if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
      event.preventDefault();
      this.active.focus();
    }
  },

  // Alt+page up/down moves focus to the previous/next tab (and activates)
  _handlePageNav: function( event ) {
    if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
      this._activate( this._focusNextTab( this.options.active - 1, false ) );
      return true;
    }
    if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
      this._activate( this._focusNextTab( this.options.active + 1, true ) );
      return true;
    }
  },

  _findNextTab: function( index, goingForward ) {
    var lastTabIndex = this.tabs.length - 1;

    function constrain() {
      if ( index > lastTabIndex ) {
        index = 0;
      }
      if ( index < 0 ) {
        index = lastTabIndex;
      }
      return index;
    }

    while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
      index = goingForward ? index + 1 : index - 1;
    }

    return index;
  },

  _focusNextTab: function( index, goingForward ) {
    index = this._findNextTab( index, goingForward );
    this.tabs.eq( index ).focus();
    return index;
  },

  _setOption: function( key, value ) {
    if ( key === "active" ) {
      // _activate() will handle invalid values and update this.options
      this._activate( value );
      return;
    }

    if ( key === "disabled" ) {
      // don't use the widget factory's disabled handling
      this._setupDisabled( value );
      return;
    }

    this._super( key, value);

    if ( key === "collapsible" ) {
      this.element.toggleClass( "ui-tabs-collapsible", value );
      // Setting collapsible: false while collapsed; open first panel
      if ( !value && this.options.active === false ) {
        this._activate( 0 );
      }
    }

    if ( key === "event" ) {
      this._setupEvents( value );
    }

    if ( key === "heightStyle" ) {
      this._setupHeightStyle( value );
    }
  },

  _tabId: function( tab ) {
    return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
  },

  _sanitizeSelector: function( hash ) {
    return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
  },

  refresh: function() {
    var options = this.options,
      lis = this.tablist.children( ":has(a[href])" );

    // get disabled tabs from class attribute from HTML
    // this will get converted to a boolean if needed in _refresh()
    options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
      return lis.index( tab );
    });

    this._processTabs();

    // was collapsed or no tabs
    if ( options.active === false || !this.anchors.length ) {
      options.active = false;
      this.active = $();
    // was active, but active tab is gone
    } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
      // all remaining tabs are disabled
      if ( this.tabs.length === options.disabled.length ) {
        options.active = false;
        this.active = $();
      // activate previous tab
      } else {
        this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
      }
    // was active, active tab still exists
    } else {
      // make sure active index is correct
      options.active = this.tabs.index( this.active );
    }

    this._refresh();
  },

  _refresh: function() {
    this._setupDisabled( this.options.disabled );
    this._setupEvents( this.options.event );
    this._setupHeightStyle( this.options.heightStyle );

    this.tabs.not( this.active ).attr({
      "aria-selected": "false",
      tabIndex: -1
    });
    this.panels.not( this._getPanelForTab( this.active ) )
      .hide()
      .attr({
        "aria-expanded": "false",
        "aria-hidden": "true"
      });

    // Make sure one tab is in the tab order
    if ( !this.active.length ) {
      this.tabs.eq( 0 ).attr( "tabIndex", 0 );
    } else {
      this.active
        .addClass( "ui-tabs-active ui-state-active" )
        .attr({
          "aria-selected": "true",
          tabIndex: 0
        });
      this._getPanelForTab( this.active )
        .show()
        .attr({
          "aria-expanded": "true",
          "aria-hidden": "false"
        });
    }
  },

  _processTabs: function() {
    var that = this;

    this.tablist = this._getList()
      .addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
      .attr( "role", "tablist" );

    this.tabs = this.tablist.find( "> li:has(a[href])" )
      .addClass( "ui-state-default ui-corner-top" )
      .attr({
        role: "tab",
        tabIndex: -1
      });

    this.anchors = this.tabs.map(function() {
        return $( "a", this )[ 0 ];
      })
      .addClass( "ui-tabs-anchor" )
      .attr({
        role: "presentation",
        tabIndex: -1
      });

    this.panels = $();

    this.anchors.each(function( i, anchor ) {
      var selector, panel, panelId,
        anchorId = $( anchor ).uniqueId().attr( "id" ),
        tab = $( anchor ).closest( "li" ),
        originalAriaControls = tab.attr( "aria-controls" );

      // inline tab
      if ( isLocal( anchor ) ) {
        selector = anchor.hash;
        panel = that.element.find( that._sanitizeSelector( selector ) );
      // remote tab
      } else {
        panelId = that._tabId( tab );
        selector = "#" + panelId;
        panel = that.element.find( selector );
        if ( !panel.length ) {
          panel = that._createPanel( panelId );
          panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
        }
        panel.attr( "aria-live", "polite" );
      }

      if ( panel.length) {
        that.panels = that.panels.add( panel );
      }
      if ( originalAriaControls ) {
        tab.data( "ui-tabs-aria-controls", originalAriaControls );
      }
      tab.attr({
        "aria-controls": selector.substring( 1 ),
        "aria-labelledby": anchorId
      });
      panel.attr( "aria-labelledby", anchorId );
    });

    this.panels
      .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
      .attr( "role", "tabpanel" );
  },

  // allow overriding how to find the list for rare usage scenarios (#7715)
  _getList: function() {
    return this.element.find( "ol,ul" ).eq( 0 );
  },

  _createPanel: function( id ) {
    return $( "<div>" )
      .attr( "id", id )
      .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
      .data( "ui-tabs-destroy", true );
  },

  _setupDisabled: function( disabled ) {
    if ( $.isArray( disabled ) ) {
      if ( !disabled.length ) {
        disabled = false;
      } else if ( disabled.length === this.anchors.length ) {
        disabled = true;
      }
    }

    // disable tabs
    for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
      if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
        $( li )
          .addClass( "ui-state-disabled" )
          .attr( "aria-disabled", "true" );
      } else {
        $( li )
          .removeClass( "ui-state-disabled" )
          .removeAttr( "aria-disabled" );
      }
    }

    this.options.disabled = disabled;
  },

  _setupEvents: function( event ) {
    var events = {
      click: function( event ) {
        event.preventDefault();
      }
    };
    if ( event ) {
      $.each( event.split(" "), function( index, eventName ) {
        events[ eventName ] = "_eventHandler";
      });
    }

    this._off( this.anchors.add( this.tabs ).add( this.panels ) );
    this._on( this.anchors, events );
    this._on( this.tabs, { keydown: "_tabKeydown" } );
    this._on( this.panels, { keydown: "_panelKeydown" } );

    this._focusable( this.tabs );
    this._hoverable( this.tabs );
  },

  _setupHeightStyle: function( heightStyle ) {
    var maxHeight, overflow,
      parent = this.element.parent();

    if ( heightStyle === "fill" ) {
      // IE 6 treats height like minHeight, so we need to turn off overflow
      // in order to get a reliable height
      // we use the minHeight support test because we assume that only
      // browsers that don't support minHeight will treat height as minHeight
      if ( !$.support.minHeight ) {
        overflow = parent.css( "overflow" );
        parent.css( "overflow", "hidden");
      }
      maxHeight = parent.height();
      this.element.siblings( ":visible" ).each(function() {
        var elem = $( this ),
          position = elem.css( "position" );

        if ( position === "absolute" || position === "fixed" ) {
          return;
        }
        maxHeight -= elem.outerHeight( true );
      });
      if ( overflow ) {
        parent.css( "overflow", overflow );
      }

      this.element.children().not( this.panels ).each(function() {
        maxHeight -= $( this ).outerHeight( true );
      });

      this.panels.each(function() {
        $( this ).height( Math.max( 0, maxHeight -
          $( this ).innerHeight() + $( this ).height() ) );
      })
      .css( "overflow", "auto" );
    } else if ( heightStyle === "auto" ) {
      maxHeight = 0;
      this.panels.each(function() {
        maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
      }).height( maxHeight );
    }
  },

  _eventHandler: function( event ) {
    var options = this.options,
      active = this.active,
      anchor = $( event.currentTarget ),
      tab = anchor.closest( "li" ),
      clickedIsActive = tab[ 0 ] === active[ 0 ],
      collapsing = clickedIsActive && options.collapsible,
      toShow = collapsing ? $() : this._getPanelForTab( tab ),
      toHide = !active.length ? $() : this._getPanelForTab( active ),
      eventData = {
        oldTab: active,
        oldPanel: toHide,
        newTab: collapsing ? $() : tab,
        newPanel: toShow
      };

    event.preventDefault();

    if ( tab.hasClass( "ui-state-disabled" ) ||
        // tab is already loading
        tab.hasClass( "ui-tabs-loading" ) ||
        // can't switch durning an animation
        this.running ||
        // click on active header, but not collapsible
        ( clickedIsActive && !options.collapsible ) ||
        // allow canceling activation
        ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
      return;
    }

    options.active = collapsing ? false : this.tabs.index( tab );

    this.active = clickedIsActive ? $() : tab;
    if ( this.xhr ) {
      this.xhr.abort();
    }

    if ( !toHide.length && !toShow.length ) {
      $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
    }

    if ( toShow.length ) {
      this.load( this.tabs.index( tab ), event );
    }
    this._toggle( event, eventData );
  },

  // handles show/hide for selecting tabs
  _toggle: function( event, eventData ) {
    var that = this,
      toShow = eventData.newPanel,
      toHide = eventData.oldPanel;

    this.running = true;

    function complete() {
      that.running = false;
      that._trigger( "activate", event, eventData );
    }

    function show() {
      eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

      if ( toShow.length && that.options.show ) {
        that._show( toShow, that.options.show, complete );
      } else {
        toShow.show();
        complete();
      }
    }

    // start out by hiding, then showing, then completing
    if ( toHide.length && this.options.hide ) {
      this._hide( toHide, this.options.hide, function() {
        eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
        show();
      });
    } else {
      eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
      toHide.hide();
      show();
    }

    toHide.attr({
      "aria-expanded": "false",
      "aria-hidden": "true"
    });
    eventData.oldTab.attr( "aria-selected", "false" );
    // If we're switching tabs, remove the old tab from the tab order.
    // If we're opening from collapsed state, remove the previous tab from the tab order.
    // If we're collapsing, then keep the collapsing tab in the tab order.
    if ( toShow.length && toHide.length ) {
      eventData.oldTab.attr( "tabIndex", -1 );
    } else if ( toShow.length ) {
      this.tabs.filter(function() {
        return $( this ).attr( "tabIndex" ) === 0;
      })
      .attr( "tabIndex", -1 );
    }

    toShow.attr({
      "aria-expanded": "true",
      "aria-hidden": "false"
    });
    eventData.newTab.attr({
      "aria-selected": "true",
      tabIndex: 0
    });
  },

  _activate: function( index ) {
    var anchor,
      active = this._findActive( index );

    // trying to activate the already active panel
    if ( active[ 0 ] === this.active[ 0 ] ) {
      return;
    }

    // trying to collapse, simulate a click on the current active header
    if ( !active.length ) {
      active = this.active;
    }

    anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
    this._eventHandler({
      target: anchor,
      currentTarget: anchor,
      preventDefault: $.noop
    });
  },

  _findActive: function( index ) {
    return index === false ? $() : this.tabs.eq( index );
  },

  _getIndex: function( index ) {
    // meta-function to give users option to provide a href string instead of a numerical index.
    if ( typeof index === "string" ) {
      index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
    }

    return index;
  },

  _destroy: function() {
    if ( this.xhr ) {
      this.xhr.abort();
    }

    this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

    this.tablist
      .removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
      .removeAttr( "role" );

    this.anchors
      .removeClass( "ui-tabs-anchor" )
      .removeAttr( "role" )
      .removeAttr( "tabIndex" )
      .removeData( "href.tabs" )
      .removeData( "load.tabs" )
      .removeUniqueId();

    this.tabs.add( this.panels ).each(function() {
      if ( $.data( this, "ui-tabs-destroy" ) ) {
        $( this ).remove();
      } else {
        $( this )
          .removeClass( "ui-state-default ui-state-active ui-state-disabled " +
            "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
          .removeAttr( "tabIndex" )
          .removeAttr( "aria-live" )
          .removeAttr( "aria-busy" )
          .removeAttr( "aria-selected" )
          .removeAttr( "aria-labelledby" )
          .removeAttr( "aria-hidden" )
          .removeAttr( "aria-expanded" )
          .removeAttr( "role" );
      }
    });

    this.tabs.each(function() {
      var li = $( this ),
        prev = li.data( "ui-tabs-aria-controls" );
      if ( prev ) {
        li.attr( "aria-controls", prev );
      } else {
        li.removeAttr( "aria-controls" );
      }
    });

    this.panels.show();

    if ( this.options.heightStyle !== "content" ) {
      this.panels.css( "height", "" );
    }
  },

  enable: function( index ) {
    var disabled = this.options.disabled;
    if ( disabled === false ) {
      return;
    }

    if ( index === undefined ) {
      disabled = false;
    } else {
      index = this._getIndex( index );
      if ( $.isArray( disabled ) ) {
        disabled = $.map( disabled, function( num ) {
          return num !== index ? num : null;
        });
      } else {
        disabled = $.map( this.tabs, function( li, num ) {
          return num !== index ? num : null;
        });
      }
    }
    this._setupDisabled( disabled );
  },

  disable: function( index ) {
    var disabled = this.options.disabled;
    if ( disabled === true ) {
      return;
    }

    if ( index === undefined ) {
      disabled = true;
    } else {
      index = this._getIndex( index );
      if ( $.inArray( index, disabled ) !== -1 ) {
        return;
      }
      if ( $.isArray( disabled ) ) {
        disabled = $.merge( [ index ], disabled ).sort();
      } else {
        disabled = [ index ];
      }
    }
    this._setupDisabled( disabled );
  },

  load: function( index, event ) {
    index = this._getIndex( index );
    var that = this,
      tab = this.tabs.eq( index ),
      anchor = tab.find( ".ui-tabs-anchor" ),
      panel = this._getPanelForTab( tab ),
      eventData = {
        tab: tab,
        panel: panel
      };

    // not remote
    if ( isLocal( anchor[ 0 ] ) ) {
      return;
    }

    this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

    // support: jQuery <1.8
    // jQuery <1.8 returns false if the request is canceled in beforeSend,
    // but as of 1.8, $.ajax() always returns a jqXHR object.
    if ( this.xhr && this.xhr.statusText !== "canceled" ) {
      tab.addClass( "ui-tabs-loading" );
      panel.attr( "aria-busy", "true" );

      this.xhr
        .success(function( response ) {
          // support: jQuery <1.8
          // http://bugs.jquery.com/ticket/11778
          setTimeout(function() {
            panel.html( response );
            that._trigger( "load", event, eventData );
          }, 1 );
        })
        .complete(function( jqXHR, status ) {
          // support: jQuery <1.8
          // http://bugs.jquery.com/ticket/11778
          setTimeout(function() {
            if ( status === "abort" ) {
              that.panels.stop( false, true );
            }

            tab.removeClass( "ui-tabs-loading" );
            panel.removeAttr( "aria-busy" );

            if ( jqXHR === that.xhr ) {
              delete that.xhr;
            }
          }, 1 );
        });
    }
  },

  // TODO: Remove this function in 1.10 when ajaxOptions is removed
  _ajaxSettings: function( anchor, event, eventData ) {
    var that = this;
    return {
      url: anchor.attr( "href" ),
      beforeSend: function( jqXHR, settings ) {
        return that._trigger( "beforeLoad", event,
          $.extend( { jqXHR : jqXHR, ajaxSettings: settings }, eventData ) );
      }
    };
  },

  _getPanelForTab: function( tab ) {
    var id = $( tab ).attr( "aria-controls" );
    return this.element.find( this._sanitizeSelector( "#" + id ) );
  }
});

// DEPRECATED
if ( $.uiBackCompat !== false ) {

  // helper method for a lot of the back compat extensions
  $.ui.tabs.prototype._ui = function( tab, panel ) {
    return {
      tab: tab,
      panel: panel,
      index: this.anchors.index( tab )
    };
  };

  // url method
  $.widget( "ui.tabs", $.ui.tabs, {
    url: function( index, url ) {
      this.anchors.eq( index ).attr( "href", url );
    }
  });

  // TODO: Remove _ajaxSettings() method when removing this extension
  // ajaxOptions and cache options
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      ajaxOptions: null,
      cache: false
    },

    _create: function() {
      this._super();

      var that = this;

      this._on({ tabsbeforeload: function( event, ui ) {
        // tab is already cached
        if ( $.data( ui.tab[ 0 ], "cache.tabs" ) ) {
          event.preventDefault();
          return;
        }

        ui.jqXHR.success(function() {
          if ( that.options.cache ) {
            $.data( ui.tab[ 0 ], "cache.tabs", true );
          }
        });
      }});
    },

    _ajaxSettings: function( anchor, event, ui ) {
      var ajaxOptions = this.options.ajaxOptions;
      return $.extend( {}, ajaxOptions, {
        error: function( xhr, status ) {
          try {
            // Passing index avoid a race condition when this method is
            // called after the user has selected another tab.
            // Pass the anchor that initiated this request allows
            // loadError to manipulate the tab content panel via $(a.hash)
            ajaxOptions.error(
              xhr, status, ui.tab.closest( "li" ).index(), ui.tab[ 0 ] );
          }
          catch ( error ) {}
        }
      }, this._superApply( arguments ) );
    },

    _setOption: function( key, value ) {
      // reset cache if switching from cached to not cached
      if ( key === "cache" && value === false ) {
        this.anchors.removeData( "cache.tabs" );
      }
      this._super( key, value );
    },

    _destroy: function() {
      this.anchors.removeData( "cache.tabs" );
      this._super();
    },

    url: function( index ){
      this.anchors.eq( index ).removeData( "cache.tabs" );
      this._superApply( arguments );
    }
  });

  // abort method
  $.widget( "ui.tabs", $.ui.tabs, {
    abort: function() {
      if ( this.xhr ) {
        this.xhr.abort();
      }
    }
  });

  // spinner
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      spinner: "<em>Loading&#8230;</em>"
    },
    _create: function() {
      this._super();
      this._on({
        tabsbeforeload: function( event, ui ) {
          // Don't react to nested tabs or tabs that don't use a spinner
          if ( event.target !== this.element[ 0 ] ||
              !this.options.spinner ) {
            return;
          }

          var span = ui.tab.find( "span" ),
            html = span.html();
          span.html( this.options.spinner );
          ui.jqXHR.complete(function() {
            span.html( html );
          });
        }
      });
    }
  });

  // enable/disable events
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      enable: null,
      disable: null
    },

    enable: function( index ) {
      var options = this.options,
        trigger;

      if ( index && options.disabled === true ||
          ( $.isArray( options.disabled ) && $.inArray( index, options.disabled ) !== -1 ) ) {
        trigger = true;
      }

      this._superApply( arguments );

      if ( trigger ) {
        this._trigger( "enable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
      }
    },

    disable: function( index ) {
      var options = this.options,
        trigger;

      if ( index && options.disabled === false ||
          ( $.isArray( options.disabled ) && $.inArray( index, options.disabled ) === -1 ) ) {
        trigger = true;
      }

      this._superApply( arguments );

      if ( trigger ) {
        this._trigger( "disable", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
      }
    }
  });

  // add/remove methods and events
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      add: null,
      remove: null,
      tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
    },

    add: function( url, label, index ) {
      if ( index === undefined ) {
        index = this.anchors.length;
      }

      var doInsertAfter, panel,
        options = this.options,
        li = $( options.tabTemplate
          .replace( /#\{href\}/g, url )
          .replace( /#\{label\}/g, label ) ),
        id = !url.indexOf( "#" ) ?
          url.replace( "#", "" ) :
          this._tabId( li );

      li.addClass( "ui-state-default ui-corner-top" ).data( "ui-tabs-destroy", true );
      li.attr( "aria-controls", id );

      doInsertAfter = index >= this.tabs.length;

      // try to find an existing element before creating a new one
      panel = this.element.find( "#" + id );
      if ( !panel.length ) {
        panel = this._createPanel( id );
        if ( doInsertAfter ) {
          if ( index > 0 ) {
            panel.insertAfter( this.panels.eq( -1 ) );
          } else {
            panel.appendTo( this.element );
          }
        } else {
          panel.insertBefore( this.panels[ index ] );
        }
      }
      panel.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" ).hide();

      if ( doInsertAfter ) {
        li.appendTo( this.tablist );
      } else {
        li.insertBefore( this.tabs[ index ] );
      }

      options.disabled = $.map( options.disabled, function( n ) {
        return n >= index ? ++n : n;
      });

      this.refresh();
      if ( this.tabs.length === 1 && options.active === false ) {
        this.option( "active", 0 );
      }

      this._trigger( "add", null, this._ui( this.anchors[ index ], this.panels[ index ] ) );
      return this;
    },

    remove: function( index ) {
      index = this._getIndex( index );
      var options = this.options,
        tab = this.tabs.eq( index ).remove(),
        panel = this._getPanelForTab( tab ).remove();

      // If selected tab was removed focus tab to the right or
      // in case the last tab was removed the tab to the left.
      // We check for more than 2 tabs, because if there are only 2,
      // then when we remove this tab, there will only be one tab left
      // so we don't need to detect which tab to activate.
      if ( tab.hasClass( "ui-tabs-active" ) && this.anchors.length > 2 ) {
        this._activate( index + ( index + 1 < this.anchors.length ? 1 : -1 ) );
      }

      options.disabled = $.map(
        $.grep( options.disabled, function( n ) {
          return n !== index;
        }),
        function( n ) {
          return n >= index ? --n : n;
        });

      this.refresh();

      this._trigger( "remove", null, this._ui( tab.find( "a" )[ 0 ], panel[ 0 ] ) );
      return this;
    }
  });

  // length method
  $.widget( "ui.tabs", $.ui.tabs, {
    length: function() {
      return this.anchors.length;
    }
  });

  // panel ids (idPrefix option + title attribute)
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      idPrefix: "ui-tabs-"
    },

    _tabId: function( tab ) {
      var a = tab.is( "li" ) ? tab.find( "a[href]" ) : tab;
      a = a[0];
      return $( a ).closest( "li" ).attr( "aria-controls" ) ||
        a.title && a.title.replace( /\s/g, "_" ).replace( /[^\w\u00c0-\uFFFF\-]/g, "" ) ||
        this.options.idPrefix + getNextTabId();
    }
  });

  // _createPanel method
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      panelTemplate: "<div></div>"
    },

    _createPanel: function( id ) {
      return $( this.options.panelTemplate )
        .attr( "id", id )
        .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
        .data( "ui-tabs-destroy", true );
    }
  });

  // selected option
  $.widget( "ui.tabs", $.ui.tabs, {
    _create: function() {
      var options = this.options;
      if ( options.active === null && options.selected !== undefined ) {
        options.active = options.selected === -1 ? false : options.selected;
      }
      this._super();
      options.selected = options.active;
      if ( options.selected === false ) {
        options.selected = -1;
      }
    },

    _setOption: function( key, value ) {
      if ( key !== "selected" ) {
        return this._super( key, value );
      }

      var options = this.options;
      this._super( "active", value === -1 ? false : value );
      options.selected = options.active;
      if ( options.selected === false ) {
        options.selected = -1;
      }
    },

    _eventHandler: function() {
      this._superApply( arguments );
      this.options.selected = this.options.active;
      if ( this.options.selected === false ) {
        this.options.selected = -1;
      }
    }
  });

  // show and select event
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      show: null,
      select: null
    },
    _create: function() {
      this._super();
      if ( this.options.active !== false ) {
        this._trigger( "show", null, this._ui(
          this.active.find( ".ui-tabs-anchor" )[ 0 ],
          this._getPanelForTab( this.active )[ 0 ] ) );
      }
    },
    _trigger: function( type, event, data ) {
      var tab, panel,
        ret = this._superApply( arguments );

      if ( !ret ) {
        return false;
      }

      if ( type === "beforeActivate" ) {
        tab = data.newTab.length ? data.newTab : data.oldTab;
        panel = data.newPanel.length ? data.newPanel : data.oldPanel;
        ret = this._super( "select", event, {
          tab: tab.find( ".ui-tabs-anchor" )[ 0],
          panel: panel[ 0 ],
          index: tab.closest( "li" ).index()
        });
      } else if ( type === "activate" && data.newTab.length ) {
        ret = this._super( "show", event, {
          tab: data.newTab.find( ".ui-tabs-anchor" )[ 0 ],
          panel: data.newPanel[ 0 ],
          index: data.newTab.closest( "li" ).index()
        });
      }
      return ret;
    }
  });

  // select method
  $.widget( "ui.tabs", $.ui.tabs, {
    select: function( index ) {
      index = this._getIndex( index );
      if ( index === -1 ) {
        if ( this.options.collapsible && this.options.selected !== -1 ) {
          index = this.options.selected;
        } else {
          return;
        }
      }
      this.anchors.eq( index ).trigger( this.options.event + this.eventNamespace );
    }
  });

  // cookie option
  (function() {

  var listId = 0;

  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      cookie: null // e.g. { expires: 7, path: '/', domain: 'jquery.com', secure: true }
    },
    _create: function() {
      var options = this.options,
        active;
      if ( options.active == null && options.cookie ) {
        active = parseInt( this._cookie(), 10 );
        if ( active === -1 ) {
          active = false;
        }
        options.active = active;
      }
      this._super();
    },
    _cookie: function( active ) {
      var cookie = [ this.cookie ||
        ( this.cookie = this.options.cookie.name || "ui-tabs-" + (++listId) ) ];
      if ( arguments.length ) {
        cookie.push( active === false ? -1 : active );
        cookie.push( this.options.cookie );
      }
      return $.cookie.apply( null, cookie );
    },
    _refresh: function() {
      this._super();
      if ( this.options.cookie ) {
        this._cookie( this.options.active, this.options.cookie );
      }
    },
    _eventHandler: function() {
      this._superApply( arguments );
      if ( this.options.cookie ) {
        this._cookie( this.options.active, this.options.cookie );
      }
    },
    _destroy: function() {
      this._super();
      if ( this.options.cookie ) {
        this._cookie( null, this.options.cookie );
      }
    }
  });

  })();

  // load event
  $.widget( "ui.tabs", $.ui.tabs, {
    _trigger: function( type, event, data ) {
      var _data = $.extend( {}, data );
      if ( type === "load" ) {
        _data.panel = _data.panel[ 0 ];
        _data.tab = _data.tab.find( ".ui-tabs-anchor" )[ 0 ];
      }
      return this._super( type, event, _data );
    }
  });

  // fx option
  // The new animation options (show, hide) conflict with the old show callback.
  // The old fx option wins over show/hide anyway (always favor back-compat).
  // If a user wants to use the new animation API, they must give up the old API.
  $.widget( "ui.tabs", $.ui.tabs, {
    options: {
      fx: null // e.g. { height: "toggle", opacity: "toggle", duration: 200 }
    },

    _getFx: function() {
      var hide, show,
        fx = this.options.fx;

      if ( fx ) {
        if ( $.isArray( fx ) ) {
          hide = fx[ 0 ];
          show = fx[ 1 ];
        } else {
          hide = show = fx;
        }
      }

      return fx ? { show: show, hide: hide } : null;
    },

    _toggle: function( event, eventData ) {
      var that = this,
        toShow = eventData.newPanel,
        toHide = eventData.oldPanel,
        fx = this._getFx();

      if ( !fx ) {
        return this._super( event, eventData );
      }

      that.running = true;

      function complete() {
        that.running = false;
        that._trigger( "activate", event, eventData );
      }

      function show() {
        eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

        if ( toShow.length && fx.show ) {
          toShow
            .animate( fx.show, fx.show.duration, function() {
              complete();
            });
        } else {
          toShow.show();
          complete();
        }
      }

      // start out by hiding, then showing, then completing
      if ( toHide.length && fx.hide ) {
        toHide.animate( fx.hide, fx.hide.duration, function() {
          eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
          show();
        });
      } else {
        eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
        toHide.hide();
        show();
      }
    }
  });
}

})( jQuery );

(function( $ ) {

var increments = 0;

function addDescribedBy( elem, id ) {
  var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
  describedby.push( id );
  elem
    .data( "ui-tooltip-id", id )
    .attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
}

function removeDescribedBy( elem ) {
  var id = elem.data( "ui-tooltip-id" ),
    describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
    index = $.inArray( id, describedby );
  if ( index !== -1 ) {
    describedby.splice( index, 1 );
  }

  elem.removeData( "ui-tooltip-id" );
  describedby = $.trim( describedby.join( " " ) );
  if ( describedby ) {
    elem.attr( "aria-describedby", describedby );
  } else {
    elem.removeAttr( "aria-describedby" );
  }
}

$.widget( "ui.tooltip", {
  version: "1.9.2",
  options: {
    content: function() {
      return $( this ).attr( "title" );
    },
    hide: true,
    // Disabled elements have inconsistent behavior across browsers (#8661)
    items: "[title]:not([disabled])",
    position: {
      my: "left top+15",
      at: "left bottom",
      collision: "flipfit flip"
    },
    show: true,
    tooltipClass: null,
    track: false,

    // callbacks
    close: null,
    open: null
  },

  _create: function() {
    this._on({
      mouseover: "open",
      focusin: "open"
    });

    // IDs of generated tooltips, needed for destroy
    this.tooltips = {};
    // IDs of parent tooltips where we removed the title attribute
    this.parents = {};

    if ( this.options.disabled ) {
      this._disable();
    }
  },

  _setOption: function( key, value ) {
    var that = this;

    if ( key === "disabled" ) {
      this[ value ? "_disable" : "_enable" ]();
      this.options[ key ] = value;
      // disable element style changes
      return;
    }

    this._super( key, value );

    if ( key === "content" ) {
      $.each( this.tooltips, function( id, element ) {
        that._updateContent( element );
      });
    }
  },

  _disable: function() {
    var that = this;

    // close open tooltips
    $.each( this.tooltips, function( id, element ) {
      var event = $.Event( "blur" );
      event.target = event.currentTarget = element[0];
      that.close( event, true );
    });

    // remove title attributes to prevent native tooltips
    this.element.find( this.options.items ).andSelf().each(function() {
      var element = $( this );
      if ( element.is( "[title]" ) ) {
        element
          .data( "ui-tooltip-title", element.attr( "title" ) )
          .attr( "title", "" );
      }
    });
  },

  _enable: function() {
    // restore title attributes
    this.element.find( this.options.items ).andSelf().each(function() {
      var element = $( this );
      if ( element.data( "ui-tooltip-title" ) ) {
        element.attr( "title", element.data( "ui-tooltip-title" ) );
      }
    });
  },

  open: function( event ) {
    var that = this,
      target = $( event ? event.target : this.element )
        // we need closest here due to mouseover bubbling,
        // but always pointing at the same event target
        .closest( this.options.items );

    // No element to show a tooltip for or the tooltip is already open
    if ( !target.length || target.data( "ui-tooltip-id" ) ) {
      return;
    }

    if ( target.attr( "title" ) ) {
      target.data( "ui-tooltip-title", target.attr( "title" ) );
    }

    target.data( "ui-tooltip-open", true );

    // kill parent tooltips, custom or native, for hover
    if ( event && event.type === "mouseover" ) {
      target.parents().each(function() {
        var parent = $( this ),
          blurEvent;
        if ( parent.data( "ui-tooltip-open" ) ) {
          blurEvent = $.Event( "blur" );
          blurEvent.target = blurEvent.currentTarget = this;
          that.close( blurEvent, true );
        }
        if ( parent.attr( "title" ) ) {
          parent.uniqueId();
          that.parents[ this.id ] = {
            element: this,
            title: parent.attr( "title" )
          };
          parent.attr( "title", "" );
        }
      });
    }

    this._updateContent( target, event );
  },

  _updateContent: function( target, event ) {
    var content,
      contentOption = this.options.content,
      that = this,
      eventType = event ? event.type : null;

    if ( typeof contentOption === "string" ) {
      return this._open( event, target, contentOption );
    }

    content = contentOption.call( target[0], function( response ) {
      // ignore async response if tooltip was closed already
      if ( !target.data( "ui-tooltip-open" ) ) {
        return;
      }
      // IE may instantly serve a cached response for ajax requests
      // delay this call to _open so the other call to _open runs first
      that._delay(function() {
        // jQuery creates a special event for focusin when it doesn't
        // exist natively. To improve performance, the native event
        // object is reused and the type is changed. Therefore, we can't
        // rely on the type being correct after the event finished
        // bubbling, so we set it back to the previous value. (#8740)
        if ( event ) {
          event.type = eventType;
        }
        this._open( event, target, response );
      });
    });
    if ( content ) {
      this._open( event, target, content );
    }
  },

  _open: function( event, target, content ) {
    var tooltip, events, delayedShow,
      positionOption = $.extend( {}, this.options.position );

    if ( !content ) {
      return;
    }

    // Content can be updated multiple times. If the tooltip already
    // exists, then just update the content and bail.
    tooltip = this._find( target );
    if ( tooltip.length ) {
      tooltip.find( ".ui-tooltip-content" ).html( content );
      return;
    }

    // if we have a title, clear it to prevent the native tooltip
    // we have to check first to avoid defining a title if none exists
    // (we don't want to cause an element to start matching [title])
    //
    // We use removeAttr only for key events, to allow IE to export the correct
    // accessible attributes. For mouse events, set to empty string to avoid
    // native tooltip showing up (happens only when removing inside mouseover).
    if ( target.is( "[title]" ) ) {
      if ( event && event.type === "mouseover" ) {
        target.attr( "title", "" );
      } else {
        target.removeAttr( "title" );
      }
    }

    tooltip = this._tooltip( target );
    addDescribedBy( target, tooltip.attr( "id" ) );
    tooltip.find( ".ui-tooltip-content" ).html( content );

    function position( event ) {
      positionOption.of = event;
      if ( tooltip.is( ":hidden" ) ) {
        return;
      }
      tooltip.position( positionOption );
    }
    if ( this.options.track && event && /^mouse/.test( event.type ) ) {
      this._on( this.document, {
        mousemove: position
      });
      // trigger once to override element-relative positioning
      position( event );
    } else {
      tooltip.position( $.extend({
        of: target
      }, this.options.position ) );
    }

    tooltip.hide();

    this._show( tooltip, this.options.show );
    // Handle tracking tooltips that are shown with a delay (#8644). As soon
    // as the tooltip is visible, position the tooltip using the most recent
    // event.
    if ( this.options.show && this.options.show.delay ) {
      delayedShow = setInterval(function() {
        if ( tooltip.is( ":visible" ) ) {
          position( positionOption.of );
          clearInterval( delayedShow );
        }
      }, $.fx.interval );
    }

    this._trigger( "open", event, { tooltip: tooltip } );

    events = {
      keyup: function( event ) {
        if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
          var fakeEvent = $.Event(event);
          fakeEvent.currentTarget = target[0];
          this.close( fakeEvent, true );
        }
      },
      remove: function() {
        this._removeTooltip( tooltip );
      }
    };
    if ( !event || event.type === "mouseover" ) {
      events.mouseleave = "close";
    }
    if ( !event || event.type === "focusin" ) {
      events.focusout = "close";
    }
    this._on( true, target, events );
  },

  close: function( event ) {
    var that = this,
      target = $( event ? event.currentTarget : this.element ),
      tooltip = this._find( target );

    // disabling closes the tooltip, so we need to track when we're closing
    // to avoid an infinite loop in case the tooltip becomes disabled on close
    if ( this.closing ) {
      return;
    }

    // only set title if we had one before (see comment in _open())
    if ( target.data( "ui-tooltip-title" ) ) {
      target.attr( "title", target.data( "ui-tooltip-title" ) );
    }

    removeDescribedBy( target );

    tooltip.stop( true );
    this._hide( tooltip, this.options.hide, function() {
      that._removeTooltip( $( this ) );
    });

    target.removeData( "ui-tooltip-open" );
    this._off( target, "mouseleave focusout keyup" );
    // Remove 'remove' binding only on delegated targets
    if ( target[0] !== this.element[0] ) {
      this._off( target, "remove" );
    }
    this._off( this.document, "mousemove" );

    if ( event && event.type === "mouseleave" ) {
      $.each( this.parents, function( id, parent ) {
        $( parent.element ).attr( "title", parent.title );
        delete that.parents[ id ];
      });
    }

    this.closing = true;
    this._trigger( "close", event, { tooltip: tooltip } );
    this.closing = false;
  },

  _tooltip: function( element ) {
    var id = "ui-tooltip-" + increments++,
      tooltip = $( "<div>" )
        .attr({
          id: id,
          role: "tooltip"
        })
        .addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
          ( this.options.tooltipClass || "" ) );
    $( "<div>" )
      .addClass( "ui-tooltip-content" )
      .appendTo( tooltip );
    tooltip.appendTo( this.document[0].body );
    if ( $.fn.bgiframe ) {
      tooltip.bgiframe();
    }
    this.tooltips[ id ] = element;
    return tooltip;
  },

  _find: function( target ) {
    var id = target.data( "ui-tooltip-id" );
    return id ? $( "#" + id ) : $();
  },

  _removeTooltip: function( tooltip ) {
    tooltip.remove();
    delete this.tooltips[ tooltip.attr( "id" ) ];
  },

  _destroy: function() {
    var that = this;

    // close open tooltips
    $.each( this.tooltips, function( id, element ) {
      // Delegate to close method to handle common cleanup
      var event = $.Event( "blur" );
      event.target = event.currentTarget = element[0];
      that.close( event, true );

      // Remove immediately; destroying an open tooltip doesn't use the
      // hide animation
      $( "#" + id ).remove();

      // Restore the title
      if ( element.data( "ui-tooltip-title" ) ) {
        element.attr( "title", element.data( "ui-tooltip-title" ) );
        element.removeData( "ui-tooltip-title" );
      }
    });
  }
});

}( jQuery ) );