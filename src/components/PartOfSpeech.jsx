export default function PartOfSpeech({meanings}) {
  const {definitions, partOfSpeech, synonyms} = meanings;

  return (
    <>
    <div className="flex items-center mb-4">
      <span className="text-xl font-bold pr-4">{partOfSpeech}</span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>

    <p className="text-gray-500 mb-2">Meaning</p>

      <ul className="pl-3 marker:text-pink-400">
      {definitions.map((definition, index) => (
        <li key={index} className="mb-3">
          <p>{definition.definition}</p>
          {definition.example && (
          <p className="text-gray-400">
            <q>{definition.example}</q>
          </p>
          )}
        </li>
      ))}
      </ul>
      {synonyms.length !== 0 && (
        <div className="flex flex-column">
          <div>
            <p className="mr-5">Synonyms:</p>
          </div>
          <div className="flex flex-column gap-3 flex-wrap"> 
          {synonyms.map((synonym, index) => (
            <span 
            key={index}
            className="text-pink-400">{synonym}</span>
          ))}
          </div>
        </div>
      )}
    </>
  )
}
