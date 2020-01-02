import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
class MenuItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <li>{this.props.item}</li>
    }
}
class Header_Menu extends React.Component {
    constructor(props) 
    {
        super(props);
        console.log(this.props)
    }
    render() {
        return <ul className='menu'>
            {this.props.menu.map(item => {
                return <MenuItem key={item} item={item} />
            })}
        </ul>
    }
}
const mapStateTooprops = (state) => {
    return {
        menu: state.menu
    }
};

// const mapDispatchTooProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         },
//         updateMessage: (val) => {
//             dispatch(updateMessageCreator(val))
//         }

//     }
// }
const Header = connect(mapStateTooprops, null)(Header_Menu);
export default Header;