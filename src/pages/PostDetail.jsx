import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deletePost, fetchPost } from '../api/postApi'

const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPost(id)
      setPost(data)
    }
    getPost()
  }, [id])

  const handleDelete = async () => {
    await deletePost(id)
    navigate('/')
  }


  return (
    post ? (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button onClick={() => navigate(`/post/edit/${id}`)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    ): (
        <p>로딩중...</p>
    )
  )
}

export default PostDetail