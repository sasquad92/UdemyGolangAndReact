import React, {Component} from 'react';

export default class MessageForm extends Component {
    
    onSubmit(e) {
        e.preventDefault();

        const node = this.refs.message;
        const messageBody = node.value;
        this.props.addMessage(messageBody, this.props.activeUser.name);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input className='form-control'
                    placeholder='Add Message...'
                    type='text'
                    ref='message'/>
                </div>
            </form>
        );
    }
}

MessageForm.propTypes = {
    addMessage: React.PropTypes.func.isRequired,
    activeUser: React.PropTypes.object.isRequired
}