import { MouseEvent, ReactNode } from "react";
import { StyleObject, useStyletron } from "styletron-react";
import { isTouch } from "../../utils/isTouch";

type TapAreaProps = {
  tapAreaSize?: number;
  children: ReactNode;
  onClick: () => void;
};

const getOuterStyle = (tapAreaSize: TapAreaProps["tapAreaSize"]): StyleObject => ({
  minWidth: `${tapAreaSize}px`,
  height: `${tapAreaSize}px`,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
});

const isTouchDevice = isTouch(); // we can optimistically check this once because it won't change in 99.9% cases

const TapArea = ({ tapAreaSize = 48, children, onClick }: TapAreaProps) => {
  const [css] = useStyletron();

  if (!isTouchDevice) {
    return <>{children}</>;
  }

  const outerStyle = css(getOuterStyle(tapAreaSize));
  const onClickWithStopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    onClick();
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div onClick={onClickWithStopPropagation} className={outerStyle}>
      {children}
    </div>
  );
};

export default TapArea;
