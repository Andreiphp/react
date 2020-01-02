import React from 'react';
import Axios from 'axios';
import Users from './users';
import Preloader from '../common/preloader';
export default class UsersApicontainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getUsers(this.props.curentPage);
    }
    getUsers = (n) => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`)
            .then(user => {
                this.props.toggleIsloading(true);
                console.log(this.props);
                
                this.props.addUsers(user.data);
            }).catch(e => {
                console.log(e);
            });
    }
    setCurentPage = (n) => {
        this.props.toggleIsloading(false);
        this.props.setCurentPage(n);
        this.getUsers(n);
    }
    render() {
        return <> {!this.props.isLoading ? <Preloader /> :
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                setCurentPage={this.setCurentPage}
                curentPage={this.props.curentPage}
                users={this.props.users}
                setFolow={this.props.setFolow}
                setUnfolow={this.props.setUnfolow}
            />
        }
        </>
    }


}