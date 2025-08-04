import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import DefaultLayout from "../layouts/DefaultLayout";
import ApplicationEnquiryStatus from "../pages/applicationEnquiryStatus/applicationEnquiryStatus";
import PageNotFound from "../pages/pageNotFound/pageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/application-status-enquiry",
        element: <ApplicationEnquiryStatus />,
      }

    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
