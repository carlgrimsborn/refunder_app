import axios from 'axios';
import { Action, AsyncAction } from 'overmind';
import { ViewPropsAndroid } from 'react-native';
import { RefunderStore } from './state';

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
  state.stores = null
}

export const getCashbackNumber = (value : RefunderStore) => parseInt(value.cashback)

export const getStores : AsyncAction<RefunderStore[], string> = async ({state}, searchWord) => {
  try {
  const resp = await axios.get('https://www.refunder.se/app/search/stores',{
    params: {
      query: searchWord
    },
    headers: {
      Authorization: `Bearer ${state.token}`
    }
  
  })
    let respObject: RefunderStore[] = resp.data.data.stores
   
    state.stores =  respObject.sort((a,b)=> 
    getCashbackNumber(a) - getCashbackNumber(b)
  )
    console.log(state.stores, "state stores")
  
  console.log(resp, 'resp search')
} catch(err) {
    console.log('search function error', err)
  }
}

export const getStoreInfo : AsyncAction<any, string> = async ({state},id) => {
  try {
   const resp = await axios.get('https://www.refunder.se/app/stores/'+id, {
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    })
    console.log('reponse store', resp)
  } catch(error) {
    console.log(error)
  }
}
