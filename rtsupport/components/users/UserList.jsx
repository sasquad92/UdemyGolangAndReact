import React, {Component} from 'react';
import User from './User.jsx';

export default class ChannelList extends Component {
    render() {
        return(
            <ul>
            {this.props.users.map( usr => {
                return <User
                    user={usr}
                    key={usr.id}
                    {...this.props}
                    />
            })
            }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    users: React.PropTypes.array.isRequired,
    setUser: React.PropTypes.func.isRequired,
    activeUser: React.PropTypes.object.isRequired
}