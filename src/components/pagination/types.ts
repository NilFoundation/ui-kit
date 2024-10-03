import { ReactNode } from "react";
import { BUTTON_SIZE } from "../button";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
  linkMapper?: (page: number) => string;
  pageHandler?: (page: number) => void;
  buttonSize?: BUTTON_SIZE;
};

export type PageElementProps = {
  page: number;
  label?: ReactNode;
  linkMapper?: (page: number) => string;
  pageHandler?: (page: number) => void;
  disabled?: boolean;
  active?: boolean;
  buttonSize: BUTTON_SIZE;
};
