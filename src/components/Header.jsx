import { useState } from 'react';
import { RiBook2Line } from 'react-icons/ri';
import { CiLight, CiDark } from 'react-icons/ci';

export default function Header() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header>
      <nav
        className="flex justify-between align-center
      py-3 text-gray-500 dark:text-white"
      >
        <div className="text-5xl">
          <RiBook2Line />
        </div>
        <div className="text-3xl flex items-center">
          {dark
            ? <CiLight onClick={ darkModeHandler } />
            : <CiDark onClick={ darkModeHandler } />}
        </div>
      </nav>
    </header>
  );
}
