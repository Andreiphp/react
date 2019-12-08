import React from 'react';
import './Menu.css'
import Form1 from '../form/Form';
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        // this.clickedLi = this.clickedLi.bind(this);
    }
    render() {
        return <div >
            <ul className='menu-list'>
                <li onClick={(e) => { this.clickedLi(e) }} className='menu-item'>{this.props.menu.item[0]}</li>
                {this.props.menu.item.length &&
                    <li className='menu-item'>{this.props.menu.item[1]}</li>
                }
                <li className='menu-item'>{this.props.menu.item[2]}</li>
            </ul>
        </div>
    }
    clickedLi(e) {
        console.log(e);
    }
}

