export const SELETED_VISITORS_LIST = 'SELETED_VISITORS_LIST';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const SET_VISITORS_DATA ='SET_VISITORS_DATA'


export const setSelectedVisitorsItems = selectedVisitorsItems => dispatch => {
    dispatch({
        type: SELETED_VISITORS_LIST,
        payload: selectedVisitorsItems,
    });
};


export const setfilterdVisitorsData = filterdVisitorsData => dispatch => {
    dispatch({
        type: SET_VISITORS_DATA,
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