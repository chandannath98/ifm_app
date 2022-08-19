import { VISITORS_SELETED_VISITORS_LIST, SET_USER_AGE, INCREASE_AGE,VISITORS_SET_VISITORS_DATA,VISITORS_UNIQUE_RATING,VISITORS_SELECTED_RATING,VISITORS_MONTH_YEAR_LIST,VISITORS_MONTH_YEAR_VALUE,VISITORS_FILTER_COUNT } from './actions';

const initialState = {
    name: '',
    age: [],
    selectedVisitorsItems:[],
    filterdVisitorsData:[],
    uniqueRatingList:[""],
    visitorSelectedRating:"All",
    visitorsMonthYearList:[],
    visitorsMonthYearValue:"All",
    visitorsFilterCount:0,
    

}

function visitorReducer(state = initialState, action) {
    switch (action.type) {
        
        case VISITORS_UNIQUE_RATING:
            return { ...state, uniqueRatingList: action.payload };
        case VISITORS_FILTER_COUNT:
            return { ...state, visitorsFilterCount: action.payload };
        case VISITORS_SELECTED_RATING:
            return { ...state, visitorSelectedRating: action.payload };
        case VISITORS_MONTH_YEAR_LIST:
            return { ...state, visitorsMonthYearList: action.payload };
        case VISITORS_MONTH_YEAR_VALUE:
            return { ...state, visitorsMonthYearValue: action.payload };
        case VISITORS_SELETED_VISITORS_LIST:
            return { ...state, selectedVisitorsItems: action.payload };
        case VISITORS_SET_VISITORS_DATA:
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