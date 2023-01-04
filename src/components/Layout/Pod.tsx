import { Container, MantineStyleSystemProps } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  mt?: MantineStyleSystemProps['mt']
  mb?: MantineStyleSystemProps['mb']
  children: ReactNode
}

export const Pod: FC<Props> = ({ mt, mb, children }) => {
  return (
    <Container size='xl' px='xl' mt={mt} mb={mb}>
      {children}
    </Container>
  )
}
