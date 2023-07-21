import { Typography } from '@/components/ui/typography';
import { persons } from './data';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Team() {
  return (
    <section className='pt-20'>
      <Typography center lg className='text-primary '>
        THE TEAM
      </Typography>
      <div className='grid grid-cols-1 gap-5 pt-20 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
        {persons.map((_, idx) => (
          <div key={_.name} className='flex flex-col items-center gap-5'>
            <div
              className={cn('p-3 rounded-full person--primary w-fit', {
                'person--secondary': idx === 1,
              })}
            >
              <Image
                src={_.image}
                alt=''
                width={200}
                height={200}
                className='rounded-full ring ring-white'
              />
            </div>
            <Typography
              center
              className={cn('text-primary', { 'text-secondary': idx === 1 })}
            >
              {_.name}
            </Typography>
            <div className='list-none'>
              {_.desc.map((__) => (
                <li key={__}>&rarr; {__}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
