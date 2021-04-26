import axios from "axios"

export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_START = "FETCHING_START"
export const FETCHING_FAIL = "FETCHING_FAIL"


export const fetchQuote = () => (dispatch)=> {
    dispatch({type:FETCHING_START});

    axios.get('https://api.kanye.rest/')
    .then(res => {
        console.log(res.data.quote);
        dispatch({
            type: FETCHING_SUCCESS,
            payload: res.data.quote,
        })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({type:FETCHING_FAIL, payload: err.message})
    })
}