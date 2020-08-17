import React from 'react';
import ReactDOM from 'react-dom';


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
        // 定义一个空的数组来接收数据
        var htmlarr = []
        for (var i = 0; i < this.state.list.length; i++) {
            let item = (
                <li>
                    <h3>{this.state.list[i].title}</h3>
                    <p>{this.state.list[i].content}</p>
                </li>
            )
            htmlarr.push(item)
        }
        return (
            <div>
                <ul>
                    {/**这里放一个数组,模板会自动拼接 */}
                    {htmlarr}
                </ul>
            </div>
        )

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
