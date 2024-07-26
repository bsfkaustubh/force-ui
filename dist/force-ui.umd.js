(function(k,A){typeof exports=="object"&&typeof module<"u"?A(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],A):(k=typeof globalThis<"u"?globalThis:k||self,A(k["force-ui"]={},k.React))})(this,function(k,A){"use strict";const W="-";function ae(e){const r=le(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function l(s){const a=s.split(W);return a[0]===""&&a.length!==1&&a.shift(),q(a,r)||ie(s)}function n(s,a){const d=t[s]||[];return a&&o[s]?[...d,...o[s]]:d}return{getClassGroupId:l,getConflictingClassGroupIds:n}}function q(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),l=o?q(e.slice(1),o):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(W);return r.validators.find(({validator:s})=>s(n))?.classGroupId}const H=/^\[(.+)\]$/;function ie(e){if(H.test(e)){const r=H.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function le(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return de(Object.entries(e.classGroups),t).forEach(([n,s])=>{O(s,o,n,r)}),o}function O(e,r,t,o){e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:J(r,l);n.classGroupId=t;return}if(typeof l=="function"){if(ce(l)){O(l(o),r,t,o);return}r.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([n,s])=>{O(s,J(r,n),t,o)})})}function J(e,r){let t=e;return r.split(W).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ce(e){return e.isThemeGetter}function de(e,r){return r?e.map(([t,o])=>{const l=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,l]}):e}function ue(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function l(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return l(n,s),s},set(n,s){t.has(n)?t.set(n,s):l(n,s)}}}const X="!";function pe(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,l=r[0],n=r.length;function s(a){const d=[];let b=0,f=0,c;for(let g=0;g<a.length;g++){let y=a[g];if(b===0){if(y===l&&(o||a.slice(g,g+n)===r)){d.push(a.slice(f,g)),f=g+n;continue}if(y==="/"){c=g;continue}}y==="["?b++:y==="]"&&b--}const m=d.length===0?a:a.substring(f),h=m.startsWith(X),v=h?m.substring(1):m,x=c&&c>f?c-f:void 0;return{modifiers:d,hasImportantModifier:h,baseClassName:v,maybePostfixModifierPosition:x}}return t?function(d){return t({className:d,parseClassName:s})}:s}function be(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function fe(e){return{cache:ue(e.cacheSize),parseClassName:pe(e),...ae(e)}}const ge=/\s+/;function me(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:l}=r,n=new Set;return e.trim().split(ge).map(s=>{const{modifiers:a,hasImportantModifier:d,baseClassName:b,maybePostfixModifierPosition:f}=t(s);let c=!!f,m=o(c?b.substring(0,f):b);if(!m){if(!c)return{isTailwindClass:!1,originalClassName:s};if(m=o(b),!m)return{isTailwindClass:!1,originalClassName:s};c=!1}const h=be(a).join(":");return{isTailwindClass:!0,modifierId:d?h+X:h,classGroupId:m,originalClassName:s,hasPostfixModifier:c}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:d,hasPostfixModifier:b}=s,f=a+d;return n.has(f)?!1:(n.add(f),l(d,b).forEach(c=>n.add(a+c)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function he(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=Z(r))&&(o&&(o+=" "),o+=t);return o}function Z(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=Z(e[o]))&&(t&&(t+=" "),t+=r);return t}function ye(e,...r){let t,o,l,n=s;function s(d){const b=r.reduce((f,c)=>c(f),e());return t=fe(b),o=t.cache.get,l=t.cache.set,n=a,a(d)}function a(d){const b=o(d);if(b)return b;const f=me(d,t);return l(d,f),f}return function(){return n(he.apply(null,arguments))}}function u(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const K=/^\[(?:([a-z-]+):)?(.+)\]$/i,xe=/^\d+\/\d+$/,we=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ce=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ke=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ze=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Se=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function C(e){return M(e)||we.has(e)||xe.test(e)}function z(e){return I(e,"length",Ne)}function M(e){return!!e&&!Number.isNaN(Number(e))}function E(e){return I(e,"number",M)}function T(e){return!!e&&Number.isInteger(Number(e))}function Ae(e){return e.endsWith("%")&&M(e.slice(0,-1))}function i(e){return K.test(e)}function S(e){return ve.test(e)}const Me=new Set(["length","size","percentage"]);function Ie(e){return I(e,Me,Q)}function Pe(e){return I(e,"position",Q)}const Te=new Set(["image","url"]);function Re(e){return I(e,Te,je)}function Ge(e){return I(e,"",Ee)}function R(){return!0}function I(e,r,t){const o=K.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ne(e){return Ce.test(e)&&!ke.test(e)}function Q(){return!1}function Ee(e){return ze.test(e)}function je(e){return Se.test(e)}function $e(){const e=u("colors"),r=u("spacing"),t=u("blur"),o=u("brightness"),l=u("borderColor"),n=u("borderRadius"),s=u("borderSpacing"),a=u("borderWidth"),d=u("contrast"),b=u("grayscale"),f=u("hueRotate"),c=u("invert"),m=u("gap"),h=u("gradientColorStops"),v=u("gradientColorStopPositions"),x=u("inset"),g=u("margin"),y=u("opacity"),w=u("padding"),P=u("saturate"),B=u("scale"),Y=u("sepia"),D=u("skew"),ee=u("space"),re=u("translate"),V=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],_=()=>["auto",i,r],p=()=>[i,r],te=()=>["",C,z],j=()=>["auto",M,i],oe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",i],se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[M,E],L=()=>[M,i];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[C,z],blur:["none","",S,i],brightness:N(),borderColor:[e],borderRadius:["none","","full",S,i],borderSpacing:p(),borderWidth:te(),contrast:N(),grayscale:G(),hueRotate:L(),invert:G(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ae,z],inset:_(),margin:_(),opacity:N(),padding:p(),saturate:N(),scale:N(),sepia:G(),skew:L(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...oe(),i]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T,i]}],basis:[{basis:_()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",T,i]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",T,i]},i]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[T,i]},i]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",M,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,z]}],"underline-offset":[{"underline-offset":["auto",C,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...oe(),Pe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ie]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Re]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:$()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[C,i]}],"outline-w":[{outline:[C,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[C,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Ge]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...ne(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,i]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[c]}],saturate:[{saturate:[P]}],sepia:[{sepia:[Y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[B]}],"scale-x":[{"scale-x":[B]}],"scale-y":[{"scale-y":[B]}],rotate:[{rotate:[T,i]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,z,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Le=ye($e),We=({variant:e="primary",isSmall:r=!1,hasSuffixIcon:t=!1,hasPrefixIcon:o=!1,type:l="button",className:n,onClick:s,children:a,disabled:d=!1,id:b="",...f})=>{const c=r?"small":"base",m={primary:"text-white bg-primary-900 hover:bg-blue-600 focus-visible:ring-blue-500 border border-solid border-blue-500",white:"text-blue-500 bg-white border border-solid border-blue-500 focus-visible:ring-blue-500",dark:"text-white border border-white bg-transparent border-solid",link:"underline border-0 bg-transparent",blank:"bg-transparent border-transparent",gray:"bg-transparent border border-solid border-gray-500 hover:bg-gray-200 text-black/50","gray-selected":"bg-gray-500 text-white",other:"","gradient-border":"bg-transparent text-zip-app-heading zw-base-bold gradient-border-cover gradient-border-cover-button",gradient:"bg-gradient-to-r from-gradient-color-1 via-46.88 via-gradient-color-2 to-gradient-color-3 text-white zw-base-bold","border-secondary":"text-app-secondary bg-app-light-background border border-app-secondary shadow-sm"},h={base:{default:"px-6 py-3",hasPrefixIcon:"pl-4 pr-6 py-3",hasSuffixIcon:"pl-6 pr-4 py-3"},medium:{default:"px-4 py-3 h-11",hasPrefixIcon:"pl-4 pr-6 py-3",hasSuffixIcon:"pl-6 pr-4 py-3"},small:{default:"px-5 py-2 h-[2.625rem]",hasPrefixIcon:"pl-3 pr-5 py-2 h-[2.625rem]",hasSuffixIcon:"pl-5 pr-3 py-2 h-[2.625rem]"}},v={base:"text-base font-medium",small:"text-sm font-medium"},x={base:"rounded-md",small:"rounded"},g=y=>{s&&typeof s=="function"&&s(y)};return React.createElement("button",{type:l,className:Le("px-4 py-4",m[e],!o&&!t&&h[c].default,o&&h[c].hasPrefixIcon,t&&h[c].hasSuffixIcon,v[c],x[c],n),onClick:g,disabled:d,...b&&{id:b},...f},a)},Oe=e=>{const{value:r="",size:t="sm",className:o="",disabled:l=!1,inputProps:n,onChange:s=()=>{}}=e,[a,d]=A.useState(!1),[b,f]=A.useState(!1);let c="rounded p-2 border";const m={sm:"w-1/3",md:"w-2/3",lg:"w-full"},h="border-field-border bg-field-primary-background",v="border-field-primary-hover",x="border-field-primary outline-none",g="border-field-border-error bg-field-background-error";c=l?`${c} ${o} border-field-border-disabled bg-field-background-disabled cursor-not-allowed`:`${c} ${o}`;const w=()=>b?g:a?x:h;return A.createElement("textarea",{className:`${c} ${m[t]} ${w()}`,...n,onFocus:()=>d(!0),onBlur:()=>d(!1),onMouseEnter:P=>!a&&(P.currentTarget.className=`${c} ${m[t]} ${v}`),onMouseLeave:P=>!a&&(P.currentTarget.className=`${c} ${m[t]} ${h}`),disabled:l,onChange:s,value:r})};k.Button=We,k.TextArea=Oe,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=force-ui.umd.js.map
