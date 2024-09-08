import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/postApi'
import { Link } from 'react-router-dom'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts()
      setPosts(data)
    }
    getPosts()
  }, [])
  return (
    <div>
      <h1>게시글 목록</h1>
      <button><Link to="/post/create">새 게시글 작성</Link></button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList