// saga 中间件 主saga，用于区别是否需要 saga来处理异步操作，如果没有异步，则放行

function* mainSaga() {
  yield takeEvery('LOGIN', loginSaga);
  yield takeEvery('LOGOUT', logoutSaga);
  yield takeEvery('GET_USER_INFO', getUserInfoSaga);
  yield takeEvery('GET_USER_INFO_ASYNC', getUserInfoAsyncSaga);
  yield takeEvery('GET_USER_INFO_ASYNC_2', getUserInfoAsync2Saga);
  yield takeEvery()
}

// 监听 saga ，监听 type类型为异步操作名称的，此saga会通过主saga分配过来
function* watchSaga() {

}

// 工作saga,监听saga得到任务后，把任务分配给工作saga
function* workSaga(action) {

}

// 主saga要暴露出去
export default mainSaga;