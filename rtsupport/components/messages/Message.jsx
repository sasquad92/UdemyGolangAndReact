import React, {Component} from 'react';

export default class Message extends Component {

    render() {
        console.log('renderuję pojedynczą wiadomość...');
        const {message} = this.props;
        return (
            <li>
                {message.user}<br/>
                {message.message}
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired,
    activeUser: React.PropTypes.object.isRequired
}