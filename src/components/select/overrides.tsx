import { SelectOverrides } from "baseui/select";
import SelectArrow from "./ui/SelectArrow";
import MenuItem from "../menu/ui/MenuItem";
import { SELECT_SIZE } from "./types";
import SelectSpinner from "./ui/SelectSpinner";
import { PRIMITIVE_COLORS } from "../../shared";
import { controlContainerDisabledStyles, controlContainerModifiedStyles, typographyModifiedStyles } from "./styles";

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

export const getSelectOverrides = (size: SELECT_SIZE, isDisabled: boolean): SelectOverrides => {
  return {
    ControlContainer: {
      style: ({ $isLoading }) => {
        return {
          borderBottomLeftRadius: "2px",
          borderBottomRightRadius: "2px",
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
          ...(isDisabled || $isLoading ? controlContainerDisabledStyles : {}),
          ...controlContainerModifiedStyles[size],
        };
      },
    },
    DropdownListItem: {
      component: MenuItem,
      props: ({ children, ...props }) => {
        return {
          ...props,
          item: { label: children },
          size,
        };
      },
    },
    Dropdown: {
      style: () => ({
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
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
          padding: "0",
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
  };
};
