import React, {Component} from 'react';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';

export default class MessageSection extends Component {
    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Hardware support</strong>
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
    activeUser: React.PropTypes.object.isRequired
}