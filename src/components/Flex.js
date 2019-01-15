import React, { Component } from 'react';

export class Flex extends Component {
    render() {
        let {style={}} = this.props;
        return (
            <div style={{display:'flex',...style}}>
                {this.props.children}
            </div>
        );
    }
}
