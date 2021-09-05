const initialState = {value: ''};

export const counter = (state = initialState, action) => {
    const lastElem = state.value.slice(-1)

    switch(action.type) {
        case "ADD_ONE":
        return {...state, value: state.value + 1};

        case "ADD_TWO":
        return {...state, value: state.value + 2};

        case "ADD_THREE":
        return {...state, value: state.value + 3};

        case "ADD_FOUR":
        return {...state, value: state.value + 4};

        case "ADD_FIVE":
        return {...state, value: state.value + 5};

        case "ADD_SIX":
        return {...state, value: state.value + 6};

        case "ADD_SEVEN":
        return {...state, value: state.value + 7};

        case "ADD_EIGHT":
        return {...state, value: state.value + 8};

        case "ADD_NINE":
        return {...state, value: state.value + 9};

        case "ADD_ZERO":
        if(lastElem === '' || lastElem === '+' || lastElem === ''){
            return state
        } else return {...state, value: state.value + 0}

        case "ADD_PLUS":
        if (lastElem === '-' || lastElem === '*' || lastElem === '/') {
            return {...state, value: state.value.slice(0, -1) + '+'}
        } else if (lastElem === '+' || lastElem === '') {
            return state
        } else return {...state, value: state.value + '+'}

        case "ADD_MINUS":
        if (lastElem === '*' || lastElem === '+' || lastElem === '/') {
            return {...state, value: state.value.slice(0, -1) + '-'}
        } else if (state.value.slice(-1) !== '-') {
            return{...state, value: state.value + '-'}
        } else return state

        case "ADD_MULTIPLY":
            if (lastElem === '-' || lastElem === '+' || lastElem === '/') {
                return {...state, value: state.value.slice(0, -1) + '*'}
            } else if (lastElem === '*' || lastElem === '') {
                return state
            } else return {...state, value: state.value + '*'}

        case "ADD_DIVIDE":
            if (lastElem === '-' || lastElem === '+' || lastElem === '*') {
                return {...state, value: state.value.slice(0, -1) + '/'}
            } else if (lastElem === '/' || lastElem === '') {
                return state
            } else return {...state, value: state.value + '/'}

        case "ADD_EQUAL":
        if (lastElem === '' || lastElem === '+' || lastElem === '-' || lastElem === '*' || lastElem === '/') {
            return state
        } else return {value: eval(state.value) + ''}

        case "ADD_CLEAR":
            return {value: ''}
        
        case "ADD_BACK":
            return{value: state.value.slice(0, -1)}

        default:
        return state;
    }
}