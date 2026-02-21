import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from './../pages/Home/HomePage'; 
import ProductPage from './../pages/ProductPage/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [      
      {
        path: "/", 
        element: <HomePage />
      },
      {
        path: "/product/:productId", 
        element: <ProductPage />
      }
    ]
  },
]);

export default router;