import { Typography } from '@/components/ui/typography';
import { culture } from './data';

export default function Cultures() {
  return (
    <section className='pt-20'>
      <Typography center lg className='text-primary '>
        Our Core Values & Culture
      </Typography>
      <div className='grid grid-cols-1 pt-20 gap-14 md:grid-cols-2 justify-items-center lg:grid-cols-3'>
        {culture.map((_) => (
          <div
            key={_.label}
            className='relative w-full p-1 ring-1 group ring-secondary/20 bg-background'
          >
            <div className='py-6 mt-10 text-center bg-primary text-background group-even:bg-secondary'>
              {_.label}
            </div>
            <p className='p-4 min-h-[20rem] text-justify'>{_.desc}</p>
            {/* clip */}
            <div className='[clip-path:polygon(100%_0,_0_0,_100%_100%);] bg-primary/30 group-even:bg-secondary/30 w-10 h-10 absolute top-8 -left-10'></div>
            <div className='[clip-path:polygon(50%_0,_100%_1%,_100%_100%,_0%_100%);] bg-primary group-even:bg-secondary w-32 h-16 absolute -top-8 -left-10'></div>
            <div className='absolute w-20 h-20 border-4 border-white rounded-full group-even:bg-secondary group-even:ring-secondary bg-primary -top-10 left-16 ring-1 ring-primary'></div>
          </div>
        ))}
      </div>
    </section>
  );
}
