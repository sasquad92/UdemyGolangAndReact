import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: [],
            users: [],
            messages: [],
        };
    }

    addChannel(name) {
        let {channels} = this.state;
        
        channels.push(
            {id: channels.length, name} //name: name
        );

        this.setState({channels}); // channels: channels

        //TODO: send to server
    }

    setChannel(activeChannel) {
        this.setState({activeChannel}); // activeChannel: activeChannel
        // TODO: Get channel messages
    }

    addUser(name) {
        let {users} = this.state;
        users.push(
            {id: users.length, name}
        );

        this.setState({users});

        //TODO: send to server
    }

    setUser(activeUser) {
        this.setState({activeUser});
    }

    addMessage(message, user) {
        let {messages} = this.state;

        messages.push(
            {id: messages.length, message, user}
        );
        console.log('wszystkie wiadomości:', messages);
    }
    
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='nav'>
                                <ChannelSection 
                                {...this.state}
                                addChannel = {this.addChannel.bind(this)}
                                setChannel = {this.setChannel.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='nav'>
                                <UserSection
                                {...this.state}
                                addUser = {this.addUser.bind(this)}
                                setUser = {this.setUser.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className='messages-container'>
                        <MessageSection
                        {...this.state}
                        addMessage = {this.addMessage.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}