import BooksList from '@/components/BooksList';
import SearchBar from '@/components/SearchBar';
import Wrapper from '@/components/Wrapper';

const HomePage = () => {
  return (
    <Wrapper className="min-h-screen pt-20 flex flex-col gap-10">
      <SearchBar />
      <BooksList />
    </Wrapper>
  );
};

export default HomePage;
