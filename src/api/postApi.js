const API_URL = "http://127.0.0.1:8000/api/posts/"

// 모든 게시글 조회
export const fetchPosts = async () => {
    const response = await fetch(API_URL)
    return response.json()
}

// 특정 게시글 조회
export const fetchPost = async (id) => {
    const response = await fetch(`${API_URL}${id}/`)
    return response.json()
}

// 게시글 생성
export const createPost = async (post) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(post),
    })
    return response.json()
}

// 게시글 수정
export const updatePost = async (id, post) => {
    const response = await fetch(`${API_URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(post),
    })
    return response.json()
}

// 게시글 삭제
export const deletePost = async (id) => {
    await fetch(`${API_URL}${id}/`, {
        method: "DELETE"
    })
}