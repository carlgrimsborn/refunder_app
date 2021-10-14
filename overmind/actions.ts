import axios from 'axios';
import { Action, AsyncAction } from 'overmind';

export const increment: Action<number> = ({ state }, incrementBy) => {
  state.counter += incrementBy;
};

export const decrement: Action<number> = ({ state }, decrementBy) => {
  state.counter -= decrementBy;
};

type Input = {
  username: string;
  password: string;
};
export const login: AsyncAction<Input> = (
  { state },
  { username, password }
) => {
  axios
    .post(
      'https://www.refunder.se/app/user/login',
      {
        username,
        password,
        grant_type: 'password',
      },
      { headers: { Authorization: 'Basic' } }
    )
    .then((response) => {
      console.log(response);
    });
};
