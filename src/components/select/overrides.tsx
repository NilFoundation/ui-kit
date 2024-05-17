import { SelectOverrides, Value } from "baseui/select";
import SelectArrow from "./ui/SelectArrow";
import MenuItem from "../menu/ui/MenuItem";
import { SELECT_KIND, SELECT_SIZE } from "./types";
import SelectSpinner from "./ui/SelectSpinner";
import { COLORS } from "../../shared";
import { controlContainerModifiedStyles, selectTypographyStyles, valueContainerModifiedStyles } from "./styles";
import { expandProperty } from "inline-style-expand-shorthand";
import { Tag, TAG_SIZE } from "../tag";
import { Item } from "baseui/menu";
import {
  getColor,
  getBackgroundColor,
  getHoverStyles,
  getPlaceholderColor,
} from "../../shared/theme/textFieldCommonOverrides";
import { boxShadowFocusStyles, boxShadowErrorStyles } from "../../shared/styles/boxShadowSharedStyles";
import ValueContainer from "./ui/ValueContainer/ValueContainer";
import { getTagKind, tagOverrides } from "./sharedUtils";
import { MENU_SIZE } from "../menu";

const isSingleItemActive = (item: Item, value?: Value, valueKey?: string): boolean => {
  if (value?.length !== 1) {
    return false;
  }
  const key = valueKey || "id";
  const singleItem = value[0];
  return singleItem?.[key] === item?.[key];
};

const isItemSelected = (item: Item, value?: Value, valueKey?: string): boolean => {
  if (!value?.length) {
    return false;
  }

  const key = valueKey || "id";
  return value.some((v) => v?.[key] === item?.[key]);
};

export const getSelectOverrides = (
  size: SELECT_SIZE,
  kind: SELECT_KIND,
  value?: Value,
  valueKey?: string,
  isMulti?: boolean
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
        const isActive = !isMulti ? isSingleItemActive(item, value, valueKey) : false;
        const selected = isMulti ? isItemSelected(item, value, valueKey) : undefined;

        return {
          ...props,
          item: { ...item, isActive, selected },
          size: MENU_SIZE.small,
          isHighlighted,
          isDropdownItem: true,
        };
      },
    },
    Dropdown: {
      style: {
        ...expandProperty("borderRadius", "8px"),
        ...expandProperty("padding", "8px"),
        backgroundColor: COLORS.gray800,
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      },
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
      props: ({ $isOpen, $searchable, $disabled, ...props }) => ({
        ...props,
        isRotated: $isOpen,
        color: getPlaceholderColor($disabled),
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
      style: ({ $disabled }) => ({
        color: getPlaceholderColor($disabled),
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
      style: ({ $error, $isFocused, $disabled }) => ({
        color: getColor($isFocused, $error, $disabled),
        ...selectTypographyStyles[size],
        ":focus-within": {
          color: COLORS.gray50,
        },
      }),
    },
    ClearIcon: {
      props: ({ $disabled, ...rest }) => ({
        size: "22px",
        color: getPlaceholderColor($disabled),
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
