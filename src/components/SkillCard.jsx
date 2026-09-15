import React from 'react';

export const SkillCard = ({
  title,
  icon: Icon,
  description,
  tags,
  index,
}) => {
  // Generate a realistic skill level percentage based on the category for visualization
  const getPercentage = () => {
    if (title.toLowerCase().includes('frontend')) return 95;
    if (title.toLowerCase().includes('backend')) return 90;
    if (title.toLowerCase().includes('database')) return 88;
    if (title.toLowerCase().includes('tools')) return 85;
    if (title.toLowerCase().includes('hosting')) return 82;
    return 90; // Default UI/UX
  };

  const percentage = getPercentage();

  return (
    <div
      id={`skill-card-${index}`}
      className="gradient-border-card p-6 md:p-8 rounded-xl flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Icon Frame */}
        <div className="w-12 h-12 rounded-lg bg-surface-container-high/80 flex items-center justify-center">
          <Icon className="w-6 h-6 text-brand-primary" />
        </div>

        <h3 className="font-display text-lg md:text-xl font-bold text-brand-on-surface">
          {title}
        </h3>

        <p className="font-sans text-xs text-brand-on-surface-variant leading-relaxed">
          {description}
        </p>

        {/* Tags displayed completely */}
        <div className="pt-4 border-t border-white/5 space-y-2">
          <span className="block font-mono text-[9px] text-brand-primary uppercase tracking-widest">
            Skills Framework
          </span>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-mono text-brand-primary"
              >
                <span className="w-1 h-1 rounded-full bg-brand-primary"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Progress tracking indicator */}
      <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-brand-on-surface-variant uppercase text-[10px]">Expertise Level</span>
          <span className="text-brand-primary font-bold">{percentage}%</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-gradient-to-r from-brand-primary to-brand-primary-dim rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
