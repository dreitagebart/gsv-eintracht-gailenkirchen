import Link from 'next/link'
import {
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const Logo: FC<Props> = () => {
  const theme = useMantineTheme()

  return (
    <>
      <Link href='/' passHref>
        <UnstyledButton>
          <Group
            spacing={8}
            sx={{
              userSelect: 'none'
            }}
          >
            <Title
              tt='uppercase'
              variant='gradient'
              sx={{
                lineHeight: '54px',
                // marginBlockStart: 0,
                // marginBlockEnd: 0,
                fontSize: 64,
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  marginTop: 4,
                  fontSize: 54
                },
                [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                  fontSize: 44
                }
              }}
            >
              GSV
            </Title>
            <Stack spacing={0}>
              <Text tt='uppercase' color='dimmed' size={12} lts={2}>
                Eintracht
              </Text>
              <Text
                sx={{
                  fontSize: 18,
                  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                    fontSize: 16
                  },
                  [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                    fontSize: 14
                  }
                }}
              >
                Gailenkirchen e.&nbsp;V.
              </Text>
            </Stack>
          </Group>
        </UnstyledButton>
      </Link>
    </>
  )
}
