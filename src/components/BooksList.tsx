import BookCard from './BookCard';

const BooksList = () => {
  return (
    <div className="w-full grid grid-cols-2 items-center gap-4">
      {[1, 2, 3, 4].map((book) => {
        return <BookCard key={book} />;
      })}
    </div>
  );
};

export default BooksList;
