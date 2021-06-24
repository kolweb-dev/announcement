import {createStore, applyMiddleware} from "redux";
import {
    START_LOADING,
    HANDLE_SUCCESS,
    HANDLE_ERROR,
    ADD_APPLE_ANNOUNCEMENT,
    ADD_BITCOIN_ANNOUNCEMENT,
    ADD_TESLA_ANNOUNCEMENT,
    REMOVE_CATEGORY_ANNOUNCEMENT,
    EDIT_CATEGORY_ANNOUNCEMENT
} from "./actionCreators";
import {BASE_URL_APPLE, BASE_URL_BITCOIN, BASE_URL_TESLA, getAnnouncements} from "../data/data";
import {startLoading, handleError, handleSuccess} from "./actionCreators";
import thunk from "redux-thunk";

const initialState = {
    apple: [],
    bitcoin: [],
    tesla: [],
    isLoading: false,
    hasError: false
}

export const loadAnnouncement = () => {
    return (dispatch) => {
        dispatch(startLoading());

        return Promise.all([
            getAnnouncements(BASE_URL_APPLE),
            getAnnouncements(BASE_URL_BITCOIN),
            getAnnouncements(BASE_URL_TESLA)

        ]).then(responses => {
            let [apple, bitcoin, tesla] = responses.map(response => response.articles);
            dispatch(handleSuccess(apple, bitcoin, tesla));
        })
            .catch(() => dispatch(handleError()))
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case HANDLE_SUCCESS:
            return {
                ...state,
                apple: action.apple,
                tesla: action.tesla,
                bitcoin: action.bitcoin,
                isLoading: false
            }
        case HANDLE_ERROR:
            return {
                ...state,
                hasError: true
            }
        case ADD_APPLE_ANNOUNCEMENT:
            return {
                ...state,
                apple: [
                    {
                        author: action.payload.authorNameValue,
                        content: action.payload.contentValue,
                        title: action.payload.titleValue,
                        urlToImage: randomAppleImg(),
                        description: action.payload.descriptionValue,
                        publishedAt: new Date(),
                    }
                    , ...state.apple]
            }
        case ADD_BITCOIN_ANNOUNCEMENT:
            return {
                ...state,
                bitcoin: [
                    {
                        author: action.payload.authorNameValue,
                        content: action.payload.contentValue,
                        title: action.payload.titleValue,
                        urlToImage: randomAppleImg(),
                        description: action.payload.descriptionValue,
                        publishedAt: new Date(),
                    }
                    , ...state.bitcoin]
            }
        case ADD_TESLA_ANNOUNCEMENT:
            return {
                ...state,
                tesla: [
                    {
                        author: action.payload.authorNameValue,
                        content: action.payload.contentValue,
                        title: action.payload.titleValue,
                        urlToImage: randomAppleImg(),
                        description: action.payload.descriptionValue,
                        publishedAt: new Date(),
                    }
                    , ...state.tesla]
            }
        case REMOVE_CATEGORY_ANNOUNCEMENT:
            let {content} = action.payload;
            let indexElmForRemove = state[action.payload.category].findIndex((el) => el.content === content)


            return {
                ...state,
                [action.payload.category]: [
                    ...state[action.payload.category].slice(0, indexElmForRemove),
                    ...state[action.payload.category].slice(indexElmForRemove + 1)
                ]
            }
        case EDIT_CATEGORY_ANNOUNCEMENT:
            let {title, currentTitle} = action.payload;
            let indexElmForEdit = state[action.payload.category].findIndex((el) => el.title === title
            )


            return {
                ...state,
                [action.payload.category]: [
                    ...state[action.payload.category].slice(0, indexElmForEdit),
                    {
                        ...state[action.payload.category][indexElmForEdit],
                        title: currentTitle,

                    },
                    ...state[action.payload.category].slice(indexElmForEdit + 1)
                ]
            }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    initialState,
        applyMiddleware(thunk));

export default store;


function randomAppleImg() {
    const arrImg = [
        "https://s.yimg.com/os/creatr-uploaded-images/2021-06/e6c71860-cdbe-11eb-a7b6-362b2e81322f",
        "https://cdn.vox-cdn.com/thumbor/5SGRzHkHDDnMw6NuNSC0VQ9Eg9Y=/0x40:2000x1087/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22643336/lcimg_bdd5a604_baa2_4518_a03e_bf828a525d3e.jpg",
        "https://media.wired.com/photos/60bea64970d107b3e767d5a8/191:100/w_1280,c_limit/Gear-Apple.WWDC21.AppleWatch.jpg",
        "https://cdn.vox-cdn.com/thumbor/XqWoIWxURC1j93r1ILvVdXn_ACY=/0x148:2050x1221/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22022582/bfarsace_201106_4269_002.0.jpg",
        "https://s.yimg.com/os/creatr-uploaded-images/2020-11/67873830-225d-11eb-afef-1896b96f9c17",
        "https://s.yimg.com/os/creatr-uploaded-images/2021-06/3c71b870-c904-11eb-9fdd-4af50cd953d0",
        "https://s.yimg.com/os/creatr-uploaded-images/2021-05/bbe61160-ba71-11eb-ae7b-040f51bb9abb",
        "https://techcrunch.com/wp-content/uploads/2020/09/apple-music-icon-ios-2020.jpg?w=711",
        "https://techcrunch.com/wp-content/uploads/2021/06/Apple-WWDC-2021-2021-06-07-at-2.21.49-PM.jpg?w=715",
        "https://cdn.vox-cdn.com/thumbor/3F58nnK4PqWNJcK2fLG4qMC8GeE=/0x32:1632x886/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/15985971/Apple_introduces_apple_tv_plus_03252019_big.jpg.large_2x.jpg",
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/46e42abc7aedc88a4adeb3d503fc5394.jpg",
        "https://s.yimg.com/os/creatr-uploaded-images/2021-04/c1609980-9d75-11eb-befe-ff7ec9a9d691"
    ];
    return arrImg[Math.floor(Math.random() * arrImg.length)];
}

