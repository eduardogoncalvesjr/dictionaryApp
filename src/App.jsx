import { useEffect, useState } from "react";
import fetchAPI from "./utils/fetchAPI";
import PartOfSpeech from "./components/PartOfSpeech";
import WordPanel from "./components/WordPanel";

export default function App() {
  const [word, setWord] = useState({});
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  useEffect(() => {
    fetchAPI().then((data) => setWord(data))
  },[])

  if (Object.keys(word).length === 0) {
    return <div>No word</div>
  }

  const {wordText, phoneticsText, phoneticsAudio, meanings} = word;

  return (
    <main className="container mx-auto px-4">
      <button onClick={() => darkModeHandler() }>toggle theme</button>
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
