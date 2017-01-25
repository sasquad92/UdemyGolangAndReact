import React, {Component} from 'react';
import User from './User.jsx';

export default class UserList extends Component {
    render() {
        return(
            <ul>
            {this.props.users.map( usr => {
                return (
                    <User user={usr} key={usr.id}/>
                )
            })
            }
            </ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired,
}