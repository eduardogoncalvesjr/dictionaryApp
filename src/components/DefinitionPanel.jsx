import PartOfSpeech from './PartOfSpeech';
import WordPanel from './WordPanel';

export default function DefinitionPanel({ word }) {
  const { wordText, phoneticsText, phoneticsAudio, meanings, source } = word;

  return (
    <>
      <WordPanel
        wordPronunciation={
          ({
            word: wordText,
            phonetics: phoneticsText,
            audio: phoneticsAudio,
          })
        }
      />

      {meanings.map((item, index) => (
        <PartOfSpeech
          meanings={ item }
          key={ index }
        />
      ))}

      <div className="my-5">
        <div className="flex-1 border-t border-gray-300" />
      </div>

      <p className="text-gray-500 mb-2">Source</p>

      {source.map((item) => (
        <p key={ item }>
          <a href="item" className="underline">{item}</a>
        </p>
      ))}

      <div className="my-5">
        <div className="flex-1 border-t border-gray-300" />
      </div>
    </>
  );
}
