import type { XOR } from "ts-xor";

export type ErrorPageBaseProps = {
  errorCode: number;
  errorDescription: string;
};

export type ErrorPageWithActionElementProps = {
  actionElement?: React.ReactNode;
} & ErrorPageBaseProps;

export type RedirectProps = {
  redirectPath: string;
  redirectTitle: string;
};

export type ErrorPageWithoutActionElementProps = RedirectProps & ErrorPageBaseProps;

export type ErrorPageProps = XOR<ErrorPageWithActionElementProps, ErrorPageWithoutActionElementProps>;
