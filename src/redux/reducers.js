import { SELETED_VISITORS_LIST, SET_USER_AGE, INCREASE_AGE,SET_VISITORS_DATA } from './actions';

const initialState = {
    name: '',
    age: [],
    selectedVisitorsItems:[],
    filterdVisitorsData:[],
}

function visitorReducer(state = initialState, action) {
    switch (action.type) {
        case SELETED_VISITORS_LIST:
            return { ...state, selectedVisitorsItems: action.payload };
        case SET_VISITORS_DATA:
            return { ...state, filterdVisitorsData: action.payload };
        case SET_USER_AGE:
            return { ...state, age: action.payload };
        case INCREASE_AGE:
            return { ...state, age: state.age + 1 };
        default:
            return state;
    }
}

export default visitorReducer;