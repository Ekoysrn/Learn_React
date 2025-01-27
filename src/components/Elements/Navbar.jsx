import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NavProduct = ({ showBtn }) => {
  return (
    <nav>
      <div className="my-6">
        <ul className='flex justify-center items-center  gap-8 text-xl w-[80%] bg-slate-500 text-slate-300 mx-auto rounded-full font-medium'>
          <NavLink to={'/'} className="nav-Product">
            <li className="">Home</li>
          </NavLink>
          <li className="hover:bg-slate-600 px-4 w-full text-center rounded-full py-4"><a href="">Product</a></li>
          <li className="hover:bg-slate-600 px-4 w-full text-center rounded-full py-4"><button onClick={showBtn}>Cart</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavProduct;