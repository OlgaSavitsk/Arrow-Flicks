import {
  createContext,
} from 'react';
import { ContextProps } from './types';
import { initialState } from './reducers';

const contextConfig: ContextProps = {
  state: initialState,
  dispatch: (): void => undefined,
};

export const AppContext = createContext<ContextProps>(contextConfig);
