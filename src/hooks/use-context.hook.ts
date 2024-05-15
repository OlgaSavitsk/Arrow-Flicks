import { AppContext } from '@store/context';
import { useContext } from 'react';

export const useAppContext = () => useContext(AppContext);
