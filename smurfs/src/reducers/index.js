import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,

    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,

    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,

    EDIT_SMURF_START,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_FAILURE
} from '../actions'

const initialState = {
    smurfs: null,
    error: '',
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    isEditing: false
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isFetching: false
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isPosting: false
            };
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            };
        case DELETE_SMURF_START:
            return {
                ...state,
                isDeleting: true
            };
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isDeleting: false
            };
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isDeleting: false
            };
        case EDIT_SMURF_START:
            return {
                ...state,
                isEditing: true
            };
        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                isEditing: false
            };
        case EDIT_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isEditing: false
            }
        default:
            return state;
    }
}

export default reducer;