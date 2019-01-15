import React, { Component } from 'react';
import { PullToRefresh } from 'antd-mobile';
import { size } from 'lodash';
import { Toast } from 'antd-mobile';
import { NoContent } from '../NoContent';

let   pageIndex = 1;
const pageSize=20;

class PageFresh extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
        };
    }
    
    render() {
        let {  Components, parameter, pageName, getFreshData, onFresh, boxStyle={}, dataSouce, noContent='',contents, title } =this.props;
        let freshState=size(dataSouce)%pageSize===0?true:false;
        console.log(dataSouce)
        return(
                size(dataSouce)>0?
                    <PullToRefresh
                        damping={60}
                        ref={el => this.ptr = el}
                        style={{
                        height: this.state.height,
                        overflow: 'auto',
                        }}
                        direction='up'
                        indicator={{ activate: <span style={{fontSize:'1.4rem'}}>加载更多</span>, finish: <span style={{fontSize:'1.4rem'}}>加载完成</span> }}
                        onRefresh={async () => {
                            this.setState({ refreshing: true });
                            if(freshState){
                                pageIndex++
                                let pages={};
                                    pages[pageName.pageIndex]=pageIndex.toString();
                                    pages[pageName.pageSize]=pageSize.toString();
                                let res = await onFresh({
                                    ...parameter,
                                    ...pages
                                })
                                if(res.success && res.code===0){
                                    getFreshData(res.data);
                                }else{
                                    Toast.info(`${res.msg}`, 2, null, false);
                                }
                            }
                        }}
                        distanceToRefresh = {window.devicePixelRatio * 25}

                    >
                        {dataSouce.map((o,i) => (
                            <div key={i} style={{...boxStyle}} className='page-fresh-box'>
                                {
                                    Components(o,i)
                                }
                            </div>
                            
                        ))}
                    </PullToRefresh>
                :
                <NoContent 
                    type={noContent} 
                    contents={ contents }
                    title={ title }
                />
        );
    }
}
export {PageFresh}

