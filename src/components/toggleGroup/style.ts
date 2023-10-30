import { StyleObject } from "styletron-standard";
import { SPACE } from "../../shared";

const labelStyles: StyleObject = {
  marginBottom: SPACE[8],
};

const toggleGroupStyles: StyleObject = {
  display: "flex",
  flexWrap: "wrap",
  gap: SPACE[16],
};

export const styles = {
  labelStyles,
  toggleGroupStyles,
};
