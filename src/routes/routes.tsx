import ToDo from "../Components/ToDo/ToDo"
import { AllInOne } from "../pages/HomePage/HomePage"
import Login from "../pages/Login/Login"
import { NotFound } from "../pages/NotFound/NotFound"

export const publicRoutes = [
  {
    path:'/',
    element:<Login />,
    name:'Login'
  },{
    path:'*',
    element:<NotFound />
  }
]

export const privateRoutes = [  
  {
    path:'/',
    element:<Login />,
    name:'Login'
  },{
    path:'/todo',
    element:<ToDo />,
    name:'ToDo'
  },{
    path:'/all',
    element:<AllInOne />,
    name:'Home'
  },{
    path:'*',
    element:<NotFound />
  }]