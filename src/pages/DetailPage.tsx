import BookDetails from '@/components/BookDetails';
import BooksList from '@/components/BooksList';
import Wrapper from '@/components/Wrapper';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  // TODO: get the dynamic slug and fetch the right data with the id

  return (
    <Wrapper className="min-h-screen py-20 space-y-10">
      <BookDetails bookId={Number(id)} />
      <div className="w-full h-px bg-black/30"></div>
      <BooksList />
    </Wrapper>
  );
};

export default DetailPage;
