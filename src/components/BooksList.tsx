import { useAtomValue } from 'jotai';
import BookCard from './BookCard';
import booksListAtom from '@/states/globalStates';

export type BookType = {
  title: string;
  author_name: string;
  ratings_average: number;
  cover_i: number;
  ratings_count: number;
  key: string;
  first_publish_year: number;
  number_of_pages_median: number;
  publisher: string;
  first_Sentence: string;
};

const BooksList = () => {
  const booksList: BookType[] = useAtomValue(booksListAtom);

  const books = booksList || [
    {
      title: '',
      author_name: '',
      ratings_average: 0,
      ratings_count: 0,
      cover: 0,
      key: '',
    },
  ];

  return (
    <div className="w-fit mx-auto grid grid-cols-1 min-[880px]:grid-cols-2 items-center gap-4">
      {books?.map((book, index) => {
        return (
          <BookCard
            key={index}
            title={book.title}
            author={book.author_name}
            rating={book.ratings_average}
            cover={book.cover_i}
            ratingNumber={book.ratings_count}
            keyId={book.key}
          />
        );
      })}
    </div>
  );
};

export default BooksList;
