import axios from 'axios';
import { Action, AsyncAction } from 'overmind';

export const increment: Action<number> = ({ state }, incrementBy) => {
  state.counter += incrementBy;
};

export const decrement: Action<number> = ({ state }, decrementBy) => {
  state.counter -= decrementBy;
};

export const setToken: Action<string> = ({state}, value) => {
  state.token = value 
}
export const setLoggedIn : Action<boolean> = ({state}, value) => {
  state.isLoggedIn = value
}

type Input = {
  username: string;
  password: string;
  onSuccess: () => void;
  onError: () => void
};
type Output = {
  data: {
    data: {
      access_token: string
    }
  },
  status: number
}
export const login: AsyncAction<Output, Input> = async (
  { state, actions },
  { username, password, onSuccess, onError }
) => {
  try {
 await axios
    .post(
      'https://www.refunder.se/app/user/login',
      {
        username,
        password,
        grant_type: 'password',
      },
      { headers: { Authorization: 'Basic aXBob25lOkFsMkwyOFpPeTJvOTFxcnY0alMzNjRJN3Q2UEhVMEEy' } }
    ).then((response) => {
      
      if (response){
      console.log(response, "response");
      if(response.data.data.access_token && response.status === 200) {
        actions.setToken(response.data.data.access_token)
        actions.setLoggedIn(true)
        console.log(state.token, 'token')
        onSuccess()
      } 
    }
    });
  }  catch(err) {
    console.log(err)
    onError()
  }
};

export const logout : Action = ({state}) => {
  state.token = null
  state.isLoggedIn = false
}
