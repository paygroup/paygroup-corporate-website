import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { HtmlHTMLAttributes } from 'react';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      <Image
        src={'/assets/images/logo.png'}
        alt='logo'
        width={150}
        height={100}
      />
    </Link>
  );
}
