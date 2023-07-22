'use client';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { extra, data, user } from './data';

export default function HowTo() {
  return (
    <section className='container py-20'>
      <Typography center lg className='text-primary '>
        HOW TO USE PAYGROUP
      </Typography>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-px md:gap-[10%] pt-20'>
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
      <div className='grid grid-cols-1 gap-px mt-20 lg:grid-cols-3 md:grid-cols-2'>
        {extra.map((_, idx) => {
          if (_.image)
            return (
              <Image
                src={_.image}
                alt=''
                className='object-cover w-full h-full'
                width={200}
                height={100}
              />
            );
          return (
            <div
              key={_.label}
              className={cn(
                'flex flex-col items-center justify-center px-10 py-3 text-center text-white bg-primary',
                { 'bg-secondary': idx === 1 }
              )}
            >
              <h1 className='text-2xl'>{_.label}</h1>
              <Typography sm>{_.text}</Typography>
              <br />
              <Typography sm>{_.caption}</Typography>
            </div>
          );
        })}
      </div>
      <Typography center lg className='mt-20 text-primary'>
        WHO CAN USE PAYGROUP?
      </Typography>
      <div className='grid grid-cols-1 mt-20 mb-48 gap-x-10 gap-y-72 lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
        {user.map((_, idx) => (
          <div key={_.text}>
            <div
              className={cn(
                'relative text-black rounded-full w-fit ring-4 ring-primary ring-offset-8',
                { 'ring-secondary': idx === 1 }
              )}
            >
              <div className='absolute w-[calc(50%+8px)] rounded-tl-full -top-3 -left-3 bg-white aspect-square'>
                <div
                  className={cn(
                    'absolute w-full h-full border-t border-l rounded-tl-full border-primary left-px top-px',
                    { 'border-secondary': idx === 1 }
                  )}
                ></div>
              </div>
              <div
                className={cn(
                  'absolute inset-x-0 flex flex-col items-center w-[60%] pt-32 mx-auto top-2/3 bg-gradient-to-b from-primary/60 to-transparent',
                  { 'from-secondary/60': idx === 1 }
                )}
              >
                <h1 className='text-5xl text-white/20 '>0{idx + 1}</h1>
                <p className='w-[180%] text-center pb-20 pt-5'>{_.text}</p>
              </div>
              <Image
                src={_.image}
                alt=''
                className='relative z-10'
                width={300}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
