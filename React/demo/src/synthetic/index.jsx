import React from 'react';

class Synthetic extends React.Component {
    handle = (e) => {
        console.log(e);
        //     SyntheticBaseEvent 合成事件属性,

    }
    render() {
        return <>
            <button onClick={this.handle}>按钮</button>
        </>
    }

}

export default Synthetic;