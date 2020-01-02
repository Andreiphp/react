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
                <NavLink exact  to="/profile" activeClassName="is-active">Профиль</NavLink>
            </div>
            <div className='messages' >
                <NavLink to="/messages" activeClassName="is-active">Сообщения</NavLink>
            </div>
            <div className='news' >
                <NavLink to="/news" activeClassName="is-active">Новости</NavLink>
            </div>
            <div className='users' >
                <NavLink to="/users" activeClassName="is-active">Пользователи</NavLink>
            </div>
        </nav>
    }
}