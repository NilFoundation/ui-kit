import { FC, ReactNode } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { createTheme } from "../shared";
import { BaseProvider } from "baseui";
import { Provider } from "styletron-react";

type TestLayoutProps = {
  children: ReactNode;
};

const engine = new Styletron();
const { theme } = createTheme(engine);

export const TestsLayout: FC<TestLayoutProps> = ({ children }) => {
  return (
    <Provider value={engine}>
      <BaseProvider theme={theme}>{children}</BaseProvider>
    </Provider>
  );
};
