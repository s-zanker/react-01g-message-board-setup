import { PostForm } from '../components/PostForm';
import { useNavigate } from 'react-router';
export function AddPost({ addPost }) {
  const navigate = useNavigate();
  function handleAddPost(post) {
    addPost(post);
    navigate('/');
  }
  return (
    <div>
      <PostForm addPost={(post) => handleAddPost(post)} />
    </div>
  );
}
