import './App.css';
import {Routes, Route} from 'react-router-dom'
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './components/Logout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostList />} />
      <Route path='/posts/:id' element={<PostDetail />} />
      <Route path='/post/create' element={<PostForm />} />
      <Route path='/post/edit/:id' element={<PostForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/logout' element={<Logout/> } />
    </Routes>
  );
}

export default App;
