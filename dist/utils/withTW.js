!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/withTW.[file].js"]=e():r["utils/withTW.[file].js"]=e()}("undefined"!=typeof self?self:this,(function(){return r={709:function(r,e,o){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(r)}function n(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,t)}return o}function a(r,e,o){return(e=function(r){var e=function(r){if("object"!=t(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"==t(e)?e:e+""}(e))in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}var i=o(744),F=o(780);r.exports=function(r){return i(F,function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}({},r))}},780:function(r){r.exports={content:["node_modules/@bsf/force-ui/dist/force-ui.js"],theme:{extend:{colors:{"brand-background-50":"#EFF6FF","brand-background-hover-100":"#DBEAFE","brand-200":"#BFDBFE","brand-border-300":"#93C5FD","brand-400":"#60A5FA","brand-500":"#3B82F6","brand-primary-600":"#2563EB","brand-hover-700":"#1D4ED8","brand-800":"#1E40AF","brand-900":"#1E3A8A","brand-text-950":"#172554","background-primary":"#FFFFFF","background-secondary":"#F3F4F6","background-inverse":"#111827","background-brand":"#2563EB","field-primary-background":"#F9FAFB","field-secondary-background":"#FFFFFF","field-primary-hover":"#F3F4F6","field-secondary-hover":"#F3F4F6","field-dropzone-background":"#FFFFFF","field-border":"#E5E7EB","field-dropzone-background-hover":"#F9FAFB","field-dropzone-color":"#2563EB","field-label":"#111827","field-input":"#111827","field-helper":"#9CA3AF","field-background-disabled":"#F9FAFB","field-color-disabled":"#D1D5DB","field-placeholder":"#6B7280","field-border-disabled":"#F3F4F6","field-color-error":"#DC2626","field-border-error":"#FECACA","field-background-error":"#FEF2F2","field-required":"#DC2626","border-interactive":"#2563EB","border-subtle":"#E5E7EB","border-strong":"#6B7280","border-inverse":"#374151","border-disabled":"#E5E7EB","border-muted":"#E5E7EB","border-error":"#DC2626","border-transparent-subtle":"#37415114","border-white":"#FFFFFF","text-primary":"#111827","text-secondary":"#4B5563","text-tertiary":"#9CA3AF","text-on-color":"#FFFFFF","text-error":"#DC2626","text-error-inverse":"#F87171","text-inverse":"#FFFFFF","text-disabled":"#D1D5DB","text-on-button-disabled":"#9CA3AF","link-primary":"#2563EB","link-primary-hover":"#1D4ED8","link-inverse":"#38BDF8","link-visited":"#7C3AED","link-visited-inverse":"#A78BFA","link-inverse-hover":"#7DD3FC","icon-primary":"#111827","icon-secondary":"#4B5563","icon-on-color":"#FFFFFF","icon-inverse":"#FFFFFF","icon-interactive":"#2563EB","icon-on-color-disabled":"#9CA3AF","icon-disabled":"#D1D5DB","support-error":"#DC2626","support-success":"#16A34A","support-warning":"#EAB308","support-info":"#0284C7","support-error-inverse":"#F87171","support-success-inverse":"#4ADE80","support-warning-inverse":"#FDE047","support-info-inverse":"#38BDF8","button-primary":"#2563EB","button-primary-hover":"#1D4ED8","button-secondary":"#1F2937","button-secondary-hover":"#374151","button-tertiary":"#FFFFFF","button-tertiary-hover":"#F9FAFB","button-danger":"#DC2626","button-danger-secondary":"#DC2626","button-danger-hover":"#B91C1C","button-disabled":"#F3F4F6","button-tertiary-border":"#E5E7EB","button-tertiary-color":"#111827",focus:"#2563EB","focus-inset":"#FFFFFF","focus-inverse":"#38BDF8","focus-inverse-inset":"#111827","focus-error":"#DC2626","focus-border":"#BFDBFE","focus-error-border":"#FECACA","misc-highlight":"#BFDBFE","misc-overlay":"#11182780","misc-skeleton-background":"#F3F4F6","misc-skeleton-element":"#D1D5DB","misc-popup-button-hover":"#1118270D","misc-tab-item-hover":"#E5E7EB","misc-dropdown-hover":"#F3F4F6","misc-loader-base":"#1118270D","misc-loader-color":"#2563EB","misc-progress-background":"#E5E7EB","badge-background-gray":"#F9FAFB","badge-color-gray":"#1F2937","badge-hover-gray":"#F3F4F6","badge-border-gray":"#E5E7EB","badge-background-red":"#FEF2F2","badge-color-red":"#B91C1C","badge-hover-red":"#FEE2E2","badge-border-red":"#FECACA","badge-background-yellow":"#FEFCE8","badge-color-yellow":"#A16207","badge-hover-yellow":"#FEF9C3","badge-border-yellow":"#FEF08A","badge-hover-green":"#DCFCE7","badge-border-green":"#BBF7D0","badge-background-green":"#F0FDF4","badge-color-green":"#15803D","badge-background-sky":"#F0F9FF","badge-color-sky":"#0369A1","badge-hover-sky":"#E0F2FE","badge-border-sky":"#BAE6FD","badge-background-disabled":"#F3F4F6","badge-color-disabled":"#D1D5DB","badge-hover-disabled":"#F3F4F6","badge-border-disabled":"#E5E7EB","alert-background-neutral":"#FFFFFF","alert-border-neutral":"#E5E7EB","alert-background-danger":"#FEF2F2","alert-border-danger":"#FECACA","alert-background-warning":"#FEFCE8","alert-border-warning":"#FEF08A","alert-background-green":"#F0FDF4","alert-border-green":"#BBF7D0","alert-background-info":"#F0F9FF","alert-border-info":"#BAE6FD","tab-background":"#F3F4F6","tab-border":"#E5E7EB","tooltip-background-light":"#FFFFFF","tooltip-background-dark":"#111827","toggle-off":"#E5E7EB","toggle-on":"#2563EB","toggle-dial-background":"#FFFFFF","toggle-off-hover":"#D1D5DB","toggle-off-border":"#D1D5DB","toggle-on-hover":"#3B82F6","toggle-on-border":"#60A5FA","toggle-off-disabled":"#F3F4F6"},width:{"1/7":"14.2857143%","1/8":"12.5%","1/9":"11.1111111%","1/10":"10%","1/11":"9.0909091%","1/12":"8.3333333%"},boxShadow:{"soft-shadow-sm":"0px 6px 32px -12px rgba(149, 160, 178, 0.12)","soft-shadow":"0px 8px 32px -12px rgba(149, 160, 178, 0.16)","soft-shadow-md":"0px 10px 32px -12px rgba(149, 160, 178, 0.2)","soft-shadow-lg":"0px 12px 32px -12px rgba(149, 160, 178, 0.24)","soft-shadow-xl":"0px 16px 32px -12px rgba(149, 160, 178, 0.32)","soft-shadow-2xl":"0px 24px 64px -12px rgba(149, 160, 178, 0.32)"},fontSize:{tiny:"0.625rem"}}},plugins:[],corePlugins:{preflight:!1}}},744:function(r){"use strict";var e=function(r){return function(r){return!!r&&"object"==typeof r}(r)&&!function(r){var e=Object.prototype.toString.call(r);return"[object RegExp]"===e||"[object Date]"===e||function(r){return r.$$typeof===o}(r)}(r)},o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(r,e){return!1!==e.clone&&e.isMergeableObject(r)?F((o=r,Array.isArray(o)?[]:{}),r,e):r;var o}function n(r,e,o){return r.concat(e).map((function(r){return t(r,o)}))}function a(r){return Object.keys(r).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter((function(e){return Object.propertyIsEnumerable.call(r,e)})):[]}(r))}function i(r,e){try{return e in r}catch(r){return!1}}function F(r,o,d){(d=d||{}).arrayMerge=d.arrayMerge||n,d.isMergeableObject=d.isMergeableObject||e,d.cloneUnlessOtherwiseSpecified=t;var b=Array.isArray(o);return b===Array.isArray(r)?b?d.arrayMerge(r,o,d):function(r,e,o){var n={};return o.isMergeableObject(r)&&a(r).forEach((function(e){n[e]=t(r[e],o)})),a(e).forEach((function(a){(function(r,e){return i(r,e)&&!(Object.hasOwnProperty.call(r,e)&&Object.propertyIsEnumerable.call(r,e))})(r,a)||(i(r,a)&&o.isMergeableObject(e[a])?n[a]=function(r,e){if(!e.customMerge)return F;var o=e.customMerge(r);return"function"==typeof o?o:F}(a,o)(r[a],e[a],o):n[a]=t(e[a],o))})),n}(r,o,d):t(o,d)}F.all=function(r,e){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce((function(r,o){return F(r,o,e)}),{})};var d=F;r.exports=d}},e={},function o(t){var n=e[t];if(void 0!==n)return n.exports;var a=e[t]={exports:{}};return r[t](a,a.exports,o),a.exports}(709);var r,e}));