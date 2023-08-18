import type { XOR } from "ts-xor";

type ErrorPageBaseProps = {
  errorCode: number;
  errorDescription: string;
};

type ErrorPageWithActionElementProps = {
  actionElement?: React.ReactNode;
} & ErrorPageBaseProps;

export type RedirectProps = {
  redirectPath: string;
  redirectTitle: string;
};

type ErrorPageWithoutActionElementProps = RedirectProps & ErrorPageBaseProps;

export type ErrorPageProps = XOR<ErrorPageWithActionElementProps, ErrorPageWithoutActionElementProps>;
