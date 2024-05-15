"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[8514],{"./src/components/button-icon/ButtonIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_icon_ButtonIcon});var react=__webpack_require__("./node_modules/react/index.js"),components_button=__webpack_require__("./src/components/button/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");const buttonIconPaddingStyles={[components_button.iY.compact]:{...(0,expandProperty.Z)("padding","4px")},[components_button.iY.default]:{...(0,expandProperty.Z)("padding","8px")},[components_button.iY.large]:{...(0,expandProperty.Z)("padding","12px")}};var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtinIcon=(0,react.forwardRef)(((_ref,ref)=>{let{kind,size=components_button.iY.default,overrides:baseOverrides,icon,...props}=_ref;const buttonIconOverrides=(size=>({Root:{style:{...buttonIconPaddingStyles[size]}}}))(size),overrides=(0,getMergedOverrides.D)(buttonIconOverrides,baseOverrides),iconSize=(size=>{switch(size){case"compact":case"default":default:return"16px";case"large":return"24px"}})(size);return(0,jsx_runtime.jsx)(components_button.zx,{ref,kind,size,overrides,...props,children:(0,react.cloneElement)(icon,{size:iconSize})})}));ButtinIcon.displayName="ButtonIcon";const button_icon_ButtonIcon=ButtinIcon;try{ButtonIcon.displayName="ButtonIcon",ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((a: SyntheticEvent<HTMLButtonElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ButtonOverrides"}},kind:{defaultValue:null,description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"toggle"'},{value:'"text"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},isLoading:{defaultValue:null,description:"Show loading button style and spinner.",name:"isLoading",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"Indicates that the button is selected",name:"isSelected",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},size:{defaultValue:{value:"BUTTON_SIZE.default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button-icon/ButtonIcon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"src/components/button-icon/ButtonIcon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./node_modules/baseui/esm/button/button.js"),types=__webpack_require__("./src/components/button/types.ts"),spinner=__webpack_require__("./src/components/spinner/index.ts"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),boxShadowSharedStyles=__webpack_require__("./src/shared/styles/boxShadowSharedStyles.ts");const buttonBaseStyles={outline:"0",boxShadow:"none",...(0,expandProperty.Z)("borderRadius","8px"),transitionProperty:"background-color, color",transitionDuration:"0.15s",transitionTimingFunction:"ease-in"},buttonModifiedStyles={[types.i.mini]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","4px 8px"),fontSize:"12px"},[types.i.compact]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","8px 16px"),fontSize:"12px"},[types.i.default]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","12px 24px"),fontSize:"16px"},[types.i.large]:{...buttonBaseStyles,...(0,expandProperty.Z)("padding","16px 32px"),fontSize:"16px"}},buttonKindModifiedStyles={[types.g.primary]:{backgroundColor:shared.DM.gray50,color:shared.DM.gray900,":hover":{backgroundColor:shared.DM.gray200},":active:not(:disabled)":{backgroundColor:shared.DM.gray300},":disabled":{backgroundColor:shared.DM.gray800,color:shared.DM.gray500}},[types.g.secondary]:{backgroundColor:shared.DM.gray800,color:shared.DM.gray200,":hover":{backgroundColor:shared.DM.gray700,color:shared.DM.gray50},":active:not(:disabled)":{backgroundColor:shared.DM.gray600,color:shared.DM.gray50},":disabled":{color:shared.DM.gray500,backgroundColor:shared.DM.gray800}},[types.g.tertiary]:{backgroundColor:"transparent",":hover":{backgroundColor:shared.DM.gray800,color:shared.DM.gray50},":active:not(:disabled)":{backgroundColor:shared.DM.gray700,color:shared.DM.gray50},":disabled":{color:shared.DM.gray500}},[types.g.danger]:{backgroundColor:shared.DM.red500,color:shared.DM.gray50,":hover":{backgroundColor:shared.DM.red600},":active:not(:disabled)":{backgroundColor:shared.DM.red800},":disabled":{backgroundColor:shared.DM.red800,color:shared.DM.gray500}},[types.g.toggle]:{backgroundColor:shared.DM.gray800,color:shared.DM.gray200,":hover":{backgroundColor:shared.DM.gray700,color:shared.DM.gray50},":active:not(:disabled)":{backgroundColor:shared.DM.gray600,color:shared.DM.gray50},":disabled":{color:shared.DM.gray500,backgroundColor:shared.DM.gray800}},[types.g.text]:{backgroundColor:"transparent",color:shared.DM.gray200,textDecoration:"underline",":hover":{backgroundColor:"transparent",color:shared.DM.gray50},":active:not(:disabled)":{backgroundColor:"transparent",color:shared.DM.gray50},":disabled":{backgroundColor:"transparent",color:shared.DM.gray500}}},buttonFocusedModifiedStyles={[types.g.primary]:{backgroundColor:shared.DM.gray50,...boxShadowSharedStyles.M},[types.g.secondary]:{color:shared.DM.gray50,...boxShadowSharedStyles.M},[types.g.tertiary]:{...boxShadowSharedStyles.M},[types.g.danger]:{...boxShadowSharedStyles.M},[types.g.toggle]:{color:shared.DM.gray50,...boxShadowSharedStyles.M},[types.g.text]:{color:shared.DM.gray50,...boxShadowSharedStyles.M}},buttonDisabledModifiedStyles={[types.g.primary]:{":hover":{backgroundColor:shared.DM.gray800,color:shared.DM.gray500}},[types.g.secondary]:{":hover":{backgroundColor:shared.DM.gray800,color:shared.DM.gray500}},[types.g.tertiary]:{":hover":{backgroundColor:"transparent",color:shared.DM.gray500}},[types.g.danger]:{":hover":{backgroundColor:shared.DM.red800,color:shared.DM.gray500}},[types.g.toggle]:{":hover":{color:shared.DM.gray500,backgroundColor:shared.DM.gray800}},[types.g.text]:{":hover":{color:shared.DM.gray500,backgroundColor:"transparent"}}},spinnerModifiedStyles={[types.i.mini]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[8]}`)},[types.i.compact]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[12]}`)},[types.i.default]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding","0 14px")},[types.i.large]:{...(0,expandProperty.Z)("margin","0"),...(0,expandProperty.Z)("padding",`0 ${shared.L_[16]}`)}},checkedToggleButtonModifiedStyles={backgroundColor:shared.DM.gray50,color:shared.DM.gray900,":hover":{backgroundColor:shared.DM.gray200},":active:not(:disabled)":{backgroundColor:shared.DM.gray300},":disabled":{backgroundColor:shared.DM.gray800,color:shared.DM.gray500}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerSize={[types.i.mini]:spinner.Ty.xSmall,[types.i.compact]:spinner.Ty.small,[types.i.default]:spinner.Ty.medium,[types.i.large]:spinner.Ty.large},getSpinnerKind=(kind,disabled)=>kind===types.g.primary?spinner.Xq.dark:disabled?spinner.Xq.light:spinner.Xq.dark;var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{kind=types.g.primary,size=types.i.default,disabled,isLoading,colors,startEnhancer,endEnhancer,className,children,role,checked,overrides:baseOverrides,...props}=_ref;const buttonOverrides=((kind,size,colors,isChecked)=>{const customColorsStyles=colors?{...colors,":hover":{...colors}}:{};return{Root:{style:_ref=>{let{$disabled,$isFocusVisible}=_ref;return{...buttonModifiedStyles[size],...buttonKindModifiedStyles[kind],...$isFocusVisible?buttonFocusedModifiedStyles[kind]:{},...isChecked?checkedToggleButtonModifiedStyles:{},...$disabled?buttonDisabledModifiedStyles[kind]:{},...customColorsStyles}}},StartEnhancer:{style:{marginRight:"4px"}},EndEnhancer:{style:{marginLeft:"4px"}},LoadingSpinner:{component:_ref2=>{let{$disabled}=_ref2;return(0,jsx_runtime.jsx)(spinner.$j,{kind:getSpinnerKind(kind,$disabled),size:spinnerSize[size],animation:!0})}},LoadingSpinnerContainer:{style:{...spinnerModifiedStyles[size]}}}})(kind,size,colors,checked),overrides=(0,getMergedOverrides.D)(buttonOverrides,baseOverrides),buttonKind=kind===types.g.danger||kind===types.g.toggle||kind===types.g.text?types.g.secondary:kind,buttonRole=role??(kind===types.g.toggle?"switch":void 0);return(0,jsx_runtime.jsx)(button_button.Z,{ref,...props,className,isLoading,kind:buttonKind,size,disabled,startEnhancer,endEnhancer,overrides,role:buttonRole,"aria-checked":checked,children})}));Button.displayName="Button";const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{kind:{defaultValue:{value:"BUTTON_KIND.primary"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"toggle"'},{value:'"text"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((a: SyntheticEvent<HTMLButtonElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ButtonOverrides"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},isLoading:{defaultValue:null,description:"Show loading button style and spinner.",name:"isLoading",required:!1,type:{name:"boolean"}},startEnhancer:{defaultValue:null,description:"A helper rendered at the start of the button.",name:"startEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},endEnhancer:{defaultValue:null,description:"A helper rendered at the end of the button.",name:"endEnhancer",required:!1,type:{name:"ComponentType<any> | ReactNode"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"CustomColors"}},isSelected:{defaultValue:null,description:"Indicates that the button is selected",name:"isSelected",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"BUTTON_SIZE.default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"default"'},{value:'"compact"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g9:()=>_types__WEBPACK_IMPORTED_MODULE_1__.g,iY:()=>_types__WEBPACK_IMPORTED_MODULE_1__.i,zx:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/Button.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/types.ts")},"./src/components/button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>BUTTON_KIND,i:()=>BUTTON_SIZE});let BUTTON_KIND=function(BUTTON_KIND){return BUTTON_KIND.primary="primary",BUTTON_KIND.secondary="secondary",BUTTON_KIND.tertiary="tertiary",BUTTON_KIND.danger="danger",BUTTON_KIND.toggle="toggle",BUTTON_KIND.text="text",BUTTON_KIND}({}),BUTTON_SIZE=function(BUTTON_SIZE){return BUTTON_SIZE.mini="mini",BUTTON_SIZE.default="default",BUTTON_SIZE.compact="compact",BUTTON_SIZE.large="large",BUTTON_SIZE}({})},"./src/components/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hf:()=>ArrowUpIcon.Z,FB:()=>CancelIcon.Z,VA:()=>CaretDownIcon.Z,y8:()=>CaretUpIcon.Z,KM:()=>CheckmarkIcon.Z,v4:()=>ChevronDownIcon.Z,g8:()=>ChevronUpIcon.Z,Tw:()=>CloseIcon.Z,cV:()=>CompleteIcon.Z,TI:()=>icons_CopyIcon,h_:()=>HeartIcon.Z,sz:()=>InfoIcon.Z,wX:()=>LoginIcon.Z,R0:()=>LogoutIcon.Z,Oq:()=>MenuIcon.Z,$n:()=>ResizeIcon.Z,W1:()=>SearchIcon.Z,aN:()=>WarningIcon.Z});var CompleteIcon=__webpack_require__("./src/components/icons/CompleteIcon.tsx"),InfoIcon=__webpack_require__("./src/components/icons/InfoIcon.tsx"),CancelIcon=__webpack_require__("./src/components/icons/CancelIcon.tsx"),WarningIcon=__webpack_require__("./src/components/icons/WarningIcon.tsx"),HeartIcon=__webpack_require__("./src/components/icons/HeartIcon.tsx"),SearchIcon=__webpack_require__("./src/components/icons/SearchIcon.tsx"),MenuIcon=__webpack_require__("./src/components/icons/MenuIcon.tsx"),ChevronDownIcon=__webpack_require__("./src/components/icons/ChevronDownIcon.tsx"),ChevronUpIcon=__webpack_require__("./src/components/icons/ChevronUpIcon.tsx"),CaretUpIcon=(__webpack_require__("./src/components/icons/ChevronRightIcon.tsx"),__webpack_require__("./src/components/icons/ChevronLeftIcon.tsx"),__webpack_require__("./src/components/icons/CaretUpIcon.tsx")),CaretDownIcon=__webpack_require__("./src/components/icons/CaretDownIcon.tsx"),ResizeIcon=(__webpack_require__("./src/components/icons/ProfileIcon.tsx"),__webpack_require__("./src/components/icons/ResizeIcon.tsx")),CloseIcon=(__webpack_require__("./src/components/icons/PlusIcon.tsx"),__webpack_require__("./src/components/icons/MinusIcon.tsx"),__webpack_require__("./src/components/icons/CloseIcon.tsx")),LoginIcon=__webpack_require__("./src/components/icons/LoginIcon.tsx"),LogoutIcon=__webpack_require__("./src/components/icons/LogoutIcon.tsx"),ArrowUpIcon=(__webpack_require__("./src/components/icons/FitToScreenIcon.tsx"),__webpack_require__("./src/components/icons/CodeIcon.tsx"),__webpack_require__("./src/components/icons/ChartIcon.tsx"),__webpack_require__("./src/components/icons/GithubIcon.tsx"),__webpack_require__("./src/components/icons/TwitterIcon.tsx"),__webpack_require__("./src/components/icons/LinkedinIcon.tsx"),__webpack_require__("./src/components/icons/DiscordIcon.tsx"),__webpack_require__("./src/components/icons/TelegramIcon.tsx"),__webpack_require__("./src/components/icons/SeparatorIcon.tsx"),__webpack_require__("./src/components/icons/ArrowUpIcon.tsx")),react=(__webpack_require__("./src/components/icons/DotsIcon.tsx"),__webpack_require__("./node_modules/react/index.js")),utils=__webpack_require__("./src/components/icons/utils.ts"),styled_components=__webpack_require__("./node_modules/baseui/icon/styled-components.js"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CopyIcon=_ref=>{let{title,...props}=_ref;const svgProps=(0,utils.Y)(props);return(0,jsx_runtime.jsxs)(styled_components.ny,{...props,...svgProps,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[title&&(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.375 5.625H2.25V15.75H12.375V5.625ZM1.125 4.5V16.875H13.5V4.5H1.125Z",fill:shared.DM.gray50}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.625 1.125H16.875V12.375H13.275V11.25H15.75V2.25H6.75V4.725H5.625V1.125Z",fill:shared.DM.gray50})]})};CopyIcon.displayName="CopyIcon";const icons_CopyIcon=(0,react.memo)(CopyIcon);try{CopyIcon.displayName="CopyIcon",CopyIcon.__docgenInfo={description:"",displayName:"CopyIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/CopyIcon.tsx#CopyIcon"]={docgenInfo:CopyIcon.__docgenInfo,name:"CopyIcon",path:"src/components/icons/CopyIcon.tsx#CopyIcon"})}catch(__react_docgen_typescript_loader_error){}var CheckmarkIcon=__webpack_require__("./src/components/icons/CheckmarkIcon.tsx")},"./src/components/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>spinner_Spinner});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts"),types=__webpack_require__("./src/components/spinner/types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const rectList=[{x:"5.625"},{x:"4.07483",y:"1.91528",opacity:"0.93",transform:"rotate(150 4.07483 1.91528)"},{x:"2.29028",y:"3.42517",opacity:"0.81",transform:"rotate(120 2.29028 3.42517)"},{x:"1.5",y:"5.625",opacity:"0.73",transform:"rotate(90 1.5 5.625)"},{x:"1.91528",y:"7.92517",opacity:"0.65",transform:"rotate(60 1.91528 7.92517)"},{x:"3.42517",y:"9.70953",opacity:"0.56",transform:"rotate(30 3.42517 9.70953)"},{x:"5.625",y:"10.5",opacity:"0.48"},{x:"9.32483",y:"11.0085",opacity:"0.4",transform:"rotate(150 9.32483 11.0085)"},{x:"11.3837",y:"8.67517",opacity:"0.32",transform:"rotate(120 11.3837 8.67517)"},{x:"12",y:"5.625",opacity:"0.24",transform:"rotate(90 12 5.625)"},{x:"11.0087",y:"2.67517",opacity:"0.16",transform:"rotate(60 11.0087 2.67517)"},{x:"8.67517",y:"0.616333",opacity:"0.08",transform:"rotate(30 8.67517 0.616333)"}],SpinnerColorMap={[types.X.light]:shared.DM.gray50,[types.X.dark]:shared.DM.gray900},SpinnerIcon=(0,react.forwardRef)(((_ref,ref)=>{let{size="12",kind,animation}=_ref;const[css]=(0,styled.hQ)(),color=SpinnerColorMap[kind],RectItem=(0,styled.zo)("rect",{animationDuration:"1.2s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationName:animation?{from:{opacity:"1"},to:{opacity:"0"}}:"unset"});return(0,jsx_runtime.jsxs)("svg",{ref,width:size,height:size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("g",{clipPath:"url(#clip0_22275_878)",children:rectList.map(((rectItem,index)=>(0,jsx_runtime.jsx)(RectItem,{...rectItem,className:css({animationDelay:.1*index-1.2+"s"}),opacity:animation?"1":rectItem.opacity,width:"0.75",height:"1.5",fill:color},index.toString())))}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_22275_878",children:(0,jsx_runtime.jsx)("rect",{width:"12",height:"12",fill:color})})})]})}));SpinnerIcon.displayName="SpinnerIcon";const ui_SpinnerIcon=SpinnerIcon;try{SpinnerIcon.displayName="SpinnerIcon",SpinnerIcon.__docgenInfo={description:"",displayName:"SpinnerIcon",props:{size:{defaultValue:{value:"12"},description:"",name:"size",required:!1,type:{name:"string"}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"]={docgenInfo:SpinnerIcon.__docgenInfo,name:"SpinnerIcon",path:"src/components/spinner/ui/SpinnerIcon.tsx#SpinnerIcon"})}catch(__react_docgen_typescript_loader_error){}var dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js");const VisuallyHidden=_ref=>{let{children}=_ref;const Container=(0,dist_browser_esm.zo)("div",{position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:"0",overflow:"hidden",clip:"rect(0, 0, 0, 0)",border:"0"});return(0,jsx_runtime.jsx)(Container,{children})};VisuallyHidden.displayName="VisuallyHidden";try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/shared/ui/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}const SpinnerBlock=_ref=>{let{children,className}=_ref;const RotatedBlock=(0,dist_browser_esm.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",width:"max-content"});return(0,jsx_runtime.jsxs)(RotatedBlock,{role:"status",className,children:[children,(0,jsx_runtime.jsx)(VisuallyHidden,{children:"loading"})]})};SpinnerBlock.displayName="SpinnerBlock";const ui_SpinnerBlock=SpinnerBlock;try{SpinnerBlock.displayName="SpinnerBlock",SpinnerBlock.__docgenInfo={description:"",displayName:"SpinnerBlock",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"]={docgenInfo:SpinnerBlock.__docgenInfo,name:"SpinnerBlock",path:"src/components/spinner/ui/SpinnerBlock.tsx#SpinnerBlock"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./node_modules/baseui/esm/typography/index.js");const labelStyles={marginTop:"8px"},SpinnerLabelColorrMap={[types.X.light]:shared.DM.gray50,[types.X.dark]:shared.DM.gray900},spinnerLabelComponent={[types.T.xSmall]:props=>(0,jsx_runtime.jsx)(typography.UU,{as:"span",...props}),[types.T.small]:props=>(0,jsx_runtime.jsx)(typography.S$,{as:"span",...props}),[types.T.medium]:props=>(0,jsx_runtime.jsx)(typography.Uc,{as:"span",...props}),[types.T.large]:props=>(0,jsx_runtime.jsx)(typography.D9,{as:"span",...props}),[types.T.xLarge]:props=>(0,jsx_runtime.jsx)(typography.fH,{as:"span",...props})},SpinnerLabel=_ref=>{let{size=types.T.medium,kind,children}=_ref;const[css]=(0,styled.hQ)(),TypographyComponent=spinnerLabelComponent[size],color=SpinnerLabelColorrMap[kind];return(0,jsx_runtime.jsx)(TypographyComponent,{color,className:css(labelStyles),children})};SpinnerLabel.displayName="SpinnerLabel";const ui_SpinnerLabel=SpinnerLabel;try{SpinnerLabel.displayName="SpinnerLabel",SpinnerLabel.__docgenInfo={description:"",displayName:"SpinnerLabel",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"]={docgenInfo:SpinnerLabel.__docgenInfo,name:"SpinnerLabel",path:"src/components/spinner/ui/SpinnerLabel.tsx#SpinnerLabel"})}catch(__react_docgen_typescript_loader_error){}const spinnerIconSize={[types.T.xSmall]:"12",[types.T.small]:"16",[types.T.medium]:"20",[types.T.large]:"24",[types.T.xLarge]:"32"},Spinner=_ref=>{let{size=types.T.medium,kind=types.X.light,animation,label,...props}=_ref;return(0,jsx_runtime.jsxs)(ui_SpinnerBlock,{...props,children:[(0,jsx_runtime.jsx)(ui_SpinnerIcon,{animation,kind,size:spinnerIconSize[size]}),label&&(0,jsx_runtime.jsx)(ui_SpinnerLabel,{kind,size,children:label})]})};Spinner.displayName="Spinner";const spinner_Spinner=(0,react.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"SPINNER_KIND.light"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$j:()=>_Spinner__WEBPACK_IMPORTED_MODULE_0__.Z,Ty:()=>_types__WEBPACK_IMPORTED_MODULE_1__.T,Xq:()=>_types__WEBPACK_IMPORTED_MODULE_1__.X});var _Spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/Spinner.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/spinner/types.ts")},"./src/components/spinner/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>SPINNER_SIZE,X:()=>SPINNER_KIND});let SPINNER_SIZE=function(SPINNER_SIZE){return SPINNER_SIZE.xSmall="xSmall",SPINNER_SIZE.small="small",SPINNER_SIZE.medium="medium",SPINNER_SIZE.large="large",SPINNER_SIZE.xLarge="xLarge",SPINNER_SIZE}({}),SPINNER_KIND=function(SPINNER_KIND){return SPINNER_KIND.dark="dark",SPINNER_KIND.light="light",SPINNER_KIND}({})},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DM:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.DM,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/boxShadowSharedStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>boxShadowFocusStyles,Q:()=>boxShadowErrorStyles});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts");const boxShadowFocusStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.DM.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.DM.gray50}`},boxShadowErrorStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.DM.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.DM.red400}`}}}]);