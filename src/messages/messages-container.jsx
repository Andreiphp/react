import React from 'react';
import Messages from './Messages';
import { sendMessageCreator, updateMessageCreator } from './../redux/messages-reducer';
import { connect } from 'react-redux';

// export default class MessagesContainer extends React.Component {
//     store;
//     constructor(props) {
//         super(props);
//         this.onSendMessages = this.onSendMessages.bind(this);
//         this.onUpmess = this.onUpmess.bind(this);
//         this.state = this.props.store.getState().messages;
//         console.log(this.props);
//     }
//     onSendMessages() {
//         this.props.store.dispatch(sendMessageCreator());
//     }
//     onUpmess(val) {
//         this.props.store.dispatch(updateMessageCreator(val));
//     }
//     render() {
//        return <Messages sendMessage={this.onSendMessages}
//          updateMessage={this.onUpmess} mess={this.state}/>
//     }
// }

const mapStateTooprops = (state) => {
    return {
        mess: state.messages
    }
};

const mapDispatchTooProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateMessage: (val) => {
            dispatch(updateMessageCreator(val))
        }

    }
}
const MessagesContainer = connect(mapStateTooprops, mapDispatchTooProps)(Messages);
export default MessagesContainer;