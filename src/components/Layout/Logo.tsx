import Link from 'next/link'
import { Group, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const Logo: FC<Props> = () => {
  return (
    <Link href='/' passHref>
      <UnstyledButton>
        <Group spacing={8} sx={{ userSelect: 'none' }}>
          <Title order={1} tt='uppercase' size={54} variant='gradient'>
            GSV
          </Title>
          <Stack spacing={0}>
            <Text tt='uppercase' color='dimmed' size={12} lts={2}>
              Eintracht
            </Text>
            <Text size={18}>Gailenkirchen e.&nbsp;V.</Text>
          </Stack>
        </Group>
      </UnstyledButton>
    </Link>
  )
}
