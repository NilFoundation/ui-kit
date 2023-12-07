import { SelectOverrides, Value } from "baseui/select";
import SelectArrow from "./ui/SelectArrow";
import MenuItem from "../menu/ui/MenuItem";
import { SELECT_KIND, SELECT_SIZE } from "./types";
import SelectSpinner from "./ui/SelectSpinner";
import { PRIMITIVE_COLORS } from "../../shared";
import { controlContainerModifiedStyles, typographyModifiedStyles } from "./styles";
import { BorderRadiusStyles } from "../../shared/styles/border";
import { expandProperty } from "inline-style-expand-shorthand";
import { Tag, TAG_KIND } from "../tag";
import { Item } from "baseui/menu";
import {
  getColor,
  getBackgroundColor,
  getBorderStyles,
  getHoverStyles,
} from "../../shared/theme/textFieldCommonOverrides";

const getTagKind = (isPositive: boolean, isError: boolean, isFocused: boolean): TAG_KIND => {
  if (isFocused) {
    return TAG_KIND.gray;
  }
  if (isError) {
    return TAG_KIND.red;
  }
  if (isPositive) {
    return TAG_KIND.green;
  }
  return TAG_KIND.gray;
};

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
  isDisabled: boolean,
  kind: SELECT_KIND,
  value?: Value,
  valueKey?: string
): SelectOverrides => {
  return {
    ControlContainer: {
      style: ({ $isFocused, $error, $disabled }) => {
        return {
          ...getBackgroundColor(kind),
          ...getBorderStyles($isFocused, kind, $error),
          ...getHoverStyles(kind, $disabled, $isFocused),
          color: getColor($isFocused, $error, $disabled),
          ...controlContainerModifiedStyles[size],
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
        ...BorderRadiusStyles,
      }),
    },
    Popover: {
      props: {
        overrides: {
          Body: {
            style: () => ({
              marginTop: "6px",
            }),
          },
        },
      },
    },
    SelectArrow: {
      component: SelectArrow,
      props: ({ $isOpen, $isFocused, $isLoading, ...props }) => ({
        ...props,
        isRotated: $isOpen,
        color: (isDisabled || $isLoading) && !$isFocused ? PRIMITIVE_COLORS.gray600 : undefined,
      }),
    },
    LoadingIndicator: {
      component: SelectSpinner,
      props: {
        size,
      },
    },
    Placeholder: {
      style: ({ $error }) => ({
        color: $error ? PRIMITIVE_COLORS.red500 : PRIMITIVE_COLORS.gray200,
        ...typographyModifiedStyles[size],
      }),
    },
    ValueContainer: {
      style: ({ $error, $isFocused, $disabled }) => {
        return {
          ...expandProperty("padding", "0"),
          color: getColor($isFocused, $error, $disabled),
          ...typographyModifiedStyles[size],
        };
      },
    },
    Input: {
      style: {
        color: PRIMITIVE_COLORS.gray200,
        ":focus-within": {
          color: PRIMITIVE_COLORS.gray50,
        },
      },
    },
    ClearIcon: {
      props: ({ $error, $isFocused, $disabled }) => ({
        size: "22px",
        color: getColor($isFocused, $error, $disabled),
      }),
    },
    Tag: {
      component: Tag,
      props: ({ $positive, $error, $isFocused, ...props }) => ({
        ...props,
        kind: getTagKind($positive, $error, $isFocused),
      }),
    },
  };
};
