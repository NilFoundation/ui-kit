"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[6138],{"./src/components/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hf:()=>ArrowUpIcon.Z,FB:()=>CancelIcon.Z,VA:()=>CaretDownIcon.Z,y8:()=>CaretUpIcon.Z,v4:()=>ChevronDownIcon.Z,g8:()=>ChevronUpIcon.Z,Tw:()=>CloseIcon.Z,cV:()=>CompleteIcon.Z,TI:()=>icons_CopyIcon,h_:()=>HeartIcon.Z,sz:()=>InfoIcon.Z,wX:()=>LoginIcon.Z,R0:()=>LogoutIcon.Z,Oq:()=>MenuIcon.Z,$n:()=>ResizeIcon.Z,W1:()=>SearchIcon.Z,b3:()=>SeparatorIcon.Z,aN:()=>WarningIcon.Z});var CompleteIcon=__webpack_require__("./src/components/icons/CompleteIcon.tsx"),InfoIcon=__webpack_require__("./src/components/icons/InfoIcon.tsx"),CancelIcon=__webpack_require__("./src/components/icons/CancelIcon.tsx"),WarningIcon=__webpack_require__("./src/components/icons/WarningIcon.tsx"),HeartIcon=__webpack_require__("./src/components/icons/HeartIcon.tsx"),SearchIcon=__webpack_require__("./src/components/icons/SearchIcon.tsx"),MenuIcon=__webpack_require__("./src/components/icons/MenuIcon.tsx"),ChevronDownIcon=__webpack_require__("./src/components/icons/ChevronDownIcon.tsx"),ChevronUpIcon=__webpack_require__("./src/components/icons/ChevronUpIcon.tsx"),CaretUpIcon=(__webpack_require__("./src/components/icons/ChevronRightIcon.tsx"),__webpack_require__("./src/components/icons/ChevronLeftIcon.tsx"),__webpack_require__("./src/components/icons/CaretUpIcon.tsx")),CaretDownIcon=__webpack_require__("./src/components/icons/CaretDownIcon.tsx"),ResizeIcon=(__webpack_require__("./src/components/icons/ProfileIcon.tsx"),__webpack_require__("./src/components/icons/ResizeIcon.tsx")),CloseIcon=(__webpack_require__("./src/components/icons/PlusIcon.tsx"),__webpack_require__("./src/components/icons/MinusIcon.tsx"),__webpack_require__("./src/components/icons/CloseIcon.tsx")),LoginIcon=__webpack_require__("./src/components/icons/LoginIcon.tsx"),LogoutIcon=__webpack_require__("./src/components/icons/LogoutIcon.tsx"),SeparatorIcon=(__webpack_require__("./src/components/icons/FitToScreenIcon.tsx"),__webpack_require__("./src/components/icons/CodeIcon.tsx"),__webpack_require__("./src/components/icons/ChartIcon.tsx"),__webpack_require__("./src/components/icons/GithubIcon.tsx"),__webpack_require__("./src/components/icons/TwitterIcon.tsx"),__webpack_require__("./src/components/icons/LinkedinIcon.tsx"),__webpack_require__("./src/components/icons/DiscordIcon.tsx"),__webpack_require__("./src/components/icons/TelegramIcon.tsx"),__webpack_require__("./src/components/icons/SeparatorIcon.tsx")),ArrowUpIcon=__webpack_require__("./src/components/icons/ArrowUpIcon.tsx"),react=(__webpack_require__("./src/components/icons/DotsIcon.tsx"),__webpack_require__("./node_modules/react/index.js")),utils=__webpack_require__("./src/components/icons/utils.ts"),styled_components=__webpack_require__("./node_modules/baseui/icon/styled-components.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CopyIcon=_ref=>{let{title,...props}=_ref;const svgProps=(0,utils.Y)(props);return(0,jsx_runtime.jsxs)(styled_components.ny,{...props,...svgProps,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[title&&(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.375 5.625H2.25V15.75H12.375V5.625ZM1.125 4.5V16.875H13.5V4.5H1.125Z",fill:shared.Bi.gray50}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 1.125H16.875V12.375H13.275V11.25H15.75V2.25H6.75V4.725H5.625V1.125Z",fill:shared.Bi.gray50})]})};CopyIcon.displayName="CopyIcon";const icons_CopyIcon=(0,react.memo)(CopyIcon);try{CopyIcon.displayName="CopyIcon",CopyIcon.__docgenInfo={description:"",displayName:"CopyIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/CopyIcon.tsx#CopyIcon"]={docgenInfo:CopyIcon.__docgenInfo,name:"CopyIcon",path:"src/components/icons/CopyIcon.tsx#CopyIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/hooks/useOnWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>useOnWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/utils/isBrowser.ts");function useOnWindowResize(callback){const currentCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback).current;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(currentCallback(),(0,_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__.j)())return window.addEventListener("resize",currentCallback),function(){window.removeEventListener("resize",currentCallback)}}),[])}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,timeout)=>{let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{func(...args)}),timeout)}}},"./src/components/error-page/ErrorPage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>ErrorPage_stories,defaultStory:()=>defaultStory});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts");const containerStyles={width:"100%",height:"100%",color:shared.Bi.white,flexGrow:"1",background:`url(${shared.oA}), repeat`,"@media (min-width: 768px)":{display:"grid",gridTemplateColumns:"repeat(5, 1fr)"}},colBaseStyles={display:"flex",flexDirection:"column","@media (min-width: 768px)":{height:"100%"}},styles={containerStyles,iconStyles:{width:"18px",height:"14px",marginRight:"6px",transform:"rotate(270deg)"},errorContainerStyles:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",flexGrow:"1"},columnsStyles:[...Array(4).keys()].reduce(((acc,curr)=>{const colEnd=0===curr?curr+2:curr+3;return{...acc,[`col-${curr}`]:{...colBaseStyles,gridColumnStart:(0===curr||1===curr?curr+1:curr+2).toString(),gridColumnEnd:colEnd.toString()}}}),{}),errorDescrStyles:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"end"}};var dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js");const blockStyles={background:shared.Bi.gray900,display:"flex",flexDirection:"column",flexGrow:"1"},ui_Block=(0,dist_browser_esm.zo)("div",blockStyles);var typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");const whiteRectangleStyles={width:"100%",height:"30px",flexShrink:0,background:shared.Bi.white},ui_WhiteRect=(0,dist_browser_esm.zo)("div",whiteRectangleStyles);var icons=__webpack_require__("./src/components/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Redirect=_ref=>{let{redirectPath,redirectTitle}=_ref;const[css]=(0,dist_browser_esm.hQ)(),isExternal=isExternalLink(redirectPath);return(0,jsx_runtime.jsx)("a",{href:redirectPath,rel:isExternal?"noopener noreferrer":void 0,target:isExternal?"_blank":void 0,children:(0,jsx_runtime.jsxs)(typography.aM,{overrides:{Block:{style:{display:"inline-flex",alignItems:"center",cursor:"pointer",marginTop:"20px"}}},children:[(0,jsx_runtime.jsx)(icons.Hf,{className:css(styles.iconStyles)}),redirectTitle]})})};Redirect.displayName="Redirect";const ui_Redirect=Redirect,isExternalLink=link=>/^https?:\/\//.test(link)||["mailto:","tel:","sms:","geo:","data:"].some((prefix=>link.startsWith(prefix)));try{Redirect.displayName="Redirect",Redirect.__docgenInfo={description:"",displayName:"Redirect",props:{redirectPath:{defaultValue:null,description:"",name:"redirectPath",required:!0,type:{name:"string"}},redirectTitle:{defaultValue:null,description:"",name:"redirectTitle",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/error-page/ui/Redirect.tsx#Redirect"]={docgenInfo:Redirect.__docgenInfo,name:"Redirect",path:"src/components/error-page/ui/Redirect.tsx#Redirect"})}catch(__react_docgen_typescript_loader_error){}var debounce=__webpack_require__("./src/shared/utils/debounce.ts"),useOnWindowResize=__webpack_require__("./src/shared/hooks/useOnWindowResize.ts"),isBrowser=__webpack_require__("./src/shared/utils/isBrowser.ts");const getisMobile=()=>{const mediaQueryMobile=(0,isBrowser.j)()?window.matchMedia("(max-width: 767px)"):null;return!!mediaQueryMobile&&mediaQueryMobile.matches},ErrorPage=_ref=>{let{errorCode,errorDescription,redirectTitle,actionElement,redirectPath}=_ref;const[css]=(0,styled.hQ)(),isMobile=(()=>{const[isMobile,setIsMobile]=(0,react.useState)(getisMobile()),resize=(0,debounce.D)((()=>{const newIsMobileValue=getisMobile();isMobile!==newIsMobileValue&&setIsMobile(newIsMobileValue)}),100);return(0,useOnWindowResize.V)(resize),isMobile})();return(0,jsx_runtime.jsxs)("div",{className:css(styles.containerStyles),children:[(0,jsx_runtime.jsx)("div",{className:css(styles.columnsStyles["col-0"]),children:(0,jsx_runtime.jsxs)(ui_Block,{children:[void 0!==actionElement?actionElement:(0,jsx_runtime.jsx)(ui_Redirect,{redirectPath,redirectTitle}),!isMobile&&(0,jsx_runtime.jsx)(ui_WhiteRect,{$style:{marginTop:"auto"}})]})}),(0,jsx_runtime.jsxs)("div",{className:css(styles.columnsStyles["col-1"]),children:[(0,jsx_runtime.jsx)(ui_Block,{$style:{flexGrow:"0"},children:(0,jsx_runtime.jsx)(typography.Y9,{overrides:{Block:{style:{letterSpacing:"-0.08em",...(0,expandProperty.Z)("margin","0"),background:shared.Bi.gray900,"@media (min-width: 768px)":{height:"calc(100vh / 2.25)",lineHeight:"calc(100vh / 2.25)",fontSize:"calc(100vw / 5)"},"@media (max-width: 767px)":{fontSize:"calc(100vw / 1.75)",lineHeight:"calc(100vw / 1.75)"}}}},children:errorCode})}),(0,jsx_runtime.jsxs)("div",{className:css(styles.errorContainerStyles),children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(ui_WhiteRect,{})}),(0,jsx_runtime.jsxs)(ui_Block,{$style:styles.errorDescrStyles,children:[(0,jsx_runtime.jsx)(typography.Yl,{overrides:{Block:{style:{letterSpacing:"-0.05em",...(0,expandProperty.Z)("padding","30px"),...(0,expandProperty.Z)("margin","0")}}},children:errorDescription}),(0,jsx_runtime.jsx)(ui_WhiteRect,{})]})]})]}),!isMobile&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:css(styles.columnsStyles["col-2"]),children:(0,jsx_runtime.jsx)(ui_Block,{$style:{marginTop:"calc(100vh / 2.25)"},children:(0,jsx_runtime.jsx)(ui_WhiteRect,{$style:{marginBottom:"auto"}})})}),(0,jsx_runtime.jsx)("div",{className:css(styles.columnsStyles["col-3"]),children:(0,jsx_runtime.jsx)(ui_Block,{$style:{marginTop:"calc(100vh / 2.25 + (100vh - (100vh / 2.25)) / 2 - 30px)"},children:(0,jsx_runtime.jsx)(ui_WhiteRect,{$style:{marginBottom:"auto"}})})})]})]})};ErrorPage.displayName="ErrorPage";const error_page_ErrorPage=ErrorPage;try{ErrorPage.displayName="ErrorPage",ErrorPage.__docgenInfo={description:"",displayName:"ErrorPage",props:{redirectPath:{defaultValue:null,description:"",name:"redirectPath",required:!1,type:{name:"string"}},redirectTitle:{defaultValue:null,description:"",name:"redirectTitle",required:!1,type:{name:"string"}},actionElement:{defaultValue:null,description:"",name:"actionElement",required:!1,type:{name:"ReactNode"}},errorCode:{defaultValue:null,description:"",name:"errorCode",required:!0,type:{name:"number"}},errorDescription:{defaultValue:null,description:"",name:"errorDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/error-page/ErrorPage.tsx#ErrorPage"]={docgenInfo:ErrorPage.__docgenInfo,name:"ErrorPage",path:"src/components/error-page/ErrorPage.tsx#ErrorPage"})}catch(__react_docgen_typescript_loader_error){}const Template=({...args})=>{const _components=Object.assign({div:"div"},(0,lib.ah)());return(0,jsx_runtime.jsx)(_components.div,{style:{width:"100%",height:"100vh"},children:(0,jsx_runtime.jsx)(error_page_ErrorPage,{...args})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Feedback/Error Page",component:error_page_ErrorPage}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"error-page",children:"Error Page"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{layout:"fullscreen"},args:{redirectPath:"#redirect",redirectTitle:"Home",errorCode:"404",errorDescription:"The page you are looking for does not exist."},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:error_page_ErrorPage}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use, import the component ",(0,jsx_runtime.jsx)(_components.code,{children:"ErrorPage"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"tsx",dark:!0,format:!0,code:'\n    import {ErrorPage} from "@nilfoundation/ui-kit";\n    ...\n    <ErrorPage\n      errorCode="500"\n      errorTitle="Server error"\n      errorDescription="Something went wrong on our end. Please try again later."\n    />\n  '})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={redirectPath:"#redirect",redirectTitle:"Home",errorCode:"404",errorDescription:"The page you are looking for does not exist."},defaultStory.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "100%",\n    height: "100vh"\n  }}>\n      <ErrorPage {...args} />\n    </div>;\n}'},layout:"fullscreen"};const componentMeta={title:"Feedback/Error Page",component:error_page_ErrorPage,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ErrorPage_stories=componentMeta},"./node_modules/baseui/esm/styles/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeConsumer:()=>ThemeConsumer,ThemeProvider:()=>_theme_provider__WEBPACK_IMPORTED_MODULE_2__.Z,createThemedStyled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Tp,createThemedUseStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.fj,createThemedWithStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.o4,expandBorderStyles:()=>_util__WEBPACK_IMPORTED_MODULE_1__.Qj,hexToRgb:()=>_util__WEBPACK_IMPORTED_MODULE_1__.oo,styled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.zo,useStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.hQ,withStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.w1,withWrapper:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Le});var _theme_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/styles/theme-provider.js"),_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/styles/util.js"),ThemeConsumer=_theme_provider__WEBPACK_IMPORTED_MODULE_2__.N.Consumer},"./node_modules/baseui/icon/styled-components.js":(__unused_webpack_module,exports,__webpack_require__)=>{function getSvgStyles(_ref){var $theme=_ref.$theme,$size=_ref.$size,$color=_ref.$color,size=$theme.sizing.scale600;$size&&(size=$theme.sizing[$size]?$theme.sizing[$size]:"number"==typeof $size?"".concat($size,"px"):$size);var color="currentColor";return $color&&(color=$theme.colors[$color]?$theme.colors[$color]:$color),{display:"inline-block",fill:color,color,height:size,width:size}}exports.ny=void 0;var Svg=(0,__webpack_require__("./node_modules/baseui/esm/styles/index.js").styled)("svg",getSvgStyles);exports.ny=Svg,Svg.displayName="Svg",Svg.displayName="Svg"}}]);