export enum CODE_FIELD_SIZE {
  small = "small",
  medium = "medium",
}

export type CustomStyles = {
  [selector: string]: {
    [property: string]: string;
  };
};
