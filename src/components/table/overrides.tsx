import { TableOverrides } from "baseui/table-semantic";
import { PRIMITIVE_COLORS } from "../../shared";
import { TABLE_DIVIDER } from "./types";
import { ChevronDownIcon, ChevronUpIcon } from "../icons";

const getBorderProperties = (color: string) => {
  return {
    borderBottomColor: `${color}`,
    borderRightColor: `${color}`,
    borderLeftColor: `${color}`,
    borderTopColor: `${color}`,
  };
};

export const getTableOverrides = (): TableOverrides => {
  return {
    TableHeadRow: {
      style: () => ({
        backgroundColor: PRIMITIVE_COLORS.primary900,

        ":hover": {
          backgroundColor: PRIMITIVE_COLORS.primary800,
        },

        ":hover > th": {
          color: PRIMITIVE_COLORS.white,
        },
      }),
    },
    // @ts-ignore
    TableHeadCellSortable: {
      style: ({ $divider }: any) => {
        return {
          backgroundColor: "transparent",
          color: PRIMITIVE_COLORS.primary300,
          borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.white}` : "none",
          fontSize: "14px",
          lineHeight: "16px",
        };
      },
    },
    TableHeadCell: {
      style: ({ $divider }) => {
        return {
          backgroundColor: "transparent",
          color: PRIMITIVE_COLORS.primary300,
          borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.white}` : "none",
          fontSize: "14px",
          lineHeight: "16px",
        };
      },
    },
    TableBody: {
      style: () => ({
        verticalAlign: "top",
      }),
    },
    TableBodyCell: {
      style: () => ({
        fontSize: "14px",
        lineHeight: "16px",
        color: PRIMITIVE_COLORS.white,
        ...getBorderProperties(PRIMITIVE_COLORS.primary700),
      }),
    },
    TableEmptyMessage: {
      style: () => ({
        lineHeight: "16px",
        padding: "24px",
      }),
    },
    SortAscIcon: {
      component: ChevronDownIcon,
      props: {
        size: "12px",
      },
    },
    SortDescIcon: {
      component: ChevronUpIcon,
      props: {
        size: "12px",
      },
    },
  };
};
