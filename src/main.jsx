
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App';
import './index.css';
import Details from './Details/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:id", 
    element: <Details />,
  },
]);

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
 
);
