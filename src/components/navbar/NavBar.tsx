import { Form } from "react-router-dom";
import { TbBell } from 'react-icons/tb'
import { CiSearch } from 'react-icons/ci'
import {IoMdArrowDropup as SUp, IoMdArrowDropdown as SDown} from 'react-icons/io'
import './navbar.scss'
export default function NavBar() {
  return (
    <nav className="d-navbar">
      <div className='d-nav-first'>
        <img src="/lendsqr-logo.png" alt="lendsqr logo" className="d-img" />
        <div>
          <span className="d-navbar-drop"><SUp /></span>
          <Form>
            <input
              name="search"
              type="search"
              required
              placeholder="Seach for anything."
            />
            <button type="submit"></button>
            <CiSearch  className='ci-search'/>
          </Form>
        </div>
      </div>
      <div className='d-nav-second'>
      <a href='/docs'>Docs</a>
      <TbBell className='bell'/>
      <span><img  src='img.png' alt='profile' className='profile-img'/><p className='d-username'>Adedeji<SDown /></p></span>
      </div>
    </nav>
  );
}
