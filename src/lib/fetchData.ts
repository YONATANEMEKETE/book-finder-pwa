const fetchBook = async (url?: string) => {
  const endpoint: string =
    url || 'https://openlibrary.org/search.json?q=popular+books&limit=10';

  try {
    const respose = await fetch(endpoint);
    const data = await respose.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('error fetching books', err);
  }

  return;
};

export default fetchBook;
