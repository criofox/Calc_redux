import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { counter } from './counter';

export const store = createStore(counter, devToolsEnhancer());