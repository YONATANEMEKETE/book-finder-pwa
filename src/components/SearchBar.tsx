import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './ui/button';
import { useSetAtom } from 'jotai';
import booksListAtom from '@/states/globalStates';

const SearchBar = () => {
  const [title, setTitle] = useState('');
  const setBooks = useSetAtom(booksListAtom);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}&limit=10`
      );
      const data = await response.json();
      setBooks(data.docs);
      console.log(data.docs);
    } catch (err) {
      console.log('error fetching the data', err);
    }
    setTitle('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <div className="px-2 py-1 rounded-md border border-black/50 w-fit">
      <form onSubmit={handleSubmit} className="flex items-center gap-x-4">
        <input
          onChange={handleChange}
          placeholder="Steal like an Artist"
          className="outline-none border-none bg-transparent placeholder:text-sm text-md text-foreground font-mono font-semibold min-w-[250px]"
          type="text"
          value={title}
        />
        <Button className="cursor-pointer px-4" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
