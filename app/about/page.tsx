import { Typography } from '@/components/ui/typography';
import { data } from './data';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <section className='container py-20 text-black'>
      <Typography>
        <span className='text-primary'>PayGroup</span> is a product developed by
        T-Cube Africa s.a.r.l., a company registered in the Democratic Republic
        of Congo under RCCM: CD/KNG/RCCM/18-B-01435, National Identification:
        ID-NAT 01-83-N37918B.{' '}
      </Typography>
      <br />
      <Typography>
        It was founded in 2018 by Esenda Obey, Constant Kabwasa Jr. and Raoul
        Onyambuhuto.
      </Typography>
      <div className='grid-cols-1 md:grid-cols-2'>
        {data.map((_, idx) => (
          <div key={_.label} className='grid grid-cols-1 md:grid-cols-2'>
            <div>
              <Image src={_.icon} alt='' width={40} height={40} />
              <Typography
                className={cn('text-secondary', { 'text-primary': !idx })}
              >
                {_.label}
              </Typography>
              <Typography sm>{_.text}</Typography>
            </div>
            <Image src={_.iamge} alt='' width={500} height={500} />
          </div>
        ))}
      </div>
    </section>
  );
}
