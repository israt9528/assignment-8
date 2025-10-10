import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import AllApps from "../Pages/AllApps/AllApps";
import Installation from "../Pages/My Installation/Installation";
import { Suspense } from "react";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import NotFound from "../Pages/ErrorPage/NotFound";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true, 
            Component: Home
        },
        {
          path: 'appDetails/:id',
          loader: () => fetch('../AppsInfo.json'),
          Component: AppDetails,
          errorElement: <NotFound></NotFound>
          
        },
        {
          path: '/allApps',
          Component: AllApps
        },
        {
          path: '/installedApps',
          Component: Installation
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
    ]
  },
]);