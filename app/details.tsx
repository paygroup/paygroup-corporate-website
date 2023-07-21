import { Typography } from '@/components/ui/typography';

export default function Details() {
  return (
    <section>
      <Typography center lg className='text-primary'>
        With your friends & relatives
      </Typography>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Typography>
          <span className='text-primary'>Collect and manage</span> contributions
          to do things together
        </Typography>{' '}
        <div />
        <div />
        <Typography>Support causes that are dear to you </Typography>
      </div>
    </section>
  );
}
