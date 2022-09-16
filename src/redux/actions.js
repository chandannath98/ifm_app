export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const VISITORS_SELETED_VISITORS_LIST = 'VISITORS_SELETED_VISITORS_LIST';
export const VISITORS_SEARCH_VALUE="VISITORS_SEARCH_VALUE"






export const setSelectedVisitorsItems = selectedVisitorsItems => dispatch => {
    dispatch({
        type: VISITORS_SELETED_VISITORS_LIST,
        payload: selectedVisitorsItems,
    });
};

export const setVisitorsSearchValue = visitorsSearchValue => dispatch => {
    dispatch({
        type: VISITORS_SEARCH_VALUE,
        payload: visitorsSearchValue,
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