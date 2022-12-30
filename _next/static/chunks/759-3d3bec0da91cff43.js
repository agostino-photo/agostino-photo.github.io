(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{6447:function(e,t,r){"use strict";var n=r(3366),o=r(7462),i=r(7294),a=r(5408),l=r(8700),s=r(9707),c=r(9766),u=r(1496),p=r(4502),f=r(5893);let d=["component","direction","spacing","divider","children"],h=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],m=({ownerState:e,theme:t})=>{let r=(0,o.Z)({display:"flex",flexDirection:"column"},(0,a.k9)({theme:t},(0,a.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,l.hB)(t),i=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),s=(0,a.P$)({values:e.direction,base:i}),u=(0,a.P$)({values:e.spacing,base:i});"object"==typeof s&&Object.keys(s).forEach((e,t,r)=>{let n=s[e];if(!n){let o=t>0?s[r[t-1]]:"column";s[e]=o}});let p=(t,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${h(r?s[r]:e.direction)}`]:(0,l.NA)(n,t)}});r=(0,c.Z)(r,(0,a.k9)({theme:t},u,p))}return(0,a.dt)(t.breakpoints,r)},g=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})(m),y=i.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiStack"}),a=(0,s.Z)(r),{component:l="div",direction:c="column",spacing:u=0,divider:h,children:m}=a,y=(0,n.Z)(a,d);return(0,f.jsx)(g,(0,o.Z)({as:l,ownerState:{direction:c,spacing:u},ref:t},y,{children:h?function(e,t){let r=i.Children.toArray(e).filter(Boolean);return r.reduce((e,n,o)=>(e.push(n),o<r.length-1&&e.push(i.cloneElement(t,{key:`separator-${o}`})),e),[])}(m,h):m}))});t.Z=y},5861:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(3366),o=r(7462),i=r(7294),a=r(6010),l=r(9707),s=r(4780),c=r(1496),u=r(4502),p=r(8216),f=r(1588),d=r(4867);function h(e){return(0,d.Z)("MuiTypography",e)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,h,a)},v=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=e=>k[e]||e,x=i.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTypography"}),i=_(r.color),s=(0,l.Z)((0,o.Z)({},r,{color:i})),{align:c="inherit",className:p,component:f,gutterBottom:d=!1,noWrap:h=!1,paragraph:k=!1,variant:x="body1",variantMapping:Z=b}=s,P=(0,n.Z)(s,g),w=(0,o.Z)({},s,{align:c,color:i,className:p,component:f,gutterBottom:d,noWrap:h,paragraph:k,variant:x,variantMapping:Z}),C=f||(k?"p":Z[x]||b[x])||"span",S=y(w);return(0,m.jsx)(v,(0,o.Z)({as:C,ref:t,ownerState:w,className:(0,a.Z)(S.root,p)},P))});var Z=x},247:function(e,t,r){"use strict";var n=r(8081);let o=(0,n.Z)();t.Z=o},1496:function(e,t,r){"use strict";r.d(t,{ZP:function(){return P}});var n=r(3366),o=r(7462),i=r(2030),a=r(6500),l=r(8320);let s=["variant"];function c(e){return 0===e.length}function u(e){let{variant:t}=e,r=(0,n.Z)(e,s),o=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?o+=c(o)?e[t]:(0,l.Z)(e[t]):o+=`${c(o)?t:(0,l.Z)(t)}${(0,l.Z)(e[t].toString())}`}),o}var p=r(6523);let f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],d=["theme"],h=["theme"];function m(e){return 0===Object.keys(e).length}let g=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,y=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);let n={};return r.forEach(e=>{let t=u(e.props);n[t]=e.style}),n},v=(e,t,r,n)=>{var o,i;let{ownerState:a={}}=e,l=[],s=null==r?void 0:null==(o=r.components)?void 0:null==(i=o[n])?void 0:i.variants;return s&&s.forEach(r=>{let n=!0;Object.keys(r.props).forEach(t=>{a[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)}),n&&l.push(t[u(r.props)])}),l};function b(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let k=(0,a.Z)();var _=r(247);let x=e=>b(e)&&"classes"!==e,Z=function(e={}){let{defaultTheme:t=k,rootShouldForwardProp:r=b,slotShouldForwardProp:a=b}=e,l=e=>{let r=m(e.theme)?t:e.theme;return(0,p.Z)((0,o.Z)({},e,{theme:r}))};return l.__mui_systemSx=!0,(e,s={})=>{let c;(0,i.Co)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:u,slot:p,skipVariantsResolver:k,skipSx:_,overridesResolver:x}=s,Z=(0,n.Z)(s,f),P=void 0!==k?k:p&&"Root"!==p||!1,w=_||!1,C=b;"Root"===p?C=r:p?C=a:"string"==typeof e&&e.charCodeAt(0)>96&&(C=void 0);let S=(0,i.ZP)(e,(0,o.Z)({shouldForwardProp:C,label:c},Z)),O=(e,...r)=>{let i=r?r.map(e=>"function"==typeof e&&e.__emotion_real!==e?r=>{let{theme:i}=r,a=(0,n.Z)(r,d);return e((0,o.Z)({theme:m(i)?t:i},a))}:e):[],a=e;u&&x&&i.push(e=>{let r=m(e.theme)?t:e.theme,n=g(u,r);if(n){let i={};return Object.entries(n).forEach(([t,n])=>{i[t]="function"==typeof n?n((0,o.Z)({},e,{theme:r})):n}),x(e,i)}return null}),u&&!P&&i.push(e=>{let r=m(e.theme)?t:e.theme;return v(e,y(u,r),r,u)}),w||i.push(l);let s=i.length-r.length;if(Array.isArray(e)&&s>0){let c=Array(s).fill("");(a=[...e,...c]).raw=[...e.raw,...c]}else"function"==typeof e&&e.__emotion_real!==e&&(a=r=>{let{theme:i}=r,a=(0,n.Z)(r,h);return e((0,o.Z)({theme:m(i)?t:i},a))});let p=S(a,...i);return p};return S.withConfig&&(O.withConfig=S.withConfig),O}}({defaultTheme:_.Z,rootShouldForwardProp:x});var P=Z},4502:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7462),o=r(9718),i=r(247);function a({props:e,name:t}){return function({props:e,name:t,defaultTheme:r}){let i=(0,o.Z)(r),a=function(e){let{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?function e(t,r){let o=(0,n.Z)({},r);return Object.keys(t).forEach(i=>{if(i.toString().match(/^(components|slots)$/))o[i]=(0,n.Z)({},t[i],o[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){let a=t[i]||{},l=r[i];o[i]={},l&&Object.keys(l)?a&&Object.keys(a)?(o[i]=(0,n.Z)({},l),Object.keys(a).forEach(t=>{o[i][t]=e(a[t],l[t])})):o[i]=l:o[i]=a}else void 0===o[i]&&(o[i]=t[i])}),o}(t.components[r].defaultProps,o):o}({theme:i,name:t,props:e});return a}({props:e,name:t,defaultTheme:i.Z})}},8216:function(e,t,r){"use strict";var n=r(8320);t.Z=n.Z},2030:function(e,t,r){"use strict";r.d(t,{ZP:function(){return v},Co:function(){return b}});var n=r(7294),o=r(7462),i=r(5042),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,i.Z)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),s=r(8112),c=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},u=function(e,t,r){c(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next;while(void 0!==o)}},p=r(8137),f=r(7278),d=function(e){return"theme"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?l:d},m=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},g=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return c(t,r,n),(0,f.L)(function(){return u(t,r,n)}),null},y=(function e(t,r){var i,a,l=t.__emotion_real===t,c=l&&t.__emotion_base||t;void 0!==r&&(i=r.label,a=r.target);var u=m(t,r,l),f=u||h(c),d=!f("as");return function(){var y=arguments,v=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&v.push("label:"+i+";"),null==y[0]||void 0===y[0].raw)v.push.apply(v,y);else{v.push(y[0][0]);for(var b=y.length,k=1;k<b;k++)v.push(y[k],y[0][k])}var _=(0,s.w)(function(e,t,r){var o,i,l,m=d&&e.as||c,y="",b=[],k=e;if(null==e.theme){for(var _ in k={},e)k[_]=e[_];k.theme=(0,n.useContext)(s.T)}"string"==typeof e.className?(o=t.registered,i=e.className,l="",i.split(" ").forEach(function(e){void 0!==o[e]?b.push(o[e]+";"):l+=e+" "}),y=l):null!=e.className&&(y=e.className+" ");var x=(0,p.O)(v.concat(b),t.registered,k);y+=t.key+"-"+x.name,void 0!==a&&(y+=" "+a);var Z=d&&void 0===u?h(m):f,P={};for(var w in e)(!d||"as"!==w)&&Z(w)&&(P[w]=e[w]);return P.className=y,P.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g,{cache:t,serialized:x,isStringTag:"string"==typeof m}),(0,n.createElement)(m,P))});return _.displayName=void 0!==i?i:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",_.defaultProps=t.defaultProps,_.__emotion_real=_,_.__emotion_base=c,_.__emotion_styles=v,_.__emotion_forwardProp=u,Object.defineProperty(_,"toString",{value:function(){return"."+a}}),_.withComponent=function(t,n){return e(t,(0,o.Z)({},r,n,{shouldForwardProp:m(_,n,!0)})).apply(void 0,v)},_}}).bind();/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function v(e,t){let r=y(e,t);return r}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){y[e]=y(e)});let b=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},9707:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7462),o=r(3366),i=r(9766),a=r(4920);let l=["sx"],s=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:a.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};function c(e){let t;let{sx:r}=e,a=(0,o.Z)(e,l),{systemProps:c,otherProps:u}=s(a);return t=Array.isArray(r)?[c,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,i.P)(t)?(0,n.Z)({},c,t):c}:(0,n.Z)({},c,r),(0,n.Z)({},u,{sx:t})}},7078:function(e,t){"use strict";let r;let n=e=>e,o=(r=n,{configure(e){r=e},generate:e=>r(e),reset(){r=n}});t.Z=o},4780:function(e,t,r){"use strict";function n(e,t,r){let n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((e,n)=>(n&&(e.push(t(n)),r&&r[n]&&e.push(r[n])),e),[]).join(" ")}),n}r.d(t,{Z:function(){return n}})},4867:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7078);let o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function i(e,t,r="Mui"){let i=o[t];return i?`${r}-${i}`:`${n.Z.generate(e)}-${t}`}},1588:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4867);function o(e,t,r="Mui"){let o={};return t.forEach(t=>{o[t]=(0,n.Z)(e,t,r)}),o}},6010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,i=n(r(7294)),a=r(1003),l=r(7795),s=r(4465),c=r(2692),u=r(8245),p=r(9246),f=r(227),d=r(3468);let h=new Set;function m(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:l.formatUrl(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:y,prefetch:v,passHref:b,replace:k,shallow:_,scroll:x,locale:Z,onClick:P,onMouseEnter:w,onTouchStart:C,legacyBehavior:S=!1}=e,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,S&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let M=!1!==v,E=i.default.useContext(c.RouterContext),T=i.default.useContext(u.AppRouterContext),j=null!=E?E:T,A=!E,{href:R,as:L}=i.default.useMemo(()=>{if(!E){let e=g(l);return{href:e,as:h?g(h):e}}let[t,r]=a.resolveHref(E,l,!0);return{href:t,as:h?a.resolveHref(E,h):r||t}},[E,l,h]),B=i.default.useRef(R),I=i.default.useRef(L);S&&(n=i.default.Children.only(r));let N=S?n&&"object"==typeof n&&n.ref:t,[$,D,H]=p.useIntersection({rootMargin:"200px"}),U=i.default.useCallback(e=>{(I.current!==L||B.current!==R)&&(H(),I.current=L,B.current=R),$(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[L,N,R,H,$]);i.default.useEffect(()=>{j&&D&&M&&m(j,R,L,{locale:Z})},[L,R,D,Z,M,null==E?void 0:E.locale,j]);let z={ref:U,onClick(e){S||"function"!=typeof P||P(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),j&&!e.defaultPrevented&&function(e,t,r,n,o,l,s,c,u,p){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:c,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!p})};u?i.default.startTransition(h):h()}(e,j,R,L,k,_,x,Z,A,M)},onMouseEnter(e){S||"function"!=typeof w||w(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),j&&(M||!A)&&m(j,R,L,{locale:Z,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),j&&(M||!A)&&m(j,R,L,{locale:Z,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===n.type&&!("href"in n.props)){let q=void 0!==Z?Z:null==E?void 0:E.locale,F=(null==E?void 0:E.isLocaleDomain)&&f.getDomainLocale(L,q,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);z.href=F||d.addBasePath(s.addLocale(L,q,null==E?void 0:E.defaultLocale))}return S?i.default.cloneElement(n,z):i.default.createElement("a",Object.assign({},O,z),r)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,p]=n.useState(!1),[f,d]=n.useState(null);n.useEffect(()=>{if(i){if(!c&&!u&&f&&f.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let t=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&l.splice(t,1)}}}(f,e=>e&&p(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!u){let n=o.requestIdleCallback(()=>p(!0));return()=>o.cancelIdleCallback(n)}},[f,c,r,t,u]);let h=n.useCallback(()=>{p(!1)},[]);return[d,u,h]};var n=r(7294),o=r(4686);let i="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)}}]);