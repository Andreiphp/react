
const FOLLOW = 'FOLLOW';
const UNFOLOW = 'UNFOLOW';
const SETUSERS = 'SETUSERS';
const SETCURENTPAGE = 'SETCURENTPAGE';
const TOGGLEACTION = 'TOGGLEACTION';
const inialState = {
    users: [
    ],
    totalUsersCount: 0,
    pageSize: 5,
    curentPage: 1,
    isLoading: false,
}
const usersReducer = (state = inialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, folowed: true }
                    }
                    return u;
                })
            };
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, folowed: false }
                    }
                    return u;
                })
            };
        case SETUSERS:
            return { ...state, totalUsersCount: 20, users: action.data.items };
        case SETCURENTPAGE:
            return { ...state, curentPage: action.curentPage };
        case TOGGLEACTION:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
};
export default usersReducer;


export const folowAC = (id) => {
    return { type: FOLLOW, id: id };
};
export const unfolowAC = (id) => {
    return { type: UNFOLOW, id: id };
};
export const setUsersAC = (data) => {
    return { type: SETUSERS, data: data };
};
export const setCurentPage = (curentPage) => {
    return { type: SETCURENTPAGE, curentPage: curentPage };
};
export const toggleAction = (isLoading) => {
    return { type: TOGGLEACTION, isLoading: isLoading }
}