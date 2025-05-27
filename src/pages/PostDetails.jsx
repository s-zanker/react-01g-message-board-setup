import { Post } from '../components/Post';
import { useParams } from 'react-router';

export function PostDetails({ posts, updatePost }) {
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  if (!posts) {
    return <p>Loading...</p>;
  }
  return (
    <Post
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      id={post._id}
      votes={post.votes}
      updatePost={(updatedItem) => updatePost(post._id, updatedItem)}
    />
  );
}
