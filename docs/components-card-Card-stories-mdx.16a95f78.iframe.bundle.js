(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[1179],{"./src/components/card/Card.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basicUsage:()=>basicUsage,basicWithBorderAndWithoutHeadline:()=>basicWithBorderAndWithoutHeadline,default:()=>__WEBPACK_DEFAULT_EXPORT__,headingAndButton:()=>headingAndButton,imageUrl:()=>imageUrl,photo:()=>photo,thumbnail:()=>thumbnail});__webpack_require__("./node_modules/react/index.js");var _Users_yurykorotovskikh_repos_nil_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/card/Card.tsx"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/button/index.ts"),baseui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),baseui_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/baseui/esm/card/styled-components.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({isButton=!1,...args})=>{const[css]=(0,baseui__WEBPACK_IMPORTED_MODULE_4__.c6)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Card__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(baseui_card__WEBPACK_IMPORTED_MODULE_5__.nB,{children:"Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl."}),isButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(baseui_card__WEBPACK_IMPORTED_MODULE_5__.rc,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.$n,{className:css({width:"100%"}),children:"Label"})})]})},imageUrl="https://oir.mobi/uploads/posts/2021-05/1622168357_43-oir_mobi-p-yelovii-les-priroda-krasivo-foto-49.jpg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_Users_yurykorotovskikh_repos_nil_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.W8,{title:"Data display/Card",component:_Card__WEBPACK_IMPORTED_MODULE_1__.A}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"card",children:"Card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Hl,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.gG,{name:"Basic usage",args:{},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.gG,{name:"Heading and button",args:{title:"Example card",headline:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.gG,{name:"Photo",args:{headerImage:imageUrl,isButton:!0,headline:!0,title:"Example card"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.gG,{name:"Thumbnail",args:{title:"Card title",thumbnail:imageUrl,headline:!0},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.gG,{name:"Basic with border and without headline",args:{border:!0},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.uY,{of:_Card__WEBPACK_IMPORTED_MODULE_1__.A}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Card"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.kL,{language:"tsx",dark:!0,format:!0,code:'\n        import {Card, StyledBody, StyledAction, Button} from "@nilfoundation/ui-kit";\n        ...\n        <Card>\n          <StyledBody>\n            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n          </StyledBody>\n        </Card>\n        // Card border\n        <Card border title="Card title">...</Card>\n        // With action\n        <Card>\n          <StyledAction>\n            <Button>Button label</Button>\n          </StyledAction>\n        </Card>\n        // With headline\n        <Card headline>Description</Card>\n        // With header image\n        <Card headerImage="path">...</Card>\n        // With thumbnail\n        <Card thumbnail="path">...</Card>\n  '})]})}const basicUsage=Template.bind({});basicUsage.storyName="Basic usage",basicUsage.args={},basicUsage.parameters={storySource:{source:'({\n  isButton = false,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  return <Card {...args}>\n      <StyledBody>\n        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n      </StyledBody>\n      {isButton && <StyledAction>\n          <Button className={css({\n        width: "100%"\n      })}>Label</Button>\n        </StyledAction>}\n    </Card>;\n}'}};const headingAndButton=Template.bind({});headingAndButton.storyName="Heading and button",headingAndButton.args={title:"Example card",headline:!0},headingAndButton.parameters={storySource:{source:'({\n  isButton = false,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  return <Card {...args}>\n      <StyledBody>\n        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n      </StyledBody>\n      {isButton && <StyledAction>\n          <Button className={css({\n        width: "100%"\n      })}>Label</Button>\n        </StyledAction>}\n    </Card>;\n}'}};const photo=Template.bind({});photo.storyName="Photo",photo.args={headerImage:imageUrl,isButton:!0,headline:!0,title:"Example card"},photo.parameters={storySource:{source:'({\n  isButton = false,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  return <Card {...args}>\n      <StyledBody>\n        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n      </StyledBody>\n      {isButton && <StyledAction>\n          <Button className={css({\n        width: "100%"\n      })}>Label</Button>\n        </StyledAction>}\n    </Card>;\n}'}};const thumbnail=Template.bind({});thumbnail.storyName="Thumbnail",thumbnail.args={title:"Card title",thumbnail:imageUrl,headline:!0},thumbnail.parameters={storySource:{source:'({\n  isButton = false,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  return <Card {...args}>\n      <StyledBody>\n        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n      </StyledBody>\n      {isButton && <StyledAction>\n          <Button className={css({\n        width: "100%"\n      })}>Label</Button>\n        </StyledAction>}\n    </Card>;\n}'}};const basicWithBorderAndWithoutHeadline=Template.bind({});basicWithBorderAndWithoutHeadline.storyName="Basic with border and without headline",basicWithBorderAndWithoutHeadline.args={border:!0},basicWithBorderAndWithoutHeadline.parameters={storySource:{source:'({\n  isButton = false,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  return <Card {...args}>\n      <StyledBody>\n        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.\n      </StyledBody>\n      {isButton && <StyledAction>\n          <Button className={css({\n        width: "100%"\n      })}>Label</Button>\n        </StyledAction>}\n    </Card>;\n}'}};const componentMeta={title:"Data display/Card",component:_Card__WEBPACK_IMPORTED_MODULE_1__.A,tags:["stories-mdx"],includeStories:["basicUsage","headingAndButton","photo","thumbnail","basicWithBorderAndWithoutHeadline"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_yurykorotovskikh_repos_nil_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","imageUrl","basicUsage","headingAndButton","photo","thumbnail","basicWithBorderAndWithoutHeadline"]},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>button_Button});var react=__webpack_require__("./node_modules/react/index.js"),button_button=__webpack_require__("./node_modules/baseui/esm/button/button.js"),types=__webpack_require__("./src/components/button/types.ts"),spinner=__webpack_require__("./src/components/spinner/index.ts"),shared=__webpack_require__("./src/shared/index.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),boxShadowSharedStyles=__webpack_require__("./src/shared/styles/boxShadowSharedStyles.ts");const buttonBaseStyles={outline:"0",boxShadow:"none",...(0,expandProperty.A)("borderRadius","8px"),transitionProperty:"background-color, color",transitionDuration:"0.15s",transitionTimingFunction:"ease-in"},buttonModifiedStyles={[types.V.mini]:{...buttonBaseStyles,...(0,expandProperty.A)("padding","4px 8px"),fontSize:"12px"},[types.V.compact]:{...buttonBaseStyles,...(0,expandProperty.A)("padding","8px 16px"),fontSize:"12px"},[types.V.default]:{...buttonBaseStyles,...(0,expandProperty.A)("padding","12px 24px"),fontSize:"16px"},[types.V.large]:{...buttonBaseStyles,...(0,expandProperty.A)("padding","16px 32px"),fontSize:"16px"}},buttonKindModifiedStyles={[types.E.primary]:{backgroundColor:shared.lm.gray50,color:shared.lm.gray900,":hover":{backgroundColor:shared.lm.gray200},":active:not(:disabled)":{backgroundColor:shared.lm.gray300},":disabled":{backgroundColor:shared.lm.gray800,color:shared.lm.gray500}},[types.E.secondary]:{backgroundColor:shared.lm.gray800,color:shared.lm.gray200,":hover":{backgroundColor:shared.lm.gray700,color:shared.lm.gray50},":active:not(:disabled)":{backgroundColor:shared.lm.gray600,color:shared.lm.gray50},":disabled":{color:shared.lm.gray500,backgroundColor:shared.lm.gray800}},[types.E.tertiary]:{backgroundColor:"transparent",":hover":{backgroundColor:shared.lm.gray800,color:shared.lm.gray50},":active:not(:disabled)":{backgroundColor:shared.lm.gray700,color:shared.lm.gray50},":disabled":{color:shared.lm.gray500}},[types.E.danger]:{backgroundColor:shared.lm.red500,color:shared.lm.gray50,":hover":{backgroundColor:shared.lm.red600},":active:not(:disabled)":{backgroundColor:shared.lm.red800},":disabled":{backgroundColor:shared.lm.red800,color:shared.lm.gray500}},[types.E.toggle]:{backgroundColor:shared.lm.gray800,color:shared.lm.gray200,":hover":{backgroundColor:shared.lm.gray700,color:shared.lm.gray50},":active:not(:disabled)":{backgroundColor:shared.lm.gray600,color:shared.lm.gray50},":disabled":{color:shared.lm.gray500,backgroundColor:shared.lm.gray800}},[types.E.text]:{backgroundColor:"transparent",color:shared.lm.gray200,textDecoration:"underline",":hover":{backgroundColor:"transparent",color:shared.lm.gray50},":active:not(:disabled)":{backgroundColor:"transparent",color:shared.lm.gray50},":disabled":{backgroundColor:"transparent",color:shared.lm.gray500}}},buttonFocusedModifiedStyles={[types.E.primary]:{backgroundColor:shared.lm.gray50,...boxShadowSharedStyles.o},[types.E.secondary]:{color:shared.lm.gray50,...boxShadowSharedStyles.o},[types.E.tertiary]:{...boxShadowSharedStyles.o},[types.E.danger]:{...boxShadowSharedStyles.o},[types.E.toggle]:{color:shared.lm.gray50,...boxShadowSharedStyles.o},[types.E.text]:{color:shared.lm.gray50,...boxShadowSharedStyles.o}},buttonDisabledModifiedStyles={[types.E.primary]:{":hover":{backgroundColor:shared.lm.gray800,color:shared.lm.gray500}},[types.E.secondary]:{":hover":{backgroundColor:shared.lm.gray800,color:shared.lm.gray500}},[types.E.tertiary]:{":hover":{backgroundColor:"transparent",color:shared.lm.gray500}},[types.E.danger]:{":hover":{backgroundColor:shared.lm.red800,color:shared.lm.gray500}},[types.E.toggle]:{":hover":{color:shared.lm.gray500,backgroundColor:shared.lm.gray800}},[types.E.text]:{":hover":{color:shared.lm.gray500,backgroundColor:"transparent"}}},spinnerModifiedStyles={[types.V.mini]:{...(0,expandProperty.A)("margin","0"),...(0,expandProperty.A)("padding",`0 ${shared.t6[8]}`)},[types.V.compact]:{...(0,expandProperty.A)("margin","0"),...(0,expandProperty.A)("padding",`0 ${shared.t6[12]}`)},[types.V.default]:{...(0,expandProperty.A)("margin","0"),...(0,expandProperty.A)("padding","0 14px")},[types.V.large]:{...(0,expandProperty.A)("margin","0"),...(0,expandProperty.A)("padding",`0 ${shared.t6[16]}`)}},checkedToggleButtonModifiedStyles={backgroundColor:shared.lm.gray50,color:shared.lm.gray900,":hover":{backgroundColor:shared.lm.gray200},":active:not(:disabled)":{backgroundColor:shared.lm.gray300},":disabled":{backgroundColor:shared.lm.gray800,color:shared.lm.gray500}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerSize={[types.V.mini]:spinner.Kh.xSmall,[types.V.compact]:spinner.Kh.small,[types.V.default]:spinner.Kh.medium,[types.V.large]:spinner.Kh.large},getSpinnerKind=(kind,disabled)=>kind===types.E.primary?spinner.Dr.dark:disabled?spinner.Dr.light:spinner.Dr.dark;var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{kind=types.E.primary,size=types.V.default,disabled,isLoading,colors,startEnhancer,endEnhancer,className,children,role,checked,overrides:baseOverrides,...props}=_ref;const buttonOverrides=((kind,size,colors,isChecked)=>{const customColorsStyles=colors?{...colors,":hover":{...colors}}:{};return{Root:{style:_ref=>{let{$disabled,$isFocusVisible}=_ref;return{...buttonModifiedStyles[size],...buttonKindModifiedStyles[kind],...$isFocusVisible?buttonFocusedModifiedStyles[kind]:{},...isChecked?checkedToggleButtonModifiedStyles:{},...$disabled?buttonDisabledModifiedStyles[kind]:{},...customColorsStyles}}},StartEnhancer:{style:{marginRight:"4px"}},EndEnhancer:{style:{marginLeft:"4px"}},LoadingSpinner:{component:_ref2=>{let{$disabled}=_ref2;return(0,jsx_runtime.jsx)(spinner.y$,{kind:getSpinnerKind(kind,$disabled),size:spinnerSize[size]})}},LoadingSpinnerContainer:{style:{...spinnerModifiedStyles[size]}}}})(kind,size,colors,checked),overrides=(0,getMergedOverrides.O)(buttonOverrides,baseOverrides),buttonKind=kind===types.E.danger||kind===types.E.toggle||kind===types.E.text?types.E.secondary:kind,buttonRole=role??(kind===types.E.toggle?"switch":void 0);return(0,jsx_runtime.jsx)(button_button.A,{ref,...props,className,isLoading,kind:buttonKind,size,disabled,startEnhancer,endEnhancer,overrides,role:buttonRole,"aria-checked":checked,children})}));Button.displayName="Button";const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((a: SyntheticEvent<HTMLButtonElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"ButtonOverrides"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"BUTTON_SIZE.default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"default"'},{value:'"compact"'},{value:'"large"'}]}},startEnhancer:{defaultValue:null,description:"A helper rendered at the start of the button.",name:"startEnhancer",required:!1,type:{name:"ReactNode | ComponentType<any>"}},endEnhancer:{defaultValue:null,description:"A helper rendered at the end of the button.",name:"endEnhancer",required:!1,type:{name:"ReactNode | ComponentType<any>"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},shape:{defaultValue:null,description:"Defines the shape of the button",name:"shape",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"round"'},{value:'"circle"'},{value:'"square"'},{value:'"pill"'}]}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"CustomColors"}},isSelected:{defaultValue:null,description:"Indicates that the button is selected",name:"isSelected",required:!1,type:{name:"boolean"}},kind:{defaultValue:{value:"BUTTON_KIND.primary"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'},{value:'"toggle"'},{value:'"text"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.A,Er:()=>_types__WEBPACK_IMPORTED_MODULE_1__.E,Vp:()=>_types__WEBPACK_IMPORTED_MODULE_1__.V});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/Button.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/types.ts")},"./src/components/button/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>BUTTON_KIND,V:()=>BUTTON_SIZE});let BUTTON_KIND=function(BUTTON_KIND){return BUTTON_KIND.primary="primary",BUTTON_KIND.secondary="secondary",BUTTON_KIND.tertiary="tertiary",BUTTON_KIND.danger="danger",BUTTON_KIND.toggle="toggle",BUTTON_KIND.text="text",BUTTON_KIND}({}),BUTTON_SIZE=function(BUTTON_SIZE){return BUTTON_SIZE.mini="mini",BUTTON_SIZE.default="default",BUTTON_SIZE.compact="compact",BUTTON_SIZE.large="large",BUTTON_SIZE}({})},"./src/components/card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>card_Card});__webpack_require__("./node_modules/react/index.js");var card=__webpack_require__("./node_modules/baseui/esm/card/card.js"),borderStyles=__webpack_require__("./src/shared/styles/borderStyles.ts"),shared=__webpack_require__("./src/shared/index.ts"),withoutMarginStyles=__webpack_require__("./src/shared/styles/withoutMarginStyles.ts");const BorderStyle=(0,__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js").A)("border","none");var styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js");const styledWhiteHeadline={position:"absolute",top:0,left:0,width:"100%",height:"8px",background:shared.lm.gray50};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const WhiteHeadline=()=>{const WhiteHeadline=(0,styled.I4)("div",styledWhiteHeadline);return(0,jsx_runtime.jsx)(WhiteHeadline,{})};WhiteHeadline.displayName="WhiteHeadline";const ui_WhiteHeadline=WhiteHeadline;try{WhiteHeadline.displayName="WhiteHeadline",WhiteHeadline.__docgenInfo={description:"",displayName:"WhiteHeadline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/ui/WhiteHeadline.tsx#WhiteHeadline"]={docgenInfo:WhiteHeadline.__docgenInfo,name:"WhiteHeadline",path:"src/components/card/ui/WhiteHeadline.tsx#WhiteHeadline"})}catch(__react_docgen_typescript_loader_error){}var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Card=_ref=>{let{headline=!1,border=!1,children,overrides:baseOverrides,...props}=_ref;const cardOverrides=((headline,border)=>({Root:{style:{...borderStyles.b,position:"relative",paddingRight:"16px",paddingLeft:"16px",paddingTop:headline?"24px":"16px",paddingBottom:"0px",boxSizing:"border-box",maxWidth:"328px",backgroundColor:shared.lm.gray800,border:border?`1px solid ${shared.lm.gray700}`:"1px solid transparent"}},HeaderImage:{style:{marginBottom:"16px"}},Contents:{style:{...withoutMarginStyles.p}},Thumbnail:{style:{...BorderStyle,width:"94px",height:"94px",boxSizing:"borderBox",marginTop:"48px",marginLeft:"16px",marginBottom:"16px"}}}))(headline,border),overrides=(0,getMergedOverrides.O)(cardOverrides,baseOverrides);return(0,jsx_runtime.jsxs)(card.A,{...props,overrides,children:[headline&&(0,jsx_runtime.jsx)(ui_WhiteHeadline,{}),children]})};Card.displayName="Card";const card_Card=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{children:{defaultValue:null,description:"Content to be rendered within the Card body.",name:"children",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Content to render above the body content.",name:"title",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Contents to be rendered at the bottom of the Card. Used to organize UI which enables user action.",name:"action",required:!1,type:{name:"ReactNode"}},hasThumbnail:{defaultValue:null,description:"Function that takes Card props and returns a boolean that represents if a thumbnail will be rendered.",name:"hasThumbnail",required:!1,type:{name:"((a: { readonly thumbnail?: string; }) => boolean)"}},headerImage:{defaultValue:null,description:"Image to be positioned at the top of the Card. Can be a string representing the img src or an object with img attrs",name:"headerImage",required:!1,type:{name:"string | ImageProps"}},thumbnail:{defaultValue:null,description:"Image src that by default is rendered to the side of children content.",name:"thumbnail",required:!1,type:{name:"string"}},headline:{defaultValue:{value:"false"},description:"This property set white headline at the top of the card",name:"headline",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"This property set 1px solid grey border to card",name:"border",required:!1,type:{name:"boolean"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"CardOverrides"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/types.ts"),baseui_spinner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/baseui/esm/spinner/styled-components.js"),styletron_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js"),_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/index.ts"),inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const spinnerIconSize={[_types__WEBPACK_IMPORTED_MODULE_0__.K.xSmall]:"12px",[_types__WEBPACK_IMPORTED_MODULE_0__.K.small]:"16px",[_types__WEBPACK_IMPORTED_MODULE_0__.K.medium]:"20px",[_types__WEBPACK_IMPORTED_MODULE_0__.K.large]:"24px",[_types__WEBPACK_IMPORTED_MODULE_0__.K.xLarge]:"32px"},getSpinnerStylesByKind=kind=>{switch(kind){case _types__WEBPACK_IMPORTED_MODULE_0__.D.dark:return{...(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_3__.A)("borderColor",_shared__WEBPACK_IMPORTED_MODULE_1__.lm.gray500),borderTopColor:_shared__WEBPACK_IMPORTED_MODULE_1__.lm.gray800};case _types__WEBPACK_IMPORTED_MODULE_0__.D.light:return{...(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_3__.A)("borderColor",_shared__WEBPACK_IMPORTED_MODULE_1__.lm.gray600),borderTopColor:_shared__WEBPACK_IMPORTED_MODULE_1__.lm.gray100}}},Spinner=_ref=>{let{size=_types__WEBPACK_IMPORTED_MODULE_0__.K.medium,kind=_types__WEBPACK_IMPORTED_MODULE_0__.D.light,style:styleProp}=_ref;const style={width:spinnerIconSize[size],height:spinnerIconSize[size],...getSpinnerStylesByKind(kind),...styleProp},StyledElement=(0,styletron_react__WEBPACK_IMPORTED_MODULE_4__._F)(baseui_spinner__WEBPACK_IMPORTED_MODULE_5__.x,style);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledElement,{})};Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"SPINNER_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},kind:{defaultValue:{value:"SPINNER_KIND.light"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dr:()=>_types__WEBPACK_IMPORTED_MODULE_1__.D,Kh:()=>_types__WEBPACK_IMPORTED_MODULE_1__.K,y$:()=>_Spinner__WEBPACK_IMPORTED_MODULE_0__.A});var _Spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/Spinner.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/spinner/types.ts")},"./src/components/spinner/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>SPINNER_KIND,K:()=>SPINNER_SIZE});let SPINNER_SIZE=function(SPINNER_SIZE){return SPINNER_SIZE.xSmall="xSmall",SPINNER_SIZE.small="small",SPINNER_SIZE.medium="medium",SPINNER_SIZE.large="large",SPINNER_SIZE.xLarge="xLarge",SPINNER_SIZE}({}),SPINNER_KIND=function(SPINNER_KIND){return SPINNER_KIND.dark="dark",SPINNER_KIND.light="light",SPINNER_KIND}({})},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{lm:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.lm,t6:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.t6,wg:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.wg});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/styles/borderStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>withoutBorderStyles});var inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js");(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.A)("borderRadius","0");const withoutBorderStyles=(0,inline_style_expand_shorthand__WEBPACK_IMPORTED_MODULE_0__.A)("border","none")},"./src/shared/styles/boxShadowSharedStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>boxShadowFocusStyles,s:()=>boxShadowErrorStyles});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts");const boxShadowFocusStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.lm.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.lm.gray50}`},boxShadowErrorStyles={boxShadow:`0px 0px 0px 2px ${_theme__WEBPACK_IMPORTED_MODULE_0__.lm.gray900}, 0px 0px 0px 4px ${_theme__WEBPACK_IMPORTED_MODULE_0__.lm.red400}`}},"./src/shared/styles/withoutMarginStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>withoutMarginStyles});const withoutMarginStyles=(0,__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js").A)("margin",0)},"./node_modules/baseui/esm/card/card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>card});var react=__webpack_require__("./node_modules/react/index.js"),helpers_overrides=__webpack_require__("./node_modules/baseui/esm/helpers/overrides.js"),LevelContext=react.createContext(0);var styled_components=__webpack_require__("./node_modules/baseui/esm/card/styled-components.js"),_excluded=["children"],_excluded2=["action","children","hasThumbnail","headerImage","thumbnail","title","overrides"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SemanticTitle=function SemanticTitle(_ref){var children=_ref.children,restProps=_objectWithoutProperties(_ref,_excluded),levels=["","h1","h2","h3","h4","h5","h6"];return react.createElement(LevelContext.Consumer,null,(function(level){return react.createElement(styled_components.hE,_extends({$as:levels[level]},restProps),children)}))};function Card(props){var action=props.action,children=props.children,hasThumbnail=props.hasThumbnail,headerImage=props.headerImage,thumbnailSrc=props.thumbnail,title=props.title,overrides=props.overrides,restProps=_objectWithoutProperties(props,_excluded2),ActionOverride=overrides.Action,BodyOverride=overrides.Body,ContentsOverride=overrides.Contents,HeaderImageOverride=overrides.HeaderImage,RootOverride=overrides.Root,ThumbnailOverride=overrides.Thumbnail,TitleOverride=overrides.Title,Action=(0,helpers_overrides.De)(ActionOverride)||styled_components.rc,Body=(0,helpers_overrides.De)(BodyOverride)||styled_components.nB,Contents=(0,helpers_overrides.De)(ContentsOverride)||styled_components.vo,HeaderImage=(0,helpers_overrides.De)(HeaderImageOverride)||styled_components.rj,Root=(0,helpers_overrides.De)(RootOverride)||styled_components.bL,Thumbnail=(0,helpers_overrides.De)(ThumbnailOverride)||styled_components.Vz,Title=(0,helpers_overrides.De)(TitleOverride)||SemanticTitle,headerImageProps="string"==typeof headerImage?{src:headerImage}:headerImage,$hasThumbnail=hasThumbnail(props);return react.createElement(Root,_extends({"data-baseweb":"card"},restProps,(0,helpers_overrides.PC)(RootOverride)),headerImage&&react.createElement(HeaderImage,_extends({},headerImageProps,(0,helpers_overrides.PC)(HeaderImageOverride))),react.createElement(Contents,(0,helpers_overrides.PC)(ContentsOverride),thumbnailSrc&&react.createElement(Thumbnail,_extends({src:thumbnailSrc},(0,helpers_overrides.PC)(ThumbnailOverride))),title&&react.createElement(Title,_extends({$hasThumbnail},(0,helpers_overrides.PC)(TitleOverride)),title),react.createElement(Body,(0,helpers_overrides.PC)(BodyOverride),children),action&&react.createElement(Action,(0,helpers_overrides.PC)(ActionOverride),action)))}Card.defaultProps={action:null,children:null,hasThumbnail:function hasThumbnail(props){return!!props.thumbnail},overrides:{}};const card=Card},"./node_modules/baseui/esm/card/styled-components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Vz:()=>Thumbnail,bL:()=>Root,hE:()=>Title,nB:()=>Body,rc:()=>Action,rj:()=>HeaderImage,vo:()=>Contents});var _styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/styles/util.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Action=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("div",(function(_ref){return _objectSpread({},_ref.$theme.typography.LabelMedium)}));Action.displayName="Action",Action.displayName="Action";var Body=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("div",(function(_ref2){var $theme=_ref2.$theme;return _objectSpread({marginBottom:$theme.sizing.scale600,color:$theme.colors.contentPrimary},$theme.typography.ParagraphMedium)}));Body.displayName="Body",Body.displayName="Body";var Contents=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("div",(function(_ref3){var $theme=_ref3.$theme;return{marginLeft:$theme.sizing.scale600,marginTop:$theme.sizing.scale600,marginRight:$theme.sizing.scale600,marginBottom:$theme.sizing.scale600}}));Contents.displayName="Contents",Contents.displayName="Contents";var HeaderImage=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("img",(function(_ref4){var $theme=_ref4.$theme;return{borderTopLeftRadius:$theme.borders.surfaceBorderRadius,borderTopRightRadius:$theme.borders.surfaceBorderRadius,objectFit:"contain",maxWidth:"100%"}}));HeaderImage.displayName="HeaderImage",HeaderImage.displayName="HeaderImage";var Root=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("section",(function(_ref5){var $theme=_ref5.$theme;return{borderLeftWidth:"2px",borderTopWidth:"2px",borderRightWidth:"2px",borderBottomWidth:"2px",borderLeftStyle:"solid",borderTopStyle:"solid",borderRightStyle:"solid",borderBottomStyle:"solid",borderLeftColor:$theme.colors.borderOpaque,borderRightColor:$theme.colors.borderOpaque,borderTopColor:$theme.colors.borderOpaque,borderBottomColor:$theme.colors.borderOpaque,borderTopLeftRadius:$theme.borders.radius400,borderTopRightRadius:$theme.borders.radius400,borderBottomLeftRadius:$theme.borders.radius400,borderBottomRightRadius:$theme.borders.radius400,backgroundColor:$theme.colors.backgroundPrimary,overflow:"hidden"}}));Root.displayName="Root",Root.displayName="Root";var Thumbnail=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("img",(function(_ref6){var $theme=_ref6.$theme;return _objectSpread(_objectSpread({float:"right",height:$theme.sizing.scale2400,width:$theme.sizing.scale2400,objectFit:"cover",borderTopLeftRadius:$theme.borders.surfaceBorderRadius,borderTopRightRadius:$theme.borders.surfaceBorderRadius,borderBottomLeftRadius:$theme.borders.surfaceBorderRadius,borderBottomRightRadius:$theme.borders.surfaceBorderRadius},(0,_styles__WEBPACK_IMPORTED_MODULE_1__.d2)($theme.borders.border200)),{},{margin:"0 0 ".concat($theme.sizing.scale500," ").concat($theme.sizing.scale500)})}));Thumbnail.displayName="Thumbnail",Thumbnail.displayName="Thumbnail";var Title=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.I4)("h1",(function(_ref7){var $theme=_ref7.$theme;return _objectSpread(_objectSpread({},$theme.typography.HeadingSmall),{},{color:$theme.colors.contentPrimary,marginLeft:0,marginTop:0,marginRight:0,marginBottom:$theme.sizing.scale500,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0})}));Title.displayName="Title",Title.displayName="Title"},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);