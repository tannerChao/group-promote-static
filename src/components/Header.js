import React, { Component } from 'react';

export class Header extends Component {
    render() {
        let { title, close=false, style={}}=this.props;
        return (
            <div className='Header' style={{...style}}>
                <p>{title}</p>
                {
                    close?<span></span>:null
                }
            </div>
        );
    }
}
