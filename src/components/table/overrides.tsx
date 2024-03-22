import { TableOverrides } from "baseui/table-semantic";
import { PRIMITIVE_COLORS } from "../../shared";
import { TABLE_DIVIDER } from "./types";
import { ChevronDownIcon, ChevronUpIcon } from "../icons";

export const getTableSemanticOverrides = (): TableOverrides => {
  return {
    Root: {
      style: () => ({
        backgroundColor: "transparent",
        border: "none",
      }),
    },
    TableHead: {
      style: () => ({
        borderBottom: `1px solid ${PRIMITIVE_COLORS.gray800}`,
      }),
    },
    TableHeadRow: {
      style: () => ({
        borderBottom: `1px solid ${PRIMITIVE_COLORS.gray800}`,
      }),
    },
    // @ts-ignore
    TableHeadCellSortable: {
      style: ({ $divider }: any) => {
        return {
          backgroundColor: "transparent",
          color: PRIMITIVE_COLORS.gray300,
          borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.gray800}` : "none",
        };
      },
    },
    TableHeadCell: {
      style: ({ $divider, $size }) => {
        return {
          backgroundColor: "transparent",
          color: PRIMITIVE_COLORS.gray400,
          borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.gray800}` : "none",
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "16px",
          padding: $size === "compact" ? "4px 12px" : "12px",
        };
      },
    },
    TableBody: {
      style: () => ({
        verticalAlign: "top",
      }),
    },
    TableBodyCell: {
      style: ({ $size }) => ({
        fontSize: "14px",
        lineHeight: "20px",
        color: PRIMITIVE_COLORS.gray200,
        border: "none",
        padding: $size === "compact" ? "8px 12px" : "12px",
        ":hover": {
          backgroundColor: "transparent",
        },
      }),
    },
    TableBodyRow: {
      style: () => ({
        backgroundColor: "transparent",
        ":hover": {
          backgroundColor: "transparent",
        },
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
