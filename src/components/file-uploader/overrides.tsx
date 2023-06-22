import { FileUploaderOverrides } from "baseui/file-uploader";
import UploaderWrapper from "./ui/UploaderWrapper";
import UploaderProgressBar from "./ui/UploaderProgressBar";
import ActionWrapper from "./ui/ActionWrapper";
import { getEntityWithoutProperties } from "../../shared/utils/getEntityWithoutProperties";
import { BUTTON_KIND } from "../button";

export const getFileUploaderOverrides = (isProgress: boolean, isError: boolean): FileUploaderOverrides => {
  return {
    FileDragAndDrop: {
      component: UploaderWrapper,
      props: ({ $isDragActive, ...props }) => ({
        ...getEntityWithoutProperties(props, [
          "$isDragAccept",
          "$isDragReject",
          "$draggedFiles",
          "$acceptedFiles",
          "$rejectedFiles",
          "$isFocused",
          "$afterFileDrop",
          "$isDisabled",
        ]),
        isProgress,
        isError,
        isDragActive: $isDragActive,
      }),
    },
    ButtonComponent: {
      component: ActionWrapper,
      props: ({ $isDragActive, ...props }) => ({
        ...props,
        $size: "compact",
        isDragActive: $isDragActive,
      }),
    },
    CancelButtonComponent: {
      props: {
        overrides: {
          BaseButton: {
            component: ActionWrapper,
            props: ({ $isDragActive, ...props }: any) => ({
              ...props,
              $size: "compact",
              $kind: BUTTON_KIND.tertiary,
              kind: BUTTON_KIND.tertiary,
              isDragActive: $isDragActive,
            }),
          },
        },
      },
    },
    RetryButtonComponent: {
      props: {
        overrides: {
          BaseButton: {
            component: ActionWrapper,
            props: ({ $isDragActive, ...props }: any) => ({
              ...props,
              $size: "compact",
              $kind: BUTTON_KIND.tertiary,
              kind: BUTTON_KIND.tertiary,
              isDragActive: $isDragActive,
            }),
          },
        },
      },
    },
    ContentMessage: {
      style: ({ $theme, $isDragActive }) => ({
        color: `${$isDragActive ? $theme.colors.white : $theme.colors.gray300}`,
        margin: "0",
      }),
    },
    ErrorMessage: {
      style: () => ({
        margin: "0",
      }),
    },
    ProgressBar: {
      component: ({ ...props }) => <UploaderProgressBar errorMessage={isError ? "error" : ""} {...props} />,
    },
  };
};
