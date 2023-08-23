import { useMemberStore } from '@/stores'
const BASE_DEV_URL: string = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const BASE_URL: string = 'https://pcapi-xiaotuxian-front.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //1.非http需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = BASE_DEV_URL + options.url
    }
    //2.设置请求超时
    options.timeout = 10000
    //3.添加小程序端请求标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //4.添加token
    const memberStore = useMemberStore()
    const token = memberStore.profile.token
    if (!token) {
      options.header.Authorization = 'Bear ' + token
    }
  },
}

/* 请求拦截器 */
uni.addInterceptor('request', httpInterceptor)

/* 文件上传拦截 */
uni.addInterceptor('uploadFile', httpInterceptor)

/*
 *  请求函数封装 模仿axios 使用promise封装
 */
/* 定义接口 指定类型 */
interface Data<T> {
  code: string
  msg: string
  result: T
}

const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        //有服务器响应就会触发success 与 axios不同 axios只在状态码两百时触发
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401 token失效 清理用户信息跳转登录页面
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login.vue' })
          reject(res)
        } else {
          //通用错误
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || 'request error.',
          })
          reject(res)
        }
      },
      /* 响应失败 */
      fail(err) {
        uni.showToast({
          icon: 'error',
          title: '网络出错了~',
        })
        reject(err)
      },
    })
  })
}
