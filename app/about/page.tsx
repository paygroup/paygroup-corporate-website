import { Typography } from '@/components/ui/typography';
import { data } from './data';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Team from './team';
import Cultures from './cultures';
import Vision from './vision';

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
      <Vision />
      <Team />
      <Cultures />
    </section>
  );
}
