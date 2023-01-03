import { Container, MantineStyleSystemProps } from '@mantine/core'
import { FC } from 'react'

interface Props {
  mt?: MantineStyleSystemProps['mt']
  mb?: MantineStyleSystemProps['mb']
}

export const Pod: FC<Props> = ({ mt, mb }) => {
  return <Container size='xl' px='xl' mt={mt} mb={mb}></Container>
}
