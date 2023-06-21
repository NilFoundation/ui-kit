import { FC } from "react";
import { FileUploader as BaseFileUploader, FileUploaderProps as BaseFileUploaderProps } from "baseui/file-uploader";

export type FileUploaderProps = BaseFileUploaderProps;

const FileUploader: FC<FileUploaderProps> = ({ multiple = false, ...props }) => {
  return <BaseFileUploader {...props} multiple={multiple} />;
};

export default FileUploader;
