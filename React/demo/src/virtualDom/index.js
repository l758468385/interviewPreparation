import React from 'react'

const styleObj = {
  color: 'red',
  fontSize: '16px'
}

/* 
  - 第一步 ：我们编写的JSX语法，编译为虚拟DOM对象（VirtualDom）
    虚拟DOM对象:框架内部构建了一套自己的对象体系（对象的相关成员都是React内部规定的），基于这些属性描述，构建视图中的DOM
    
  - 第二步:把构建的virtualDOM 渲染为真实DOM
   
*/
class VirtualDom extends React.Component {

  render() {

    return (
      <>
        <h2 className='title' style={{
          styleObj
        }}>珠峰培训</h2>
      </>
    )

  }
}

class VirtualDom extends React.Component {
  render() {
    return (
      <>
        <h2 className='title'>这是虚拟DOM</h2>
        
      </>
    )
  }
}
