import React from 'react';
import ReactDOM from 'react-dom';
import "./css/03.css"

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// 添加样式
// let eleStyle = {
//     background: "skyblue",
//     borderBottom: "10px solid red"
// }

// let element = (
//     <div>
//         <h1 style={eleStyle}>添加样式</h1>
//     </div>
// )
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// )

// 添加样式 添加多个样式 可以采用数组的方式使用 join(" ") 拼接 class1 class2 的形式
// let arrStr = ["abc1", "bgred"].join(" ")

// let element = (
//     <div>
//         <h1 className={arrStr}>添加样式</h1>
//     </div>
// )
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// )

// 函数式组件 以及传递参数
function Childcom(props) {
    console.log(props);

    let title = "今天是否出去"
    let weather = props.weather
    let goOut = weather == "下雨" ? "不出去" : "出去"
    // 返回一个UI界面
    return <div>
        <h1>函数式组件</h1>
        <h2>{title}</h2>
        <span>{goOut}</span>
    </div>
}

// 渲染
// ReactDOM.render(
//     // 使用组件的固定写法  传递的参数代码如下
//     <Childcom weather="下雨" />,
//     document.getElementById("root")
// )


class HelloWorld extends React.Component {    //component 组件
    render() {
        console.log(this);
        return (
            <div>
                <h1>类组件定义HelloWorld</h1>
                <h2>hello我得到了:{this.props.kk}</h2>
                {/* 参数一层层传递 */}
                <Childcom weather={this.props.weather} />
            </div>
        )
    }
}

ReactDOM.render(
    // 在helloworld组件中就可以看到props 属性里面有一个{kk:参数}
    <HelloWorld kk="参数" wather="晴天" ></HelloWorld>,
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
