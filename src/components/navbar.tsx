'use client';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';

import I18NSwitch from '@/components/i18n-switch';
import {
  BankNotes,
  Building2,
  DebanLetterLogo,
  DebanLogo,
  Microphone,
  Photo,
  SearchIcon,
  User2,
} from '@/components/icons';
import { MagicConnect } from '@/components/magic/MagicConnect';
import MagicProvider from '@/components/magic/MagicProvider';
import { ThemeSwitch } from '@/components/theme-switch';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import {
  Activity,
  Camera,
  ChevronDown,
  Flash,
  Scale,
  Server,
  TagUser,
} from '@nextui-org/shared-icons';

export default function TheNavbar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,

    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    camera: <Camera className="text-danger" fill="currentColor" size={30} />,
  };


  return (
      <NextUINavbar maxWidth="xl" position="static">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <DebanLogo />
            <DebanLetterLogo />
          </NextLink>
        </NavbarBrand>

        {/* Menu Start */}
        <div className="hidden gap-4 sm:flex">
          <NavbarContent className="hidden gap-4 sm:flex" justify="end">
            <NavbarItem>
              <Link color="foreground" href="/events">
                Events
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#">
                Calendars
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/spaces">
                Spaces
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
        {/* Menu End */}

        <NavbarContent
          className="hidden basis-1/5 sm:flex sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden gap-2 sm:flex">
            <ThemeSwitch />
            <I18NSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <MagicConnect />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

      </NextUINavbar>
  );
}
