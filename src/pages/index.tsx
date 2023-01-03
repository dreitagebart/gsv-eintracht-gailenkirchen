import { Box, Text, Title } from '@mantine/core'

import { Layout } from '../components'

const Page = () => {
  return (
    <Layout title='Startseite'>
      <Title>Startseite</Title>
      <Text>Ich möchte diesen Teppich nicht kaufen</Text>
      <Box
        sx={{
          backgroundImage: 'url(/svg/bass.svg)',
          backgroundRepeat: 'no-repeat',
          // backgroundSize: 500,
          backgroundPositionX: '102%'
        }}
      >
        <Title>Hallo</Title>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
        <Text>lskdjf öalsdkfj ösaldkfj</Text>
      </Box>
    </Layout>
  )
}

export default Page
