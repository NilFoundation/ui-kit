import { ACCESSIBILITY_TYPE, PLACEMENT } from "baseui/popover";
import { BUTTON_KIND, Button } from "../button";
import { CopyIcon } from "../icons";
import { StatefulTooltip } from "../tooltip";
import { getCopyButtonOverrides } from "./overrides";
import { memo, useState } from "react";
import { TOOLTIP_KIND } from "../tooltip/types";

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
      onMouseLeave={() => setCopied(false)}
      onBlur={() => setCopied(false)}
      kind={copied ? TOOLTIP_KIND.SUCCESS : TOOLTIP_KIND.DEFAULT}
    >
      <Button onClick={onClick} kind={BUTTON_KIND.secondary} overrides={getCopyButtonOverrides()}>
        <CopyIcon />
      </Button>
    </StatefulTooltip>
  );
};

export const MemoizedCopyButton = memo(CopyButton);
