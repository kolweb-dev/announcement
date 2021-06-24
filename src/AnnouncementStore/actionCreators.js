export const START_LOADING = 'START_LOADING';
export const HANDLE_SUCCESS = 'HANDLE_SUCCESS';
export const HANDLE_ERROR = 'HANDLE_ERROR';
export const ADD_APPLE_ANNOUNCEMENT = 'ADD_APPLE_ANNOUNCEMENT';
export const ADD_BITCOIN_ANNOUNCEMENT = 'ADD_BITCOIN_ANNOUNCEMENT';
export const ADD_TESLA_ANNOUNCEMENT = 'ADD_BITCOIN_ANNOUNCEMENT';
export const REMOVE_CATEGORY_ANNOUNCEMENT = 'REMOVE_CATEGORY_ANNOUNCEMENT';
export const EDIT_CATEGORY_ANNOUNCEMENT = 'EDIT_CATEGORY_ANNOUNCEMENT';


export const startLoading = () => ({type: 'START_LOADING'});
export const handleError = () => ({type: 'HANDLE_ERROR'});
export const handleSuccess = (apple, bitcoin, tesla) => ({
    type: 'HANDLE_SUCCESS',
    apple,
    bitcoin,
    tesla
});
