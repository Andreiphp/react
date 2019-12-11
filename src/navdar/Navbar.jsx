import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <nav>
            <div className='profile' >
                <NavLink  to="/profile" activeClassName='is-active'>Profile</NavLink>
            </div>
            <div className='messages' >
                <NavLink to="/messages" activeClassName='is-active'>Messages</NavLink>
            </div>
            <div className='news' >
                <NavLink to="/news" activeClassName='is-active'>News</NavLink>
            </div>
        </nav>
    }
}