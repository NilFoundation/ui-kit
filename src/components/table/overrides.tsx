import { TableOverrides } from "baseui/table-semantic";
import { PRIMITIVE_COLORS } from "../../shared";
import { TABLE_DIVIDER } from "./types";
import { ChevronDownIcon, ChevronUpIcon } from "../icons";
import { expandProperty } from "inline-style-expand-shorthand";

export const rootStyles = {
  backgroundColor: "transparent",
  border: "none",
};

export const tableHeadStyles = {
  ...expandProperty("borderBottom", `1px solid ${PRIMITIVE_COLORS.gray800}`),
};

export const tableHeadRowStyles = {
  ...expandProperty("borderBottom", `1px solid ${PRIMITIVE_COLORS.gray800}`),
};

export const tableHeadCellSortableStyles = ({ $divider }: any) => {
  return {
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.gray300,
    borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.gray800}` : "none",
  };
};

export const tableHeadCellStyles = ({ $divider, $size }: any) => {
  return {
    backgroundColor: "transparent",
    color: PRIMITIVE_COLORS.gray400,
    borderBottom: $divider !== TABLE_DIVIDER.clean ? `1px solid ${PRIMITIVE_COLORS.gray800}` : "none",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    padding: $size === "compact" ? "4px 12px" : "12px",
  };
};

export const tableBodyStyles = {
  verticalAlign: "top",
};

export const tableBodyCellStyles = ({ $size }: any) => ({
  fontSize: "14px",
  lineHeight: "20px",
  color: PRIMITIVE_COLORS.gray200,
  border: "none",
  padding: $size === "compact" ? "8px 12px" : "12px",
  ":hover": {
    backgroundColor: "transparent",
  },
});

export const tableBodyRowStyles = {
  backgroundColor: "transparent",
  ":hover": {
    backgroundColor: "transparent",
  },
};

export const tableEmptyMessageStyles = {
  lineHeight: "16px",
  padding: "24px",
};

export const getTableSemanticOverrides = (): TableOverrides => {
  return {
    Root: {
      style: rootStyles,
    },
    TableHead: {
      style: tableHeadStyles,
    },
    TableHeadRow: {
      style: tableHeadRowStyles,
    },
    // @ts-ignore
    TableHeadCellSortable: {
      style: tableHeadCellSortableStyles,
    },
    TableHeadCell: {
      style: tableHeadCellStyles,
    },
    TableBody: {
      style: tableBodyStyles,
    },
    TableBodyCell: {
      style: tableBodyCellStyles,
    },
    TableBodyRow: {
      style: tableBodyRowStyles,
    },
    TableEmptyMessage: {
      style: tableEmptyMessageStyles,
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
