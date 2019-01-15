import React, { Component } from 'react';

export class Portrait extends Component {
    render() {
        let { name, style={}, styleContent={},photo }=this.props;
        return (
            <div className='Portrait' style={{...style}}>
                <span className='photo' style={photo?{background:`url(${photo}) 100% 100%`}:{}}></span>
                <section className='content'>
                    <p style={{...styleContent}}>{name}</p>
                    {
                        this.props.children
                    }
                </section>
            </div>
        );
    }
}
