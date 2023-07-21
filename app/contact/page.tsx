import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='container grid grid-cols-1 gap-5 md:grid-cols-2'>
      <Image
        src={`/assets/images/contact/girl.png`}
        alt=''
        width={500}
        height={600}
      />
      <div className='flex flex-col justify-center gap-5'>
        <Typography className='text-2xl md:text-4xl text-primary'>
          Contact Us
        </Typography>
        <div className='flex items-center gap-3'>
          <div className='p-3 rounded-full bg-primary w-fit'>
            <Image
              src={`/assets/images/contact/phone.png`}
              alt=''
              className='object-contain w-8 aspect-square'
              width={40}
              height={40}
            />
          </div>
          <div>
            <Link className='hover:text-primary ' href={'tel:+243-817110414'}>
              +243-817110414
            </Link>{' '}
            <br />
            <Link className='hover:text-primary ' href={'tel:+353 83 045 6902'}>
              +353 83 045 6902
            </Link>{' '}
            <br />{' '}
            <Link
              className='hover:text-primary '
              href={'tel:+1 (240) 778-9955'}
            >
              +1 (240) 778-9955
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='p-3 rounded-full bg-primary w-fit'>
            <Image
              src={`/assets/images/contact/email.png`}
              alt=''
              className='object-contain w-8 aspect-square'
              width={40}
              height={40}
            />
          </div>
          <div>
            <Link href={'mailto:info@paygroup.app'}>info@paygroup.app </Link>{' '}
            <br />
          </div>
        </div>
      </div>
      <div></div>
      <div className='flex items-center gap-3'>
        <div className='p-3 rounded-full bg-primary w-fit'>
          <Image
            src={`/assets/images/contact/location.png`}
            alt=''
            className='object-contain w-8 aspect-square'
            width={50}
            height={50}
          />
        </div>
        <div className='[&>*]:hover:text-primary '>
          <p>Kinshasa Democratic Republic of Congo</p>
        </div>
      </div>
    </section>
  );
}
