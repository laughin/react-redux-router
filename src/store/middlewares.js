import thunk from 'redux-thunk'
import promise from 'redux-promise'

const middlewares = [thunk, promise]

if (__DEV__) {
  const createLogger = require('redux-logger')
  middlewares.push(createLogger())
}

export default middlewares
