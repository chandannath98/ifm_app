import { VISITORS_SELETED_VISITORS_LIST, SET_USER_AGE, INCREASE_AGE,VISITORS_SEARCH_VALUE } from './actions';

const initialState = {
    name: '',
    age: [],
    selectedVisitorsItems:[],
    visitorsSearchValue:""
    
     

}

function visitorReducer(state = initialState, action) {
    switch (action.type) {
        
        
        case VISITORS_SEARCH_VALUE:
            return { ...state, visitorsSearchValue: action.payload };
        case VISITORS_SELETED_VISITORS_LIST:
            return { ...state, selectedVisitorsItems: action.payload };

        case SET_USER_AGE:
            return { ...state, age: action.payload };
        case INCREASE_AGE:
            return { ...state, age: state.age + 1 };
        default:
            return state;
    }
}

export default visitorReducer;