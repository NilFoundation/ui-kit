import { styled } from "styletron-react";
import { useHiddenInput } from "./useHiddenInput";
import { FC, useContext } from "react";
import { modifyChildren } from "./modifyChildren";
import SelectContext from "../../SelectContext";

const StyledDiv = styled<"div", any>("div", (props) => ({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  boxSizing: "border-box",
  position: "absolute",
  overflow: "hidden",
  maxWidth: "100%",
  ...(props.$width ? { width: `${props.$width}px` } : {}),
  ...(props.$hidden
    ? {
        visibility: "hidden",
        pointerEvents: "none",
        position: "relative",
      }
    : {}),
}));

const ValueContainer: FC<any> = (props) => {
  const { value } = useContext(SelectContext);
  const { hiddenInputRef, mockInputRef, mockInputWidth, isHiddenInputOverflow } = useHiddenInput(value);
  const modifiedChildren = modifyChildren(value, isHiddenInputOverflow, props);
  const { children, ...restProps } = props;

  return (
    <>
      <StyledDiv {...restProps} ref={hiddenInputRef} $hidden>
        {children}
      </StyledDiv>
      <StyledDiv {...restProps} ref={mockInputRef} $width={mockInputWidth}>
        {modifiedChildren}
      </StyledDiv>
    </>
  );
};

export default ValueContainer;
