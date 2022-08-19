export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const VISITORS_SELETED_VISITORS_LIST = 'VISITORS_SELETED_VISITORS_LIST';
export const VISITORS_SET_VISITORS_DATA ='VISITORS_SET_VISITORS_DATA';
export const VISITORS_UNIQUE_RATING="VISITORS_UNIQUE_RATING";
export const VISITORS_SELECTED_RATING="VISITORS_SELECTED_RATING";
export const VISITORS_MONTH_YEAR_LIST="VISITORS_MONTH_YEAR_LIST"
export const VISITORS_MONTH_YEAR_VALUE="VISITORS_MONTH_YEAR_VALUE"
export const VISITORS_FILTER_COUNT="VISITORS_FILTER_COUNT"



export const setUniqueRatingList = uniqueRatingList => dispatch => {
    dispatch({
        type: VISITORS_UNIQUE_RATING,
        payload: uniqueRatingList,
    });
};
export const setVisitorsFilterCount = visitorsFilterCount => dispatch => {
    dispatch({
        type: VISITORS_FILTER_COUNT,
        payload: visitorsFilterCount,
    });
};
export const setVisitorsMonthYearList = visitorsMonthYearList => dispatch => {
    dispatch({
        type: VISITORS_MONTH_YEAR_LIST,
        payload: visitorsMonthYearList,
    });
};
export const setVisitorsMonthYearVlaue = visitorsMonthYearValue => dispatch => {
    dispatch({
        type: VISITORS_MONTH_YEAR_VALUE,
        payload: visitorsMonthYearValue,
    });
};
export const setVisitorSelectedRating = visitorSelectedRating => dispatch => {
    dispatch({
        type: VISITORS_SELECTED_RATING,
        payload: visitorSelectedRating,
    });
};


export const setSelectedVisitorsItems = selectedVisitorsItems => dispatch => {
    dispatch({
        type: VISITORS_SELETED_VISITORS_LIST,
        payload: selectedVisitorsItems,
    });
};


export const setfilterdVisitorsData = filterdVisitorsData => dispatch => {
    dispatch({
        type: VISITORS_SET_VISITORS_DATA,
        payload: filterdVisitorsData,
    });
};



export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};