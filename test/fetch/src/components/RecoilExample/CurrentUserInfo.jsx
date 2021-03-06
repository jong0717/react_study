import React from "react";
import axios from "axios";
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

// const currentUserIDState = atom({
//   key: "CurrentUserID",
//   default: 1,
// });
// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({get}) => {
//       return tableOfUsers[get(currentUserIDState)].name;
//     },
//   });
const currentUserNameQuery = selectorFamily({
  key: "CurrentUserName",
  get: (id) => async () => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    return response.data.name;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery(1));
  return <div>{userName}

  </div>;
}

export default function CurrentUserInfo() {
  return (
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
            <CurrentUser />
        </React.Suspense>
      </ErrorBoundary>
  );
}
