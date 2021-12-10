import { MenuIcon, SearchIcon } from '@heroicons/react/solid';
import { UserCircleIcon } from '@heroicons/react/outline';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="bg-white flex">
      <div className="w-full px-4 py-2 flex items-center">
        <button className="bg-white p-2 text-black mr-4">
          <MenuIcon className="w-6 h-6" />
        </button>
        <img
          src="/assets/images/female-daily.png"
          alt=""
          className="h-6 mr-5"
        />
        <div className="w-full py-1.5 px-2.5 flex items-center gap-x-2.5 border-2 border-gray rounded-md">
          <SearchIcon className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search products, articles, topics, brands, etc"
            className="w-full font-serif outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-strecth">
        <button className="flex gap-x-3 items-center justify-center w-40 h-full bg-primary text-white text-sm">
          <UserCircleIcon className="w-5 h-5" />
          LOGIN / SIGNUP
        </button>
      </div>
    </div>
  );
}

export default Header;
