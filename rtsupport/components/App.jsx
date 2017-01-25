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

    setUserName(name) {
        let {users} = this.state;
        users.push(
            {id: users.length, name}
        );

        this.setState({users});

        //TODO: send to server
    }

    addMessage(body) {
        let {messages, users} = this.state;

        let author = users.length > 0 ? users[0].name : 'anonymous';
        let tStamp = new Date;

        messages.push(
            {id: messages.length, body, author, tStamp}
        );
        this.setState({messages});
    }
    
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection 
                    {...this.state}
                    addChannel = {this.addChannel.bind(this)}
                    setChannel = {this.setChannel.bind(this)} />
                    <UserSection
                    {...this.state}
                    setUserName = {this.setUserName.bind(this)} />
                </div>
                <MessageSection
                {...this.state}
                addMessage = {this.addMessage.bind(this)} />
            </div>
        );
    }
}