import './PostMeta.css';
export function PostMeta({ author, date }) {
  return (
    <>
      <span className='Post-author'>{author}</span>
      <span className='Post-date'>
        <time>{date}</time>
      </span>
    </>
  );
}
