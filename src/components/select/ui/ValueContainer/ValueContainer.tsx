import { styled } from "styletron-react";
import { useOverflow } from "./useOverflow";
import { FC, useContext } from "react";
import { modifyChildren } from "./modifyChildren";
import ValueContext from "../../ValueContext";

const StyledDiv = styled<"div", any>("div", (props) => ({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  boxSizing: "border-box",
  position: "absolute",
  overflow: "hidden",
  maxWidth: "100%",
  ...(props.$hidden
    ? {
        visibility: "hidden",
        pointerEvents: "none",
        position: "relative",
      }
    : {}),
}));

const ValueContainer: FC<any> = (props) => {
  const { value } = useContext(ValueContext);
  const { ref, isOverflow } = useOverflow(value);
  const modifiedChildren = modifyChildren(value, isOverflow, props);
  const { children, ...restProps } = props;

  return (
    <>
      <StyledDiv {...restProps} ref={ref} $hidden>
        {children}
      </StyledDiv>
      <StyledDiv {...restProps}>{modifiedChildren}</StyledDiv>
    </>
  );
};

export default ValueContainer;
