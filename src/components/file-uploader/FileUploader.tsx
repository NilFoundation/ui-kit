import { FC } from "react";
import { FileUploader as BaseFileUploader, FileUploaderProps as BaseFileUploaderProps } from "baseui/file-uploader";
import { getFileUploaderOverrides } from "./overrides";

export type FileUploaderProps = BaseFileUploaderProps;

const FileUploader: FC<FileUploaderProps> = ({ progressAmount, errorMessage, multiple = false, ...props }) => {
  const overrides = getFileUploaderOverrides(!!progressAmount, !!errorMessage);

  return (
    <BaseFileUploader
      {...props}
      progressAmount={progressAmount}
      errorMessage={errorMessage}
      multiple={multiple}
      overrides={overrides}
    />
  );
};

export default FileUploader;
