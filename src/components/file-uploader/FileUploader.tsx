import { FC } from "react";
import { FileUploader as BaseFileUploader, FileUploaderProps as BaseFileUploaderProps } from "baseui/file-uploader";
import { getFileUploaderOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type FileUploaderProps = BaseFileUploaderProps;

const FileUploader: FC<FileUploaderProps> = ({
  progressAmount,
  errorMessage,
  multiple = false,
  overrides: baseOverrides,
  ...props
}) => {
  const fileUploaderOverrides = getFileUploaderOverrides(!!progressAmount, !!errorMessage);
  const overrides = getMergedOverrides(fileUploaderOverrides, baseOverrides);

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
