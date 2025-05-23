import { PostList } from '../components/PostList';
export function AllPosts({ posts, updatePost }) {
  return (
    <div>
      <PostList posts={posts} updatePost={updatePost} />
    </div>
  );
}
