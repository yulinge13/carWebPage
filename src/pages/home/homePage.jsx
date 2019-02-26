import React, { Component } from 'react';
import './home.less'
import bg from "../../static/images/bg.jpg"
import httpLists from '../../utils/http'
import SwiperCom from '../../components/swiper/index'
import CheckedCom from '../../components/checked/index'
import imgBg from '../../static/images/title.png'
import pic1 from '../../static/images/pic10.jpg'
import pic2 from '../../static/images/pic11.jpg'
import pic3 from '../../static/images/pic12.jpg'
import pic4 from '../../static/images/pic13.jpg'
import sing1 from '../../static/images/tanyue.png'
import sing2 from '../../static/images/tange.png'
import sing3 from '../../static/images/tan.png'
import sing4 from '../../static/images/ge.png'
import icon1 from '../../static/images/pic.png'
import icon2 from '../../static/images/pic1.png'
import icon3 from '../../static/images/pic2.png'
import icon4 from '../../static/images/pic3.png'
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
                    url: pic1,
                    sing: sing1
                },
                {
                    url: pic2,
                    sing: sing1
                },
            ],
            carBannerListsTwo: [
                {
                    url: pic3,
                    sing: sing2
                },
                {
                    url: pic4,
                    sing: sing2
                },
            ],
            name: '',//姓名
            tel: '',//手机号
            navLists: [
                {
                    name: '探岳'
                },
                {
                    name: '探歌'
                }
            ],
            selectNavIndex: 0,
            detailsPicListsOne: [
                {
                    url: pic1
                },
                {
                    url: pic2
                }
            ],
            detailsPicListsTwo: [
                {
                    url: pic3
                },
                {
                    url: pic4
                }
            ],
            distributorLists:[],//经销商

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
    submitData() {

    }
    //nav select
    selectNav(index) {
        this.setState({
            selectNavIndex: index
        })
    }
    //选择经销商
    selectDistributor(e){
        console.log(e.target.value)
    }
    render() {
        const {
            carLists,
            carBannerListsOne,
            carBannerListsTwo,
            provinceLists,
            cityLists,
            navLists,
            selectNavIndex,
            detailsPicListsOne,
            detailsPicListsTwo,
            distributorLists
        } = this.state
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
                                <img className="icon icon1" src={icon1} alt="" />
                            </div>
                        </div>
                        <div className="fill_list">
                            <div className="fill_name">
                                手机
                            </div>
                            <div className="fill_val">
                                <input type="text" />
                                <img className="icon icon2" src={icon2} alt="" />
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
                                    <img className="icon" src={icon3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="fill_list fill_list_last">
                            <div className="fill_name">
                                经销商
                            </div>
                            <div className="fill_val">
                                <select onChange={e => this.selectDistributor(e)}>
                                    <option value="" >请选择</option>
                                    {
                                        distributorLists.map((i, index) => {
                                            return (
                                                <option value={i.id} key={index}>{i.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <img className="icon icon3" src={icon4} alt="" />
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
                                    <img className="icon" src={icon3} alt="" />
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
                        {
                            navLists.map((i, index) => {
                                return (
                                    <div
                                        className={index === selectNavIndex ? 'nav_list nav_list_active' : 'nav_list'}
                                        key={index}
                                        onClick={this.selectNav.bind(this, index)}
                                    >{i.name}</div>
                                )
                            })
                        }
                    </div>
                    {
                        selectNavIndex === 0 ? <SwiperCom>
                            {
                                carBannerListsOne.map((i, index) => {
                                    return (
                                        <div className="car_pic" key={index}>
                                            <img className="car_img" src={i.url} />
                                            <img className="car_sing" src={i.sing} />
                                        </div>
                                    )
                                })
                            }
                        </SwiperCom> : <SwiperCom>
                                {
                                    carBannerListsTwo.map((i, index) => {
                                        return (
                                            <div className="car_pic" key={index}>
                                                <img className="car_img" src={i.url} />
                                                <img className="car_sing" src={i.sing} />
                                            </div>
                                        )
                                    })
                                }
                            </SwiperCom>
                    }
                </div>
                <div className="details">
                    <div className="detail detail_one">
                        <div className="detail_sing">
                            <img src={sing3} />
                        </div>
                        <SwiperCom>
                            {
                                detailsPicListsOne.map((i, index) => {
                                    return (
                                        <div className="detail_pic" key={index}>
                                            <img className="detail_img" src={i.url} />
                                        </div>
                                    )
                                })
                            }
                        </SwiperCom>
                    </div>
                    <div className="detail detail_two">
                        <div className="detail_sing">
                            <img src={sing4} />
                        </div>
                        <SwiperCom>
                            {
                                detailsPicListsTwo.map((i, index) => {
                                    return (
                                        <div className="detail_pic" key={index}>
                                            <img className="detail_img" src={i.url} />
                                        </div>
                                    )
                                })
                            }
                        </SwiperCom>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage
