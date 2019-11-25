import React from 'react';
import './Menu.css'
export default class Menu extends React.Component {
    render() {
        return <ul className='menu-list'>
            <li className='menu-item'>{this.props.menu.item[0]}</li>
            <li className='menu-item'>{this.props.menu.item[1]}</li>
            <li className='menu-item'>{this.props.menu.item[2]}</li>
        </ul>
    }
}

