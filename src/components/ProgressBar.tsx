import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  colorClass?: string;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, colorClass = "bg-blue-500", label }) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1 text-sm font-medium text-slate-400">
          <span>{label}</span>
          <span>{current} / {total}</span>
        </div>
      )}
      <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};