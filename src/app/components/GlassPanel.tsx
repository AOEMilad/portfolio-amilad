// components/GlassPanel.tsx
import { PropsWithChildren } from "react";

type GlassPanelProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}>;

export default function GlassPanel({ as: Tag = "div", className, children }: GlassPanelProps) {
  return (
    <Tag className={`relative glass ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
