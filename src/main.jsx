import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './pages/Error'
// import './index.css'
import './scss/styles.css'

//layouts
import RootLayout from './RootLayout';

//pages
import Home from './pages/Home'
import Product from './pages/Product'
import ViewAll from './pages/ViewAll'
import Checkout from './pages/Checkout'
import Collections from './pages/Collections'
import ProductPage from './pages/ProductPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={ <Home /> } />
      <Route path='product' element={ <Product /> } />
      {/* <Route path='view-all/:type/:id' element={ <ViewAll /> } /> */}
      <Route path='checkout' element={ <Checkout /> } />
      <Route path='collections' element={ <Collections /> } />
      {/* <Route path='product-page' element={ <ProductPage /> } /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
