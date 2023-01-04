import Link from 'next/link'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { createStyles, Group } from '@mantine/core'
import { FC } from 'react'
import { Code, Heart } from 'tabler-icons-react'

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
    height: 120
  },
  link: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: theme.colors.brand[6],
    ':hover': {
      color: theme.colors.brand[5]
    }
  },
  credits: {
    fontSize: 14
  },
  dreitagebart: {
    fontWeight: 'bold',
    // letterSpacing: 1,
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
      </Pod>
    </Box>
  )
}
