import React, { Component } from 'react';
import './home.less'
import bg from "../../static/images/bg.jpg"
import httpLists from '../../utils/http'
import SwiperCom from '../../components/swiper/index'
import CheckedCom from '../../components/checked/index'
import imgBg from '../../static/images/title.png'
let { containHttp } = httpLists
const { getProductInfo } = containHttp
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carLists: [
                {
                    name: '苹果',
                    val: 1,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 2,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 3,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 4,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 5,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 6,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 7,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 8,
                    isChecked: false
                },
                {
                    name: '苹果',
                    val: 9,
                    isChecked: false
                }
            ],
            selectCarListsVal: [],
            provinceLists: [],//省
            provinceValue: '',//省的id
            cityLists: [],//城市
            cityValue: '',//城市的id
            carBannerListsOne: [
                {
                    name: '哈哈哈哈',
                    url: ''
                },
                {
                    name: '哈哈哈哈',
                    url: ''
                },
                {
                    name: '哈哈哈哈',
                    url: ''
                },
                {
                    name: '哈哈哈哈',
                    url: ''
                }
            ],
            name:'',//姓名
            tel:'',//手机号
            
        }
    }
    componentDidMount() {
        this.getAreaLists(0)
    }
    componentWillReceiveProps() {
    }
    //获取省市区
    getAreaLists(id) {
        getProductInfo({ id }).then(res => {
            if (res.success) {
                if (id == 0) {
                    this.setState({
                        provinceLists: res.data || []
                    })
                } else {
                    this.setState({
                        cityLists: res.data || []
                    })
                }
            }
        })
    }
    //获取选中的车子类型
    sendCheckedValues(val) {
        console.log(val);
    }
    //选择省份
    selectProvince(e) {
        const { value } = e.target
        this.setState({
            provinceValue: value
        }, () => {
            this.getAreaLists(value)
        })
    }
    //选择城市
    selectCity(e) {
        const { value } = e.target
        this.setState({
            cityValue: value
        })
    }
    //预约
    submitData(){

    }
    render() {
        const { carLists, carBannerListsOne, provinceLists, cityLists } = this.state
        console.log(provinceLists);
        return (
            <div className="home_page">
                <img className="bg" src={bg} alt="" />
                <div className="ask_price">
                    <div className="title_bg">
                        <img src={imgBg} />
                    </div>
                    <div className="title">
                        *请选择您的关注车型
                    </div>
                    <div className="choice_car">
                        <CheckedCom
                            sendCheckedValues={this.sendCheckedValues.bind(this)}
                            data={carLists}
                        />
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
                                    <select onChange={e => this.selectProvince(e)}>
                                        <option value="" >请选择</option>
                                        {
                                            provinceLists.map((i, index) => {
                                                return (
                                                    <option value={i.id} key={index}>{i.area_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="fill_list_tow fill_list_three">
                                <div className="fill_list_tow_name">城市</div>
                                <div className="fill_list_tow_val">
                                    <select onChange={e => this.selectCity(e)}>
                                        <option value="" >请选择</option>
                                        {
                                            cityLists.map((i, index) => {
                                                return (
                                                    <option value={i.id} key={index}>{i.area_name}</option>
                                                )
                                            })
                                        }
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
                    {/* <div className="is_read">
                        <Checkbox />
                        <div className="is_read_cont">我已经阅读并同意《隐私政策》里的各项内容</div>
                    </div> */}
                    <div className="submit_btn" onClick={this.submitData.bind(this)}>立即报名</div>
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
                <div className="car_swiper_one">
                    <div className="nav_lists">
                        <div className="nav_list"></div>
                    </div>
                    <SwiperCom>
                        {
                            carBannerListsOne.map((i, index) => {
                                return (
                                    <div className="car_pic" key={index}>{i.name}</div>
                                )
                            })
                        }
                    </SwiperCom>
                </div>
            </div>
        )
    }
}
export default HomePage
