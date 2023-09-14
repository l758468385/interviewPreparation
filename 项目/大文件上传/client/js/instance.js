const instance = axios.create({
  baseURL: 'http://127.0.0.1:8888',
  Headers: {
    "Content-Type": 'multipart/form-data',
  },
  transformRequest: (data, headers) => {
    const contentType = headers['Content-Type']
    if (contentType === 'application/x-www-form-urlencoded') Qs.stringify(data)
    return data;
  }
})


instance.interceptors.response.use(response => {
  return response.data
}, reason => {

  // 请求失败可以统一在这边做处理... 然后结束结果返回1个失败的Promise
  return Promise.reject(reason)
})