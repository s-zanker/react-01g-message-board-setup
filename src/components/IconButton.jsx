import { MdArrowForward } from 'react-icons/md'; //React Icon Library -> npm install react-icons
import './IconButton.css';
export function IconButton({ children }) {
  return (
    <button className='Icon-button'>
      <span>{children}</span> <MdArrowForward />
    </button>
  );
}
