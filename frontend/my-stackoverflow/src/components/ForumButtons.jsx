import React from 'react'

export default function ForumButtons({ sortByVotes ,handleQuestion }) {
  return (
    <div className='forum-btn'>
      <button onClick={sortByVotes} className='btn btn-gray'>
        votes
      </button>
      <button onClick={handleQuestion} className='btn btn-blue'>
        Ask questions
      </button>
    </div>
  )
}
