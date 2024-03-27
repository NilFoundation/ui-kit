import { useState } from "react";
import { StatefulTooltip, TOOLTIP_KIND } from "../../../components";
import { ACCESSIBILITY_TYPE, PLACEMENT } from "baseui/popover";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { CopyToClipboardComponentProps } from "./types";

const CopyToClipboardComponent = ({
  textToCopy,
  transformOnCopy,
  onCopy,
  render,
  copyTooltipText = "Copy",
  copiedTooltipText = "Copied",
}: CopyToClipboardComponentProps) => {
  const copyHandler = useCopyToClipboard(textToCopy, onCopy, transformOnCopy);
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
