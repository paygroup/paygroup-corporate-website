export type PropsInput = {
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local "
    | "month"
    | "week"
    | "color"
    | "file"
    | "image"
    | "button"
    | "submit"
    | "reset"
    | "checkbox"
    | "radio"
    | "hidden";
  name: string;
  id: string;
  placeholder: string;
  onChange?: () => void;
  className?: string;
};
