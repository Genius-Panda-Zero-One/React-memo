import React from 'react';
import ReactDOM from 'react-dom';
import "./css/父传子数据.css"


// 父传子数据传递
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
        // 绑定点击按钮事件 this不会自动绑定类中的方法
        this.changeShow = this.changeShow.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.changeShow}>按钮</button>
                <ChildNode isActive={this.state.isActive} />
            </div>
        )
    }
    changeShow() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
}

class ChildNode extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let strClass = null;
        // 判断父级的props是否传递过来
        // console.log(this.props);
        if (this.props.isActive) {
            strClass = " active"   // 这个地方与46行拼接的时候,在Active前面打空格
        } else {
            strClass = ""
        }
        return (
            // 这里最好不要在content后面打空格,不然会渲染成 class="content "(虽然也会实现效果)
            <div className={"content" + strClass}>
                子元素
            </div>
        )
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
