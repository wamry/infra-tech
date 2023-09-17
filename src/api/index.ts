import axios, { CreateAxiosDefaults } from 'axios'
export * from './endpoints'

export const DEFAULT_API_CONFIG: CreateAxiosDefaults = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, //30 secs timeout
}

export const api = axios.create(DEFAULT_API_CONFIG)
