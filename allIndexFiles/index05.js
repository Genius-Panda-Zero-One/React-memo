import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from "redux";
import { Provider, connect } from "react-redux"


class Counter extends React.Component {

    render() {
        console.log(this.props);  // 里面就会有value 和 onClick
        // 计数,通过store 的state传递给props 直接通过props就可以将state的数据获取
        const value = this.props.value;
        // 将修改数据的事件或者方法传入到props
        const onAddClick = this.props.onAddClick;

        return (
            <div>
                <h1>计数的数: {value}</h1>
                <button onClick={onAddClick}>数字+1</button>
                <button onClick={this.props.onAddClick5}>数字+5</button>
            </div>
        )
    }
}
// 创建一个仓库
const store = createStore(reducer)

// 将state映射到props函数
function mapStateToProps(state) {
    //  console.log(state);  //输出0
    return {
        value: state.num
    }
}

// 将修改state数据的方法 映射到props    参数默认传入store里的dispath方法

function mapDispatchToProps(dispatch) {
    // console.log(dispatch);
    // dispatch 用于修改动作
    return {
        onAddClick: () => { dispatch(addAction) },
        onAddClick5: () => { dispatch(onAddClick5) }
    }

}

// 将上面的2个方法,将数据仓库的state和修改state的方法映射到组件上 形成新的组件
// 使用connect方法 将2个方法关联
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)   // 调用 然后将Counter 传入进去成为一个新的组件
// console.log(store)

// 定义一个添加的动作
const addAction = {
    type: "add"
}
const onAddClick5 = {
    type: "addNum",
    num: 5
}

// 当我们的情况有很多种的时候

let ActionFnObj = {
    add: function (state, action) {
        state.num++
        return state
    },
    addNum: function (state, action) {
        state.num = state.num + action.num
        return state
    }

}



function reducer(state = { num: 0 }, action) {
    // console.log(action.num, state.num);
    // 第一种写法
    // switch (action.type) {
    //     case "add":
    //         state.num++
    //         break;
    //     default:
    //         break
    // }

    // 第二种写法
    // 在action 传入的时候判断 action.type是否是初始值 如果包含redux就是初始值
    if (action.type.includes("redux")) {
        return state
    } else {
        state = ActionFnObj[action.type](state, action)
        // console.log(action.type); 输出就是type 例如 add
        return { ...state }
    }
}

ReactDOM.render(
    // 最大的根组件 Provider 用于传递store  Provider组件包起来可以实现数据共享
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
)