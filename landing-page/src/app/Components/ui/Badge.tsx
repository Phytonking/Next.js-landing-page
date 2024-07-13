import React from "react";
import Image from "next/image";

interface BadgeProps {
  text: string;
  bgColor?: string;
  className?: string; 
}

const Badge: React.FC<BadgeProps> = ({ text, bgColor = "bg-blue-100", className = "" }) => {
  return (
    <div className={`${bgColor} border border-cyan-300 rounded-full px-4 py-2 inline-flex items-center ${className}`}>
      <Image
        src="/AI Generate A lined.svg"
        alt="Badge icon"
        width={19}
        height={18}
        className="mr-2"
      />
      <span className="text-blue-600 text-sm font-bold">{text}</span>
    </div>
  );
};

export default Badge;
