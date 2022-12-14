import _ from 'lodash';
import { PostsAction, PostsActionTypes } from '../actions/postsActions';
import { Reducer } from 'redux';

export interface Post {
    id: number;
    firstname:string;
    lastname:string;
    age:number;
    number:number;
}

export interface Posts {
    [id: number]: Post;
}

export interface PostsState {
    items: Posts;
    loading: boolean;
    error: String | null
}

const initialState = {
    items: {},
    loading: false,
    error: null
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POST:
        case PostsActionTypes.FETCH_POSTS:
        case PostsActionTypes.ADD_POST:
        case PostsActionTypes.EDIT_POST:
            return { ...state, loading: true };

        case PostsActionTypes.FETCH_POST_FAIL:
        case PostsActionTypes.FETCH_POSTS_FAIL:
        case PostsActionTypes.ADD_POST_FAIL:
            return { ...state, loading: false };

        case PostsActionTypes.FETCH_POST_SUCCESS:
        case PostsActionTypes.ADD_POST_SUCCESS:
            const { id } = action.payload;
            return {
                ...state,
                items: { ...state.items, [id]: action.payload },
                loading: false
            };

        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, 'id') },
                loading: false
            };

        case PostsActionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                items: { ..._.omit(state.items, action.payload) }
            };

        default:
            return state;
    }
};
