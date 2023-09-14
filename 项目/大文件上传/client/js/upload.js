(function () {
    const upload1 = document.querySelector('#upload1'),
        upload_inp = upload1.querySelector('.upload_inp'),
        upload_button_select = upload1.querySelector('.upload_button.select'),
        upload_button_upload = upload1.querySelector('.upload_button.upload'),

        upload_tip = upload1.querySelector('.upload_tip'),
        upload_list = upload1.querySelector('.upload_list');


    let _file = null;

    // 点击选择文件按钮，触发上传文件 input 框的行为
    upload_button_select.addEventListener('click', function () {
        upload_inp.click()
    })

    // 监听用户选中文件的操作
    upload_inp.addEventListener('change', function () {
        const file = upload_inp.files[0];
        if (!file) return;

        /* 
            file : name、size、type
        */

        // 限制文件大小
        if (!/\.(png|jpe?g)$/i.test(file.name)) {
            alert('上传文件只能是PNG/JPG/JPEG格式的哦~~~~~')
            return
        }

        // 大小限制
        if (file.size > 2 * 1024 * 1024) {
            alert('上传不能大于2M')
            return
        }

        _file = file
        // 显示上传的文件

        upload_tip.style.display = 'none';

        upload_list.style.display = 'block';

        upload_list.innerHTML = `
        <li>
            <span>文件：${file.name}</span>
            <span><em>移除</em></span>
        </li>
        `


    })

    // 利用事件冒泡机制通过事件委托来监听删除事件
    upload_list.addEventListener('click', (e) => {
        const target = e.target
        if (target.tagName === 'EM') {
            // 点击的是移除按钮
            upload_tip.style.display = 'block';
            upload_list.style.display = 'none';
            upload_list.innerHTML = ``

            _file = null
        }
    })

    upload_button_upload.addEventListener('click', function () {
        if (!_file) {
            alert('请你选中要上传的文件');
            return
        }
        // 验证通过通过 FormData/ BASE64上传到 服务器端
        const formData = new FormData();
        formData.append('file', _file);
        formData.append('filename', _file.name);

        instance.post('/upload_single', formData).then(data => {
            if (+data.code === 0) {
                alert('文件已经上传成功')
                return
            }
            return Promise.reject(data.codeText);
        }).catch(err => {
            alert('文件上传失败，请您稍后再试');
        })
    })

})()


function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

var F = function () { };

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(Child.prototype.name);

