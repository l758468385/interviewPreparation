// redux 的工程化开发

// 项目比较大：不能同时都修改一个文件

//我们需要按照模块 ，把 reducer 进行单独的管理，每个模块都有自己的 reducer; 最后 我们还要把所有的reducer 进行合并，合并为每一个赋值给我们创建的 store,
import { combineReducers } from 'redux';