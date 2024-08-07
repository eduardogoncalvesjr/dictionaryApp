import { IoIosPlayCircle } from 'react-icons/io';

export default function WordPanel({ wordPronunciation }) {
  const { word, phonetics, audio } = wordPronunciation;

  const pronunciation = new Audio(audio);

  const playAudio = () => {
    pronunciation.play();
  };

  return (
    <div className="flex flex-row justify-between items-center mt-5 mb-5">
      <div className="flex flex-col items-start">
        <p className="text-3xl font-bold">{word}</p>
        <p className="text-purple-400 font-bold">{phonetics}</p>
      </div>
      <div>
        <IoIosPlayCircle
          onClick={ playAudio }
          aria-label="Play audio"
          className="text-5xl text-purple-400"
        />
      </div>
    </div>
  );
}
