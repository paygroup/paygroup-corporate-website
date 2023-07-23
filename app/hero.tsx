'use client';
import { Typography } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='container grid items-center grid-cols-1 md:grid-cols-2 justify-items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className='max-md:order-last'
      >
        <Typography lg>
          <span className='text-2xl md:text-4xl text-primary'>
            <b>Pay</b>Group
          </span>{' '}
          is a digital platform that enables <strong>social groups</strong>{' '}
          living in different countries, continents to:{' '}
        </Typography>
        <Typography className='mt-3 ml-2 list-disc list-inside'>
          <li>Collect and manage contributions electronically </li>

          <li>Create fundraising campaigns</li>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Image
          src={`/assets/images/phone.png`}
          alt=''
          width={300}
          height={500}
        />
      </motion.div>
    </section>
  );
}
