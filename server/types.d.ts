declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: string
    readonly SOCKET_PORT: string
  }
}
