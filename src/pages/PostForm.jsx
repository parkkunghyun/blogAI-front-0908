import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createPost, fetchPost, updatePost } from '../api/postApi'

const PostForm = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const data = await fetchPost(id)
        setTitle(data.title)
        setContent(data.content)
      }
      getPost()
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const post = { title, content }
    if (id) {
      await updatePost(id, post)
    } else {
      await createPost(post)
    }

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? '게시글 수정' : '게시글 작성'}</h2>
      <div>
        <input type="text" value={title} placeholder='제목' required onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <input type="text" value={content} placeholder='내용' required onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type='submit'>저장</button>
    </form>
  )
}

export default PostForm