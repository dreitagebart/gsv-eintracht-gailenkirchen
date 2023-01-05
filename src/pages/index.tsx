import {
  Box,
  Button,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme
} from '@mantine/core'
import Link from 'next/link'

import { Layout, Pod } from '../components'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.brand[9],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(250deg, rgba(0, 26, 15, 0) 0%, rgba(0, 26, 15, 0.8) 40%), url('/david-beale-gOsGgt4olNs-unsplash.jpg')`,
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3
  },
  title: {
    color: theme.colors.gray[0],
    fontSize: 60
    // lineHeight: 2
  },
  content: {
    maxWidth: '60rem',
    fontSize: 24,
    color: theme.colors.gray[2]
  }
}))

const Page = () => {
  const { classes, theme } = useStyles()

  return (
    <Layout title='Startseite'>
      <Box className={classes.root}>
        <Pod>
          <Title className={classes.title}>
            <>
              Mit{' '}
              <Text
                inherit
                component='span'
                variant='gradient'
                gradient={{
                  from: theme.colors.brand[2],
                  to: theme.colors.brand[7]
                }}
              >
                Freude
              </Text>{' '}
              &amp;{' '}
              <Text
                inherit
                component='span'
                variant='gradient'
                gradient={{
                  from: theme.colors.brand[7],
                  to: theme.colors.brand[4]
                }}
              >
                Gesang
              </Text>{' '}
              voran
            </>
          </Title>
          <Stack className={classes.content}>
            <Text lh={1.4}>
              Wie schön, dass du auf unsere Seite gefunden hast. Dürfen wir uns
              vorstellen? Wir sind der Gesangsverein Eintracht Gailenkirchen.
            </Text>
            <Text lh={1.4}>
              Wenn du mehr über uns erfahren möchtest, dann halt einfach mal
              deine Fresse du Spaßdard, denn wir beißen nicht...
            </Text>
            <Link href='/verein'>
              <Button variant='filled' size='xl'>
                mehr erfahren
              </Button>
            </Link>
          </Stack>
        </Pod>
      </Box>
      <Pod mt='xl'>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          cursus mattis molestie a. Vivamus arcu felis bibendum ut tristique et
          egestas. Lacus sed viverra tellus in hac habitasse platea dictumst
          vestibulum. Nibh praesent tristique magna sit amet purus gravida.
          Fermentum et sollicitudin ac orci. Egestas maecenas pharetra convallis
          posuere morbi leo. Ullamcorper sit amet risus nullam. Id porta nibh
          venenatis cras sed felis eget velit aliquet. Sed faucibus turpis in eu
          mi bibendum. Amet consectetur adipiscing elit pellentesque habitant
          morbi tristique senectus et. Diam donec adipiscing tristique risus nec
          feugiat in fermentum. Pellentesque sit amet porttitor eget dolor morbi
          non arcu risus. Blandit aliquam etiam erat velit scelerisque in dictum
          non. Ipsum consequat nisl vel pretium lectus quam id. Turpis tincidunt
          id aliquet risus feugiat in ante. Augue neque gravida in fermentum et
          sollicitudin ac orci phasellus. Lobortis scelerisque fermentum dui
          faucibus in ornare quam viverra orci.
        </Text>
        <Text>
          Velit ut tortor pretium viverra suspendisse potenti. Elit sed
          vulputate mi sit. Feugiat in fermentum posuere urna nec. Cras
          tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque
          sit amet porttitor eget dolor morbi. Eget sit amet tellus cras
          adipiscing enim. Sem et tortor consequat id porta nibh venenatis.
          Pharetra et ultrices neque ornare aenean euismod elementum nisi.
          Tellus mauris a diam maecenas sed enim ut sem. Felis eget nunc
          lobortis mattis aliquam faucibus purus. Consequat interdum varius sit
          amet. Tempor orci eu lobortis elementum nibh tellus. Quis lectus nulla
          at volutpat diam ut venenatis tellus in. Consequat semper viverra nam
          libero. Nisi quis eleifend quam adipiscing vitae. Praesent elementum
          facilisis leo vel. Aenean sed adipiscing diam donec adipiscing
          tristique risus nec feugiat. Mauris nunc congue nisi vitae suscipit
          tellus mauris. Maecenas pharetra convallis posuere morbi leo urna
          molestie at.
        </Text>
        <Text>
          Faucibus turpis in eu mi bibendum neque egestas. Risus ultricies
          tristique nulla aliquet enim tortor at auctor. Molestie nunc non
          blandit massa. Mi ipsum faucibus vitae aliquet. Eu nisl nunc mi ipsum
          faucibus vitae aliquet. Convallis aenean et tortor at. Augue eget arcu
          dictum varius duis at consectetur lorem. Sit amet mauris commodo quis
          imperdiet massa tincidunt nunc pulvinar. Et ligula ullamcorper
          malesuada proin libero. Adipiscing commodo elit at imperdiet dui
          accumsan sit amet. Quisque egestas diam in arcu cursus euismod quis
          viverra. Non odio euismod lacinia at quis risus sed vulputate.
          Accumsan sit amet nulla facilisi morbi tempus. Magna etiam tempor orci
          eu lobortis elementum nibh. At tellus at urna condimentum mattis
          pellentesque id nibh. Luctus accumsan tortor posuere ac ut consequat.
          Nunc sed augue lacus viverra vitae congue. Velit sed ullamcorper morbi
          tincidunt ornare massa eget.
        </Text>
        <Text>
          Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
          nec. Tortor condimentum lacinia quis vel eros donec ac odio tempor. A
          condimentum vitae sapien pellentesque. Massa placerat duis ultricies
          lacus sed. Nulla aliquet porttitor lacus luctus accumsan tortor
          posuere. Diam ut venenatis tellus in metus vulputate eu scelerisque.
          Mattis enim ut tellus elementum sagittis vitae et leo. Praesent
          elementum facilisis leo vel fringilla est ullamcorper. Mi sit amet
          mauris commodo quis imperdiet massa tincidunt nunc. Amet tellus cras
          adipiscing enim eu turpis egestas pretium. Vestibulum sed arcu non
          odio euismod. Curabitur gravida arcu ac tortor dignissim convallis
          aenean et. Justo laoreet sit amet cursus. Consequat id porta nibh
          venenatis cras. Posuere lorem ipsum dolor sit amet. Sit amet massa
          vitae tortor. Commodo nulla facilisi nullam vehicula ipsum a. Sagittis
          purus sit amet volutpat consequat mauris nunc congue nisi. Facilisis
          volutpat est velit egestas dui.
        </Text>
        <Text>
          Sagittis orci a scelerisque purus semper. Pretium quam vulputate
          dignissim suspendisse. Orci eu lobortis elementum nibh tellus molestie
          nunc non blandit. Mattis rhoncus urna neque viverra justo nec ultrices
          dui sapien. Interdum velit euismod in pellentesque massa placerat duis
          ultricies. Sit amet volutpat consequat mauris nunc congue. Massa
          ultricies mi quis hendrerit dolor magna eget. Lacinia quis vel eros
          donec ac odio tempor. Montes nascetur ridiculus mus mauris vitae.
          Facilisis volutpat est velit egestas dui id ornare.
        </Text>
        <Text>
          Sit amet luctus venenatis lectus magna fringilla urna. Donec pretium
          vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae
          aliquet nec ullamcorper sit amet risus nullam eget felis. Sed egestas
          egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium. Congue mauris rhoncus aenean vel elit scelerisque mauris.
          Lacus vestibulum sed arcu non odio. Phasellus faucibus scelerisque
          eleifend donec. Ornare arcu dui vivamus arcu felis bibendum ut. Cras
          tincidunt lobortis feugiat vivamus at augue eget arcu. Vitae elementum
          curabitur vitae nunc.
        </Text>
        <Text>
          Integer vitae justo eget magna fermentum iaculis. In nisl nisi
          scelerisque eu ultrices. Lacinia at quis risus sed vulputate odio ut
          enim blandit. Elementum nibh tellus molestie nunc non blandit massa.
          Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.
          Amet dictum sit amet justo donec enim diam. Aliquam sem fringilla ut
          morbi tincidunt. Vestibulum mattis ullamcorper velit sed ullamcorper
          morbi tincidunt ornare massa. Mi bibendum neque egestas congue quisque
          egestas. Velit laoreet id donec ultrices tincidunt. Tempus urna et
          pharetra pharetra massa massa ultricies. Sit amet commodo nulla
          facilisi nullam vehicula ipsum. Neque egestas congue quisque egestas
          diam. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet
          non. Tortor dignissim convallis aenean et tortor at risus. Lectus arcu
          bibendum at varius vel pharetra vel. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor.
        </Text>
        <Text>
          Et molestie ac feugiat sed lectus vestibulum. Sit amet volutpat
          consequat mauris nunc congue nisi. Augue lacus viverra vitae congue
          eu. Nam aliquam sem et tortor. Mattis aliquam faucibus purus in.
          Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.
          Suspendisse potenti nullam ac tortor vitae purus. Dis parturient
          montes nascetur ridiculus. Lectus nulla at volutpat diam ut venenatis
          tellus. Mauris pharetra et ultrices neque ornare aenean euismod
          elementum nisi. Tellus pellentesque eu tincidunt tortor aliquam nulla
          facilisi cras. Morbi tincidunt augue interdum velit euismod in
          pellentesque massa. Mauris in aliquam sem fringilla ut morbi tincidunt
          augue.
        </Text>
        <Text>
          Scelerisque eu ultrices vitae auctor. Adipiscing bibendum est
          ultricies integer. Vulputate mi sit amet mauris commodo. Sollicitudin
          ac orci phasellus egestas tellus rutrum tellus pellentesque. Elit ut
          aliquam purus sit amet. Turpis in eu mi bibendum neque. Aliquam
          faucibus purus in massa tempor nec feugiat nisl pretium. Lorem dolor
          sed viverra ipsum nunc aliquet bibendum enim. Nisl condimentum id
          venenatis a condimentum vitae sapien pellentesque. Tincidunt praesent
          semper feugiat nibh sed pulvinar. Mauris ultrices eros in cursus
          turpis massa tincidunt. Commodo nulla facilisi nullam vehicula ipsum a
          arcu. Eu mi bibendum neque egestas.
        </Text>
        <Text>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. At erat pellentesque adipiscing commodo. Orci sagittis eu volutpat
          odio facilisis mauris sit amet massa. Nunc eget lorem dolor sed
          viverra ipsum nunc. Massa placerat duis ultricies lacus sed turpis
          tincidunt id. Cursus sit amet dictum sit amet justo donec enim diam.
          Sed ullamcorper morbi tincidunt ornare. Molestie a iaculis at erat.
          Hac habitasse platea dictumst quisque sagittis purus sit. Egestas
          integer eget aliquet nibh praesent. Cras ornare arcu dui vivamus. A
          erat nam at lectus urna duis convallis convallis. In pellentesque
          massa placerat duis ultricies lacus sed turpis.
        </Text>
        <Text>
          Et netus et malesuada fames ac turpis. Egestas tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam. Nunc sed augue lacus viverra
          vitae congue eu. At auctor urna nunc id cursus metus aliquam. Faucibus
          interdum posuere lorem ipsum dolor sit amet. Risus quis varius quam
          quisque id diam vel quam elementum. Purus semper eget duis at.
          Imperdiet sed euismod nisi porta lorem mollis aliquam. Pellentesque
          habitant morbi tristique senectus et netus. Sit amet justo donec enim
          diam. Venenatis urna cursus eget nunc scelerisque viverra.
        </Text>
        <Text>
          Quam id leo in vitae turpis. Sed vulputate mi sit amet mauris commodo
          quis imperdiet massa. Cursus sit amet dictum sit amet justo donec enim
          diam. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Sit
          amet volutpat consequat mauris nunc. Semper risus in hendrerit
          gravida. Quam lacus suspendisse faucibus interdum posuere lorem ipsum
          dolor. Convallis posuere morbi leo urna molestie. Ornare quam viverra
          orci sagittis eu volutpat odio facilisis. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique. Libero id
          faucibus nisl tincidunt eget nullam. Ullamcorper eget nulla facilisi
          etiam dignissim. Sed vulputate mi sit amet mauris commodo quis
          imperdiet massa. Odio ut sem nulla pharetra diam sit amet. Non blandit
          massa enim nec dui nunc mattis enim.
        </Text>
        <Text>
          Leo integer malesuada nunc vel risus. Interdum varius sit amet mattis.
          Tincidunt id aliquet risus feugiat in ante metus. Tempor id eu nisl
          nunc mi ipsum faucibus vitae. Consequat semper viverra nam libero
          justo. Elementum tempus egestas sed sed risus pretium quam vulputate.
          Gravida quis blandit turpis cursus in. Viverra orci sagittis eu
          volutpat odio facilisis mauris. Nunc vel risus commodo viverra
          maecenas. Tellus molestie nunc non blandit massa enim. Pulvinar sapien
          et ligula ullamcorper malesuada proin libero nunc. Sed viverra tellus
          in hac habitasse platea dictumst. Amet est placerat in egestas erat
          imperdiet. Habitant morbi tristique senectus et netus et malesuada
          fames. Aenean et tortor at risus viverra adipiscing at. Netus et
          malesuada fames ac turpis egestas. Sit amet massa vitae tortor
          condimentum lacinia quis. Sed viverra ipsum nunc aliquet bibendum.
          Cursus metus aliquam eleifend mi. Tellus orci ac auctor augue mauris
          augue neque gravida.
        </Text>
        <Text>
          Diam vulputate ut pharetra sit amet aliquam id. Et netus et malesuada
          fames ac turpis. Lobortis elementum nibh tellus molestie nunc non
          blandit massa enim. Elit eget gravida cum sociis natoque. Enim
          praesent elementum facilisis leo vel fringilla. Ut placerat orci nulla
          pellentesque. Tempor id eu nisl nunc. Diam phasellus vestibulum lorem
          sed risus ultricies tristique nulla. Vitae semper quis lectus nulla at
          volutpat diam. Odio ut enim blandit volutpat maecenas volutpat blandit
          aliquam etiam. Nisi lacus sed viverra tellus in.
        </Text>
        <Text>
          Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Nullam
          eget felis eget nunc lobortis mattis aliquam. Odio facilisis mauris
          sit amet massa vitae tortor condimentum lacinia. Ultrices eros in
          cursus turpis massa tincidunt. Semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus a. Vehicula ipsum a arcu cursus vitae congue
          mauris rhoncus aenean. Odio eu feugiat pretium nibh. Rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla. Lorem dolor sed
          viverra ipsum. Sollicitudin ac orci phasellus egestas tellus rutrum
          tellus pellentesque eu. At auctor urna nunc id cursus.
        </Text>
      </Pod>
    </Layout>
  )
}

export default Page
