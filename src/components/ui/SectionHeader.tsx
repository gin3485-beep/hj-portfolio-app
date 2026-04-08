interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-left">
      <div className="flex items-center justify-start gap-4 mb-3">
        <span className="block w-6 md:w-10 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500/10 rounded-full"></span>
        <span className="text-[11px] md:text-xs text-purple-600 dark:text-purple-400 tracking-[0.2em] font-black uppercase opacity-90">
          PART {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-5"></div>
      <p className="text-muted-foreground leading-relaxed text-sm break-keep">
        {description}
      </p>
    </div>
  );
}
