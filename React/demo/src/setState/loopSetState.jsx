import React from "react";

class LoopSetState extends React.Component {
    state = {
        x: 0
    }
    handle = () => {
        for (let i = 0; i < 20; i++) {
            // this.setState({
            //     x: this.state.x + 1
            // })
            this.setState((preState) => {
                return {
                    x: preState.x+ 1,
                }
            })
        }
    }

    render() {
        console.log('render咯')
        return <>
            x:{this.state.x}
            <button onClick={this.handle}>点击循环</button>
        </>
    }

        render() {

        this.setState({

        })
    }
}

export default LoopSetState;