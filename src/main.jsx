import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ToDoApp from './Components/ToDoApp';
import About from './Components/About';
import Header from './Components/Header';
import { Outlet } from "react-router-dom";
import ErrorPage from './Components/ErrorPage';

export default function Layout() {
  return (
      <>
        <Header />
        <Outlet />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/todo-react/',
        element: <ToDoApp />
      },
      {
        path: '/todo-react/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
