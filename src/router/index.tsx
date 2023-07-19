import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Main } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lmemo-2.0" element={<Main />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
