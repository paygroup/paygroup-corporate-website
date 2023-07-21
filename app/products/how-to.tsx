import { Typography } from '@/components/ui/typography';
import Image from 'next/image';

export default function HowTo() {
  return (
    <section className='container py-20'>
      <Typography center lg className='text-primary '>
        HOW TO USE PAYGROUP
      </Typography>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10%] pt-20'>
        {data.map((_) => (
          <div key={_.text}>
            <Image src={_.image} alt='' width={100} height={100} />
          </div>
        ))}
      </div>
    </section>
  );
}
const data = [
  {
    text: 'Download mobile app Create your account',
    image: '/public/assets/images/product-page/1.png',
  },
  {
    text: 'Search for available public campaigns',
    image: '/public/assets/images/product-page/1.png',
  },
  {
    text: 'Select a campaign you want to support OR Create your own paygroup ',
    image: '/public/assets/images/product-page/1.png',
  },
];
