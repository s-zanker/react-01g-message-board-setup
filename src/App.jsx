import './App.css';
import { useEffect, useState } from 'react';
import { uid } from 'uid';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AddPost } from './pages/AddPost';
import { AllPosts } from './pages/AllPosts';
import { PostDetails } from './pages/PostDetails';
import { fetchAllPosts } from './api';

export function App() {
  // const [posts, setPosts] = useLocalStorage('posts', initialPosts);
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const posts = await fetchAllPosts();
    setPosts(posts);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  function addPost(newPost) {
    setPosts([...posts, { id: uid(), ...newPost }]);
  }
  function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<AllPosts posts={posts} updatePost={updatePost} />}
        />
        <Route path='/add-post' element={<AddPost addPost={addPost} />} />
        <Route
          path='/posts/:id'
          element={<PostDetails posts={posts} updatePost={updatePost} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
