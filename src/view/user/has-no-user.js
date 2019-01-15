import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Footer, Portrait, Lis, } from '../../components/user';
import { Modal } from 'antd-mobile'
const alert = Modal.alert;

class HasNoUser extends Component {

    constructor(props){
        super(props)
        this.state={
            popState:true
        }
    }

    alerts=()=>{
        alert('该账号尚未登录公众号，请登录绑定', [
            {
                text: '看看再说', onPress: () => {}
            },
            {
                text: '确定加入', onPress: () => {
                }
            },
        ]);
    }

    setPopState=()=>{
        this.setState({
            popState:!this.state.popState
        })
    }
    render() {

        return (
            <div className='user-cneter'>
                <header >
                    <div className='portrait'>
                        <Portrait
                            name='hi～你好！'
                        >
                            <div className='phone-bank'>
                                <span onClick={this.setPopState}>绑定手机号</span>
                                <span onClick={this.setPopState}>绑定银行卡</span>
                            </div>
                        </Portrait>
                    </div>
                    <div className='menus'>
                        <ul onClick={this.setPopState}>
                            <span className='lis'>
                                <p>0</p>
                                <p>我的介绍</p>
                            </span>
                            <span  className='lis'>
                                <p>0</p>
                                <p>我的团队</p>
                            </span>
                            <span  className='lis'>
                                <p>0</p>
                                <p>可提现(元)</p>
                            </span>
                            <span  className='lis'>
                                <p>0</p>
                                <p>累计收入(元)</p>
                            </span>
                        </ul>
                    </div>

                </header>

                <section className='container'>
                    <div className='uls'>
                        <Lis
                            icon='introduce'
                            title='介绍客户赚佣金'
                            content='成功介绍客户可获得12个月总运费5%的佣金奖励'
                            details={() => <Link to='/home/activity/introduce/0' >[查看详情]</Link>}
                            button={true}
                        >
                            <button onClick={this.setPopState} className='btn'>立即介绍</button>
                        </Lis>
                        <Lis
                            icon='team'
                            title='组团介绍赚团费'
                            content='团员介绍客户成功，团长可获团员客户总运费1%的奖励！'
                            details={() => <Link to='/home/activity/introduce/1'>[查看详情]</Link>}
                            button={true}
                        >
                            <button className='btn' onClick={this.setPopState}>邀请好友</button>
                        </Lis>
                    </div>
                </section>
                <footer className='pd-30-0-30-0'>
                    <Footer />
                </footer>
                <Modal
                    visible={this.state.popState}
                    transparent
                    title='登录提醒'
                    className='user-tips-popup'
                    footer={[{ text: '确定', onPress:  () => { 
                        this.setPopState()
                    }}]}
                >
                    <section className='incarnate-success'>
                        <p>
                            该账号尚未登录，请关注跨越速运公众号登录绑定
                        </p>
                    </section>
                </Modal>
            </div>
        );
    }
}
export { HasNoUser }