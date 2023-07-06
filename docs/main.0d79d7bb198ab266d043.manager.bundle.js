(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[179],{895:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var esm=__webpack_require__(32605),dist_esm=__webpack_require__(21765),client=(__webpack_require__(67294),__webpack_require__(98712)),create_dark_theme=(__webpack_require__(19601),__webpack_require__(80551)),getTypographyOverrides=function getTypographyOverrides(){var overrides=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},monoStyles=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},monoOverrides={};for(var typographyName in overrides)monoOverrides["Mono".concat(typographyName)]=Object.assign({},overrides[typographyName],monoStyles);return Object.assign({},overrides,monoOverrides)},PRIMITIVE_COLORS={primary50:"#FFFFFF",primary100:"#E6E6E6",primary200:"#C9C9C9",primary300:"#ADADAD",primary400:"#919191",primary500:"#757575",primary600:"#595959",primary700:"#3D3D3D",primary800:"#212121",primary900:"#141414",white:"#FFFFFF",black:"#000000",error50:"#FFEFED",error100:"#FED7D2",error200:"#F1998E",error300:"#E85C4A",error400:"#E11900",error500:"#AB1300",error600:"#870F00",error700:"#5A0A00",positive50:"#E6F2ED",positive100:"#ADDEC9",positive200:"#66D19E",positive300:"#06C167",positive400:"#048848",positive500:"#03703C",positive600:"#03582F",positive700:"#10462D",warning50:"#FFFAF0",warning100:"#FFF2D9",warning200:"#FFE3AC",warning300:"#FFCF70",warning400:"#FFC043",warning500:"#BC8B2C",warning600:"#996F00",warning700:"#674D1B",mono600:"#292929"},overrides=__webpack_require__(92338),getMergedOverrides=function getMergedOverrides(packageOverrides,customOverrides){return(0,overrides.aO)(packageOverrides,null!=customOverrides?customOverrides:{})},engine=new client.Z;!function createTheme(instance){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref$enableDefaultFon=_ref.enableDefaultFonts,enableDefaultFonts=void 0===_ref$enableDefaultFon||_ref$enableDefaultFon,_ref$overrides=_ref.overrides,overrides=void 0===_ref$overrides?{}:_ref$overrides,_createTypography=function createTypography(defaultFonts){var defaultRegularFont=defaultFonts?"".concat(defaultFonts.defaultRegularFont,", sans-serif"):"",defaultSemiBoldFont=defaultFonts?"".concat(defaultFonts.defaultSemiBoldFont,", sans-serif"):"",defaultMonoRegularFont=defaultFonts?"".concat(defaultFonts.defaultMonoRegularFont,", monospace"):"",defaultRegularFontProperty=defaultRegularFont?{fontFamily:defaultRegularFont}:{},defaultSemiBoldFontProperty=defaultSemiBoldFont?{fontFamily:defaultSemiBoldFont}:{},defaultMonoRegularFontProperty=defaultMonoRegularFont?{fontFamily:defaultMonoRegularFont}:{};return{primitives:{primaryFontFamily:defaultRegularFont||void 0},overrides:{typography:Object.assign({},getTypographyOverrides({ParagraphXSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"12px",fontWeight:"normal",lineHeight:"20px"}),ParagraphSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"14px",fontWeight:"normal",lineHeight:"20px"}),ParagraphMedium:Object.assign({},defaultRegularFontProperty,{fontSize:"16px",fontWeight:"normal",lineHeight:"24px"}),ParagraphLarge:Object.assign({},defaultRegularFontProperty,{fontSize:"18px",fontWeight:"normal",lineHeight:"28px"})},defaultMonoRegularFontProperty),getTypographyOverrides({LabelXSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"12px",fontWeight:"normal",lineHeight:"16px"}),LabelSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"14px",fontWeight:"normal",lineHeight:"16px"}),LabelMedium:Object.assign({},defaultRegularFontProperty,{fontSize:"16px",fontWeight:"normal",lineHeight:"20px"}),LabelLarge:Object.assign({},defaultRegularFontProperty,{fontSize:"18px",fontWeight:"normal",lineHeight:"24px"})},defaultMonoRegularFontProperty),getTypographyOverrides({HeadingXSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"20px",fontWeight:"normal",lineHeight:"28px"}),HeadingSmall:Object.assign({},defaultRegularFontProperty,{fontSize:"24px",fontWeight:"normal",lineHeight:"32px"}),HeadingMedium:Object.assign({},defaultRegularFontProperty,{fontSize:"28px",fontWeight:"normal",lineHeight:"36px"}),HeadingLarge:Object.assign({},defaultRegularFontProperty,{fontSize:"32px",fontWeight:"normal",lineHeight:"40px"}),HeadingXLarge:Object.assign({},defaultRegularFontProperty,{fontSize:"36px",fontWeight:"normal",lineHeight:"44px"}),HeadingXXLarge:Object.assign({},defaultRegularFontProperty,{fontSize:"40px",fontWeight:"normal",lineHeight:"52px"})},defaultMonoRegularFontProperty),getTypographyOverrides({DisplayXSmall:Object.assign({},defaultSemiBoldFontProperty,{fontSize:"22px",fontWeight:600,lineHeight:"28px"}),DisplaySmall:Object.assign({},defaultSemiBoldFontProperty,{fontSize:"44px",fontWeight:600,lineHeight:"52px"}),DisplayMedium:Object.assign({},defaultSemiBoldFontProperty,{fontSize:"52px",fontWeight:600,lineHeight:"64px"}),DisplayLarge:Object.assign({},defaultSemiBoldFontProperty,{fontSize:"96px",fontWeight:600,lineHeight:"112px"})},defaultMonoRegularFontProperty),{MonoDisplayXSmall:Object.assign({},defaultMonoRegularFontProperty,{fontSize:"22px",fontWeight:400,lineHeight:"28px"})})}}}(enableDefaultFonts?function getDefaultFonts(instance){return{defaultRegularFont:instance.renderFontFace({src:'url("'.concat("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",'")'),fontStyle:"normal",fontWeight:400}),defaultSemiBoldFont:instance.renderFontFace({src:'url("'.concat("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2",'")'),fontStyle:"normal",fontWeight:600}),defaultMonoRegularFont:instance.renderFontFace({src:'url("'.concat("https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4AJi8SJQt.woff2",'")'),fontStyle:"normal",fontWeight:400})}}(instance):void 0),typographyPrimitives=_createTypography.primitives,typographyOverrides=_createTypography.overrides,_createColors=function createColors(){return{primitives:Object.assign({},PRIMITIVE_COLORS,{primaryA:PRIMITIVE_COLORS.primary200,primaryB:PRIMITIVE_COLORS.primary900}),overrides:{colors:{gray50:PRIMITIVE_COLORS.primary50,gray100:PRIMITIVE_COLORS.primary100,gray200:PRIMITIVE_COLORS.primary200,gray300:PRIMITIVE_COLORS.primary300,gray400:PRIMITIVE_COLORS.primary400,gray500:PRIMITIVE_COLORS.primary500,gray600:PRIMITIVE_COLORS.primary600,gray700:PRIMITIVE_COLORS.primary700,gray800:PRIMITIVE_COLORS.primary800,gray900:PRIMITIVE_COLORS.primary900}}}}(),colorsPrimitives=_createColors.primitives,colorsOverrides=_createColors.overrides,themeOverrides=Object.assign({},typographyOverrides,colorsOverrides);(0,create_dark_theme.Z)(Object.assign({},typographyPrimitives,colorsPrimitives),getMergedOverrides(themeOverrides,overrides))}(engine);const theme=(0,dist_esm.Ue)({base:"dark",colorSecondary:PRIMITIVE_COLORS.primary500,appBg:PRIMITIVE_COLORS.primary800,appContentBg:PRIMITIVE_COLORS.primary900,appBorderColor:PRIMITIVE_COLORS.primary700,appBorderRadius:4,textColor:PRIMITIVE_COLORS.primary50,textMutedColor:PRIMITIVE_COLORS.primary300,barTextColor:PRIMITIVE_COLORS.primary200,barSelectedColor:PRIMITIVE_COLORS.primary50,barBg:PRIMITIVE_COLORS.primary800,inputBg:PRIMITIVE_COLORS.primary700,inputTextColor:PRIMITIVE_COLORS.primary50,inputBorderRadius:0,brandTitle:"=nil; Foundation UI kit storybook",brandUrl:"https://nil.foundation"});esm.KP.setConfig({theme})},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[133],(()=>(__webpack_exec__(37707),__webpack_exec__(895),__webpack_exec__(7967),__webpack_exec__(78295),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(10566),__webpack_exec__(50213),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(10165),__webpack_exec__(13457),__webpack_exec__(41148))));__webpack_require__.O()}]);