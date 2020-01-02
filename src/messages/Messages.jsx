import React from 'react';
import './Messages.css';
export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.onSendMessages = this.onSendMessages.bind(this);
        this.onUpmess = this.onUpmess.bind(this);
        console.log(this.props)
    }
    onSendMessages() {
        this.props.sendMessage();
    }
    onUpmess(e) {
        let body = e.target.value;
        this.props.updateMessage(body);
    }
    render() {
        return <div className='mess'>
            {this.props.mess.message.map(mess => {
                return <div>
                    <span>{mess.name}</span>
                </div>
            })}
            <div>
                <div><textarea value={this.props.mess.newMessageBody} onChange={this.onUpmess} placeholder='Enter message'></textarea></div>
                <div><button onClick={this.onSendMessages}>Отправить</button></div>
            </div>
        </div>
    }
}