import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true, 
            loader: () => fetch('/TopApps.json'),
            Component: Home
        },
        {
          path: 'appDetails/:id',
          loader: () => fetch('/TopApps.json'),
          Component: AppDetails
        }
    ]
  },
]);