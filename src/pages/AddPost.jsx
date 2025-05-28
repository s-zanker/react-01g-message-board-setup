import { PostForm } from '../components/PostForm';
import { useNavigate } from 'react-router';
import { sendAddPost } from '../api';

export function AddPost() {
  const navigate = useNavigate();

  async function addPost(newItem) {
    const newId = await sendAddPost(newItem);
    console.log('AppPost.jsx - addPost - newId: ');
    console.log(newId);
  }

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
