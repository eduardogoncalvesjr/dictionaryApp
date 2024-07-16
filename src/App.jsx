import { useEffect, useState } from "react";
import fetchAPI from "./utils/fetchAPI";
import PartOfSpeech from "./components/PartOfSpeech";
import WordPanel from "./components/WordPanel";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

export default function App() {
  const [word, setWord] = useState({});

  useEffect(() => {
    fetchAPI().then((data) => setWord(data))
  },[])

  if (Object.keys(word).length === 0) {
    return <div>No word</div>
  }

  const {wordText, phoneticsText, phoneticsAudio, meanings} = word;

  return (
    <main className="container mx-auto px-4">
      <Header />
      <SearchInput setWord={setWord}/>
    <WordPanel 
    wordPronunciation={
      ({
      word: wordText,
      phonetics: phoneticsText, 
      audio: phoneticsAudio}
      )}/>
    {meanings.map((item, index) => (
      <PartOfSpeech
      meanings={item}
      key={index}/>
    ))}
    </main>
  );
}
