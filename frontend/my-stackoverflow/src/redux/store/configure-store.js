import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END } from 'redux-saga';
import forumSaga from '../forumSaga'
import forumReducer from '../forumState'

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
      forumPosts: forumReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
  })

  sagaMiddleware.run(forumSaga);
