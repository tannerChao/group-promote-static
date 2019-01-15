import React, { Component } from 'react';
import { size } from 'lodash'

export class Tab extends Component {

    itemsClick=()=>{

    }

    render() {
        let { classname='', tabs=[], pages=0} = this.props;

        return (
            size(tabs)>0?
                <div className={`diy-tab ${classname}`}>
                    <header>
                        <article>
                            {
                                tabs.map((o,i)=>{
                                    return  <div key={i} className={`${pages===i?'item-selected':''} item`} onClick={this.itemsClick}>{o.title}</div>
                                })
                            }
                        </article>    
                    </header>
                    <section className='container'>
                        {
                            React.Children.map(this.props.children, function (child) {
                                return child;
                            })
                        }
                    </section>
                </div>
            :
                null
        );
    }
}