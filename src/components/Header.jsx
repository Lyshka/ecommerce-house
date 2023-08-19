import React from 'react';

import {logo} from "../assets/img"
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='py-6 mb-12 border-b sticky top-0 bg-white z-10'>
    <div className='mx-auto container flex justify-between items-center'>
      <Link to={"/"}>
        <img src={logo} alt='logo'/>
      </Link>

      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to={"/"}>Log in</Link>
        <Link className='bg-violet-700 hover:bg-violet-900 text-white px-4 py-3 rounded-lg transition' to={"/"}>Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
