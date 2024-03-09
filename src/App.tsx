import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./components/AppLayout"
import PageNotFound from "./pages/PageNotFound"
import Post from "./pages/Post"
import About from "./pages/About"
import NewPost, { action as newPostAction } from './pages/NewPost'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/post',
        element: <Post />
      },
      {
        path: '/new',
        element: <NewPost />,
        action: newPostAction
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
