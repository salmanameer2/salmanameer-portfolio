import React from 'react';

export const AboutCard = ({
  icon: Icon,
  title,
  description,
  color,
  index,
}) => {
  return (
    <div
      id={`about-card-${index}`}
      className="gradient-border-card p-6 md:p-8 rounded-xl flex flex-col gap-4 group"
    >
      <div className="w-12 h-12 rounded-lg bg-surface-container-high/80 flex items-center justify-center transition-transform duration-300">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="space-y-1.5">
        <h3 className="font-display font-bold text-lg text-brand-on-surface group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-xs md:text-sm text-brand-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
