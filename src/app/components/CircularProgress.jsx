'use client';
import React from "react";
import { Icon } from "@iconify/react";

export default function CircularProgress({
  value = 50,
  color = "#D25353",
  size = 120,
  strokeWidth = 10,
  icon = "mdi-light:bell",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Icon */}
      <div className="absolute flex flex-col items-center">
       
        <span className="text-sm font-semibold text-gray-700">
          {value}%
        </span>
      </div>
    </div>
  );
}
