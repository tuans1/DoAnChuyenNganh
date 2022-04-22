export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const FETCH_UPLOAD_IMAGE = "FETCH_UPLOAD_IMAGE";



export const ACTIVE_NOTIFY = "ACTIVE_NOTIFY";
const initialState = {
    categories: [],
    loading: false
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            // console.log('redux');
            return { ...state }
        case FETCH_CATEGORY_SUCCESS:
            console.log('fetch success', action.payload);
            return { ...state }
        default:
            return { ...state }
    }
}
export default categoryReducer;


export const onFetchCategory = () => ({
    type: FETCH_CATEGORY,
})

export const onFetchCategorySuccess = payload => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload
})

export const onCreateCategory = payload => ({
    type: CREATE_CATEGORY,
    payload
})

export const onDeleteCategory = payload => ({
    type: DELETE_CATEGORY,
    payload
})