
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App';
import './index.css';
import Details from './Pages/Details/Details';
import Carrinho from './Pages/Carrinho/Carrinho';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:id",
    element: <Details />,
  },
  {
    path: "carrinho", 
    element: <Carrinho />,
  },
]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
