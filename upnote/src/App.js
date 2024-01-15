import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/Notfound';
import NoteLists from './pages/NoteBooks/NoteLists';
import MemoLists from './pages/Memos/MemoLists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Notfound />,
    children: [
      { path: '/lists', element: <NoteLists /> },
      { path: '/memos', element: <MemoLists /> },
    ]
  }
])

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
