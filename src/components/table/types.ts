import {
  TableProps as BaseTableSemanticProps,
  TableBuilderProps as BaseTableSemanticBuilderProps,
  TableBuilderColumnProps as BaseTableSemanticBuilderColumnProps,
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

export type TableSemanticProps = Omit<BaseTableSemanticProps, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableSemanticBuilderProps = Omit<BaseTableSemanticBuilderProps<any>, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};

export type TableSemanticBuilderColumnProps = Omit<BaseTableSemanticBuilderColumnProps<any>, "size" | "divider"> & {
  size?: TABLE_SIZE;
  divider?: TABLE_DIVIDER;
};
