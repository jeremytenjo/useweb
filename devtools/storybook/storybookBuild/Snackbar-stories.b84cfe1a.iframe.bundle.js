(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./packages/_ui/src/feedback/Snackbar/stories/Snackbar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Example",(function(){return Example}));var react=__webpack_require__("./node_modules/react/index.js"),Snackbar=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./packages/_ui/node_modules/@mui/material/Snackbar/Snackbar.js")),Alert=__webpack_require__("./packages/_ui/node_modules/@mui/material/Alert/Alert.js"),Slide=__webpack_require__("./packages/_ui/node_modules/@mui/material/Slide/Slide.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SnackbarContext=Object(react.createContext)({show:function show(){return null},hide:function hide(){return null}}),src_SnackbarProvider=function SnackbarProvider(_ref){var children=_ref.children,defaultAlertAnchorOrigin={vertical:"bottom",horizontal:"center"},_useState2=_slicedToArray(Object(react.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(""),2),message=_useState4[0],setMessage=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(3e3),2),autoHideDuration=_useState6[0],setAutoHideDuration=_useState6[1],_useState8=_slicedToArray(Object(react.useState)("info"),2),severity=_useState8[0],setSeverity=_useState8[1],_useState10=_slicedToArray(Object(react.useState)(),2),alertAction=_useState10[0],setAlertAction=_useState10[1],_useState12=_slicedToArray(Object(react.useState)(defaultAlertAnchorOrigin),2),alertAnchorOrigin=_useState12[0],setAlertAnchorOrigin=_useState12[1],hide=function hide(){setOpen(!1)};return Object(jsx_runtime.jsxs)(SnackbarContext.Provider,{value:{show:function show(_ref2){var message=_ref2.message,_ref2$autoHideDuratio=_ref2.autoHideDuration,autoHideDuration=void 0===_ref2$autoHideDuratio?3e3:_ref2$autoHideDuratio,_ref2$severity=_ref2.severity,severity=void 0===_ref2$severity?"info":_ref2$severity,_ref2$anchorOrigin=_ref2.anchorOrigin,anchorOrigin=void 0===_ref2$anchorOrigin?defaultAlertAnchorOrigin:_ref2$anchorOrigin,disableAutoHide=_ref2.disableAutoHide,action=_ref2.action;setMessage(message),setSeverity(severity),setAutoHideDuration(autoHideDuration),setAlertAnchorOrigin(anchorOrigin),setAlertAction(action),disableAutoHide&&setAutoHideDuration(null),setOpen(!0)},hide:hide},children:[children,Object(jsx_runtime.jsx)(Snackbar.a,{open:open,autoHideDuration:autoHideDuration,onClose:hide,TransitionComponent:Slide.a,anchorOrigin:alertAnchorOrigin,children:Object(jsx_runtime.jsx)(Alert.a,{severity:severity,action:alertAction,children:message})})]})};src_SnackbarProvider.displayName="SnackbarProvider";var src=function useSnackbar(){return Object(react.useContext)(SnackbarContext)};try{src_SnackbarProvider.displayName="SnackbarProvider",src_SnackbarProvider.__docgenInfo={description:"",displayName:"SnackbarProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/_ui/src/feedback/Snackbar/src/index.tsx#SnackbarProvider"]={docgenInfo:src_SnackbarProvider.__docgenInfo,name:"SnackbarProvider",path:"packages/_ui/src/feedback/Snackbar/src/index.tsx#SnackbarProvider"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Feedback/Snackbar",args:{}};var Snackbar_stories_Provider=function Provider(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(src_SnackbarProvider,{children:children})};Snackbar_stories_Provider.displayName="Provider";var Snackbar_stories_Child=function Child(){var snackbar=src();return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("button",{onClick:function trigger(){snackbar.show({message:"This is a snackbar"})},children:"Show"})})};Snackbar_stories_Child.displayName="Child";var Example={render:function render(){return Object(jsx_runtime.jsx)(Snackbar_stories_Provider,{children:Object(jsx_runtime.jsx)(Snackbar_stories_Child,{})})}}}}]);