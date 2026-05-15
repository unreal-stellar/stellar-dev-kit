export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export function buttonClass(variant: ButtonVariant = "primary", disabled = false): string {
  const byVariant: Record<ButtonVariant, string> = {
    primary: "sdk-btn sdk-btn-primary",
    secondary: "sdk-btn sdk-btn-secondary",
    danger: "sdk-btn sdk-btn-danger"
  };

  return [byVariant[variant], disabled ? "sdk-btn-disabled" : ""].filter(Boolean).join(" ");
}

export function renderButton(props: ButtonProps): string {
  const className = buttonClass(props.variant, props.disabled);
  return `<button class="${className}" ${props.disabled ? "disabled" : ""}>${props.label}</button>`;
}
