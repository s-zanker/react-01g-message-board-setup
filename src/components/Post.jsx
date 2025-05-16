import { IconButton } from './IconButton';
import { PostMeta } from './PostMeta';
import './Post.css';
import { useState } from 'react';

export function Post({ title, author, date, summary }) {
  const [summaryIsVisible, setSummaryIsVisible] = useState(false); //summary is only visible, wenn Readme Btn was clicked
  function toggleIsVisible() {
    setSummaryIsVisible(!summaryIsVisible);
  }
  return (
    <article className='Post'>
      <h2 className='Post-title'>{title}</h2>
      <div className='Post-content-container'>
        <div className='Post-content'>
          <PostMeta author={author} date={date} />
        </div>
        <div>
          <IconButton onBtnClick={toggleIsVisible}>
            {!summaryIsVisible ? 'Read more' : 'Read less'}
          </IconButton>
        </div>
      </div>
      <div className='Post-summary'>{summaryIsVisible && <p>{summary}</p>}</div>
    </article>
  );
}
