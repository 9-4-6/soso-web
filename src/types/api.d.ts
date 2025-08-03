// 定义通用的响应数据结构
type Result<T> = {
  code: number
  msg: string
  data: T
}
