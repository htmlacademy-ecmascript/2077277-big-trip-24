(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",g={};g[_]=m;var $=function(t){return t instanceof E},C=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},b=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},M=y;M.l=C,M.i=$,M.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=C(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!M.u(e)||e,h=M.p(t),p=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case d:return c?p(1,0):p(31,11);case l:return c?p(1,v):p(0,v+1);case a:var g=this.$locale().weekStart||0,$=(m<g?m+7:m)-g;return p(c?y-$:y+(6-$),v);case o:case u:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=M.p(t),h="set"+(this.$u?"UTC":""),p=(a={},a[o]=h+"Date",a[u]=h+"Date",a[l]=h+"Month",a[d]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(u,1);m.$d[p](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,c){var u,h=this;n=Number(n);var p=M.p(c),f=function(t){var e=b(h);return M.w(e.date(e.date()+Math.round(t*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[p]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return M.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:u(1),hh:u(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,h){var p,f=M.p(u),m=b(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,_=M.m(this,m);return _=(p={},p[d]=_/12,p[l]=_,p[c]=_/3,p[a]=(y-v)/6048e5,p[o]=(y-v)/864e5,p[r]=y/e,p[s]=y/t,p[i]=y/1e3,p)[f]||y,h?_:M.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=C(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),w=E.prototype;return b.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,E,b),t.$i=!0),b},b.locale=C,b.isDayjs=$,b.unix=function(t){return b(1e3*t)},b.en=g[_],b.Ls=g,b.p={},b}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof _},h=function(t,e,n){return new _(t,n,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*d[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",d=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/d[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/d[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*d[p(e)]:u(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},212:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},412:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";function t(t,e,n="beforeend"){if(!(t instanceof g))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function e(t,e){if(!(t instanceof g&&e instanceof g))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function i(t){if(null!==t){if(!(t instanceof g))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var s=n(379),r=n.n(s),o=n(795),a=n.n(o),l=n(569),c=n.n(l),d=n(565),u=n.n(d),h=n(216),p=n.n(h),f=n(589),m=n.n(f),v=n(10),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const _="shake";class g{#t=null;constructor(){if(new.target===g)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),t?.()}),600)}}const $=["taxi","flight","train","ship","check-in","sightseeing","bus","drive","restaurant"],C=[0,1],b="everything",M="future",E="present",w="past",S={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFERS:"offers"},D={[S.DAY]:!0,[S.EVENT]:!1,[S.TIME]:!0,[S.PRICE]:!0,[S.OFFERS]:!1},k="DEFAULT",T="EDITING";class A extends g{get template(){return'<ul class="trip-events__list"></ul>'}}class O extends g{#e=null;constructor({message:t}){super(),this.#e=t}get template(){return`<p class="trip-events__msg">${this.#e}</p>\n`}}var H=n(484),x=n.n(H),B=n(646),P=n.n(B),L=n(212),Y=n.n(L),F=n(412),I=n.n(F);function N(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}function j(t,e){return t?x()(t).format(e):""}function q(t){if(t)return t[0].toUpperCase()+t.slice(1,t.length)}function R(t,e){return x()(e.dateFrom).diff(x()(t.dateFrom))}function U(t,e){return e.basePrice-t.basePrice}function V(t,e){const n=x()(t.dateTo).diff(x()(t.dateFrom));return x()(e.dateTo).diff(x()(e.dateFrom))-n}x().extend(P()),x().extend(Y()),x().extend(I());const W={[S.DAY]:t=>t.toSorted(R),[S.EVENT]:()=>{throw new Error(`Sort by ${S.EVENT} is disabled`)},[S.TIME]:t=>t.toSorted(V),[S.PRICE]:t=>t.toSorted(U),[S.OFFERS]:()=>{throw new Error(`Sort by ${S.OFFERS} is disabled`)}};class Z extends g{#n=null;#i=null;#s=[];#r=null;#o=null;constructor({point:t,destination:e,offers:n,onOpenEditButtonClick:i,onFavoriteClick:s}){super(),this.#n=t,this.#i=e,this.#s=n,this.#r=i,this.#a(),this.#o=s}get template(){return function(t,e,n){const{type:i,basePrice:s,dateFrom:r,dateTo:o,isFavorite:a}=t,l=q(i),c=a?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn",d=n.map((t=>function(t,e){return`<li class="event__offer">\n                <span class="event__offer-title">${t}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${e}</span>\n            </li>`}(t.title,t.price))).join(""),u=function(t){const[e,n,i]=t.split(",");switch(!0){case"00"!==e:return`${e}D ${n}H ${i}M`;case"00"!==n:return`${n}H ${i}M`;default:return`${i}M`}}((h=r,p=o,x().duration(x()(p).set("seconds",0).set("millisecond",0).diff(x()(h).set("seconds",0).set("millisecond",0))).format("DD,HH,mm")));var h,p;return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="${j(r,"YYYY-MM-DD")}">${j(r,"DD MMM")}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${l} ${e.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${j(r,"YYYY-MM-DD HH:mm")}">${j(r,"HH:mm")}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${j(r,"YYYY-MM-DD HH:mm")}">${j(o,"HH:mm")}</time>\n                  </p>\n                  <p class="event__duration">${u}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${s}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  ${d}\n                </ul>\n                <button class="${c}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.#n,this.#i,this.#s)}#a(){this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#c)}#l=t=>{t.preventDefault(),this.#r()};#c=t=>{t.preventDefault(),this.#o()}}class J extends g{_state={};updateElement(t){t&&(this._setState(t),this.#d())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(t){this._state=structuredClone({...this._state,...t})}#d(){const t=this.element,e=t.parentElement;this.removeElement();const n=this.element;e.replaceChild(n,t),this._restoreHandlers()}}class z extends J{#n=null;#u=[];#h=[];#p=null;#f=null;#m=!1;constructor({point:t,destination:e,allDestinations:n,typeOffer:i,allOffers:s,isNewPoint:r,onCloseEditButtonClick:o,onSubmitButtonClick:a}){super(),this.#n=t,this._setState(z.parsePointToState(t,e,i)),this.#u=n,this.#h=s,this.#m=r??!1,this.#p=o,this.#f=a,this.#a()}get template(){return function(t,e,n){const{type:i,basePrice:s,dateFrom:r,dateTo:o,typeOffer:a,destination:l}=t,c=a.offers.map((e=>{const n=t.offers.includes(e.id)?"checked":"";return function(t,e,n){const i=t.split(" ").findLast((t=>t.length>3)).toLowerCase();return`<div class="event__offer-selector">\n               <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}-1" type="checkbox"\n                name="event-offer-${i}" ${n}>\n               <label class="event__offer-label" for="event-offer-${i}-1">\n                  <span class="event__offer-title">${t}</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">${e}</span>\n              </label>\n            </div>`}(e.title,e.price,n)})).join(""),d=l.pictures.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`)).join(""),u=n?"":'<button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>',h=n?'<button class="event__reset-btn" type="reset">Cancel\n    </button>':'<button class="event__reset-btn" type="reset">Delete\n    </button>';return`<li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${$.map((e=>{return`<div class="event__type-item">\n                <input id="event-type-${n=e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n}" ${n===t.type?"checked":""}>\n                <label class="event__type-label  event__type-label--${n}" for="event-type-${n}-1">${q(n)}</label>\n            </div>`;var n})).join("")}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${t.type}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l.name}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      ${e.map((t=>function(t){return`<option value="${t}"></option>\n    `}(t.name))).join("")}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${j(r,"DD/MM/YY HH:mm")}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${j(o,"DD/MM/YY HH:mm")}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  ${h}\n                  ${u}\n                </header>\n                <section class="event__details">\n                      ${a.offers.length?`<section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n        ${c}\n      </div>\n    </section>`:""}\n                      ${l.description||l.pictures.length?`<section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${l.description}</p>\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                        ${d}\n                      </div>\n                    </div>\n                  </section>`:""}\n                </section>\n              </form>\n            </li>`}(this._state,this.#u,this.#m)}reset(t){this.updateElement({...t,typeOffer:this.#h.find((e=>e.type===t.type)),destination:this.#u.find((e=>e.id===t.destination))})}#a(){const t=this.element.querySelector(".event__rollup-btn");t&&t.addEventListener("click",this.#v),this.element.querySelector(".event__save-btn").addEventListener("submit",this.#y),this.element.querySelector(".event__type-group").addEventListener("change",this.#_),this.element.querySelector(".event__input--destination").addEventListener("change",this.#g),this.element.querySelector(".event__input--price").addEventListener("input",this.#$)}_restoreHandlers(){this.#a()}#v=t=>{t.preventDefault(),this.#p()};#y=t=>{t.preventDefault(),this.#f(z.parseStateToPoint(this.#n))};#_=t=>{t.preventDefault();const e=t.target.value,n=this.#h.find((t=>t.type===e));this.updateElement({type:e,typeOffer:n})};#g=t=>{t.preventDefault();const e=t.target.value,n=this.#u.find((t=>t.name===e));this.updateElement({destination:n})};#$=t=>{t.preventDefault();const e=t.target.value;this._setState({basePrice:e})};static parsePointToState(t,e,n){return{...t,destination:e,typeOffer:n}}static parseStateToPoint(t){return{...t}}}class K{#C=null;#b=null;#M=null;#n=null;#E=k;#w=[];#S=[];#D=null;#k=null;constructor({pointsListComponent:t,destinationsModel:e,offersModel:n,onDataChange:i,onModeChange:s}){this.#C=t,this.#w=n,this.#S=e,this.#D=i,this.#k=s}init(n){this.#n=n;const s=this.#b,r=this.#M;this.#b=new Z({point:this.#n,destination:this.#S.getDestinationsById(n.destination),offers:this.#w.getOffersById(n.type,n.offers),onOpenEditButtonClick:this.#r,onFavoriteClick:this.#o}),this.#M=new z({point:this.#n,destination:this.#S.getDestinationsById(n.destination),allDestinations:this.#S.destinations,typeOffer:this.#w.getOffersByType(n.type),allOffers:this.#w.offers,onCloseEditButtonClick:this.#p,onSubmitButtonClick:this.#f}),s&&r?(this.#E===k&&e(this.#b,s),this.#E===T&&e(this.#M,r),i(s),i(r)):t(this.#b,this.#C.element)}destroy(){i(this.#b),i(this.#M)}resetView(){this.#E!==k&&(this.#M.reset(this.#n),this.#T(),document.removeEventListener("keydown",this.#A))}#O(){e(this.#M,this.#b),this.#k(),this.#E=T}#T(){e(this.#b,this.#M),this.#E=k}#A=t=>{"Escape"===t.key&&(t.preventDefault(),this.#M.reset(this.#n),this.#T(),document.removeEventListener("keydown",this.#A))};#r=()=>{this.#O(),document.addEventListener("keydown",this.#A)};#p=()=>{this.#M.reset(this.#n),this.#T(),document.removeEventListener("keydown",this.#A)};#f=()=>{this.#D(this.#n),this.#T(),document.removeEventListener("keydown",this.#A)};#o=()=>{this.#D({...this.#n,isFavorite:!this.#n.isFavorite})}}function X(t){return t[Math.floor(Math.random()*t.length)]}function G(t,e=0){return Math.floor(e+Math.random()*(t-e))}class Q extends g{#H=null;#x=[];constructor({sortTypes:t,onSortTypeChange:e}){super(),this.#x=t,this.#H=e,this.#a()}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            ${this.#x.map((t=>function(t){const e=t.isChecked?"checked":"",n=t.isDisabled?"disabled":"";return`<div class="trip-sort__item  trip-sort__item--${t.type}">\n            <input id="sort-${t.type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"\n            value="sort-${t.type}" data-sort-type="${t.type}" ${e} ${n}>\n            <label class="trip-sort__btn" for="sort-${t.type}">${t.type}</label>\n          </div>`}(t))).join("")}\n          </form>\n          `}#a(){this.element.addEventListener("change",this.#B)}#B=t=>{"INPUT"===t.target.tagName&&(t.preventDefault(),this.#H(t.target.dataset.sortType))}}class tt{#P=null;#x=[];#L=null;#Y=null;#F=S.DAY;constructor({container:t,handleSortTypeChange:e}){this.#P=t,this.#Y=e,this.#x=Object.values(S).map((t=>({type:t,isChecked:t===this.#F,isDisabled:!D[t]})))}init(){this.#L=new Q({sortTypes:this.#x,onSortTypeChange:this.#Y}),t(this.#L,this.#P)}}class et extends g{get template(){return'<section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}}const nt=100,it=[{id:"1",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Chamonix parliament building"}]},{id:"2",description:"Amsterdam is the capital of the Netherlands, known for its complex network of canals, narrow houses with gabled roofs and rich artistic heritage.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Amsterdam is the capital of the Netherlands"},{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Chamonix parliament building"},{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Chamonix parliament building"}]},{id:"3",description:"Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc"},{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc"}]},{id:"4",description:"",name:"Moscow",pictures:[]},{id:"5",description:"Rome is the capital of Italy, a huge multinational city with a history dating back almost three thousand years.",name:"Rome",pictures:[{src:`https://loremflickr.com/248/152?random=${G(nt)}`,description:"Rome is the capital of Italy"}]}],st=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:120},{id:"2",title:"Upgrade to a VIP",price:150},{id:"3",title:"Add luggage",price:50}]},{type:"flight",offers:[{id:"1",title:"Add luggage",price:50},{id:"2",title:"Switch to comfort",price:80},{id:"3",title:"Add meal",price:100}]},{type:"train",offers:[{id:"1",title:"Add luggage",price:20},{id:"2",title:"Switch to comfort",price:70},{id:"3",title:"Add meal",price:85}]},{type:"ship",offers:[{id:"1",title:"Switch to comfort",price:45},{id:"2",title:"Add meal",price:160}]},{type:"check-in",offers:[{id:"1",title:"Fast check-in",price:35},{id:"2",title:"VIP check-in",price:70}]},{type:"sightseeing",offers:[]},{type:"bus",offers:[{id:"1",title:"Infotainment system",price:44},{id:"2",title:"Order meal",price:58},{id:"3",title:"Choose seats",price:60}]},{type:"drive",offers:[]},{type:"restaurant",offers:[{id:"1",title:"Choose live music",price:77},{id:"2",title:"Choose VIP area",price:171}]}];let rt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const ot=new Date,at=new Date(ot.setDate(ot.getDate()-3)),lt=new Date(ot.setDate(ot.getDate()+7));function ct(t){const e=st.find((e=>e.type===t)),n=e.offers.length;return n?e.offers.slice(0,G(n)).map((t=>t.id)):[]}const dt={[b]:t=>t,[M]:t=>t.filter((t=>function(t){return x()().isBefore(t.dateFrom,"minute")}(t))),[E]:t=>t.filter((t=>function(t){return x()().isSameOrAfter(t.dateFrom,"minute")&&t.dateTo&&x()().isSameOrBefore(t.dateTo,"minute")}(t))),[w]:t=>t.filter((t=>function(t){return t.dateTo&&x()().isAfter(t.dateTo,"minute")}(t)))},ut=document.querySelector(".page-body__page-main").querySelector(".trip-events"),ht=document.querySelector(".page-header"),pt=ht.querySelector(".trip-controls__filters"),ft=ht.querySelector(".trip-main"),mt=new class{#I=function(){const t=[];for(let e=0;e<6;e++){const e=X($),n=N(at,lt),i=N(n,lt);t.push({id:rt(),type:e,offers:ct(e),basePrice:G(3e3,500),dateFrom:n,dateTo:i,destination:X(it).id,isFavorite:X(C)})}return t}();get points(){return this.#I}},vt=new class{#s=st;get offers(){return this.#s}getOffersByType(t){return this.offers.find((e=>e.type===t))}getOffersById(t,e){return this.getOffersByType(t).offers.filter((t=>e.find((e=>t.id===e))))}},yt=new class{#N=it;get destinations(){return this.#N}getDestinationsById(t){return this.destinations.find((e=>e.id===t))}},_t=new class{#P=null;#j=[];#q=new A;#I=[];#w=[];#S=[];#R=new Map;#F=S.DAY;constructor({container:t,pointsModel:e,offersModel:n,destinationsModel:i}){this.#P=t,this.#j=e,this.#w=n,this.#S=i,this.#I=[...this.#j.points]}init(){this.#I.length?(this.#U(),this.#V()):this.#W()}#W(){t(new O({message:"There are no future events now"}),this.#P)}#Z=t=>{var e,n;this.#I=(e=this.#I,n=t,e.map((t=>t.id===n.id?n:t))),this.#R.get(t.id).init(t)};#k=()=>{this.#R.forEach((t=>{t.resetView()}))};#J=t=>{this.#F=t,this.#I=W[this.#F](this.#I)};#Y=t=>{this.#J(t),this.#z(),this.#K()};#U(){new tt({container:this.#P,handleSortTypeChange:this.#Y}).init()}#V(){t(this.#q,this.#P),this.#Y(this.#F)}#K(){this.#I.forEach((t=>{this.#X(t)}))}#X(t){const e=new K({pointsListComponent:this.#q,destinationsModel:this.#S,offersModel:this.#w,onDataChange:this.#Z,onModeChange:this.#k});e.init(t),this.#R.set(t.id,e)}#z(){this.#R.forEach((t=>{t.destroy()})),this.#R.clear()}}({container:ut,pointsModel:mt,offersModel:vt,destinationsModel:yt}),gt=new class{#P=null;constructor(t){this.#P=t}init(){t(new et,this.#P,"afterbegin")}}(ft),$t=(Ct=mt.points,Object.entries(dt).map((([t,e])=>({type:t,count:e(Ct).length}))));var Ct;t(new class extends g{#G=[];constructor({filters:t}){super(),this.#G=t}get template(){return function(t){return`<form class="trip-filters" action="#" method="get">\n              ${t.map((t=>function(t){const e=t.type===b?"checked":"",n=0===t.count?"disabled":"";return`<div class="trip-filters__filter">\n              <input id="filter-${t.type}" class="trip-filters__filter-input  visually-hidden"\n               type="radio" name="trip-filter" value="${t.type}" ${e} ${n}>\n              <label class="trip-filters__filter-label" for="filter-${t.type}">${t.type}</label>\n          </div>`}(t))).join("")}\n              <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>`}(this.#G)}}({filters:$t}),pt),gt.init(),_t.init()})()})();
//# sourceMappingURL=bundle.d1e404021cae71032b1f.js.map