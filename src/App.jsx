import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

function App() {
  const posts = [
    { id: 1, title: 'My First Post', author: 'Alex', date: '2024-06-19' },
    { id: 2, title: 'Second Post', author: 'Casey', date: '2024-06-20' },
    { id: 3, title: 'Third Post', author: 'Jordan', date: '2024-06-21' },
    { id: 4, title: 'Fourth Post', author: 'Sylvia', date: '2024-06-22' },
  ];
  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  );
}

export default App;
