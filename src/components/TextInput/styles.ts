import { CSSProperties, styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50px;
`

export const FormGroup = styled.div<{
  marginBottom?: number
}>`
  margin: 8px 0;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '8px')};
  max-width: 320px;
`

export const Input = styled.input<{ isFocused: boolean; hasError: boolean }>`
  height: 50px;
  padding: 0px 20px 0px 45px;
  border: 1px solid
    ${({ isFocused, hasError }) => (isFocused ? 'green' : hasError ? 'red' : '#ccc')};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  background-color: white;
  color: black;
  outline: none;
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
  &::placeholder {
    color: ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  }
`

export const inputIconStyles = {
  position: 'absolute',
  height: '50px',
  width: '1.2rem',
  padding: '0px 10px',
} as CSSProperties

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 2px;
  min-height: 14px;
`
