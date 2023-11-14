import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ToDoApp from './Components/ToDoApp.jsx'
import Header from './Components/Header.jsx'
import About from './Components/About.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<ToDoApp/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/about",
    element:<About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
