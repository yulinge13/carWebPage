import React, { Component } from 'react';
import './index.less'
import bg from "../../static/images/bg.png"
import httpLists from '../../utils/http'
import SwiperCom from '../../components/swiper/index'
import CheckedCom from '../../components/checked/index'
import imgBg from '../../static/images/title.png'
import pic1 from '../../static/images/pic10.png'
import pic2 from '../../static/images/pic11.png'
import pic3 from '../../static/images/pic12.png'
import pic4 from '../../static/images/pic13.png'
import sing1 from '../../static/images/tanyue.png'
import sing2 from '../../static/images/tange.png'
import sing3 from '../../static/images/tan.png'
import sing4 from '../../static/images/ge.png'
import icon1 from '../../static/images/pic.png'
import icon2 from '../../static/images/pic1.png'
import icon3 from '../../static/images/pic2.png'
import icon4 from '../../static/images/pic3.png'
import {
    message,
} from 'antd';
let { containHttp } = httpLists
const {
    getProductInfo,
    getAllDistributorByArea,
    makeAppointment
} = containHttp
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carLists: [
                {
                    name: '探歌',
                    val: 1,
                    isChecked: false
                },
                {
                    name: '捷达',
                    val: 2,
                    isChecked: false
                },
                {
                    name: '速腾',
                    val: 3,
                    isChecked: false
                },
                {
                    name: 'CC',
                    val: 4,
                    isChecked: false
                },
                {
                    name: '蔚领',
                    val: 5,
                    isChecked: false
                },
                {
                    name: '探岳',
                    val: 6,
                    isChecked: false
                },
                {
                    name: '宝来',
                    val: 7,
                    isChecked: false
                },
                {
                    name: '迈腾',
                    val: 8,
                    isChecked: false
                },
                {
                    name: '高尔夫',
                    val: 9,
                    isChecked: false
                },
                {
                    name: '高尔夫嘉旅',
                    val: 10,
                    isChecked: false
                }
            ],
            selectCarListsVal: [],//选择的汽车类型
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
                    url: require('../../static/images/pic20.png'),
                    cont:'19英寸个性轮辋'
                },
                {
                    url: require('../../static/images/pic21.png'),
                    cont:'大容积行李箱'
                },
                {
                    url: require('../../static/images/pic22.png'),
                    cont:'疲劳监测系统'
                },
                {
                    url: require('../../static/images/pic23.png'),
                    cont:'全新硬朗前脸'
                }
            ],
            detailsPicListsTwo: [
                {
                    url: require('../../static/images/pic30.png'),
                    cont:'Clean Aie 2.0空气净化系统'
                },
                {
                    url: require('../../static/images/pic31.png'),
                    cont:'电动可调外后视镜'
                },
                {
                    url: require('../../static/images/pic32.png'),
                    cont:'后配厢盖板上下可调'
                },
                {
                    url: require('../../static/images/pic33.png'),
                    cont:'展翼式中控'
                }
            ],
            distributorLists: [],//经销商
            distributorListsTwo: [],//经销商
            distributorVal: '',//选择的经销商
            provinceListsTwo: [],//省
            provinceValueTwo: '',//省的id
            cityListsTwo: [],//城市
            cityValueTwo: '',//城市的id

        }
    }
    componentDidMount() {
        this.getAreaLists(0)
        this.getAreaListsTwo(0)
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
    //获取省市区
    getAreaListsTwo(id) {
        getProductInfo({ id }).then(res => {
            if (res.success) {
                if (id == 0) {
                    this.setState({
                        provinceListsTwo: res.data || []
                    })
                } else {
                    this.setState({
                        cityListsTwo: res.data || []
                    })
                }
            }
        })
    }
    //获取选中的车子类型
    sendCheckedValues(val) {
        this.setState({
            selectCarListsVal:val
        })
    }
    //选择省份
    selectProvince(e) {
        const { value } = e.target
        console.log(value);
        if (value) {
            this.setState({
                provinceValue: value
            }, () => {
                this.getAreaLists(value)
            })
        } else {
            this.setState({
                provinceValue: '',
                cityValue: '',
                distributorVal: ""
            })
        }
    }
    //选择城市
    selectCity(e) {
        const { value } = e.target
        const { provinceValue, cityValue } = this.state
        if (value) {
            this.setState({
                cityValue: value
            }, () => {
                this.getAllDistributorByArea(provinceValue, value)
            })
        } else {
            this.setState({
                cityValue: '',
                distributorVal: ""
            })
        }
    }
    //选择省份 222222
    selectProvinceTwo(e) {
        const { value } = e.target
        if (value) {
            this.setState({
                provinceValueTwo: value
            }, () => {
                this.getAreaListsTwo(value)
            })
        } else {
            this.setState({
                provinceValueTwo: '',
                cityValueTwo: '',
                distributorListsTwo:[]
            })
        }
    }
    //选择城市 222
    selectCityTwo(e) {
        const { value } = e.target
        const { provinceValueTwo, } = this.state
        if (value) {
            this.setState({
                cityValueTwo: value
            }, () => {
                this.getAllDistributorByAreaTwo(provinceValueTwo, value)
            })
        } else {
            this.setState({
                cityValueTwo: '',
                distributorListsTwo:[]
            })
        }
    }
    //预约
    submitData() {
        const {
            name,
            tel,
            provinceValue,
            cityValue,
            distributorVal,
            selectCarListsVal,
            carLists
        } = this.state
        if( selectCarListsVal.length>0){
            if(name && tel && provinceValue && cityValue && distributorVal){
                if((/^1[34578]\d{9}$/.test(tel))){ 
                    var arr = []
                    selectCarListsVal.forEach(i => {
                        carLists.forEach(k => {
                            if(i === k.val){
                                arr.push(k.name)
                            }
                        })
                    })
    
                    makeAppointment({
                        carType:arr.join(),
                        name,
                        tel,
                        provinceId:provinceValue,
                        cityId:cityValue,
                        distributorId:distributorVal
                    }).then(res => {
                        if(res.success){
                            message.success('预约成功！')
                            // this.setState({
                            //     name:'',
                            //     tel:'',
                            //     provinceValue:'',
                            //     cityValue:'',
                            //     distributorVal:'',
                            //     selectCarListsVal:[]
                            // })
                        }
                    })
                } else{
                    message.error('请输入正确的手机号')
                }
            }else{
                message.error('请填写完整信息')
            }
        }else{
            message.error('请选择要预约的车型')
        }
    }
    //nav select
    selectNav(index) {
        this.setState({
            selectNavIndex: index
        })
    }
    //选择经销商
    selectDistributor(e) {
        this.setState({
            distributorVal: e.target.value
        })
    }
    //获取经销商
    getAllDistributorByArea(provinceValue, cityValue) {
        if (provinceValue && cityValue) {
            getAllDistributorByArea({
                provinceId: provinceValue,
                cityId: cityValue
            }).then(res => {
                if (res.success) {
                    this.setState({
                        distributorLists: res.data
                    })
                }
            })
        }
    }
    //获取经销商
    getAllDistributorByAreaTwo(provinceValue, cityValue) {
        if (provinceValue && cityValue) {
            getAllDistributorByArea({
                provinceId: provinceValue,
                cityId: cityValue
            }).then(res => {
                if (res.success) {
                    this.setState({
                        distributorListsTwo: res.data
                    })
                }
            })
        }
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
            distributorLists,
            provinceValue,
            cityValue,
            distributorVal,
            provinceValueTwo,
            cityValueTwo,
            cityListsTwo,
            provinceListsTwo,
            distributorListsTwo,
            name,
            tel
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
                                <input type="text" value={name} onChange={e => this.setState({
                                    name:e.target.value
                                })}/>
                                <img className="icon icon1" src={icon1} alt="" />
                            </div>
                        </div>
                        <div className="fill_list">
                            <div className="fill_name">
                                手机
                            </div>
                            <div className="fill_val">
                                <input type="text" value={tel} onChange={e => this.setState({
                                    tel:e.target.value
                                })}/>
                                <img className="icon icon2" src={icon2} alt="" />
                            </div>
                        </div>
                        <div className="fill_lists_tow">
                            <div className="fill_list_tow">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select
                                        onChange={e => this.selectProvince(e)}
                                        value={provinceValue}
                                    >
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
                                    <select
                                        onChange={e => this.selectCity(e)}
                                        value={cityValue}
                                    >
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
                                <select
                                    onChange={e => this.selectDistributor(e)}
                                    value={distributorVal}
                                >
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
                    <div className="submit_btn" onTouchStart={this.submitData.bind(this)}>立即报名</div>
                </div>
                <div className="distributor">
                    <div className="choic_area">
                        <div className="fill_lists_tow">
                            <div className="fill_list_tow">
                                <div className="fill_list_tow_name">省份</div>
                                <div className="fill_list_tow_val">
                                    <select
                                        onChange={e => this.selectProvinceTwo(e)}
                                        value={provinceValueTwo}
                                    >
                                        <option value="" >请选择</option>
                                        {
                                            provinceListsTwo.map((i, index) => {
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
                                    <select
                                        onChange={e => this.selectCityTwo(e)}
                                        value={cityValueTwo}
                                    >
                                        <option value="" >请选择</option>
                                        {
                                            cityListsTwo.map((i, index) => {
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
                        {
                            distributorListsTwo.length > 0 ? distributorListsTwo.map((i, index) => {
                                return (
                                    <div className="distributor_list" key={index}>
                                        <div className="distributor_name">{i.name}</div>
                                        <div className="distributor_tel">{i.tel}</div>
                                    </div>
                                )
                            }):<div style={{textAlign:'center'}}>暂无数据</div>
                        }
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
                                        onTouchStart={this.selectNav.bind(this, index)}
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
                                            <div className="detail_content">{i.cont}</div>
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
                                            <div className="detail_content">{i.cont}</div>
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
