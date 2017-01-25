import React, {Component} from 'react';
import fecha from 'fecha';

export default class Message extends Component {

    render() {
        const {message} = this.props;
        const tStamp = fecha.format(message.tStamp, 'HH:mm:ss DD/MM/YYYY');
        return (
            <li className='message'>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <i className='timestamp'>{tStamp}</i>
                </div>
                <div className='body'>
                    {message.body}
                </div>
                <br/>
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired,
}