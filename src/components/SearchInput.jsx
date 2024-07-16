import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';
import fetchAPI from '../utils/fetchAPI';

export default function SearchInput({ setWord, setNotFound, setIsLoading }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetchAPI(search).then((data) => {
      if (data.title === 'No Definitions Found') {
        setIsLoading(false);
        setNotFound(true);
        return;
      }
      sessionStorage.setItem('wordTitle', search);
      setIsLoading(false);
      setNotFound(false);
      setWord(data);
    });
  };

  return (
    <form onSubmit={ handleSubmit } className="my-3">
      <div
        className="border rounded-2xl bg-gray-300 border-transparent
        dark:bg-gray-600 px-2 flex justify-between align-center"
      >
        <input
          type="text"
          name="word"
          id="word"
          value={ search }
          onChange={ handleChange }
          className="dark:text-white w-full py-2 m-2
          bg-gray-300 dark:bg-gray-600
          focus:outline-none focus:bg-gray-300
          dark:focus:bg-gray-600 caret-purple-400"
        />
        <button
          type="submit"
          aria-label="Search Button"
          className="mr-2 text-xl text-purple-400"
        >
          <HiMiniMagnifyingGlass />
        </button>
      </div>
    </form>
  );
}
