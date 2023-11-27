"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[3706],{"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./node_modules/baseui/esm/button/button.js"),types=__webpack_require__("./src/components/button/types.ts"),spinner=__webpack_require__("./src/components/spinner/index.ts"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),border=__webpack_require__("./src/shared/styles/border.ts");const buttonBaseStyles={outline:"0",boxShadow:"none"},buttonModifiedStyles={[types.iY.mini]:{...buttonBaseStyles},[types.iY.compact]:{...buttonBaseStyles},[types.iY.default]:{...buttonBaseStyles},[types.iY.large]:{...buttonBaseStyles}},buttonKindModifiedStyles={[types.g9.primary]:{...border.x,backgroundColor:shared.Bi.white,":hover":{backgroundColor:shared.Bi.gray100},":disabled":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.secondary]:{...border.x,backgroundColor:shared.Bi.gray700,":hover":{backgroundColor:shared.Bi.gray600},":disabled":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.tertiary]:{...border.x,backgroundColor:"transparent",":hover":{backgroundColor:shared.Bi.gray700},":disabled":{backgroundColor:"transparent",color:shared.Bi.gray500}},[types.g9.danger]:{...border.x,backgroundColor:shared.Bi.red400,color:shared.Bi.white,":hover":{backgroundColor:shared.Bi.red500},":active:not(:disabled)":{backgroundColor:shared.Bi.red600},":disabled":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.toggle]:{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray200,...(0,expandProperty.Z)("borderRadius",shared.L_[2]),...(0,expandProperty.Z)("padding","8px 12px"),":hover":{backgroundColor:shared.Bi.gray700,color:shared.Bi.gray100},":active:not(:disabled)":{backgroundColor:shared.Bi.gray600,color:shared.Bi.gray100},":disabled":{color:shared.Bi.gray400,backgroundColor:shared.Bi.gray800}}},buttonFocusedModifiedStyles={[types.g9.primary]:{backgroundColor:shared.Bi.gray200},[types.g9.secondary]:{backgroundColor:shared.Bi.gray200,color:shared.Bi.black},[types.g9.tertiary]:{backgroundColor:shared.Bi.gray600},[types.g9.danger]:{backgroundColor:shared.Bi.red600},[types.g9.toggle]:{color:shared.Bi.gray50,border:`1px solid ${shared.Bi.gray50}`}},buttonDisabledModifiedStyles={[types.g9.primary]:{":hover":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.secondary]:{":hover":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.tertiary]:{":hover":{backgroundColor:"transparent",color:shared.Bi.gray500}},[types.g9.danger]:{":hover":{backgroundColor:shared.Bi.mono600,color:shared.Bi.gray500}},[types.g9.toggle]:{":hover":{color:shared.Bi.gray400,backgroundColor:shared.Bi.gray800}}},spinnerModifiedStyles={[types.iY.mini]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[8]}`)},[types.iY.compact]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[12]}`)},[types.iY.default]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding","0 14px")},[types.iY.large]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[16]}`)}},checkedToggleButtonModifiedStyles={color:shared.Bi.gray900,backgroundColor:shared.Bi.gray50,":hover":{backgroundColor:shared.Bi.gray50,color:shared.Bi.gray900},":active:not(:disabled)":{backgroundColor:shared.Bi.gray50,color:shared.Bi.gray900},":disabled":{backgroundColor:shared.Bi.gray800,color:shared.Bi.gray400}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerSize={[types.iY.mini]:spinner.T.xSmall,[types.iY.compact]:spinner.T.small,[types.iY.default]:spinner.T.medium,[types.iY.large]:spinner.T.large},getSpinnerColor=function(){return(arguments.length>1?arguments[1]:void 0)||"gray"!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gray")?shared.Bi.white:shared.Bi.black};var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{kind=types.g9.primary,size=types.iY.default,shape=types.AX.default,disabled,isLoading,colors,startEnhancer,endEnhancer,className,children,role,checked,overrides:baseOverrides,...props}=_ref;const buttonOverrides=((kind,size,colors,isChecked)=>{const customColorsStyles=colors?{...colors,":hover":{...colors}}:{};return{Root:{style:_ref=>{let{$disabled,$isFocusVisible}=_ref;return{...buttonModifiedStyles[size],...buttonKindModifiedStyles[kind],...$isFocusVisible?buttonFocusedModifiedStyles[kind]:{},...isChecked?checkedToggleButtonModifiedStyles:{},...$disabled?buttonDisabledModifiedStyles[kind]:{},...customColorsStyles}}},StartEnhancer:{style:{marginRight:"8px"}},EndEnhancer:{style:{marginLeft:"8px"}},LoadingSpinner:{component:_ref2=>{let{$disabled}=_ref2;return(0,jsx_runtime.jsx)(spinner.$,{color:getSpinnerColor(kind,$disabled),size:spinnerSize[size],animation:!0})}},LoadingSpinnerContainer:{style:{...spinnerModifiedStyles[size]}}}})(kind,size,colors,checked),overrides=(0,getMergedOverrides.D)(buttonOverrides,baseOverrides),buttonKind=kind===types.g9.danger||kind===types.g9.toggle?types.g9.secondary:kind,buttonRole=role??(kind===types.g9.toggle?"switch":void 0);return(0,jsx_runtime.jsx)(button_button.Z,{ref,...props,className,isLoading,shape,kind:buttonKind,size,disabled,startEnhancer,endEnhancer,overrides,role:buttonRole,"aria-checked":checked,children})}));Button.displayName="Button";const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{kind:{defaultValue:{value:"BUTTON_KIND.primary"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"toggle"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((a: SyntheticEvent<HTMLButtonElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ButtonOverrides"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},startEnhancer:{defaultValue:null,description:"A helper rendered at the start of the button.",name:"startEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},endEnhancer:{defaultValue:null,description:"A helper rendered at the end of the button.",name:"endEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},isLoading:{defaultValue:null,description:"Show loading button style and spinner.",name:"isLoading",required:!1,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"CustomColors"}},isSelected:{defaultValue:null,description:"Indicates that the button is selected",name:"isSelected",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"BUTTON_SIZE.default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"default"'},{value:'"compact"'},{value:'"large"'}]}},shape:{defaultValue:{value:"BUTTON_SHAPE.default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"square"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AX:()=>BUTTON_SHAPE,g9:()=>BUTTON_KIND,iY:()=>BUTTON_SIZE});let BUTTON_KIND=function(BUTTON_KIND){return BUTTON_KIND.primary="primary",BUTTON_KIND.secondary="secondary",BUTTON_KIND.tertiary="tertiary",BUTTON_KIND.danger="danger",BUTTON_KIND.toggle="toggle",BUTTON_KIND}({}),BUTTON_SIZE=function(BUTTON_SIZE){return BUTTON_SIZE.mini="mini",BUTTON_SIZE.default="default",BUTTON_SIZE.compact="compact",BUTTON_SIZE.large="large",BUTTON_SIZE}({}),BUTTON_SHAPE=function(BUTTON_SHAPE){return BUTTON_SHAPE.default="default",BUTTON_SHAPE.square="square",BUTTON_SHAPE}({})},"./src/components/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hf:()=>ArrowUpIcon.Z,FB:()=>CancelIcon.Z,VA:()=>CaretDownIcon.Z,y8:()=>CaretUpIcon.Z,v4:()=>ChevronDownIcon.Z,g8:()=>ChevronUpIcon.Z,Tw:()=>CloseIcon.Z,cV:()=>CompleteIcon.Z,TI:()=>icons_CopyIcon,h_:()=>HeartIcon.Z,sz:()=>InfoIcon.Z,wX:()=>LoginIcon.Z,R0:()=>LogoutIcon.Z,Oq:()=>MenuIcon.Z,$n:()=>ResizeIcon.Z,W1:()=>SearchIcon.Z,b3:()=>SeparatorIcon.Z,aN:()=>WarningIcon.Z});var CompleteIcon=__webpack_require__("./src/components/icons/CompleteIcon.tsx"),InfoIcon=__webpack_require__("./src/components/icons/InfoIcon.tsx"),CancelIcon=__webpack_require__("./src/components/icons/CancelIcon.tsx"),WarningIcon=__webpack_require__("./src/components/icons/WarningIcon.tsx"),HeartIcon=__webpack_require__("./src/components/icons/HeartIcon.tsx"),SearchIcon=__webpack_require__("./src/components/icons/SearchIcon.tsx"),MenuIcon=__webpack_require__("./src/components/icons/MenuIcon.tsx"),ChevronDownIcon=__webpack_require__("./src/components/icons/ChevronDownIcon.tsx"),ChevronUpIcon=__webpack_require__("./src/components/icons/ChevronUpIcon.tsx"),CaretUpIcon=(__webpack_require__("./src/components/icons/ChevronRightIcon.tsx"),__webpack_require__("./src/components/icons/ChevronLeftIcon.tsx"),__webpack_require__("./src/components/icons/CaretUpIcon.tsx")),CaretDownIcon=__webpack_require__("./src/components/icons/CaretDownIcon.tsx"),ResizeIcon=(__webpack_require__("./src/components/icons/ProfileIcon.tsx"),__webpack_require__("./src/components/icons/ResizeIcon.tsx")),CloseIcon=(__webpack_require__("./src/components/icons/PlusIcon.tsx"),__webpack_require__("./src/components/icons/MinusIcon.tsx"),__webpack_require__("./src/components/icons/CloseIcon.tsx")),LoginIcon=__webpack_require__("./src/components/icons/LoginIcon.tsx"),LogoutIcon=__webpack_require__("./src/components/icons/LogoutIcon.tsx"),SeparatorIcon=(__webpack_require__("./src/components/icons/FitToScreenIcon.tsx"),__webpack_require__("./src/components/icons/CodeIcon.tsx"),__webpack_require__("./src/components/icons/ChartIcon.tsx"),__webpack_require__("./src/components/icons/GithubIcon.tsx"),__webpack_require__("./src/components/icons/TwitterIcon.tsx"),__webpack_require__("./src/components/icons/LinkedinIcon.tsx"),__webpack_require__("./src/components/icons/DiscordIcon.tsx"),__webpack_require__("./src/components/icons/TelegramIcon.tsx"),__webpack_require__("./src/components/icons/SeparatorIcon.tsx")),ArrowUpIcon=__webpack_require__("./src/components/icons/ArrowUpIcon.tsx"),react=(__webpack_require__("./src/components/icons/DotsIcon.tsx"),__webpack_require__("./node_modules/react/index.js")),utils=__webpack_require__("./src/components/icons/utils.ts"),styled_components=__webpack_require__("./node_modules/baseui/icon/styled-components.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CopyIcon=_ref=>{let{title,...props}=_ref;const svgProps=(0,utils.Y)(props);return(0,jsx_runtime.jsxs)(styled_components.ny,{...props,...svgProps,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[title&&(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.375 5.625H2.25V15.75H12.375V5.625ZM1.125 4.5V16.875H13.5V4.5H1.125Z",fill:shared.Bi.gray50}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 1.125H16.875V12.375H13.275V11.25H15.75V2.25H6.75V4.725H5.625V1.125Z",fill:shared.Bi.gray50})]})};CopyIcon.displayName="CopyIcon";const icons_CopyIcon=(0,react.memo)(CopyIcon);try{CopyIcon.displayName="CopyIcon",CopyIcon.__docgenInfo={description:"",displayName:"CopyIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/CopyIcon.tsx#CopyIcon"]={docgenInfo:CopyIcon.__docgenInfo,name:"CopyIcon",path:"src/components/icons/CopyIcon.tsx#CopyIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const rectList=[{x:"5.625"},{x:"4.07483",y:"1.91528",opacity:"0.93",transform:"rotate(150 4.07483 1.91528)"},{x:"2.29028",y:"3.42517",opacity:"0.81",transform:"rotate(120 2.29028 3.42517)"},{x:"1.5",y:"5.625",opacity:"0.73",transform:"rotate(90 1.5 5.625)"},{x:"1.91528",y:"7.92517",opacity:"0.65",transform:"rotate(60 1.91528 7.92517)"},{x:"3.42517",y:"9.70953",opacity:"0.56",transform:"rotate(30 3.42517 9.70953)"},{x:"5.625",y:"10.5",opacity:"0.48"},{x:"9.32483",y:"11.0085",opacity:"0.4",transform:"rotate(150 9.32483 11.0085)"},{x:"11.3837",y:"8.67517",opacity:"0.32",transform:"rotate(120 11.3837 8.67517)"},{x:"12",y:"5.625",opacity:"0.24",transform:"rotate(90 12 5.625)"},{x:"11.0087",y:"2.67517",opacity:"0.16",transform:"rotate(60 11.0087 2.67517)"},{x:"8.67517",y:"0.616333",opacity:"0.08",transform:"rotate(30 8.67517 0.616333)"}],SpinnerIcon=(0,react.forwardRef)(((_ref,ref)=>{let{size="12",color=shared.Bi.white,animation}=_ref;const[css]=(0,styled.hQ)(),RectItem=(0,styled.zo)("rect",{animationDuration:"1.2s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationName:animation?{from:{opacity:"1"},to:{opacity:"0"}}:"unset"});return(0,jsx_runtime.jsxs)("svg",{ref,width:size,height:size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{clipPath:"url(#clip0_22275_878)",children:rectList.map(((rectItem,index)=>(0,jsx_runtime.jsx)(RectItem,{...rectItem,className:css({animationDelay:.1*index-1.2+"s"}),opacity:animation?"1":rectItem.opacity,width:"0.75",height:"1.5",fill:color},index.toString())))}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_22275_878",children:(0,jsx_runtime.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]})}));SpinnerIcon.displayName="SpinnerIcon";const ui_SpinnerIcon=SpinnerIcon;try{SpinnerIcon.displayName="SpinnerIcon",SpinnerIcon.__docgenInfo={description:"",displayName:"SpinnerIcon",props:{size:{defaultValue:{value:"12"},description:"",name:"size",required:!1,type:{name:"string"}},color:{defaultValue:{value:"#F2F2F2"},description:"",name:"color",required:!1,type:{name:"string"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"]={docgenInfo:SpinnerIcon.__docgenInfo,name:"SpinnerIcon",path:"src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}var dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js");const SpinnerBlock=_ref=>{let{children,className}=_ref;const RotatedBlock=(0,dist_browser_esm.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"max-content"});return(0,jsx_runtime.jsx)(RotatedBlock,{className,children})};SpinnerBlock.displayName="SpinnerBlock";const ui_SpinnerBlock=SpinnerBlock;try{SpinnerBlock.displayName="SpinnerBlock",SpinnerBlock.__docgenInfo={description:"",displayName:"SpinnerBlock",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"]={docgenInfo:SpinnerBlock.__docgenInfo,name:"SpinnerBlock",path:"src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/spinner/types.ts"),typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js");const labelStyles={marginTop:"8px"},spinnerLabelComponent={[types.T.xSmall]:props=>(0,jsx_runtime.jsx)(typography.UU,{color:"gray500",as:"span",...props}),[types.T.small]:props=>(0,jsx_runtime.jsx)(typography.S$,{color:"gray500",as:"span",...props}),[types.T.medium]:props=>(0,jsx_runtime.jsx)(typography.Uc,{color:"gray500",as:"span",...props}),[types.T.large]:props=>(0,jsx_runtime.jsx)(typography.D9,{color:"gray500",as:"span",...props}),[types.T.xLarge]:props=>(0,jsx_runtime.jsx)(typography.fH,{color:"gray500",as:"span",...props})},SpinnerLabel=_ref=>{let{size=types.T.medium,children}=_ref;const[css]=(0,styled.hQ)(),TypographyComponent=spinnerLabelComponent[size];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TypographyComponent,{className:css(labelStyles),children})})},ui_SpinnerLabel=SpinnerLabel;try{SpinnerLabel.displayName="SpinnerLabel",SpinnerLabel.__docgenInfo={description:"",displayName:"SpinnerLabel",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"]={docgenInfo:SpinnerLabel.__docgenInfo,name:"SpinnerLabel",path:"src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"})}catch(__react_docgen_typescript_loader_error){}const spinnerIconSize={[types.T.xSmall]:"12",[types.T.small]:"16",[types.T.medium]:"20",[types.T.large]:"24",[types.T.xLarge]:"32"},Spinner=_ref=>{let{size=types.T.medium,color,animation,label,...props}=_ref;return(0,jsx_runtime.jsxs)(ui_SpinnerBlock,{...props,children:[(0,jsx_runtime.jsx)(ui_SpinnerIcon,{animation,color,size:spinnerIconSize[size]}),label&&(0,jsx_runtime.jsx)(ui_SpinnerLabel,{size,children:label})]})};Spinner.displayName="Spinner";const spinner_Spinner=(0,react.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Spinner__WEBPACK_IMPORTED_MODULE_0__.Z,T:()=>_types__WEBPACK_IMPORTED_MODULE_1__.T});var _Spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/Spinner.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/spinner/types.ts")},"./src/components/spinner/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>SPINNER_SIZE});let SPINNER_SIZE=function(SPINNER_SIZE){return SPINNER_SIZE.xSmall="xSmall",SPINNER_SIZE.small="small",SPINNER_SIZE.medium="medium",SPINNER_SIZE.large="large",SPINNER_SIZE.xLarge="xLarge",SPINNER_SIZE}({})},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/border.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>WithoutBorderStyles,x:()=>BorderRadiusStyles});var inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");const BorderRadiusStyles=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("borderRadius","0"),WithoutBorderStyles=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.Z)("border","none")},"./src/shared/ui/getFigmaParameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>getFigmaParameters});const getFigmaParameters=figmaUrl=>({design:{type:"figma",url:figmaUrl}})},"./src/components/button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,danger:()=>danger,default:()=>Button_stories,disabled:()=>disabled,loading:()=>loading,primary:()=>primary,secondary:()=>secondary,shapeSquare:()=>shapeSquare,tertiary:()=>tertiary,toggle:()=>toggle,withEndEnhancer:()=>withEndEnhancer,withStartEnhancer:()=>withStartEnhancer});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Button=__webpack_require__("./src/components/button/Button.tsx"),types=__webpack_require__("./src/components/button/types.ts"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const containerStyles={display:"flex",alignItems:"flex-end",gridGap:"12px"},StoriesLayout=_ref=>{let{children}=_ref;const[css]=(0,styled.hQ)();return(0,jsx_runtime.jsx)("div",{className:css(containerStyles),children})};StoriesLayout.displayName="StoriesLayout";const stories_layout_StoriesLayout=StoriesLayout;try{StoriesLayout.displayName="StoriesLayout",StoriesLayout.__docgenInfo={description:"",displayName:"StoriesLayout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/stories-layout/StoriesLayout.tsx#StoriesLayout"]={docgenInfo:StoriesLayout.__docgenInfo,name:"StoriesLayout",path:"src/shared/ui/stories-layout/StoriesLayout.tsx#StoriesLayout"})}catch(__react_docgen_typescript_loader_error){}var icons=__webpack_require__("./src/components/icons/index.ts"),getFigmaParameters=__webpack_require__("./src/shared/ui/getFigmaParameters.ts");const Template=({children,...args})=>(0,jsx_runtime.jsxs)(stories_layout_StoriesLayout,{color:"#141414",children:[(0,jsx_runtime.jsx)(Button.Z,{size:types.iY.mini,...args,children:children??"Mini Button"}),(0,jsx_runtime.jsx)(Button.Z,{size:types.iY.compact,...args,children:children??"Compact Button"}),(0,jsx_runtime.jsx)(Button.Z,{size:types.iY.default,...args,children:children??"Default Button"}),(0,jsx_runtime.jsx)(Button.Z,{size:types.iY.large,...args,children:children??"Large Button"})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Form/Button",component:Button.Z}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{isColumn:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Primary",args:{kind:"primary"},parameters:(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-19984&mode=design&t=g655DrIEKA1td3Rn-0"),children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Secondary",args:{kind:"secondary"},parameters:(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20213&mode=design&t=g655DrIEKA1td3Rn-0"),children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Tertiary",args:{kind:"tertiary"},parameters:(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20442&mode=design&t=vdSasKmpFl6EHyXE-0"),children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Danger",args:{kind:"danger"},parameters:(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20865&mode=design&t=vdSasKmpFl6EHyXE-0"),children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Toggle",args:{kind:"toggle"},parameters:(0,getFigmaParameters.M)("https://www.figma.com/file/9IKNrBtLd7mkDHnkcVBa1b/Site?type=design&node-id=217-52646&mode=design&t=zAUctn6rIsUhG3nz-0"),children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",args:{disabled:!0},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Loading",args:{isLoading:!0,children:""},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Shape Square",args:{shape:types.AX.square,children:(0,jsx_runtime.jsx)(icons.h_,{size:20})},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"With Start Enhancer",args:{startEnhancer:()=>(0,jsx_runtime.jsx)(icons.h_,{})},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"With End Enhancer",args:{endEnhancer:(0,jsx_runtime.jsx)(icons.h_,{})},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Button.Z}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use, import the component ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," and from ",(0,jsx_runtime.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Button, BUTTON_SIZE, BUTTON_SHAPE, BUTTON_KIND Upload} from "@nilfoundation/ui-kit";\n         ...\n        <Button>Button Label</Button>\n        // With size\n        <Button size={BUTTON_SIZE.mini}>Button Label</Button>\n        // With kind\n        <Button kind={BUTTON_KIND.gray}>Button Label</Button>\n        // With shape\n        <Button shape={BUTTON_SHAPE.square}>Button Label</Button>\n        // Disabled\n        <Button disabled>Button Label</Button>\n        // Loading\n        <Button isLoading>Button Label</Button>\n        // With enhancer\n        <Button startEnhancer={<Upload />} endEnhancer={<Upload />}>Button Label</Button>\n  '})]})}const primary=Template.bind({});primary.storyName="Primary",primary.args={kind:"primary"},primary.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'},...(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-19984&mode=design&t=g655DrIEKA1td3Rn-0")};const secondary=Template.bind({});secondary.storyName="Secondary",secondary.args={kind:"secondary"},secondary.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'},...(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20213&mode=design&t=g655DrIEKA1td3Rn-0")};const tertiary=Template.bind({});tertiary.storyName="Tertiary",tertiary.args={kind:"tertiary"},tertiary.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'},...(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20442&mode=design&t=vdSasKmpFl6EHyXE-0")};const danger=Template.bind({});danger.storyName="Danger",danger.args={kind:"danger"},danger.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'},...(0,getFigmaParameters.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=99-20865&mode=design&t=vdSasKmpFl6EHyXE-0")};const toggle=Template.bind({});toggle.storyName="Toggle",toggle.args={kind:"toggle"},toggle.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'},...(0,getFigmaParameters.M)("https://www.figma.com/file/9IKNrBtLd7mkDHnkcVBa1b/Site?type=design&node-id=217-52646&mode=design&t=zAUctn6rIsUhG3nz-0")};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={disabled:!0},disabled.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'}};const loading=Template.bind({});loading.storyName="Loading",loading.args={isLoading:!0,children:""},loading.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'}};const shapeSquare=Template.bind({});shapeSquare.storyName="Shape Square",shapeSquare.args={shape:types.AX.square,children:(0,jsx_runtime.jsx)(icons.h_,{size:20})},shapeSquare.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'}};const withStartEnhancer=Template.bind({});withStartEnhancer.storyName="With Start Enhancer",withStartEnhancer.args={startEnhancer:()=>(0,jsx_runtime.jsx)(icons.h_,{})},withStartEnhancer.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'}};const withEndEnhancer=Template.bind({});withEndEnhancer.storyName="With End Enhancer",withEndEnhancer.args={endEnhancer:(0,jsx_runtime.jsx)(icons.h_,{})},withEndEnhancer.parameters={storySource:{source:'({\n  children,\n  ...args\n}) => {\n  return <StoriesLayout color="#141414">\n      <Button size={BUTTON_SIZE.mini} {...args}>\n        {children ?? "Mini Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.compact} {...args}>\n        {children ?? "Compact Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.default} {...args}>\n        {children ?? "Default Button"}\n      </Button>\n      <Button size={BUTTON_SIZE.large} {...args}>\n        {children ?? "Large Button"}\n      </Button>\n    </StoriesLayout>;\n}'}};const componentMeta={title:"Form/Button",component:Button.Z,tags:["stories-mdx"],includeStories:["primary","secondary","tertiary","danger","toggle","disabled","loading","shapeSquare","withStartEnhancer","withEndEnhancer"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Button_stories=componentMeta},"./node_modules/baseui/esm/styles/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeConsumer:()=>ThemeConsumer,ThemeProvider:()=>_theme_provider__WEBPACK_IMPORTED_MODULE_2__.Z,createThemedStyled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Tp,createThemedUseStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.fj,createThemedWithStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.o4,expandBorderStyles:()=>_util__WEBPACK_IMPORTED_MODULE_1__.Qj,hexToRgb:()=>_util__WEBPACK_IMPORTED_MODULE_1__.oo,styled:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.zo,useStyletron:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.hQ,withStyle:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.w1,withWrapper:()=>_styled__WEBPACK_IMPORTED_MODULE_0__.Le});var _theme_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/styles/theme-provider.js"),_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/styles/util.js"),ThemeConsumer=_theme_provider__WEBPACK_IMPORTED_MODULE_2__.N.Consumer},"./node_modules/baseui/icon/styled-components.js":(__unused_webpack_module,exports,__webpack_require__)=>{function getSvgStyles(_ref){var $theme=_ref.$theme,$size=_ref.$size,$color=_ref.$color,size=$theme.sizing.scale600;$size&&(size=$theme.sizing[$size]?$theme.sizing[$size]:"number"==typeof $size?"".concat($size,"px"):$size);var color="currentColor";return $color&&(color=$theme.colors[$color]?$theme.colors[$color]:$color),{display:"inline-block",fill:color,color,height:size,width:size}}exports.ny=void 0;var Svg=(0,__webpack_require__("./node_modules/baseui/esm/styles/index.js").styled)("svg",getSvgStyles);exports.ny=Svg,Svg.displayName="Svg",Svg.displayName="Svg"}}]);