import { IoIosPlayCircle } from "react-icons/io";

export default function WordPanel({wordPronunciation}) {
  const {word, phonetics, audio} = wordPronunciation;

  const pronunciation = new Audio(audio);

  const playAudio = () => {
    pronunciation.play()
  }
  
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">{word}</h1>
        <p className="text-pink-400 mt-2 mb-5">{phonetics}</p>
      </div>
      <div>
        <IoIosPlayCircle
        onClick={playAudio} aria-label="Play audio"
        className="text-5xl text-pink-400"
        />
      </div>
    </div>
  )
}
