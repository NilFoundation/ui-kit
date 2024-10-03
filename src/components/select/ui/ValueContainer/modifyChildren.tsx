import { Children } from "react";
import { TAG_SIZE, Tag } from "../../../tag";
import { SelectProps } from "../../types";
import { getTagKind, tagOverrides } from "../../sharedUtils";

export const modifyChildren = (value: SelectProps["value"], isOverflow: boolean, props: any) => {
  const childrenArray = Children.toArray(props?.children);

  const isSelectedOption = (child: any) => !!child?.props?.value;
  const selectedOptions = [];
  const otherChildren = [];

  for (const child of childrenArray) {
    if (isSelectedOption(child)) {
      selectedOptions.push(child);
    } else {
      otherChildren.push(child);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const optionsToDisplay = !isOverflow ? selectedOptions : selectedOptions.slice(0, Math.min(2, value!.length - 1));

  return (
    <>
      {optionsToDisplay}
      {isOverflow && value && (
        <Tag size={TAG_SIZE.m} overrides={tagOverrides} kind={getTagKind(props.$error, props.$isFocused)}>
          {`+ ${value.length - optionsToDisplay.length} more`}
        </Tag>
      )}
      {otherChildren}
    </>
  );
};
