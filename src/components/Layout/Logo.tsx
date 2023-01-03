import { Group, Stack, Text, Title } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const Logo: FC<Props> = () => {
  return (
    <Group>
      <Title order={1}>GSV</Title>
      <Stack spacing={0}>
        <Text>Eintracht</Text>
        <Text>Gailenkirchen e.&nbsp;V.</Text>
      </Stack>
    </Group>
  )
}
