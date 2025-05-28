import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AddPost } from './pages/AddPost';
import { AllPosts } from './pages/AllPosts';
import { PostDetails } from './pages/PostDetails';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/posts/:id' element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
