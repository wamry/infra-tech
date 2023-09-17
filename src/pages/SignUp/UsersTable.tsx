import { useTranslation } from 'react-i18next'
import { Table, UsersListContainer } from './styles'

type Props = {
  list: {
    id: string
    firstName: string
    lastName: string
    email: string
    createdAt: string
  }[]
}

export const UsersTable = ({ list }: Props) => {
  const { t } = useTranslation()
  if (!list.length) return null
  return (
    <UsersListContainer>
      <Table>
        <tbody>
          <tr>
            <td>{t('createdAt')}</td>
            <td>{t('firstName')}</td>
            <td>{t('lastName')}</td>
            <td>{t('email')}</td>
          </tr>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UsersListContainer>
  )
}
