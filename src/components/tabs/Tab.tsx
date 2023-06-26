import React, { FC, ReactNode } from "react";
import { Tab as BaseTab, TabProps as BaseTabProps } from "baseui/tabs";
import { getTabOverrides } from "./overrides";
import { useStyletron } from "baseui";
import { contentWrapperStyles } from "./styles";

export type TabProps = BaseTabProps & {
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
};

const getEnhancer = (node: ReactNode) => {
  if (React.isValidElement(node)) {
    return React.cloneElement(node as any, {
      size: 20,
    });
  }
  return node;
};

const Tab: FC<TabProps> = ({ startEnhancer, endEnhancer, children, ...props }) => {
  const [css] = useStyletron();

  const overrides = getTabOverrides();

  return (
    <BaseTab {...props} overrides={overrides}>
      <div className={css(contentWrapperStyles)}>
        {startEnhancer && getEnhancer(startEnhancer)}
        {children}
        {endEnhancer && getEnhancer(endEnhancer)}
      </div>
    </BaseTab>
  );
};

export default Tab;
