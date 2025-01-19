import { atomWithStorage } from 'jotai/utils';

const booksListAtom = atomWithStorage('booksList', []);

export default booksListAtom;
