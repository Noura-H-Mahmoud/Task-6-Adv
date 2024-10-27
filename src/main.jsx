import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail/Detail.jsx'
import NewlattersPage from './pages/NewlattersPage/NewlattersPage.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
const routes = createBrowserRouter([
  {
    path: '/Task-6-Adv/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: 'newlattes',
        element: <NewlattersPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
