import React, { Component } from 'react';

export class Lis extends Component {
    render() {
        let { icon, title, content, button, details } = this.props
        return (
            <div className='lis'>
                <section>
                    {
                        icon?
                            <span className={icon}></span>
                        :
                            null
                    }
                    
                    <div className='text'>
                        {
                            title?
                                <title className='title'>{title}</title>
                            :
                                null
                        }
                        {
                            content?
                                <p className='content'>
                                    { content }
                                    {
                                        details?
                                            details()
                                        :
                                            null
                                    }
                                    
                                </p>
                            :
                                null
                        }
                    </div>
                    {
                        button?
                            this.props.children
                        :
                            null
                    }
                </section>    
            </div>
        );
    }
}