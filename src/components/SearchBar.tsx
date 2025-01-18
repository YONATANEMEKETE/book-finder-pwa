import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './ui/button';

const SearchBar = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
