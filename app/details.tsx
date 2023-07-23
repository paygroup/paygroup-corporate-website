import { Typography } from '@/components/ui/typography';

export default function Details() {
  return (
    <section className='container py-10'>
      <Typography center lg className='text-primary '>
        With your friends & relatives
      </Typography>
      <div className='grid grid-cols-1 pt-5 md:grid-cols-2 gap-x-20'>
        <Typography>
          <span className='text-primary'>Collect and manage</span> contributions
          to do things together
        </Typography>{' '}
        <Typography>
          <span className='text-primary'>Support causes</span> that are dear to
          you{' '}
        </Typography>
        <div />
        <button className='px-4 py-2 mx-auto transition-all rounded-lg text-primary col-span-full ring-primary ring-1 hover:bg-primary/30 bg-primary/20 w-fit'>
          Download Now
        </button>
      </div>
    </section>
  );
}
