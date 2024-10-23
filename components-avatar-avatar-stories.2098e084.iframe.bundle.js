/*! For license information please see components-avatar-avatar-stories.2098e084.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bsf_force_ui=self.webpackChunk_bsf_force_ui||[]).push([[4087],{"./src/components/avatar/avatar.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Gray:function(){return Gray},Primary:function(){return Primary},PrimaryLight:function(){return PrimaryLight},URLAvatar:function(){return URLAvatar},White:function(){return White},__namedExportsOrder:function(){return __namedExportsOrder}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),lucide_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/user.js"),lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/bell.js"),_avatar_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/avatar/avatar.jsx");__webpack_exports__.default={title:"Atoms/Avatar",component:_avatar_jsx__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{name:"Variant",description:"Defines the style variant of the avatar.",control:"select",options:["primary","dark","primaryLight","white","gray"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{name:"Size",description:"Defines the size of the avatar.",control:"select",options:["xxs","xs","sm","md","lg"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}},border:{name:"Border",description:"Defines the border of the avatar.",control:"select",options:["subtle","none","ring"],table:{type:{summary:"string"},defaultValue:{summary:"subtle"}}},className:{name:"Class Name",description:"Defines the extra classes",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},url:{name:"URL",description:"The URL of the Avatar image",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}},children:{name:"Children",control:"object",table:{type:{summary:"string"},defaultValue:{summary:""}}}}};const Primary={args:{variant:"primary",children:"Avatar"}},White={args:{variant:"white",children:"Avatar"}},Gray={args:{variant:"gray",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,{})}},PrimaryLight={args:{variant:"primaryLight",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{})}},Dark={args:{variant:"dark",children:"Avatar"}},URLAvatar={args:{variant:"primary",url:"https://0.gravatar.com/avatar/05d8f4a5468440075f82adcea83d5cc3?s=128&d=mm&r=g"}},__namedExportsOrder=["Primary","White","Gray","PrimaryLight","Dark","URLAvatar"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    children: 'Avatar'\n  }\n}",...Primary.parameters?.docs?.source}}},White.parameters={...White.parameters,docs:{...White.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'white',\n    children: 'Avatar'\n  }\n}",...White.parameters?.docs?.source}}},Gray.parameters={...Gray.parameters,docs:{...Gray.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'gray',\n    children: <User />\n  }\n}",...Gray.parameters?.docs?.source}}},PrimaryLight.parameters={...PrimaryLight.parameters,docs:{...PrimaryLight.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primaryLight',\n    children: <Bell />\n  }\n}",...PrimaryLight.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'dark',\n    children: 'Avatar'\n  }\n}",...Dark.parameters?.docs?.source}}},URLAvatar.parameters={...URLAvatar.parameters,docs:{...URLAvatar.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    url: 'https://0.gravatar.com/avatar/05d8f4a5468440075f82adcea83d5cc3?s=128&d=mm&r=g'\n  }\n}",...URLAvatar.parameters?.docs?.source}}}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return createLucideIcon}});var react=__webpack_require__("./node_modules/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color:color="currentColor",size:size=24,strokeWidth:strokeWidth=2,absoluteStrokeWidth:absoluteStrokeWidth,className:className="",children:children,iconNode:iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref:ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className:className,...props},ref)=>{return(0,react.createElement)(Icon,{ref:ref,iconNode:iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/bell.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Bell}});const Bell=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]])},"./node_modules/lucide-react/dist/esm/icons/user.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return User}});const User=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},"./src/components/avatar/avatar.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_utilities_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utilities/functions.js");const Avatar=props=>{const{variant:variant="primary",size:size="md",border:border="subtle",url:url="",children:children,className:className}=props,effectiveBorder=url&&"none"===border?"subtle":border,variantClasses={white:"text-text-primary bg-background-primary",gray:"text-text-primary bg-background-secondary",primary:"text-text-on-color bg-background-brand",primaryLight:"text-text-primary bg-brand-background-50",dark:"text-text-on-color bg-button-secondary"}?.[variant],sizeClasses={xxs:"size-5 [&>svg]:size-3 text-xs",xs:"size-6 [&>svg]:size-4 text-sm",sm:"size-8 [&>svg]:size-5 text-base",md:"size-10 [&>svg]:size-6 text-lg",lg:"size-12 [&>svg]:size-12 text-lg"}?.[size],borderClasses={none:"",subtle:"ring-1 ring-border-transparent-subtle",ring:"ring ring-border-subtle"}?.[effectiveBorder],contentClasses=url?"bg-cover bg-center":"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_1__.cn)("rounded-full overflow-hidden flex items-center justify-center",!url&&variantClasses,sizeClasses,borderClasses,contentClasses,className),style:url?{backgroundImage:`url(${url})`}:{},children:children?"string"==typeof children?children?.[0]?.toUpperCase():children:null})};__webpack_exports__.A=Avatar,Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar"}},"./src/utilities/functions.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{HK:function(){return getGapClass},OK:function(){return callAll},cn:function(){return cn},pi:function(){return columnClasses}});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const cn=(...classNames)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(...classNames)),callAll=(...fns)=>(...args)=>fns.forEach((fn=>fn?.(...args))),getGapClass=gap=>{const gapClasses={0:"gap-0",xxs:"gap-1",xs:"gap-2",sm:"gap-3",md:"gap-4",lg:"gap-5",xl:"gap-6","2xl":"gap-8"};return gapClasses[gap]||gapClasses.md},columnClasses={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"}}}]);