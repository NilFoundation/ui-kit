import { INPUT_SIZE } from "../input";
import { SELECT_SIZE } from "../select";

export const mapInputSizeToSelectSize = (size: INPUT_SIZE) => {
  switch (size) {
    case INPUT_SIZE.small:
      return SELECT_SIZE.small;
    case INPUT_SIZE.medium:
      return SELECT_SIZE.medium;
  }
};
