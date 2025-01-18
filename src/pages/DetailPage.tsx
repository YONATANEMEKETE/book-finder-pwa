import BookDetails from '@/components/BookDetails';
import BooksList from '@/components/BooksList';
import Wrapper from '@/components/Wrapper';

const DetailPage = () => {
  return (
    <Wrapper className="min-h-screen py-20 space-y-10">
      <BookDetails />
      <div className="w-full h-px bg-black/30"></div>
      <BooksList />
    </Wrapper>
  );
};

export default DetailPage;
