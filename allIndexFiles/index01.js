import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component {
    // 因为会自动生成constructor
    render() {
        console.log(this.props);
        // 可以拿到 data-index 和data-name 
        return (
            <div>
                <h1>组件的插槽</h1>
                {this.props.children}
                {/* 传入Children组件 */}
                <ChildCom>
                    <h1 data-postion="header">这是头部内容</h1>
                    <h1 data-postion="main">这是中间内容</h1>
                    <h1 data-postion="footer">这是尾部内容</h1>
                </ChildCom>
            </div>
        )
    }
}


class ChildCom extends React.Component {

    render() {
        let headerCom, mainCom, footerCom;
        // 这里的this.props.children 就是ChildCom的每一个H1
        this.props.children.forEach((item, index) => {
            // 判断 参数是否传递
            if (item.props['data-postion'] === "header") {
                // 如果传递过来的值是header
                headerCom = item
            } else if (item.props['data-postion'] === "main") {
                mainCom = item
            } else {
                footerCom = item
            }

        })
        return (
            <div>
                <div className="header">
                    {headerCom}
                </div>
                <div className="main">
                    {mainCom}
                </div>
                <div className="footer">
                    {footerCom}
                </div>
            </div>
        )
    }
}

// 定义一个根组件 将parentCom组件放入根组件中
class RootCom extends React.Component {
    constructor(props) {
        super(props)
        // 子组件就会显示在porps的children中
        // console.log(props);
        this.state = {
            arr: [0, 1, 2]
        }
    }
    render() {
        return (
            <ParentCom>
                {/**我们在这里尝试传入数据 */}
                <h2 data-name="a" data-index={this.state.arr[0]}>子组件1</h2>
                <h2 data-name="b" data-index={this.state.arr[1]}>子组件2</h2>
                <h2 data-name="c" data-index={this.state.arr[2]}>子组件3</h2>
            </ParentCom>
        )
    }

}

ReactDOM.render(
    <RootCom></RootCom>,
    document.getElementById("root")
)