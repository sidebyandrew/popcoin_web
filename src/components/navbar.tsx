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

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search... "
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  );

  return (
    <MagicProvider>
      <NextUINavbar maxWidth="xl" position="sticky">
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

            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Explore
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem
                  key="hosts"
                  description="Browse and follow up top hosts with customized notification"
                  startContent={<Microphone />}
                >
                  Hosts
                </DropdownItem>
                <DropdownItem
                  key="speakers"
                  description="Creators, pioneers, innovators, regulators, influencers and personalities"
                  startContent={<User2 />}
                >
                  Speakers
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="All the venues in the world, including historical evaluations and scoring"
                  startContent={<Building2 />}
                >
                  Venues
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="Sharing economy, including hotel sharing and so on"
                  startContent={<BankNotes />}
                >
                  Share 2 Earn
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Automatically generate cover images according to your prompts"
                  startContent={<Photo />}
                >
                  AIGC Cover Image
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <MagicConnect />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color="foreground" href={item.href} size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <MagicConnect />
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </MagicProvider>
  );
}
