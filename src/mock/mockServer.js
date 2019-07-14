/**
 * 使用mockjs提供的mock数据接口
 * 不需要向外暴露接口，只要保存能执行即可
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})

// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})

// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info})
