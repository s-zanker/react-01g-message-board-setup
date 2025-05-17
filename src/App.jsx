import './App.css';
import { uid } from 'uid';
import { useState } from 'react';

import { Header } from './components/Header';
import { PostList } from './components/PostList';

const initialPosts = [
  {
    id: 1,
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
  },
  {
    id: 3,
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
  },
  {
    id: 4,
    title: 'Fourth Post',
    author: 'Sylvia',
    date: '2024-06-22',
    summary:
      'Added more interactivity to the message board. I hope you like it.',
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  function addPost(newPost) {
    setPosts([...posts, { id: uid(), ...newPost }]);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    console.log(fields);
    addPost({
      ...fields,
    });
  }

  return (
    <>
      <Header />
      <div>
        <form className='post-add-form' onSubmit={(e) => handleFormSubmit(e)}>
          <label htmlFor='post-title'>Post Title:</label>
          <input id='post-title' name='title' />
          <label htmlFor='post-author'>Post Author:</label>
          <input id='post-author' name='author' type='text' />
          <label htmlFor='post-summary'>Post Summary:</label>
          <input id='post-summary' name='summary' type='text' />
          <label htmlFor='post-date'>Post Date:</label>
          <input id='post-date' name='date' type='date' />
          <button className='post-add-button' type='submit'>
            Add Post
          </button>
        </form>
      </div>
      <PostList posts={posts} />
    </>
  );
}

export default App;
