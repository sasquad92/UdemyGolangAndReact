import React, {Component} from 'react';
import Message from './Message.jsx';

export default class MessageList extends Component {
    render() {
        return(
            <ul>
            {this.props.messages.map( mes => {
                return <Message
                    message={mes}
                    key={mes.id}
                    />
            })
            }
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
}