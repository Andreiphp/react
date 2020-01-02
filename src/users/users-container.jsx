import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, unfolowAC, folowAC, setCurentPage, toggleAction } from '../redux/users-reducer';
import UsersApicontainer from './users-api-container';
export default connect((state) => {
    return { 
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        curentPage: state.users.curentPage,
        isLoading: state.users.isLoading,
    }
}, (dispatch) => {
    return {
        addUsers: (data) => {
            dispatch(setUsersAC(data))
        },
        setFolow: (id) => {
            dispatch(folowAC(id));
        },
        setUnfolow: (id) => {
            dispatch(unfolowAC(id));
        },
        setCurentPage: (number) => {
            dispatch(setCurentPage(number));
        },
        toggleIsloading: (isloading) => {
            dispatch(toggleAction(isloading));
        }
    }
})(UsersApicontainer);