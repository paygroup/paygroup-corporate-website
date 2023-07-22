'use client';

import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Brand from './brand';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.section
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className='container flex items-center justify-between py-3'>
        <Brand />
        <NavContent />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        )}
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </motion.section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className='flex items-center gap-4 max-lg:hidden '>
        {nav.map((_) => (
          <li key={_.name}>
            <h3 className='relative capitalize hover:text-primary'>
              <Link href={_.href}>{_.name}</Link>
              {((path === '/' && _.name === 'home') ||
                (path.includes(_.href) && _.name !== 'home')) && (
                <motion.span
                  layoutId='underline'
                  className='block w-full h-0.5 rounded-full bg-gradient-to-r from-primary to-transparent'
                />
              )}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className='absolute inset-x-0 flex flex-col items-start px-8 py-10 bg-background lg:hidden'>
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.name}>
            <h3 className='capitalize'>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const nav = [
  { name: 'home', href: '/' },
  { name: 'Our Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];
