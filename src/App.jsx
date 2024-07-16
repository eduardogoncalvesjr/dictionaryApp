import { useEffect, useState } from 'react';
import fetchAPI from './utils/fetchAPI';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import DefinitionPanel from './components/DefinitionPanel';
import Loading from './components/Loading';

export default function App() {
  const [word, setWord] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTitle = sessionStorage.getItem('wordTitle');

    if (!mounted) {
      const fetchWord = savedTitle ? fetchAPI(savedTitle) : fetchAPI();

      fetchWord.then((data) => {
        setIsLoading(false);
        setWord(data);
        setMounted(true);
      });
    }
  }, [mounted]);

  return (
    <main className="container mx-auto px-5 max-w-screen-lg">
      <Header />
      <SearchInput
        setWord={ setWord }
        setNotFound={ setNotFound }
        setIsLoading={ setIsLoading }
      />

      {notFound && !isLoading
      && <h1 className="text-3xl text-center">No definition found</h1>}

      {isLoading && <Loading />}

      {!notFound && !isLoading && <DefinitionPanel word={ word } />}
    </main>
  );
}
