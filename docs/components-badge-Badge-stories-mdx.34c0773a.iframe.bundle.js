(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[1325],{"./src/components/badge/Badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,accent:()=>accent,content:()=>content,default:()=>__WEBPACK_DEFAULT_EXPORT__,hierarchyLow:()=>hierarchyLow,negative:()=>negative,positive:()=>positive,warning:()=>warning,withChildren:()=>withChildren,withPlacement:()=>withPlacement});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/badge/Badge.tsx"),_skeleton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/index.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/badge/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.ZP,{...args}),content="Badge";function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Data display/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_1__.ZP}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Accent",args:{content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.accent},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Positive",args:{content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.positive},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Warning",args:{content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.warning},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Negative",args:{content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.negative},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Hierarchy Low",args:{content,hierarchy:_types__WEBPACK_IMPORTED_MODULE_3__.yl.low},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"With Children",args:{content,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skeleton__WEBPACK_IMPORTED_MODULE_2__.O,{animation:!0,width:"180px",height:"120px"})},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"With Placement",args:{content,placement:_types__WEBPACK_IMPORTED_MODULE_3__.rD.bottomLeft,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skeleton__WEBPACK_IMPORTED_MODULE_2__.O,{animation:!0,width:"180px",height:"120px"})},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:_Badge__WEBPACK_IMPORTED_MODULE_1__.ZP}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Badge"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Badge, BADGE_COLOR, BADGE_HIERARCHY, BADGE_PLACEMENT} from "@nilfoundation/ui-kit";\n        ...\n         <Badge content="Badge" />\n        // With color\n         <Badge content="Badge" color={BADGE_COLOR.positive} />\n        // With hierarchy\n        <Badge content="Badge" hierarchy={BADGE_HIERARCHY.low} />\n        // With children\n        <Badge content="Badge">\n            <div>...</div>\n        </Badge>\n        // With placement\n        <Badge content="Badge" placement={BADGE_PLACEMENT.bottomLeft}>\n            <div>...</div>\n        </Badge>\n  '})]})}const accent=Template.bind({});accent.storyName="Accent",accent.args={content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.accent},accent.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const positive=Template.bind({});positive.storyName="Positive",positive.args={content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.positive},positive.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const warning=Template.bind({});warning.storyName="Warning",warning.args={content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.warning},warning.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const negative=Template.bind({});negative.storyName="Negative",negative.args={content,color:_types__WEBPACK_IMPORTED_MODULE_3__.P$.negative},negative.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const hierarchyLow=Template.bind({});hierarchyLow.storyName="Hierarchy Low",hierarchyLow.args={content,hierarchy:_types__WEBPACK_IMPORTED_MODULE_3__.yl.low},hierarchyLow.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const withChildren=Template.bind({});withChildren.storyName="With Children",withChildren.args={content,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skeleton__WEBPACK_IMPORTED_MODULE_2__.O,{animation:!0,width:"180px",height:"120px"})},withChildren.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const withPlacement=Template.bind({});withPlacement.storyName="With Placement",withPlacement.args={content,placement:_types__WEBPACK_IMPORTED_MODULE_3__.rD.bottomLeft,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_skeleton__WEBPACK_IMPORTED_MODULE_2__.O,{animation:!0,width:"180px",height:"120px"})},withPlacement.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <Badge {...args} />;\n}"}};const componentMeta={title:"Data display/Badge",component:_Badge__WEBPACK_IMPORTED_MODULE_1__.ZP,tags:["stories-mdx"],includeStories:["accent","positive","warning","negative","hierarchyLow","withChildren","withPlacement"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","content","accent","positive","warning","negative","hierarchyLow","withChildren","withPlacement"]},"./src/components/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>badge_Badge});var badge=__webpack_require__("./node_modules/baseui/esm/badge/badge.js"),types=__webpack_require__("./src/components/badge/types.ts"),borderStyles=__webpack_require__("./src/shared/styles/borderStyles.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),shared=__webpack_require__("./src/shared/index.ts");const badgeBaseStyles={...borderStyles._,...(0,expandProperty.Z)("border","none"),...(0,expandProperty.Z)("padding","0 4px"),lineHeight:"20px"},badgeColorModifiedStyles={[types.P$.accent]:{backgroundColor:shared.Bi.white,color:shared.Bi.black},[types.P$.positive]:{backgroundColor:shared.Bi.green500,color:shared.Bi.white},[types.P$.warning]:{backgroundColor:shared.Bi.yellow500,color:shared.Bi.black},[types.P$.negative]:{backgroundColor:shared.Bi.red500,color:shared.Bi.white}},badgeLowStyles={[types.P$.accent]:{backgroundColor:shared.Bi.gray700,color:shared.Bi.gray200},[types.P$.positive]:{backgroundColor:shared.Bi.green700,color:shared.Bi.green300},[types.P$.warning]:{backgroundColor:shared.Bi.yellow700,color:shared.Bi.yellow300},[types.P$.negative]:{backgroundColor:shared.Bi.red700,color:shared.Bi.red300}};var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=_ref=>{let{color=types.P$.accent,hierarchy=types.yl.high,overrides:baseOverrides,...props}=_ref;const badgeOverrides=((color,hierarchy)=>({Badge:{style:{...badgeBaseStyles,...badgeColorModifiedStyles[color],...hierarchy===types.yl.low?badgeLowStyles[color]:{}}}}))(color,hierarchy),overrides=(0,getMergedOverrides.D)(badgeOverrides,baseOverrides);return(0,jsx_runtime.jsx)(badge.Z,{...props,overrides})};Badge.displayName="Badge";const badge_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"BadgeOverrides"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomRight"'},{value:'"bottomLeft"'},{value:'"topLeftEdge"'},{value:'"topEdge"'},{value:'"topRightEdge"'},{value:'"bottomRightEdge"'},{value:'"bottomEdge"'},{value:'"bottomLeftEdge"'},{value:'"leftTopEdge"'},{value:'"rightTopEdge"'},{value:'"rightBottomEdge"'},{value:'"leftBottomEdge"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},horizontalOffset:{defaultValue:null,description:"",name:"horizontalOffset",required:!1,type:{name:"string"}},verticalOffset:{defaultValue:null,description:"",name:"verticalOffset",required:!1,type:{name:"string"}},hierarchy:{defaultValue:{value:"BADGE_HIERARCHY.high"},description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"low"'},{value:'"high"'}]}},color:{defaultValue:{value:"BADGE_COLOR.accent"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"warning"'},{value:'"positive"'},{value:'"negative"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/badge/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P$:()=>BADGE_COLOR,rD:()=>baseui_badge__WEBPACK_IMPORTED_MODULE_0__.r4,yl:()=>BADGE_HIERARCHY});var baseui_badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/baseui/esm/badge/constants.js");let BADGE_COLOR=function(BADGE_COLOR){return BADGE_COLOR.accent="accent",BADGE_COLOR.warning="warning",BADGE_COLOR.positive="positive",BADGE_COLOR.negative="negative",BADGE_COLOR}({}),BADGE_HIERARCHY=function(BADGE_HIERARCHY){return BADGE_HIERARCHY.low="low",BADGE_HIERARCHY.high="high",BADGE_HIERARCHY}({})},"./src/components/skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>skeleton_Skeleton});var pattern_layout=__webpack_require__("./src/shared/ui/pattern-layout/index.ts");const rowItemStyles={marginBottom:"10px",":last-child":{marginBottom:"0"}};var styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),getArrayFromN=__webpack_require__("./src/shared/utils/getArrayFromN.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=(0,styled.zo)("div",{display:"flex",flexDirection:"column"}),Skeleton=_ref=>{let{height,animation,rows,...props}=_ref;const[css]=(0,styled.hQ)(),SkeletonWrapper=(0,styled.zo)("div",{width:"100%",height:"100%",backgroundSize:"400% 100%",backgroundImage:"linear-gradient(135deg, rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(31, 31, 31), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51), rgb(51, 51, 51))",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:!!animation?{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0% 50%"}}:"unset"});const accessibilityProps={role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0,"aria-valuetext":"Loading","aria-busy":!0};return rows?(0,jsx_runtime.jsx)(Container,{...accessibilityProps,children:(0,getArrayFromN.I)(rows).map((index=>(0,jsx_runtime.jsx)(pattern_layout._,{...props,height:"18px",className:css(rowItemStyles),children:(0,jsx_runtime.jsx)(SkeletonWrapper,{})},index.toString())))}):(0,jsx_runtime.jsx)(Container,{...accessibilityProps,children:(0,jsx_runtime.jsx)(pattern_layout._,{...props,height,children:(0,jsx_runtime.jsx)(SkeletonWrapper,{})})})};Skeleton.displayName="Skeleton";const skeleton_Skeleton=Skeleton;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"SkeletonOverrides"}},rows:{defaultValue:null,description:"Defines the number of row element in a skeleton",name:"rows",required:!1,type:{name:"number"}},animation:{defaultValue:null,description:"Defines if the skeleton has an animation default is false",name:"animation",required:!0,type:{name:"boolean"}},height:{defaultValue:null,description:"Defines the height of the skeleton container",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Defines the width of the skeleton container",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>_Skeleton__WEBPACK_IMPORTED_MODULE_0__.Z});var _Skeleton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/skeleton/Skeleton.tsx")},"./src/shared/hooks/useOnWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>useOnWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useOnWindowResize(callback){const currentCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback).current;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return currentCallback(),window.addEventListener("resize",currentCallback),function(){window.removeEventListener("resize",currentCallback)}}),[])}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/borderStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>withoutBorderStyles});var inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("borderRadius","0");const withoutBorderStyles=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("border","none")},"./src/shared/ui/pattern-layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>PATTERN_KIND,_:()=>pattern_layout_PatternLayout});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts");let PATTERN_KIND=function(PATTERN_KIND){return PATTERN_KIND.pattern700="pattern700",PATTERN_KIND.pattern800="pattern800",PATTERN_KIND}({});var debounce=__webpack_require__("./src/shared/utils/debounce.ts"),getArrayFromN=__webpack_require__("./src/shared/utils/getArrayFromN.ts"),useOnWindowResize=__webpack_require__("./src/shared/hooks/useOnWindowResize.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DotsWrapper=(0,styled.zo)("div",{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),PatternLayout=_ref=>{let{width="100%",height="100%",kind=PATTERN_KIND.pattern700,className,children}=_ref;const containerRef=(0,react.useRef)(null),[rowCount,setRowCount]=(0,react.useState)(0),Container=(0,styled.zo)("div",((width,height,kind)=>({position:"relative",width,height,backgroundColor:kind===PATTERN_KIND.pattern800?shared.Bi.gray800:shared.Bi.gray700,boxSizing:"border-box"}))(width.toString(),height.toString(),kind)),RowWrapper=(0,styled.zo)("div",(kind=>({width:"100%",height:"2px",display:"flex",boxSizing:"border-box",backgroundImage:`linear-gradient(to right, ${kind===PATTERN_KIND.pattern800?shared.Bi.gray700:shared.Bi.gray900} 25%, transparent 25%)`,backgroundSize:"8px 4px",marginBottom:"2px",marginLeft:"6px",":first-child":{marginTop:"2px"},":nth-child(even)":{marginLeft:"2px"}}))(kind)),onResizeHandler=(0,react.useCallback)((()=>{const container=containerRef.current;if(container){const{offsetHeight}=container;setRowCount(Math.floor(offsetHeight/4))}}),[containerRef]),debouncedResizeHandler=(0,debounce.D)(onResizeHandler,200);return(0,useOnWindowResize.V)(debouncedResizeHandler),(0,jsx_runtime.jsxs)(Container,{ref:containerRef,className,children:[(0,jsx_runtime.jsx)(DotsWrapper,{children:(0,getArrayFromN.I)(rowCount).map((rowIndex=>(0,jsx_runtime.jsx)(RowWrapper,{},rowIndex.toString())))}),children]})};PatternLayout.displayName="PatternLayout";const pattern_layout_PatternLayout=(0,react.memo)(PatternLayout);try{PatternLayout.displayName="PatternLayout",PatternLayout.__docgenInfo={description:"",displayName:"PatternLayout",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"100%"},description:"",name:"height",required:!1,type:{name:"string | number"}},kind:{defaultValue:{value:"PATTERN_KIND.pattern700"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"pattern700"'},{value:'"pattern800"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/pattern-layout/PatternLayout.tsx#PatternLayout"]={docgenInfo:PatternLayout.__docgenInfo,name:"PatternLayout",path:"src/shared/ui/pattern-layout/PatternLayout.tsx#PatternLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,timeout)=>{let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{func(...args)}),timeout)}}},"./src/shared/utils/getArrayFromN.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>getArrayFromN});const getArrayFromN=count=>Array.from(Array(count).keys())},"./node_modules/baseui/esm/badge/badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>badge});var _ROLE$badge,_ROLE$notificationCir,_ROLE$hintDot,_Object$freeze,react=__webpack_require__("./node_modules/react/index.js"),helpers_overrides=__webpack_require__("./node_modules/baseui/esm/helpers/overrides.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),constants=__webpack_require__("./node_modules/baseui/esm/badge/constants.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getColorStyles(_ref){var _HIERARCHY$primary,_HIERARCHY$secondary,_COLOR_STYLES,$theme=_ref.$theme,$hierarchy=_ref.$hierarchy,$color=_ref.$color;return(_defineProperty(_COLOR_STYLES={},constants.T5.primary,(_defineProperty(_HIERARCHY$primary={},constants.r$.accent,{color:$theme.colors.contentOnColor,backgroundColor:$theme.colors.backgroundAccent}),_defineProperty(_HIERARCHY$primary,constants.r$.primary,{color:$theme.colors.contentInversePrimary,backgroundColor:$theme.colors.backgroundInversePrimary}),_defineProperty(_HIERARCHY$primary,constants.r$.positive,{color:$theme.colors.contentOnColor,backgroundColor:$theme.colors.backgroundPositive}),_defineProperty(_HIERARCHY$primary,constants.r$.negative,{color:$theme.colors.contentOnColor,backgroundColor:$theme.colors.backgroundNegative}),_defineProperty(_HIERARCHY$primary,constants.r$.warning,{color:$theme.colors.contentOnColorInverse,backgroundColor:$theme.colors.backgroundWarning}),_HIERARCHY$primary)),_defineProperty(_COLOR_STYLES,constants.T5.secondary,(_defineProperty(_HIERARCHY$secondary={},constants.r$.accent,{color:$theme.colors.contentAccent,backgroundColor:$theme.colors.backgroundAccentLight}),_defineProperty(_HIERARCHY$secondary,constants.r$.primary,{color:$theme.colors.primaryA,backgroundColor:$theme.colors.backgroundSecondary}),_defineProperty(_HIERARCHY$secondary,constants.r$.positive,{color:$theme.colors.contentPositive,backgroundColor:$theme.colors.backgroundPositiveLight}),_defineProperty(_HIERARCHY$secondary,constants.r$.negative,{color:$theme.colors.contentNegative,backgroundColor:$theme.colors.backgroundNegativeLight}),_defineProperty(_HIERARCHY$secondary,constants.r$.warning,{color:$theme.colors.contentWarning,backgroundColor:$theme.colors.backgroundWarningLight}),_HIERARCHY$secondary)),_COLOR_STYLES)[$hierarchy][$color]}var DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT={top:"-10px",right:"-10px"},DEFAULT_HINT_DOT_PLACEMENT={top:"-4px",right:"-4px"},POSITION_STYLES=Object.freeze((_defineProperty(_Object$freeze={},constants.HB.badge,(_defineProperty(_ROLE$badge={},constants.r4.topEdge,{top:"-8px",left:"50%",transform:"translateX(-50%)"}),_defineProperty(_ROLE$badge,constants.r4.bottomEdge,{bottom:"-8px",left:"50%",transform:"translateX(-50%)"}),_defineProperty(_ROLE$badge,constants.r4.topLeft,{top:"16px",left:"16px"}),_defineProperty(_ROLE$badge,constants.r4.topRight,{top:"16px",right:"16px"}),_defineProperty(_ROLE$badge,constants.r4.bottomRight,{bottom:"16px",right:"16px"}),_defineProperty(_ROLE$badge,constants.r4.bottomLeft,{bottom:"16px",left:"16px"}),_defineProperty(_ROLE$badge,constants.r4.topLeftEdge,{top:"-8px",left:"16px"}),_defineProperty(_ROLE$badge,constants.r4.topRightEdge,{top:"-8px",right:"16px"}),_defineProperty(_ROLE$badge,constants.r4.bottomRightEdge,{bottom:"-8px",right:"16px"}),_defineProperty(_ROLE$badge,constants.r4.bottomLeftEdge,{bottom:"-8px",left:"16px"}),_defineProperty(_ROLE$badge,constants.r4.leftTopEdge,{top:"16px",left:"-8px"}),_defineProperty(_ROLE$badge,constants.r4.rightTopEdge,{top:"16px",right:"-8px"}),_defineProperty(_ROLE$badge,constants.r4.rightBottomEdge,{bottom:"16px",right:"-8px"}),_defineProperty(_ROLE$badge,constants.r4.leftBottomEdge,{bottom:"16px",left:"-8px"}),_ROLE$badge)),_defineProperty(_Object$freeze,constants.HB.notificationCircle,(_defineProperty(_ROLE$notificationCir={},constants.r4.topLeft,{top:"-10px",left:"-10px"}),_defineProperty(_ROLE$notificationCir,constants.r4.topRight,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.topEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.bottomEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.bottomRight,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.bottomLeft,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.topLeftEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.topRightEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.bottomRightEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.bottomLeftEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.leftTopEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.rightTopEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.rightBottomEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_defineProperty(_ROLE$notificationCir,constants.r4.leftBottomEdge,DEFAULT_NOTIFICATION_CIRCLE_PLACEMENT),_ROLE$notificationCir)),_defineProperty(_Object$freeze,constants.HB.hintDot,(_defineProperty(_ROLE$hintDot={},constants.r4.topLeft,{top:"-4px",left:"-4px"}),_defineProperty(_ROLE$hintDot,constants.r4.topRight,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.topEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.bottomEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.bottomRight,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.bottomLeft,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.topLeftEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.topRightEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.bottomRightEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.bottomLeftEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.leftTopEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.rightTopEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.rightBottomEdge,DEFAULT_HINT_DOT_PLACEMENT),_defineProperty(_ROLE$hintDot,constants.r4.leftBottomEdge,DEFAULT_HINT_DOT_PLACEMENT),_ROLE$hintDot)),_Object$freeze)),StyledRoot=(0,styled.zo)("div",(function(){return{position:"relative",display:"inline-block",lineHeight:"initial"}}));StyledRoot.displayName="StyledRoot",StyledRoot.displayName="StyledRoot";var TOP_PLACEMENTS=[constants.r4.topLeft,constants.r4.topRight,constants.r4.topLeftEdge,constants.r4.topEdge,constants.r4.topRightEdge,constants.r4.leftTopEdge,constants.r4.rightTopEdge],BOTTOM_PLACEMENTS=[constants.r4.bottomLeft,constants.r4.bottomRight,constants.r4.bottomLeftEdge,constants.r4.bottomEdge,constants.r4.bottomRightEdge,constants.r4.leftBottomEdge,constants.r4.rightBottomEdge],LEFT_PLACEMENTS=[constants.r4.topLeft,constants.r4.topLeftEdge,constants.r4.topEdge,constants.r4.bottomLeft,constants.r4.bottomLeftEdge,constants.r4.bottomEdge,constants.r4.leftTopEdge,constants.r4.leftBottomEdge],RIGHT_PLACEMENTS=[constants.r4.topRight,constants.r4.topRightEdge,constants.r4.bottomRight,constants.r4.bottomRightEdge,constants.r4.rightTopEdge,constants.r4.rightBottomEdge],StyledPositioner=(0,styled.zo)("div",(function(_ref2){_ref2.$theme;var $role=_ref2.$role,$placement=_ref2.$placement,$horizontalOffset=_ref2.$horizontalOffset,$verticalOffset=_ref2.$verticalOffset,positionStyle=POSITION_STYLES[$role][$placement];return $verticalOffset&&(TOP_PLACEMENTS.includes($placement)&&(positionStyle=_objectSpread(_objectSpread({},positionStyle),{},{top:$verticalOffset})),BOTTOM_PLACEMENTS.includes($placement)&&(positionStyle=_objectSpread(_objectSpread({},positionStyle),{},{bottom:$verticalOffset}))),$horizontalOffset&&(LEFT_PLACEMENTS.includes($placement)&&(positionStyle=_objectSpread(_objectSpread({},positionStyle),{},{left:$horizontalOffset})),RIGHT_PLACEMENTS.includes($placement)&&(positionStyle=_objectSpread(_objectSpread({},positionStyle),{},{right:$horizontalOffset}))),_objectSpread(_objectSpread({},positionStyle),{},{position:"absolute",lineHeight:"initial"})}));StyledPositioner.displayName="StyledPositioner",StyledPositioner.displayName="StyledPositioner";var StyledBadge=(0,styled.zo)("div",(function(_ref3){var $theme=_ref3.$theme,_ref3$$shape=_ref3.$shape,$shape=void 0===_ref3$$shape?constants.X3.rectangle:_ref3$$shape,_ref3$$color=_ref3.$color,$color=void 0===_ref3$$color?constants.r$.accent:_ref3$$color,_ref3$$hierarchy=_ref3.$hierarchy,$hierarchy=void 0===_ref3$$hierarchy?constants.T5.primary:_ref3$$hierarchy;return _objectSpread(_objectSpread({visibility:_ref3.$hidden?"hidden":"inherit",boxSizing:"border-box",height:$theme.sizing.scale700,borderRadius:$shape===constants.X3.rectangle?$theme.borders.radius200:$theme.borders.radius500,paddingRight:$shape===constants.X3.rectangle?$theme.sizing.scale100:$theme.sizing.scale300,paddingLeft:$shape===constants.X3.rectangle?$theme.sizing.scale100:$theme.sizing.scale300,display:"inline-flex",alignItems:"center"},getColorStyles({$theme,$hierarchy,$color})),$hierarchy===constants.T5.primary?$theme.typography.LabelSmall:$theme.typography.ParagraphSmall)}));StyledBadge.displayName="StyledBadge",StyledBadge.displayName="StyledBadge";var StyledNotificationCircle=(0,styled.zo)("div",(function(_ref4){var $theme=_ref4.$theme,_ref4$$color=_ref4.$color,$color=void 0===_ref4$$color?constants.r$.accent:_ref4$$color;return _objectSpread(_objectSpread({visibility:_ref4.$hidden?"hidden":"inherit",height:$theme.sizing.scale700,width:$theme.sizing.scale700,borderRadius:"20px",display:"inline-flex",alignItems:"center",justifyContent:"center"},getColorStyles({$theme,$hierarchy:constants.T5.primary,$color})),$theme.typography.LabelXSmall)}));StyledNotificationCircle.displayName="StyledNotificationCircle",StyledNotificationCircle.displayName="StyledNotificationCircle";var StyledHintDot=(0,styled.zo)("div",(function(_ref5){var $theme=_ref5.$theme,_ref5$$color=_ref5.$color,$color=void 0===_ref5$$color?constants.r$.accent:_ref5$$color;return _objectSpread({visibility:_ref5.$hidden?"hidden":"inherit",backgroundColor:$theme.colors[$color],boxSizing:"content-box",height:"8px",width:"8px",borderRadius:"50%",border:"4px solid ".concat($theme.colors.backgroundPrimary)},getColorStyles({$theme,$hierarchy:constants.T5.primary,$color}))}));StyledHintDot.displayName="StyledHintDot",StyledHintDot.displayName="StyledHintDot";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const badge=function Badge(_ref){var children=_ref.children,content=_ref.content,color=_ref.color,_ref$shape=_ref.shape,shape=void 0===_ref$shape?constants.X3.rectangle:_ref$shape,_ref$placement=_ref.placement,placement=void 0===_ref$placement?constants.r4.topRight:_ref$placement,hierarchy=_ref.hierarchy,horizontalOffset=_ref.horizontalOffset,verticalOffset=_ref.verticalOffset,hidden=_ref.hidden,_ref$overrides=_ref.overrides,overrides=void 0===_ref$overrides?{}:_ref$overrides,_getOverrides2=_slicedToArray((0,helpers_overrides.jb)(overrides.Badge,StyledBadge),2),Badge=_getOverrides2[0],badgeProps=_getOverrides2[1],_getOverrides4=_slicedToArray((0,helpers_overrides.jb)(overrides.Root,StyledRoot),2),Root=_getOverrides4[0],rootProps=_getOverrides4[1],_getOverrides6=_slicedToArray((0,helpers_overrides.jb)(overrides.Positioner,StyledPositioner),2),Positioner=_getOverrides6[0],positionerProps=_getOverrides6[1],anchor=function getAnchorFromChildren(children){var childArray=react.Children.toArray(children);return childArray.length>1&&console.error("[baseui] No more than 1 child may be passed to Badge, found ".concat(childArray.length," children")),childArray[0]}(children);constants.r4.topLeft,constants.r4.topRight,constants.r4.bottomRight,constants.r4.bottomLeft;return anchor?react.createElement(Root,rootProps,anchor,react.createElement(Positioner,_extends({$horizontalOffset:horizontalOffset,$verticalOffset:verticalOffset,$placement:placement,$role:constants.HB.badge},positionerProps),react.createElement(Badge,_extends({$hierarchy:hierarchy,$shape:shape,$color:color,$hidden:hidden},badgeProps),content))):react.createElement(Badge,_extends({$hierarchy:hierarchy,$shape:shape,$color:color,$hidden:hidden},badgeProps),content)}},"./node_modules/baseui/esm/badge/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HB:()=>ROLE,T5:()=>HIERARCHY,X3:()=>SHAPE,r$:()=>COLOR,r4:()=>PLACEMENT});var HIERARCHY=Object.freeze({primary:"primary",secondary:"secondary"}),SHAPE=Object.freeze({pill:"pill",rectangle:"rectangle"}),COLOR=Object.freeze({accent:"accent",primary:"primary",positive:"positive",negative:"negative",warning:"warning"}),PLACEMENT=Object.freeze({topLeft:"topLeft",topRight:"topRight",bottomRight:"bottomRight",bottomLeft:"bottomLeft",topLeftEdge:"topLeftEdge",topEdge:"topEdge",topRightEdge:"topRightEdge",bottomRightEdge:"bottomRightEdge",bottomEdge:"bottomEdge",bottomLeftEdge:"bottomLeftEdge",leftTopEdge:"leftTopEdge",rightTopEdge:"rightTopEdge",rightBottomEdge:"rightBottomEdge",leftBottomEdge:"leftBottomEdge"}),ROLE=Object.freeze({badge:"badge",notificationCircle:"notificationCircle",hintDot:"hintDot"})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);