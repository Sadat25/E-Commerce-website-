import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx';
import WishList from './Pages/WishList.jsx';
import ShopNow from './Pages/ShopNow.jsx';
import Cart from './Pages/Cart.jsx';
import Account from './Pages/Account.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop-now", Component: ShopNow },
      { path: "about", Component: About },
      { path: "sign-up", Component: SignUp },
      { path: "login", Component: Login },
      { path: "wishlist", Component: WishList },
      { path: "cart", Component: Cart },
      { path: "account", Component: Account },
      { path: "product-details", Component: ProductDetails },
      { path: "contact", Component: Contact },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
