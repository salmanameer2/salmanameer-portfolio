import React from 'react';
import { motion } from 'motion/react';
import { Gauge, Layers, MapPin, Sparkles } from 'lucide-react';
import { experienceEntries } from '../assets/assets';

const stats = [
  {
    value: '20+',
    labelKey: 'aboutStatProjects',
    icon: Layers,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/15',
  },
  {
    value: '100+',
    labelKey: 'aboutStatDeliveries',
    icon: Gauge,
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
    border: 'border-brand-secondary/15',
  },
];

export const About = ({ t }) => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 md:scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Narrative card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 relative overflow-hidden gradient-border-card rounded-3xl p-7 md:p-10"
        >
          {/* Ambient decorative glows */}
          <div
            className="absolute -top-24 -right-20 w-64 h-64 bg-brand-primary/10 blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 w-56 h-56 bg-brand-secondary/10 blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs text-brand-primary tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" aria-hidden="true" />
                {t('aboutMe')}
              </span>

              <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-brand-on-surface leading-tight">
                {t('aboutHeadline')}
              </h2>
            </div>

            <div className="space-y-3">
              <p className="font-sans text-sm md:text-base text-brand-on-surface-variant leading-relaxed">
                {t('aboutP1')}
              </p>
              <p className="font-sans text-sm text-brand-on-surface-variant/90 leading-relaxed">
                {t('aboutP2')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.labelKey}
                    className="rounded-xl border border-brand-outline-variant/30 bg-surface-container/30 p-4"
                  >
                    <div className={`w-8 h-8 rounded-lg ${stat.bg} border ${stat.border} ${stat.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <p className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-brand-on-surface">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-brand-on-surface-variant mt-1 leading-relaxed">
                      {t(stat.labelKey)}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-on-surface-variant">
                <MapPin className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true" />
                Lahore, Pakistan
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-brand-primary">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                {t('aboutAvailability')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Experience snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="lg:col-span-5 gradient-border-card rounded-3xl p-7 md:p-8 flex flex-col"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                {t('aboutSnapshotTitle')}
              </span>
              <p className="font-sans text-xs text-brand-on-surface-variant leading-relaxed">
                {t('aboutSnapshotDesc')}
              </p>
            </div>
            <span className="shrink-0 font-display text-2xl font-extrabold text-brand-primary/40 leading-none">
              {String(experienceEntries.length).padStart(2, '0')}
            </span>
          </div>

          <div className="mt-6 flex-1">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.06 }}
                className="relative flex gap-3.5 group"
              >
                <div className="flex flex-col items-center pt-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary/60 group-hover:bg-brand-primary transition-colors duration-300" />
                  {index < experienceEntries.length - 1 && (
                    <span className="w-px flex-1 bg-brand-outline-variant/40 my-1" />
                  )}
                </div>
                <div className={index < experienceEntries.length - 1 ? 'pb-5' : ''}>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="font-display text-xs md:text-sm font-bold text-brand-on-surface group-hover:text-brand-primary transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <span className="font-mono text-[9px] text-brand-on-surface-variant/70 whitespace-nowrap">
                      {entry.dates}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-brand-primary/80 mt-0.5">
                    {entry.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
