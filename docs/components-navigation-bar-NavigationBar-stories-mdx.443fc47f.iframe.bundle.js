"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[5006],{"./src/components/navigation-bar/NavigationBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,auth:()=>auth,base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,items:()=>items,withoutAuthWidget:()=>withoutAuthWidget,withoutUsername:()=>withoutUsername});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_NavigationBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation-bar/NavigationBar.tsx"),_brand__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/brand/index.ts"),_AuthDropdownContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/navigation-bar/AuthDropdownContainer.tsx"),_AuthItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/navigation-bar/AuthItem.tsx"),baseui__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({username,...args})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)()),[css]=(0,baseui__WEBPACK_IMPORTED_MODULE_7__.hQ)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.div,{className:css({width:"100%",height:"240px",transform:"scale(1)"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z,{...args,username,authDropdownContainer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AuthDropdownContainer__WEBPACK_IMPORTED_MODULE_3__.Z,{username,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AuthItem__WEBPACK_IMPORTED_MODULE_4__.Z,{amount:"1069",cents:"34",currency:"USD"})})})})},items=[{id:"1",label:"Menu item 1",isSelected:!0},{id:"2",label:"Menu item 2",children:[{id:"4",label:"Menu subitem 1"},{id:"5",label:"Menu subitem 2",disabled:!0},{id:"6",label:"Menu subitem 3"}]},{id:"3",label:"Menu item 3",disabled:!0}];function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.h_,{title:"Navigation/Navigation Bar",component:_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"navigationbar",children:"NavigationBar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.oG,{name:"Base",args:{items,username:"John",isAuth:!1,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.oG,{name:"Auth",args:{items,username:"John",isAuth:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.oG,{name:"Without Username",args:{items,isAuth:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.oG,{name:"Without Auth Widget",args:{items,username:"John",noLogin:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.$4,{of:_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"NavigationBar"})," and from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {NavigationBar, Brand, AuthDropdownContainer, AuthItem} from "@nilfoundation/ui-kit";\n        ...\n        export const items = [\n          {\n            id: "1",\n            label: "Menu item 1",\n            isSelected: true\n          },\n          {\n          id: "2",\n          label: "Menu item 2",\n          children: [\n              {\n              id: "3",\n              label: "Menu subitem 1"\n              }\n            ]\n          }\n        ]\n        ...\n        <NavigationBar\n            items={items}\n            username="John"\n            isAuth\n            brand={<Brand />}\n            authDropdownContainer={() => (\n              <AuthDropdownContainer username="John">\n                <AuthItem amount="1069" cents="34" currency="USD" />\n              </AuthDropdownContainer>\n            )}\n        />\n  '})]})}const base=Template.bind({});base.storyName="Base",base.args={items,username:"John",isAuth:!1,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},base.parameters={storySource:{source:'({\n  username,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const container = {\n    width: "100%",\n    height: "240px",\n    transform: "scale(1)"\n  };\n  return <div className={css(container)}>\n      <NavigationBar {...args} username={username} authDropdownContainer={<AuthDropdownContainer username={username}>\n            <AuthItem amount="1069" cents="34" currency="USD" />\n          </AuthDropdownContainer>} />\n    </div>;\n}'}};const auth=Template.bind({});auth.storyName="Auth",auth.args={items,username:"John",isAuth:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},auth.parameters={storySource:{source:'({\n  username,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const container = {\n    width: "100%",\n    height: "240px",\n    transform: "scale(1)"\n  };\n  return <div className={css(container)}>\n      <NavigationBar {...args} username={username} authDropdownContainer={<AuthDropdownContainer username={username}>\n            <AuthItem amount="1069" cents="34" currency="USD" />\n          </AuthDropdownContainer>} />\n    </div>;\n}'}};const withoutUsername=Template.bind({});withoutUsername.storyName="Without Username",withoutUsername.args={items,isAuth:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},withoutUsername.parameters={storySource:{source:'({\n  username,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const container = {\n    width: "100%",\n    height: "240px",\n    transform: "scale(1)"\n  };\n  return <div className={css(container)}>\n      <NavigationBar {...args} username={username} authDropdownContainer={<AuthDropdownContainer username={username}>\n            <AuthItem amount="1069" cents="34" currency="USD" />\n          </AuthDropdownContainer>} />\n    </div>;\n}'}};const withoutAuthWidget=Template.bind({});withoutAuthWidget.storyName="Without Auth Widget",withoutAuthWidget.args={items,username:"John",noLogin:!0,brand:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_brand__WEBPACK_IMPORTED_MODULE_2__.H,{})},withoutAuthWidget.parameters={storySource:{source:'({\n  username,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const container = {\n    width: "100%",\n    height: "240px",\n    transform: "scale(1)"\n  };\n  return <div className={css(container)}>\n      <NavigationBar {...args} username={username} authDropdownContainer={<AuthDropdownContainer username={username}>\n            <AuthItem amount="1069" cents="34" currency="USD" />\n          </AuthDropdownContainer>} />\n    </div>;\n}'}};const componentMeta={title:"Navigation/Navigation Bar",component:_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["base","auth","withoutUsername","withoutAuthWidget"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","items","base","auth","withoutUsername","withoutAuthWidget"]},"./node_modules/baseui/esm/popover/stateful-container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/baseui/esm/popover/constants.js"),_utils_focusVisible__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/baseui/esm/utils/focusVisible.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var StatefulContainer=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(StatefulContainer,_React$Component);var _super=_createSuper(StatefulContainer);function StatefulContainer(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,StatefulContainer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"state",function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({isOpen:!1},_this.props.initialState)),_defineProperty(_assertThisInitialized(_this),"onBlur",(function(e){_this.props.onBlur&&_this.props.onBlur(e),_this.props.focusLock||_this.props.autoFocus||_this.close()})),_defineProperty(_assertThisInitialized(_this),"onClick",(function(e){_this.props.onClick&&_this.props.onClick(e),_this.state.isOpen?_this.close():_this.open()})),_defineProperty(_assertThisInitialized(_this),"onClickOutside",(function(){_this.close()})),_defineProperty(_assertThisInitialized(_this),"onEsc",(function(){_this.close()})),_defineProperty(_assertThisInitialized(_this),"onFocus",(function(e){_this.props.onFocus&&_this.props.onFocus(e),(0,_utils_focusVisible__WEBPACK_IMPORTED_MODULE_1__.E)(e)&&_this.open()})),_defineProperty(_assertThisInitialized(_this),"onMouseEnter",(function(e){_this.props.onMouseEnter&&_this.props.onMouseEnter(e),_this.open()})),_defineProperty(_assertThisInitialized(_this),"onMouseLeave",(function(e){_this.props.onMouseLeave&&_this.props.onMouseLeave(e),_this.close()})),_defineProperty(_assertThisInitialized(_this),"onContentClose",(function(){_this.close()})),_defineProperty(_assertThisInitialized(_this),"renderContent",(function(){var content=_this.props.content;return"function"==typeof content?content({close:_this.onContentClose}):content})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(StatefulContainer,[{key:"open",value:function open(){this.internalSetState(_constants__WEBPACK_IMPORTED_MODULE_2__.oL.open,{isOpen:!0}),this.props.onOpen&&this.props.onOpen()}},{key:"close",value:function close(){this.internalSetState(_constants__WEBPACK_IMPORTED_MODULE_2__.oL.close,{isOpen:!1}),this.props.onClose&&this.props.onClose()}},{key:"internalSetState",value:function internalSetState(type,changes){var stateReducer=this.props.stateReducer;"function"==typeof stateReducer?this.setState((function(prevState){return stateReducer(type,changes,prevState)})):this.setState(changes)}},{key:"render",value:function render(){var _this$props=this.props,accessibilityType=_this$props.accessibilityType,autoFocus=_this$props.autoFocus,animateOutTime=_this$props.animateOutTime,dismissOnClickOutside=_this$props.dismissOnClickOutside,dismissOnEsc=_this$props.dismissOnEsc,focusLock=_this$props.focusLock,ignoreBoundary=_this$props.ignoreBoundary,mountNode=_this$props.mountNode,onBlur=_this$props.onBlur,onClick=_this$props.onClick,onFocus=_this$props.onFocus,onMouseEnter=_this$props.onMouseEnter,onMouseLeave=_this$props.onMouseLeave,onMouseEnterDelay=_this$props.onMouseEnterDelay,onMouseLeaveDelay=_this$props.onMouseLeaveDelay,overrides=_this$props.overrides,placement=_this$props.placement,popperOptions=_this$props.popperOptions,renderAll=_this$props.renderAll,returnFocus=_this$props.returnFocus,showArrow=_this$props.showArrow,triggerType=_this$props.triggerType,popoverMargin=_this$props.popoverMargin,focusOptions=_this$props.focusOptions,popoverProps={accessibilityType,animateOutTime,autoFocus,content:this.renderContent,focusLock,ignoreBoundary,isOpen:this.state.isOpen,mountNode,onBlur,onClick,onFocus,onMouseEnter,onMouseLeave,onMouseEnterDelay,onMouseLeaveDelay,overrides,placement,popperOptions,renderAll,returnFocus,showArrow,triggerType,popoverMargin,focusOptions};return dismissOnClickOutside&&(popoverProps.onClickOutside=this.onClickOutside),dismissOnEsc&&(popoverProps.onEsc=this.onEsc),triggerType===_constants__WEBPACK_IMPORTED_MODULE_2__.gu.hover?(popoverProps.onBlur=this.onBlur,popoverProps.onFocus=this.onFocus,popoverProps.onMouseEnter=this.onMouseEnter,popoverProps.onMouseLeave=this.onMouseLeave):popoverProps.onClick=this.onClick,this.props.children(popoverProps)}}]),StatefulContainer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(StatefulContainer,"defaultProps",{accessibilityType:_constants__WEBPACK_IMPORTED_MODULE_2__.SI.menu,ignoreBoundary:!1,overrides:{},onMouseEnterDelay:200,onMouseLeaveDelay:200,placement:_constants__WEBPACK_IMPORTED_MODULE_2__.r4.auto,popperOptions:{},showArrow:!1,triggerType:_constants__WEBPACK_IMPORTED_MODULE_2__.gu.click,dismissOnClickOutside:!0,dismissOnEsc:!0,stateReducer:function defaultStateReducer(type,nextState){return nextState},popoverMargin:_constants__WEBPACK_IMPORTED_MODULE_2__.AF});const __WEBPACK_DEFAULT_EXPORT__=StatefulContainer}}]);