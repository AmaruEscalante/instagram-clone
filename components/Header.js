import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HeartIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle Search input field*/}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black
            rounded-md
            "
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-1 -right-2 text-xs w-5 h-5
            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile pic"
            className="rounded-full h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
