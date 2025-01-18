const BookDetails = () => {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <div className="grow place-content-center grid">
        <img
          src={'https://covers.openlibrary.org/b/id/12539702-L.jpg'}
          alt="cover"
          className="w-[140px] h-[190px] object-cover rounded-md overflow-clip"
        />
      </div>
      {/* detail information */}
      <div className="space-y-4  basis-3/4">
        <div className="">
          <h2 className="text-2xl text-black font-bold font-mono">
            Steal Like an Artist
          </h2>
          <p className="text-base text-black/50 font-semibold font-sans">
            by Austine Kleon
          </p>
        </div>
        <div className="text-base text-black/80 font-mono font-semibold">
          TRULY, 'thoughts are things,' and powerful things at that, when they
          are mixed with definiteness of purpose, persistence, and a BURNING
          DESIRE for their translation into riches, or other material objects.
        </div>
        <div className="">
          <p className="text-sm text-black/50 font-semibold font-sans">
            First Published In: <span className="text-black/70">{1998}</span>
          </p>
          <p className="text-sm text-black/50 font-semibold font-sans">
            Number of pages: <span className="text-black/70">{690}</span>
          </p>
          <p className="text-sm text-black/50 font-semibold font-sans">
            Publisher: <span className="text-black/70">{'Penguine.'}</span>
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
          <div className="border px-2 py-1 bg-white rounded-full min-w-24 grid place-content-center text-xs text-black font-mono font-semibold">
            Artist
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
