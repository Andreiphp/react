
export const addNewsActionCreator = () => {
    return { type: 'ADD_NEWS' }
};
export const UpdateNewsCreator = (news) => {
    return { type: 'UPDATE_NEW_NEWS', text: news }
};
const newsReduser = (state, action) => {
    if (action.type === 'ADD_NEWS') {
        let id = state.news[state.news.length - 1].id;
        console.log(state.news);
        
        let newNews = { id: ++id, name: state.newNews };
        console.log(newNews);
        
        let newState = Object.assign({}, state);
        newState.news = [...state.news];
        newState.news.push(newNews);
        return newState;
    } else if (action.type === 'UPDATE_NEW_NEWS') {
        let newState = Object.assign({}, state);
        newState.newNews = action.text;
        return newState;
    }   else {
        state =  {
            newNews: 'next news',
            news:  [
                { id: 0, name: 'new' },
                { id: 1, name: 'new q' },
                { id: 2, name: 'new w' }
            ]
        }
    }
    return state;
}
export default  newsReduser