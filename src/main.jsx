import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    // loader: rootLoader,  Normalde ilgili page yüklenirken bir loader ile yüklenmesini sağlayabiliyoruz, useEffect te kullandığımız gibi
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


