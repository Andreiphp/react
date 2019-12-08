import React from 'react';
import './Nav.css'
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <nav>
            <div className='profile' >
                <a href="/profile">Profile</a>
            </div>
            <div className='messages' >
                <a href="/messages">Messages</a>
            </div>
            <div className='news' >
                <a href="/news">News</a>
            </div>
        </nav>
    }
}