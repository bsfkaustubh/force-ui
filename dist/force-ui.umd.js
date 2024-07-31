(function(k,C){typeof exports=="object"&&typeof module<"u"?C(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],C):(k=typeof globalThis<"u"?globalThis:k||self,C(k["force-ui"]={},k.React))})(this,function(k,C){"use strict";const W="-";function le(e){const r=ce(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function s(i){const a=i.split(W);return a[0]===""&&a.length!==1&&a.shift(),Z(a,r)||de(i)}function n(i,a){const d=t[i]||[];return a&&o[i]?[...d,...o[i]]:d}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function Z(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?Z(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(W);return r.validators.find(({validator:i})=>i(n))?.classGroupId}const H=/^\[(.+)\]$/;function de(e){if(H.test(e)){const r=H.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ce(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return be(Object.entries(e.classGroups),t).forEach(([n,i])=>{B(i,o,n,r)}),o}function B(e,r,t,o){e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:J(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(ue(s)){B(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{B(i,J(r,n),t,o)})})}function J(e,r){let t=e;return r.split(W).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ue(e){return e.isThemeGetter}function be(e,r){return r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[r+i,a])):n);return[t,s]}):e}function pe(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function s(n,i){t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}}const K="!";function ge(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length;function i(a){const d=[];let c=0,u=0,g;for(let f=0;f<a.length;f++){let h=a[f];if(c===0){if(h===s&&(o||a.slice(f,f+n)===r)){d.push(a.slice(u,f)),u=f+n;continue}if(h==="/"){g=f;continue}}h==="["?c++:h==="]"&&c--}const m=d.length===0?a:a.substring(u),y=m.startsWith(K),v=y?m.substring(1):m,x=g&&g>u?g-u:void 0;return{modifiers:d,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:x}}return t?function(d){return t({className:d,parseClassName:i})}:i}function fe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function me(e){return{cache:pe(e.cacheSize),parseClassName:ge(e),...le(e)}}const he=/\s+/;function ye(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=new Set;return e.trim().split(he).map(i=>{const{modifiers:a,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=t(i);let g=!!u,m=o(g?c.substring(0,u):c);if(!m){if(!g)return{isTailwindClass:!1,originalClassName:i};if(m=o(c),!m)return{isTailwindClass:!1,originalClassName:i};g=!1}const y=fe(a).join(":");return{isTailwindClass:!0,modifierId:d?y+K:y,classGroupId:m,originalClassName:i,hasPostfixModifier:g}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:a,classGroupId:d,hasPostfixModifier:c}=i,u=a+d;return n.has(u)?!1:(n.add(u),s(d,c).forEach(g=>n.add(a+g)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function xe(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=X(r))&&(o&&(o+=" "),o+=t);return o}function X(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=X(e[o]))&&(t&&(t+=" "),t+=r);return t}function ve(e,...r){let t,o,s,n=i;function i(d){const c=r.reduce((u,g)=>g(u),e());return t=me(c),o=t.cache.get,s=t.cache.set,n=a,a(d)}function a(d){const c=o(d);if(c)return c;const u=ye(d,t);return s(d,u),u}return function(){return n(xe.apply(null,arguments))}}function b(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const Q=/^\[(?:([a-z-]+):)?(.+)\]$/i,we=/^\d+\/\d+$/,ke=new Set(["px","full","screen"]),Ce=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ze=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ae=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Se=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Re=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function z(e){return R(e)||ke.has(e)||we.test(e)}function A(e){return M(e,"length",je)}function R(e){return!!e&&!Number.isNaN(Number(e))}function T(e){return M(e,"number",R)}function E(e){return!!e&&Number.isInteger(Number(e))}function Me(e){return e.endsWith("%")&&R(e.slice(0,-1))}function l(e){return Q.test(e)}function S(e){return Ce.test(e)}const Ee=new Set(["length","size","percentage"]);function Ne(e){return M(e,Ee,Y)}function Pe(e){return M(e,"position",Y)}const Ie=new Set(["image","url"]);function Te(e){return M(e,Ie,$e)}function Ge(e){return M(e,"",Le)}function N(){return!0}function M(e,r,t){const o=Q.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function je(e){return ze.test(e)&&!Ae.test(e)}function Y(){return!1}function Le(e){return Se.test(e)}function $e(e){return Re.test(e)}function We(){const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),s=b("borderColor"),n=b("borderRadius"),i=b("borderSpacing"),a=b("borderWidth"),d=b("contrast"),c=b("grayscale"),u=b("hueRotate"),g=b("invert"),m=b("gap"),y=b("gradientColorStops"),v=b("gradientColorStopPositions"),x=b("inset"),f=b("margin"),h=b("opacity"),w=b("padding"),G=b("saturate"),U=b("scale"),ee=b("sepia"),re=b("skew"),te=b("space"),oe=b("translate"),V=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",l,r],p=()=>[l,r],ne=()=>["",z,A],j=()=>["auto",R,l],se=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["solid","dashed","dotted","double","none"],ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",l],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[R,T],$=()=>[R,l];return{cacheSize:500,separator:":",theme:{colors:[N],spacing:[z,A],blur:["none","",S,l],brightness:I(),borderColor:[e],borderRadius:["none","","full",S,l],borderSpacing:p(),borderWidth:ne(),contrast:I(),grayscale:P(),hueRotate:$(),invert:P(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Me,A],inset:F(),margin:F(),opacity:I(),padding:p(),saturate:I(),scale:I(),sepia:P(),skew:$(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...se(),l]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,l]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",E,l]}],"grid-cols":[{"grid-cols":[N]}],"col-start-end":[{col:["auto",{span:["full",E,l]},l]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[N]}],"row-start-end":[{row:["auto",{span:[E,l]},l]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[te]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[te]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[N]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",R,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,A]}],"underline-offset":[{"underline-offset":["auto",z,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...se(),Pe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ne]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Te]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...L(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...L()]}],"outline-offset":[{"outline-offset":[z,l]}],"outline-w":[{outline:[z,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ne()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[z,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Ge]}],"shadow-color":[{shadow:[N]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...ie(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ie()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[g]}],saturate:[{saturate:[G]}],sepia:[{sepia:[ee]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[E,l]}],"translate-x":[{"translate-x":[oe]}],"translate-y":[{"translate-y":[oe]}],"skew-x":[{"skew-x":[re]}],"skew-y":[{"skew-y":[re]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,A,T]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const O=ve(We),Be=e=>{const{variant:r="primary",size:t="md",type:o="button",tag:s="button",className:n,children:i,disabled:a=!1,destructive:d=!1,icon:c=null,iconPosition:u="left",...g}=e,m="border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled",y={primary:"text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",secondary:"text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",outline:"text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",ghost:"text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",link:"text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"}[r],v=d&&!a?{primary:"bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",outline:"text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",ghost:"text-button-danger hover:bg-field-background-error",link:"text-button-danger hover:text-button-danger-secondary"}[r]:"",x={xs:"p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",sm:"p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",md:"p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",lg:"p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6"}[t];let f,h=null,w="";c&&(w="flex items-center justify-center gap-1",u==="left"?f=c:h=c);const G=s;return React.createElement(G,{type:o,className:O(w,m,x,y,v,n),disabled:a,...g},f,i,h)},Oe=e=>{const{value:r="",size:t="sm",className:o="",disabled:s=!1,inputProps:n,onChange:i=()=>{},error:a=!1,onError:d=()=>{}}=e;let c="rounded py-2 border bg-field-primary-background font-normal border-field-border";const u={sm:"px-3 rounded text-xs",md:"px-3 rounded-md text-sm",lg:"px-4 rounded-lg text-base"},g="hover:border-strong",m="focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2",y=a?"focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error":"",v=s?"border-field-border-disabled bg-field-background-disabled cursor-not-allowed":"";return React.createElement("textarea",{className:O(c,v,u[t],m,g,y,o),...n,disabled:s,onChange:i,onInvalid:d,value:r})};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D=(...e)=>e.filter((r,t,o)=>!!r&&o.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ve={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=C.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:i,...a},d)=>C.createElement("svg",{ref:d,...Ve,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:D("lucide",s),...a},[...i.map(([c,u])=>C.createElement(c,u)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(e,r)=>{const t=C.forwardRef(({className:o,...s},n)=>C.createElement(_e,{ref:n,iconNode:r,className:D(`lucide-${Ue(e)}`,o),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=Fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ze=e=>{const{variant:r="primary",size:t="md",border:o="subtle",type:s="icon",icon:n=React.createElement(qe,null),text:i,imageUrl:a,className:d}=e,c=s==="image"&&o==="none"?"subtle":o,u="rounded-full overflow-hidden flex items-center justify-center",g={white:"text-text-primary bg-background-primary",gray:"text-text-primary bg-background-secondary",primary:"text-text-on-color bg-background-brand",primaryLight:"text-text-primary bg-brand-background-50",dark:"text-text-on-color bg-button-secondary"}[r],m={xs:"w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs",sm:"w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm",md:"w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base",lg:"w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg"}[t],y={none:"",subtle:"border border-solid border-border-transparent-subtle",ring:"border-4 border-solid border-border-white"}[c],v=s==="image"?"bg-cover bg-center bg-no-repeat":"";return React.createElement("div",{className:O(u,s!=="image"&&g,m,y,v,d),style:s==="image"?{backgroundImage:`url(${a})`}:{}},s==="text"&&React.createElement("span",null,i),s==="icon"&&n)};k.Avatar=Ze,k.Button=Be,k.TextArea=Oe,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=force-ui.umd.js.map
