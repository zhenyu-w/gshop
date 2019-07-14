/**
 * ajax请求函数模块
 * 返回值: Promise对象(异步返回的数据是reponse.data)
 */
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (data !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = dataStr ? url + '?' + dataStr : url
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
