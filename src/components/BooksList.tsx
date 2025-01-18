import BookCard from './BookCard';

const BooksList = () => {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 min-[880px]:grid-cols-2 items-center gap-4">
      {[1, 2, 3, 4, 5, 6].map((book) => {
        return <BookCard key={book} />;
      })}
    </div>
  );
};

export default BooksList;
