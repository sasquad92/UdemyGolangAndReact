import React, {Component} from 'react';
import Channel from './Channel.jsx';

export default class ChannelList extends Component {
    render() {
        return(
            <ul>
            {this.props.channels.map( chan => {
                return <Channel
                    channel={chan}
                    key={chan.id}
                    {...this.props}
                    />
            })
            }
            </ul>
        )
    }
}

/*
{...this.props} instead of 
setChannel={this.props.setChannel}
activeChannel={this.props.activeChannel}
*/

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}