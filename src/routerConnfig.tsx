import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      {/* make it dynamic */}
      <Route path="/details/:id" element={<DetailPage />} />
    </Route>
  )
);

export default ROUTER;
