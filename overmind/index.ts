import { IContext } from 'overmind';
import { createActionsHook, createStateHook } from 'overmind-react';
import { state } from './state';
import * as actions from './actions';

export const config = { state, actions };

export type Context = IContext<typeof config>

 export const useState = createStateHook<Context>();
 export const useActions = createActionsHook<Context>();
