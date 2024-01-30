(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[3682],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/skeleton/Skeleton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HEIGHT:()=>HEIGHT,Template:()=>Template,WIDTH:()=>WIDTH,__namedExportsOrder:()=>__namedExportsOrder,base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,withAnimation:()=>withAnimation,withRows:()=>withRows});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/Skeleton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{...args}),WIDTH="414px",HEIGHT="414px";function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Feedback/Skeleton",component:_Skeleton__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"skeleton",children:"Skeleton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Base",args:{width:WIDTH,height:HEIGHT},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With Animation",args:{width:WIDTH,height:HEIGHT,animation:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With Rows",args:{width:WIDTH,height:HEIGHT,animation:!0,rows:3},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{of:_Skeleton__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Skeleton"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Skeleton} from "@nilfoundation/ui-kit";\n        const WIDTH = "400px";\n        const HEIGHT = "400px";\n        ...\n        <Skeleton width={WIDTH} height={HEIGHT} />\n        // With animation\n        <Skeleton width={WIDTH} height={HEIGHT} animation />\n        // With rows\n        <Skeleton width={WIDTH} height={HEIGHT} animation rows={4} />\n  '})]})}const base=Template.bind({});base.storyName="Base",base.args={width:WIDTH,height:HEIGHT},base.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Skeleton {...args} />;\n}"}};const withAnimation=Template.bind({});withAnimation.storyName="With Animation",withAnimation.args={width:WIDTH,height:HEIGHT,animation:!0},withAnimation.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Skeleton {...args} />;\n}"}};const withRows=Template.bind({});withRows.storyName="With Rows",withRows.args={width:WIDTH,height:HEIGHT,animation:!0,rows:3},withRows.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Skeleton {...args} />;\n}"}};const componentMeta={title:"Feedback/Skeleton",component:_Skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["base","withAnimation","withRows"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","WIDTH","HEIGHT","base","withAnimation","withRows"]},"./src/components/pattern-layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>PATTERN_KIND,_:()=>pattern_layout_PatternLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts");let PATTERN_KIND=function(PATTERN_KIND){return PATTERN_KIND.pattern700="pattern700",PATTERN_KIND.pattern800="pattern800",PATTERN_KIND}({});var debounce=__webpack_require__("./src/shared/utils/debounce.ts"),getArrayFromN=__webpack_require__("./src/shared/utils/getArrayFromN.ts"),useOnWindowResize=__webpack_require__("./src/shared/hooks/useOnWindowResize.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DotsWrapper=(0,styled.zo)("div",{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),PatternLayout=_ref=>{let{width="100%",height="100%",kind=PATTERN_KIND.pattern700,className,children}=_ref;const containerRef=(0,react.useRef)(null),[rowCount,setRowCount]=(0,react.useState)(0),Container=(0,styled.zo)("div",((width,height,kind)=>({position:"relative",width,height,backgroundColor:kind===PATTERN_KIND.pattern800?shared.Bi.gray800:shared.Bi.gray700,boxSizing:"border-box"}))(width.toString(),height.toString(),kind)),RowWrapper=(0,styled.zo)("div",(kind=>({width:"100%",height:"2px",display:"flex",boxSizing:"border-box",backgroundImage:`linear-gradient(to right, ${kind===PATTERN_KIND.pattern800?shared.Bi.gray700:shared.Bi.gray900} 25%, transparent 25%)`,backgroundSize:"8px 4px",marginBottom:"2px",marginLeft:"6px",":first-child":{marginTop:"2px"},":nth-child(even)":{marginLeft:"2px"}}))(kind)),onResizeHandler=(0,react.useCallback)((()=>{const container=containerRef.current;if(container){const{offsetHeight}=container;setRowCount(Math.floor(offsetHeight/4))}}),[containerRef]),debouncedResizeHandler=(0,debounce.D)(onResizeHandler,200);return(0,useOnWindowResize.V)(debouncedResizeHandler),(0,jsx_runtime.jsxs)(Container,{ref:containerRef,className,children:[(0,jsx_runtime.jsx)(DotsWrapper,{children:(0,getArrayFromN.I)(rowCount).map((rowIndex=>(0,jsx_runtime.jsx)(RowWrapper,{},rowIndex.toString())))}),children]})};PatternLayout.displayName="PatternLayout";const pattern_layout_PatternLayout=(0,react.memo)(PatternLayout);try{PatternLayout.displayName="PatternLayout",PatternLayout.__docgenInfo={description:"",displayName:"PatternLayout",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"100%"},description:"",name:"height",required:!1,type:{name:"string | number"}},kind:{defaultValue:{value:"PATTERN_KIND.pattern700"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"pattern700"'},{value:'"pattern800"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pattern-layout/PatternLayout.tsx#PatternLayout"]={docgenInfo:PatternLayout.__docgenInfo,name:"PatternLayout",path:"src/components/pattern-layout/PatternLayout.tsx#PatternLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>skeleton_Skeleton});var pattern_layout=__webpack_require__("./src/components/pattern-layout/index.ts");const rowItemStyles={marginBottom:"10px",":last-child":{marginBottom:"0"}};var styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),getArrayFromN=__webpack_require__("./src/shared/utils/getArrayFromN.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=(0,styled.zo)("div",{display:"flex",flexDirection:"column"}),Skeleton=_ref=>{let{height,animation,rows,...props}=_ref;const[css]=(0,styled.hQ)(),SkeletonWrapper=(0,styled.zo)("div",{width:"100%",height:"100%",backgroundSize:"400% 100%",backgroundImage:"linear-gradient(135deg, rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(31, 31, 31), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51))",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:!!animation?{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0% 50%"}}:"unset"});return rows?(0,jsx_runtime.jsx)(Container,{children:(0,getArrayFromN.I)(rows).map((index=>(0,jsx_runtime.jsx)(pattern_layout._,{...props,height:"18px",className:css(rowItemStyles),children:(0,jsx_runtime.jsx)(SkeletonWrapper,{})},index.toString())))}):(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(pattern_layout._,{...props,height,children:(0,jsx_runtime.jsx)(SkeletonWrapper,{})})})};Skeleton.displayName="Skeleton";const skeleton_Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"SkeletonOverrides"}},rows:{defaultValue:null,description:"Defines the number of row element in a skeleton",name:"rows",required:!1,type:{name:"number"}},animation:{defaultValue:null,description:"Defines if the skeleton has an animation default is false",name:"animation",required:!0,type:{name:"boolean"}},height:{defaultValue:null,description:"Defines the height of the skeleton container",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Defines the width of the skeleton container",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/hooks/useOnWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>useOnWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/utils/isBrowser.ts");function useOnWindowResize(callback){const currentCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback).current;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(currentCallback(),(0,_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__.j)())return window.addEventListener("resize",currentCallback),function(){window.removeEventListener("resize",currentCallback)}}),[])}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,timeout)=>{let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{func(...args)}),timeout)}}},"./src/shared/utils/getArrayFromN.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>getArrayFromN});const getArrayFromN=count=>Array.from(Array(count).keys())},"./src/shared/utils/isBrowser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isBrowser(){return"undefined"!=typeof window}__webpack_require__.d(__webpack_exports__,{j:()=>isBrowser})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);