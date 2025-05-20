import './App.css';
import { useLocalStorage } from '@uidotdev/usehooks';
import { uid } from 'uid';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

const initialPosts = [
  {
    id: 1,
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
    votes: 0,
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
    votes: 0,
  },
  {
    id: 3,
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
    votes: 0,
  },
  {
    id: 4,
    title: 'Fourth Post',
    author: 'Sylvia',
    date: '2024-06-22',
    summary:
      'Added more interactivity to the message board. I hope you like it.',
    votes: 0,
  },
];

function App() {
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
    <>
      <Header />
      <div>
        <PostForm addPost={(post) => addPost(post)} />
      </div>
      <PostList
        posts={posts}
        updatePost={(id, updatedItem) => updatePost(id, updatedItem)}
      />
    </>
  );
}

export default App;
