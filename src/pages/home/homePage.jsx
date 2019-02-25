import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './home.less'
import bg from "../../static/images/bg.jpg"
import ReactSwipe from 'react-swipes'
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carLists: [
                {
                    name: '苹果',
                    val: 1,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 2,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 3,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 4,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 5,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 6,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 7,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 8,
                    onOff: false
                },
                {
                    name: '苹果',
                    val: 9,
                    onOff: false
                }
            ],
            selectCarListsVal: [],
            opt: {
                distance: 320, // 每次移动的距离，卡片的真实宽度
                currentPoint: 1,// 初始位置，默认从0即第一个元素开始
                autoPlay: false, // 是否开启自动播放
                swTouchstart: (ev) => {

                },
                swTouchmove: (ev) => {

                },
                swTouchend: (ev) => {
                    let data = {
                        moved: ev.moved,
                        originalPoint: ev.originalPoint,
                        newPoint: ev.newPoint,
                        cancelled: ev.cancelled
                    }
                    console.log(data);
                    this.setState({
                        curCard: ev.newPoint
                    })
                }
            }
        }
    }
    componentWillReceiveProps() {
    }
    //预约 选择的 车子类型
    handleChange(e, i) {
        console.log(e.checked)
        console.log(i.onOff)
        let { selectCarListsVal, carLists } = this.state
        const { value } = e.target
        if (!i.onOff) {
            selectCarListsVal.push(value)
            i.onOff = true
            this.setState({
                carLists
            }, () => {
                console.log(carLists)
            })

        } else {
            var arr = [];
            console.log(carLists)
            selectCarListsVal.forEach(i => {
                if (i.onOff) {
                    arr.push(i.val)
                }
            })
            console.log(arr)
            this.setState({
                selectCarListsVal: arr
            }, () => {
                i.onOff = false
                this.setState({
                    carLists
                }, () => {
                    console.log(carLists)
                })
            })
        }
    }
    render() {
        const { carLists, selectCarListsVal, opt } = this.state
        console.log(selectCarListsVal)
        return (
            <div className="home_page">
                <img className="bg" src={bg} alt="" />
                <div className="ask_price">
                    <div className="title">
                        *请选择您的关注车型
                    </div>
                    <div className="choice_car">
                        {
                            carLists.map((i, index) => {
                                return (
                                    <label key={index}><input onChange={e => this.handleChange(e, i)} type="checkbox" value={i.val} />{i.name} </label>
                                )
                            })
                        }
                    </div>
                    <div className="fill_lists">
                        <div className="fill_list">
                            <div className="fill_name">
                                姓名
                            </div>
                            <div className="fill_val">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="fill_list">
                            <div className="fill_name">
                                手机
                            </div>
                            <div className="fill_val">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="fill_lists_tow">
                            <div className="fill_list_tow">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fill_list_tow fill_list_three">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="fill_list fill_list_last">
                            <div className="fill_name">
                                经销商
                            </div>
                            <div className="fill_val">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="is_read">
                        <Checkbox />
                        <div className="is_read_cont">我已经阅读并同意《隐私政策》里的各项内容</div>
                    </div>
                    <div className="submit_btn">立即报名</div>
                </div>
                <div className="distributor">
                    <div className="choic_area">
                        <div className="fill_lists_tow">
                            <div className="fill_list_tow">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fill_list_tow fill_list_three">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="distributor_lists">
                        <div className="distributor_list">
                            <div className="distributor_name">啊实打实的</div>
                            <div className="distributor_tel">028-122311122</div>
                        </div>
                    </div>
                    <div className="distributor_tishi">
                        *经销商排名不分先后
                    </div>
                </div>
                <div className="car_swiper">
                    <div className="card-swipe" >
                        <ReactSwipe className="card-slide" options={opt}>
                            {[1, 2, 3, 4, 5].map((val, index) => (
                                <div className="item" key={index}>
                                    {val}
                                </div>
                            ))}
                        </ReactSwipe>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage
