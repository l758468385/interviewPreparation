// react-redux 最大的特点就是：让redux 的操作更简单一些
/* 
  react-redux 内部自己创建了上下文对象，并且我们可以把store的对象
*/


import { connect } from 'react-redux'


connect(state => state.vote)(Vote)
