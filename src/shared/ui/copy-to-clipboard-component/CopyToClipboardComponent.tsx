import { useState } from "react";
import { StatefulTooltip, TOOLTIP_KIND } from "../../../components";
import { ACCESSIBILITY_TYPE, PLACEMENT } from "baseui/popover";

type CopyToClipboardComponentProps = {
  copyHandler: () => boolean;
  render: (props: { onClick: () => void; copied: boolean }) => JSX.Element;
  copyTooltipText?: string;
  copiedTooltipText?: string;
};

const CopyToClipboardComponent = ({
  copyHandler,
  render,
  copyTooltipText = "Copy",
  copiedTooltipText = "Copied",
}: CopyToClipboardComponentProps) => {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    const isCopied = copyHandler();
    setCopied(isCopied);
  };

  return (
    <StatefulTooltip
      content={copied ? copiedTooltipText : copyTooltipText}
      accessibilityType={ACCESSIBILITY_TYPE.tooltip}
      placement={PLACEMENT.bottom}
      onMouseLeave={() => setCopied(false)}
      onBlur={() => setCopied(false)}
      kind={copied ? TOOLTIP_KIND.SUCCESS : TOOLTIP_KIND.DEFAULT}
    >
      {render({ onClick, copied })}
    </StatefulTooltip>
  );
};

export default CopyToClipboardComponent;
