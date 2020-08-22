import React from 'react';
import axios from "axios"
import NewsCom from "./component/newscom.js"
import "./assets/css/style.css"


// 地图组件部分
function MapCom(props) {
    return (
        <div className="contentItem">
            <h1>地图组件</h1>
        </div>
    )
}

// 湖北组件部分
function HubeiCom(props) {
    return (
        <div className="contentItem">
            <h1>湖北组件</h1>
        </div>
    )
}

// 直击现场组件部分
function XianChangCom(props) {
    return (
        <div className="contentItem">
            <h1>直击现场组件</h1>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newData: null,
            navList: ["疫情地图", '最新进展', "湖北疫情", "直击现场"],
            tabIndex: 0,
            barStyle: {
                left: '20px'
            },
            contentStyle: {
                transform: 'translate(0, 0)'
            }
        }
    }
    async componentWillMount() {
        let result = await axios.get("http://localhost:8000/api/newsdata")
        // console.log(result.data);
        let chinaData = result.data.data.areaTree[2].children
        console.log(chinaData);


    }

    render() {
        return (
            <div className="App">
                <div className="nav">
                    {
                        // 设置第一个字体加粗
                        this.state.navList.map((item, index) => {
                            if (index === this.state.tabIndex) {
                                return (
                                    // 需要用到索引值,所以这里需要使用箭头函数传值
                                    <div key={index.toString()} className="navitem active" onClick={() => this.tabChlickEvent(index)}>{item}</div>
                                )
                            }
                            return (
                                <div key={index.toString()} className="navitem" onClick={() => this.tabChlickEvent(index)}>{item}</div>
                            )
                        })
                    }
                    {/* 下划线部分 */}
                    <div className="bar" style={this.state.barStyle}></div>


                </div >
                {/* 内容部分 */}
                <div className="content" style={this.state.contentStyle}>
                    <MapCom />
                    <NewsCom />
                    <HubeiCom />
                    <XianChangCom />
                </div>
            </div>

        )
    }
    tabChlickEvent = (index) => {
        // console.log(index);
        this.setState({
            barStyle: {
                left: (index * 88 + 22) + "px"
            },
            contentStyle: {
                transform: `translate(${-index * 375}px,0)`
            }
        })
    }
}

export default App