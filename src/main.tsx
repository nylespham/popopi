import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import About from './routes/About.tsx'
import Product from './routes/Product.tsx'
import Contact from './routes/Contact.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>

)
