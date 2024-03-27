export type CopyToClipboardComponentProps = {
  textToCopy: string;
  render: (props: { onClick: () => void; copied: boolean }) => JSX.Element;
  transformOnCopy?: (code: string) => string;
  onCopy?: (textToCopy: string) => void;
  copyTooltipText?: string;
  copiedTooltipText?: string;
};
