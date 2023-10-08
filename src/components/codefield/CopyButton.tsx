import { ACCESSIBILITY_TYPE, PLACEMENT } from "baseui/popover";
import { BUTTON_KIND, Button } from "../button";
import { CopyIcon } from "../icons";
import { StatefulTooltip } from "../tooltip";
import { getCopyButtonOverrides, getTooltipOverrides } from "./overrides";
import { memo, useState } from "react";

type CopyButtonProps = {
  copyHandler: () => boolean;
};

const CopyButton = ({ copyHandler }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    const isCopied = copyHandler();
    setCopied(isCopied);
  };

  return (
    <StatefulTooltip
      content={copied ? "Copied" : "Copy"}
      accessibilityType={ACCESSIBILITY_TYPE.tooltip}
      placement={PLACEMENT.bottom}
      overrides={getTooltipOverrides(copied)}
      onMouseLeave={() => setCopied(false)}
    >
      <Button onClick={onClick} kind={BUTTON_KIND.secondary} overrides={getCopyButtonOverrides()}>
        <CopyIcon />
      </Button>
    </StatefulTooltip>
  );
};

export const MemoizedCopyButton = memo(CopyButton);
