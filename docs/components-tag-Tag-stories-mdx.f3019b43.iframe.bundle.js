"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[7635],{"./src/components/tag/Tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,blue:()=>blue,default:()=>__WEBPACK_DEFAULT_EXPORT__,gray:()=>gray,green:()=>green,purple:()=>purple,red:()=>red,white:()=>white,yellow:()=>yellow});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tag/Tag.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tag/types.ts"),_shared_ui_stories_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/ui/stories-layout/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_shared_ui_stories_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:"text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:_types__WEBPACK_IMPORTED_MODULE_2__.c.m,children:"text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,fill:!1,children:"text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:_types__WEBPACK_IMPORTED_MODULE_2__.c.m,fill:!1,children:"text"})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Data display/Tag",component:_Tag__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"tag",children:"Tag"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Gray",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.gray},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Blue",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.blue},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Yellow",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.yellow},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Red",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.red},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Green",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.green},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Purple",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.purle},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"White",args:{kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.white},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:_Tag__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Tag"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Tag, TAG_KIND, TAG_SIZE} from "@nilfoundation/ui-kit";\n        ...\n         <Tag>Tag label</Tag>\n        // Disabled\n         <Tag>Tag label</Tag>\n        // With kind\n        <Tag kind={TAG_KIND.white}>Tag label</Tag>\n        // With size\n        <Tag size={TAG_SIZE.m}>Tag label</Tag>\n  '})]})}const gray=Template.bind({});gray.storyName="Gray",gray.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.gray},gray.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const blue=Template.bind({});blue.storyName="Blue",blue.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.blue},blue.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const yellow=Template.bind({});yellow.storyName="Yellow",yellow.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.yellow},yellow.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const red=Template.bind({});red.storyName="Red",red.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.red},red.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const green=Template.bind({});green.storyName="Green",green.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.green},green.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const purple=Template.bind({});purple.storyName="Purple",purple.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.purle},purple.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const white=Template.bind({});white.storyName="White",white.args={kind:_types__WEBPACK_IMPORTED_MODULE_2__.k.white},white.parameters={storySource:{source:"({\n  ...args\n}) => {\n  return <StoriesLayout>\n      <Tag {...args}>text</Tag>\n      <Tag {...args} size={TAG_SIZE.m}>\n        text\n      </Tag>\n      <Tag {...args} fill={false}>\n        text\n      </Tag>\n      <Tag {...args} size={TAG_SIZE.m} fill={false}>\n        text\n      </Tag>\n    </StoriesLayout>;\n}"}};const componentMeta={title:"Data display/Tag",component:_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["gray","blue","yellow","red","green","purple","white"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","gray","blue","yellow","red","green","purple","white"]},"./src/components/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hf:()=>ArrowUpIcon.Z,FB:()=>CancelIcon.Z,VA:()=>CaretDownIcon.Z,y8:()=>CaretUpIcon.Z,KM:()=>CheckmarkIcon.Z,v4:()=>ChevronDownIcon.Z,g8:()=>ChevronUpIcon.Z,Tw:()=>CloseIcon.Z,cV:()=>CompleteIcon.Z,TI:()=>icons_CopyIcon,h_:()=>HeartIcon.Z,sz:()=>InfoIcon.Z,wX:()=>LoginIcon.Z,R0:()=>LogoutIcon.Z,Oq:()=>MenuIcon.Z,$n:()=>ResizeIcon.Z,W1:()=>SearchIcon.Z,aN:()=>WarningIcon.Z});var CompleteIcon=__webpack_require__("./src/components/icons/CompleteIcon.tsx"),InfoIcon=__webpack_require__("./src/components/icons/InfoIcon.tsx"),CancelIcon=__webpack_require__("./src/components/icons/CancelIcon.tsx"),WarningIcon=__webpack_require__("./src/components/icons/WarningIcon.tsx"),HeartIcon=__webpack_require__("./src/components/icons/HeartIcon.tsx"),SearchIcon=__webpack_require__("./src/components/icons/SearchIcon.tsx"),MenuIcon=__webpack_require__("./src/components/icons/MenuIcon.tsx"),ChevronDownIcon=__webpack_require__("./src/components/icons/ChevronDownIcon.tsx"),ChevronUpIcon=__webpack_require__("./src/components/icons/ChevronUpIcon.tsx"),CaretUpIcon=(__webpack_require__("./src/components/icons/ChevronRightIcon.tsx"),__webpack_require__("./src/components/icons/ChevronLeftIcon.tsx"),__webpack_require__("./src/components/icons/CaretUpIcon.tsx")),CaretDownIcon=__webpack_require__("./src/components/icons/CaretDownIcon.tsx"),ResizeIcon=(__webpack_require__("./src/components/icons/ProfileIcon.tsx"),__webpack_require__("./src/components/icons/ResizeIcon.tsx")),CloseIcon=(__webpack_require__("./src/components/icons/PlusIcon.tsx"),__webpack_require__("./src/components/icons/MinusIcon.tsx"),__webpack_require__("./src/components/icons/CloseIcon.tsx")),LoginIcon=__webpack_require__("./src/components/icons/LoginIcon.tsx"),LogoutIcon=__webpack_require__("./src/components/icons/LogoutIcon.tsx"),ArrowUpIcon=(__webpack_require__("./src/components/icons/FitToScreenIcon.tsx"),__webpack_require__("./src/components/icons/CodeIcon.tsx"),__webpack_require__("./src/components/icons/ChartIcon.tsx"),__webpack_require__("./src/components/icons/GithubIcon.tsx"),__webpack_require__("./src/components/icons/TwitterIcon.tsx"),__webpack_require__("./src/components/icons/LinkedinIcon.tsx"),__webpack_require__("./src/components/icons/DiscordIcon.tsx"),__webpack_require__("./src/components/icons/TelegramIcon.tsx"),__webpack_require__("./src/components/icons/SeparatorIcon.tsx"),__webpack_require__("./src/components/icons/ArrowUpIcon.tsx")),react=(__webpack_require__("./src/components/icons/DotsIcon.tsx"),__webpack_require__("./node_modules/react/index.js")),utils=__webpack_require__("./src/components/icons/utils.ts"),styled_components=__webpack_require__("./node_modules/baseui/icon/styled-components.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CopyIcon=_ref=>{let{title,...props}=_ref;const svgProps=(0,utils.Y)(props);return(0,jsx_runtime.jsxs)(styled_components.ny,{...props,...svgProps,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[title&&(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.375 5.625H2.25V15.75H12.375V5.625ZM1.125 4.5V16.875H13.5V4.5H1.125Z",fill:shared.DM.gray50}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 1.125H16.875V12.375H13.275V11.25H15.75V2.25H6.75V4.725H5.625V1.125Z",fill:shared.DM.gray50})]})};CopyIcon.displayName="CopyIcon";const icons_CopyIcon=(0,react.memo)(CopyIcon);try{CopyIcon.displayName="CopyIcon",CopyIcon.__docgenInfo={description:"",displayName:"CopyIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/CopyIcon.tsx#CopyIcon"]={docgenInfo:CopyIcon.__docgenInfo,name:"CopyIcon",path:"src/components/icons/CopyIcon.tsx#CopyIcon"})}catch(__react_docgen_typescript_loader_error){}var CheckmarkIcon=__webpack_require__("./src/components/icons/CheckmarkIcon.tsx")},"./src/components/tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tag_Tag});var tag=__webpack_require__("./node_modules/baseui/esm/tag/tag.js"),types=__webpack_require__("./src/components/tag/types.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),shared=__webpack_require__("./src/shared/index.ts"),borderStyles=__webpack_require__("./src/shared/styles/borderStyles.ts"),withoutMarginStyles=__webpack_require__("./src/shared/styles/withoutMarginStyles.ts");const tagRootBaseStyles={...borderStyles._,...withoutMarginStyles.Q,fontWeight:500,color:shared.DM.gray50,fontSize:"12px",lineHeight:"16px",cursor:"text"},smallStyles={...(0,expandProperty.Z)("padding","2px 8px"),...(0,expandProperty.Z)("borderRadius","16px"),height:"auto"},mediumStyles={...(0,expandProperty.Z)("padding","4px 16px"),...(0,expandProperty.Z)("borderRadius","32px")},tagRootFillKindModifiedStyles={[types.k.gray]:{backgroundColor:shared.DM.gray600},[types.k.blue]:{backgroundColor:shared.DM.blue500},[types.k.green]:{backgroundColor:shared.DM.green500},[types.k.yellow]:{backgroundColor:shared.DM.yellow500},[types.k.purple]:{backgroundColor:shared.DM.purple500},[types.k.red]:{backgroundColor:shared.DM.red500},[types.k.white]:{backgroundColor:shared.DM.gray50,color:shared.DM.gray900}},tagRootFillBaseStyles={backgroundColor:"transparent"},tagRootKindModifiedStyles={[types.k.gray]:{color:shared.DM.gray300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.gray300}`)},[types.k.blue]:{color:shared.DM.blue300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.blue300}`)},[types.k.green]:{color:shared.DM.green300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.green300}`)},[types.k.yellow]:{color:shared.DM.yellow300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.yellow300}`)},[types.k.purple]:{color:shared.DM.purple300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.purple300}`)},[types.k.red]:{color:shared.DM.red300,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.red300}`)},[types.k.white]:{color:shared.DM.gray50,...(0,expandProperty.Z)("border",`1px solid ${shared.DM.gray50}`)}};var icons=__webpack_require__("./src/components/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Tag=_ref=>{let{kind=types.k.gray,size=types.c.s,overrides:baseOverrides,fill=!0,...props}=_ref;const tagOverrides=((kind,size,fill)=>({Root:{style:()=>({...tagRootBaseStyles,...size===types.c.m?mediumStyles:smallStyles,...fill?tagRootFillBaseStyles:{},...fill?tagRootFillKindModifiedStyles[kind]:tagRootKindModifiedStyles[kind]})},Action:{style:{marginLeft:"4px"}},ActionIcon:{component:_ref=>{let{...props}=_ref;return(0,jsx_runtime.jsx)(icons.Tw,{...props,size:16})}}}))(kind,size,fill),overrides=(0,getMergedOverrides.D)(tagOverrides,baseOverrides);return(0,jsx_runtime.jsx)(tag.Z,{...props,overrides,closeable:!1})};Tag.displayName="Tag";const tag_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{children:{defaultValue:null,description:"Component or String value for label of tag. Default is empty string.",name:"children",required:!1,type:{name:"ReactNode"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"TagOverrides"}},title:{defaultValue:null,description:"Text to display in native OS tooltip on long hover.",name:"title",required:!1,type:{name:"string"}},startEnhancer:{defaultValue:null,description:"",name:"startEnhancer",required:!1,type:{name:"ComponentType<{}>"}},kind:{defaultValue:{value:"TAG_KIND.gray"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'}]}},size:{defaultValue:{value:"TAG_SIZE.s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},fill:{defaultValue:{value:"true"},description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tag/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>TAG_SIZE,k:()=>TAG_KIND});let TAG_KIND=function(TAG_KIND){return TAG_KIND.gray="gray",TAG_KIND.blue="blue",TAG_KIND.green="green",TAG_KIND.yellow="yellow",TAG_KIND.purple="purple",TAG_KIND.red="red",TAG_KIND.white="white",TAG_KIND}({}),TAG_SIZE=function(TAG_SIZE){return TAG_SIZE.s="s",TAG_SIZE.m="m",TAG_SIZE}({})},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DM:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.DM,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/borderStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>withoutBorderStyles});var inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("borderRadius","0");const withoutBorderStyles=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("border","none")},"./src/shared/styles/withoutMarginStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>withoutMarginStyles});const withoutMarginStyles=(0,__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js").Z)("margin",0)},"./src/shared/ui/stories-layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>stories_layout_StoriesLayout});__webpack_require__("./node_modules/react/index.js");var styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const containerStyles={display:"flex",alignItems:"flex-start",gridGap:"12px",flexWrap:"wrap"},StoriesLayout=_ref=>{let{children,isColumn}=_ref;const[css]=(0,styled.hQ)();return(0,jsx_runtime.jsx)("div",{className:css({...containerStyles,flexDirection:isColumn?"column":"row"}),children})};StoriesLayout.displayName="StoriesLayout";const stories_layout_StoriesLayout=StoriesLayout;try{StoriesLayout.displayName="StoriesLayout",StoriesLayout.__docgenInfo={description:"",displayName:"StoriesLayout",props:{isColumn:{defaultValue:null,description:"",name:"isColumn",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/stories-layout/StoriesLayout.tsx#StoriesLayout"]={docgenInfo:StoriesLayout.__docgenInfo,name:"StoriesLayout",path:"src/shared/ui/stories-layout/StoriesLayout.tsx#StoriesLayout"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/baseui/esm/icon/delete.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),_helpers_overrides__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/helpers/overrides.js"),_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/baseui/esm/icon/icon.js"),_excluded=["title","size","color","overrides"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Delete(props,ref){var theme=_slicedToArray((0,_styles__WEBPACK_IMPORTED_MODULE_1__.hQ)(),2)[1],_props$title=props.title,title=void 0===_props$title?"Delete":_props$title,size=props.size,color=props.color,_props$overrides=props.overrides,overrides=void 0===_props$overrides?{}:_props$overrides,restProps=_objectWithoutProperties(props,_excluded),SvgOverride=(0,_helpers_overrides__WEBPACK_IMPORTED_MODULE_2__.vt)({component:theme.icons&&theme.icons.Delete?theme.icons.Delete:null},overrides&&overrides.Svg?(0,_helpers_overrides__WEBPACK_IMPORTED_MODULE_2__.hq)(overrides.Svg):{});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__.Z,_extends({viewBox:"0 0 24 24",ref,title,size,color,overrides:{Svg:SvgOverride}},restProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Delete)},"./node_modules/baseui/esm/icon/icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon});var react=__webpack_require__("./node_modules/react/index.js"),helpers_overrides=__webpack_require__("./node_modules/baseui/esm/helpers/overrides.js"),styled_components=__webpack_require__("./node_modules/baseui/esm/icon/styled-components.js");function omitDollarPrefixedKeys(source){var result={};for(var key in source)"$"!==key[0]&&(result[key]=source[key]);return result}var _excluded=["children","title","size","color","overrides"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Icon=function Icon(props,ref){var children=props.children,title=props.title,size=props.size,color=props.color,_props$overrides=props.overrides,overrides=void 0===_props$overrides?{}:_props$overrides,restProps=_objectWithoutProperties(props,_excluded),_getOverrides2=_slicedToArray((0,helpers_overrides.jb)(overrides.Svg,styled_components.n),2),Svg=_getOverrides2[0],overrideProps=_getOverrides2[1],passThroughProps=Svg.__STYLETRON__?_objectSpread(_objectSpread({title,$color:color,$size:size},restProps),overrideProps):_objectSpread(_objectSpread({title,color,size},omitDollarPrefixedKeys(restProps)),omitDollarPrefixedKeys(overrideProps));return react.createElement(Svg,_extends({"data-baseweb":"icon",ref},passThroughProps),title?react.createElement("title",null,title):null,children)};const icon=react.forwardRef(Icon)},"./node_modules/baseui/esm/icon/styled-components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getSvgStyles(_ref){var $theme=_ref.$theme,$size=_ref.$size,$color=_ref.$color,size=$theme.sizing.scale600;$size&&(size=$theme.sizing[$size]?$theme.sizing[$size]:"number"==typeof $size?"".concat($size,"px"):$size);var color="currentColor";return $color&&(color=$theme.colors[$color]?$theme.colors[$color]:$color),{display:"inline-block",fill:color,color,height:size,width:size}}__webpack_require__.d(__webpack_exports__,{n:()=>Svg,u:()=>getSvgStyles});var Svg=(0,__webpack_require__("./node_modules/baseui/esm/styles/styled.js").zo)("svg",getSvgStyles);Svg.displayName="Svg",Svg.displayName="Svg"},"./node_modules/baseui/esm/styles/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeConsumer:()=>ThemeConsumer,ThemeProvider:()=>_theme_provider__WEBPACK_IMPORTED_MODULE_2__.Z,createThemedStyled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Tp,createThemedUseStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.fj,createThemedWithStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.o4,expandBorderStyles:()=>_util__WEBPACK_IMPORTED_MODULE_1__.Qj,hexToRgb:()=>_util__WEBPACK_IMPORTED_MODULE_1__.oo,styled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.zo,useStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.hQ,withStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.w1,withWrapper:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Le});var _theme_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/styles/theme-provider.js"),_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/styles/util.js"),ThemeConsumer=_theme_provider__WEBPACK_IMPORTED_MODULE_2__.N.Consumer},"./node_modules/baseui/icon/styled-components.js":(__unused_webpack_module,exports,__webpack_require__)=>{function getSvgStyles(_ref){var $theme=_ref.$theme,$size=_ref.$size,$color=_ref.$color,size=$theme.sizing.scale600;$size&&(size=$theme.sizing[$size]?$theme.sizing[$size]:"number"==typeof $size?"".concat($size,"px"):$size);var color="currentColor";return $color&&(color=$theme.colors[$color]?$theme.colors[$color]:$color),{display:"inline-block",fill:color,color,height:size,width:size}}exports.ny=void 0;var Svg=(0,__webpack_require__("./node_modules/baseui/esm/styles/index.js").styled)("svg",getSvgStyles);exports.ny=Svg,Svg.displayName="Svg",Svg.displayName="Svg"}}]);