(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/_ui/node_modules/@mui/material/Alert/Alert.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutPropertiesLoose=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./packages/_ui/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./packages/_ui/node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./packages/_ui/node_modules/@mui/material/utils/capitalize.js"),Paper=__webpack_require__("./packages/_ui/node_modules/@mui/material/Paper/Paper.js"),generateUtilityClass=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getAlertUtilityClass(slot){return Object(generateUtilityClass.a)("MuiAlert",slot)}var _CloseIcon,Alert_alertClasses=Object(generateUtilityClasses.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),IconButton=__webpack_require__("./packages/_ui/node_modules/@mui/material/IconButton/IconButton.js"),createSvgIcon=__webpack_require__("./packages/_ui/node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SuccessOutlined=Object(createSvgIcon.a)(Object(jsx_runtime.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ReportProblemOutlined=Object(createSvgIcon.a)(Object(jsx_runtime.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ErrorOutline=Object(createSvgIcon.a)(Object(jsx_runtime.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),InfoOutlined=Object(createSvgIcon.a)(Object(jsx_runtime.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Close=Object(createSvgIcon.a)(Object(jsx_runtime.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const _excluded=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],AlertRoot=Object(styled.a)(Paper.a,{name:"MuiAlert",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`${ownerState.variant}${Object(capitalize.a)(ownerState.color||ownerState.severity)}`]]}})((({theme:theme,ownerState:ownerState})=>{const getColor="light"===theme.palette.mode?colorManipulator.b:colorManipulator.e,getBackgroundColor="light"===theme.palette.mode?colorManipulator.e:colorManipulator.b,color=ownerState.color||ownerState.severity;return Object(esm_extends.a)({},theme.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},color&&"standard"===ownerState.variant&&{color:getColor(theme.palette[color].light,.6),backgroundColor:getBackgroundColor(theme.palette[color].light,.9),[`& .${Alert_alertClasses.icon}`]:{color:"dark"===theme.palette.mode?theme.palette[color].main:theme.palette[color].light}},color&&"outlined"===ownerState.variant&&{color:getColor(theme.palette[color].light,.6),border:`1px solid ${theme.palette[color].light}`,[`& .${Alert_alertClasses.icon}`]:{color:"dark"===theme.palette.mode?theme.palette[color].main:theme.palette[color].light}},color&&"filled"===ownerState.variant&&{color:"#fff",fontWeight:theme.typography.fontWeightMedium,backgroundColor:"dark"===theme.palette.mode?theme.palette[color].dark:theme.palette[color].main})})),AlertIcon=Object(styled.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(props,styles)=>styles.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),AlertMessage=Object(styled.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(props,styles)=>styles.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),AlertAction=Object(styled.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(props,styles)=>styles.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),defaultIconMapping={success:Object(jsx_runtime.jsx)(SuccessOutlined,{fontSize:"inherit"}),warning:Object(jsx_runtime.jsx)(ReportProblemOutlined,{fontSize:"inherit"}),error:Object(jsx_runtime.jsx)(ErrorOutline,{fontSize:"inherit"}),info:Object(jsx_runtime.jsx)(InfoOutlined,{fontSize:"inherit"})},Alert_Alert=react.forwardRef((function Alert(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiAlert"}),{action:action,children:children,className:className,closeText:closeText="Close",color:color,icon:icon,iconMapping:iconMapping=defaultIconMapping,onClose:onClose,role:role="alert",severity:severity="success",variant:variant="standard"}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{color:color,severity:severity,variant:variant}),classes=(ownerState=>{const{variant:variant,color:color,severity:severity,classes:classes}=ownerState,slots={root:["root",`${variant}${Object(capitalize.a)(color||severity)}`,`${variant}`],icon:["icon"],message:["message"],action:["action"]};return Object(composeClasses.a)(slots,getAlertUtilityClass,classes)})(ownerState);return Object(jsx_runtime.jsxs)(AlertRoot,Object(esm_extends.a)({role:role,elevation:0,ownerState:ownerState,className:Object(clsx_m.a)(classes.root,className),ref:ref},other,{children:[!1!==icon?Object(jsx_runtime.jsx)(AlertIcon,{ownerState:ownerState,className:classes.icon,children:icon||iconMapping[severity]||defaultIconMapping[severity]}):null,Object(jsx_runtime.jsx)(AlertMessage,{ownerState:ownerState,className:classes.message,children:children}),null!=action?Object(jsx_runtime.jsx)(AlertAction,{ownerState:ownerState,className:classes.action,children:action}):null,null==action&&onClose?Object(jsx_runtime.jsx)(AlertAction,{ownerState:ownerState,className:classes.action,children:Object(jsx_runtime.jsx)(IconButton.a,{size:"small","aria-label":closeText,title:closeText,color:"inherit",onClick:onClose,children:_CloseIcon||(_CloseIcon=Object(jsx_runtime.jsx)(Close,{fontSize:"small"}))})}):null]}))}));__webpack_exports__.a=Alert_Alert},"./packages/_ui/node_modules/@mui/material/IconButton/IconButton.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutPropertiesLoose=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./packages/_ui/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./packages/_ui/node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./packages/_ui/node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./packages/_ui/node_modules/@mui/material/utils/capitalize.js"),generateUtilityClass=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getIconButtonUtilityClass(slot){return Object(generateUtilityClass.a)("MuiIconButton",slot)}var IconButton_iconButtonClasses=Object(generateUtilityClasses.a)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["edge","children","className","color","disabled","disableFocusRipple","size"],IconButtonRoot=Object(styled.a)(ButtonBase.a,{name:"MuiIconButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,"default"!==ownerState.color&&styles[`color${Object(capitalize.a)(ownerState.color)}`],ownerState.edge&&styles[`edge${Object(capitalize.a)(ownerState.edge)}`],styles[`size${Object(capitalize.a)(ownerState.size)}`]]}})((({theme:theme,ownerState:ownerState})=>Object(esm_extends.a)({textAlign:"center",flex:"0 0 auto",fontSize:theme.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(theme.vars||theme).palette.action.active,transition:theme.transitions.create("background-color",{duration:theme.transitions.duration.shortest})},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.active} / ${theme.vars.palette.action.hoverOpacity})`:Object(colorManipulator.a)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12})),(({theme:theme,ownerState:ownerState})=>Object(esm_extends.a)({},"inherit"===ownerState.color&&{color:"inherit"},"inherit"!==ownerState.color&&"default"!==ownerState.color&&Object(esm_extends.a)({color:(theme.vars||theme).palette[ownerState.color].main},!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:Object(colorManipulator.a)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===ownerState.size&&{padding:5,fontSize:theme.typography.pxToRem(18)},"large"===ownerState.size&&{padding:12,fontSize:theme.typography.pxToRem(28)},{[`&.${IconButton_iconButtonClasses.disabled}`]:{backgroundColor:"transparent",color:(theme.vars||theme).palette.action.disabled}}))),IconButton_IconButton=react.forwardRef((function IconButton(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiIconButton"}),{edge:edge=!1,children:children,className:className,color:color="default",disabled:disabled=!1,disableFocusRipple:disableFocusRipple=!1,size:size="medium"}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{edge:edge,color:color,disabled:disabled,disableFocusRipple:disableFocusRipple,size:size}),classes=(ownerState=>{const{classes:classes,disabled:disabled,color:color,edge:edge,size:size}=ownerState,slots={root:["root",disabled&&"disabled","default"!==color&&`color${Object(capitalize.a)(color)}`,edge&&`edge${Object(capitalize.a)(edge)}`,`size${Object(capitalize.a)(size)}`]};return Object(composeClasses.a)(slots,getIconButtonUtilityClass,classes)})(ownerState);return Object(jsx_runtime.jsx)(IconButtonRoot,Object(esm_extends.a)({className:Object(clsx_m.a)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled:disabled,ref:ref,ownerState:ownerState},other,{children:children}))}));__webpack_exports__.a=IconButton_IconButton},"./packages/_ui/node_modules/@mui/material/Paper/Paper.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutPropertiesLoose=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./packages/_ui/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./packages/_ui/node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClass=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getPaperUtilityClass(slot){return Object(generateUtilityClass.a)("MuiPaper",slot)}Object(generateUtilityClasses.a)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)},PaperRoot=Object(styled.a)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme:theme,ownerState:ownerState})=>{var _theme$vars$overlays;return Object(esm_extends.a)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&Object(esm_extends.a)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${Object(colorManipulator.a)("#fff",getOverlayAlpha(ownerState.elevation))}, ${Object(colorManipulator.a)("#fff",getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiPaper"}),{className:className,component:component="div",elevation:elevation=1,square:square=!1,variant:variant="elevation"}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{component:component,elevation:elevation,square:square,variant:variant}),classes=(ownerState=>{const{square:square,elevation:elevation,variant:variant,classes:classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return Object(composeClasses.a)(slots,getPaperUtilityClass,classes)})(ownerState);return Object(jsx_runtime.jsx)(PaperRoot,Object(esm_extends.a)({as:component,ownerState:ownerState,className:Object(clsx_m.a)(classes.root,className),ref:ref},other))}));__webpack_exports__.a=Paper_Paper},"./packages/_ui/node_modules/@mui/material/utils/createSvgIcon.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createSvgIcon}));var esm_extends=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./packages/_ui/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx_m=__webpack_require__("./packages/_ui/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./packages/_ui/node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./packages/_ui/node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./packages/_ui/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");function getSvgIconUtilityClass(slot){return Object(generateUtilityClass.a)("MuiSvgIcon",slot)}Object(generateUtilityClasses.a)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=Object(styled.a)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${Object(capitalize.a)(ownerState.color)}`],styles[`fontSize${Object(capitalize.a)(ownerState.fontSize)}`]]}})((({theme:theme,ownerState:ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon_SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiSvgIcon"}),{children:children,className:className,color:color="inherit",component:component="svg",fontSize:fontSize="medium",htmlColor:htmlColor,inheritViewBox:inheritViewBox=!1,titleAccess:titleAccess,viewBox:viewBox="0 0 24 24"}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{color:color,component:component,fontSize:fontSize,instanceFontSize:inProps.fontSize,inheritViewBox:inheritViewBox,viewBox:viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color:color,fontSize:fontSize,classes:classes}=ownerState,slots={root:["root","inherit"!==color&&`color${Object(capitalize.a)(color)}`,`fontSize${Object(capitalize.a)(fontSize)}`]};return Object(composeClasses.a)(slots,getSvgIconUtilityClass,classes)})(ownerState);return Object(jsx_runtime.jsxs)(SvgIconRoot,Object(esm_extends.a)({as:component,className:Object(clsx_m.a)(classes.root,className),ownerState:ownerState,focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref:ref},more,other,{children:[children,titleAccess?Object(jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon_SvgIcon.muiName="SvgIcon";var material_SvgIcon_SvgIcon=SvgIcon_SvgIcon;function createSvgIcon(path,displayName){const Component=(props,ref)=>Object(jsx_runtime.jsx)(material_SvgIcon_SvgIcon,Object(esm_extends.a)({"data-testid":`${displayName}Icon`,ref:ref},props,{children:path}));return Component.muiName=material_SvgIcon_SvgIcon.muiName,react.memo(react.forwardRef(Component))}}}]);