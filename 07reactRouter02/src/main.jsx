import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/Home/About.jsx'
import Contact from './Components/Home/Contact.jsx'
import Github from './Components/Github.jsx'

const router=createBrowserRouter([
  {
    path:'',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'github',
        element: <Github/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
