import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { fetchForumRequest } from './redux/forumState';
import { binarySearch, isSorted, quickSort } from './helper';
import Header from './components/Header';
import ForumPosts from './components/ForumPosts';
import AskQuestionForm from './components/AskQuestionForm';
import ForumButtons from './components/ForumButtons';

export default function App() {
  const forumData = useSelector(state => state.forumPosts.forumEntities);
  const dispatch = useDispatch();
  const [forumPosts, setForumPosts] = useState([]);
  const [showAskForm, setAskForm] = useState(false);

  useEffect(() => {
    dispatch(fetchForumRequest())
  },[])

  useEffect(() => {
    setForumPosts(forumData)
  }, [forumData])

  const sortByVotes = () => {
    if(forumData.length) {
      if(!isSorted(forumPosts)) {
        const sortedForumByVotes = quickSort([...forumData], 'votes');
        setForumPosts(sortedForumByVotes.reverse());
      }
    }
  }

  const onSearch = (searchTerm) => {
    if(forumData.length) {
      const sortByName = quickSort([...forumData], 'personName');
      const searchedName = binarySearch([...sortByName],searchTerm);
      setForumPosts(searchedName)
    }
  }

  const handleQuestion = () => {
    setAskForm(!showAskForm);
  }
  

  return (
      <>
        <Header onSearch={onSearch}/>
        <div className='forum-container'>
          {showAskForm ? (
          <AskQuestionForm handleQuestion={handleQuestion}/>
          ) : (
          <>
            <ForumButtons handleQuestion={handleQuestion} sortByVotes={sortByVotes}/>
            <ForumPosts forumPosts={forumPosts} />
          </>
          )}
        </div>
      </>
  );
}


