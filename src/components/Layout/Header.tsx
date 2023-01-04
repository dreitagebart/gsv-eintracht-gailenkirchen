import {
  Burger,
  createStyles,
  Drawer,
  Flex,
  Group,
  MediaQuery,
  Navbar,
  Stack,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { Logo } from './Logo'

interface Props {}

const menu: Array<Record<'label' | 'href', string>> = [
  {
    label: 'Startseite',
    href: '/'
  },
  {
    label: 'Termine',
    href: '/termine'
  },
  {
    label: 'Verein',
    href: '/verein'
  },
  {
    label: 'Bilder',
    href: '/bilder'
  },
  {
    label: 'Kontakt',
    href: '/kontakt'
  }
]

const subMenu: Array<Record<'label' | 'href', string>> = [
  {
    label: 'Mitglied werden',
    href: '/mitglied'
  },
  {
    label: 'Impressum',
    href: '/impressum'
  }
]

const useStyles = createStyles((theme) => ({
  menuLink: {
    transition: 'all 300ms ease-out',
    borderRadius: 8,
    letterSpacing: 1,
    fontWeight: 600,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    color: theme.colors.brand[7],
    ':hover': {
      color: theme.colors.brand[6]
    }
  },
  subMenuLink: {
    transition: 'all 300ms ease-out',
    borderRadius: 8,
    letterSpacing: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    color: theme.colors.brand[8],
    ':hover': {
      color: theme.colors.brand[6]
    }
  },
  activeMenuLink: {
    color: theme.colors.gray[0],
    backgroundColor: theme.colors.brand[6],
    ':hover': {
      color: theme.colors.gray[1]
    }
  }
}))

export const Header: FC<Props> = () => {
  const router = useRouter()
  const { classes, cx, theme } = useStyles()
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Menü schließen' : 'Menü öffnen'

  return (
    <Group position='apart' mb='xl'>
      <Group pl='md' pt='md'>
        <Logo></Logo>
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Group spacing='md' ml='xl'>
            {menu.map(({ label, href }) => {
              return (
                <UnstyledButton
                  component={Link}
                  key={href}
                  href={href}
                  className={cx(classes.menuLink, {
                    [classes.activeMenuLink]: router.asPath === href
                  })}
                >
                  {label}
                </UnstyledButton>
              )
            })}
          </Group>
        </MediaQuery>
      </Group>
      <MediaQuery largerThan='md' styles={{ display: 'none' }}>
        <Flex direction='row' justify='flex-end' px='md'>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            title={title}
          ></Burger>
        </Flex>
      </MediaQuery>
      <Drawer
        withCloseButton={false}
        withinPortal
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.75}
        overlayBlur={2}
        opened={opened}
        onClose={() => setOpened(false)}
        position='right'
      >
        <Navbar>
          <Navbar.Section grow>
            <Flex direction='row' justify='flex-end' p='md'>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                title={title}
              ></Burger>
            </Flex>
            <Stack px='lg'>
              {menu.map(({ label, href }) => {
                return (
                  <UnstyledButton
                    component={Link}
                    key={href}
                    href={href}
                    className={cx(classes.menuLink, {
                      [classes.activeMenuLink]: router.asPath === href
                    })}
                  >
                    {label}
                  </UnstyledButton>
                )
              })}
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack px='lg' mb='lg'>
              {subMenu.map(({ label, href }) => {
                return (
                  <UnstyledButton
                    component={Link}
                    key={href}
                    href={href}
                    className={cx(classes.subMenuLink, {
                      [classes.activeMenuLink]: router.asPath === href
                    })}
                  >
                    {label}
                  </UnstyledButton>
                )
              })}
            </Stack>
          </Navbar.Section>
        </Navbar>
      </Drawer>
    </Group>
  )
}
