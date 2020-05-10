import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    data: []
}

const getsegmentdata = (state, action) => {
    debugger
    state = updateObject(state, {    
        data: action.data
    })
    debugger
    return state;
}

const reducer = (state = initialState, action) => {
    var oldstate = state;
    state = initialState;
    switch (action.type) {
        case actionTypes.GET_SEGMENT:
            return getsegmentdata(state, action);
        default:
            return initialState;
    }
};

export default reducer;