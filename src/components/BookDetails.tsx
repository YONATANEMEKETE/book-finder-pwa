import booksListAtom from '@/states/globalStates';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { BookType } from './BooksList';

// TODO: get the selected book as a prop and display the details

const BookDetails = ({ bookId }: { bookId: number }) => {
  const navigate = useNavigate();
  const booksList: BookType[] = useAtomValue(booksListAtom);

  const book = booksList.find((id) => id.cover_i === bookId);

  const imageUrl =
    `https://covers.openlibrary.org/b/id/${book?.cover_i}-L.jpg` ||
    `https://covers.openlibrary.org/b/id/8226191-L.jpg`;

  return (
    <div className="flex items-center justify-center gap-x-6">
      <div className="grow place-content-center hidden sm:grid">
        <img
          src={imageUrl}
          alt="cover"
          className="w-[140px] h-[190px] object-cover rounded-md overflow-clip"
        />
      </div>
      {/* detail information */}
      <div className="space-y-4  basis-3/4">
        <div className="">
          <h2 className="text-2xl text-black font-bold font-mono">
            {book?.title}
          </h2>
          <p className="text-base text-black/50 font-semibold font-sans">
            by {book?.author_name}
          </p>
        </div>
        <div className="text-base text-black/80 font-mono font-semibold line-clamp-3 overflow-clip">
          TRULY, 'thoughts are things,' and powerful things at that, when they
          are mixed with definiteness of purpose, persistence, and a BURNING
          DESIRE for their translation into riches, or other material objects.
        </div>
        <div className="">
          <p className="text-sm text-black/50 font-semibold font-sans">
            First Published In:{' '}
            <span className="text-black/70">{book?.first_publish_year}</span>
          </p>
          <p className="text-sm text-black/50 font-semibold font-sans">
            Number of pages:{' '}
            <span className="text-black/70">
              {book?.number_of_pages_median}
            </span>
          </p>
          <p className="text-sm text-black/50 font-semibold font-sans">
            Publisher:{' '}
            <span className="text-black/70">{book?.publisher[0]}</span>
          </p>
        </div>
        {/* <div className="flex items-center gap-x-2">
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
        </div> */}
        <div
          onClick={() => navigate('/')}
          className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold cursor-pointer"
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
