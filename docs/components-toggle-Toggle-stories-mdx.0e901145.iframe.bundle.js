(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[8298],{"./src/components/toggle/Toggle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,toggleChecked:()=>toggleChecked,toggleCheckedWithLabelPlacement:()=>toggleCheckedWithLabelPlacement,toggleDisabled:()=>toggleDisabled,toggleUnchecked:()=>toggleUnchecked});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Toggle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/toggle/Toggle.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({checked:baseChecked,...args})=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseChecked);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setChecked(baseChecked)}),[baseChecked]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Toggle__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,checked,onChange:event=>{setChecked(event.target.checked)}})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Form/Toggle",component:_Toggle__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Toggle checked",args:{children:"Label",checked:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Toggle checked with label placement",args:{children:"Label",checked:!0,labelPlacement:_Toggle__WEBPACK_IMPORTED_MODULE_1__.O.left},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Toggle unchecked",args:{children:"Label",checked:!1},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Toggle disabled",args:{children:"Label",disabled:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{of:_Toggle__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Toggle"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Toggle, TOGGLE_LABEL_PLACEMENT} from "@nilfoundation/ui-kit";\n        ...\n        // Base toggle\n        <Toggle />\n        // Toggle with Label\n        <Toggle>Some text</Toggle>\n        // Toggle with default checked\n        <Toggle checked>With default checked</Toggle>\n        // Disabled toggle\n        <Toggle disabled>Disabled</Toggle>\n        // Error checkbox\n        <Toggle error>Error</Toggle>\n        // Label placement of checkbox is from the left\n        <Toggle labelPlacement={TOGGLE_LABEL_PLACEMENT.left}>Label placement</Toggle>\n    '})]})}const toggleChecked=Template.bind({});toggleChecked.storyName="Toggle checked",toggleChecked.args={children:"Label",checked:!0},toggleChecked.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Toggle {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const toggleCheckedWithLabelPlacement=Template.bind({});toggleCheckedWithLabelPlacement.storyName="Toggle checked with label placement",toggleCheckedWithLabelPlacement.args={children:"Label",checked:!0,labelPlacement:_Toggle__WEBPACK_IMPORTED_MODULE_1__.O.left},toggleCheckedWithLabelPlacement.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Toggle {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const toggleUnchecked=Template.bind({});toggleUnchecked.storyName="Toggle unchecked",toggleUnchecked.args={children:"Label",checked:!1},toggleUnchecked.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Toggle {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const toggleDisabled=Template.bind({});toggleDisabled.storyName="Toggle disabled",toggleDisabled.args={children:"Label",disabled:!0},toggleDisabled.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Toggle {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const componentMeta={title:"Form/Toggle",component:_Toggle__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["toggleChecked","toggleCheckedWithLabelPlacement","toggleUnchecked","toggleDisabled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","toggleChecked","toggleCheckedWithLabelPlacement","toggleUnchecked","toggleDisabled"]},"./src/components/toggle/Toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>constants.Oi,Z:()=>toggle_Toggle});var constants=__webpack_require__("./node_modules/baseui/esm/checkbox/constants.js"),checkbox_checkbox=__webpack_require__("./node_modules/baseui/esm/checkbox/checkbox.js"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),boxShadowFocusStyles=__webpack_require__("./src/shared/styles/boxShadowFocusStyles.ts"),checkmarkCommonLabelStyles=__webpack_require__("./src/shared/theme/checkmarkCommonLabelStyles.ts");const getSwitchBackgroundStyles=(isChecked,$disabled)=>{const transition=(0,expandProperty.Z)("transition","background-color 0.15s ease-in");return $disabled?{backgroundColor:shared.Bi.gray500,...transition}:isChecked?{backgroundColor:shared.Bi.green200,...transition,":hover":{backgroundColor:shared.Bi.green100},":active":{backgroundColor:shared.Bi.green50}}:{backgroundColor:shared.Bi.gray200,...transition,":hover":{backgroundColor:shared.Bi.gray100},":active":{backgroundColor:shared.Bi.gray50}}};var withoutMarginStyles=__webpack_require__("./src/shared/styles/withoutMarginStyles.ts"),typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js");const getToggleOverrides=disabled=>({Root:{style:{alignItems:"center"}},Label:{component:typography.Uc,style:_ref=>{let{$labelPlacement}=_ref;return{paddingBottom:"top"===$labelPlacement?"10px":null,paddingTop:"bottom"===$labelPlacement?"10px":null,paddingRight:"left"===$labelPlacement?"10px":null,paddingLeft:"right"===$labelPlacement?"10px":null,...(0,checkmarkCommonLabelStyles.B)(!!disabled)}}},Toggle:{style:_ref2=>{let{$checked}=_ref2;return{backgroundColor:shared.Bi.gray800,...(0,expandProperty.Z)("transition","transform 0.15s ease-in"),width:"12px",height:"12px",...(0,expandProperty.Z)("borderRadius","2px"),...$checked?{transform:"translateX(14px)"}:{}}}},ToggleTrack:{style:_ref3=>{let{$checked,$disabled,$isFocused}=_ref3;return{width:"30px",height:"16px",boxSizing:"border-box",boxShadow:"none",...(0,expandProperty.Z)("transition","transform 0.15s ease-in"),...(0,expandProperty.Z)("borderRadius","4px"),...(0,expandProperty.Z)("padding","2px"),...getSwitchBackgroundStyles($checked,$disabled),...withoutMarginStyles.Q,...$isFocused?boxShadowFocusStyles.M:{}}}}});try{getToggleOverrides.displayName="getToggleOverrides",getToggleOverrides.__docgenInfo={description:"",displayName:"getToggleOverrides",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggle/overrides.tsx#getToggleOverrides"]={docgenInfo:getToggleOverrides.__docgenInfo,name:"getToggleOverrides",path:"src/components/toggle/overrides.tsx#getToggleOverrides"})}catch(__react_docgen_typescript_loader_error){}var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{labelPlacement=constants.Oi.right,overrides:baseOverrides,disabled,...props}=_ref;const checkboxOverrides=getToggleOverrides(disabled),overrides=(0,getMergedOverrides.D)(checkboxOverrides,baseOverrides);return(0,jsx_runtime.jsx)(checkbox_checkbox.Z,{...props,disabled,overrides,labelPlacement,checkmarkType:"toggle"})};Toggle.displayName="Toggle";const toggle_Toggle=Toggle;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{children:{defaultValue:null,description:"Component or String value for label of checkbox.",name:"children",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Passed to the input element name attribute",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Passed to the input element value attribute",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler for change events on trigger element.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},disabled:{defaultValue:null,description:"Disable the checkbox from being changed.",name:"disabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Focus the checkbox on initial render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Passed to the input element id attribute",name:"id",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"handler for blur events on trigger element.",name:"onBlur",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onFocus:{defaultValue:null,description:"handler for focus events on trigger element.",name:"onFocus",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseEnter:{defaultValue:null,description:"Handler for mouseenter events on trigger element.",name:"onMouseEnter",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseLeave:{defaultValue:null,description:"Handler for mouseleave events on trigger element.",name:"onMouseLeave",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"CheckboxOverrides"}},"aria-errormessage":{defaultValue:null,description:"Id of element which contains a related error message",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Id of element which contains a related caption",name:"aria-describedby",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Used to get a ref to the input element. Useful for programmatically focusing the input",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},required:{defaultValue:null,description:"Marks the checkbox as required.",name:"required",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Passed to the input element aria-label attribute.",name:"ariaLabel",required:!1,type:{name:"string"}},containsInteractiveElement:{defaultValue:null,description:"Indicates if this checkbox children contain an interactive element (prevents the label from moving focus from the child element to the radio button)",name:"containsInteractiveElement",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"Check or uncheck the control.",name:"checked",required:!1,type:{name:"boolean"}},labelPlacement:{defaultValue:{value:"LABEL_PLACEMENT.right"},description:"How to position the label relative to the checkbox itself.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},title:{defaultValue:null,description:"Text to display in native OS tooltip on long hover.",name:"title",required:!1,type:{name:"string | null"}},onMouseDown:{defaultValue:null,description:"Handler for mousedown events on trigger element.",name:"onMouseDown",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseUp:{defaultValue:null,description:"Handler for mouseup events on trigger element.",name:"onMouseUp",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/boxShadowFocusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>boxShadowFocusStyles});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts");const boxShadowFocusStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.Bi.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.Bi.gray50}`}},"./src/shared/styles/withoutMarginStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>withoutMarginStyles});const withoutMarginStyles=(0,__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js").Z)("margin",0)},"./src/shared/theme/checkmarkCommonLabelStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>getCheckmarkLabelStyles});var inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/colors.ts");const getCheckmarkLabelStyles=disabled=>{const transition=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_1__.Z)("color 0.15s ease-in");return disabled?{color:_colors__WEBPACK_IMPORTED_MODULE_0__.B.gray500,...transition}:{color:_colors__WEBPACK_IMPORTED_MODULE_0__.B.gray50,...transition}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);