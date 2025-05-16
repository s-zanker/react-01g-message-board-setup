import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

function App() {
  const posts = [
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
  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  );
}

export default App;
