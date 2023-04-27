import React, {createContext, useContext, useReducer} from 'react'
// 기본 상태
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null
  },
  user:{
    loading: false,
    data: null,
    error: null
  }
}
// 로딩중일때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null
};
// 성공했을때 상태 생성 함수
const success = data => ({
  loading: false,
  data,
  error:null
});
//실패했을때 상태 생성 함수
const error = error => ({
  loading: false,
  data: null,
  error:error
})

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS' :
      return {
        ...state,
        users: loadingState
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.success)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// State용 Context, Dispatch용 Context 따로 만들어주기
const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}