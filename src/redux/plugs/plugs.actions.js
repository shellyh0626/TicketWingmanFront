import axios from "axios";
import plugsActionTypes from "./plugs.types";

export const FETCH_PLUGS_TYPE = (payload) => {
    return {
        type: plugsActionTypes.fetchPlugsType,
        payload: payload
    }
}

export const FETCH_PLUGS_TYPE_THUNK = async (countryCode) => {
    return async(dispatch) => {
        try{
            const result = await axios.get(`http://localhost:8080/api/plugs/?counterCode=${countryCode}`);
            dispatch(FETCH_PLUGS_TYPE(result.data));
        }catch(err){
            console.log(err);
        }

    }
    
}