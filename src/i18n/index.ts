import i18n, { TOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './langs/en.json'

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: 'en',
  resources: {
    en: {
      translation: enJson,
    },
  },
  fallbackLng: 'en',
})

export type TxKeyPath = keyof typeof enJson

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: TxKeyPath, options?: TOptions) {
  return key ? i18n.t(key, options) : key
}

export default i18n
