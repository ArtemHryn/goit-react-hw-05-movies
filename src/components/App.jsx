import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Home />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
