import Link from 'next/link'
import { ActionIcon, Box, Text, Tooltip, UnstyledButton } from '@mantine/core'
import { createStyles, Group } from '@mantine/core'
import { FC } from 'react'
import { BrandFacebook, BrandInstagram, Code, Heart } from 'tabler-icons-react'

import { Pod } from './Pod'

interface Props {}

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colors.gray[0],
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    backgroundColor: theme.colors.brand[9],
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: 180
    }
  },
  link: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: theme.colors.brand[6],
    ':hover': {
      color: theme.colors.brand[5]
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 14
    }
  },
  credits: {
    fontSize: 14
  },
  dreitagebart: {
    fontWeight: 'bold',
    color: theme.colors.brand[6],
    ':hover': {
      color: theme.colors.brand[5]
    }
  }
}))

export const Footer: FC<Props> = () => {
  const { classes, theme } = useStyles()

  return (
    <Box className={classes.root}>
      <Pod>
        <Group position='apart'>
          <Group>
            <UnstyledButton
              className={classes.link}
              component={Link}
              href='/mitglied'
            >
              Mitglied werden
            </UnstyledButton>
            <UnstyledButton
              className={classes.link}
              component={Link}
              href='/impressum'
            >
              Impressum
            </UnstyledButton>
            <UnstyledButton
              className={classes.link}
              component={Link}
              href='/datenschutz'
            >
              Datenschutz
            </UnstyledButton>
          </Group>
          <Group spacing={6} className={classes.credits}>
            <Code></Code>
            <Text>with</Text>
            <Heart color={theme.colors.red[6]}></Heart>
            <Text>by</Text>
            <a
              href='https://dreitagebart.io'
              target='_blank'
              rel='noreferrer'
              className={classes.dreitagebart}
            >
              dreitagebart
            </a>
          </Group>
        </Group>
        <Group mt='md' spacing='md'>
          <Tooltip label='Facebook'>
            <ActionIcon
              variant='transparent'
              component='a'
              href='https://www.facebook.com/profile.php?id=100072472573703'
              target='_blank'
              rel='noreferrer'
            >
              <BrandFacebook
                color={theme.colors.brand[1]}
                size={28}
              ></BrandFacebook>
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Instagram'>
            <ActionIcon
              variant='transparent'
              component='a'
              href='https://www.instagram.com/gsvgailenkirchen/'
              target='_blank'
              rel='noreferrer'
            >
              <BrandInstagram
                color={theme.colors.brand[1]}
                size={28}
              ></BrandInstagram>
            </ActionIcon>
          </Tooltip>
        </Group>
      </Pod>
    </Box>
  )
}
