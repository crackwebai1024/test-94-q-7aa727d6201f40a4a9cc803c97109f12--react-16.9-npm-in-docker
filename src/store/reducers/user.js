import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    data: [],
    durationlist:[],
}

const getsegmentdata = (state, action) => {
    debugger
    state = updateObject(state, {    
        data: action.data
    })
    debugger
    return state;
}

const getrange = (state, action) => {
    state = updateObject(state, {
        durationlist: action.body
    })
}

const reducer = (state = initialState, action) => {
    var oldstate = state;
    state = initialState;
    switch (action.type) {
        case actionTypes.GET_SEGMENT:
            return getsegmentdata(state, action);
        case actionTypes.GET_RANGE:
            return getrange(state, action);
        default:
            return initialState;
    }
};

export default reducer;