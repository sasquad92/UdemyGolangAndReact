import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: [],
            users: [],
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

    
    render() {
        return (
            <div className='app'>
                <div class='row'>
                    <div class='col-md-4'>
                        <div className='nav'>
                            <ChannelSection 
                            {...this.state}
                            addChannel = {this.addChannel.bind(this)}
                            setChannel = {this.setChannel.bind(this)} />
                        </div>
                        <div className='nav'>
                            <UserSection
                            {...this.state}
                            addUser = {this.addUser.bind(this)}
                            setUser = {this.setUser.bind(this)} />
                        </div>
                    </div>
                    <div class='col-md-8'>
                    </div>
                </div>
            </div>
        );
    }
}