/* 高阶函数 */
function say() {
  console.log('do something...')
}

Function.prototype.before = function (cb) {

  /* 满足高阶函数的定义: 参数是函数、返回值也是函数 */
  const fn = this
  return function () {
    cb()
    fn()
  }
}

// 希望在say之前做一些事
const newFn = say.before(function () {
  console.log('说话前');
})

const json = {
  "records": [
    {
      "id": "1694888920243818497",
      "createBy": null,
      "updateBy": null,
      "createTime": "2023-08-25 09:46:23",
      "updateTime": "2023-08-25 09:46:23",
      "delFlag": "0",
      "tenantId": "1",
      "userId": "1540241561516793858",
      "title": "2023年8月24日11:25:03 通知新增",
      "content": "少时诵诗书少时诵诗书所所所所所所所所所所",
      "model": 1,
      "pushJson": null,
      "messageType": 11,
      "readStatus": 0,
      "avatar": null
    },
    {
      "id": "1694635517026545666",
      "createBy": null,
      "updateBy": " ",
      "createTime": "2023-08-24 16:59:27",
      "updateTime": null,
      "delFlag": "0",
      "tenantId": "0",
      "userId": "1540241561516793858",
      "title": "2023年8月24日11:25:03 通知新增",
      "content": "少时诵诗书少时诵诗书所所所所所所所所所所",
      "model": 1,
      "pushJson": null,
      "messageType": 11,
      "readStatus": 0,
      "avatar": null
    }
  ],
  "total": 2,
  "size": 10,
  "current": 1,
  "orders": [],
  "optimizeCountSql": true,
  "searchCount": true,
  "countId": null,
  "maxLimit": null,
  "pages": 1
}