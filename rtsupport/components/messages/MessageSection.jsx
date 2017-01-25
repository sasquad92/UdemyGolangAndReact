import React, {Component} from 'react';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';

export default class MessageSection extends Component {
    render() {
        let {activeChannel} = this.props;
        let channel = activeChannel !== undefined ? activeChannel.name : 'undefind channel';
        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{channel}</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        );
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    addMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}