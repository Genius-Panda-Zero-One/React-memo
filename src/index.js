import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from "./feiyan.json"
import "./css/feiyan.css"

// console.log(jsonData);

// 设置对象所具有的属性
let areaObj = {
    // name: "突尼斯",
    // today: {
    //     confirm: 120,
    //     dead: 1,
    //     heal: 7
    // }
}

// 对数组进行forEach循环
jsonData.data.areaTree.forEach((item, index) => {
    // 当之前的数据 没有的时候 就默认为0
    if (areaObj[item.name] == undefined) {
        areaObj[item.name] = {
            confirm: 0,
            dead: 0,
            heal: 0
        }
    }
    // 因为json数据中没有是用null表示的 我们设置为0
    item.today.confirm = item.today.confirm ? item.today.confirm : 0
    item.today.dead = item.today.dead ? item.today.dead : 0
    item.today.heal = item.today.heal ? item.today.heal : 0

    // 让它的name作为key值
    areaObj[item.name] = {
        // confirm数据就是 之前的数据加上今天的数据  
        // 注意 当前的数据用areaObj[item.name]下面的各个属性来表示
        name: item.name,
        confirm: areaObj[item.name].confirm + item.today.confirm,
        dead: areaObj[item.name].dead + item.today.dead,
        heal: areaObj[item.name].heal + item.today.heal,
    }
    //  areaObj[item.name] = item.name
})
// 对对象进行循环 将数据放入数组中
let areaList = [];
for (const key in areaObj) {
    areaList.push(areaObj[key])
}
// 对数组进行排序
let newAreaList = areaList.sort((a, b) => {
    return b.confirm - a.confirm
})
console.log(newAreaList);

// console.log(areaObj);
// console.log(areaList);

// 定义一个病例的组件
class Bingli extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={"box"}>
                <h1>各地区病情</h1>
                <ul>
                    <li>
                        <span>地区</span>
                        <span>总人数</span>
                        <span>死亡</span>
                        <span>康复</span>
                    </li>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index.toString()}>
                                    <span>{item.name}</span>
                                    <span>{item.confirm}</span>
                                    <span>{item.dead}</span>
                                    <span>{item.heal}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

ReactDOM.render(
    <Bingli list={newAreaList} />,
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
