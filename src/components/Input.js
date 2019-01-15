import React, { Component } from 'react';
import { get, has, size } from 'lodash'
import { Toast } from 'antd-mobile';

export class Input extends Component {
  

    change=(e)=>{
        let { name, regular, max=200 }=this.props;
        if(get(this.props,'onChange')){
            this.props.onChange();
        }else{
            let value={}
                value[name]={values:e.target.value};
                if(size(e.target.value)>max){
                    return;
                }

                value[name].regular={state:true,message:get(get(this.props,'regular'),'message')||''}
                if(has(this.props,'regular')){
                    if(!regular.rules.test(e.target.value)){
                        value[name].regular={state:false,message:regular.message}
                    }
                }
                if(has(this.props,'regular')){
                    if(regular.rules.test(e.target.value)){
                        this.props.getInputValue(value);   
                    }else{
                        if(size(e.target.value)===0){
                            this.props.getInputValue(value);   
                        }
                    }
                }else{
                    this.props.getInputValue(value);
                }

                  
        }
    }

    onblurs=()=>{

        let { onblur=false, parameter={}, values, regular } = this.props;

        if(typeof onblur === 'function'){
            onblur({
                ...parameter
            })
        }else{
            if(onblur){
                if(has(this.props,'regular')){
                    if(has(regular,'onblurRules')){
                        if(!regular.onblurRules.test(values)){
                            Toast.info(`${regular.message}`, 2, null, false);
                        }
                    }else{
                        if(!regular.rules.test(values)){
                            Toast.info(`${regular.message}`, 2, null, false);
                        }
                    }
                }
            }
        }

    }

    render() {
        let { name, values, placeholder, style={} } = this.props;
        return (
            <input 
                placeholder={placeholder} 
                value={values} 
                onChange={this.change}
                style={{...style}}
                ref={name}
                onBlur={this.onblurs}
            />
        );
    }
}