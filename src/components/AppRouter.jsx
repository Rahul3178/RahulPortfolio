import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeContainerComponent from './HomeContainerComponent'


const AppRouter = createBrowserRouter(
[
    {
        path:"/",
        element:<HomeContainerComponent/>,
       
    }
]
)

export default AppRouter
