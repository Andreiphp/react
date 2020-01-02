import postsReducer from './posts-reducer';
import messegesReducer from './messages-reducer';
let store = {
    ren: null,
    getState() {
        return this._state;
    },
    _state: {
        dialogs: [{
            id: 1, name: 'aaa'
        },
        {
            id: 2, name: 'bbb'
        },
        {
            id: 3, name: 'ccc'
        },
        {
            id: 4, name: 'ddd'
        },
        ],
        posts: {
            newPstsText: 'nova mira',
            postes:  [
                { id: 1, name: 'hi' },
                { id: 2, name: 'hy hy hy' },
                { id: 3, name: 'ho ho ho ho' }
            ]
        },
        messages: {
            newMessageBody: '',
            message: [
                { id: 1, name: 'hi', likesCount: 11 },
                { id: 2, name: 'hy hy hy', likesCount: 12 },
                { id: 3, name: 'ho1 ho ho ho', likesCount: 13 }
            ]
        },
        menu: [
            'Каталог', 'О нас', 'Контакты',
        ],
        
        sideBar: {}
    },
    subscribe(observer) {
        this.ren = observer;
    },
    dispatch(action) {
        this._state.posts = postsReducer(this._state.posts, action);
        this._state.messages = messegesReducer(this._state.messages, action);
     //   this._state.dialogs = postsReducer(this._state.dialogs, action);
        console.log(this);
        this.ren(this._state);
    }
}
export default store;
window.store = store;
