import React from "react";

class PureComponentDifference extends React.Component {
    state = {
        arr: [1, 2, 3, 4],
    };

    render() {
        let {arr} = this.state;
        return (
            <div>
                {arr.map((item) => {
                    return <span>{item}</span>;
                })}
                <div className="footer">
                    {arr.map(item => {
                        return <>{item + '人'}</>
                    })}
                </div>
                <button
                    onClick={() => {
                        arr.push(arr[arr.length - 1] + 1);
                        this.setState({arr});
                    }}
                >
                    新增
                </button>
            </div>

        );
    }
}

export default PureComponentDifference;
