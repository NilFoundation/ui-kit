(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[5026],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/chart/Chart.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,candlestickChart:()=>candlestickChart,chartWidget:()=>chartWidget,default:()=>__WEBPACK_DEFAULT_EXPORT__,histogramChart:()=>histogramChart,lineChart:()=>lineChart,lineData:()=>lineData});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/chart/ChartWrapper.tsx"),_ChartWidget__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/chart/ChartWidget.tsx"),_series__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/chart/series/index.ts"),_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/shared/ui/getFigmaParameters.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__.Z,{height:400,...args}),lineData=[{time:"2018-12-22",value:23},{time:"2018-12-23",value:54},{time:"2018-12-24",value:36},{time:"2018-12-25",value:48},{time:"2018-12-26",value:24},{time:"2018-12-27",value:73},{time:"2018-12-28",value:287},{time:"2018-12-29",value:96},{time:"2018-12-30",value:37},{time:"2018-12-31",value:54},{time:"2019-01-01",value:62},{time:"2019-01-02",value:71},{time:"2019-01-03",value:88},{time:"2019-01-04",value:99},{time:"2019-01-05",value:13},{time:"2019-01-06",value:28},{time:"2019-01-07",value:92}];function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.h_,{title:"Data display/Chart",component:_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"chart",children:"Chart"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Xz,{isColumn:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Line chart",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.eh,{data:lineData})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Candlestick chart",parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=353-204999&mode=design&t=Xa4chShG78HsBTlk-0"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.$Y,{data:[{time:"2018-10-19",open:180.34,high:180.99,low:178.57,close:179.85},{time:"2018-10-22",open:180.82,high:181.4,low:177.56,close:178.75},{time:"2018-10-23",open:175.77,high:179.49,low:175.44,close:178.53},{time:"2018-10-24",open:178.58,high:182.37,low:176.31,close:176.97},{time:"2018-10-25",open:177.52,high:180.5,low:176.83,close:179.07},{time:"2018-10-26",open:176.88,high:177.34,low:170.91,close:172.23},{time:"2018-10-29",open:173.74,high:175.99,low:170.95,close:173.2}]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Histogram chart",parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=353-205666&mode=design&t=Xa4chShG78HsBTlk-0"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.Jv,{data:[{time:"2018-12-22",value:54},{time:"2018-12-23",value:23},{time:"2018-12-24",value:44},{time:"2018-12-25",value:85},{time:"2018-12-26",value:75},{time:"2018-12-27",value:63},{time:"2018-12-28",value:51}]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.oG,{name:"Chart Widget",parameters:(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=1839-62884&mode=design&t=HSeW4QjkrUj25Kdq-0"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChartWidget__WEBPACK_IMPORTED_MODULE_2__.Z,{height:106,width:168,data:lineData})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__.Z}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["To use, import the component ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Chart"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hw,{language:"tsx",dark:!0,format:!0,code:"\n        import {Chart} from \"@nilfoundation/ui-kit\";\n        ...\n        <Chart>\n          <LineSeries data={[{ time: '2018-12-22', value: 32.51 }]} />\n        </Chart>\n  "})]})}const lineChart=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.eh,{data:lineData})});lineChart.storyName="Line chart",lineChart.parameters={storySource:{source:"<Template><LineSeries data={lineData} /></Template>"}};const candlestickChart=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.$Y,{data:[{time:"2018-10-19",open:180.34,high:180.99,low:178.57,close:179.85},{time:"2018-10-22",open:180.82,high:181.4,low:177.56,close:178.75},{time:"2018-10-23",open:175.77,high:179.49,low:175.44,close:178.53},{time:"2018-10-24",open:178.58,high:182.37,low:176.31,close:176.97},{time:"2018-10-25",open:177.52,high:180.5,low:176.83,close:179.07},{time:"2018-10-26",open:176.88,high:177.34,low:170.91,close:172.23},{time:"2018-10-29",open:173.74,high:175.99,low:170.95,close:173.2}]})});candlestickChart.storyName="Candlestick chart",candlestickChart.parameters={storySource:{source:'<Template><CandlestickSeries data={[{\n    time: "2018-10-19",\n    open: 180.34,\n    high: 180.99,\n    low: 178.57,\n    close: 179.85\n  }, {\n    time: "2018-10-22",\n    open: 180.82,\n    high: 181.4,\n    low: 177.56,\n    close: 178.75\n  }, {\n    time: "2018-10-23",\n    open: 175.77,\n    high: 179.49,\n    low: 175.44,\n    close: 178.53\n  }, {\n    time: "2018-10-24",\n    open: 178.58,\n    high: 182.37,\n    low: 176.31,\n    close: 176.97\n  }, {\n    time: "2018-10-25",\n    open: 177.52,\n    high: 180.5,\n    low: 176.83,\n    close: 179.07\n  }, {\n    time: "2018-10-26",\n    open: 176.88,\n    high: 177.34,\n    low: 170.91,\n    close: 172.23\n  }, {\n    time: "2018-10-29",\n    open: 173.74,\n    high: 175.99,\n    low: 170.95,\n    close: 173.2\n  }]} /></Template>'},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=353-204999&mode=design&t=Xa4chShG78HsBTlk-0")};const histogramChart=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Template,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_series__WEBPACK_IMPORTED_MODULE_3__.Jv,{data:[{time:"2018-12-22",value:54},{time:"2018-12-23",value:23},{time:"2018-12-24",value:44},{time:"2018-12-25",value:85},{time:"2018-12-26",value:75},{time:"2018-12-27",value:63},{time:"2018-12-28",value:51}]})});histogramChart.storyName="Histogram chart",histogramChart.parameters={storySource:{source:'<Template><HistogramSeries data={[{\n    time: "2018-12-22",\n    value: 54\n  }, {\n    time: "2018-12-23",\n    value: 23\n  }, {\n    time: "2018-12-24",\n    value: 44\n  }, {\n    time: "2018-12-25",\n    value: 85\n  }, {\n    time: "2018-12-26",\n    value: 75\n  }, {\n    time: "2018-12-27",\n    value: 63\n  }, {\n    time: "2018-12-28",\n    value: 51\n  }]} /></Template>'},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=353-205666&mode=design&t=Xa4chShG78HsBTlk-0")};const chartWidget=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChartWidget__WEBPACK_IMPORTED_MODULE_2__.Z,{height:106,width:168,data:lineData});chartWidget.storyName="Chart Widget",chartWidget.parameters={storySource:{source:"<ChartWidget height={106} width={168} data={lineData} />"},...(0,_shared_ui_getFigmaParameters__WEBPACK_IMPORTED_MODULE_7__.M)("https://www.figma.com/file/YjE625ScDMf2ILjWB1sTMc/System?type=design&node-id=1839-62884&mode=design&t=HSeW4QjkrUj25Kdq-0")};const componentMeta={title:"Data display/Chart",component:_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["stories-mdx"],includeStories:["lineChart","candlestickChart","histogramChart","chartWidget"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ui_kit_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","lineData","lineChart","candlestickChart","histogramChart","chartWidget"]},"./src/components/chart/ChartContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>ChartContext});const ChartContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({});ChartContext.displayName="ChartContext"},"./src/components/chart/ChartWidget.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/chart/ChartWrapper.tsx"),_series__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/chart/series/index.ts"),_shared__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/index.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/chart/styles.ts"),styletron_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const chartWidgetDefaultOptions={crosshair:{mode:2},leftPriceScale:{visible:!1},timeScale:{fixLeftEdge:!0,fixRightEdge:!0,visible:!1}},ChartWidgetRender=(_ref,ref)=>{let{data,color=_shared__WEBPACK_IMPORTED_MODULE_3__.Bi.blue300,className,...rest}=_ref;const[css]=(0,styletron_react__WEBPACK_IMPORTED_MODULE_6__.hQ)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ChartWrapper__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,...chartWidgetDefaultOptions,className:`${className?className+" ":""}${css(_styles__WEBPACK_IMPORTED_MODULE_4__.W.chartWidgetContianerStyles)}`,...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:css(_styles__WEBPACK_IMPORTED_MODULE_4__.W.widgetShadowStyles)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_series__WEBPACK_IMPORTED_MODULE_2__.eh,{data,options:{color,priceLineVisible:!1}})]})};ChartWidgetRender.displayName="ChartWidgetRender";const ChartWidget=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ChartWidgetRender);ChartWidget.displayName="ChartWidget";const __WEBPACK_DEFAULT_EXPORT__=ChartWidget;try{ChartWidget.displayName="ChartWidget",ChartWidget.__docgenInfo={description:"",displayName:"ChartWidget",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"LineData<Time>[]"}},color:{defaultValue:{value:"#87B6FC"},description:"",name:"color",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Time>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onInit:{defaultValue:null,description:"",name:"onInit",required:!1,type:{name:"ChartInitHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/ChartWidget.tsx#ChartWidget"]={docgenInfo:ChartWidget.__docgenInfo,name:"ChartWidget",path:"src/components/chart/ChartWidget.tsx#ChartWidget"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/chart/ChartWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>chart_ChartWrapper});var react=__webpack_require__("./node_modules/react/index.js"),ChartContext=__webpack_require__("./src/components/chart/ChartContext.ts"),debounce=__webpack_require__("./src/shared/utils/debounce.ts"),useOnWindowResize=__webpack_require__("./src/shared/hooks/useOnWindowResize.ts");var lightweight_charts_production=__webpack_require__("./node_modules/lightweight-charts/dist/lightweight-charts.production.mjs"),shared=__webpack_require__("./src/shared/index.ts"),scales=__webpack_require__("./src/components/chart/scales/index.ts"),scalesDefaultOptions=__webpack_require__("./src/components/chart/scales/scalesDefaultOptions.ts");const chartDefaultOptions={layout:{background:{type:lightweight_charts_production.Mr.Solid,color:shared.Bi.gray900},fontFamily:"Inter, sans-serif",textColor:shared.Bi.gray400},grid:{vertLines:{visible:!1},horzLines:{visible:!1}},crosshair:{vertLine:{color:shared.Bi.gray50,width:1,style:0,visible:!0,labelVisible:!0},horzLine:{color:shared.Bi.gray50,width:1,style:0,visible:!0,labelVisible:!0},mode:0},localization:{locale:"en-US"},timeScale:scalesDefaultOptions.t,leftPriceScale:{visible:!0,...scales.priceScaleDefaultOptions},rightPriceScale:{visible:!1,...scales.priceScaleDefaultOptions}},useInitChart=_ref=>{let{container,...rest}=_ref;const{onClick,onCrosshairMove,onInit,...restOptions}=rest,chartApiRef=(0,react.useRef)({_chart:null,api(){return null!==this._chart||this.destroyed||(this._chart=(0,lightweight_charts_production.C2)(container,{...chartDefaultOptions,...restOptions}),onInit&&onInit(this._chart)),this._chart},clear(){null!==this._chart&&(this._chart.remove(),this._chart=null,this.destroyed=!0)},destroyed:!1});return(0,react.useLayoutEffect)((()=>(chartApiRef.current.api(),()=>{chartApiRef.current.clear()})),[]),(0,react.useLayoutEffect)((()=>{if(container)return onClick&&chartApiRef.current.api()?.subscribeClick(onClick),()=>{onClick&&chartApiRef.current.api()?.unsubscribeClick(onClick)}}),[onClick]),(0,react.useLayoutEffect)((()=>{if(container)return onCrosshairMove&&chartApiRef.current.api()?.subscribeCrosshairMove(onCrosshairMove),()=>{onCrosshairMove&&chartApiRef.current.api()?.unsubscribeCrosshairMove(onCrosshairMove)}}),[onCrosshairMove]),(0,react.useLayoutEffect)((()=>{container&&chartApiRef.current.api()?.applyOptions(restOptions)}),[restOptions]),chartApiRef};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChartComponent=_ref=>{let{children,container,...rest}=_ref;const chartApiRef=useInitChart({container,...rest});return((chartApiRef,autoResizeEnabled,container)=>{const handleResize=(0,debounce.D)((()=>{container&&autoResizeEnabled&&chartApiRef.current?.api()?.applyOptions({width:container.clientWidth,height:container.clientHeight})}),100);(0,useOnWindowResize.V)(handleResize)})(chartApiRef,void 0===rest.height&&void 0===rest.width,container),(0,jsx_runtime.jsx)(ChartContext._.Provider,{value:chartApiRef.current,children})};ChartComponent.displayName="ChartComponent";const chart_ChartComponent=ChartComponent;try{ChartComponent.displayName="ChartComponent",ChartComponent.__docgenInfo={description:"",displayName:"ChartComponent",props:{container:{defaultValue:null,description:"",name:"container",required:!0,type:{name:"HTMLElement"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Time>"}},onCrosshairMove:{defaultValue:null,description:"",name:"onCrosshairMove",required:!1,type:{name:"MouseEventHandler<Time>"}},onInit:{defaultValue:null,description:"",name:"onInit",required:!1,type:{name:"ChartInitHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/ChartComponent.tsx#ChartComponent"]={docgenInfo:ChartComponent.__docgenInfo,name:"ChartComponent",path:"src/components/chart/ChartComponent.tsx#ChartComponent"})}catch(__react_docgen_typescript_loader_error){}var dist_browser_esm=__webpack_require__("./node_modules/styletron-react/dist-browser-esm/index.js"),styles=__webpack_require__("./src/components/chart/styles.ts");const ChartRenderFunction=(_ref,ref)=>{let{children,className,...rest}=_ref;const[css]=(0,dist_browser_esm.hQ)(),[container,setContainer]=(0,react.useState)(),containerRef=(0,react.useCallback)((r=>{setContainer(r),ref&&("function"==typeof ref?containerRef(r):ref.current=r)}),[ref]);return(0,jsx_runtime.jsx)("div",{ref:containerRef,className:`${className?className+" ":""}${css(styles.W.containerStyles)}`,children:!!container&&(0,jsx_runtime.jsx)(chart_ChartComponent,{container,...rest,children})})};ChartRenderFunction.displayName="ChartRenderFunction";const ChartWrapper=(0,react.forwardRef)(ChartRenderFunction);ChartWrapper.displayName="ChartWrapper";const chart_ChartWrapper=ChartWrapper;try{ChartWrapper.displayName="ChartWrapper",ChartWrapper.__docgenInfo={description:"",displayName:"ChartWrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Time>"}},onCrosshairMove:{defaultValue:null,description:"",name:"onCrosshairMove",required:!1,type:{name:"MouseEventHandler<Time>"}},onInit:{defaultValue:null,description:"",name:"onInit",required:!1,type:{name:"ChartInitHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/ChartWrapper.tsx#ChartWrapper"]={docgenInfo:ChartWrapper.__docgenInfo,name:"ChartWrapper",path:"src/components/chart/ChartWrapper.tsx#ChartWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/chart/scales/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{priceScaleDefaultOptions:()=>scalesDefaultOptions.b});var react=__webpack_require__("./node_modules/react/index.js"),ChartContext=__webpack_require__("./src/components/chart/ChartContext.ts"),scalesDefaultOptions=__webpack_require__("./src/components/chart/scales/scalesDefaultOptions.ts");const useInitTimeScale=_ref=>{let{onVisibleTimeRangeChange,onVisibleLogicalRangeChange,onSizeChange,visibleRange,visibleLogicalRange,options}=_ref;const chart=(0,react.useContext)(ChartContext._);if(!chart)throw new Error("Chart context not found");const timeScaleApiRef=(0,react.useRef)({_timeScale:null,api(){if(!this._timeScale){const chartApi=chart.api();if(!chartApi)return null;this._timeScale=chartApi.timeScale(),this._timeScale.applyOptions({...scalesDefaultOptions.t,...options}),visibleRange&&this._timeScale.setVisibleRange(visibleRange),visibleLogicalRange&&this._timeScale.setVisibleLogicalRange(visibleLogicalRange)}return this._timeScale},clear(){null!==this._timeScale&&(this._timeScale=null)}});return(0,react.useLayoutEffect)((()=>(timeScaleApiRef.current.api(),()=>{timeScaleApiRef.current.clear()})),[]),(0,react.useLayoutEffect)((()=>{chart&&options&&timeScaleApiRef.current?.api()?.applyOptions(options)}),[options]),(0,react.useLayoutEffect)((()=>{if(chart)return onSizeChange&&timeScaleApiRef.current?.api()?.subscribeSizeChange(onSizeChange),()=>{onSizeChange&&timeScaleApiRef.current?.api()?.unsubscribeSizeChange(onSizeChange)}}),[onSizeChange]),(0,react.useLayoutEffect)((()=>{if(chart)return onVisibleLogicalRangeChange&&timeScaleApiRef.current?.api()?.subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChange),()=>{onVisibleLogicalRangeChange&&timeScaleApiRef.current?.api()?.unsubscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChange)}}),[onVisibleLogicalRangeChange]),(0,react.useLayoutEffect)((()=>{if(chart)return onVisibleTimeRangeChange&&timeScaleApiRef.current?.api()?.subscribeVisibleTimeRangeChange(onVisibleTimeRangeChange),()=>{onVisibleTimeRangeChange&&timeScaleApiRef.current?.api()?.unsubscribeVisibleTimeRangeChange(onVisibleTimeRangeChange)}}),[onVisibleTimeRangeChange]),(0,react.useLayoutEffect)((()=>{chart&&visibleRange&&timeScaleApiRef.current?.api()?.setVisibleRange(visibleRange)}),[visibleRange]),(0,react.useLayoutEffect)((()=>{chart&&visibleLogicalRange&&timeScaleApiRef.current?.api()?.setVisibleLogicalRange(visibleLogicalRange)}),[visibleLogicalRange]),timeScaleApiRef},TimeScaleRenderFunction=(props,ref)=>{const timeScaleApiRef=useInitTimeScale(props);return(0,react.useImperativeHandle)(ref,(()=>timeScaleApiRef.current),[timeScaleApiRef]),null},TimeScale=(0,react.forwardRef)(TimeScaleRenderFunction);TimeScale.displayName="TimeScale";try{TimeScale.displayName="TimeScale",TimeScale.__docgenInfo={description:"",displayName:"TimeScale",props:{onVisibleTimeRangeChange:{defaultValue:null,description:"",name:"onVisibleTimeRangeChange",required:!1,type:{name:"TimeRangeChangeEventHandler<Time>"}},onVisibleLogicalRangeChange:{defaultValue:null,description:"",name:"onVisibleLogicalRangeChange",required:!1,type:{name:"LogicalRangeChangeEventHandler"}},onSizeChange:{defaultValue:null,description:"",name:"onSizeChange",required:!1,type:{name:"SizeChangeEventHandler"}},visibleRange:{defaultValue:null,description:"",name:"visibleRange",required:!1,type:{name:"Range<Time>"}},visibleLogicalRange:{defaultValue:null,description:"",name:"visibleLogicalRange",required:!1,type:{name:"Range<number>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DeepPartial<TimeScaleOptions>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/scales/TimeScale.tsx#TimeScale"]={docgenInfo:TimeScale.__docgenInfo,name:"TimeScale",path:"src/components/chart/scales/TimeScale.tsx#TimeScale"})}catch(__react_docgen_typescript_loader_error){}const useInitPriceScale=_ref=>{let{options,id}=_ref;const chart=(0,react.useContext)(ChartContext._);if(!chart)throw new Error("Chart context not found");const priceScaleApiRef=(0,react.useRef)({_priceScale:null,api(){if(!this._priceScale){const chartApi=chart.api();if(!chartApi)return null;this._priceScale=chartApi.priceScale(id),this._priceScale.applyOptions({...scalesDefaultOptions.b,...options})}return this._priceScale},setId(id){null!==this._priceScale&&(this._priceScale=chart.api().priceScale(id))},clear(){null!==this._priceScale&&(this._priceScale=null)}});return(0,react.useLayoutEffect)((()=>(priceScaleApiRef.current.api(),()=>{priceScaleApiRef.current.clear()})),[]),(0,react.useLayoutEffect)((()=>{chart&&priceScaleApiRef.current?.setId(id)}),[id]),(0,react.useLayoutEffect)((()=>{chart&&options&&priceScaleApiRef.current?.api()?.applyOptions(options)}),[options]),priceScaleApiRef},PriceScaleRenderFunction=(props,ref)=>{const priceScaleApiRef=useInitPriceScale(props);return(0,react.useImperativeHandle)(ref,(()=>priceScaleApiRef.current),[priceScaleApiRef]),null},PriceScale=(0,react.forwardRef)(PriceScaleRenderFunction);PriceScale.displayName="PriceScale";try{PriceScale.displayName="PriceScale",PriceScale.__docgenInfo={description:"",displayName:"PriceScale",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DeepPartial<PriceScaleOptions>"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/scales/PriceScale.tsx#PriceScale"]={docgenInfo:PriceScale.__docgenInfo,name:"PriceScale",path:"src/components/chart/scales/PriceScale.tsx#PriceScale"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/chart/scales/scalesDefaultOptions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>priceScaleDefaultOptions,t:()=>timeScaleDefaultOptions});const priceScaleDefaultOptions={borderVisible:!1,scaleMargins:{top:.1,bottom:.1},minimumWidth:48},timeScaleDefaultOptions={borderVisible:!1,tickMarkMaxCharacterLength:15}},"./src/components/chart/series/SeriesContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>SeriesContext});const SeriesContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({});SeriesContext.displayName="SeriesContext"},"./src/components/chart/series/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$Y:()=>series_CandlestickSeries,Jv:()=>series_HistogramSeries,eh:()=>series_LineSeries});var react=__webpack_require__("./node_modules/react/index.js"),ChartContext=__webpack_require__("./src/components/chart/ChartContext.ts"),shared=__webpack_require__("./src/shared/index.ts");const seriesBaseDefaultOptions={priceLineColor:shared.Bi.blue300},seriesCandlestickDefaultOptions={...seriesBaseDefaultOptions,upColor:shared.Bi.green300,downColor:shared.Bi.red300,borderVisible:!1,wickVisible:!0,borderColor:shared.Bi.green300,wickColor:shared.Bi.green300,borderUpColor:shared.Bi.green300,borderDownColor:shared.Bi.red300,wickUpColor:shared.Bi.green300,wickDownColor:shared.Bi.red300},seriesLineDefaultOptions={...seriesBaseDefaultOptions,color:shared.Bi.blue300,lineWidth:2,crosshairMarkerVisible:!1,crosshairMarkerRadius:0,crosshairMarkerBorderColor:shared.Bi.blue300,crosshairMarkerBackgroundColor:shared.Bi.blue300},seriesHistogramDefaultOptions={...seriesBaseDefaultOptions,color:shared.Bi.blue300,base:0},getSeriesDefaultOptions=type=>{switch(type){case"Candlestick":return seriesCandlestickDefaultOptions;case"Line":return seriesLineDefaultOptions;case"Histogram":return seriesHistogramDefaultOptions;default:return{}}},useInitSeries=_ref=>{let{type,data,options,reactive,markers}=_ref;const chart=(0,react.useContext)(ChartContext._);if(!chart)throw new Error("Chart context not found");const seriesApiRef=(0,react.useRef)({_series:null,api(){if(!this._series&&!this.destroyed){const chartApi=chart.api();if(!chartApi)return null;this._series=addSeries(chartApi,type),this._series.applyOptions({...getSeriesDefaultOptions(type),...options}),this._series.setData(data),markers&&this._series.setMarkers(markers)}return this._series},clear(){null!==this._series&&(chart.api()?.removeSeries(this._series),this._series=null,this.destroyed=!0)},destroyed:!1});return(0,react.useLayoutEffect)((()=>(seriesApiRef.current.api(),()=>{seriesApiRef.current.clear()})),[]),(0,react.useLayoutEffect)((()=>{chart&&markers&&reactive&&seriesApiRef.current.api()?.setMarkers(markers)}),[markers,reactive]),(0,react.useLayoutEffect)((()=>{chart&&data&&reactive&&seriesApiRef.current.api()?.setData(data)}),[data,reactive]),(0,react.useLayoutEffect)((()=>{chart&&options&&seriesApiRef.current.api()?.applyOptions(options)}),[options]),seriesApiRef},addSeries=(chart,type)=>{let series=null;switch(type){case"Line":series=chart.addLineSeries();break;case"Candlestick":series=chart.addCandlestickSeries();break;case"Histogram":series=chart.addHistogramSeries();break;default:throw new Error(`Unknown series type: ${type}`)}return series};var SeriesContext=__webpack_require__("./src/components/chart/series/SeriesContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SeriesTemplateRenderFunction=(_ref,ref)=>{let{children,...rest}=_ref;const seriesApi=useInitSeries(rest);return(0,react.useImperativeHandle)(ref,(()=>seriesApi.current),[seriesApi]),(0,jsx_runtime.jsx)(SeriesContext.a.Provider,{value:seriesApi.current,children})};SeriesTemplateRenderFunction.displayName="SeriesTemplateRenderFunction";const SeriesTemplate=(0,react.forwardRef)(SeriesTemplateRenderFunction);SeriesTemplate.displayName="SeriesTemplate";const series_SeriesTemplate=SeriesTemplate;try{SeriesTemplate.displayName="SeriesTemplate",SeriesTemplate.__docgenInfo={description:"",displayName:"SeriesTemplate",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"Line"'},{value:'"Histogram"'},{value:'"Candlestick"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(LineData<Time> | WhitespaceData<Time> | HistogramData<Time> | CandlestickData<Time>)[]"}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"SeriesMarker<Time>[]"}},reactive:{defaultValue:null,description:"",name:"reactive",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"SeriesOptions<SeriesType>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/series/SeriesTemplate.tsx#SeriesTemplate"]={docgenInfo:SeriesTemplate.__docgenInfo,name:"SeriesTemplate",path:"src/components/chart/series/SeriesTemplate.tsx#SeriesTemplate"})}catch(__react_docgen_typescript_loader_error){}const LineSeries=_ref=>{let{children,...rest}=_ref;return(0,jsx_runtime.jsx)(series_SeriesTemplate,{type:"Line",...rest,children})};LineSeries.displayName="LineSeries";const series_LineSeries=LineSeries;try{LineSeries.displayName="LineSeries",LineSeries.__docgenInfo={description:"",displayName:"LineSeries",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DeepPartial<LineStyleOptions & SeriesOptionsCommon>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(LineData<Time> | WhitespaceData<Time>)[]"}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"SeriesMarker<Time>[]"}},reactive:{defaultValue:null,description:"",name:"reactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/series/LineSeries.tsx#LineSeries"]={docgenInfo:LineSeries.__docgenInfo,name:"LineSeries",path:"src/components/chart/series/LineSeries.tsx#LineSeries"})}catch(__react_docgen_typescript_loader_error){}const HistogramSeries=_ref=>{let{children,...rest}=_ref;return(0,jsx_runtime.jsx)(series_SeriesTemplate,{type:"Histogram",...rest,children})};HistogramSeries.displayName="HistogramSeries";const series_HistogramSeries=HistogramSeries;try{HistogramSeries.displayName="HistogramSeries",HistogramSeries.__docgenInfo={description:"",displayName:"HistogramSeries",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DeepPartial<HistogramStyleOptions & SeriesOptionsCommon>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(WhitespaceData<Time> | HistogramData<Time>)[]"}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"SeriesMarker<Time>[]"}},reactive:{defaultValue:null,description:"",name:"reactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/series/HistogramSeries.tsx#HistogramSeries"]={docgenInfo:HistogramSeries.__docgenInfo,name:"HistogramSeries",path:"src/components/chart/series/HistogramSeries.tsx#HistogramSeries"})}catch(__react_docgen_typescript_loader_error){}const CandlestickSeries=_ref=>{let{children,...rest}=_ref;return(0,jsx_runtime.jsx)(series_SeriesTemplate,{type:"Candlestick",...rest,children})};CandlestickSeries.displayName="CandlestickSeries";const series_CandlestickSeries=CandlestickSeries;try{CandlestickSeries.displayName="CandlestickSeries",CandlestickSeries.__docgenInfo={description:"",displayName:"CandlestickSeries",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"DeepPartial<CandlestickStyleOptions & SeriesOptionsCommon>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(WhitespaceData<Time> | CandlestickData<Time>)[]"}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"SeriesMarker<Time>[]"}},reactive:{defaultValue:null,description:"",name:"reactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chart/series/CandlestickSeries.tsx#CandlestickSeries"]={docgenInfo:CandlestickSeries.__docgenInfo,name:"CandlestickSeries",path:"src/components/chart/series/CandlestickSeries.tsx#CandlestickSeries"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/chart/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>styles});const styles={containerStyles:{width:"100%",height:"100%",display:"flex",flexDirection:"column",flexGrow:1},chartWidgetContianerStyles:{position:"relative"},widgetShadowStyles:{position:"absolute",top:0,left:0,width:"24px",height:"100%",background:`linear-gradient(90deg, ${__webpack_require__("./src/shared/index.ts").Bi.gray900} 0%, rgba(33, 33, 33, 0) 100%)`,zIndex:2}}},"./src/shared/hooks/useOnWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>useOnWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/utils/isBrowser.ts");function useOnWindowResize(callback){const currentCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback).current;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(currentCallback(),(0,_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__.j)())return window.addEventListener("resize",currentCallback),function(){window.removeEventListener("resize",currentCallback)}}),[])}},"./src/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bi:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.Bi,L_:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.L_,oA:()=>_theme__WEBPACK_IMPORTED_MODULE_0__.oA});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/theme/index.ts")},"./src/shared/ui/getFigmaParameters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>getFigmaParameters});const getFigmaParameters=figmaUrl=>({design:{type:"figma",url:figmaUrl}})},"./src/shared/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>debounce});const debounce=(func,timeout)=>{let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{func(...args)}),timeout)}}},"./src/shared/utils/isBrowser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isBrowser(){return"undefined"!=typeof window}__webpack_require__.d(__webpack_exports__,{j:()=>isBrowser})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);