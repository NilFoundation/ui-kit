import React, { useState } from "react";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";
import Select, { SelectProps } from "../Select";
import { OnChangeParams, Value } from "baseui/select";

const containerStyles: StyleObject = {
  width: "400px",
};

const SelectStoryWidget: React.FC<SelectProps> = ({ value: baseValue, onChange, ...props }) => {
  const [css] = useStyletron();
  const [value, setValue] = useState<Value | undefined>(baseValue);

  const onChangeHandler = (params: OnChangeParams) => {
    setValue(params.value);
    onChange?.(params.value);
  };

  return (
    <div className={css(containerStyles)}>
      {/*@ts-ignore*/}
      <Select {...props} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default SelectStoryWidget;
