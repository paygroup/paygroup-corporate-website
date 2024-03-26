export type PropsButton = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingClassName?: string;
  loadingComponent?: React.ReactNode;
  loadingComponentClassName?: string;
};
