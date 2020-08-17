import React, { Children } from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childData: null,
        }
    }
    render() {
        return (
            <div>
                <h1>子元素传递过来的数据:{this.state.childData}</h1>
                <ChildCom setChildDate={this.setChildDate} />
            </div>
        )
    }
    // 给父元素定义一个函数  将这个函数传递给子元素
    setChildDate = (data) => {
        // 通过setState来设置 childData的值
        this.setState({
            childData: data
        })
    }
}

class ChildCom extends React.Component {
    constructor(props) {
        super(props)
        // 需要传递的数据
        this.state = {
            msg: "helloworld"
        }
    }
    render() {
        return (
            <div>
                {/* 点击按钮传递数据给父元素 */}
                <button onClick={this.sendData}>传递数据给父元素</button>
                {/* 第二种写法 */}
                <button onClick={() => { this.props.setChildDate("直接调用props的函数") }}>传递数据给父元素</button>
            </div>
        )
    }
    // 这里使用箭头函数 this 就会绑定按钮点击事件
    sendData = () => {
        // 获得子元素的数据
        console.log(this.state.msg);
        // 通过this.props获取父元素传递过来的 setChildDate函数
        console.log(this.props);
        // 直接调用setChildDate函数 就可以传递数据给父元素了
        this.props.setChildDate(this.state.msg)

    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById("root")
)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
