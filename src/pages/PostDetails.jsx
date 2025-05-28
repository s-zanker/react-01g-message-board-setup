import { Post } from '../components/Post';
import { useParams } from 'react-router';

export function PostDetails({ posts, updatePost }) {
  const { id } = useParams();
  const post = posts.find((p) => p._id === id);
  if (!post) {
    // This message will show if posts are still loading in App.jsx, or if the id is invalid
    return <p>Post not found or still loading details...</p>;
  }
  return (
    <Post
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      id={post._id}
      votes={post.votes}
      updatePost={(updatedItem) => updatePost(post._id, updatedItem)} //warum wird post._id in die updatePost() funktion übergeben?
    />
  );
}
