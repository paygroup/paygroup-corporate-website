'use client';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowTo() {
  return (
    <section className='container py-20'>
      <Typography center lg className='text-primary '>
        HOW TO USE PAYGROUP
      </Typography>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[10%] pt-20'>
        {data.map((_, idx) => (
          <motion.div
            viewport={{ once: true }}
            whileInView={{ y: [50, 0], opacity: [0.7, 1] }}
            transition={{ delay: 0.2 * idx, duration: 0.4 }}
            key={_.text}
            className='relative text-background w-fit '
          >
            <div className='overlay hover:from-primary'>
              <Image src={_.image} alt='' width={300} height={500} />
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-end px-10 pb-20 text-center'>
              <h1 className='text-2xl'>0{idx + 1}</h1>
              <Typography sm>{_.text}</Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
const data = [
  {
    text: 'Download mobile app Create your account',
    image: '/assets/images/product-page/1.png',
  },
  {
    text: 'Search for available public campaigns',
    image: '/assets/images/product-page/2.png',
  },
  {
    text: 'Select a campaign you want to support OR Create your own paygroup ',
    image: '/assets/images/product-page/3.png',
  },
];
