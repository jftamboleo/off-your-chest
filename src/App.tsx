import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./pages/AppLayout"
import PageNotFound from "./pages/PageNotFound"
import SubmitPost from "./pages/SubmitPost"
import About from "./pages/About"
import Post from "./pages/Post"

const API_URL = 'http://localhost:8001/api/v1/posts'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/new',
        element: <Post />
      },
      {
        path: '/post',
        element: <SubmitPost />
      },
      {
        path: '*',
        element: <PageNotFound />
      },
    ]
  }
])

export default function App (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}
