"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight } from "lucide-react";

export interface NotchedCardProps {
  /** Main card title displayed next to the notch */
  title: string;
  /** Body description text */
  description: string;
  /** Lucide icon name (string) or a custom React component/icon */
  icon?: string | React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional link navigation URL */
  href?: string;
  /** Custom class for the outer card container */
  className?: string;
  /** Custom background color for the icon badge (default: #0e6224) */
  iconBadgeBg?: string;
  /** Custom default border stroke color (default: #B9F5DD) */
  strokeColor?: string;
  /** Custom hover border stroke color (default: #0e6224) */
  strokeHoverColor?: string;
  /** Optional custom action icon in the bottom button (default: ArrowRight) */
  actionIcon?: React.ReactNode;
  /** Optional custom content rendered beneath description */
  children?: React.ReactNode;
}

export const NotchedCard: React.FC<NotchedCardProps> = ({
  title,
  description,
  icon,
  onClick,
  href,
  className = "",
  iconBadgeBg = "bg-[#0e6224]",
  strokeColor = "#B9F5DD",
  strokeHoverColor = "#0e6224",
  actionIcon,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 280, height: 390 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        if (clientWidth > 0 && clientHeight > 0) {
          setDimensions({ width: clientWidth, height: clientHeight });
        }
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { width: w, height: h } = dimensions;

  // Exact geometric parameters for the smooth continuous notched curve
  const r = 28; // Outer card corner radius
  const nw = 76; // Notch width
  const nh = 76; // Notch height
  const nr = 20; // Notch inner concave corner radius
  const fr = 12; // Outer fillet radius connecting notch to outer edges

  // Continuous C1-smooth SVG path with zero sharp 90-degree corners
  const pathD = `
    M ${nw + fr} 0
    L ${w - r} 0
    A ${r} ${r} 0 0 1 ${w} ${r}
    L ${w} ${h - r}
    A ${r} ${r} 0 0 1 ${w - r} ${h}
    L ${r} ${h}
    A ${r} ${r} 0 0 1 0 ${h - r}
    L 0 ${nh + fr}
    A ${fr} ${fr} 0 0 1 ${fr} ${nh}
    L ${nw - nr} ${nh}
    A ${nr} ${nr} 0 0 0 ${nw} ${nh - nr}
    L ${nw} ${fr}
    A ${fr} ${fr} 0 0 1 ${nw + fr} 0
    Z
  `;

  const CardContent = (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`group relative cursor-pointer w-full min-h-[390px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${className}`}
      style={{
        filter: "drop-shadow(0 4px 16px rgba(14,98,36,0.08))",
      }}
    >
      {/* SVG Background Path with Rounded Fillets */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
      >
        <path
          d={pathD}
          fill="#ffffff"
          stroke={strokeColor}
          strokeWidth="2"
          className="transition-colors duration-300"
          style={{
            stroke: undefined, // Controlled by CSS class / hover
          }}
        />
        <style jsx>{`
          path {
            stroke: ${strokeColor};
          }
          div:hover path {
            stroke: ${strokeHoverColor};
          }
        `}</style>
      </svg>

      {/* Top Section: Icon in Notch + Title beside it */}
      <div className="relative z-10">
        {/* Rounded Badge sitting inside the notch */}
        <div
          className={`absolute top-2 left-2 w-[60px] h-[60px] rounded-[18px] ${iconBadgeBg} text-white flex items-center justify-center shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-all duration-300`}
          style={{ zIndex: 20 }}
        >
          {typeof icon === "string" ? (
            <DynamicIcon name={icon} size={26} />
          ) : (
            icon
          )}
        </div>

        {/* Title placed to the right of the notch */}
        <div className="pt-3.5 pr-4 pl-[84px] min-h-[72px] flex items-center">
          <h3 className="text-base sm:text-[17px] font-bold text-[#0e6224] group-hover:text-[#073d15] transition-colors leading-snug tracking-tight">
            {title}
          </h3>
        </div>

        {/* Description Text */}
        <div className="pt-6 px-6">
          <p className="text-sm sm:text-[15px] text-[#475569] font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Optional Custom Injected Children */}
        {children && <div className="px-6 pt-3">{children}</div>}
      </div>

      {/* Bottom Section: Circular Action Button */}
      <div className="relative z-10 px-6 pb-6 pt-4">
        <div className="w-12 h-12 rounded-full bg-[#0e6224] text-white flex items-center justify-center shadow-md group-hover:bg-[#073d15] group-hover:scale-110 transition-all duration-300">
          {actionIcon || <ArrowRight className="w-5 h-5 stroke-[2.5]" />}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
