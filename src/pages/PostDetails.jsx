import { Post } from '../components/Post';
import { useParams } from 'react-router';
import { fetchPostById, sendPostUpdate } from '../api';
import { useEffect, useState } from 'react';

export function PostDetails() {
  const [post, setPost] = useState();

  const { id } = useParams();

  async function loadPostById(postId) {
    const fetchedPost = await fetchPostById(postId); //fetch the post with the id
    setPost(fetchedPost);
  }

  useEffect(() => {
    loadPostById(id);
  }, [id]);

  async function updatePost(postId, updatedItem) {
    const updated = await sendPostUpdate(postId, updatedItem);
    console.log('PostDetails.jsx - updatePost - updated: ');
    console.log(updated);
    loadPostById(postId);
  }

  if (!post) {
    //This message will show if posts are still loading in App.jsx, or if the id is invalid
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
