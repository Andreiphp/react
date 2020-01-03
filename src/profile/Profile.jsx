import React from 'react';
import './Profile.css';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.textA = React.createRef();
        this.Change = this.Change.bind(this);
        this.send = this.send.bind(this);
    }

    Change() {
        this.props.change(this.textA.current.value);
    }
    send() {
        this.props.send()
    }
    render() {
        return <div className='profile'>
            <p>Страница профиля</p>
            {this.props.profile ? <div className="profile-main">
                <div className="profile-avatar">
                    <img src={this.props.profile.photos.small}></img>
                    <div className="profile-name">{this.props.profile.fullName}</div>
                </div>
                <div className="profile-contacts" >
                    
                </div>
            </div> : ''}
            <div className='send'>
                <textarea onChange={this.Change} ref={this.textA} value={this.props.newPstsText}></textarea>
                <button onClick={this.send} type='button'>отправить</button>
            </div>
            <div className="avatar">
                <img src=""></img>
            </div>
            <ul>
                {this.props.posts.map(post => {
                    return <li className='text-left' key={post.id}>{post.name}</li>
                })}
            </ul>
        </div>
    }
}