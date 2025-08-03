import Request from '@/utils/axios'

export function loginApi(data: any) {
  return Request.post('/api/auth/login', data)
}
