(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./packages/data/AsyncTester/stories/AsyncTester.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var build=__webpack_require__("./packages/data/AsyncTester/node_modules/@useweb/use-async/build/index.js"),build_default=__webpack_require__.n(build),fetching_ui_build=__webpack_require__("./packages/data/AsyncTester/node_modules/@useweb/fetching-ui/build/index.js"),fetching_ui_build_default=__webpack_require__.n(fetching_ui_build),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AsyncTester(props){var func=build_default()(props);return Object(jsx_runtime.jsx)(fetching_ui_build_default.a,{onClick:function onClick(){return func.exec()},loading:func.loading,error:func.error,result:func.result})}AsyncTester.displayName="AsyncTester";try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"(result: any) => void"}},autoExec:{defaultValue:null,description:"",name:"autoExec",required:!1,type:{name:"boolean"}},defaultData:{defaultValue:null,description:"",name:"defaultData",required:!1,type:{name:"any"}},onResult:{defaultValue:null,description:"",name:"onResult",required:!1,type:{name:"(result: any) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(error: any) => void"}},onLoading:{defaultValue:null,description:"",name:"onLoading",required:!1,type:{name:"(loading: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/data/AsyncTester/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"packages/data/AsyncTester/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}var component_AsyncTester=AsyncTester;try{component_AsyncTester.displayName="AsyncTester",component_AsyncTester.__docgenInfo={description:"",displayName:"AsyncTester",props:{fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"(result: any) => void"}},autoExec:{defaultValue:null,description:"",name:"autoExec",required:!1,type:{name:"boolean"}},defaultData:{defaultValue:null,description:"",name:"defaultData",required:!1,type:{name:"any"}},onResult:{defaultValue:null,description:"",name:"onResult",required:!1,type:{name:"(result: any) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(error: any) => void"}},onLoading:{defaultValue:null,description:"",name:"onLoading",required:!1,type:{name:"(loading: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/data/AsyncTester/stories/component.tsx#AsyncTester"]={docgenInfo:component_AsyncTester.__docgenInfo,name:"AsyncTester",path:"packages/data/AsyncTester/stories/component.tsx#AsyncTester"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");__webpack_exports__.default={title:"Data/AsyncTester",args:{fn:function fn(){return"this is the result"}},parameters:{docs:{page:function Docs(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(esm.e,{}),Object(jsx_runtime.jsx)(esm.b,{children:"This is a AsyncTester"}),Object(jsx_runtime.jsx)(esm.d,{}),Object(jsx_runtime.jsx)(esm.a,{story:esm.c})]})}}}};var AsyncTester_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)(component_AsyncTester,Object.assign({},args))})},Default={render:function render(args){return Object(jsx_runtime.jsx)(AsyncTester_stories_Template,Object.assign({},args))}}}}]);