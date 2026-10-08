"use client";

import React from "react";
import * as Icons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "w-5 h-5",
  size = 20,
}) => {
  // Access icon dynamically from lucide-react exports
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];

  if (!IconComponent) {
    // Fallback icon if name not found
    const DefaultIcon = Icons.CheckCircle2;
    return <DefaultIcon className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
