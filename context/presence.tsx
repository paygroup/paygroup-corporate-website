'use client';

import { AnimatePresence } from 'framer-motion';

export default function Presence({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
