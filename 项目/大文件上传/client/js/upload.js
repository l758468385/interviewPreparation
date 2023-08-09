(function () {
    // 请求主题传递给服务器的数据格式：FormData/x-www-form-urlencoded/json字符串/普通文本/Buffer...
    const formData = new FormData();
    formData.append('username', 'zMouse');
    formData.append('age', 18);

    axios.post('/upload_single', formData, {
        headers: {
            "Content-Type": 'multipart/form-data',
        }
    })
})