import { CopyToClipboardComponentProps } from "../../shared/ui/copy-to-clipboard-component";
import { ButtonIconProps } from "../button-icon";

export type CopyButtonProps = Omit<CopyToClipboardComponentProps, "render"> & Omit<ButtonIconProps, "icon" | "onCopy">;
