import React, { Component } from 'react';

export class PopupWindow extends Component {
    render() {
        let {style} =this.props;
        return (
            <div className='popup-window' style={{...style}}>
                {
                    this.props.children
                }
            </div>
        );
    }
}
