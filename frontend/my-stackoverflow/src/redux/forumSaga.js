import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchForumSuccess } from './forumState';

const baseUrl = "https://my-stackoverflow-app.uc.r.appspot.com";

function* fetchForumPosts() {
    try {
     const response = yield call(fetch, `${baseUrl}/doFetchForumPosts`);
     const forumPosts = yield response.json();
     yield put(fetchForumSuccess(forumPosts));
    } catch (error) {
        console.error(error)
    }
}

function* addForumPost({payload}) {
   try {
    const {userName, question} = payload;
    const requestPayload = {
        question: question,
        personName: userName,
        votes: 0, 
    }
    const response = yield call(fetch, `${baseUrl}/createForumPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    });
    if(response && response.ok) {
        yield* fetchForumPosts();
    }
   } catch (error) {
     console.error(error);
   }
}

export default function* forumSaga() {
    yield takeEvery('forum/fetchForumRequest', fetchForumPosts);
    yield takeEvery('forum/addForumPostRequest', addForumPost);
}