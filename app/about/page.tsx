'use client';
import { Typography } from '@/components/ui/typography';
import Cultures from './cultures';
import { motion } from 'framer-motion';
import Team from './team';
import Vision from './vision';
import { variants } from '@/lib/motion-variants';

export default function Page() {
  return (
    <motion.section
      variants={variants}
      initial='initialPage'
      animate='animatePage'
      exit='exitPage'
      className='container py-20 text-black'
    >
      <Typography>
        <span className='text-primary'>PayGroup</span> is a product developed by
        T-Cube Africa s.a.r.l., a company registered in the Democratic Republic
        of Congo under RCCM: CD/KNG/RCCM/18-B-01435, National Identification:
        ID-NAT 01-83-N37918B.{' '}
      </Typography>
      <br />
      <Typography>
        It was founded in 2018 by Esenda Obey, Constant Kabwasa Jr. and Raoul
        Onyambuhuto.
      </Typography>
      <Vision />
      <Team />
      <Cultures />
    </motion.section>
  );
}
