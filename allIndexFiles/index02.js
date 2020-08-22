import React, { Component } from "react"
// hash模式 后面有#  例如 localhost:3000/#/home
// import {HashRouter as Router,Link,Route} from "react-router-dom" 

// history模式 / 需要后端配合使用
import { BrowserRouter as Router, Link, Route } from "react-router-dom"



function Home() {
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}

function Me(props) {
    console.log(props);
    return (
        <div>
            <h1>个人中心</h1>
        </div>
    )
}

function Product() {
    return (
        <div>
            <h1>产品页面</h1>
        </div>
    )
}

function News(props) {
    console.log(props);

    return (
        <div>
            <h1>新闻页面</h1>
            {/**这里的id就可以根据地址栏的id变化 */}
            <div>新闻ID:{props.match.params.id}</div>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // 让objMe是一个对象 可以传递一些参数
        // 路径会自动拼接成http://localhost:3000/admin/me?username=admin#abc
        // 这些值可以在porps的 location中看见 还会有一个key记录本次操作
        let objMe = {
            pathname: "/me",  //路径名
            search: "?username=admin", //get请求参数
            hash: "#abc", // 哈希值
            // 这里的state就会传递到porps中
            state: {
                msg: "helloworld"
            }
        }
        return (
            <div id="app">
                {/** 这里可以同时插入多个路由 */}
                {/* <Router>
                    <Route path="/" exact component={() => { return (<div>第二个首页</div>) }}></Route>
                    <Route path="/me" exact component={() => { return (<div>第二个个人中心</div>) }}></Route>
                    <Route path="/product" exact component={() => { return (<div>第二个产品页面</div>) }}></Route>

                </Router> */}
                {/**这里的basename 就是基础路径 下面的路径如果需要访问 /me  生成的a标签会自动加上 /admin/me */}
                {/** 这里暂时会有一个bug 就是 写了basename 即便精确匹配情况下 访问me 仍然能看到/admin/me的内容   如果想要访问/me的时候看不见/admin/me的内容 可以把/admin 直接写在path后面 */}
                <Router basename="/admin">
                    {/* link就是用来生成跳转标签的 */}
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        {/** Link后面可以传递一个变量 */}
                        <Link to={objMe} >个人中心</Link>
                        {/** 设置一个动态路由  id值随时变化 */}
                        <Link to="/news/123456">新闻页面</Link>

                    </div>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="/product" exact component={Product}></Route>
                    <Route path="/me" exact component={Me}></Route>
                    <Route path="/news/:id" exact component={News}></Route>
                </Router>
            </div>
        )
    }
}

export default App