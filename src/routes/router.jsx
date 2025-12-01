import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/HomeFiles/Home";
import Coverage from "../pages/Coverage/Coverage";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
            path:'coverage',
            Component: Coverage,
            loader: ()=>fetch('/locations.json').then(res=>res.json())
        }
    ]
  },
]);

