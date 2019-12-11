import React from 'react';
const Posts = (props) => {
    return (
       <div>
            <p>{props.name}</p>
            <span>{props.likesCount}</span>
       </div>
    )
}
export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.mess = [
            { id: 1, name: 'hi', likesCount: 11 },
            { id: 2, name: 'hy hy hy', likesCount: 12 },
            { id: 3, name: 'ho ho ho ho', likesCount: 13 }
        ]
    }
    render() {
        return <div>
            <h1>Messages</h1>
            <div><Posts name={this.mess[0].name} likesCount={this.mess[0].likesCount}/></div>
            <div><Posts name={this.mess[1].name}  likesCount={this.mess[1].likesCount}/></div>
            <div><Posts name={this.mess[2].name}  likesCount={this.mess[2].likesCount}/></div>
        </div>
    }
}