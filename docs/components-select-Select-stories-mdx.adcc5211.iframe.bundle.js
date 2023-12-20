"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[4253],{"./src/components/select/Select.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,error:()=>error,large:()=>large,loading:()=>loading,medium:()=>medium,multiple:()=>multiple,multipleDisabled:()=>multipleDisabled,options:()=>options,secondaySelect:()=>secondaySelect,small:()=>small,withDefaultValue:()=>withDefaultValue,withoutSearchable:()=>withoutSearchable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/select/Select.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/select/types.ts"),baseui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({value:baseValue,onChange,...args})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)()),[css]=(0,baseui__WEBPACK_IMPORTED_MODULE_5__.hQ)(),[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{className:css({width:"400px"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,value,onChange:params=>{setValue(params.value),onChange?.(params.value)}})})},options=[{label:"AliceBlue",id:"#F0F8FF"},{label:"AntiqueWhite",id:"#FAEBD7"},{label:"Aqua",id:"#00FFFF"},{label:"Aquamarine",id:"#7FFFD4"},{label:"Azure",id:"#F0FFFF"},{label:"Beige",id:"#F5F5DC"}];function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Form/Select",component:_Select__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Small",args:{options,placeholder:"Small Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Medium",args:{options,placeholder:"Medium Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.medium},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Large",args:{options,placeholder:"Large Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.large},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Multiple",args:{options,placeholder:"Multiple Select",multi:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Multiple Disabled",args:{options,placeholder:"Multiple Select",multi:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small,value:[options[0],options[1]],disabled:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Disabled",args:{options,placeholder:"Disabled Select",disabled:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Error",args:{options,placeholder:"Error Select",error:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Loading",args:{options,placeholder:"Loading Select",isLoading:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Without Searchable",args:{options,placeholder:"Select",searchable:!1,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"With Default Value",args:{options,placeholder:"With Default Value",value:[options[0]],size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Seconday select",args:{options,placeholder:"Secondary select",kind:_types__WEBPACK_IMPORTED_MODULE_2__.g.secondary},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:_Select__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Select"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Select, SELECT_SIZE} from "@nilfoundation/ui-kit";\n        const OPTIONS = [\n          { label: "AliceBlue", id: "#F0F8FF" },\n          { label: "AntiqueWhite", id: "#FAEBD7" },\n          { label: "Aqua", id: "#00FFFF" },\n          { label: "Aquamarine", id: "#7FFFD4" },\n          { label: "Azure", id: "#F0FFFF" },\n          { label: "Beige", id: "#F5F5DC" }\n        ];\n        ...\n        <Select options={OPTIONS} placeholder="Select" size={SELECT_SIZE.small} />\n        // Disabled\n        <Select options={OPTIONS} placeholder="Select" disabled />\n        // Loading\n        <Select options={OPTIONS} placeholder="Select" isLoading />\n        // Searchable\n        <Select options={OPTIONS} placeholder="Select" searchable />\n        // Multiple\n        <Select options={OPTIONS} placeholder="Select" multi />\n  '})]})}const small=Template.bind({});small.storyName="Small",small.args={options,placeholder:"Small Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},small.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const medium=Template.bind({});medium.storyName="Medium",medium.args={options,placeholder:"Medium Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.medium},medium.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const large=Template.bind({});large.storyName="Large",large.args={options,placeholder:"Large Select",size:_types__WEBPACK_IMPORTED_MODULE_2__.p.large},large.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const multiple=Template.bind({});multiple.storyName="Multiple",multiple.args={options,placeholder:"Multiple Select",multi:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},multiple.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const multipleDisabled=Template.bind({});multipleDisabled.storyName="Multiple Disabled",multipleDisabled.args={options,placeholder:"Multiple Select",multi:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small,value:[options[0],options[1]],disabled:!0},multipleDisabled.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={options,placeholder:"Disabled Select",disabled:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},disabled.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={options,placeholder:"Error Select",error:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},error.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const loading=Template.bind({});loading.storyName="Loading",loading.args={options,placeholder:"Loading Select",isLoading:!0,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},loading.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const withoutSearchable=Template.bind({});withoutSearchable.storyName="Without Searchable",withoutSearchable.args={options,placeholder:"Select",searchable:!1,size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},withoutSearchable.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const withDefaultValue=Template.bind({});withDefaultValue.storyName="With Default Value",withDefaultValue.args={options,placeholder:"With Default Value",value:[options[0]],size:_types__WEBPACK_IMPORTED_MODULE_2__.p.small},withDefaultValue.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const secondaySelect=Template.bind({});secondaySelect.storyName="Seconday select",secondaySelect.args={options,placeholder:"Secondary select",kind:_types__WEBPACK_IMPORTED_MODULE_2__.g.secondary},secondaySelect.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const componentMeta={title:"Form/Select",component:_Select__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["small","medium","large","multiple","multipleDisabled","disabled","error","loading","withoutSearchable","withDefaultValue","secondaySelect"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);