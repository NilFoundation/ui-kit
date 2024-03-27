import {
  StyledRoot,
  StyledTable,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableBodyRow,
  StyledTableBodyCell,
  StyledTableBody,
  StyledTableHead,
  StyledTableEmptyMessage,
  StyledTableHeadCellSortable,
} from "baseui/table-semantic";
import { withStyle } from "styletron-react";
import {
  rootStyles,
  tableBodyCellStyles,
  tableBodyRowStyles,
  tableBodyStyles,
  tableEmptyMessageStyles,
  tableHeadCellSortableStyles,
  tableHeadCellStyles,
  tableHeadRowStyles,
  tableHeadStyles,
} from "./overrides";

export const StyledTableSemanticRoot = withStyle(StyledRoot, rootStyles);
export const StyledTableSemantic = StyledTable;
export const StyledTableSemanticHeadRow = withStyle(StyledTableHeadRow, tableHeadRowStyles);
export const StyledTableSemanticHeadCell = withStyle(StyledTableHeadCell, tableHeadCellStyles);
export const StyledTableSemanticBodyRow = withStyle(StyledTableBodyRow, tableBodyRowStyles);
export const StyledTableSemanticBodyCell = withStyle(StyledTableBodyCell, tableBodyCellStyles);
export const StyledTableSemanticHead = withStyle(StyledTableHead, tableHeadStyles);
export const StyledTableSemanticBody = withStyle(StyledTableBody, tableBodyStyles);
export const StyledTableSemanticEmptyMessage = withStyle(StyledTableEmptyMessage, tableEmptyMessageStyles);
export const StyledTableSemanticHeadCellSortable = withStyle(StyledTableHeadCellSortable, tableHeadCellSortableStyles);
