import React, { Component } from 'react'
import { Loading, LoginForm } from '../../components'
import { connect } from "react-redux"
import loginAction from '../../actions/login'
import { USER_REGIStER_GET } from "../../utils";
import { getFormValues } from 'redux-form';
const photo = require('../../assets/image/photo.png')


@connect(
    (state) => (
        {
            loginState: state.login,
            form: getFormValues('login')(state)
        }
    )
    , (dispatch, ownProps) => (
        {
            toRegister: state => (dispatch(loginAction[USER_REGIStER_GET](state)))
        }
    ))
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetState: true,
            loginState: 3
        }
    }


    render() {
        const { toRegister, form } = this.props
        console.log(this.props)
        return (
            <div className='login login-login'>
                <header >
                    <img src={photo} />
                </header>
                <LoginForm>
                    <span className='btn-submits' style={{
                        margin: '40px auto'
                    }}
                        onClick={
                            () => {
                                toRegister({
                                    ...form
                                })
                            }
                        }
                    >注册</span>
                </LoginForm>
                <section className='footer'>
                    <p className='forget'>忘记秘密</p>
                    <i ></i>
                    <p className='registered'>登录</p>
                </section>
            </div>
        );
    }
}
export { Register }