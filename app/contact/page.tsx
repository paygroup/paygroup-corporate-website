import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2'>
      <Image
        src={`/assets/images/contact/girl.png`}
        alt=''
        width={500}
        height={600}
      />
      <div>
        <Typography className='text-2xl md:text-4xl text-primary'>
          Contact Us
        </Typography>
        <div className='flex gap-3'>
          <div className='p-3 rounded-full bg-primary w-fit'>
            <Image
              src={`/assets/images/contact/phone.png`}
              alt=''
              width={50}
              height={50}
            />
          </div>
          <div>
            <Link href={'tel:+243-817110414'}>+243-817110414</Link> <br />
            <Link href={'tel:+353 83 045 6902'}>
              +353 83 045 6902
            </Link> <br />{' '}
            <Link href={'tel:+1 (240) 778-9955'}>+1 (240) 778-9955</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
