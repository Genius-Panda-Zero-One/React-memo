import React from 'react';
import ReactDOM from 'react-dom';
// 将创建仓库的方法解构出来
import Redux, { createStore } from "redux"

// 定义一个函数   默认值有有个state   第二个参数是action  通过不同的action 会返回不同的state
const reducer = function (state = { num: 0 }, action) {
    console.log(action);

    switch (action.type) {
        case "add":
            state.num++;
            break;
        case "decrement":
            state.num--;
            break
        default:
            break
    }
    return { ...state }
}

// 创建一个仓库
const store = createStore(reducer)

function add() {
    // 通过仓库的方法dispatch进行修改数据
    // 里面的参数是action的type  通过type改变 仓库的数据
    // dispatch会去调用reducer函数 并且将type参数传递到action中
    // 同时 这里也可以传递多个数据 每个数据的属性都会成为action的属性
    store.dispatch({ type: 'add', content: "你好" })
}

function decrement() {
    // 通过仓库的方法dispatch进行修改数据
    store.dispatch({ type: 'decrement' })

}

// 函数式计数器
const Counter = function (props) {
    //  console.log(store);
    // console.log(store.getState()); //通过store.getState获取数据
    let state = store.getState()
    return (
        <div>
            <h1>计数数量:{state.num}</h1>
            <button onClick={add}>计数+1</button>
            <button onClick={decrement}>计数-1</button>
        </div>
    )
}

ReactDOM.render(
    <Counter></Counter>,
    document.getElementById("root")
)

// 使用store下面的 subscribe 订阅 DOM渲染事件  参数要求是函数
store.subscribe(
    () => {
        ReactDOM.render(
            <Counter></Counter>,
            document.getElementById("root")
        )
    }
)
