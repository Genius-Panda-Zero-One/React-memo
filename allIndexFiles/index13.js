import React from 'react';
import ReactDOM from 'react-dom';

function Listitem(props) {
    return (
        // 如果返回一个组件 key 就不能写在li标签里面了 而是写在每个 组件上
        <li>
            <h3>{props.data.title}</h3>
            <p>{props.data.content}</p>
        </li>
    )
}


class Listitem2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // 通过点击事件来显示每个li的内容
            // 当点击事件发生后,会调用函数 通过函数传递参数
            <li onClick={(e) => {
                this.clickEvern(
                    this.props.data.title,
                    this.props.index,
                    e)
            }}>
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li>
        )
    }
    // 这里需要使用箭头函数绑定事件
    clickEvern = (value, index, e) => {
        alert(index + "-" + value)
        //  console.log(value);

    }
}

class People extends React.Component {
    constructor(props) {
        super(props)
        // 假设这里是后端返回的数据
        this.state = {
            list: [
                {
                    title: "第一个标题",
                    content: "第一个内容"
                },
                {
                    title: "第二个标题",
                    content: "第二个内容"
                },
                {
                    title: "第三个标题",
                    content: "第三个内容"
                },
            ]
        }
    }
    render() {
        // 定义一个空的数组来接收数据 使用map方法循环返回一个新的数组

        // 但是这样会警告 说每个li 必须有一个key 
        var htmlarr = this.state.list.map((value, index) => {
            return (
                // 但是 我们希望在这里返回一个组件,那么需要对li进行封装 同时将key写在组件上面
                <Listitem2 key={index.toString()} data={value} index={index} />
            )
        })

        return (
            <div>
                <ul>
                    {/**这里放一个数组,模板会自动拼接 */}
                    {htmlarr}
                </ul>

                <h2>揉在一起的写法</h2>
                <ul>
                    {
                        // 直接数组进行map循环
                        this.state.list.map((item, index) => {
                            return (
                                // 每个li需要有一个key 并且给每个li添加事件
                                // 事件需要使用匿名的箭头函数,这养函数不会自己调用
                                <li key={index.toString()}
                                    onClick={(e) => {
                                        this.clickFn(
                                            item.title, index, e)
                                    }}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    clickFn = (value, index, e) => {
        alert(index + "-" + value)
    }
}

ReactDOM.render(
    <People />,
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
