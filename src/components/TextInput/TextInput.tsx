import { InputHTMLAttributes, useState } from 'react'
import { Container, ErrorText, Input, inputIconStyles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faKey, faUser, faCheck } from '@fortawesome/free-solid-svg-icons'

export const iconNames = {
  faAt,
  faUser,
  faKey,
  faCheck,
}
export type IconName = keyof typeof iconNames

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconName: keyof typeof iconNames
  errorMessage?: string
  hasError?: boolean
}

export function TextInput({
  errorMessage,
  className,
  iconName,
  onFocus,
  onBlur,
  ...otherProps
}: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const hasError = !!errorMessage

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  return (
    <>
      <Container className={className}>
        {iconName && (
          <FontAwesomeIcon
            icon={iconNames[iconName]}
            style={{ ...inputIconStyles, color: isFocused ? 'green' : hasError ? 'red' : '#ccc' }}
          />
        )}
        <Input
          {...otherProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          hasError={hasError}
          type='text'
        />
      </Container>
      <ErrorText>{errorMessage}</ErrorText>
    </>
  )
}
