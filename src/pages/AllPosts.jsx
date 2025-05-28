import { PostList } from '../components/PostList';
export function AllPosts({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}
