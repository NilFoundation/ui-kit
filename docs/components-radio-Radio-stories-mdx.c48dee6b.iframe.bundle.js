(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[410],{"./src/components/radio/Radio.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,error:()=>error,horizontal:()=>horizontal,vertical:()=>vertical,withDefaultValue:()=>withDefaultValue,withDefaultValueAndDisabled:()=>withDefaultValueAndDisabled});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_RadioGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/radio/RadioGroup.tsx"),_Radio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/radio/Radio.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({value:baseValue,...args})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,value,onChange:event=>{setValue(event.target.value)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Radio__WEBPACK_IMPORTED_MODULE_2__.Z,{value:"1",children:"One"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Radio__WEBPACK_IMPORTED_MODULE_2__.Z,{value:"2",description:"This is a radio description",children:"Two"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Radio__WEBPACK_IMPORTED_MODULE_2__.Z,{value:"3",children:"Three"})]})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"Form/Radio",component:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"radio",children:"Radio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Horizontal",args:{name:"number",align:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.H.horizontal},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Vertical",args:{name:"number",align:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.H.vertical},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Disabled",args:{name:"number",disabled:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Error",args:{name:"number",error:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"With Default Value",args:{name:"number",value:"2"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"With Default Value and Disabled",args:{name:"number",value:"2",disabled:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"radiogroup-props",children:"RadioGroup props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.$4,{of:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"radio-props",children:"Radio props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.$4,{of:_Radio__WEBPACK_IMPORTED_MODULE_2__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Radio"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"RadioGroup"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {RadioGroup, Radio} from "@nilfoundation/ui-kit";\n        ...\n        <RadioGroup align={ALIGN.horizontal} name="name">\n          <Radio value="1">One</Radio>\n          <Radio value="2">Two</Radio>\n          <Radio value="3">Three</Radio>\n        </RadioGroup>\n        <RadioGroup value="2" align={ALIGN.horizontal} name="name">\n          <Radio value="1">One</Radio>\n          <Radio value="2">Two</Radio>\n          <Radio value="3">Three</Radio>\n        </RadioGroup>\n        <RadioGroup error align={ALIGN.horizontal} name="name">\n          <Radio value="1">One</Radio>\n          <Radio value="2">Two</Radio>\n          <Radio value="3">Three</Radio>\n        </RadioGroup>\n        <RadioGroup disabled align={ALIGN.horizontal} name="name">\n          <Radio value="1">One</Radio>\n          <Radio value="2">Two</Radio>\n          <Radio value="3">Three</Radio>\n        </RadioGroup>\n    '})]})}const horizontal=Template.bind({});horizontal.storyName="Horizontal",horizontal.args={name:"number",align:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.H.horizontal},horizontal.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const vertical=Template.bind({});vertical.storyName="Vertical",vertical.args={name:"number",align:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.H.vertical},vertical.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={name:"number",disabled:!0},disabled.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={name:"number",error:!0},error.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const withDefaultValue=Template.bind({});withDefaultValue.storyName="With Default Value",withDefaultValue.args={name:"number",value:"2"},withDefaultValue.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const withDefaultValueAndDisabled=Template.bind({});withDefaultValueAndDisabled.storyName="With Default Value and Disabled",withDefaultValueAndDisabled.args={name:"number",value:"2",disabled:!0},withDefaultValueAndDisabled.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup {...args} value={value} onChange={onChangeHandler}>\n      <Radio value="1">One</Radio>\n      <Radio value="2" description="This is a radio description">\n        Two\n      </Radio>\n      <Radio value="3">Three</Radio>\n    </RadioGroup>;\n}'}};const componentMeta={title:"Form/Radio",component:_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["horizontal","vertical","disabled","error","withDefaultValue","withDefaultValueAndDisabled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","horizontal","vertical","disabled","error","withDefaultValue","withDefaultValueAndDisabled"]},"./src/components/radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>radio_Radio});var radio_radio=__webpack_require__("./node_modules/baseui/esm/radio/radio.js"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");const getRadioMarkOuterStyles=(isChecked,isFocused)=>{const backgroundColor=isChecked?shared.Bi.white:shared.Bi.gray500,backgroundColorHover=isChecked?shared.Bi.gray50:shared.Bi.gray500;return{width:"19px",height:"19px",backgroundColor:isFocused?shared.Bi.gray100:backgroundColor,...(0,expandProperty.Z)("margin","1px"),":hover":{backgroundColor:backgroundColorHover}}},getRadioMarkOuterErrorStyles=(isChecked,isFocused)=>{const backgroundColor=isChecked?shared.Bi.red500:shared.Bi.red400,backgroundColorHover=isChecked?shared.Bi.red600:shared.Bi.red400;return{backgroundColor:isFocused?shared.Bi.red700:backgroundColor,":hover":{backgroundColor:backgroundColorHover}}},radioMarkOuterDisabledStyles={backgroundColor:shared.Bi.gray700,":hover":{backgroundColor:shared.Bi.gray700}},getRadioMarkInnerErrorStyles=isChecked=>({backgroundColor:isChecked?shared.Bi.black:shared.Bi.red700,":hover":{backgroundColor:shared.Bi.red600}}),radioMarkInnerDisabledStyles={backgroundColor:shared.Bi.black,":hover":{backgroundColor:shared.Bi.black}};var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=_ref=>{let{overrides:baseOverrides,...props}=_ref;const radioOverrides={RadioMarkInner:{style:_ref=>{let{$checked,$error,$disabled}=_ref;return{...(isChecked=$checked,{width:isChecked?"6px":"15px",height:isChecked?"6px":"15px",backgroundColor:shared.Bi.black,...(0,expandProperty.Z)("borderRadius",isChecked?"0":"50%"),":hover":{backgroundColor:shared.Bi.gray800}}),...$error?getRadioMarkInnerErrorStyles($checked):{},...$disabled?radioMarkInnerDisabledStyles:{}};var isChecked}},RadioMarkOuter:{style:_ref2=>{let{$checked,$isFocused,$error,$disabled}=_ref2;return{...getRadioMarkOuterStyles($checked,$isFocused),...$error?getRadioMarkOuterErrorStyles($checked,$isFocused):{},...$disabled?radioMarkOuterDisabledStyles:{}}}},Label:{style:_ref3=>{let{$disabled}=_ref3;return{color:$disabled?shared.Bi.gray300:shared.Bi.white}}},Description:{style:_ref4=>{let{$disabled}=_ref4;return{color:$disabled?shared.Bi.gray300:shared.Bi.white}}}},overrides=(0,getMergedOverrides.D)(radioOverrides,baseOverrides);return(0,jsx_runtime.jsx)(radio_radio.Z,{overrides,...props})};Radio.displayName="Radio";const radio_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{autoFocus:{defaultValue:null,description:"Focus the radio on initial render.",name:"autoFocus",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"How the radio will be displayed along with its description. Controls spacing",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},checked:{defaultValue:null,description:"Check or uncheck the control.",name:"checked",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Label of radio.",name:"children",required:!1,type:{name:"ReactNode"}},containsInteractiveElement:{defaultValue:null,description:"Indicates if this radio children contain an interactive element (prevents the label from moving focus from the child element to the radio button)",name:"containsInteractiveElement",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Add more detail about a radio element.",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the checkbox from being changed.",name:"disabled",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"Used to get a ref to the input element. Useful for programmatically focusing the input",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},error:{defaultValue:null,description:"Renders checkbox in errored state.",name:"error",required:!1,type:{name:"boolean"}},isFocused:{defaultValue:null,description:"Is radio focused / active?",name:"isFocused",required:!1,type:{name:"boolean"}},isFocusVisible:{defaultValue:null,description:"Is parent RadioGroup focused by keyboard?",name:"isFocusVisible",required:!1,type:{name:"boolean"}},labelPlacement:{defaultValue:null,description:"How to position the label relative to the checkbox itself.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},name:{defaultValue:null,description:"Passed to the input element name attribute",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"handler for blur events on trigger element.",name:"onBlur",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onChange:{defaultValue:null,description:"Handler for change events on trigger element.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onFocus:{defaultValue:null,description:"handler for focus events on trigger element.",name:"onFocus",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseEnter:{defaultValue:null,description:"Handler for mouseenter events on trigger element.",name:"onMouseEnter",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseLeave:{defaultValue:null,description:"Handler for mouseleave events on trigger element.",name:"onMouseLeave",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseDown:{defaultValue:null,description:"Handler for mousedown events on trigger element.",name:"onMouseDown",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseUp:{defaultValue:null,description:"Handler for mouseup events on trigger element.",name:"onMouseUp",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"RadioOverrides"}},required:{defaultValue:null,description:"Marks the checkbox as required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Passed to the input element value attribute",name:"value",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"Passed to the input element, typically managed by RadioGroup",name:"tabIndex",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/radio/RadioGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>baseui_radio__WEBPACK_IMPORTED_MODULE_2__.H,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var baseui_radio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/radio/radiogroup.js"),baseui_radio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/radio/constants.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(baseui_radio__WEBPACK_IMPORTED_MODULE_1__.Z,{...props})};RadioGroup.displayName="RadioGroup";const __WEBPACK_DEFAULT_EXPORT__=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{"aria-describedby":{defaultValue:null,description:"Id of element which contains a related caption",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"Id of element which contains a related error message",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Used to define a string that labels the radio group. Use this prop if the label is not\nvisible on screen. If the label is visible, use the 'aria-labeledby' prop instead.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Establishes a relationship between the radio group and its label. Screen readers use this\nattribute to catalog the object on a page so that users can navigate between them.",name:"aria-labelledby",required:!1,type:{name:"string"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"RadioGroupOverrides"}},children:{defaultValue:null,description:"As `children` in React native approach represents radio buttons inside of Radio Group. Can use `Radio` from this package.",name:"children",required:!1,type:{name:"ReactNode[]"}},value:{defaultValue:null,description:"The value of radio button, which is preselected.",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled all radio group from being changed. To disable some of radios provide disabled flag in each of them.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Set if the control is required to be checked.",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Sets radio group into error state.",name:"error",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Set to be focused (active) on selected\\checked radio.",name:"autoFocus",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"How to position radio buttons in the group.",name:"align",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},name:{defaultValue:null,description:"String value for the name of RadioGroup, it is used to group buttons. If missed default is random ID string.",name:"name",required:!1,type:{name:"string"}},labelPlacement:{defaultValue:null,description:"How to position the label relative to the radio itself.",name:"labelPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},id:{defaultValue:null,description:"Unique id for RadioGroup, help ARIA to identify element",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler for change events on trigger element.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseEnter:{defaultValue:null,description:"Handler for mouseenter events on trigger element.",name:"onMouseEnter",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onMouseLeave:{defaultValue:null,description:"Handler for mouseleave events on trigger element.",name:"onMouseLeave",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onFocus:{defaultValue:null,description:"Handler for focus events on trigger element.",name:"onFocus",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onBlur:{defaultValue:null,description:"Handler for blur events on trigger element.",name:"onBlur",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/radio/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/radio/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);