import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form action="http://www.baidu.com">
                    {/* 添加一个事件 */}
                    <div className="child">
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>
                    </div>
                </form>
                {/* 这里点击调用函数的话 可以使用箭头函数 */}
                <button onClick={(e) => this.parentEvent1("传递一个函数", e)}>提交</button>
                {/* 不使用ES6的方法 使用匿名函数 */}
                <button onClick={function (e) { this.parentEvent2("不使用ES6,传递一个函数", e) }.bind(this)}>提交</button>
                {/* 注意这里的绑定需要写在 函数的最后面 */}

            </div>
        )
    }
    // 这里使用箭头函数的目的是不需要给类的函数绑定事件
    // (如果不绑定事件this 的指向会有问题)
    parentEvent = (e) => {
        console.log(e);
        // 阻止事件的默认行为 这里不能使用 (没效果)
        // return false
        e.preventDefault()
    }
    parentEvent1 = (msg, e) => {
        console.log(msg);
        console.log(e);
    }
    parentEvent2 = (msg, e) => {
        console.log(msg);
        console.log(e);
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
