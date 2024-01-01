import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForumPostRequest } from '../redux/forumState';

export default function AskQuestionForm({ handleQuestion }) {
  const [formData , setFormData] = useState({ userName: '', question: ''});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    const {userName, question} = formData;
    if(userName && question) {
      dispatch(addForumPostRequest(formData));
      handleQuestion();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4 form-container'>
      <div className='mb-4 block'>
        <label htmlFor='userName' className='block'>User Name</label>
        <input type='text' placeholder='Please Enter the name' name='userName' className='w-1/4 border rounded-md p-2' onChange={handleInput} required/>
      </div>
      <div className='mb-4'>
        <label htmlFor='question' className='block'>Question</label>
        <textarea type='text' placeholder='Enter your question here...' name='question' className='w-full border rounded-md p-2' onChange={handleInput} required/>
      </div>
      <div>
        <button
          type='submit'
          className='submit-btn'
        >
          Submit
        </button>
      </div>
    </form>
  );
};
