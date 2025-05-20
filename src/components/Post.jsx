//CSS
import './Post.css';
//Components
import { IconButton } from './IconButton';
import { PostMeta } from './PostMeta';
//Hooks
import { useState } from 'react';
//React Icons
import { IoMdArrowDropright } from 'react-icons/io'; //React Icon Library -> npm install react-icons
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsHandThumbsUp } from 'react-icons/bs';
import { BsHandThumbsDown } from 'react-icons/bs';

export function Post({ title, author, date, summary, updatePost, votes, id }) {
  const [summaryIsVisible, setSummaryIsVisible] = useState(false); //summary is only visible, wenn Readme Btn was clicked

  function toggleIsVisible() {
    setSummaryIsVisible(!summaryIsVisible);
  }
  function handleUpVote() {
    updatePost(id, { votes: votes + 1 });
  }
  function handleDownVote() {
    votes > 0 && updatePost(id, { votes: votes - 1 });
  }
  return (
    <article className='Post'>
      <h2 className='Post-title'>{title}</h2>
      <div className='Post-vote-container'>
        <span>{votes} Votes</span>
        <IconButton
          type='voteBtn'
          onBtnClick={() => handleUpVote()}
          icon={<BsHandThumbsUp />}
        >
          upVote
        </IconButton>
        <IconButton
          type='voteBtn'
          onBtnClick={() => handleDownVote()}
          icon={<BsHandThumbsDown />}
        >
          downVote
        </IconButton>
      </div>
      <div className='Post-content-container'>
        <div className='Post-content'>
          <PostMeta author={author} date={date} />
        </div>
        <div>
          <IconButton
            type='summaryBtn'
            onBtnClick={toggleIsVisible}
            icon={
              summaryIsVisible ? <IoMdArrowDropdown /> : <IoMdArrowDropright />
            }
          >
            {!summaryIsVisible ? 'Read more' : 'Read less'}
          </IconButton>
        </div>
      </div>
      <div className='Post-summary'>{summaryIsVisible && <p>{summary}</p>}</div>
    </article>
  );
}
