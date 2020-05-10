import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getvideosegmentresult = (data) => {
    debugger
    return{
        type: actionTypes.GET_SEGMENT,
        data: data
    }
}

export const addsuc = () => {
    debugger
    return{
        type: actionTypes.ADD_SUCCESS
    }
}

export const Get_Video = (body) =>{
    debugger
    console.log(body)
    let url = "http://3.228.13.3:4000/api/process-interval"
    return dispatch => {
        axios.
        post(url, body)
        .then(res=>{
            debugger
            console.log(body)
            dispatch(getvideosegmentresult(res.data))
            debugger
        })
        .catch(err=>{
            debugger
        })
    }
}
