import { Typography } from '@/components/ui/typography';
import { culture } from './data';

export default function Cultures() {
  return (
    <section className='pt-20'>
      <Typography center lg className='text-primary '>
        Our Core Values & Culture
      </Typography>
      <div className='grid grid-cols-1 gap-5 pt-20 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
        {culture.map((_) => (
          <div
            key={_.label}
            className='w-full p-1 ring-1 ring-secondary/20 group bg-background'
          >
            <div className='py-6 mt-10 text-center bg-primary text-background group-even:bg-secondary'>
              {_.label}
            </div>
            <p className='p-4 min-h-[20rem] text-justify'>{_.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
