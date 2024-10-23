/*! For license information please see components-pagination-pagination-stories.44ca6500.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bsf_force_ui=self.webpackChunk_bsf_force_ui||[]).push([[7665],{"./src/components/pagination/pagination.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicPagination:function(){return BasicPagination},DisabledPagination:function(){return DisabledPagination},ExtraSmallPagination:function(){return ExtraSmallPagination},LargePagination:function(){return LargePagination},MediumPagination:function(){return MediumPagination},SmallPagination:function(){return SmallPagination},__namedExportsOrder:function(){return __namedExportsOrder}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/pagination/pagination.jsx");__webpack_exports__.default={title:"Molecules/Pagination",component:_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{name:"Size",description:"Defines the size variant of the pagination",control:{type:"select"},options:["xs","sm","md","lg"],table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{name:"Disabled",description:"If true, the pagination will be disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isActive:{name:"IsActive",description:"Defines if the page item is active. Passed to each Pagination Item.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},tag:{name:"Tag",description:"Specifies the HTML tag to be rendered for the pagination button. By default, it renders an `<a>` tag, but it can be customized to other tags like `<button>`, depending on the context or functionality required. Ensure that you pass the appropriate props (e.g., `href` for an `<a>` tag, `type` for a `<button>` tag) based on the tag you choose. These props will be forwarded to the underlying tag component.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"a"}}},icon:{name:"Icon",description:"Icon for the Pagination Next and Previous component.",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"<ChevronLeft/>, <ChevronRight/>"}}},className:{name:"ClassName",description:"Additional custom classes for pagination. Can be passed to every component.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:""}}}}};const Template=args=>((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{}),[args]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A,{size:args.size,disabled:args.disabled,className:args.className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Previous,{tag:args.tag,href:args.href,target:args.target,icon:args.icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:args.isActive,children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:!0,children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:args.isActive,children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Ellipsis,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:args.isActive,children:"7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:args.isActive,children:"8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Item,{tag:args.tag,href:args.href,target:args.target,isActive:args.isActive,children:"9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_jsx__WEBPACK_IMPORTED_MODULE_2__.A.Next,{tag:args.tag,href:args.href,target:args.target,icon:args.icon})]})})),BasicPagination=args=>Template({...args});BasicPagination.args={size:"lg",disabled:!1,className:"",isActive:!1,tag:"a",href:"#",target:"_self"};const ExtraSmallPagination=args=>Template({...args});ExtraSmallPagination.args={size:"xs",disabled:!1};const SmallPagination=args=>Template({...args});SmallPagination.args={size:"sm",disabled:!1};const MediumPagination=args=>Template({...args});MediumPagination.args={size:"md",disabled:!1};const LargePagination=args=>Template({...args});LargePagination.args={size:"lg",disabled:!1};const DisabledPagination=args=>Template({...args});DisabledPagination.args={size:"md",disabled:!0};const __namedExportsOrder=["BasicPagination","ExtraSmallPagination","SmallPagination","MediumPagination","LargePagination","DisabledPagination"];BasicPagination.parameters={...BasicPagination.parameters,docs:{...BasicPagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...BasicPagination.parameters?.docs?.source}}},ExtraSmallPagination.parameters={...ExtraSmallPagination.parameters,docs:{...ExtraSmallPagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...ExtraSmallPagination.parameters?.docs?.source}}},SmallPagination.parameters={...SmallPagination.parameters,docs:{...SmallPagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...SmallPagination.parameters?.docs?.source}}},MediumPagination.parameters={...MediumPagination.parameters,docs:{...MediumPagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...MediumPagination.parameters?.docs?.source}}},LargePagination.parameters={...LargePagination.parameters,docs:{...LargePagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...LargePagination.parameters?.docs?.source}}},DisabledPagination.parameters={...DisabledPagination.parameters,docs:{...DisabledPagination.parameters?.docs,source:{originalSource:"args => Template({\n  ...args\n})",...DisabledPagination.parameters?.docs?.source}}}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return createLucideIcon}});var react=__webpack_require__("./node_modules/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color:color="currentColor",size:size=24,strokeWidth:strokeWidth=2,absoluteStrokeWidth:absoluteStrokeWidth,className:className="",children:children,iconNode:iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref:ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className:className,...props},ref)=>{return(0,react.createElement)(Icon,{ref:ref,iconNode:iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/chevron-left.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ChevronLeft}});const ChevronLeft=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},"./node_modules/lucide-react/dist/esm/icons/chevron-right.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ChevronRight}});const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./src/components/button/button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_utilities_functions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utilities/functions.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{const{variant:variant="primary",size:size="md",type:type="button",tag:tag="button",className:className,children:children,disabled:disabled=!1,destructive:destructive=!1,icon:icon=null,iconPosition:iconPosition="left",loading:loading=!1,...rest}=props,loadingClass=loading?"opacity-50 disabled:cursor-not-allowed":"",variantClassNames={primary:"text-text-on-color bg-button-primary hover:bg-button-primary-hover outline-button-primary hover:outline-button-primary-hover disabled:bg-button-disabled disabled:outline-button-disabled",secondary:"text-text-on-color bg-button-secondary hover:bg-button-secondary-hover outline-button-secondary hover:outline-button-secondary-hover disabled:bg-button-disabled disabled:outline-button-disabled",outline:"text-button-tertiary-color outline-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:outline-border-subtle disabled:bg-button-tertiary disabled:outline-border-disabled",ghost:"text-text-primary bg-transparent outline-transparent hover:bg-button-tertiary-hover",link:"outline-none text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none"}?.[variant],destructiveClassNames=destructive&&!disabled?{primary:"bg-button-danger hover:bg-button-danger-hover outline-button-danger hover:outline-button-danger-hover",outline:"text-button-danger outline outline-1 outline-button-danger hover:outline-button-danger bg-button-tertiary hover:bg-field-background-error",ghost:"text-button-danger hover:bg-field-background-error",link:"text-button-danger hover:text-button-danger-secondary"}?.[variant]:"",sizeClassNames={xs:"p-1 rounded [&>svg]:size-4",sm:"p-2 rounded [&>svg]:size-4 gap-0.5",md:"p-2.5 rounded-md text-sm [&>svg]:size-5 gap-1",lg:"p-3 rounded-lg text-base [&>svg]:size-6 gap-1"}?.[size];let iconLeft,iconRight=null,iconClass="";icon&&(iconClass="flex items-center justify-center","left"===iconPosition?iconLeft=icon:iconRight=icon);const Tag=tag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag,{ref:ref,type:type,className:(0,_utilities_functions__WEBPACK_IMPORTED_MODULE_2__.cn)(iconClass,"outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled",sizeClassNames,variantClassNames,destructiveClassNames,loadingClass,className),disabled:disabled,...rest,children:[iconLeft,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"px-1",children:children}),iconRight]})}));__webpack_exports__.A=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button"}},"./src/components/button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return _button_jsx__WEBPACK_IMPORTED_MODULE_0__.A}});var _button_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/button.jsx")},"./src/components/pagination/pagination.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return pagination}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),functions=__webpack_require__("./src/utilities/functions.js"),chevron_left=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-left.js"),chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js");const sizeClassNames={xs:{general:"px-2 text-xs",ellipse:"px-1.5 text-xs",icon:"px-1 text-xs"},sm:{general:"px-3 text-xs",ellipse:"px-2.5 text-xs",icon:"px-2 text-xs"},md:{general:"px-4 text-sm",ellipse:"px-2.5 text-sm",icon:"px-2.5 text-sm"},lg:{general:"px-5 text-base",ellipse:"px-4 text-base",icon:"px-3 text-base"}},disabledClassNames_general="group disabled:border-field-border-disabled opacity-50",disabledClassNames_icon="group-disabled:text-icon-disabled",disabledClassNames_text="group-disabled:text-field-color-disabled";var components_button=__webpack_require__("./src/components/button/index.js");const PageContext=(0,react.createContext)(),usePageContext=()=>(0,react.useContext)(PageContext),Pagination=({size:size="sm",disabled:disabled=!1,children:children,className:className,...props})=>(0,jsx_runtime.jsx)(PageContext.Provider,{value:{size:size,disabled:disabled},children:(0,jsx_runtime.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,functions.cn)("flex w-full justify-center box-border m-0",className),...props,children:children})});Pagination.displayName="Pagination";const PaginationContent=(0,react.forwardRef)((({className:className,...props},ref)=>(0,jsx_runtime.jsx)("ul",{ref:ref,className:(0,functions.cn)("m-0 p-0 w-full flex justify-center flex-row items-center gap-1","list-none",className),...props})));PaginationContent.displayName="Pagination.Content";const PaginationItem=(0,react.forwardRef)((({isActive:isActive=!1,className:className,children:children,...props},ref)=>{const{disabled:disabled}=usePageContext();return(0,jsx_runtime.jsx)("li",{ref:ref,tabIndex:0,className:(0,functions.cn)("flex",disabled&&disabledClassNames_general),children:(0,jsx_runtime.jsx)(PaginationButton,{isActive:isActive,disabled:disabled,className:className,...props,children:children})})}));PaginationItem.displayName="Pagination.Item";const PaginationButton=({icon:icon=null,isActive:isActive=!1,tag:tag="a",children:children,className:className,...props})=>{const{size:size,disabled:disabled}=usePageContext();return(0,jsx_runtime.jsx)(components_button.A,{tag:tag,size:size,variant:"ghost",className:(0,functions.cn)("no-underline bg-transparent p-0 m-0 border-none","flex justify-center items-center rounded text-button-secondary","focus:outline focus:outline-1 focus:outline-border-subtle focus:bg-button-tertiary-hover",sizeClassNames[size].general,!disabled&&isActive&&"text-button-primary active:text-button-primary bg-brand-background-50",disabled&&[disabledClassNames_general,disabledClassNames_icon,disabledClassNames_text,"focus:ring-transparent cursor-not-allowed"],className),disabled:disabled,icon:icon,...props,children:children})},PaginationPrevious=({icon:icon=(0,jsx_runtime.jsx)(chevron_left.A,{}),...props})=>{const{size:size,disabled:disabled}=usePageContext();return(0,jsx_runtime.jsx)("li",{tabIndex:0,className:(0,functions.cn)("flex",disabled&&disabledClassNames_general),children:(0,jsx_runtime.jsx)(PaginationButton,{icon:icon,"aria-label":"Go to previous page",className:sizeClassNames[size].icon,...props})})};PaginationPrevious.displayName="Pagination.Previous";const PaginationNext=({icon:icon=(0,jsx_runtime.jsx)(chevron_right.A,{}),...props})=>{const{size:size,disabled:disabled}=usePageContext();return(0,jsx_runtime.jsx)("li",{tabIndex:0,className:(0,functions.cn)("flex",disabled&&disabledClassNames_general),children:(0,jsx_runtime.jsx)(PaginationButton,{icon:icon,"aria-label":"Go to next page",className:sizeClassNames[size].icon,...props})})};PaginationNext.displayName="Pagination.Next";const PaginationEllipsis=props=>{const{size:size,disabled:disabled}=usePageContext();return(0,jsx_runtime.jsx)("li",{tabIndex:0,className:(0,functions.cn)("flex",disabled&&disabledClassNames_general),children:(0,jsx_runtime.jsx)("span",{className:(0,functions.cn)(sizeClassNames[size].ellipse,disabled&&disabledClassNames_general),...props,children:"..."})})};PaginationEllipsis.displayName="Pagination.Ellipsis",Pagination.Content=PaginationContent,Pagination.Item=PaginationItem,Pagination.Previous=PaginationPrevious,Pagination.Next=PaginationNext,Pagination.Ellipsis=PaginationEllipsis;var pagination=Pagination;Pagination.__docgenInfo={description:"",methods:[{name:"Previous",docblock:null,modifiers:["static"],params:[{name:"{ icon = <ChevronLeft />, ...props }",optional:!1,type:null}],returns:null},{name:"Next",docblock:null,modifiers:["static"],params:[{name:"{ icon = <ChevronRight />, ...props }",optional:!1,type:null}],returns:null},{name:"Ellipsis",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null}],displayName:"Pagination",props:{size:{defaultValue:{value:"'sm'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/utilities/functions.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{HK:function(){return getGapClass},OK:function(){return callAll},cn:function(){return cn},pi:function(){return columnClasses}});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const cn=(...classNames)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(...classNames)),callAll=(...fns)=>(...args)=>fns.forEach((fn=>fn?.(...args))),getGapClass=gap=>{const gapClasses={0:"gap-0",xxs:"gap-1",xs:"gap-2",sm:"gap-3",md:"gap-4",lg:"gap-5",xl:"gap-6","2xl":"gap-8"};return gapClasses[gap]||gapClasses.md},columnClasses={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"}}}]);