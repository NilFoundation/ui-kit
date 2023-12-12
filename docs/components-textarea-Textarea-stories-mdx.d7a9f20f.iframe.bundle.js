"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[2262],{"./src/components/textarea/Textarea.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,clearable:()=>clearable,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabled:()=>disabled,error:()=>error,loading:()=>loading,medium:()=>medium,readonly:()=>readonly,resizable:()=>resizable,secondary:()=>secondary,small:()=>small,withDefaultValue:()=>withDefaultValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Textarea__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/textarea/Textarea.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/textarea/types.ts"),baseui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({value:baseValue,...args})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)()),[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseValue),[css]=(0,baseui__WEBPACK_IMPORTED_MODULE_5__.hQ)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{className:css({maxWidth:"400px"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,value,onChange:event=>{setValue(event.target.value)}})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Form/Textarea",component:_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"textarea",children:"Textarea"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Small",args:{placeholder:"Textarea Field",size:_types__WEBPACK_IMPORTED_MODULE_2__.v.small},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Medium",args:{placeholder:"Textarea Field",size:_types__WEBPACK_IMPORTED_MODULE_2__.v.medium},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Resizable",args:{placeholder:"Resizable Field",resize:"both"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Error",args:{placeholder:"Error Field",error:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"With Default Value",args:{placeholder:"Default Value Field",value:"Default Value"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Clearable",args:{placeholder:"Clearable Field",clearable:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Disabled",args:{placeholder:"Disabled Field",disabled:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Readonly",args:{placeholder:"Readonly Field",readOnly:!0,value:"Textarea Value"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Loading",args:{placeholder:"Loading Field",isLoading:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Secondary",args:{placeholder:"Textarea Secondary",kind:_types__WEBPACK_IMPORTED_MODULE_2__.p.secondary},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Textarea"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Textarea, TEXTAREA_SIZE} from "@nilfoundation/ui-kit";\n        ...\n        <Textarea placeholder="Textarea Field" size={TEXTAREA_SIZE.small} />\n        // Disabled\n        <Textarea placeholder="Textarea Field" disabled />\n        // Readonly\n        <Textarea placeholder="Textarea Field" readOnly />\n        // Loading\n        <Textarea placeholder="Textarea Field" isLoading />\n        // Clearable\n        <Textarea placeholder="Textarea Field" clearable />\n        // Resizable\n        <Textarea placeholder="Textarea Field" resize="both" />\n  '})]})}const small=Template.bind({});small.storyName="Small",small.args={placeholder:"Textarea Field",size:_types__WEBPACK_IMPORTED_MODULE_2__.v.small},small.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const medium=Template.bind({});medium.storyName="Medium",medium.args={placeholder:"Textarea Field",size:_types__WEBPACK_IMPORTED_MODULE_2__.v.medium},medium.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const resizable=Template.bind({});resizable.storyName="Resizable",resizable.args={placeholder:"Resizable Field",resize:"both"},resizable.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={placeholder:"Error Field",error:!0},error.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const withDefaultValue=Template.bind({});withDefaultValue.storyName="With Default Value",withDefaultValue.args={placeholder:"Default Value Field",value:"Default Value"},withDefaultValue.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const clearable=Template.bind({});clearable.storyName="Clearable",clearable.args={placeholder:"Clearable Field",clearable:!0},clearable.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={placeholder:"Disabled Field",disabled:!0},disabled.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const readonly=Template.bind({});readonly.storyName="Readonly",readonly.args={placeholder:"Readonly Field",readOnly:!0,value:"Textarea Value"},readonly.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const loading=Template.bind({});loading.storyName="Loading",loading.args={placeholder:"Loading Field",isLoading:!0},loading.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const secondary=Template.bind({});secondary.storyName="Secondary",secondary.args={placeholder:"Textarea Secondary",kind:_types__WEBPACK_IMPORTED_MODULE_2__.p.secondary},secondary.parameters={storySource:{source:'({\n  value: baseValue,\n  ...args\n}) => {\n  const [value, setValue] = useState(baseValue);\n  const [css] = useStyletron();\n  const onChangeHandler = event => {\n    setValue(event.target.value);\n  };\n  return <div className={css({\n    maxWidth: "400px"\n  })}>\n      <Textarea {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const componentMeta={title:"Form/Textarea",component:_Textarea__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["small","medium","resizable","error","withDefaultValue","clearable","disabled","readonly","loading","secondary"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);