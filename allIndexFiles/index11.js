import React from 'react';
import ReactDOM from 'react-dom';

var arr = ["一号", "二号", "三号"]

// 需要将arr中的每个元素 放在li中 在拼接到ul中
var htmlarr = [<li>一号</li>, <li>二号</li>, <li>三号</li>]
// for (var i = 0; i < arr.length; i++) {
//     htmlarr += <li>arr[i]</li>
// }

class People extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
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
