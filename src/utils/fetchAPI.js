const filterResult = (data) => {
  const meanings = data.flatMap((entry) => entry.meanings);
  const wordText = data[0].word;

  let phoneticsText = '';
  let phoneticsAudio = '';

  for (const entry of data) {
    const phonetic = entry.phonetics.find((p) => p.audio !== '');
    if (phonetic) {
      phoneticsText = phonetic.text;
      phoneticsAudio = phonetic.audio;
      break;
    }
  }

  return {
    wordText,
    phoneticsText,
    phoneticsAudio,
    meanings,
  };
};

const fetchAPI = async (search = 'man') => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

  const response = await fetch(URL);

  const data = await response.json();

  return filterResult(data);
};

export default fetchAPI;
