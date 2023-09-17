export const validatePasswordStrength = (text: string) => {
  return {
    oneLowercase: /[a-z]/.test(text),
    oneNumber: /\d/.test(text),
    oneSpecialChar: /[^A-Za-z0-9]/.test(text),
    oneUppercase: /[A-Z]/.test(text),
  }
}
