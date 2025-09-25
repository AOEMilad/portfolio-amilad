"use client";

// components/GlossyButton.tsx
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function GlossyButton({ className = "", children, ...rest }: Props) {
  return (
    <button className={`glossy-btn ${className}`} {...rest}>
      <span className="label">{children}</span>
      <span className="sheen" aria-hidden />
    </button>
  );
}
