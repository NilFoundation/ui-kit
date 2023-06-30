import { mergeOverrides } from "baseui";
import { Overrides } from "baseui/overrides";

export const getMergedOverrides = <T extends Overrides>(packageOverrides: T, customOverrides?: T): Overrides<T> => {
  return mergeOverrides(packageOverrides, customOverrides ?? {});
};
