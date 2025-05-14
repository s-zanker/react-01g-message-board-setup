import { Post } from './Post';
import './PostList.css';
export function PostList({ posts }) {
  return (
    <ul>
      {posts
        .map((post) => (
          <li key={post.id}>
            <Post title={post.title} author={post.author} date={post.date} />
          </li>
        ))
        .reverse()}
    </ul>
  );
}
