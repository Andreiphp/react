import React from 'react';
import { NavLink } from 'react-router-dom'
const DialogItem = (props) => {
    return <div className="dialogs-items">
        <div className="dialog">
            <NavLink to={'/profile/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
}
export default DialogItem;