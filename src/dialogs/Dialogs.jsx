import React from 'react';
import DialogItem from './dialog/dialog';
import Messages from './message/Message';
import './Dialogs.css'




export default class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.dialogs = [{
            id: 1, name: 'aaa'
        },
        {
            id: 2, name: 'bbb'
        },
        {
            id: 3, name: 'ccc'
        },
        {
            id: 4, name: 'ddd'
        },
        ];
        this.mess = [
            { id: 1, name: 'hi' },
            { id: 2, name: 'hy hy hy' },
            { id: 3, name: 'ho ho ho ho' }
        ]
        this.dialogsComp = [
            <DialogItem key={this.dialogs[0].id} name={this.dialogs[0].name} id={this.dialogs[0].id} />,
            <DialogItem key={this.dialogs[1].id} name={this.dialogs[1].name} id={this.dialogs[1].id} />,
            <DialogItem key={this.dialogs[2].id} name={this.dialogs[2].name} id={this.dialogs[2].id} />,
        ]
    }
    render() {
        return <div className="dialogs">
            {this.dialogsComp}
            <div className="messages">
                <Messages title="Hi" />
                <Messages title="HI HI" />
                <Messages title="HU HI HI" />
            </div>
        </div>
    }
}