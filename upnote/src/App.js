import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Notfound />,
    children: [
      { path: '/books', element: <Notfound /> },
    ]
  }
])

function App() {
  return <RouterProvider router={ router } />;
}

export default App;
