import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { data } from './data';

export default function Vision() {
  return (
    <div className='grid-cols-1 md:grid-cols-2 md:p-20'>
      {data.map((_, idx) => (
        <div
          key={_.label}
          className={cn(
            'grid items-center grid-cols-1 justify-items-center md:grid-cols-2'
          )}
        >
          <div className={cn('md:pr-10', { 'md:pl-10': idx })}>
            <Image src={_.icon} alt='' width={40} height={40} />
            <Typography
              lg
              className={cn('text-secondary mt-3 mb-6', {
                'text-primary': !idx,
              })}
            >
              {_.label}
            </Typography>
            <Typography>{_.text}</Typography>
          </div>
          <Image
            src={_.iamge}
            alt=''
            className={cn('object-cover w-full h-full', {
              'order-first': idx,
            })}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
