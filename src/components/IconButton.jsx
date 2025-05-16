import './IconButton.css';
import { useState } from 'react';
export function IconButton({ children, onBtnClick, icon, type }) {
  const [isActive, setIsActive] = useState(false);

  function toggleBtnClass() {
    setIsActive(!isActive);
  }
  return (
    <button
      className={`Icon-button${isActive ? ' active' : ''}`}
      onClick={() => {
        onBtnClick(), type === 'summaryBtn' && toggleBtnClass();
      }}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}
