import { useAtomValue } from 'jotai';
import BookCard from './BookCard';
import booksListAtom from '@/states/globalStates';

type BookType = {
  title: string;
  author_name: string;
  rating: number;
  cover: number;
};

const BooksList = () => {
  const booksList: BookType[] = useAtomValue(booksListAtom);

  return (
    <div className="w-fit mx-auto grid grid-cols-1 min-[880px]:grid-cols-2 items-center gap-4">
      {booksList.map((book, index) => {
        return (
          <BookCard
            key={index}
            title={book.title}
            author={book.author_name}
            rating={book.rating}
            cover={book.cover}
          />
        );
      })}
    </div>
  );
};

export default BooksList;
