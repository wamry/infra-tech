import { yupResolver } from '@hookform/resolvers/yup'
import { Col, Container, ContentContainer, Form, FormLabel, Logo, Row } from './styles'
import { Button, IconName, TextInput } from '@components'
import { SignUpFormSchema, signUpSchema } from './form'
import { useForm, Controller } from 'react-hook-form'
import { api, endpoints } from '@api'
import { AxiosError } from 'axios'
import { useSocket } from '@hooks'
import { UsersTable } from './UsersTable'
import { useTranslation } from 'react-i18next'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const inputIconName = {
  firstName: 'faUser',
  lastName: 'faUser',
  email: 'faAt',
  password: 'faKey',
}

export const SignUpPage = () => {
  const { userList } = useSocket()
  const { t } = useTranslation()
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<SignUpFormSchema>({
    defaultValues,
    resolver: yupResolver(signUpSchema),
  })

  const handleSubmitForm = handleSubmit(async (payload, e) => {
    e?.preventDefault()
    try {
      await api.request({ ...endpoints.signup, data: payload })
      reset(defaultValues)
    } catch (error) {
      console.error(error as AxiosError)
    }
  })

  const renderInput = (key: keyof SignUpFormSchema) => (
    <Controller
      control={control}
      name={key}
      render={({ field: { onBlur, onChange, value } }) => (
        <TextInput
          value={value}
          iconName={inputIconName[key] as IconName}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={t(key)}
          errorMessage={errors[key]?.message}
        />
      )}
    />
  )

  return (
    <Container>
      <ContentContainer>
        <Form onSubmit={handleSubmitForm}>
          <Logo src='/assets/images/gmail.png' alt='Gmail logo' />
          <FormLabel>Sign up</FormLabel>
          <Row>
            <Col>{renderInput('firstName')}</Col>
            <Col>{renderInput('lastName')}</Col>
          </Row>
          <Row>
            <Col>{renderInput('email')}</Col>
          </Row>
          <Row>
            <Col>{renderInput('password')}</Col>
          </Row>
          <Row>
            <Button label={'Sign up'} type='submit' />
          </Row>
        </Form>
      </ContentContainer>
      <UsersTable list={userList} />
    </Container>
  )
}
