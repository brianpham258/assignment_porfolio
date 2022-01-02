import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './reducer';

const initStore = (reduxToolkitStoreOptions) =>
    configureStore({
        reducer,
        ...reduxToolkitStoreOptions
    });

export const wrapper = createWrapper(initStore);
export { initStore };