const filterResult = (data) => {
  const meanings = data.flatMap((entry) => entry.meanings);
  const word = data[0].word;
  const phoneticsText = data[0].phonetics[0].text;
  const phoneticsAudio = data[0].phonetics.find(
    (item) => item.audio !== ''
  ).audio;

  return {
    word,
    phoneticsText,
    phoneticsAudio,
    meanings,
  };
};

const fetchAPI = async () => {
  const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/man';

  const response = await fetch(URL);

  const data = await response.json();

  console.log(data);

  // return filterResult(data);
};

export default fetchAPI;
