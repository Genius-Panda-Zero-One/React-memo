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

// 添加样式 添加多个样式
let arrStr = ["abc1", "bgred"].join(" ")

let element = (
    <div>
        <h1 className={arrStr}>添加样式</h1>
    </div>
)
ReactDOM.render(
    element,
    document.getElementById("root")
)






