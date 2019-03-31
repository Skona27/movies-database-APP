export type IButtonVariant = "primary" | "secondary" | "link";

export interface IButtonVariantDefinition {
  active: {
    color: string;
    backgroundColor: string;
    outlineColor?: string;
  };
  hover: {
    color: string;
    backgroundColor?: string;
  };
}