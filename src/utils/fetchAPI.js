const filterResult = (data) => {
  const meanings = data.flatMap((entry) => entry.meanings);
  const wordText = data[0].word;

  const phonetics = data.flatMap((entry) => entry.phonetics);
  const phoneticWithAudio = phonetics.find((p) => p.audio !== '');

  const phoneticsText = phoneticWithAudio?.text || '';
  const phoneticsAudio = phoneticWithAudio?.audio || '';

  const source = data.map((entry) => entry.sourceUrls)[0];

  return {
    wordText,
    phoneticsText,
    phoneticsAudio,
    meanings,
    source,
  };
};

const fetchAPI = async (search = 'english') => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;

  const response = await fetch(URL);

  const data = await response.json();

  if (data.title === 'No Definitions Found') {
    return data;
  }

  return filterResult(data);
};

export default fetchAPI;
