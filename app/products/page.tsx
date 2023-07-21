import { Typography } from '@/components/ui/typography';
import HowTo from './how-to';

export default function Page() {
  return (
    <main>
      <section className='container py-20'>
        <Typography center lg className='text-primary '>
          <span className='text-3xl md:text-5xl'>PAYGROUP</span> enables you to
        </Typography>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20%] pt-20'>
          <Typography>
            <span className='text-primary'>Create or Join</span> a paygroup (to
            pool money with your friends & contacts)
          </Typography>
          <div />
          <div />
          <Typography>
            <span className='text-primary'> Select and Join</span> a public
            campaign (to support a cause)
          </Typography>
          <Typography className='italic text-center text-primary col-span-full'>
            Simple ■ Transparent ■ Versatile ■ Secure{' '}
          </Typography>
        </div>
      </section>
      <HowTo />
    </main>
  );
}
