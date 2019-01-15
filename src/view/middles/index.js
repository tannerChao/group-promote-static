import { batchDispatchMiddleware } from 'redux-batched-actions';
// # 可以引入自己的开发中间件
export default [
    batchDispatchMiddleware,
]