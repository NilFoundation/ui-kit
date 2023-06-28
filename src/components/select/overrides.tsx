import { SelectOverrides, Value } from "baseui/select";
import SelectArrow from "./ui/SelectArrow";
import MenuItem from "../menu/ui/MenuItem";
import { SELECT_SIZE } from "./types";
import SelectSpinner from "./ui/SelectSpinner";
import { PRIMITIVE_COLORS } from "../../shared";
import { controlContainerDisabledStyles, controlContainerModifiedStyles, typographyModifiedStyles } from "./styles";
import { BorderRadiusStyles } from "../../shared/styles/border";
import { expandProperty } from "inline-style-expand-shorthand";
import { Tag, TAG_KIND } from "../tag";
import { Item } from "baseui/menu";

const getColor = (isError: boolean, isPositive: boolean, isFocused: boolean, isDisabled: boolean): string => {
  if (isDisabled) {
    return PRIMITIVE_COLORS.primary600;
  }
  if (isPositive || isFocused) {
    return PRIMITIVE_COLORS.white;
  }
  if (isError) {
    return PRIMITIVE_COLORS.error400;
  }
  return PRIMITIVE_COLORS.primary500;
};

const getTagKind = (isPositive: boolean, isError: boolean, isFocused: boolean): TAG_KIND => {
  if (isFocused) {
    return TAG_KIND.primary;
  }
  if (isError) {
    return TAG_KIND.negative;
  }
  if (isPositive) {
    return TAG_KIND.positive;
  }
  return TAG_KIND.primary;
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
  value?: Value,
  valueKey?: string
): SelectOverrides => {
  return {
    ControlContainer: {
      style: ({ $isLoading }) => {
        return {
          ...BorderRadiusStyles,
          ...(isDisabled || $isLoading ? controlContainerDisabledStyles : {}),
          ...controlContainerModifiedStyles[size],
        };
      },
    },
    DropdownListItem: {
      component: MenuItem,
      props: ({ item, ...props }) => {
        const isActive = value ? isSingleItemActive(value, item, valueKey) : false;
        return {
          ...props,
          item: { ...item, isActive },
          size,
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
        color: (isDisabled || $isLoading) && !$isFocused ? PRIMITIVE_COLORS.primary600 : undefined,
      }),
    },
    LoadingIndicator: {
      component: SelectSpinner,
      props: {
        size,
      },
    },
    Placeholder: {
      style: ({ $error, $positive, $isFocused, $disabled }) => ({
        color: getColor($error, $positive, $isFocused, $disabled),
        ...typographyModifiedStyles[size],
      }),
    },
    ValueContainer: {
      style: ({ $error, $positive, $isFocused, $disabled }) => {
        return {
          ...expandProperty("padding", "0"),
          color: getColor($error, $positive, $isFocused, $disabled),
          ...typographyModifiedStyles[size],
        };
      },
    },
    ClearIcon: {
      props: {
        size: "22px",
      },
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
