import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='container flex flex-wrap justify-between gap-10 px-3 py-10 mt-32'>
      <div className='space-y-4'>
        <Brand />
        <p className='text-neutral-800 text-[14px] font-normal leading-snug'>
          A digital platform that enables social groups.
        </p>
      </div>
      {/* middle part */}
    </section>
  );
}

const data = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'about us',
    href: '/about',
  },
  {
    label: 'contact us',
    href: '/contact',
  },
  {
    label: 'terms & condition of service',
    href: '/',
  },
  {
    label: 'Confidentiality Policy ',
    href: '/',
  },
  {
    label: 'FAQ',
    href: '/',
  },
];
