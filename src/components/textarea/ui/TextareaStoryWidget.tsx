import { FC, useState, ChangeEventHandler } from "react";
import Textarea, { TextareaProps } from "../Textarea";
import { useStyletron } from "baseui";

const TextareaStoryWidget: FC<TextareaProps> = ({ value: baseValue, ...props }) => {
  const [value, setValue] = useState(baseValue);
  const [css] = useStyletron();

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={css({ maxWidth: "400px" })}>
      <Textarea {...props} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default TextareaStoryWidget;
