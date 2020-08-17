import React from 'react';
import ReactDOM from 'react-dom';

// 定义2个函数组件
function UserLogin() {
    return (<div>登录成功</div>)
}

function NotLogin() {
    return (<div>请先登录</div>)
}

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }

    render() {
        // 定义一个元素 去接受上面的函数组件
        let element = null
        // 判断一下 是否处于登录状态
        if (this.state.isLogin) {
            // 可以直接返回一个组件
            // return ( < UserLogin />)
            element = < UserLogin />
        } else {
            // return ( < NotLogin />)
            element = < NotLogin />
        }
        return (
            <div>
                <h1>这是头部</h1>
                <h3>{element}</h3>

                <h2>三元表达式</h2>
                {/**可以直接在三元表达式中写组件 */}
                <h3>{this.state.isLogin ? <UserLogin /> : <NotLogin />}</h3>
                <h2>这是尾部</h2>
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
