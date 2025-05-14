import { IconButton } from './IconButton';
import { PostMeta } from './PostMeta';
import './Post.css';
export function Post({ title, author, date }) {
  return (
    <article className='Post'>
      <h2 className='Post-title'>{title}</h2>
      <div className='Post-content-container'>
        <div className='Post-content'>
          <PostMeta author={author} date={date} />
        </div>
        <div>
          <IconButton>Read more</IconButton>
        </div>
      </div>
    </article>
  );
}
