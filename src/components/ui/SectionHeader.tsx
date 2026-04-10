import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description: string;
  showPart?: boolean;
}

export default function SectionHeader({ label, title, description, showPart = true }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-left">
      <div className="flex items-center justify-start gap-4 mb-3">
        <span className="block w-6 sm:w-10 h-[2px] bg-primary/50 rounded-full"></span>
        <span className="text-sm sm:text-base text-primary dark:text-primary tracking-[0.2em] font-black uppercase opacity-90">
          {showPart ? `PART ${label}` : label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="w-8 h-1 bg-primary rounded-full mb-5"></div>
      <p className="text-muted-foreground leading-relaxed text-base break-keep">
        {description}
      </p>
    </div>
  );
}
