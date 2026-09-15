import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  icons,
  demo,
  code,
  index,
}) => {
  const targetUrl = demo && demo !== '#' ? demo : (code && code !== '#' ? code : '#');

  const handleCardClick = () => {
    if (targetUrl !== '#') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl border border-white/5 bg-surface-container/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-brand-primary/20 hover:shadow-[0_10px_30px_rgba(0,218,243,0.05)]"
    >
      <div className="space-y-4 cursor-pointer" onClick={handleCardClick}>
        {/* Project Thumbnail Frame */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 p-2 bg-surface-container/30">
          <div className="scanline z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base/50 to-transparent pointer-events-none z-10" />
          <img
            src={image}
            alt={`${title} Preview`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-lg group-hover:scale-[1.03] transition-transform duration-700"
          />
          {/* Badge overlays */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1">
            {tech.slice(0, 2).map((t, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-surface-base/80 border border-white/10 rounded text-[9px] font-mono text-brand-primary uppercase tracking-wider backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Info Area */}
        <div className="px-5 pb-1 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-brand-on-surface group-hover:text-brand-primary transition-colors line-clamp-1">
              {title}
            </h3>
            {/* Tech Stack Mini Icons */}
            <div className="flex gap-1">
              {icons.slice(0, 3).map((Icon, idx) => (
                <Icon key={idx} className="w-3.5 h-3.5 text-brand-on-surface-variant/70" />
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-brand-on-surface-variant leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 pb-5 pt-3 flex items-center gap-3">
        {demo && demo !== '#' ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 py-2 rounded-lg bg-brand-primary text-surface-base font-mono font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-brand-primary-dim transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(0,218,243,0.1)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Preview
          </a>
        ) : (
          <a
            href={code && code !== '#' ? code : '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 py-2 rounded-lg bg-surface-container-high/80 text-brand-on-surface-variant font-mono font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-all active:scale-95 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Preview
          </a>
        )}

        {code && code !== '#' && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-2 rounded-lg border border-brand-outline-variant text-brand-on-surface hover:text-brand-primary hover:border-brand-primary/30 font-mono font-bold text-xs hover:bg-white/5 transition-all flex items-center gap-1.5"
            title="View Code on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
