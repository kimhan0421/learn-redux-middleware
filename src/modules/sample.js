import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

//액션타입 선언
//한 요청당 세 개를 만들어야 함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//thunk함수 생성. 내부에는 (시작, 성공, 실패) 에 따른 액션 디스패치
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export const getPost = id => async dispatch => {
//   dispatch({type: GET_POST}); //요청 시작한 것 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data
//     }); //요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true
//     });//에러발생
//     throw e; //나중에 컴포넌트단에서 에러를 조회 할 수 있게 해줌
//   }
// }

// export const getUsers = () => async dispatch => {
//   dispatch({type: GET_USERS});
//   try {
//     const response = await api.getPost();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data
//     }); //요청 성공
//   }catch (e) {
//     dispatch({
//       type:GET_USERS_FAILURE,
//       payload: e,
//       error: true
//     });//에러발생
//     throw e; //나중에 컴포넌트단에서 에러를 조회 할 수 있게 해줌
//   }
// }

//초기상태 선언
//요청의 로딩 중 상태를 loading이라는 객체에서 관리
const initialState ={
  // loading : {
  //   GET_POST: false,
  //   GET_USERS: false
  // },
  post: null,
  users: null
};

const sample = handleActions(
  {
    // [GET_POST] : state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: true //요청 시작
    //   }
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false //요청 완료
      },
      post: action.payload
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST:false// 요청완료
    //   }
    // }),
    // [GET_USERS] : state => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true //요청 시작
    //   }
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false //요청 완료
      },
      users: action.payload
    })
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS:false// 요청완료
    //   }
    // }),
  },
  initialState
);

export default sample;
