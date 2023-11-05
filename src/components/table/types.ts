import {
  TableProps as BaseTableProps,
  TableBuilderProps as BaseTableBuilderProps,
  TableBuilderColumnProps as BaseTableBuilderColumnProps,
} from "baseui/table-semantic/types";

export enum TABLE_SIZE {
  compact = "compact",
  default = "default",
  spacious = "spacious",
}

export enum TABLE_DIVIDER {
  horizontal = "horizontal",
  vertical = "vertical",
  grid = "grid",
  clean = "clean",
}

export type TableProps = Omit<BaseTableProps, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableBuilderProps = Omit<BaseTableBuilderProps<any>, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableBuilderColumnProps = Omit<BaseTableBuilderColumnProps<any>, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};
