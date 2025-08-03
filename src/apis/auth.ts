import Request from '@/utils/axios'

export function handleLogin(data: any) {
  return Request.post('/auth/v1/login', data)
}
