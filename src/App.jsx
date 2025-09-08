import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
