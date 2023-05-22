import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Main from './layouts/Main'
import Home from './pages/Home/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
          
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
