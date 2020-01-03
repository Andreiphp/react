import React from 'react';
import './users.css'
import {NavLink} from 'react-router-dom';
export default class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div className="users-container">
            <div className="users-pagination">
                <ul className="users-p-c">
                    {pages.map(p => {
                        return <li onClick={() => { this.props.setCurentPage(p) }} className={this.props.curentPage === p ? 'user-selected-page' : ''} key={p} >{p}</li>
                    })}
                </ul>
            </div>
            <div className="users">
                {this.props.users.map(user => {
                    return <div key={user.id}>
                        <div className="users-avatar"></div>
                        <NavLink to={'/profile/' + user.id}>
                               <div className="users-name">{user.name}</div>
                        </NavLink>
                     

                        <div className="users-btn">
                            {!user.folowed ?
                                <button onClick={() => { this.props.setFolow(user.id) }} type="button">folow</button>
                                : <button onClick={() => { this.props.setUnfolow(user.id) }} type="button">unfolow</button>
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}