import React, { Component } from 'react';
import { get, has, size } from 'lodash'
import { Toast } from 'antd-mobile';

export class INPUT extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    change = (e) => {
        let { type = 'basic' } = this.props;
        if (type !== 'basic' && has(this, get(this.props, 'type'))) {
            this.props.type(e.target.value)
        } else {
            this.setState({
                value: e.target
            }, () => {
                if (has(this.props, 'getInputVal')) {
                    this.props.getInputVal(e.target.value)
                }
            })
        }
    }

    basic = () => {

    }

    onblurs = () => {

        let { onblur = false, parameter = {}, values, regular } = this.props;

        if (typeof onblur === 'function') {
            onblur({
                ...parameter
            })
        } else {
            if (onblur) {
                if (has(this.props, 'regular')) {
                    if (has(regular, 'onblurRules')) {
                        if (!regular.onblurRules.test(values)) {
                            Toast.info(`${regular.message}`, 2, null, false);
                        }
                    } else {
                        if (!regular.rules.test(values)) {
                            Toast.info(`${regular.message}`, 2, null, false);
                        }
                    }
                }
            }
        }

    }

    render() {
        let { name, values, placeholder, style = {} } = this.props;
        let { value } = this.state
        return (
            <div className={`${has(this.props, 'inputLine') ? this.props.inputLine : ''}`}>
                {
                    has(this.props, 'title') ?
                        <label>{this.props.title}</label>
                        :
                        null
                }
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={this.change}
                    style={{ ...style }}
                    ref={refs => { this.inputRef = refs }}
                    onBlur={this.onblurs}
                />
                {
                    this.props.children
                }
            </div>

        );
    }
}