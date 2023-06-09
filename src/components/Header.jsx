import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Menu from '../images/menu.svg';

const items = ['Home', 'About', 'Projects', 'Contact'];

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div class="bg-grey-300 px-4 lg:px-14 py-6 bg-zinc-800 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src={Logo} alt="logo" class="w-8" />
          <h2>Gabriela Schlemper</h2>
        </div>
        <div class="hidden lg:block">
          <ul class="flex gap-6 ">
            {items.map((item) => (
              <li
                key={item}
                class="hover:opacity-50 transition-opacity cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          class="flex items-center hover:text-gray-70 lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={Menu} alt="menu icon" />
        </button>
      </div>
      {openMenu ? (
        <div class="bg-black lg:hidden">
          <ul class="flex flex-col w-100% items-center py-4">
            {items.map((item) => (
              <li
                key={item}
                class="hover:opacity-50 transition-opacity cursor-pointer py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export default Header;
