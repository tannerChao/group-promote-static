import React, { Component } from 'react';
import { get, has, replace, size } from 'lodash'
import { Toast } from 'antd-mobile';

export class InputItem extends Component {
    
    constructor(props){
        super(props);
        this.state={
            value:get(this.props,'initValue')||'',
            state:true
        }
    }

    componentWillMount () {
        this.setState({
            value:get(this.props,'initValue')||''
        })
    }

    componentWillReceiveProps (props){
        if(size(get(props,'initValue'))>0&&get(props,'initValue')!==get(this.props,'initValue')){
            this.setState({
                value:get(props,'initValue')||'',
                state:true
            })
        }
    }

    onblurs=()=>{

        let { onblur=true, parameter={}, regular } = this.props;

        if(typeof onblur === 'function'){
            onblur({
                ...parameter
            })
        }else{
            if(!onblur){
                Toast.info(`${regular.message}`, 2, null, false);
            }
        }

    }
    
    onchange=e=>{
        let value=has(this.props,'max')?e.target.value.substring(0,this.props.max):e.target.value;
        console.log(1111)
        if(has(this.props,'itemType')&& has(this,get(this.props,'itemType'))){
            let type=this.props.itemType;
            this[type](value)
        }else{
            this.checkRegular(value)
        }
    }

    checkRegular= value =>{
        let state=true;
        let { name } = this.props;

        if(has(this.props,'regular') && has(get(this.props,'regular'),'rules')){
            console.log(this.props.regular.rules,this.props.regular.rules.test(value))
            state=this.props.regular.rules.test(value)
        }

        this.setValue(value,state,()=>{
            if(has(this.props,'callback')){
                let o ={};
                    o[name]={
                        values:value,
                        initValue:get(this.props,'initValue')||'',
                        state
                    }
                this.props.callback({
                    ...o
                })
            }
        })

    }

    phone= value =>{
        let { name } = this.props;
        console.log(value.replace(/\s/g,''))
        let state = /^1\d{10}$/.test(value);
        console.log(replace(value,/[^0-9]/g,''))
        this.setValue(replace(value,/[^0-9]/g,''),state,()=>{
            if(has(this.props,'callback')){
                let o ={};
                    o[name]={
                        values:value,
                        initValue:get(this.props,'initValue')||'',
                        state
                    }
                this.props.callback({
                    ...o
                })
            }
        })
    }

    numbers= value =>{
        let { name } = this.props;

        let state = /^[0-9]{1,}$/.test(value);
        this.setValue(replace(value,/[^0-9]/g,''),state,()=>{
            if(has(this.props,'callback')){
                let o ={};
                    o[name]={
                        values:value,
                        initValue:get(this.props,'initValue')||'',
                        state
                    }
                this.props.callback({
                    ...o
                })
            }
        })
    }

    bank= value =>{
        let { name } = this.props;

        let state = /^[0-9]{1,}$/.test(value.replace(/\s/g,''));
        let valueStart=replace(value,/[^0-9]/g,'');
        let valueEnd=valueStart.replace(/\s/g,'').replace(/[^\d]/g,'').replace(/(\d{4})(?=\d)/g,'$1 ')
        console.log(valueStart,state)
        this.setValue(valueEnd,state,()=>{
            if(has(this.props,'callback')){
                let o ={};
                    o[name]={
                        values:valueStart,
                        initValue:get(this.props,'initValue')||'',
                        state
                    }
                this.props.callback({
                    ...o
                })
            }
        })
    }

    setValue= (value,state,callback,parameter={}) =>{
        this.setState({
            value,
            state
        },()=>{
            if(typeof(callback)==='function'){
                callback({
                    ...parameter
                })
            }
        })
    }

    render() {
        let { name, placeholder, style={}, max=100, } = this.props;

        return (
            <input 
                placeholder={placeholder} 
                value={this.state.value} 
                onChange={this.onchange}
                style={{...style}}
                ref={name}
                onBlur={this.onblurs}
                maxLength={max}

            />
        );
    }
}