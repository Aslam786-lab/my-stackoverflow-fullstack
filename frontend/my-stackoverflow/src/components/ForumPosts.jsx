import React from 'react'
import ForumPost from './ForumPost'

export default function ForumPosts({forumPosts}) {
  return (
    <ul>
    {forumPosts.map((forumPosts, index) => <ForumPost forumPosts={forumPosts} index={index}/>)}
    </ul>
  )
}

