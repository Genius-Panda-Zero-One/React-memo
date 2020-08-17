import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 导入css
import './App.css'

// JSX语法
<App /> // JS普通对象
let root = document.getElementById('root');

// JSX表达式只有一个父元素
let h1 = <h1>helloworld<span>这是副标题</span></h1>
// 将h1 导入到 root中
ReactDOM.render(h1, root);



// 2. 实现页面显示时间
显示当地时间
function clock() {
    let time = new Date().toLocaleTimeString();
    let element =
        (<div>
            <h1>这是时间{time}</h1>
        </div>);
    let root = document.querySelector('#root')
    // 将元素element 放入 root中
    ReactDOM.render(element, root)
}
clock();
setInterval(clock, 1000);


// 3. react函数组件  组件开头必须大写
function Clock(props) {
    // 直接返回一个组件
    return (<div>
        {/*  大括号插入数据 */}
        <h1>这是时间{props.date.toLocaleTimeString()} </h1>
        <h2>这是函数组件开发模式</h2>
    </div>)
}
// 普通HTML元素小写,否则就会被认为是组件
function run() {
    ReactDOM.render(
        // 将前面的Clock组件渲染到root中
        <Clock date={new Date()} />,
        document.querySelector("#root")
    )
}
setInterval(run, 1000)

// 4. 传递参数 使用简单的运算
let time = new Date().toLocaleTimeString()
let str = '当前时间是:'
let element = (
    <div>
        <h1>helloworld</h1>
        <h2>{str + time}</h2>
    </div>
)
ReactDOM.render(
    element,
    document.querySelector('#root')
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
