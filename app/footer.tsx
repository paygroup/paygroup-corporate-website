import Brand from '@/components/ui/brand';
import Link from 'next/link';
import Social from './social';

export default function Footer() {
  return (
    <section className='bg-[#f3e8ff] text-neutral-800'>
      <div className='container flex flex-wrap justify-between gap-10 px-3 pt-20 pb-10 mt-32 '>
        <div className='space-y-4'>
          <Brand />
          <p className=' text-[14px] font-normal leading-snug'>
            A digital platform that enables social groups.
          </p>
          <Social />
        </div>
        {/* middle part */}
        <div className='grid grid-cols-1 capitalize md:grid-cols-2 '>
          {data.map((_) => (
            <Link key={_.label} href={_.href} className='hover:text-primary'>
              {_.label}
            </Link>
          ))}
        </div>
      </div>

      <p className='pt-4 pb-10 text-center'>
        © 2023 T-Cube Africa sarl. All rights reserved 
      </p>
    </section>
  );
}

const data = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'terms & condition of service',
    href: '/',
  },
  {
    label: 'about us',
    href: '/about',
  },

  {
    label: 'Confidentiality Policy ',
    href: '/',
  },
  {
    label: 'contact us',
    href: '/contact',
  },
  {
    label: 'FAQ',
    href: '/',
  },
];
