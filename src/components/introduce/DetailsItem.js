import React, { Component } from 'react';
import moment from 'moment';

class DetailsItem extends Component {

    click = () => {
        let { data, itemClick } = this.props;
        itemClick(data);
    }

    render() {
        let { data } = this.props;
        let oState;
        if (data.statusCode === 1) {
            oState = { state: 1, content: '终止开发' }
        } else if (data.statusCode === 3 || data.statusCode === 0) {
            oState = { state: 3, content: '开发成功' }
        } else if (data.statusCode === 2) {
            oState = { state: 2, content: '开发中' }
        } else {
            oState = { state: 2, content: '开发中' }
        }
        let icon = `icon icon-${oState.state}`;

        return (
            <span className='IntroduceItems' onClick={this.click}>
                <div>
                    <p>{data.introductionToCompany}</p>
                    {
                        oState.state === 3 || oState.state === 0 ?
                            <section className='content'>
                                <p>累  计  收  益：{data.cashAmount}元</p>
                                <p>剩余收益时长：{data.surplusDay}天</p>
                            </section>
                            :
                            <section className='content'>
                                <p>开发人员：{data.scry} {data.scTel}</p>
                                <p>介绍日期：{moment(data.contactTime).format('YYYY-MM-DD')}</p>
                            </section>
                    }
                </div>
                <span className={icon}></span>
            </span>
        )
    }
}
export { DetailsItem }