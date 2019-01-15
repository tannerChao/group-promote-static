import React, { Component } from 'react';

export class BtnShowHide extends Component {
    render() {
        let { style = {}, btnstyle = {} } = this.props;
        return (
            <div style={
                {
                    backgroundColor: '#6e00d2',
                    width: '40px',
                    height: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 5px  #eee',
                    ...style
                }
            }>
                <span style={
                    {
                        backgroundColor: '#fff',
                        width: '20px',
                        height: '20px',
                        borderRadius: '10px',
                        display: 'block',
                        boxShadow: '0px 0px 5px  #fff',
                        ...btnstyle
                    }
                }></span>
            </div>
        );
    }
}
