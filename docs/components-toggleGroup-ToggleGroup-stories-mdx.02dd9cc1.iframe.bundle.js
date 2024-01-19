"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[5084],{"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./node_modules/baseui/esm/button/button.js"),types=__webpack_require__("./src/components/button/types.ts"),spinner=__webpack_require__("./src/components/spinner/index.ts"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),boxShadowFocusStyles=__webpack_require__("./src/shared/styles/boxShadowFocusStyles.ts");const buttonBaseStyles={outline:"0",boxShadow:"none",...(0,expandProperty.Z)("borderRadius","8px"),transitionProperty:"background-color, color",transitionDuration:"0.15s",transitionTimingFunction:"ease-in"},buttonModifiedStyles={[types.i.mini]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","4px 8px")},[types.i.compact]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","8px 16px")},[types.i.default]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","12px 24px")},[types.i.large]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","16px 32px")}},buttonKindModifiedStyles={[types.g.primary]:{backgroundColor:shared.Bi.gray50,color:shared.Bi.gray900,":hover":{backgroundColor:shared.Bi.gray200},":active:not(:disabled)":{backgroundColor:shared.Bi.gray300},":disabled":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray500}},[types.g.secondary]:{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray200,":hover":{backgroundColor:shared.Bi.gray700,color:shared.Bi.gray50},":active:not(:disabled)":{backgroundColor:shared.Bi.gray600,color:shared.Bi.gray50},":disabled":{color:shared.Bi.gray500,backgroundColor:shared.Bi.gray800}},[types.g.tertiary]:{backgroundColor:"transparent",":hover":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray50},":active:not(:disabled)":{backgroundColor:shared.Bi.gray700,color:shared.Bi.gray50},":disabled":{color:shared.Bi.gray500}},[types.g.danger]:{backgroundColor:shared.Bi.red500,color:shared.Bi.gray50,":hover":{backgroundColor:shared.Bi.red600},":active:not(:disabled)":{backgroundColor:shared.Bi.red800},":disabled":{backgroundColor:shared.Bi.red800,color:shared.Bi.gray500}},[types.g.toggle]:{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray200,":hover":{backgroundColor:shared.Bi.gray700,color:shared.Bi.gray50},":active:not(:disabled)":{backgroundColor:shared.Bi.gray600,color:shared.Bi.gray50},":disabled":{color:shared.Bi.gray500,backgroundColor:shared.Bi.gray800}},[types.g.text]:{backgroundColor:"transparent",color:shared.Bi.gray200,textDecoration:"underline",":hover":{backgroundColor:"transparent",color:shared.Bi.gray50},":active:not(:disabled)":{backgroundColor:"transparent",color:shared.Bi.gray50},":disabled":{backgroundColor:"transparent",color:shared.Bi.gray500}}},buttonFocusedModifiedStyles={[types.g.primary]:{backgroundColor:shared.Bi.gray50,...boxShadowFocusStyles.M},[types.g.secondary]:{color:shared.Bi.gray50,...boxShadowFocusStyles.M},[types.g.tertiary]:{...boxShadowFocusStyles.M},[types.g.danger]:{...boxShadowFocusStyles.M},[types.g.toggle]:{color:shared.Bi.gray50,...boxShadowFocusStyles.M},[types.g.text]:{color:shared.Bi.gray50,...boxShadowFocusStyles.M}},buttonDisabledModifiedStyles={[types.g.primary]:{":hover":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray500}},[types.g.secondary]:{":hover":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray500}},[types.g.tertiary]:{":hover":{backgroundColor:"transparent",color:shared.Bi.gray500}},[types.g.danger]:{":hover":{backgroundColor:shared.Bi.red800,color:shared.Bi.gray500}},[types.g.toggle]:{":hover":{color:shared.Bi.gray500,backgroundColor:shared.Bi.gray800}},[types.g.text]:{":hover":{color:shared.Bi.gray500,backgroundColor:"transparent"}}},spinnerModifiedStyles={[types.i.mini]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[8]}`)},[types.i.compact]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[12]}`)},[types.i.default]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding","0 14px")},[types.i.large]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[16]}`)}},checkedToggleButtonModifiedStyles={backgroundColor:shared.Bi.gray50,color:shared.Bi.gray900,":hover":{backgroundColor:shared.Bi.gray200},":active:not(:disabled)":{backgroundColor:shared.Bi.gray300},":disabled":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray500}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerSize={[types.i.mini]:spinner.T.xSmall,[types.i.compact]:spinner.T.small,[types.i.default]:spinner.T.medium,[types.i.large]:spinner.T.large},getSpinnerColor=(kind,disabled)=>{if(disabled)return shared.Bi.gray500;switch(kind){case types.g.primary:return shared.Bi.gray900;case types.g.secondary:case types.g.tertiary:case types.g.text:case types.g.toggle:case types.g.danger:return shared.Bi.gray50;default:return shared.Bi.black}};var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{kind=types.g.primary,size=types.i.default,disabled,isLoading,colors,startEnhancer,endEnhancer,className,children,role,checked,overrides:baseOverrides,...props}=_ref;const buttonOverrides=((kind,size,colors,isChecked)=>{const customColorsStyles=colors?{...colors,":hover":{...colors}}:{};return{Root:{style:_ref=>{let{$disabled,$isFocusVisible}=_ref;return{...buttonModifiedStyles[size],...buttonKindModifiedStyles[kind],...$isFocusVisible?buttonFocusedModifiedStyles[kind]:{},...isChecked?checkedToggleButtonModifiedStyles:{},...$disabled?buttonDisabledModifiedStyles[kind]:{},...customColorsStyles}}},StartEnhancer:{style:{marginRight:"4px"}},EndEnhancer:{style:{marginLeft:"4px"}},LoadingSpinner:{component:_ref2=>{let{$disabled}=_ref2;return(0,jsx_runtime.jsx)(spinner.$,{color:getSpinnerColor(kind,$disabled),size:spinnerSize[size],animation:!0})}},LoadingSpinnerContainer:{style:{...spinnerModifiedStyles[size]}}}})(kind,size,colors,checked),overrides=(0,getMergedOverrides.D)(buttonOverrides,baseOverrides),buttonKind=kind===types.g.danger||kind===types.g.toggle||kind===types.g.text?types.g.secondary:kind,buttonRole=role??(kind===types.g.toggle?"switch":void 0);return(0,jsx_runtime.jsx)(button_button.Z,{ref,...props,className,isLoading,kind:buttonKind,size,disabled,startEnhancer,endEnhancer,overrides,role:buttonRole,"aria-checked":checked,children})}));Button.displayName="Button";const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{kind:{defaultValue:{value:"BUTTON_KIND.primary"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"toggle"'},{value:'"text"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((a: SyntheticEvent<HTMLButtonElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ButtonOverrides"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},isLoading:{defaultValue:null,description:"Show loading button style and spinner.",name:"isLoading",required:!1,type:{name:"boolean"}},startEnhancer:{defaultValue:null,description:"A helper rendered at the start of the button.",name:"startEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},endEnhancer:{defaultValue:null,description:"A helper rendered at the end of the button.",name:"endEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"CustomColors"}},isSelected:{defaultValue:null,description:"Indicates that the button is selected",name:"isSelected",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"BUTTON_SIZE.default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"default"'},{value:'"compact"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g9:()=>_types__WEBPACK_IMPORTED_MODULE_1__.g,iY:()=>_types__WEBPACK_IMPORTED_MODULE_1__.i,zx:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/Button.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/types.ts")},"./src/components/button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>BUTTON_KIND,i:()=>BUTTON_SIZE});let BUTTON_KIND=function(BUTTON_KIND){return BUTTON_KIND.primary="primary",BUTTON_KIND.secondary="secondary",BUTTON_KIND.tertiary="tertiary",BUTTON_KIND.danger="danger",BUTTON_KIND.toggle="toggle",BUTTON_KIND.text="text",BUTTON_KIND}({}),BUTTON_SIZE=function(BUTTON_SIZE){return BUTTON_SIZE.mini="mini",BUTTON_SIZE.default="default",BUTTON_SIZE.compact="compact",BUTTON_SIZE.large="large",BUTTON_SIZE}({})},"./src/components/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const rectList=[{x:"5.625"},{x:"4.07483",y:"1.91528",opacity:"0.93",transform:"rotate(150 4.07483 1.91528)"},{x:"2.29028",y:"3.42517",opacity:"0.81",transform:"rotate(120 2.29028 3.42517)"},{x:"1.5",y:"5.625",opacity:"0.73",transform:"rotate(90 1.5 5.625)"},{x:"1.91528",y:"7.92517",opacity:"0.65",transform:"rotate(60 1.91528 7.92517)"},{x:"3.42517",y:"9.70953",opacity:"0.56",transform:"rotate(30 3.42517 9.70953)"},{x:"5.625",y:"10.5",opacity:"0.48"},{x:"9.32483",y:"11.0085",opacity:"0.4",transform:"rotate(150 9.32483 11.0085)"},{x:"11.3837",y:"8.67517",opacity:"0.32",transform:"rotate(120 11.3837 8.67517)"},{x:"12",y:"5.625",opacity:"0.24",transform:"rotate(90 12 5.625)"},{x:"11.0087",y:"2.67517",opacity:"0.16",transform:"rotate(60 11.0087 2.67517)"},{x:"8.67517",y:"0.616333",opacity:"0.08",transform:"rotate(30 8.67517 0.616333)"}],SpinnerIcon=(0,react.forwardRef)(((_ref,ref)=>{let{size="12",color=shared.Bi.white,animation}=_ref;const[css]=(0,styled.hQ)(),RectItem=(0,styled.zo)("rect",{animationDuration:"1.2s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationName:animation?{from:{opacity:"1"},to:{opacity:"0"}}:"unset"});return(0,jsx_runtime.jsxs)("svg",{ref,width:size,height:size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{clipPath:"url(#clip0_22275_878)",children:rectList.map(((rectItem,index)=>(0,jsx_runtime.jsx)(RectItem,{...rectItem,className:css({animationDelay:.1*index-1.2+"s"}),opacity:animation?"1":rectItem.opacity,width:"0.75",height:"1.5",fill:color},index.toString())))}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_22275_878",children:(0,jsx_runtime.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]})}));SpinnerIcon.displayName="SpinnerIcon";const ui_SpinnerIcon=SpinnerIcon;try{SpinnerIcon.displayName="SpinnerIcon",SpinnerIcon.__docgenInfo={description:"",displayName:"SpinnerIcon",props:{size:{defaultValue:{value:"12"},description:"",name:"size",required:!1,type:{name:"string"}},color:{defaultValue:{value:"#F1F1F1"},description:"",name:"color",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"]={docgenInfo:SpinnerIcon.__docgenInfo,name:"SpinnerIcon",path:"src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}var dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js");const SpinnerBlock=_ref=>{let{children,className}=_ref;const RotatedBlock=(0,dist_browser_esm.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"max-content"});return(0,jsx_runtime.jsx)(RotatedBlock,{className,children})};SpinnerBlock.displayName="SpinnerBlock";const ui_SpinnerBlock=SpinnerBlock;try{SpinnerBlock.displayName="SpinnerBlock",SpinnerBlock.__docgenInfo={description:"",displayName:"SpinnerBlock",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"]={docgenInfo:SpinnerBlock.__docgenInfo,name:"SpinnerBlock",path:"src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/spinner/types.ts"),typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js");const labelStyles={marginTop:"8px"},spinnerLabelComponent={[types.T.xSmall]:props=>(0,jsx_runtime.jsx)(typography.UU,{color:"gray500",as:"span",...props}),[types.T.small]:props=>(0,jsx_runtime.jsx)(typography.S$,{color:"gray500",as:"span",...props}),[types.T.medium]:props=>(0,jsx_runtime.jsx)(typography.Uc,{color:"gray500",as:"span",...props}),[types.T.large]:props=>(0,jsx_runtime.jsx)(typography.D9,{color:"gray500",as:"span",...props}),[types.T.xLarge]:props=>(0,jsx_runtime.jsx)(typography.fH,{color:"gray500",as:"span",...props})},SpinnerLabel=_ref=>{let{size=types.T.medium,children}=_ref;const[css]=(0,styled.hQ)(),TypographyComponent=spinnerLabelComponent[size];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TypographyComponent,{className:css(labelStyles),children})})},ui_SpinnerLabel=SpinnerLabel;try{SpinnerLabel.displayName="SpinnerLabel",SpinnerLabel.__docgenInfo={description:"",displayName:"SpinnerLabel",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"]={docgenInfo:SpinnerLabel.__docgenInfo,name:"SpinnerLabel",path:"src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"})}catch(__react_docgen_typescript_loader_error){}const spinnerIconSize={[types.T.xSmall]:"12",[types.T.small]:"16",[types.T.medium]:"20",[types.T.large]:"24",[types.T.xLarge]:"32"},Spinner=_ref=>{let{size=types.T.medium,color,animation,label,...props}=_ref;return(0,jsx_runtime.jsxs)(ui_SpinnerBlock,{...props,children:[(0,jsx_runtime.jsx)(ui_SpinnerIcon,{animation,color,size:spinnerIconSize[size]}),label&&(0,jsx_runtime.jsx)(ui_SpinnerLabel,{size,children:label})]})};Spinner.displayName="Spinner";const spinner_Spinner=(0,react.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Spinner__WEBPACK_IMPORTED_MODULE_0__.Z,T:()=>_types__WEBPACK_IMPORTED_MODULE_1__.T});var _Spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/Spinner.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/spinner/types.ts")},"./src/components/spinner/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>SPINNER_SIZE});let SPINNER_SIZE=function(SPINNER_SIZE){return SPINNER_SIZE.xSmall="xSmall",SPINNER_SIZE.small="small",SPINNER_SIZE.medium="medium",SPINNER_SIZE.large="large",SPINNER_SIZE.xLarge="xLarge",SPINNER_SIZE}({})},"./src/components/toggleGroup/ToggleGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toggleGroup_ToggleGroup});var react=__webpack_require__("./node_modules/react/index.js"),dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js"),components_button=__webpack_require__("./src/components/button/index.ts"),shared=__webpack_require__("./src/shared/index.ts");const styles={labelStyles:{marginBottom:shared.L_[8]},toggleGroupStyles:{display:"flex",flexWrap:"wrap",gap:shared.L_[16]}};var typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleGroupInner=(_ref,ref)=>{let{options,value,onChange,disabled,label,multiple,className,size=components_button.iY.compact}=_ref;const[css]=(0,dist_browser_esm.hQ)(),labelId=(0,react.useId)();return(0,jsx_runtime.jsxs)("div",{ref,className,children:[label&&(0,jsx_runtime.jsx)(typography.Uc,{className:css(styles.labelStyles),id:labelId,children:label}),(0,jsx_runtime.jsx)("div",{className:css(styles.toggleGroupStyles),"aria-labelledby":labelId,children:options.map((option=>(0,jsx_runtime.jsx)(components_button.zx,{disabled:disabled||option.disabled,kind:components_button.g9.toggle,size,checked:value.some((x=>x===option.key)),onClick:()=>(_ref2=>{let{key}=_ref2;const isSelected=value.some((x=>x===key));if(multiple){const newSelectedOptions=isSelected?value.filter((x=>x!==key)):[...value,key];onChange(newSelectedOptions)}else onChange(isSelected?[]:[key])})(option),children:option.label},option.key)))})]})};ToggleGroupInner.displayName="ToggleGroupInner";const toggleGroup_ToggleGroup=(0,react.forwardRef)(ToggleGroupInner)},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/boxShadowFocusStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>boxShadowFocusStyles});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts");const boxShadowFocusStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.Bi.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.Bi.gray50}`}},"./src/shared/ui/getFigmaParameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>getFigmaParameters});const getFigmaParameters=figmaUrl=>({design:{type:"figma",url:figmaUrl}})},"./src/components/toggleGroup/ToggleGroup.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,multiple:()=>multiple,withLabel:()=>withLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ToggleGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/toggleGroup/ToggleGroup.tsx"),_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/shared/ui/getFigmaParameters.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({...args})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)()),[selectedOptions,setSelectedOptions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ToggleGroup__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,value:selectedOptions,onChange:options=>{setSelectedOptions(options)}})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Form/ToggleGroup",component:_ToggleGroup__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"toggle-group",children:"Toggle Group"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Base",args:{options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],disabled:!0,value:["zkLlvm"]},parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0"),children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Multiple",args:{options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],multiple:!0},parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("hhttps://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0"),children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With label",args:{options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],label:"This is a Toggle group"},parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0"),children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{of:_ToggleGroup__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"ToggleGroup"})," and from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {ToggleGroup} from "@nilfoundation/ui-kit";\n         ...\n        <ToggleGroup\n          options={[{ label: "Proof Market", key: "proof-market" }]}\n          selectedOptions={selectedOptions}\n          onToggle={(options) => {\n            setSelectedOptions(options);\n          }}\n        />\n  '})]})}const base=Template.bind({});base.storyName="Base",base.args={options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],disabled:!0,value:["zkLlvm"]},base.parameters={storySource:{source:"({\n  ...args\n}) => {\n  const [selectedOptions, setSelectedOptions] = useState([]);\n  return <div>\n      <ToggleGroup {...args} value={selectedOptions} onChange={options => {\n      setSelectedOptions(options);\n    }} />\n    </div>;\n}"},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0")};const multiple=Template.bind({});multiple.storyName="Multiple",multiple.args={options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],multiple:!0},multiple.parameters={storySource:{source:"({\n  ...args\n}) => {\n  const [selectedOptions, setSelectedOptions] = useState([]);\n  return <div>\n      <ToggleGroup {...args} value={selectedOptions} onChange={options => {\n      setSelectedOptions(options);\n    }} />\n    </div>;\n}"},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("hhttps://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0")};const withLabel=Template.bind({});withLabel.storyName="With label",withLabel.args={options:[{label:"Proof Market",key:"proof-market"},{label:"zkLLVM",key:"zkLlvm"}],label:"This is a Toggle group"},withLabel.parameters={storySource:{source:"({\n  ...args\n}) => {\n  const [selectedOptions, setSelectedOptions] = useState([]);\n  return <div>\n      <ToggleGroup {...args} value={selectedOptions} onChange={options => {\n      setSelectedOptions(options);\n    }} />\n    </div>;\n}"},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_5__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=302-220793&mode=design&t=IoTNKEMYSa7jQu9x-0")};const componentMeta={title:"Form/ToggleGroup",component:_ToggleGroup__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["base","multiple","withLabel"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);