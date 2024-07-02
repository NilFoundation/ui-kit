import { FC, ReactNode, cloneElement, isValidElement } from "react";
import { Tab as BaseTab } from "baseui/tabs";
import { getTabOverrides } from "./overrides";
import { useStyletron } from "baseui";
import { contentWrapperSecondaryStyles, contentWrapperStyles } from "./styles";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TAB_KIND, TabProps } from "./types";

const getEnhancer = (node: ReactNode) => {
  if (isValidElement(node)) {
    return cloneElement(node as any, {
      size: 20,
    });
  }
  return node;
};

const Tab: FC<TabProps> = ({
  startEnhancer,
  endEnhancer,
  children,
  overrides: baseOverrides,
  kind = TAB_KIND.primary,
  ...props
}) => {
  const [css] = useStyletron();

  const tabOverrides = getTabOverrides(kind);
  const overrides = getMergedOverrides(tabOverrides, baseOverrides);
  const wrapperCn = kind === TAB_KIND.primary ? css(contentWrapperStyles) : css(contentWrapperSecondaryStyles);

  return (
    <BaseTab {...props} overrides={overrides}>
      <div className={wrapperCn}>
        {startEnhancer && getEnhancer(startEnhancer)}
        {children}
        {endEnhancer && getEnhancer(endEnhancer)}
      </div>
    </BaseTab>
  );
};

export default Tab;
