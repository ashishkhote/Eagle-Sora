"use client";

import React from "react";
import { ServiceDetail } from "@/types";
import { NotchedCard } from "./NotchedCard";

export interface NotchedServiceCardProps {
  service: ServiceDetail;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const NotchedServiceCard: React.FC<NotchedServiceCardProps> = ({
  service,
  onClick,
  href,
  className,
}) => {
  return (
    <NotchedCard
      title={service.title}
      description={service.shortDescription}
      icon={service.iconName}
      onClick={onClick}
      href={href}
      className={className}
    />
  );
};
