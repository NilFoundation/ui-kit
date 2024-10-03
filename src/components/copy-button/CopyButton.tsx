import { FC, ForwardRefRenderFunction, forwardRef } from "react";
import { CopyButtonProps } from "./types";
import { CopyToClipboardComponent } from "../../shared/ui/copy-to-clipboard-component";
import { ButtonIcon } from "../button-icon";
import { CopyIcon } from "../icons";
import { BUTTON_KIND, BUTTON_SIZE } from "../button";

const CopyButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, CopyButtonProps> = (
  {
    size = BUTTON_SIZE.compact,
    onCopy,
    transformOnCopy,
    textToCopy,
    copyTooltipText,
    copiedTooltipText,
    onClick: onClickProp,
    kind = BUTTON_KIND.text,
    ...buttonProps
  },
  ref
) => {
  return (
    <CopyToClipboardComponent
      onCopy={onCopy}
      transformOnCopy={transformOnCopy}
      textToCopy={textToCopy}
      copyTooltipText={copyTooltipText}
      copiedTooltipText={copiedTooltipText}
      render={({ onClick }) => (
        <ButtonIcon
          ref={ref}
          icon={<CopyIcon />}
          size={size}
          kind={kind}
          {...buttonProps}
          onClick={(e) => {
            onClick();
            onClickProp?.(e);
          }}
        />
      )}
    />
  );
};

const CopyButton: FC<CopyButtonProps> = forwardRef(CopyButtonRenderFunction);
CopyButton.displayName = "CopyButton";

export default CopyButton;
