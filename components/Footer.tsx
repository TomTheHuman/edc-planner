import React from 'react';

// External Imports
import { useRouter } from 'next/router';
import {
  Favorite, Home, Info, People,
} from '@mui/icons-material';
import Link from 'next/link';

// Internal Imports
import sx from '../styles/components/Footer.module.scss';

const links = [
  {
    path: '/',
    Icon: Home,
  },
  {
    path: '/lineup',
    Icon: Favorite,
  },
  {
    path: '/friends',
    Icon: People,
  },
  {
    path: '/info',
    Icon: Info,
  },
];

export default function Footer(): JSX.Element {
  const router = useRouter();

  const isActive = (path: string): boolean => (path === router.pathname);

  const renderIcon = (Icon: any, active: boolean) => (
    <Icon color={active ? 'secondary' : 'primary'} fontSize="medium" />
  );

  return (
    <div className={sx.root}>
      {
        links.map((link) => (
          <Link key={link.path} href={link.path}>
            {renderIcon(link.Icon, isActive(link.path))}
          </Link>
        ))
      }
    </div>
  );
}
