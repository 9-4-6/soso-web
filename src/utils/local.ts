export function setLocalStorage(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function getLocalStorage(key: string) {
  const value: any = window.localStorage.getItem(key)
  return value ?? ''
}

export function setToken(value: string) {
  setLocalStorage('soso-token', value)
}

export function getToken() {
  return getLocalStorage('soso-token')
}
