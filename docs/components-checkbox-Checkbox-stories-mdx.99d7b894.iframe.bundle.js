"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[3541],{"./src/components/checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>constants.Oi,Z:()=>checkbox_Checkbox});var constants=__webpack_require__("./node_modules/baseui/esm/checkbox/constants.js"),checkbox_checkbox=__webpack_require__("./node_modules/baseui/esm/checkbox/checkbox.js"),typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js");var shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");const getBorderColorProperties=color=>({...(0,expandProperty.Z)("borderColor",color)}),getCheckmarkErrorModifiedStyles=isFocused=>({backgroundColor:isFocused?shared.Bi.red500:shared.Bi.red700,...getBorderColorProperties(shared.Bi.red400),":hover":{backgroundColor:shared.Bi.red600}}),getCheckmarkCheckedModifiedStyles=(isFocused,isError)=>{const backgroundColor=isError?shared.Bi.red500:shared.Bi.white,backgroundColorHover=isError?shared.Bi.red600:shared.Bi.gray50,backgroundColorFocused=isError?shared.Bi.red700:shared.Bi.gray100;return{backgroundColor:isFocused?backgroundColorFocused:backgroundColor,...getBorderColorProperties("transparent"),":hover":{backgroundColor:backgroundColorHover}}},getCheckmarkDisabledModifiedStyles=isChecked=>{const backgroundColor=isChecked?shared.Bi.gray600:shared.Bi.gray900,borderColor=isChecked?"transparent":shared.Bi.gray600;return{backgroundColor,...getBorderColorProperties(borderColor),":hover":{backgroundColor,...getBorderColorProperties(borderColor)}}},getCheckmarkBackgroundImage=(isIndeterminate,isChecked,isError)=>isIndeterminate?`url("data:image/svg+xml,${isError?"%3Csvg width='8' height='3' viewBox='0 0 8 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='7.5' height='2.5' fill='%23ffffff'/%3E%3C/svg%3E":"%3Csvg width='8' height='3' viewBox='0 0 8 3' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='7.5' height='2.5' fill='%23000000'/%3E%3C/svg%3E"}")`:isChecked?`url("data:image/svg+xml,${isError?"%3Csvg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clipPath='url(%23clip0_22483_250851)'%3E%3Cpath d='M8.16665 1.75L3.12498 6.79167L0.833313 4.5' stroke='white' strokeWidth='1' strokeLinecap='square' strokeLinejoin='round' /%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_22483_250851'%3E%3Crect width='9' height='8' fill='white' /%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E":"%3Csvg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clipPath='url(%23clip0_22483_250851)'%3E%3Cpath d='M8.16665 1.75L3.12498 6.79167L0.833313 4.5' stroke='black' strokeWidth='1' strokeLinecap='square' strokeLinejoin='round' /%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_22483_250851'%3E%3Crect width='9' height='8' fill='white' /%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"}")`:null;var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{labelPlacement=constants.Oi.right,overrides:baseOverrides,...props}=_ref;const checkboxOverrides={Root:{style:{alignItems:"center"}},Label:{component:typography.Uc,style:_ref=>{let{$labelPlacement,$disabled}=_ref;return{paddingBottom:"top"===$labelPlacement?"10px":null,paddingTop:"bottom"===$labelPlacement?"10px":null,paddingRight:"left"===$labelPlacement?"10px":null,paddingLeft:"right"===$labelPlacement?"10px":null,color:$disabled?shared.Bi.gray600:shared.Bi.white}}},Checkmark:{style:_ref2=>{let{$error,$disabled,$checked,$isIndeterminate,$isFocused}=_ref2;return{...(isIndeterminate=$isIndeterminate,{width:"15px",height:"15px",boxSizing:"border-box",...(0,expandProperty.Z)("borderWidth","1px"),...(0,expandProperty.Z)("margin",0),backgroundSize:isIndeterminate?"8px":"9px",outline:"none",backgroundPositionY:isIndeterminate?"center":"2px",backgroundPositionX:isIndeterminate?"center":"2px"}),backgroundImage:getCheckmarkBackgroundImage($isIndeterminate,$checked,$error),...(isFocused=$isFocused,{backgroundColor:isFocused?shared.Bi.mono600:shared.Bi.black,...getBorderColorProperties(shared.Bi.gray500),":hover":{backgroundColor:shared.Bi.gray800}}),...$error?getCheckmarkErrorModifiedStyles($isFocused):{},...$checked||$isIndeterminate?getCheckmarkCheckedModifiedStyles($isFocused,$error):{},...$disabled?getCheckmarkDisabledModifiedStyles($checked):{}};var isFocused,isIndeterminate}}},overrides=(0,getMergedOverrides.D)(checkboxOverrides,baseOverrides);return(0,jsx_runtime.jsx)(checkbox_checkbox.Z,{...props,overrides,labelPlacement})};Checkbox.displayName="Checkbox";const checkbox_Checkbox=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{"aria-describedby":{defaultValue:null,description:"Id of element which contains a related caption",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"Id of element which contains a related error message",name:"aria-errormessage",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Passed to the input element aria-label attribute.",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Component or String value for label of checkbox.",name:"children",required:!1,type:{name:"ReactNode"}},containsInteractiveElement:{defaultValue:null,description:"Indicates if this checkbox children contain an interactive element (prevents the label from moving focus from the child element to the radio button)",name:"containsInteractiveElement",required:!1,type:{name:"boolean"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"CheckboxOverrides"}},checked:{defaultValue:null,description:"Check or uncheck the control.",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the checkbox from being changed.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Marks the checkbox as required.",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders checkbox in errored state.",name:"error",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"Used to get a ref to the input element. Useful for programmatically focusing the input",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},autoFocus:{defaultValue:null,description:"Focus the checkbox on initial render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Passed to the input element id attribute",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Passed to the input element name attribute",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Passed to the input element value attribute",name:"value",required:!1,type:{name:"string"}},isIndeterminate:{defaultValue:null,description:"Indicates a 'half' state for the checkmark. In this case, `checked` is ignored.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},labelPlacement:{defaultValue:{value:"LABEL_PLACEMENT.right"},description:"How to position the label relative to the checkbox itself.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},checkmarkType:{defaultValue:null,description:"Renders UI as checkmark or toggle switch.",name:"checkmarkType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"toggle"'},{value:'"toggle_round"'}]}},title:{defaultValue:null,description:"Text to display in native OS tooltip on long hover.",name:"title",required:!1,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Handler for change events on trigger element.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseEnter:{defaultValue:null,description:"Handler for mouseenter events on trigger element.",name:"onMouseEnter",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseLeave:{defaultValue:null,description:"Handler for mouseleave events on trigger element.",name:"onMouseLeave",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseDown:{defaultValue:null,description:"Handler for mousedown events on trigger element.",name:"onMouseDown",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseUp:{defaultValue:null,description:"Handler for mouseup events on trigger element.",name:"onMouseUp",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onFocus:{defaultValue:null,description:"handler for focus events on trigger element.",name:"onFocus",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onBlur:{defaultValue:null,description:"handler for blur events on trigger element.",name:"onBlur",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/components/checkbox/Checkbox.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,error:()=>error,indeterminateCheckbox:()=>indeterminateCheckbox,labelPlacement:()=>labelPlacement,withDefaultChecked:()=>withDefaultChecked,withLabel:()=>withLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/checkbox/Checkbox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({checked:baseChecked,...args})=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseChecked);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setChecked(baseChecked)}),[baseChecked]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,checked,onChange:event=>{setChecked(event.target.checked)}})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Form/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Base",args:{},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With Label",args:{children:"Label"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With Default Checked",args:{children:"Label",checked:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Disabled",args:{children:"Label",disabled:!0,checked:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Error",args:{children:"Label",error:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Label Placement",args:{children:"Label",labelPlacement:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.O.left},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Indeterminate checkbox",args:{children:"Label",isIndeterminate:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{of:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Checkbox"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Checkbox, CHECKBOX_LABEL_PLACEMENT} from "@nilfoundation/ui-kit";\n        ...\n        // Base checkbox\n        <Checkbox />\n        // Checkbox with Label\n        <Checkbox>Some text</Checkbox>\n        // Checkbox with default checked\n        <Checkbox checked>With default checked</Checkbox>\n        // Disabled checkbox\n        <Checkbox disabled>Disabled</Checkbox>\n        // Error checkbox\n        <Checkbox error>Error</Checkbox>\n        // Label placement of checkbox is from the left\n        <Checkbox labelPlacement={CHECKBOX_LABEL_PLACEMENT.left}>Label placement</Checkbox>\n        // Indeterminate checkbox\n        <Checkbox isIndeterminate>Indeterminate checkbox</Checkbox>\n    '})]})}const base=Template.bind({});base.storyName="Base",base.args={},base.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const withLabel=Template.bind({});withLabel.storyName="With Label",withLabel.args={children:"Label"},withLabel.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const withDefaultChecked=Template.bind({});withDefaultChecked.storyName="With Default Checked",withDefaultChecked.args={children:"Label",checked:!0},withDefaultChecked.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={children:"Label",disabled:!0,checked:!0},disabled.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const error=Template.bind({});error.storyName="Error",error.args={children:"Label",error:!0},error.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const labelPlacement=Template.bind({});labelPlacement.storyName="Label Placement",labelPlacement.args={children:"Label",labelPlacement:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.O.left},labelPlacement.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const indeterminateCheckbox=Template.bind({});indeterminateCheckbox.storyName="Indeterminate checkbox",indeterminateCheckbox.args={children:"Label",isIndeterminate:!0},indeterminateCheckbox.parameters={storySource:{source:"({\n  checked: baseChecked,\n  ...args\n}) => {\n  const [checked, setChecked] = useState(baseChecked);\n  const onChangeHandler = event => {\n    setChecked(event.target.checked);\n  };\n  useEffect(() => {\n    setChecked(baseChecked);\n  }, [baseChecked]);\n  return <Checkbox {...args} checked={checked} onChange={onChangeHandler} />;\n}"}};const componentMeta={title:"Form/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["base","withLabel","withDefaultChecked","disabled","error","labelPlacement","indeterminateCheckbox"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);