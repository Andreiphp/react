import React from 'react';
import { addPostActionCreator, newUpdateCreator, setProfileActionCreator } from './../redux/posts-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import Axios from 'axios';
class ProfileContainerApi extends React.Component {
    userProfile;
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(user => {
                console.log(user.data);
                
                this.props.setUserProfile(user.data);
            }).catch(e => {
                console.log(e);
            });
    }
    render() {
        console.log(this.props);
        
        return <Profile {...this.props} profile={this.props.userProfile} />
    }
}
const mapTooState = (state) => {
    return {
        newPstsText: state.posts.newPstsText,
        posts: state.posts.postes,
        userProfile: state.posts.userProfile,
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
        setUserProfile: (profile) => {
            dispatch(setProfileActionCreator(profile));
        }
    }
};
export default connect(mapTooState, mapDispatchTooState)(ProfileContainerApi);