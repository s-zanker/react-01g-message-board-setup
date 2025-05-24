import './PostList.css';
import { Link } from 'react-router';

export function PostList({ posts }) {
  return (
    <>
      <ul className='PostList'>
        <h2>All Posts</h2>
        {posts
          .map((post) => (
            <li key={post.id}>
              <Link className='PostList-link' to={`/posts/${post.id}`}>
                {post.title} - by {post.author}{' '}
              </Link>
            </li>
          ))
          .reverse()}
      </ul>
    </>
  );
}
