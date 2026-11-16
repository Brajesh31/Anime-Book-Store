import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/create" element={<CreateBook />} />
    <Route path="/books/details/:id" element={<ShowBook />} />
    <Route path="/books/edit/:id" element={<EditBook />} />
    <Route path="/books/delete/:id" element={<DeleteBook />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
