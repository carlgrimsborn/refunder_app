type State = {
  counter: number;
  token: string | null;
  isLoggedIn : boolean
};

export const state: State = {
  counter: 0,
  token: null,
  isLoggedIn: false
};
