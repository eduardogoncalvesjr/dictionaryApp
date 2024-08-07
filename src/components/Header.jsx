import { useEffect, useState } from 'react';
import { RiBook2Line } from 'react-icons/ri';
import { CiLight, CiDark } from 'react-icons/ci';

export default function Header() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem('darkMode', JSON.stringify(!dark));
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme) {
      const result = JSON.parse(savedTheme);
      setDark(result);

      if (result) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <header>
      <nav
        className="flex justify-between align-center
      p-3 text-gray-500 dark:text-white"
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
