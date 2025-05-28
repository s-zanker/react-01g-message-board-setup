import './App.css';
import { useEffect, useState } from 'react';
import { uid } from 'uid';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AddPost } from './pages/AddPost';
import { AllPosts } from './pages/AllPosts';
import { PostDetails } from './pages/PostDetails';
import { fetchAllPosts, sendAddPost, sendPostUpdate } from './api';

export function App() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    console.log('App.jsx - loadPosts - posts: ');
    const posts = await fetchAllPosts();
    console.log(posts);
    setPosts(posts);
  }

  useEffect(() => {
    loadPosts();
  }, []); //once, if app is mounted

  async function addPost(newItem) {
    // setPosts([...posts, { id: uid(), ...newItem }]);
    const newId = await sendAddPost(newItem);
    console.log('App.jsx - addPost - newId: ');
    console.log(newId);
    loadPosts();
  }
  async function updatePost(id, updatedItem) {
    //updatedItem ist entweder { votes: votes + 1 } oder { votes: votes - 1 }
    // setPosts(
    //   posts.map((item) =>
    //     item._id === id ? { ...item, ...updatedItem } : item
    //   )
    // );
    const updated = await sendPostUpdate(id, updatedItem);

    console.log('App.jsx - updatePost - updated: ');
    console.log(updated);

    loadPosts();
  }

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route
          path='/'
          // element={<AllPosts posts={posts} updatePost={updatePost} />}
          element={<AllPosts posts={posts} />} //updatePost wird jetzt von PostDetails übernommen
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
