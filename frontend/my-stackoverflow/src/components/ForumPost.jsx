import React from "react"

export default function ForumPost({forumPosts,index}) {
  return (
    <li key={index} className="rel-pos mx-auto border-2 mt-px w-2/3" > 
      <div className="votes">
        <p className="votes-count">{`votes ${forumPosts.votes}`}</p>
      </div>
      <div className="question-content">
        <a href="#">{forumPosts.question}</a>
        
      </div>
      <div className="person-info">
        <p>{forumPosts.personName}</p>
      </div>
    </li> 
  )
}
