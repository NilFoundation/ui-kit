import { SelectOverrides, Value } from "baseui/select";
import SelectArrow from "./ui/SelectArrow";
import MenuItem from "../menu/ui/MenuItem";
import { SELECT_KIND, SELECT_SIZE } from "./types";
import SelectSpinner from "./ui/SelectSpinner";
import { PRIMITIVE_COLORS } from "../../shared";
import { controlContainerModifiedStyles, selectTypographyStyles, valueContainerModifiedStyles } from "./styles";
import { expandProperty } from "inline-style-expand-shorthand";
import { Tag, TAG_SIZE } from "../tag";
import { Item } from "baseui/menu";
import { getColor, getBackgroundColor, getHoverStyles } from "../../shared/theme/textFieldCommonOverrides";
import { boxShadowFocusStyles, boxShadowErrorStyles } from "../../shared/styles/boxShadowSharedStyles";
import ValueContainer from "./ui/ValueContainer/ValueContainer";
import { getTagKind, tagOverrides } from "./sharedUtils";

const isSingleItemActive = (value: Value, item: Item, valueKey?: string): boolean => {
  if (value?.length !== 1) {
    return false;
  }
  const key = valueKey || "id";
  const singleItem = value[0];
  return singleItem?.[key] === item?.[key];
};

export const getSelectOverrides = (
  size: SELECT_SIZE,
  kind: SELECT_KIND,
  value?: Value,
  valueKey?: string
): SelectOverrides => {
  return {
    ControlContainer: {
      style: ({ $isFocused, $error, $disabled }) => {
        return {
          ...getBackgroundColor(kind),
          ...getHoverStyles(kind, $disabled, $isFocused, $error),
          color: getColor($isFocused, $error, $disabled),
          ...controlContainerModifiedStyles[size],
          ":has(input:focus-within)": {
            ...boxShadowFocusStyles,
          },
          ...($isFocused ? boxShadowFocusStyles : {}),
          ...($error ? boxShadowErrorStyles : {}),
        };
      },
    },
    DropdownListItem: {
      component: MenuItem,
      props: ({ item, ...props }) => {
        const isHighlighted = props?.$isHighlighted;
        const isActive = value ? isSingleItemActive(value, item, valueKey) : false;
        return {
          ...props,
          item: { ...item, isActive },
          size,
          isHighlighted,
        };
      },
    },
    Dropdown: {
      style: () => ({
        ...expandProperty("borderRadius", "8px"),
        backgroundColor: PRIMITIVE_COLORS.gray800,
      }),
    },
    Popover: {
      props: {
        overrides: {
          Body: {
            style: () => ({
              marginTop: "4px",
            }),
          },
        },
      },
    },
    SelectArrow: {
      component: SelectArrow,
      props: ({ $isOpen, $isFocused, $searchable, $error, $disabled, ...props }) => ({
        ...props,
        isRotated: $isOpen,
        color: getColor($isFocused, $error, $disabled),
        searchable: $searchable,
      }),
    },
    IconsContainer: {
      style: {
        ...expandProperty("padding", "0"),
      },
    },
    LoadingIndicator: {
      component: SelectSpinner,
      props: {
        size,
      },
    },
    Placeholder: {
      style: ({ $error, $disabled, $isFocused }) => ({
        color: getColor($isFocused, $error, $disabled),
        ...selectTypographyStyles[size],
      }),
    },
    ValueContainer: {
      component: ValueContainer,
      style: ({ $error, $isFocused, $disabled }) => {
        return {
          ...expandProperty("padding", "0"),
          color: getColor($isFocused, $error, $disabled),
          ...selectTypographyStyles[size],
          ...valueContainerModifiedStyles[size],
        };
      },
    },
    SingleValue: {
      style: {
        ...selectTypographyStyles[size],
        height: "auto",
      },
    },
    MultiValue: {
      style: selectTypographyStyles[size],
    },
    Input: {
      style: {
        color: PRIMITIVE_COLORS.gray200,
        ...selectTypographyStyles[size],
        ":focus-within": {
          color: PRIMITIVE_COLORS.gray50,
        },
      },
    },
    ClearIcon: {
      props: ({ $error, $isFocused, $disabled, ...rest }) => ({
        size: "22px",
        color: getColor($isFocused, $error, $disabled),
        cursor: "pointer",
        ...rest,
      }),
    },
    Tag: {
      component: Tag,
      props: ({ $error, $isFocused, ...props }) => ({
        ...props,
        overrides: tagOverrides,
        kind: getTagKind($error, $isFocused),
        size: TAG_SIZE.m,
      }),
    },
  };
};
