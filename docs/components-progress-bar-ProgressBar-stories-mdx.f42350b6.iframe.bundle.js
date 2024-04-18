(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[6428],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/progress-bar/ProgressBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,infinite:()=>infinite,large:()=>large,medium:()=>medium,small:()=>small,withErrorMessage:()=>withErrorMessage,withLabel:()=>withLabel});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ProgressBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/progress-bar/ProgressBar.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/progress-bar/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({...args})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{width:"226px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.Z,{...args})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"Feedback/Progress Bar",component:_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"progressbar",children:"ProgressBar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Small",args:{size:_types__WEBPACK_IMPORTED_MODULE_2__.S.small,value:64},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Medium",args:{size:_types__WEBPACK_IMPORTED_MODULE_2__.S.medium,value:48},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Large",args:{size:_types__WEBPACK_IMPORTED_MODULE_2__.S.large,value:81},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"With Label",args:{value:72,showLabel:!0,getProgressLabel:()=>"Uploading..."},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"With Error Message",args:{value:72,errorMessage:"Error message",showLabel:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Infinite",args:{infinite:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.$4,{of:_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ProgressBar"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {ProgressBar, PROGRESS_BAR_SIZE} from "@nilfoundation/ui-kit";\n        ...\n        <ProgressBar value={48} />\n        // With size\n        <ProgressBar value={48} size={PROGRESS_BAR_SIZE.large} />\n        // With minValue, maxValue\n        <ProgressBar value={400} minValue={100} maxValue={1000} />\n        // With label\n         <ProgressBar value={48} getProgressLabel={(value, minValue, maxValue) => \'\'} showLabel />\n        // With error message\n        <ProgressBar value={48} errorMessage="Error message" showLabel />\n  '})]})}const small=Template.bind({});small.storyName="Small",small.args={size:_types__WEBPACK_IMPORTED_MODULE_2__.S.small,value:64},small.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const medium=Template.bind({});medium.storyName="Medium",medium.args={size:_types__WEBPACK_IMPORTED_MODULE_2__.S.medium,value:48},medium.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const large=Template.bind({});large.storyName="Large",large.args={size:_types__WEBPACK_IMPORTED_MODULE_2__.S.large,value:81},large.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const withLabel=Template.bind({});withLabel.storyName="With Label",withLabel.args={value:72,showLabel:!0,getProgressLabel:()=>"Uploading..."},withLabel.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const withErrorMessage=Template.bind({});withErrorMessage.storyName="With Error Message",withErrorMessage.args={value:72,errorMessage:"Error message",showLabel:!0},withErrorMessage.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const infinite=Template.bind({});infinite.storyName="Infinite",infinite.args={infinite:!0},infinite.parameters={storySource:{source:'({\n  ...args\n}) => {\n  return <div style={{\n    width: "226px"\n  }}>\n      <ProgressBar {...args} />\n    </div>;\n}'}};const componentMeta={title:"Feedback/Progress Bar",component:_ProgressBar__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["small","medium","large","withLabel","withErrorMessage","infinite"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","small","medium","large","withLabel","withErrorMessage","infinite"]},"./src/components/progress-bar/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>progress_bar_ProgressBar});var react=__webpack_require__("./node_modules/react/index.js"),types=__webpack_require__("./src/components/progress-bar/types.ts"),shared=__webpack_require__("./src/shared/index.ts");const containerStyles={display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},dashedBlockStyles={width:"4px",height:"100%"},dashedBlockActiveStyles={backgroundImage:`linear-gradient(to right, ${shared.Bi.white} 50%, transparent 50%)`},dashedBlockErrorStyles={backgroundImage:`linear-gradient(to right, ${shared.Bi.red400} 50%, transparent 50%)`},dashedBlockNotActiveStyles={backgroundImage:`linear-gradient(to right, ${shared.Bi.gray700} 50%, transparent 50%)`},labelStyles={marginTop:"12px"};var getArrayFromN=__webpack_require__("./src/shared/utils/getArrayFromN.ts"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),debounce=__webpack_require__("./src/shared/utils/debounce.ts"),typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js"),useOnWindowResize=__webpack_require__("./src/shared/hooks/useOnWindowResize.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const progressBarLabelComponent={[types.S.small]:props=>(0,jsx_runtime.jsx)(typography.S$,{as:"span",...props}),[types.S.medium]:props=>(0,jsx_runtime.jsx)(typography.Uc,{as:"span",...props}),[types.S.large]:props=>(0,jsx_runtime.jsx)(typography.D9,{as:"span",...props})},ProgressBar=_ref=>{let{value=0,minValue=0,maxValue=100,getProgressLabel,showLabel,errorMessage,size=types.S.medium,className,infinite}=_ref;const containerRef=(0,react.useRef)(null),[dashedCount,setDashedCount]=(0,react.useState)(0),[css]=(0,styled.hQ)(),progressedCount=((value,minValue,maxValue,dashedCount)=>{const normalizedMaxValue=maxValue-minValue,normalizedValue=value-minValue,percent=Math.floor(100*normalizedValue/normalizedMaxValue);return Math.floor(dashedCount*percent/100)})(value,minValue,maxValue,dashedCount),ProgressWrapper=(0,styled.zo)("div",(size=>({display:"flex",alignItems:"central",width:"100%",height:{[types.S.small]:"4px",[types.S.medium]:"8px",[types.S.large]:"12px"}[size],border:"none",transition:"backgroundImage .2s ease-in"}))(size)),Container=(0,styled.zo)("div",containerStyles),DashedBlock=(0,styled.zo)("div",dashedBlockStyles),TypographyComponent=progressBarLabelComponent[size],onResizeHandler=(0,react.useCallback)((()=>{const container=containerRef.current;if(container){const{offsetWidth}=container;setDashedCount(Math.floor(offsetWidth/4))}}),[containerRef]),debouncedResizeHandler=(0,debounce.D)(onResizeHandler,200);(0,useOnWindowResize.V)(debouncedResizeHandler);const getDashedBlockClassName=index=>css(infinite?((index,totalAmountOfBlocks)=>({animationDuration:.015*totalAmountOfBlocks+"s",animationDelay:.015*index+"s",animationIterationCount:"infinite",backgroundImage:`linear-gradient(to right, ${shared.Bi.gray700} 50%, transparent 50%)`,animationName:{from:{backgroundImage:`linear-gradient(to right, ${shared.Bi.white} 50%, transparent 50%)`},to:{backgroundImage:`linear-gradient(to right, ${shared.Bi.gray700} 50%, transparent 50%)`}}}))(index,dashedCount):index<progressedCount?errorMessage?dashedBlockErrorStyles:dashedBlockActiveStyles:dashedBlockNotActiveStyles);return(0,jsx_runtime.jsxs)(Container,{className,ref:containerRef,children:[(0,jsx_runtime.jsx)(ProgressWrapper,{role:"progressbar",children:(0,getArrayFromN.I)(dashedCount).map((index=>(0,jsx_runtime.jsx)(DashedBlock,{className:getDashedBlockClassName(index)},index.toString())))}),showLabel&&(0,jsx_runtime.jsx)(TypographyComponent,{className:css(labelStyles),color:errorMessage?shared.Bi.red400:shared.Bi.gray400,children:errorMessage||(getProgressLabel?getProgressLabel(value,minValue,maxValue):"Uploading...")})]})};ProgressBar.displayName="ProgressBar";const progress_bar_ProgressBar=ProgressBar;try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ProgressBarOverrides"}},value:{defaultValue:{value:"0"},description:"The value between `0` and `100 | successValue` of the progress indicator.",name:"value",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"The accessible label for the progress bar (getProgressLabel will be used if not provided)",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Error message for screen-reader users*",name:"errorMessage",required:!1,type:{name:"string"}},maxValue:{defaultValue:{value:"100"},description:"Maximum possible value.",name:"maxValue",required:!1,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"Minimum possible value.",name:"minValue",required:!1,type:{name:"number"}},size:{defaultValue:{value:"PROGRESS_BAR_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showLabel:{defaultValue:null,description:"",name:"showLabel",required:!1,type:{name:"boolean"}},getProgressLabel:{defaultValue:null,description:"",name:"getProgressLabel",required:!1,type:{name:"((value: number, minValue: number, maxValue: number) => string)"}},infinite:{defaultValue:null,description:"",name:"infinite",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/progress-bar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/progress-bar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/progress-bar/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>PROGRESS_BAR_SIZE});let PROGRESS_BAR_SIZE=function(PROGRESS_BAR_SIZE){return PROGRESS_BAR_SIZE.small="small",PROGRESS_BAR_SIZE.medium="medium",PROGRESS_BAR_SIZE.large="large",PROGRESS_BAR_SIZE}({})},"./src/shared/hooks/useOnWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>useOnWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useOnWindowResize(callback){const currentCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback).current;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return currentCallback(),window.addEventListener("resize",currentCallback),function(){window.removeEventListener("resize",currentCallback)}}),[])}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,timeout)=>{let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{func(...args)}),timeout)}}},"./src/shared/utils/getArrayFromN.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>getArrayFromN});const getArrayFromN=count=>Array.from(Array(count).keys())},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);