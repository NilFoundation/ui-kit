"use strict";(self.webpackChunk_nilfoundation_ui_kit=self.webpackChunk_nilfoundation_ui_kit||[]).push([[4253],{"./src/components/tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tag_Tag});var tag=__webpack_require__("./node_modules/baseui/esm/tag/tag.js"),types=__webpack_require__("./src/components/tag/types.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),shared=__webpack_require__("./src/shared/index.ts");const tagRootBaseStyles={...(0,expandProperty.Z)("border","none"),...(0,expandProperty.Z)("padding","2px 8px"),...(0,expandProperty.Z)("margin","2px"),...(0,expandProperty.Z)("borderRadius","2px"),color:shared.Bi.gray50,fontSize:"12px",lineHeight:"16px"},mediumStyles={...(0,expandProperty.Z)("padding","4px 12px"),fontSize:"16px",lineHeight:"22px"},tagRootKindModifiedStyles={[types.k.gray]:{backgroundColor:shared.Bi.gray600},[types.k.blue]:{backgroundColor:shared.Bi.blue600},[types.k.green]:{backgroundColor:shared.Bi.green600},[types.k.yellow]:{backgroundColor:shared.Bi.yellow600},[types.k.purple]:{backgroundColor:shared.Bi.purple600},[types.k.red]:{backgroundColor:shared.Bi.red600},[types.k.white]:{backgroundColor:shared.Bi.gray50,color:shared.Bi.gray900}};var icons=__webpack_require__("./src/components/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Tag=_ref=>{let{kind=types.k.gray,size=types.c.s,overrides:baseOverrides,...props}=_ref;const tagOverrides=((kind,size)=>({Root:{style:()=>({...tagRootBaseStyles,...tagRootKindModifiedStyles[kind],...size===types.c.m?mediumStyles:{}})},Action:{style:{marginLeft:"4px"}},ActionIcon:{component:_ref=>{let{...props}=_ref;return(0,jsx_runtime.jsx)(icons.Tw,{...props,size:16})}}}))(kind,size),overrides=(0,getMergedOverrides.D)(tagOverrides,baseOverrides);return(0,jsx_runtime.jsx)(tag.Z,{...props,overrides,closeable:!1})};Tag.displayName="Tag";const tag_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{children:{defaultValue:null,description:"Component or String value for label of tag. Default is empty string.",name:"children",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"onClick handler for the tag. Passing an onClick handler also makes the tag clickable.",name:"onClick",required:!1,type:{name:"((event: Event) => unknown) | null"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"TagOverrides"}},onKeyDown:{defaultValue:null,description:"onkeydown handler for the tag.",name:"onKeyDown",required:!1,type:{name:"((event: Event) => unknown) | null"}},isFocused:{defaultValue:null,description:"Deprecated. Will be removed in the next major version.",name:"isFocused",required:!1,type:{name:"boolean"}},isHovered:{defaultValue:null,description:"Deprecated. Will be removed in the next major version.",name:"isHovered",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Text to display in native OS tooltip on long hover.",name:"title",required:!1,type:{name:"string"}},onActionClick:{defaultValue:null,description:"onClick handler for the action button element.",name:"onActionClick",required:!1,type:{name:"((e: Event, children?: ReactNode) => unknown)"}},onActionKeyDown:{defaultValue:null,description:"keydown handler for the action button element.",name:"onActionKeyDown",required:!1,type:{name:"((e: Event, children?: ReactNode) => unknown)"}},startEnhancer:{defaultValue:null,description:"",name:"startEnhancer",required:!1,type:{name:"ComponentType<{}>"}},kind:{defaultValue:{value:"TAG_KIND.gray"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"blue"'},{value:'"green"'},{value:'"yellow"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'}]}},size:{defaultValue:{value:"TAG_SIZE.s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tag/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>TAG_SIZE,k:()=>TAG_KIND});let TAG_KIND=function(TAG_KIND){return TAG_KIND.gray="gray",TAG_KIND.blue="blue",TAG_KIND.green="green",TAG_KIND.yellow="yellow",TAG_KIND.purple="purple",TAG_KIND.red="red",TAG_KIND.white="white",TAG_KIND}({}),TAG_SIZE=function(TAG_SIZE){return TAG_SIZE.s="s",TAG_SIZE.m="m",TAG_SIZE}({})},"./src/components/select/Select.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Select_stories,disabled:()=>disabled,error:()=>error,large:()=>large,loading:()=>loading,medium:()=>medium,multiple:()=>multiple,multipleDisabled:()=>multipleDisabled,options:()=>options,positive:()=>positive,small:()=>small,withDefaultValue:()=>withDefaultValue,withoutSearchable:()=>withoutSearchable});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),select_select=__webpack_require__("./node_modules/baseui/esm/select/select.js"),styled=__webpack_require__("./node_modules/baseui/esm/styles/styled.js"),shared=__webpack_require__("./src/shared/index.ts"),icons=__webpack_require__("./src/components/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectArrow=_ref=>{let{color=shared.Bi.white,isRotated}=_ref;const[css]=(0,styled.hQ)();return(0,jsx_runtime.jsx)(icons.v4,{size:16,color,className:css({transform:isRotated?"rotate(180deg)":"unset",marginLeft:"16px"})})};SelectArrow.displayName="SelectArrow";const ui_SelectArrow=(0,react.memo)(SelectArrow);try{SelectArrow.displayName="SelectArrow",SelectArrow.__docgenInfo={description:"",displayName:"SelectArrow",props:{isRotated:{defaultValue:null,description:"",name:"isRotated",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#F2F2F2"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select/ui/SelectArrow.tsx#SelectArrow"]={docgenInfo:SelectArrow.__docgenInfo,name:"SelectArrow",path:"src/components/select/ui/SelectArrow.tsx#SelectArrow"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/components/menu/ui/MenuItem.tsx"),spinner=__webpack_require__("./src/components/spinner/index.ts");let SELECT_SIZE=function(SELECT_SIZE){return SELECT_SIZE.small="small",SELECT_SIZE.medium="medium",SELECT_SIZE.large="large",SELECT_SIZE}({});const spinnerSize={[SELECT_SIZE.small]:spinner.T.small,[SELECT_SIZE.medium]:spinner.T.medium,[SELECT_SIZE.large]:spinner.T.large},SelectSpinner=_ref=>{let{size}=_ref;return(0,jsx_runtime.jsx)(spinner.$,{animation:!0,size:spinnerSize[size]})};SelectSpinner.displayName="SelectSpinner";const ui_SelectSpinner=(0,react.memo)(SelectSpinner);try{SelectSpinner.displayName="SelectSpinner",SelectSpinner.__docgenInfo={description:"",displayName:"SelectSpinner",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select/ui/SelectSpinner.tsx#SelectSpinner"]={docgenInfo:SelectSpinner.__docgenInfo,name:"SelectSpinner",path:"src/components/select/ui/SelectSpinner.tsx#SelectSpinner"})}catch(__react_docgen_typescript_loader_error){}const controlContainerModifiedStyles={[SELECT_SIZE.small]:{paddingTop:"8px",paddingRight:"16px",paddingBottom:"8px",paddingLeft:"16px"},[SELECT_SIZE.medium]:{paddingTop:"12px",paddingRight:"16px",paddingBottom:"12px",paddingLeft:"16px"},[SELECT_SIZE.large]:{paddingTop:"14px",paddingRight:"16px",paddingBottom:"14px",paddingLeft:"16px"}},controlContainerDisabledStyles={backgroundColor:"transparent",border:`2px solid ${shared.Bi.mono600}`},typographyModifiedStyles={[SELECT_SIZE.small]:{fontSize:"14px"},[SELECT_SIZE.medium]:{fontSize:"16px"},[SELECT_SIZE.large]:{fontSize:"18px"}};var border=__webpack_require__("./src/shared/styles/border.ts"),expandProperty=__webpack_require__("./node_modules/inline-style-expand-shorthand/es/expandProperty.js"),Tag=__webpack_require__("./src/components/tag/Tag.tsx"),types=__webpack_require__("./src/components/tag/types.ts");const getColor=(isError,isPositive,isFocused,isDisabled)=>isDisabled?shared.Bi.gray600:isPositive||isFocused?shared.Bi.white:isError?shared.Bi.red400:shared.Bi.gray500;var getMergedOverrides=__webpack_require__("./src/shared/utils/getMergedOverrides.ts");const Select=_ref=>{let{value,disabled,size=SELECT_SIZE.medium,valueKey,overrides:baseOverrides,...props}=_ref;const selectOverrides=((size,isDisabled,value,valueKey)=>({ControlContainer:{style:_ref=>{let{$isLoading}=_ref;return{...border.x,...isDisabled||$isLoading?controlContainerDisabledStyles:{},...controlContainerModifiedStyles[size]}}},DropdownListItem:{component:MenuItem.Z,props:_ref2=>{let{item,...props}=_ref2;const isHighlighted=props?.$isHighlighted,isActive=!!value&&((value,item,valueKey)=>{if(1!==value?.length)return!1;const key=valueKey||"id",singleItem=value[0];return singleItem?.[key]===item?.[key]})(value,item,valueKey);return{...props,item:{...item,isActive},size,isHighlighted}}},Dropdown:{style:()=>({...border.x})},Popover:{props:{overrides:{Body:{style:()=>({marginTop:"6px"})}}}},SelectArrow:{component:ui_SelectArrow,props:_ref3=>{let{$isOpen,$isFocused,$isLoading,...props}=_ref3;return{...props,isRotated:$isOpen,color:!isDisabled&&!$isLoading||$isFocused?void 0:shared.Bi.gray600}}},LoadingIndicator:{component:ui_SelectSpinner,props:{size}},Placeholder:{style:_ref4=>{let{$error,$positive,$isFocused,$disabled}=_ref4;return{color:getColor($error,$positive,$isFocused,$disabled),...typographyModifiedStyles[size]}}},ValueContainer:{style:_ref5=>{let{$error,$positive,$isFocused,$disabled}=_ref5;return{...(0,expandProperty.Z)("padding","0"),color:getColor($error,$positive,$isFocused,$disabled),...typographyModifiedStyles[size]}}},ClearIcon:{props:{size:"22px"}},Tag:{component:Tag.Z,props:_ref6=>{let{$positive,$error,$isFocused,...props}=_ref6;return{...props,kind:(isPositive=$positive,isError=$error,isFocused=$isFocused,isFocused?types.k.gray:isError?types.k.red:isPositive?types.k.green:types.k.gray)};var isPositive,isError,isFocused}}}))(size,!!disabled,value,valueKey),overrides=(0,getMergedOverrides.D)(selectOverrides,baseOverrides);return(0,jsx_runtime.jsx)(select_select.Z,{...props,valueKey,value,disabled,overrides})};Select.displayName="Select";const select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{autoFocus:{defaultValue:null,description:"Defines if select element is focused on the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Sets the id attribute of the internal input element. Allows for usage with labels.",name:"id",required:!1,type:{name:"string"}},mountNode:{defaultValue:null,description:"Where to mount the popover",name:"mountNode",required:!1,type:{name:"HTMLElement"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<Element, Element> | MouseEvent) => unknown)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((e: SyntheticEvent<HTMLElement, Event>) => unknown)"}},overrides:{defaultValue:null,description:"",name:"overrides",required:!1,type:{name:"SelectOverrides"}},onClose:{defaultValue:null,description:"A function that is called when the dropdown closes.",name:"onClose",required:!1,type:{name:"(() => unknown) | null"}},onOpen:{defaultValue:null,description:"A function that is called when the dropdown opens.",name:"onOpen",required:!1,type:{name:"(() => unknown) | null"}},"aria-errormessage":{defaultValue:null,description:"",name:"aria-errormessage",required:!1,type:{name:"string | null"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string | null"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string | null"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string | null"}},disabled:{defaultValue:null,description:"Defines if the control is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Defines if the control is in error state.",name:"error",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"Defines if the control is in positive state.",name:"positive",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},onChange:{defaultValue:null,description:"change handler of the select to be called when a value is changed.",name:"onChange",required:!1,type:{name:"((params: OnChangeParams) => unknown)"}},clearable:{defaultValue:null,description:"Defines if the select value can be cleared. If true a clear icon is rendered when a value is set.",name:"clearable",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the placeholder.",name:"placeholder",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Defines if the select field is required to have a selection.",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Defines type of the component to be in select or search mode.\nWhen set to TYPE.search the search icon is rendered on the\nleft and the select arrow icon is not rendered.",name:"type",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"search"'}]}},value:{defaultValue:null,description:"A current selected value(s). If a selected value has a clearableValue\nprop set to true it will be rendered as a disabled selected option that can't be cleared.",name:"value",required:!1,type:{name:"Value"}},isLoading:{defaultValue:null,description:"Defines if the select is in a loading (async) state.",name:"isLoading",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Options to be displayed in the dropdown. If an option has a\ndisabled prop value set to true it will be rendered as a disabled option in the dropdown.",name:"options",required:!1,type:{name:"Options"}},backspaceRemoves:{defaultValue:null,description:"Defines if options can be removed by pressing backspace. If you have customized labels, it will remove the option entirely, otherwise, it starts removing characters from the end of the string.",name:"backspaceRemoves",required:!1,type:{name:"boolean"}},backspaceClearsInputValue:{defaultValue:null,description:"By default, backspace will only remove the last character of the input value. If true, the input value will be cleared.",name:"backspaceClearsInputValue",required:!1,type:{name:"boolean"}},closeOnSelect:{defaultValue:null,description:"Defines if the menu closes after a selection if made.",name:"closeOnSelect",required:!1,type:{name:"boolean"}},creatable:{defaultValue:null,description:"Defines if new options can be created along with choosing existing options.",name:"creatable",required:!1,type:{name:"boolean"}},deleteRemoves:{defaultValue:null,description:"Defines if options can be removed by pressing backspace.",name:"deleteRemoves",required:!1,type:{name:"boolean"}},escapeClearsValue:{defaultValue:null,description:"Defines if the value is cleared when escape is pressed and the dropdown is closed.",name:"escapeClearsValue",required:!1,type:{name:"boolean"}},filterOptions:{defaultValue:null,description:"Defaults to filterOptions that excludes selected options for\nmulti select. A custom method to filter options to be displayed in the dropdown.",name:"filterOptions",required:!1,type:{name:"((options: Value, filterValue: string, excludeOptions: Value | null, a: { valueKey: string; labelKey: string; }) => Value) | null"}},filterOutSelected:{defaultValue:null,description:"Defines if currently selected options are filtered out in the dropdown options.",name:"filterOutSelected",required:!1,type:{name:"boolean"}},getOptionLabel:{defaultValue:null,description:"A custom method to get a display value for a dropdown option.",name:"getOptionLabel",required:!1,type:{name:"((a: { option: Readonly<{ [x: string]: any; id?: string | number; label?: ReactNode; disabled?: boolean; clearableValue?: boolean | undefined; isCreatable?: boolean | undefined; __optgroup?: string | undefined; }>; optionState: { ...; }; }) => ReactNode) | null | undefined"}},getValueLabel:{defaultValue:null,description:"A custom method to get a display value for a selected option.",name:"getValueLabel",required:!1,type:{name:"((a: { option: Readonly<{ [x: string]: any; id?: string | number; label?: ReactNode; disabled?: boolean; clearableValue?: boolean | undefined; isCreatable?: boolean | undefined; __optgroup?: string | undefined; }>; index?: number | undefined; }) => ReactNode) | null | undefined"}},ignoreCase:{defaultValue:null,description:"Defines if the comparison for a new creatable value should be case-insensitive.",name:"ignoreCase",required:!1,type:{name:"boolean"}},controlRef:{defaultValue:null,description:"An imperative handle exposing internal methods.",name:"controlRef",required:!1,type:{name:"ControlRef"}},labelKey:{defaultValue:null,description:"Defines an option key for a default label value.",name:"labelKey",required:!1,type:{name:"string"}},maxDropdownHeight:{defaultValue:null,description:"Sets max height of the dropdown list.",name:"maxDropdownHeight",required:!1,type:{name:"string"}},multi:{defaultValue:null,description:"Defines if multiple options can be selected.",name:"multi",required:!1,type:{name:"boolean"}},noResultsMsg:{defaultValue:null,description:"Message to be displayed if no options is found for a search query.",name:"noResultsMsg",required:!1,type:{name:"ReactNode"}},onBlurResetsInput:{defaultValue:null,description:"Defines if the input value is reset to an empty string when a blur event happens on the select.",name:"onBlurResetsInput",required:!1,type:{name:"boolean"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => unknown)"}},onCloseResetsInput:{defaultValue:null,description:"Defines if the input value is reset to an empty string when dropdown is closed.",name:"onCloseResetsInput",required:!1,type:{name:"boolean"}},onSelectResetsInput:{defaultValue:null,description:"Defines if the input value is reset to an empty string when a selection is made.",name:"onSelectResetsInput",required:!1,type:{name:"boolean"}},openOnClick:{defaultValue:null,description:"Defines if the dropdown opens on a click event on the select.",name:"openOnClick",required:!1,type:{name:"boolean"}},startOpen:{defaultValue:null,description:"If true, opens the dropdown when the select mounts.",name:"startOpen",required:!1,type:{name:"boolean"}},searchable:{defaultValue:null,description:"Defines if the search functionality is enabled.",name:"searchable",required:!1,type:{name:"boolean"}},valueComponent:{defaultValue:null,description:"",name:"valueComponent",required:!1,type:{name:"ComponentType<any>"}},valueKey:{defaultValue:null,description:"Defines a key name for an option's unique identifier value.\nThe value of the `valueKey` prop is used to identify what options are selected\nor removed from the selection, it also used for default filtering out the\nselected options from the dropdown list.",name:"valueKey",required:!1,type:{name:"string"}},size:{defaultValue:{value:"SELECT_SIZE.medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}const Template=({value:baseValue,onChange,...args})=>{const _components=Object.assign({div:"div"},(0,lib.ah)()),[css]=(0,styled.hQ)(),[value,setValue]=(0,react.useState)(baseValue);return(0,jsx_runtime.jsx)(_components.div,{className:css({width:"400px"}),children:(0,jsx_runtime.jsx)(select_Select,{...args,value,onChange:params=>{setValue(params.value),onChange?.(params.value)}})})},options=[{label:"AliceBlue",id:"#F0F8FF"},{label:"AntiqueWhite",id:"#FAEBD7"},{label:"Aqua",id:"#00FFFF"},{label:"Aquamarine",id:"#7FFFD4"},{label:"Azure",id:"#F0FFFF"},{label:"Beige",id:"#F5F5DC"}];function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Form/Select",component:select_Select}),"\n","\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{isColumn:!0,children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Small",args:{options,placeholder:"Small Select",size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Medium",args:{options,placeholder:"Medium Select",size:SELECT_SIZE.medium},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Large",args:{options,placeholder:"Large Select",size:SELECT_SIZE.large},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Multiple",args:{options,placeholder:"Multiple Select",multi:!0,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Multiple Disabled",args:{options,placeholder:"Multiple Select",multi:!0,size:SELECT_SIZE.small,value:[options[0],options[1]],disabled:!0},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled",args:{options,placeholder:"Disabled Select",disabled:!0,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Error",args:{options,placeholder:"Error Select",error:!0,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Positive",args:{options,placeholder:"Positive Select",positive:!0,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Loading",args:{options,placeholder:"Loading Select",isLoading:!0,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Without Searchable",args:{options,placeholder:"Select",searchable:!1,size:SELECT_SIZE.small},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"With Default Value",args:{options,placeholder:"With Default Value",value:[options[0]],size:SELECT_SIZE.small},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:select_Select}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage:"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use, import the component ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"@nilfoundation/ui-kit"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"tsx",dark:!0,format:!0,code:'\n        import {Select, SELECT_SIZE} from "@nilfoundation/ui-kit";\n        const OPTIONS = [\n          { label: "AliceBlue", id: "#F0F8FF" },\n          { label: "AntiqueWhite", id: "#FAEBD7" },\n          { label: "Aqua", id: "#00FFFF" },\n          { label: "Aquamarine", id: "#7FFFD4" },\n          { label: "Azure", id: "#F0FFFF" },\n          { label: "Beige", id: "#F5F5DC" }\n        ];\n        ...\n        <Select options={OPTIONS} placeholder="Select" size={SELECT_SIZE.small} />\n        // Disabled\n        <Select options={OPTIONS} placeholder="Select" disabled />\n        // Loading\n        <Select options={OPTIONS} placeholder="Select" isLoading />\n        // Searchable\n        <Select options={OPTIONS} placeholder="Select" searchable />\n        // Multiple\n        <Select options={OPTIONS} placeholder="Select" multi />\n  '})]})}const small=Template.bind({});small.storyName="Small",small.args={options,placeholder:"Small Select",size:SELECT_SIZE.small},small.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const medium=Template.bind({});medium.storyName="Medium",medium.args={options,placeholder:"Medium Select",size:SELECT_SIZE.medium},medium.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const large=Template.bind({});large.storyName="Large",large.args={options,placeholder:"Large Select",size:SELECT_SIZE.large},large.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const multiple=Template.bind({});multiple.storyName="Multiple",multiple.args={options,placeholder:"Multiple Select",multi:!0,size:SELECT_SIZE.small},multiple.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const multipleDisabled=Template.bind({});multipleDisabled.storyName="Multiple Disabled",multipleDisabled.args={options,placeholder:"Multiple Select",multi:!0,size:SELECT_SIZE.small,value:[options[0],options[1]],disabled:!0},multipleDisabled.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={options,placeholder:"Disabled Select",disabled:!0,size:SELECT_SIZE.small},disabled.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={options,placeholder:"Error Select",error:!0,size:SELECT_SIZE.small},error.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const positive=Template.bind({});positive.storyName="Positive",positive.args={options,placeholder:"Positive Select",positive:!0,size:SELECT_SIZE.small},positive.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const loading=Template.bind({});loading.storyName="Loading",loading.args={options,placeholder:"Loading Select",isLoading:!0,size:SELECT_SIZE.small},loading.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const withoutSearchable=Template.bind({});withoutSearchable.storyName="Without Searchable",withoutSearchable.args={options,placeholder:"Select",searchable:!1,size:SELECT_SIZE.small},withoutSearchable.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const withDefaultValue=Template.bind({});withDefaultValue.storyName="With Default Value",withDefaultValue.args={options,placeholder:"With Default Value",value:[options[0]],size:SELECT_SIZE.small},withDefaultValue.parameters={storySource:{source:'({\n  value: baseValue,\n  onChange,\n  ...args\n}) => {\n  const [css] = useStyletron();\n  const [value, setValue] = useState(baseValue);\n  const onChangeHandler = params => {\n    setValue(params.value);\n    onChange(params.value);\n  };\n  const containerStyles = {\n    width: "400px"\n  };\n  return <div className={css(containerStyles)}>\n      <Select {...args} value={value} onChange={onChangeHandler} />\n    </div>;\n}'}};const componentMeta={title:"Form/Select",component:select_Select,tags:["stories-mdx"],includeStories:["small","medium","large","multiple","multipleDisabled","disabled","error","positive","loading","withoutSearchable","withDefaultValue"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Select_stories=componentMeta}}]);