import React from 'react'
import { logoutUser } from '../api/authApi'
import { useNavigate} from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        logoutUser()
        navigate('/')
    }
  return (
      <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout