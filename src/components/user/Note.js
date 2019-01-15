import React, { Component } from 'react';

export class Note extends Component {
    render() {
        let {title, content, icon, style,contents='content' }=this.props
        return (
            <div className='Note' style={{...style}}>
                <span className={icon}></span>
                <section className={contents}>
                    <p>{title}</p>
                    <p>{content}</p>
                </section>
                {
                    this.props.children
                }
            </div>
        );
    }
}