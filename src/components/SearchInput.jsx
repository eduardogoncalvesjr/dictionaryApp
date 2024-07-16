import { useState } from "react";
import fetchAPI from "../utils/fetchAPI";

export default function SearchInput({setWord}) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchAPI(search).then((data) => setWord(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="word" 
        id="word" 
        value={search}
        onChange={handleChange}
        className="p-2 border rounded border-black dark:border-white dark:text-black"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
