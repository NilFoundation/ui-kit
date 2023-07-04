import { ChangeEventHandler, FC, useState } from "react";
import FormControl, { FormControlProps } from "../FormControl";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";
import { Input } from "../../input";

const containerStyles: StyleObject = {
  width: "400px",
};

type FormControlStoryWidgetProps = FormControlProps & {
  isCounter?: boolean;
};

const FormControlStoryWidget: FC<FormControlStoryWidgetProps> = ({ isCounter, ...props }) => {
  const [css] = useStyletron();
  const [value, setValue] = useState("");

  const onChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={css(containerStyles)}>
      <FormControl
        {...props}
        counter={
          isCounter
            ? {
                maxLength: 100,
                length: value.length,
              }
            : undefined
        }
      >
        <Input placeholder="Input Field" value={value} onChange={onChangeHandler} />
      </FormControl>
    </div>
  );
};

export default FormControlStoryWidget;
