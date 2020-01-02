import React from 'react';
import { addPostActionCreator, newUpdateCreator } from './../redux/posts-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';

const mapTooState = (state) => {
    return {
        newPstsText: state.posts.newPstsText,
        posts: state.posts.postes,
    }
};

const mapDispatchTooState = (dispatch) => {
    return {
        change: (val) => {
            dispatch(newUpdateCreator(val))
        },
        send: () => {
            dispatch(addPostActionCreator());
        },
    }
};
const ProfileContainer = connect(mapTooState, mapDispatchTooState)(Profile);
export default ProfileContainer;