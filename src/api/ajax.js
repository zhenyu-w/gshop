/**
 * ajax请求函数模块
 * 返回值: Promise对象(异步返回的数据是reponse.data)
 */
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function(resole, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(ket => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (data !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resole(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
