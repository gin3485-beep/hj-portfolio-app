interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-left">
      <div className="flex items-center justify-start gap-4 mb-3">
        <span className="block w-6 md:w-10 h-[2px] bg-primary/50 rounded-full"></span>
        <span className="text-sm md:text-base text-primary dark:text-primary tracking-[0.2em] font-black uppercase opacity-90">
          PART {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
        {title}
      </h2>
      <div className="w-8 h-1 bg-primary rounded-full mb-5"></div>
      <p className="text-muted-foreground leading-relaxed text-base break-keep">
        {description}
      </p>
    </div>
  );
}
