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
            className='relative w-full p-1 ring-1 ring-secondary/20 group bg-background'
          >
            <div className='py-6 mt-10 text-center bg-primary text-background group-even:bg-secondary'>
              {_.label}
            </div>
            <p className='p-4 min-h-[20rem] text-justify'>{_.desc}</p>
            {/* clip */}
            <div className='[clip-path:polygon(100%_0,_0_0,_100%_100%);] bg-primary/30 w-10 h-10 absolute top-8 -left-10'></div>
          </div>
        ))}
      </div>
    </section>
  );
}
