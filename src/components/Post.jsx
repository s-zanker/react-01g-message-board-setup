import { IconButton } from './IconButton';

import { IoMdArrowDropright } from 'react-icons/io'; //React Icon Library -> npm install react-icons
import { IoMdArrowDropdown } from 'react-icons/io';

import { BsHandThumbsUp } from 'react-icons/bs';
import { BsHandThumbsDown } from 'react-icons/bs';

import { PostMeta } from './PostMeta';
import './Post.css';
import { useState } from 'react';

export function Post({ title, author, date, summary }) {
  const [summaryIsVisible, setSummaryIsVisible] = useState(false); //summary is only visible, wenn Readme Btn was clicked
  const [voteCount, setVoteCount] = useState(0);

  function handleVotes(direction) {
    setVoteCount((prevCount) => {
      if (direction === 'up') return prevCount + 1;
      if (direction === 'down' && prevCount > 0) return prevCount - 1;
      return prevCount; //no change
    });
  }
  function toggleIsVisible() {
    setSummaryIsVisible(!summaryIsVisible);
  }
  return (
    <article className='Post'>
      <h2 className='Post-title'>{title}</h2>
      <div className='Post-vote-container'>
        <span>{voteCount} Votes</span>
        <IconButton
          type='voteBtn'
          onBtnClick={() => handleVotes('up')}
          icon={<BsHandThumbsUp />}
        >
          upVote
        </IconButton>
        <IconButton
          type='voteBtn'
          onBtnClick={() => handleVotes('down')}
          icon={<BsHandThumbsDown />}
        >
          upVote
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
