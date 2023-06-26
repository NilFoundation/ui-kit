import { FC } from "react";
import { TableBuilderColumn as BaseTableBuilderColumn } from "baseui/table-semantic";
import { TableBuilderColumnProps } from "./types";
import { getTableOverrides } from "./overrides";

const TableBuilderColumn: FC<TableBuilderColumnProps> = ({ ...props }) => {
  const overrides = getTableOverrides();

  return <BaseTableBuilderColumn {...props} overrides={overrides} />;
};

export default TableBuilderColumn;
