import './App.css';
import { useLocalStorage } from '@uidotdev/usehooks';
import { uid } from 'uid';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { AddPost } from './pages/AddPost';
import { AllPosts } from './pages/AllPosts';
import { PostDetails } from './pages/PostDetails';

const initialPosts = [
  {
    id: '1',
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
    votes: 0,
  },
  {
    id: '2',
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
    votes: 0,
  },
  {
    id: '3',
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
    votes: 0,
  },
  {
    id: '4',
    title: 'Fourth Post',
    author: 'Sylvia',
    date: '2024-06-22',
    summary:
      'Added more interactivity to the message board. I hope you like it.',
    votes: 0,
  },
];

export function App() {
  const [posts, setPosts] = useLocalStorage('posts', initialPosts);

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
