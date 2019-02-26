import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import './index.less'
export default class SwiperCom extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const params = {
            pagination: {
                el: '.pagination_btns',
                type: 'bullets',
                clickable: true,
                bulletClass:'btn',
                bulletElement:'div',
                bulletActiveClass:"btn_active"
            },
        }
        console.log(this);
        return (
            <div className="swiper" >
                <Swiper {...params}>
                    {this.props.children}
                </Swiper>
            </div>
        )
    }
}
