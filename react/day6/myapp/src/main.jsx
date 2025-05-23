import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutPage from './pages/AboutPage'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from './layout/RootLayout.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NewsDetails from './pages/NewsDetails.jsx'

// import 'bootstrap/dist/css/bootstrap.css'
// Named Export


const ourRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'news-details/:id',
        element: <NewsDetails />
      }
    ]
  },

]);


let myRoot = createRoot(document.getElementById('root'))
myRoot.render(
  <RouterProvider router={ourRoutes} />
)
