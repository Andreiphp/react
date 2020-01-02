export const addPostActionCreator = () => {
    return { type: 'ADD_POST' }
};
export const newUpdateCreator = (text) => {
    return { type: 'UPDATE_NEW_POST', text: text }
};

 const postsReducer = (state, action) => {
    if (action.type === 'ADD_POST') {
        let newPost = { id: 6, name: state.newPstsText };
        return {
            ...state,
            postes: [...state.postes, newPost],
        }
    } else if (action.type === 'UPDATE_NEW_POST') {
        state.newPstsText = action.text;
        return {
            ...state,
            newPstsText: state.newPstsText
        }
    }   else {
        state =  {
            newPstsText: 'nova mira',
            postes:  [
                { id: 1, name: 'hi' },
                { id: 2, name: 'hy hy hy' },
                { id: 3, name: 'ho ho ho ho' }
            ]
        }
    }
    return state;
};
export default postsReducer;