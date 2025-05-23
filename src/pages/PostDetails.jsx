import { Post } from '../components/Post';
import { useParams } from 'react-router';

export function PostDetails({ posts, updatePost }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  return (
    <Post
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      id={post.id}
      votes={post.votes}
      updatePost={(updatedItem) => updatePost(post.id, updatedItem)}
    />
  );
}
