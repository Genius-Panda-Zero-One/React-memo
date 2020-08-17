import React from 'react';
import ReactDOM from 'react-dom';
import "./css/tab.css"

// 设置tab栏切换
class Tab extends React.Component {
    constructor(props) {
        super(props)
        // 设置状态和数据
        this.state = {
            content1: "content active",
            content2: "content"
        }
        // 注意 this绑定的是按钮的点击事件 react中this默认不会绑定类中的方法
        // bind 绑定的意思
        this.clickEvent = this.clickEvent.bind(this)

    }
    clickEvent(e) {
        // 通过事件委托来拿到 按钮上的自定义属性值
        //  console.log(e.target.dataset.index)
        let index = e.target.dataset.index
        console.log(this);

        if (index == "1") {
            // setstate设置状态 属性
            this.setState({
                content1: "content active",
                content2: "content"
            })
        } else {
            this.setState({
                content2: "content active",
                content1: "content"
            })
        }
    }
    render() {
        return (
            <div>
                {/*给每个按钮注册点击事件  并且给每个按钮设置自定义属性*/}
                <button data-index="1" onClick={this.clickEvent}>按钮1</button>
                <button data-index="2" onClick={this.clickEvent}>按钮2</button>
                <div className={this.state.content1}>
                    <h1>按钮1的内容</h1>
                </div>
                <div className={this.state.content2}>
                    <h1>按钮2的内容</h1>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <Tab />,
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
