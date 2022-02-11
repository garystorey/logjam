export type LogJamConfig = {
  name?: string
  debug?: boolean
}

export type LogProps = {
  msg: string
  options?: LogJamConfig
}
const defaultOptions = { debug: false, name: "" }

let currentName = defaultOptions.name
let currentDebug = defaultOptions.debug

export function log({ msg = "", options = defaultOptions }: LogProps): void {
  /*eslint-disable no-console */
  const { name = currentName, debug = currentDebug } = options
  if (!debug) return
  console.log(name + ":" + msg)
  /*eslint-enable no-console */
}

export function jam(options: LogJamConfig) {
  const { name = currentName, debug = currentDebug } = options
  currentName = name
  currentDebug = debug
}
