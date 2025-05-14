import './Post.css';
export function Post() {
  return (
    <article className='Post'>
      <h2 className='Post-title'>My first Posting</h2>
      <div className='Post-content-container'>
        <div className='Post-content'>
          <span className='Post-author'>from Sylvia</span>
          <span className='Post-date'>
            <time>2025-05-12</time>
          </span>
        </div>
        <div>
          <button className='Post-button'>Read more</button>
        </div>
      </div>
    </article>
  );
}
