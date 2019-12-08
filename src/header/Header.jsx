import React from 'react';
import Menu from './Menu';
import './Header.css'
export default class Header extends React.Component {
    render() {
        if (this.props.title) {
            return <div>
                <h3 className='title'>{this.props.title}</h3>
                <div className='e'>
                    <Menu menu={menu}></Menu>
                </div>
            </div>
        }
        return element
    }
}
class Menus {
    item = ['Главнпая', 'Портфолио', 'Контакты'];
    constructor() {

    }


}
let menu = new Menus();
let element = React.createElement('h1', { className: 'test' }, 'testto');