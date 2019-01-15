import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className='incarnate-Footer'>
                <input type="checkbox" name="fruit" value="全选" />
                <p>已选：<span>0.00</span>元</p>
                <button>下一步</button>
            </div>
        );
    }
}