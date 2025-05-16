import { MdArrowForward } from 'react-icons/md'; //React Icon Library -> npm install react-icons
import './IconButton.css';
import { useState } from 'react';
export function IconButton({ children, onBtnClick }) {
  const [isActive, setIsActive] = useState(false);
  console.log('isActive IconButton:');
  console.log(isActive);
  function toggleBtnClass() {
    setIsActive(!isActive);
  }
  return (
    <button
      className={`Icon-button${isActive ? ' active' : ''}`}
      onClick={() => {
        onBtnClick(), toggleBtnClass();
      }}
    >
      <span>{children}</span> <MdArrowForward />
    </button>
  );
}

//To toggle btn class - did not work
