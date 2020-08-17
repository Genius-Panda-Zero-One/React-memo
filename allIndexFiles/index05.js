import React from 'react';
import ReactDOM from 'react-dom';
import "./css/03.css"

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// 如何保证组件高性能的情况下 实现时间变化 
class Clock extends React.Component {
    constructor(props) {
        // 继承父类的方法
        super(props)
        // 构造函数初始化数据,将需要改变的数据初始化到state中
        this.state = {
            time: new Date().toLocaleTimeString()
        }
        console.log(this.state.time);

    }

    render() {
        //  this.state.time = new Date().toLocaleTimeString()
        return (
            <div>
                <h1>当前时间:{this.state.time}</h1>
            </div>
        )
    }

    // 为了让组件自己完成数据的更新 使用生命周期函数 组件渲染完成时的函数
    componentDidMount() {
        setInterval(() => {
            // this.state.time = new Date().toLocaleTimeString() 虽然能达成效果,但是别用
            //切勿直接修改state数据,直接state重新渲染内容,需要使用setState
            // 通过this.setState修改完数据后,并不会立即修改DOM里面的内容
            // react会在这个函数内容所有设置状态改变后,统一对比虚拟DOM对象
            // 然后统一修改提升性能
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

}

// 这里并不能使用定时器,每个1s让页面重新渲染达到改变时间的目的
// 因为Clock 是一个组件,当react去渲染用一个组件的时候,为了提高性能
// 组件内部的数据没有变化
ReactDOM.render(
    <Clock />,
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
