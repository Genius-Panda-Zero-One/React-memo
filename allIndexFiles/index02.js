import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"


// 5. 3元表达式
// let man = "发热"
// let element2 = (
//     <div>
//         <h1>今天体温状态</h1>
//         {/* 三元表达式的表达式不仅可以是字符串,也可以是jsx对象  例如下面的按钮*/}
//         <div>{man == "发热" ? <button>隔离</button> : "在家玩"}</div>
//     </div>
// )
// ReactDOM.render(
//     element2,
//     document.getElementById('root')
// )

// 6. 三元表达式中的表达式可以是jsx对象

// let man = "正常"
// let element3 = (
//     <div>
//         <span>横着躺</span>
//         <span>竖着躺</span>
//     </div>
// )
// let element2 = (
//     <div>
//         <h1>今天体温状态</h1>
//         <div>{man == "发热" ? <button>隔离</button> : element3}</div>
//     </div>
// )
// ReactDOM.render(
//     element2,
//     document.getElementById('root')
// )

// 7. 添加样式
// let color = 'bgred'
// let element = (
//     // 注意这里不要写class 因为class是关键字 (虽然也会成功)
//     <div className={color}>
//         红色背景色
//     </div>
// )
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// 添加图片
let color = 'bgred'
let img = 'https://a.msstatic.com/huya/main3/static/img/logo.png'
let element = (
    // 注意这里不要写class 因为class是关键字 (虽然也会成功)
    <div className={color}>
        <img src={img} />
        红色背景色
    </div>
)
ReactDOM.render(
    element,
    document.getElementById('root')
)




