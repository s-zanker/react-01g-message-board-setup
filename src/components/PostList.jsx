import { Post } from './Post';
import './PostList.css';

export function PostList({ posts, updatePost }) {
  return (
    <ul>
      {posts
        .map((post) => (
          <li key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              date={post.date}
              summary={post.summary}
              id={post.id}
              votes={post.votes}
              updatePost={(id, updatedItem) => updatePost(id, updatedItem)}
            />
          </li>
        ))
        .reverse()}
    </ul>
  );
}
