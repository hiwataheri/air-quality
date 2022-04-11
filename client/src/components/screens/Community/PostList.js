import React from 'react'
import Post from './Post'
const PostList = ({posts,getPosts,form,handleChange, setPosts}) => {
    //console.log({posts});
  return (
    <div>
        {
        posts.map((post, index) =>(
             <Post post={post} getPosts={getPosts} key={index} form={form}
             handleChange={handleChange} setPosts={setPosts}
             />
             ))}
    </div>
  )
}

export default PostList