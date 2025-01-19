import { RouterProvider } from 'react-router-dom';
import ROUTER from './routerConnfig';
import fetchBook from './lib/fetchData';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import booksListAtom from './states/globalStates';

function App() {
  const setBooks = useSetAtom(booksListAtom);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchBook();
      setBooks(data.docs);
    };

    fetch();
  }, []);

  return <RouterProvider router={ROUTER} />;
}

export default App;
