import React, { Component } from 'react';
import {  Toast } from 'antd-mobile';
import { size } from 'lodash';
import { NoContent } from '../'

let   pageIndex = 1;
const pageSize=20;

class PageListMore extends Component {
    
    constructor(props) {
        super(props);
        this.state = ({
          isLoadingMore: false
        });
    }
    
    componentWillMount(){
        let { dataSouce } = this.props;
        pageIndex= Math.ceil(size(dataSouce)/pageSize);
    }

    render() {
      let { scrollClass='', dataSouce, Components, boxStyle, noContent, contents, title }=this.props;
        return (
            size(dataSouce)>0?
                <div className={`scroll ${scrollClass}`}>
                    <div className="scroll-list" ref="scroll" onTouchMove={this.getTarget} >
                        {
                            dataSouce.map((o,i)=>{
                                return  <div key={i} style={{...boxStyle}} className='refresh-list'>
                                            {
                                                Components(o,i)
                                            }
                                        </div>
                            })
                        }
                    </div>
                    {
                        this.state.isLoadingMore?
                            <div className="scroll-loading" ref="wrapper">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                            </div>
                        :
                            <div className="scroll-loading" ref="wrapper" style={{height:0}}>
                            </div>
                    }
                    
                </div>
            :    
                <NoContent 
                    type={noContent} 
                    contents={ contents }
                    title={ title }
                /> 
        );
    }
  
    componentDidMount() {

    }
    getTarget=async e=>{
        let { isLoadingMore } = this.state;
        let { refresh, dataSouce, parameter, pageName, getFreshData } = this.props;
        const top = this.refs.wrapper.getBoundingClientRect().top;
        const windowHeight = window.screen.height;

        if (top/2 && top/2 < windowHeight && !isLoadingMore && size(dataSouce)%pageSize===0 && size(dataSouce)>=pageSize*pageIndex) {
            // 当 wrapper 已经被滚动到页面可视范围之内触发
            
            if(refresh){
                this.setState({
                    isLoadingMore:true
                })
                pageIndex++;
                let pages={};
                    pages[pageName.pageIndex]=pageIndex.toString();
                    pages[pageName.pageSize]=pageSize.toString();
                let res =await refresh({
                    ...pages,
                    ...parameter
                })
                console.log(res)
                if( res.code===0 && res.success ){
                    if(getFreshData){
                        getFreshData(res.data);
                    }  
                }else{
                    Toast.info(`${res.msg}`, 2, null, false);
                }
                this.setState({
                    isLoadingMore:false
                },()=>{
                  console.log(isLoadingMore)
                })
            }
        }    
    }
}





export {PageListMore};