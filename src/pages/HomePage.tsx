import BooksList from '@/components/BooksList';
import SearchBar from '@/components/SearchBar';
import Wrapper from '@/components/Wrapper';

const HomePage = () => {
  return (
    <Wrapper className="min-h-screen py-20 flex flex-col gap-10 items-center">
      <SearchBar />
      <BooksList />
    </Wrapper>
  );
};

export default HomePage;
