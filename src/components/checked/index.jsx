import React, { Component } from 'react'
import './index.less'
import gou from '../../static/images/1.png'
export default class CheckedCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkLists: [
            ],
            checkedVal: [],
        }
    }
    componentDidMount() {
        this.setState({
            checkLists: this.props.data || []
        })
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({
                checkLists: nextProps.data
            })
        }
    }
    //点击事件
    handleClick(e, i) {
        const { checkLists } = this.state
        checkLists.forEach(item => {
            if (item.val === i.val) {
                if (i.isChecked) {
                    item.isChecked = false
                } else {
                    item.isChecked = true
                }
            }
        })
        this.setState({
            checkLists
        }, () => {
            this.getCheckedLists()
        })
    }
    //获取选中的checked
    getCheckedLists() {
        const { checkLists, checkedVal } = this.state
        let arr = []
        checkLists.forEach(i => {
            if (i.isChecked) {
                arr.push(i.val)
            }
        })
        this.setState({
            checkedVal: arr
        }, () => {
            this.props.sendCheckedValues(arr)
        })
    }
    render() {
        const { checkLists } = this.state
        return (
            <div className="check_lists">
                {
                    checkLists.map((i, index) => {
                        return (
                            <div className="check_list" key={index} onTouchStart={e => this.handleClick(e, i)}>
                                <div className="check_input">
                                    {
                                        i.isChecked ? <div className="is_checked">
                                            <img className="pic" src={gou} />
                                        </div> : ''
                                    }
                                </div>
                                <div className="check_name">{i.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
