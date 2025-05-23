import './NavBar.css';
import { NavLink } from 'react-router-dom';
export function NavBar() {
  return (
    <nav className='NavBar'>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'NavBar-link active' : 'NavBar-link'
        }
        to='/'
      >
        All Posts
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'NavBar-link active' : 'NavBar-link'
        }
        to='/add-post'
      >
        Add Post
      </NavLink>
    </nav>
  );
}
