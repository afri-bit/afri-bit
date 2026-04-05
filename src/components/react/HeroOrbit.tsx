import { motion, useReducedMotion } from 'framer-motion';
import { AtSign, BookOpen, Box, Folder } from 'lucide-react';
import type { OrbitNode } from '../../data/profile';

const iconMap = {
  folder: Folder,
  box: Box,
  book: BookOpen,
  'at-sign': AtSign,
} as const;

type Props = {
  nodes: OrbitNode[];
  avatarSrc: string;
};

export function HeroOrbit({ nodes, avatarSrc }: Props) {
  const reduceMotion = useReducedMotion();

  const card = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 24 } },
  };
  const item = (delay: number) => ({
    hidden: { opacity: 0, x: 14 },
    show:   { opacity: 1, x: 0, transition: { delay, type: 'spring', stiffness: 260, damping: 22 } },
  });

  return (
    <motion.div
      className="relative w-full"
      initial={reduceMotion ? 'show' : 'hidden'}
      animate="show"
      variants={card}
    >
      {/* ── Avatar area ── */}
      <div className="relative flex justify-center">
        {/* outer glow ring */}
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, color-mix(in srgb, var(--neon) 22%, transparent) 0%, color-mix(in srgb, var(--accent) 14%, transparent) 55%, transparent 78%)',
          }}
        />
        {/* photo frame */}
        <motion.div
          className="relative z-10 flex items-center justify-center rounded-full"
          style={{
            padding: 4,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--neon) 50%, var(--accent-dim) 100%)',
            boxShadow: '0 0 48px var(--glow), 0 0 80px var(--neon-glow)',
          }}
          animate={reduceMotion ? {} : { boxShadow: [
            '0 0 48px var(--glow), 0 0 80px var(--neon-glow)',
            '0 0 64px var(--glow), 0 0 120px var(--neon-glow)',
            '0 0 48px var(--glow), 0 0 80px var(--neon-glow)',
          ]}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={avatarSrc}
            alt="Afrizal profile photo"
            className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44"
            width={176}
            height={176}
            loading="eager"
            decoding="async"
          />
        </motion.div>

        {/* status badge */}
        <motion.div
          className="absolute bottom-2 right-1/2 z-20 flex translate-x-16 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
          style={{
            borderColor: 'color-mix(in srgb, var(--neon) 45%, transparent)',
            background: 'color-mix(in srgb, var(--palette-neutral-02) 90%, transparent)',
            backdropFilter: 'blur(12px)',
            color: 'var(--neon)',
          }}
          variants={item(0.22)}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: 'var(--neon)', boxShadow: '0 0 8px var(--neon)' }}
          />
          Open to build
        </motion.div>
      </div>

      {/* ── Name / title ── */}
      <motion.div className="mt-7 text-center" variants={item(0.14)}>
        <p
          className="font-display text-xl font-bold tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Afrizal
        </p>
        <p
          className="mt-1 text-sm font-medium uppercase tracking-[0.22em]"
          style={{ color: 'var(--text-soft)' }}
        >
          Product Engineer
        </p>
      </motion.div>

      {/* ── Link grid ── */}
      <motion.div
        className="mt-6 grid gap-3 sm:grid-cols-2"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {nodes.map((node) => {
          const Icon = iconMap[node.icon];
          return (
            <motion.a
              key={node.id}
              href={node.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col gap-3 rounded-2xl border px-5 py-5 text-sm font-medium transition duration-300"
              style={{
                borderColor: 'color-mix(in srgb, var(--palette-neutral-12) 28%, transparent)',
                background: 'color-mix(in srgb, var(--palette-neutral-12) 22%, transparent)',
                backdropFilter: 'blur(16px)',
                color: 'var(--text)',
              }}
              variants={item(0)}
              whileHover={{ y: -2, borderColor: 'color-mix(in srgb, var(--neon) 50%, transparent)', color: 'var(--neon)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon
                className="h-5 w-5 flex-none"
                style={{ color: 'var(--accent)' }}
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="flex items-center justify-between gap-2">
                {node.label}
                <span
                  className="text-xs"
                  style={{ color: 'var(--text)' }}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
