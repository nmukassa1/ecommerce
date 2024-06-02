import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './pages/Error'
import './scss/styles.css'

//layouts
import RootLayout from './RootLayout';

//pages
import Home from './pages/Home'
import Product from './pages/Product'
import ViewAll from './pages/ViewAll'
import Checkout from './pages/Checkout'
import Collections from './pages/Collections'
import { CartProvider } from './contexts/CartContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={ <Home /> } />
      <Route path='product' element={ <Product /> } />
      <Route path='checkout' element={ <Checkout /> } />
      <Route path='collections' element={ <Collections /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
