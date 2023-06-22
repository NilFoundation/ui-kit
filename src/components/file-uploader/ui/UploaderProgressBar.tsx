import { FC } from "react";
import { ProgressBar, ProgressBarProps } from "../../progress-bar";
import { useStyletron } from "styletron-react";

// @ts-ignore
const UploaderProgressBar: FC<ProgressBarProps> = ({ ...props }) => {
  const [css] = useStyletron();

  return <ProgressBar {...props} className={css({ marginBottom: "12px" })} />;
};
export default UploaderProgressBar;
