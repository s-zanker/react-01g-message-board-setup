import { PostList } from '../components/PostList';
import { useState, useEffect } from 'react';
import { fetchAllPosts } from '../api';

export function AllPosts() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    console.log('AllPosts.jsx - loadPosts - posts: ');
    const allPosts = await fetchAllPosts();
    console.log(allPosts);
    setPosts(allPosts);
  }

  useEffect(() => {
    loadPosts();
  }, []); //once, if app is mounted

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
