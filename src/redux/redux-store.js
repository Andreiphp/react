import {createStore, combineReducers} from 'redux';
import postsReducer from './posts-reducer';
import messegesReducer from './messages-reducer';
import newsReduser from './news-reducer';
import menuReducer from './menu-reducers';
import usersReducer from './users-reducer';
let reducers = combineReducers({
    posts: postsReducer,
    messages: messegesReducer,
    news: newsReduser,
    menu: menuReducer,
    users: usersReducer,
});
let store =  createStore(reducers);
export default store;