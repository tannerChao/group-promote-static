import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { size } from 'lodash';

export class IntroduceItems extends Component {
    render() {
        let { company, oState, url, data }=this.props
        let icon = `icon icon-${oState.state}`;
        return (
            <Link to={{pathname:url, state:data}}  className='IntroduceItems'>
                <div>
                    <p>{company.substring(0,2)}****{company.substring(size(company)-2)}</p>
                    {
                        this.props.children
                    }
                </div>      
                <span className={icon}></span>
            </Link>
        );
    }
}
