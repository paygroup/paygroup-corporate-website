import { Variants } from 'framer-motion';

export const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
  initialPage: {
    x: -500,
  },
  animatePage: {
    x: 0,
  },
  exitPage: {
    x: 500,
  },
};
