import React from 'react'

const postForm = ({getPosts, submitHandler, handleChange, form}) => {
  return (

    <div style={{marginBottom:"5rem"}}>
       <form className="postForm" onSubmit={submitHandler}>
        <h1 className="postH1">Share your experiences</h1>
        <label className="postLabel">Title</label>
        <input
          type="text"
          name="title"
          required
          placeholder="title"
          className="postInput"
          value={form.title}
          onChange={handleChange}
        ></input>
        <label className="postLabel">Description</label>
        <textarea
          placeholder="Post your experience here..."
          required
          className="postText textArea"
          name="content"
          value={form.content}
          onChange={handleChange}
        ></textarea>
        <img src="#" className="postImg" alt="post" />

        <button className="postBtn postButton" onClick={getPosts}> post</button>
      </form>

    </div>
   

  )
}

export default postForm