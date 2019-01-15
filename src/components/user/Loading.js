import React, { Component } from 'react';

export class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    static toggle(visible = false) {
        this.instance && this.instance.setState({
            visible
        });
    }

    render() {
        const { visibles=false } = this.props;
        const { visible } = this.state;
        return (
            <div
                className='loading'
                style={{ display: visible || visibles ? 'flex' : 'none' }}>
                <div>
                    <img src={require('../../assets/image/loading.gif')} alt=""/>
                    <span>正在加载数据…</span>
                </div>
            </div>
        );
    }
}
