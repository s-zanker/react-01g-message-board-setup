import './IconButton.css';
import { useState } from 'react';
export function IconButton({ children, onBtnClick, icon, type }) {
  const [isActive, setIsActive] = useState(false);

  function toggleBtnClass() {
    setIsActive(!isActive);
  }
  function onClickHandler() {
    onBtnClick(), type === 'summaryBtn' && toggleBtnClass();
  }
  return (
    <button
      className={`Icon-button${isActive ? ' active' : ''}`}
      onClick={() => onClickHandler()}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
