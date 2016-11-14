import { createStore, applyMiddleware, compose } from 'redux'
import middlewares from './middlewares'
import enhancers from './enhancers'
import reducer from '../reducers'

const store = createStore(
  reducer,
  window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)
export default store
