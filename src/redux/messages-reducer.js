const UPDATE_NEW_TEXT_BODY = 'UPDATE_NEW_TEXT_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
export const updateMessageCreator = (body) => {
    return { type: 'UPDATE_NEW_TEXT_BODY', body: body }
};
export const sendMessageCreator = () => {
    return { type: 'SEND_MESSAGE' }
};
const messegesReducer = (state, action) => {
    if (action.type === UPDATE_NEW_TEXT_BODY) {
        state.newMessageBody = action.body;
        return {
            ...state,
            newMessageBody: state.newMessageBody
        }
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        let h = { id: state.message[state.message.length - 1].id++, name: body, messages: body }
        return {
            ...state,
            newMessageBody: '',
            message: [...state.message, h],
        }
    } else {
        state = {
            newMessageBody: '',
            message: [
                { id: 1, name: 'hi', likesCount: 11 },
                { id: 2, name: 'hy hy hy', likesCount: 12 },
                { id: 3, name: 'ho1 ho ho ho', likesCount: 13 }
            ]
        }
    }
    return state;
}
export default messegesReducer