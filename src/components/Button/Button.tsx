import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button(props: Props) {
  return <Container {...props}>{props.label}</Container>
}
