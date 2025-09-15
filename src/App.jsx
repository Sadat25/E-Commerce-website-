import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "sign-up", Component: SignUp },
      { path: "login", Component: Login },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
