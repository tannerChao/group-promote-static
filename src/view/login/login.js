import React, { Component } from 'react'
import { Loading, LoginForm } from '../../components'
import { connect } from "react-redux"
import loginAction from '../../actions/login'
import { USER_LOGIN_GET } from "../../utils";
import { push } from 'react-router-redux';
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
            toLogin: state => (dispatch(loginAction[USER_LOGIN_GET](state))),
            toRegister: () => (dispatch(push('/register'))),
        }
    ))
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetState: true,
            loginState: 3
        }
    }

    componentWillReceiveProps(props) {
        // this.props.history.replace('/home/user')
    }

    render() {
        const { toLogin, form, toRegister } = this.props
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
                                toLogin({
                                    ...form
                                })
                            }
                        }
                    >登录</span>
                </LoginForm>
                <section className='footer'>
                    <p className='forget'>忘记秘密</p>
                    <i ></i>
                    <p className='registered' onClick={() => toRegister()}>注册</p>
                </section>
            </div>
        );
    }
}
export { Login }