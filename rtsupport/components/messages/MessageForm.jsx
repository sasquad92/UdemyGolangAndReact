import React, {Component} from 'react';

export default class MessageForm extends Component {
    
    onSubmit(e) {
        e.preventDefault();

        const node = this.refs.message;
        const messageBody = node.value;
        this.props.addMessage(messageBody);
        node.value = '';
    }

    render() {
        let {activeChannel} = this.props;
        let input;

        if(activeChannel !== undefined) {
            input = (
                <input className='form-control'
                    placeholder='Add Message...'
                    type='text'
                    ref='message'/>
            );
        }
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    {input}
                </div>
            </form>
        );
    }
}

MessageForm.propTypes = {
    addMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}