import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import ToDoApp from './Components/ToDoApp.jsx'
import Header from './Components/Header.jsx'
import About from './Components/About.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const router=createHashRouter([
  {
    path:'/todo-react/',
    element:<ToDoApp/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/todo-react/about/",
    element:<About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
