/*! For license information please see stories.bcd28b96.iframe.bundle.js.LICENSE.txt */
  ${d.default}
  box-sizing: border-box;
  ${({size:o})=>o&&`\n  width: ${o};\n  height: ${o};\n  `}

  ${({fullscreen:o})=>o&&"\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  "}
  
  ${({sticky:o})=>o&&"\n    top: 0; \n    position: sticky; \n  "}
`,B=(0,p.memo)((0,p.forwardRef)((({children:o,name:t,styles:r={},...e},x)=>p.default.createElement(f,{ref:x,styles:{display:"grid",...r},"data-box-name":t,"data-cy":t,...e},o))))},"./packages/dataDisplay/Carousel/node_modules/@useweb/decamelize/build/index.js":function(module,exports){var a=Object.defineProperty;function i(e,r="-"){return e?e.replace(/([a-z\d])([A-Z])/g,`$1${r}$2`).replace(/([A-Z]+)([A-Z][a-z\d]+)/g,`$1${r}$2`).toLowerCase():console.error(`str is ${e} , add string as first parameter`)}((e,r)=>{for(var t in(e=>{a(e,"__esModule",{value:!0})})(e),r)a(e,t,{get:r[t],enumerable:!0})})(exports,{default:()=>i,testValue:()=>$});var $="marginRight"},"./packages/dataDisplay/Carousel/node_modules/@useweb/icon/build/index.js":function(module,exports,__webpack_require__){var A=Object.create,l=Object.defineProperty,L=Object.getOwnPropertyDescriptor,U=Object.getOwnPropertyNames,V=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,g=r=>l(r,"__esModule",{value:!0}),c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),s=r=>((r,e,t)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let a of U(e))!H.call(r,a)&&"default"!==a&&l(r,a,{get:()=>e[a],enumerable:!(t=L(e,a))||t.enumerable});return r})(g(l(null!=r?A(V(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),$=c(((rr,k)=>{"use strict";k.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"})),S=c(((er,T)=>{"use strict";var K=$();function x(){}function w(){}w.resetWarningCache=x,T.exports=function(){function r(a,h,v,y,m,i){if(i!==K){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function e(){return r}r.isRequired=r;var t={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:w,resetWarningCache:x};return t.PropTypes=t,t}})),O=c(((ar,P)=>{P.exports=S()()}));((r,e)=>{for(var t in g(r),e)l(r,t,{get:e[t],enumerable:!0})})(exports,{default:()=>M});var n=s(__webpack_require__("./node_modules/react/index.js")),u=s(__webpack_require__("./packages/dataDisplay/Carousel/node_modules/styled-components/dist/styled-components.browser.esm.js")),b=u.default.div`
  text-align: center;
  width: fit-content;
  display: grid;
  user-select: none;
  cursor: pointer;
  align-content: space-between;

  ${({label:r})=>r&&"    \n  grid-gap: var(--spacing-xxs);\n  justify-items: center;\n  "};
`,f=u.default.div`
  display: flex;
  transition: 0.3s;
  border-radius: 100px;
  animation-timing-function: ease-out;
  padding: ${({backgroundSize:r})=>r?`${r}`:"var(--spacing-xs, 10px)"} ;  
  
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  
  /* backgroundColor */
  ${({backgroundColor:r})=>!!r&&`\n    background-color: var(--color-${r});    \n    border: 2px solid var(--color-${r});\n\n    &:active {\n    background-color: var(--color-${r});   \n    border: 2px solid var(--color-${r});\n    }\n\n    @media (hover: hover) {\n    &:hover {\n    background-color: var(--color-${r});   \n    border: 2px solid var(--color-${r});\n    }\n}\n  `}
 
     /* Outlined */
    ${({outlined:r,color:e})=>r&&`\n  border: 2px solid var(--color-${e}Darker);\n\n    &:active {\n    background-color: var(--color-${e}Background);   \n    border: 2px solid var(--color-${e}Darker);\n    }\n\n    @media (hover: hover) {\n    &:hover {\n    background-color: var(--color-${e}Background);   \n    border: 2px solid var(--color-${e}Darker);\n    }\n  `}

      /* Plain */
      ${({plain:r})=>r&&"     \n        width: auto;\n        height: auto;\n        padding: 0;\n        \n  &:active {\n    background-color: transparent;\n    border: none;    \n    }\n\n    @media (hover: hover) {\n      &:hover {\n    background-color: transparent;\n    border: none;    \n    }\n    }\n\n  "}

  svg {
    transition: 0.2s;
    color: ${({color:r,dark:e})=>r&&!e?`var(--color-${r})`:r&&e?`var(--color-${r}Darker)`:"var(--color-white)"};
    fill: ${({color:r,dark:e})=>r&&!e?`var(--color-${r})`:r&&e?`var(--color-${r}Darker)`:"var(--color-white)"};
    
    align-self: center;
    ${({width:r,size:e})=>`width: ${r||e};`}
    ${({height:r,size:e})=>`height: ${r||e};\n    `}
     /*  No Background */
  ${({noBackground:r})=>r&&"    \n   width: auto;\n   "}

       /* Outlined */
       ${({outlined:r,color:e})=>r&&`\n         fill: var(--color-${e}Darker);\n  `}

     /* Stroke */
     ${({color:r,isStroke:e})=>e&&`\n     fill: none;\n     stroke: var(--color-${r});     \n     `}


//# sourceMappingURL=stories.bcd28b96.iframe.bundle.js.map