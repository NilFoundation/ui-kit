import React, { useState } from "react";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";
import Input, { InputProps } from "../Input";

const containerStyles: StyleObject = {
  width: "400px",
};

type TInputValue = string | number | undefined;

const InputStoryWidget: React.FC<InputProps> = ({ value: baseValue, ...props }) => {
  const [value, setValue] = useState<TInputValue>(baseValue);
  const [css] = useStyletron();

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={css(containerStyles)}>
      <Input {...props} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default InputStoryWidget;
