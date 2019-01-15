import React, { Component } from 'react';
import { ListView, Toast } from 'antd-mobile';
import { size } from 'lodash';
import { NoContent } from '../NoContent';

let   pageIndex = 1;
const pageSize=20;

class PageList extends Component {

    constructor(props) {
        super(props);
        const data = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
            data,
            isLoading: true,
        };
    }

    
    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    
        // simulate initial Ajax
        this.rData = this.genData();
        this.setState({
            data: this.state.data.cloneWithRows(this.rData),
            isLoading: false,
        });

    }

    genData=()=>{
        let { dataSouce } = this.props;
        const dataBlob = {};
        for (let i = 0; i < size(dataSouce); i++) {
            dataBlob[`${i}`] = `row - ${i}`;
        }
        return dataBlob;
    }

    onEndReached = async (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        console.log(1)
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }

        let { parameter, pageName, getFreshData, onFresh, dataSouce } =this.props;
        let freshState=size(dataSouce)%12===0?true:false;
        this.setState({ isLoading: true });

        if(freshState){
            
            pageIndex++;
            console.log(pageIndex)
            let pages={};
                pages[pageName.pageIndex]=pageIndex.toString();
                pages[pageName.pageSize]=pageSize.toString();
            let res = await onFresh({
                ...parameter,
                ...pages
            })
            if(res.success && res.code===0){

                getFreshData(res.data);
                this.setState({
                    isLoading: false,
                });

            }else{
                Toast.info(`${res.msg}`, 2, null, false);
            }
        }


      }

    render() {
        let {  Components, boxStyle={}, dataSouce, noContent='',contents, title } =this.props;

        let index = size(dataSouce) - 1;
        const row = (rowID) => {

            if (index < 0) {
                index = size(dataSouce) - 1;
            }
            const o = dataSouce[index--];
            return (
                    <div key={rowID} style={{...boxStyle}} className='page-fresh-box'>
                        {
                            Components(o,rowID)
                        }
                    </div>
            );
        };
        return(
                size(dataSouce)>0?
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.data}
                        renderRow={row}
                        className="am-list"
                        pageSize={4}
                        useBodyScroll
                        onScroll={() => { console.log('scroll'); }}
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                    :
                    <NoContent 
                        type={noContent} 
                        contents={ contents }
                        title={ title }
                    />
        );
    }
}
export {PageList}

