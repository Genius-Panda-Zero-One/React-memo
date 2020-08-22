import React from "react"
import axios from "axios"
import bannerImg from "../assets/images/banner.jpg"

class NewsCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: []
        }
    }
    // 在渲染之前调用钩子函数 发送ajax请求
    async componentWillMount() {
        let result = await axios.get("http://localhost:8000/api/news")
        console.log(result.data);
        this.setState({
            dataList: result.data
        })
    }

    render() {
        return (
            <div className="contentItem new">

                <div className="banner">
                    <img alt="banner" src={bannerImg} />
                    <h1>疫情追踪</h1>
                </div>
                <div className="newContent">
                    <div className="line"></div>
                    <div className="newList">
                        {
                            this.state.dataList.map((item, index) => {
                                return (
                                    <div key={index.toString()} className="newsListItem">
                                        <div>{item.data}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCom