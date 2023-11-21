"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[2922],{"./node_modules/baseui/esm/typography/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nN:()=>DisplayLarge,io:()=>DisplayMedium,oW:()=>DisplaySmall,iY:()=>DisplayXSmall,Ih:()=>HeadingLarge,TE:()=>HeadingMedium,Jf:()=>HeadingSmall,lp:()=>HeadingXLarge,fH:()=>HeadingXSmall,Y9:()=>HeadingXXLarge,D9:()=>LabelLarge,Uc:()=>LabelMedium,S$:()=>LabelSmall,UU:()=>LabelXSmall,nr:()=>MonoDisplayLarge,vc:()=>MonoDisplayMedium,qj:()=>MonoDisplaySmall,Js:()=>MonoDisplayXSmall,l6:()=>MonoHeadingLarge,d0:()=>MonoHeadingMedium,rv:()=>MonoHeadingSmall,gI:()=>MonoHeadingXLarge,yU:()=>MonoHeadingXSmall,SE:()=>MonoHeadingXXLarge,YX:()=>MonoLabelLarge,GC:()=>MonoLabelMedium,Tq:()=>MonoLabelSmall,zO:()=>MonoLabelXSmall,qr:()=>MonoParagraphLarge,r7:()=>MonoParagraphMedium,Zv:()=>MonoParagraphSmall,P$:()=>MonoParagraphXSmall,kd:()=>ParagraphLarge,Yl:()=>ParagraphMedium,aM:()=>ParagraphSmall,lU:()=>ParagraphXSmall});var react=__webpack_require__("./node_modules/react/index.js"),responsive_helpers=__webpack_require__("./node_modules/baseui/esm/helpers/responsive-helpers.js");function constrainToNull(value){return void 0===value?null:value}function getFontValue(obj,key){if(obj)return obj[key]}var StyledBlock=(0,__webpack_require__("./node_modules/baseui/esm/styles/styled.js").zo)("div",(function(props){var _props$$theme=props.$theme,breakpoints=_props$$theme.breakpoints,colors=_props$$theme.colors,typography=_props$$theme.typography,sizing=_props$$theme.sizing,get=function get(obj,key){return obj[key]},getScale=function getScale(size){return sizing[size]||size},styles=function build(breakpoints){var styles={},mediaQueries=(0,responsive_helpers.Wf)(breakpoints);return{apply:function apply(_ref){var property=_ref.property,_ref$transform=_ref.transform,transform=void 0===_ref$transform?function(x){return x}:_ref$transform,value=_ref.value;null!=value&&(Array.isArray(value)?value.forEach((function(v,index){if(0!==index){var mediaQuery=mediaQueries[index-1];styles[mediaQuery]||(styles[mediaQuery]={}),styles[mediaQuery][property]=constrainToNull(transform(v))}else styles[property]=constrainToNull(transform(v))})):styles[property]=constrainToNull(transform(value)))},value:function value(){return styles}}}(breakpoints);return styles.apply({property:"color",value:get(props,"$color"),transform:function transform(color){return colors[color]||color}}),styles.apply({property:"backgroundAttachment",value:get(props,"$backgroundAttachment")}),styles.apply({property:"backgroundClip",value:get(props,"$backgroundClip")}),styles.apply({property:"backgroundColor",value:get(props,"$backgroundColor"),transform:function transform(backgroundColor){return colors[backgroundColor]||backgroundColor}}),styles.apply({property:"backgroundImage",value:get(props,"$backgroundImage")}),styles.apply({property:"backgroundOrigin",value:get(props,"$backgroundOrigin")}),styles.apply({property:"backgroundPosition",value:get(props,"$backgroundPosition")}),styles.apply({property:"backgroundRepeat",value:get(props,"$backgroundRepeat")}),styles.apply({property:"backgroundSize",value:get(props,"$backgroundSize")}),styles.apply({property:"fontFamily",value:get(props,"$font"),transform:function transform(font){return getFontValue(typography[font],"fontFamily")}}),styles.apply({property:"fontWeight",value:get(props,"$font"),transform:function transform(font){return getFontValue(typography[font],"fontWeight")}}),styles.apply({property:"fontSize",value:get(props,"$font"),transform:function transform(font){return getFontValue(typography[font],"fontSize")}}),styles.apply({property:"lineHeight",value:get(props,"$font"),transform:function transform(font){return getFontValue(typography[font],"lineHeight")}}),styles.apply({property:"alignContent",value:get(props,"$alignContent")}),styles.apply({property:"alignItems",value:get(props,"$alignItems")}),styles.apply({property:"alignSelf",value:get(props,"$alignSelf")}),styles.apply({property:"display",value:get(props,"$display")}),styles.apply({property:"flex",value:get(props,"$flex")}),styles.apply({property:"flexDirection",value:get(props,"$flexDirection")}),styles.apply({property:"grid",value:get(props,"$grid")}),styles.apply({property:"gridArea",value:get(props,"$gridArea")}),styles.apply({property:"gridAutoColumns",value:get(props,"$gridAutoColumns")}),styles.apply({property:"gridAutoFlow",value:get(props,"$gridAutoFlow")}),styles.apply({property:"gridAutoRows",value:get(props,"$gridAutoRows")}),styles.apply({property:"gridColumn",value:get(props,"$gridColumn")}),styles.apply({property:"gridColumnEnd",value:get(props,"$gridColumnEnd")}),styles.apply({property:"gridColumnGap",value:get(props,"$gridColumnGap"),transform:getScale}),styles.apply({property:"gridColumnStart",value:get(props,"$gridColumnStart")}),styles.apply({property:"gridGap",value:get(props,"$gridGap"),transform:getScale}),styles.apply({property:"gridRow",value:get(props,"$gridRow")}),styles.apply({property:"gridRowEnd",value:get(props,"$gridRowEnd")}),styles.apply({property:"gridRowGap",value:get(props,"$gridRowGap"),transform:getScale}),styles.apply({property:"gridRowStart",value:get(props,"$gridRowStart")}),styles.apply({property:"gridTemplate",value:get(props,"$gridTemplate")}),styles.apply({property:"gridTemplateAreas",value:get(props,"$gridTemplateAreas")}),styles.apply({property:"gridTemplateColumns",value:get(props,"$gridTemplateColumns")}),styles.apply({property:"gridTemplateRows",value:get(props,"$gridTemplateRows")}),styles.apply({property:"justifyContent",value:get(props,"$justifyContent")}),styles.apply({property:"justifyItems",value:get(props,"$justifyItems")}),styles.apply({property:"justifySelf",value:get(props,"$justifySelf")}),styles.apply({property:"position",value:get(props,"$position")}),styles.apply({property:"width",value:get(props,"$width"),transform:getScale}),styles.apply({property:"minWidth",value:get(props,"$minWidth"),transform:getScale}),styles.apply({property:"maxWidth",value:get(props,"$maxWidth"),transform:getScale}),styles.apply({property:"height",value:get(props,"$height"),transform:getScale}),styles.apply({property:"minHeight",value:get(props,"$minHeight"),transform:getScale}),styles.apply({property:"maxHeight",value:get(props,"$maxHeight"),transform:getScale}),styles.apply({property:"overflowX",value:get(props,"$overflow"),transform:function transform(overflow){return"scrollX"===overflow?"scroll":null}}),styles.apply({property:"overflowY",value:get(props,"$overflow"),transform:function transform(overflow){return"scrollY"===overflow?"scroll":null}}),styles.apply({property:"overflow",value:get(props,"$overflow"),transform:function transform(overflow){return"scrollX"!==overflow&&"scrollY"!==overflow?overflow:null}}),styles.apply({property:"margin",value:get(props,"$margin"),transform:getScale}),styles.apply({property:"marginTop",value:get(props,"$marginTop"),transform:getScale}),styles.apply({property:"marginRight",value:get(props,"$marginRight"),transform:getScale}),styles.apply({property:"marginBottom",value:get(props,"$marginBottom"),transform:getScale}),styles.apply({property:"marginLeft",value:get(props,"$marginLeft"),transform:getScale}),styles.apply({property:"padding",value:get(props,"$padding"),transform:getScale}),styles.apply({property:"paddingTop",value:get(props,"$paddingTop"),transform:getScale}),styles.apply({property:"paddingRight",value:get(props,"$paddingRight"),transform:getScale}),styles.apply({property:"paddingBottom",value:get(props,"$paddingBottom"),transform:getScale}),styles.apply({property:"paddingLeft",value:get(props,"$paddingLeft"),transform:getScale}),styles.apply({property:"placeContent",value:get(props,"$placeContent")}),styles.apply({property:"placeItems",value:get(props,"$placeItems")}),styles.apply({property:"placeSelf",value:get(props,"$placeSelf")}),styles.apply({property:"flexWrap",value:get(props,"$flexWrap"),transform:function transform(){return"wrap"}}),styles.apply({property:"top",value:get(props,"$top"),transform:getScale}),styles.apply({property:"right",value:get(props,"$right"),transform:getScale}),styles.apply({property:"left",value:get(props,"$left"),transform:getScale}),styles.apply({property:"bottom",value:get(props,"$bottom"),transform:getScale}),styles.apply({property:"textOverflow",value:get(props,"$textOverflow")}),styles.apply({property:"whiteSpace",value:get(props,"$whiteSpace")}),styles.value()}));StyledBlock.displayName="StyledBlock",StyledBlock.displayName="StyledBlock";var helpers_overrides=__webpack_require__("./node_modules/baseui/esm/helpers/overrides.js"),_excluded=["forwardedRef","children","as","overrides","color","backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundRepeat","backgroundSize","font","alignContent","alignItems","alignSelf","flexDirection","display","flex","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","justifyContent","justifyItems","justifySelf","position","width","minWidth","maxWidth","height","minHeight","maxHeight","overflow","margin","marginTop","marginRight","marginBottom","marginLeft","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","placeContent","placeItems","placeSelf","flexWrap","left","top","right","bottom","textOverflow","whiteSpace"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Block=function Block(_ref){var forwardedRef=_ref.forwardedRef,children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,_ref$overrides=_ref.overrides,overrides=void 0===_ref$overrides?{}:_ref$overrides,color=_ref.color,backgroundAttachment=_ref.backgroundAttachment,backgroundClip=_ref.backgroundClip,backgroundColor=_ref.backgroundColor,backgroundImage=_ref.backgroundImage,backgroundOrigin=_ref.backgroundOrigin,backgroundPosition=_ref.backgroundPosition,backgroundRepeat=_ref.backgroundRepeat,backgroundSize=_ref.backgroundSize,font=_ref.font,alignContent=_ref.alignContent,alignItems=_ref.alignItems,alignSelf=_ref.alignSelf,flexDirection=_ref.flexDirection,display=_ref.display,flex=_ref.flex,grid=_ref.grid,gridArea=_ref.gridArea,gridAutoColumns=_ref.gridAutoColumns,gridAutoFlow=_ref.gridAutoFlow,gridAutoRows=_ref.gridAutoRows,gridColumn=_ref.gridColumn,gridColumnEnd=_ref.gridColumnEnd,gridColumnGap=_ref.gridColumnGap,gridColumnStart=_ref.gridColumnStart,gridGap=_ref.gridGap,gridRow=_ref.gridRow,gridRowEnd=_ref.gridRowEnd,gridRowGap=_ref.gridRowGap,gridRowStart=_ref.gridRowStart,gridTemplate=_ref.gridTemplate,gridTemplateAreas=_ref.gridTemplateAreas,gridTemplateColumns=_ref.gridTemplateColumns,gridTemplateRows=_ref.gridTemplateRows,justifyContent=_ref.justifyContent,justifyItems=_ref.justifyItems,justifySelf=_ref.justifySelf,position=_ref.position,width=_ref.width,minWidth=_ref.minWidth,maxWidth=_ref.maxWidth,height=_ref.height,minHeight=_ref.minHeight,maxHeight=_ref.maxHeight,overflow=_ref.overflow,margin=_ref.margin,marginTop=_ref.marginTop,marginRight=_ref.marginRight,marginBottom=_ref.marginBottom,marginLeft=_ref.marginLeft,padding=_ref.padding,paddingTop=_ref.paddingTop,paddingRight=_ref.paddingRight,paddingBottom=_ref.paddingBottom,paddingLeft=_ref.paddingLeft,placeContent=_ref.placeContent,placeItems=_ref.placeItems,placeSelf=_ref.placeSelf,flexWrap=_ref.flexWrap,left=_ref.left,top=_ref.top,right=_ref.right,bottom=_ref.bottom,textOverflow=_ref.textOverflow,whiteSpace=_ref.whiteSpace,restProps=_objectWithoutProperties(_ref,_excluded),_getOverrides2=_slicedToArray((0,helpers_overrides.jb)(overrides.Block,StyledBlock),2),BaseBlock=_getOverrides2[0],baseBlockProps=_getOverrides2[1];return react.createElement(BaseBlock,_extends({ref:forwardedRef,$as:as,$color:color,$backgroundAttachment:backgroundAttachment,$backgroundClip:backgroundClip,$backgroundColor:backgroundColor,$backgroundImage:backgroundImage,$backgroundOrigin:backgroundOrigin,$backgroundPosition:backgroundPosition,$backgroundRepeat:backgroundRepeat,$backgroundSize:backgroundSize,$font:font,$alignContent:alignContent,$alignItems:alignItems,$alignSelf:alignSelf,$flexDirection:flexDirection,$display:display,$flex:flex,$grid:grid,$gridArea:gridArea,$gridAutoColumns:gridAutoColumns,$gridAutoFlow:gridAutoFlow,$gridAutoRows:gridAutoRows,$gridColumn:gridColumn,$gridColumnEnd:gridColumnEnd,$gridColumnGap:gridColumnGap,$gridColumnStart:gridColumnStart,$gridGap:gridGap,$gridRow:gridRow,$gridRowEnd:gridRowEnd,$gridRowGap:gridRowGap,$gridRowStart:gridRowStart,$gridTemplate:gridTemplate,$gridTemplateAreas:gridTemplateAreas,$gridTemplateColumns:gridTemplateColumns,$gridTemplateRows:gridTemplateRows,$justifyContent:justifyContent,$justifyItems:justifyItems,$justifySelf:justifySelf,$position:position,$width:width,$minWidth:minWidth,$maxWidth:maxWidth,$height:height,$minHeight:minHeight,$maxHeight:maxHeight,$overflow:overflow,$margin:margin,$marginTop:marginTop,$marginRight:marginRight,$marginBottom:marginBottom,$marginLeft:marginLeft,$padding:padding,$paddingTop:paddingTop,$paddingRight:paddingRight,$paddingBottom:paddingBottom,$paddingLeft:paddingLeft,$placeContent:placeContent,$placeItems:placeItems,$placeSelf:placeSelf,$flexWrap:flexWrap,$left:left,$top:top,$right:right,$bottom:bottom,$textOverflow:textOverflow,$whiteSpace:whiteSpace,"data-baseweb":"block"},restProps,baseBlockProps),children)},BlockComponent=react.forwardRef((function(props,ref){return react.createElement(Block,_extends({},props,{forwardedRef:ref}))}));BlockComponent.displayName="Block";const block=BlockComponent;function typography_extends(){return typography_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},typography_extends.apply(this,arguments)}var DisplayLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-displaylarge"},props,{font:props.font||"DisplayLarge",color:props.color||"contentPrimary",ref}))}));DisplayLarge.displayName="DisplayLarge";var DisplayMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-displaymedium"},props,{font:props.font||"DisplayMedium",color:props.color||"contentPrimary",ref}))}));DisplayMedium.displayName="DisplayMedium";var DisplaySmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-displaysmall"},props,{font:props.font||"DisplaySmall",color:props.color||"contentPrimary",ref}))}));DisplaySmall.displayName="DisplaySmall";var DisplayXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-displayxsmall"},props,{font:props.font||"DisplayXSmall",color:props.color||"contentPrimary",ref}))}));DisplayXSmall.displayName="DisplayXSmall";var HeadingXXLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headingxxlarge",as:props.as||"h1"},props,{font:props.font||"HeadingXXLarge",color:props.color||"contentPrimary",ref}))}));HeadingXXLarge.displayName="HeadingXXLarge";var HeadingXLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headingxlarge",as:props.as||"h2"},props,{font:props.font||"HeadingXLarge",color:props.color||"contentPrimary",ref}))}));HeadingXLarge.displayName="HeadingXLarge";var HeadingLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headinglarge",as:props.as||"h3"},props,{font:props.font||"HeadingLarge",color:props.color||"contentPrimary",ref}))}));HeadingLarge.displayName="HeadingLarge";var HeadingMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headingmedium",as:props.as||"h4"},props,{font:props.font||"HeadingMedium",color:props.color||"contentPrimary",ref}))}));HeadingMedium.displayName="HeadingMedium";var HeadingSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headingsmall",as:props.as||"h5"},props,{font:props.font||"HeadingSmall",color:props.color||"contentPrimary",ref}))}));HeadingSmall.displayName="HeadingSmall";var HeadingXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-headingxsmall",as:props.as||"h6"},props,{font:props.font||"HeadingXSmall",color:props.color||"contentPrimary",ref}))}));HeadingXSmall.displayName="HeadingXSmall";var LabelLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-labellarge"},props,{font:props.font||"LabelLarge",color:props.color||"contentPrimary",ref}))}));LabelLarge.displayName="LabelLarge";var LabelMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-labelmedium"},props,{font:props.font||"LabelMedium",color:props.color||"contentPrimary",ref}))}));LabelMedium.displayName="LabelMedium";var LabelSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-labelsmall"},props,{font:props.font||"LabelSmall",color:props.color||"contentPrimary",ref}))}));LabelSmall.displayName="LabelSmall";var LabelXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-labelxsmall"},props,{font:props.font||"LabelXSmall",color:props.color||"contentPrimary",ref}))}));LabelXSmall.displayName="LabelXSmall";var ParagraphLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-paragraphlarge",as:props.as||"p"},props,{font:props.font||"ParagraphLarge",color:props.color||"contentPrimary",ref}))}));ParagraphLarge.displayName="ParagraphLarge";var ParagraphMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-paragraphmedium",as:props.as||"p"},props,{font:props.font||"ParagraphMedium",color:props.color||"contentPrimary",ref}))}));ParagraphMedium.displayName="ParagraphMedium";var ParagraphSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-paragraphsmall",as:props.as||"p"},props,{font:props.font||"ParagraphSmall",color:props.color||"contentPrimary",ref}))}));ParagraphSmall.displayName="ParagraphSmall";var ParagraphXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-paragraphxsmall",as:props.as||"p"},props,{font:props.font||"ParagraphXSmall",color:props.color||"contentPrimary",ref}))}));ParagraphXSmall.displayName="ParagraphXSmall";var MonoDisplayLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monodisplaylarge"},props,{font:props.font||"MonoDisplayLarge",color:props.color||"contentPrimary",ref}))}));MonoDisplayLarge.displayName="MonoDisplayLarge";var MonoDisplayMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monodisplaymedium"},props,{font:props.font||"MonoDisplayMedium",color:props.color||"contentPrimary",ref}))}));MonoDisplayMedium.displayName="MonoDisplayMedium";var MonoDisplaySmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monodisplaysmall"},props,{font:props.font||"MonoDisplaySmall",color:props.color||"contentPrimary",ref}))}));MonoDisplaySmall.displayName="MonoDisplaySmall";var MonoDisplayXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monodisplayxsmall"},props,{font:props.font||"MonoDisplayXSmall",color:props.color||"contentPrimary",ref}))}));MonoDisplayXSmall.displayName="MonoDisplayXSmall";var MonoHeadingXXLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadingxxlarge",as:props.as||"h1"},props,{font:props.font||"MonoHeadingXXLarge",color:props.color||"contentPrimary",ref}))}));MonoHeadingXXLarge.displayName="MonoHeadingXXLarge";var MonoHeadingXLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadingxlarge",as:props.as||"h2"},props,{font:props.font||"MonoHeadingXLarge",color:props.color||"contentPrimary",ref}))}));MonoHeadingXLarge.displayName="MonoHeadingXLarge";var MonoHeadingLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadinglarge",as:props.as||"h3"},props,{font:props.font||"MonoHeadingLarge",color:props.color||"contentPrimary",ref}))}));MonoHeadingLarge.displayName="MonoHeadingLarge";var MonoHeadingMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadingmedium",as:props.as||"h4"},props,{font:props.font||"MonoHeadingMedium",color:props.color||"contentPrimary",ref}))}));MonoHeadingMedium.displayName="MonoHeadingMedium";var MonoHeadingSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadingsmall",as:props.as||"h5"},props,{font:props.font||"MonoHeadingSmall",color:props.color||"contentPrimary",ref}))}));MonoHeadingSmall.displayName="MonoHeadingSmall";var MonoHeadingXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoheadingxsmall",as:props.as||"h6"},props,{font:props.font||"MonoHeadingXSmall",color:props.color||"contentPrimary",ref}))}));MonoHeadingXSmall.displayName="MonoHeadingXSmall";var MonoLabelLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monolabellarge"},props,{font:props.font||"MonoLabelLarge",color:props.color||"contentPrimary",ref}))}));MonoLabelLarge.displayName="MonoLabelLarge";var MonoLabelMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monolabelmedium"},props,{font:props.font||"MonoLabelMedium",color:props.color||"contentPrimary",ref}))}));MonoLabelMedium.displayName="MonoLabelMedium";var MonoLabelSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monolabelsmall"},props,{font:props.font||"MonoLabelSmall",color:props.color||"contentPrimary",ref}))}));MonoLabelSmall.displayName="MonoLabelSmall";var MonoLabelXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monolabelxsmall"},props,{font:props.font||"MonoLabelXSmall",color:props.color||"contentPrimary",ref}))}));MonoLabelXSmall.displayName="MonoLabelXSmall";var MonoParagraphLarge=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoparagraphlarge",as:props.as||"p"},props,{font:props.font||"MonoParagraphLarge",color:props.color||"contentPrimary",ref}))}));MonoParagraphLarge.displayName="MonoParagraphLarge";var MonoParagraphMedium=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoparagraphmedium",as:props.as||"p"},props,{font:props.font||"MonoParagraphMedium",color:props.color||"contentPrimary",ref}))}));MonoParagraphMedium.displayName="MonoParagraphMedium";var MonoParagraphSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoparagraphsmall",as:props.as||"p"},props,{font:props.font||"MonoParagraphSmall",color:props.color||"contentPrimary",ref}))}));MonoParagraphSmall.displayName="MonoParagraphSmall";var MonoParagraphXSmall=react.forwardRef((function(props,ref){return react.createElement(block,typography_extends({"data-baseweb":"typo-monoparagraphxsmall",as:props.as||"p"},props,{font:props.font||"MonoParagraphXSmall",color:props.color||"contentPrimary",ref}))}));MonoParagraphXSmall.displayName="MonoParagraphXSmall"}}]);