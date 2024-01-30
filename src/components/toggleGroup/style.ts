import { StyleObject } from "styletron-standard";
import { SPACE } from "../../shared";

const labelStyles: StyleObject = {
  marginBottom: SPACE[8],
};

const toggleGroupStyles: StyleObject = {
  display: "flex",
  flexWrap: "wrap",
  gap: SPACE[8],
};

export const styles = {
  labelStyles,
  toggleGroupStyles,
};
