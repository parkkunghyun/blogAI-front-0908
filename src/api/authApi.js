const API_BASE_URL = "http://127.0.0.1:8000/api"

// 회원가입
export const registerUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(userData)
    })
    return response.json()
}

// 로그인
export const loginUser = async (crednetials) => {
    const response = await fetch(`${API_BASE_URL}/token/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(crednetials)
    })
    return response.json()
}

// 
export const logoutUser = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}