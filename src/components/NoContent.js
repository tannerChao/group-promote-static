import React, {Component} from 'react'
export class NoContent extends Component {
    render() {
        const { type, title, contents } = this.props
        return (
            <div className={`no-content-box ${type}`}>
                <div className="content">
                    <div className="img"></div>
                    {
                        type === 'account' ? 
                        (
                            <>
                                <p>暂无记录</p>
                                <p>……</p>
                            </>
                        ) :
                        (
                            <>
                                <p>{ title }</p>
                                <p>{ contents }</p>
                            </>
                        )
                    }
                </div>
            </div>
        )
    }
}