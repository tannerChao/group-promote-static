import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { BtnShowHide } from "..";

class Forms extends Component {
    render() {
        let { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(values => { console.log(values) })}>
                <div className='widthBase center userName'>
                    <label htmlFor="userName" className='login-label'>用户名</label>
                    <Field name="userName" component="input" placeholder='请输入用户名' type="text" />
                </div>
                <div className='felx widthBase center password'>
                    <label htmlFor="password" className='login-label'>密码</label>
                    <Field name="password" component="input" type="text" placeholder='请输入密码' />
                    <BtnShowHide />
                </div>
                {
                    this.props.children || null
                }
            </form>
        )
    }
}


const LoginForm = reduxForm({
    // a unique name for the form
    form: 'login',
    destroyOnUnmount: false, // 
})(Forms)

export { LoginForm };