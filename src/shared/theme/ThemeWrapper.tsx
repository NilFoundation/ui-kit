import React from "react";
import { BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { createTheme } from "./theme";

export type ThemeWrapperProps = {
  children: React.ReactNode;
};

const engine = new Styletron();

const Theme = createTheme(engine);

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={Theme}>{children}</BaseProvider>
    </StyletronProvider>
  );
};
