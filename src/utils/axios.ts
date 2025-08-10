import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/useAuthStore'

import router from '@/router'
const authStore = useAuthStore()

const baseURL = 'http://localhost:8081'
// 导出Request类
export class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置
  baseConfig: AxiosRequestConfig = { baseURL: baseURL, timeout: 10000 }

  constructor(config: AxiosRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // 一般会请求拦截里面加token，用于后端的验证
        const token = authStore.getToken
        if (token) {
          config.headers = config.headers || {}
          // 自定义头名 + 自定义前缀
          config.headers['soso-token'] = `soso ${token}`
        }
        return config
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      },
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code === 401) {
          authStore.clearToken()
          router.push('/login')
          return
        }
        if (res.data.code !== 200) {
          const errMsg = res.data?.msg || '服务内部异常'
          ElMessage.error(errMsg)
        }
        return res.data
      },
      //http请求异常
      (err: any) => {
        let message = ''
        // 检查是否有响应
        if (!err.response) {
          message = '网络连接异常，请检查网络设置'
          ElMessage.error(message)
          return Promise.reject(err)
        }

        // 根据状态码设置错误消息
        switch (err.response.status) {
          case 404:
            message = err.response.data?.message || '请求资源不存在(404)'
            break
          case 502:
            message = '网关错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网关超时(504)'
            break
          default:
            message = err.response.data?.message || `连接出错(${err.response.status})!`
        }

        // 显示错误消息
        ElMessage.error(message)
      },
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.post(url, data, config)
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.delete(url, config)
  }
  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.put(url, data, config)
  }
}

// 导出Request实例
export default new Request({})
