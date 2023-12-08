import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider } from 'react-router'
import AppRouter from './components/AppRouter.jsx'
import store from './app/store.js'
import {Provider }from "react-redux"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={AppRouter} />
  </Provider>,
)
