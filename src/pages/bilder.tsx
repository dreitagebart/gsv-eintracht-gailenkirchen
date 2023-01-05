import { Carousel } from '@mantine/carousel'
import { Center, createStyles, Title } from '@mantine/core'

import { Layout } from '../components'

const useStyles = createStyles((theme) => ({
  slider: {
    backgroundColor: theme.colors.brand[7],
    color: theme.colors.gray[0]
  }
}))

const Page = () => {
  const { classes } = useStyles()

  return (
    <Layout title='Bilder'>
      <Carousel
        className={classes.slider}
        withIndicators
        height={400}
        slideGap='md'
        loop
        align='start'
      >
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>Ouh,</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>hey...</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>das</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>wusste</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>ich</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>nicht!</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>Das ist,...</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>so etwas</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>würde ich</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>nie</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>in meinem</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>Leben</Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h={400}>
            <Title order={4}>tun!</Title>
          </Center>
        </Carousel.Slide>
      </Carousel>
    </Layout>
  )
}

export default Page
