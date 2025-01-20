import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  author: string;
  rating: number;
  cover: number;
  ratingNumber: number;
  keyId: string;
};

const BookCard = ({ title, author, rating, cover, ratingNumber }: Props) => {
  const navigate = useNavigate();

  const roundedRating = rating?.toFixed(1);

  const imageUrl =
    `https://covers.openlibrary.org/b/id/${cover}-L.jpg` ||
    `https://covers.openlibrary.org/b/id/8226191-L.jpg`;

  return (
    <div
      onClick={() => navigate(`/details/${cover}`)}
      className="border w-[430px]  h-[150px] rounded-lg flex gap-x-2 overflow-clip cursor-pointer  hover:shadow-xl transition-all duration-300 bg-white"
    >
      <img src={imageUrl} alt="cover" className="w-[25%] h-full object-cover" />
      <div className="grow p-2 flex flex-col justify-between">
        <div className="">
          <h2 className="text-black text-lg font-semibold font-mono max-w-[240px] truncate">
            {title}
          </h2>
          <p className="text-sm text-black/40 font-semibold font-sans">
            by {author}
          </p>
        </div>
        {roundedRating && (
          <p className="text-sm text-black/30 font-medium font-sans">
            {roundedRating}({ratingNumber})
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
