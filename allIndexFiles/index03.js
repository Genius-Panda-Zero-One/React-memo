import React, { Component } from "react"
// hash模式 后面有#  例如 localhost:3000/#/home
// import {HashRouter as Router,Link,Route} from "react-router-dom" 

// history模式 / 需要后端配合使用
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from "react-router-dom"

function LoginInfo(props) {
    //  console.log(props);
    // 登录成功就到后台页面
    if (props.location.state.loginState === "success") {
        // 重定向
        return <Redirect to="/admin"></Redirect>
    } else {
        return <Redirect to="/login"></Redirect>

    }
}

let formCom = () => {
    let pathObj = {
        pathname: "/loginInfo",
        state: {
            loginState: "success"
        }
    }
    return (
        <div>
            <h1>表单验证</h1>
            <Link to={pathObj}>登录验证后页面</Link>
        </div>
    )
}

// 定义一个子组件
class ChildCom extends Component {
    render() {
        return (
            <div>
                {/** 点击按钮跳转到首页 */}
                <button onClick={this.clickEvent}>点击我到首页</button>
            </div>
        )
    }
    clickEvent = () => {
        //  console.log(this.props);
        // 通过this.props.history.push方法跳转页面 2个参数 一个是路径 另外一个是传递的数据
        this.props.history.push("/", {
            msg: "Childcom发送的数据"
            // 这样就可以在首页的location.state中查看到数据
        })
        // 前进
        //  this.props.history.go(1)
        //  this.props.history.goForward()
        // 后退
        //  this.props.history.go(-1)
        //  this.props.history.goBack()

    }
}


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/** 动态路由 */}
                        <Route path="/:aa" exact component={(props) => {
                            console.log(props);
                            return (<h1>首页</h1>)
                        }}></Route>
                        <Route path="/form" exact component={formCom}></Route>
                        <Route path="/login" exact component={() => <h1>登录页</h1>}></Route>
                        <Route path="/loginInfo" exact component={LoginInfo}></Route>
                        <Route path="/admin" exact component={() => <h1>管理页</h1>}></Route>
                        <Route path="/admin" exact component={() => <h1>管理页2</h1>}></Route>
                        <Route path="/child" exact component={ChildCom}></Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}



export default App