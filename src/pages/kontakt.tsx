import {
  Button,
  Center,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Tooltip
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ChangeEvent, useCallback } from 'react'
import { InfoCircle } from 'tabler-icons-react'

import { Layout, Pod } from '../components'

interface Form {
  name: string
  email: string
  subject: string
  message: string
}

const Page = () => {
  const form = useForm<Form>({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: ''
    }
  })

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      form.setFieldValue(event.target.name, event.target.value)
    },
    [form]
  )

  const handleSubmit = useCallback(
    (values: typeof form.values) => {
      debugger
    },
    [form]
  )

  return (
    <Layout title='Kontakt'>
      <Pod>
        <Title>Kontakt</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <Group>
              <TextInput
                size='md'
                label='Name'
                placeholder='Wie ist dein Name?'
                name='name'
                value={form.values.name}
                onChange={handleChange}
              ></TextInput>
            </Group>
            <Group>
              <TextInput
                size='md'
                label='eMail'
                placeholder='Deine eMail Adresse'
                name='email'
                value={form.values.email}
                onChange={handleChange}
                rightSection={
                  <Tooltip
                    multiline
                    width={200}
                    label='Wir benötigen deine eMail Adresse um dir zu antworten'
                    position='top-start'
                    withArrow
                    transition='pop-bottom-left'
                    transitionDuration={500}
                  >
                    <Text color='dimmed' sx={{ cursor: 'help' }}>
                      <Center>
                        <InfoCircle size={18} />
                      </Center>
                    </Text>
                  </Tooltip>
                }
              ></TextInput>
            </Group>
            <Group>
              <TextInput
                size='md'
                label='Betreff'
                placeholder='Um was geht es?'
                name='subject'
                value={form.values.subject}
                onChange={handleChange}
              ></TextInput>
            </Group>
            <Group>
              <Textarea
                size='md'
                label='Nachricht'
                placeholder='Was möchtest du uns mitteilen?'
                name='message'
                value={form.values.message}
                onChange={handleChange}
              ></Textarea>
            </Group>
            <Group>
              <Button size='md' type='submit'>
                Senden
              </Button>
            </Group>
          </Stack>
        </form>
      </Pod>
    </Layout>
  )
}

export default Page
