import { ChangeEventHandler, FC, useEffect, useState } from "react";
import Checkbox, { CheckboxProps } from "../Checkbox";

const CheckboxStoryWidget: FC<CheckboxProps> = ({ checked: baseChecked, ...props }) => {
  const [checked, setChecked] = useState<boolean | undefined>(baseChecked);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(baseChecked);
  }, [baseChecked]);

  return <Checkbox {...props} checked={checked} onChange={onChangeHandler} />;
};

export default CheckboxStoryWidget;
