// import logo from './logo.svg';
import './App.css';
import React, { useCallback } from 'react';
import UserList from './UserList';
// import InputSample from './InputSample';
// import Hello from './Hello';
import Wrapper from './Wrapper';
import CreateUser from './CreateUser';
// import Counter from './Counter';
import { useReducer } from 'react';
// import { useRef, useState, useMemo, } from 'react';

// const countActiveUsers = (users) => {
//     console.log('활성 사용자 수를 세는중...');
//     return users.filter((user) => user.active).length;
// };
const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value,
                },
            };
        default:
            return state;
    }
};
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value,
        });
    }, []);
    /*
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // 스프레드
        setUsers([...users, user]);
        // concat
        // setUsers([users.concat(user)]);
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    }, [users, username, email]);

    const onRemove = useCallback(
        (id) => {
            setUsers(users.filter((user) => user.id !== id));
        },
        [users]
    );

    const onToggle = useCallback(
        (id) => {
            setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
        },
        [users]
    );

    const count = useMemo(() => countActiveUsers(users), [users]);
        */
    return (
        <Wrapper>
            <CreateUser username={username} email={email} onChange={onChange} />
            <UserList users={users} />
            <div>활성사용자 수 : 0</div>
            {/* <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} /> */}
            {/* <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> */}
            {/* <div>활성사용자 수 : {count}</div> */}
            {/* <hr></hr> */}
            {/* <Counter></Counter> */}
        </Wrapper>
    );
}

export default App;
