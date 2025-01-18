import { useNavigate } from 'react-router-dom';

const BookCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/details')}
      className="border w-[430px]  h-[150px] rounded-lg flex gap-x-2 overflow-clip cursor-pointer  hover:shadow-xl transition-all duration-300 bg-white"
    >
      <img
        src={'https://covers.openlibrary.org/b/id/12539702-L.jpg'}
        alt="cover"
        className="w-[25%] h-full object-cover"
      />
      <div className="grow p-2 flex flex-col justify-between">
        <div className="">
          <h2 className="text-black text-lg font-semibold font-mono max-w-[240px] truncate">
            Steal Like an Artist
          </h2>
          <p className="text-sm text-black/40 font-semibold font-sans">
            by Austin Kleon
          </p>
        </div>
        <p className="text-sm text-black/30 font-medium font-sans">4.5(560)</p>
      </div>
    </div>
  );
};

export default BookCard;
