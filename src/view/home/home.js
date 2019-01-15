import React, { Component } from 'react';
import { RouteWithSubRoutes } from '../../routers';
import '../../assets/sass/animate.scss'
import '../../assets/sass/reset.scss'
import '../../assets/sass/style.scss'
import "../../assets/sass/group.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { match, routes, } = this.props;
        return (
            <div className='home'>
                <RouteWithSubRoutes routes={routes} redirect={`${match.path}/user`} />
            </div>
        );
    }
}
export { Home }