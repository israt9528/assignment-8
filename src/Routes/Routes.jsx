import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AllApps from "../Pages/AllApps/AllApps";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true, 
            Component: Home
        },
        {
          path: 'appDetails/:id',
          loader: () => fetch('../AppsInfo.json'),
          Component: AppDetails
        },
        {
          path: 'allApps',
          Component: AllApps
        }
    ]
  },
]);