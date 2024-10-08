const fetch = async () => { 

  const url = 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '158230dfb4mshdd7b3f6c8f14e0fp1565e8jsne6d39b6a4a8b',
      'x-rapidapi-host': 'trivia-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return result;
}

export default fetch;