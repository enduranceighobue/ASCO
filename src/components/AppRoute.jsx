import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { lazy, Suspense } from "react";
import Logo from "./Logo";

// import ErrorBoundary from "../components/ErrorBoundary";
// import AboutPage from "./AboutPage";
const RootLayout = lazy(() => import("./RootLayout"));
const Home = lazy(() => import("../pages/Home"));
// const Contact = lazy(() => import("@/pages/contact/Contact"));
const About = lazy(() => import("../components/About"));
const Service = lazy(() => import("../pages/Service"));
const OurSpread = lazy(() => import("../components/OurSpread"));

export default function AppRoutes() {
  const routes = [
    {
      element: (
        <Suspense fallback={<Logo />}>
          <RootLayout />
        </Suspense>
      ),
    //   errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Logo />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",

          element: (
            <Suspense >
              <About />
            </Suspense>
          ),
        },
        {
          path: "service",

          element: (
            <Suspense>
              <Service />
            </Suspense>
          ),
        },

         {
          path: "spread",

          element: (
            <Suspense>
              <OurSpread />
            </Suspense>
          ),
        },

      //  {
      //     path: "about",

      //     element: (
      //       <Suspense fallback={<Logo />}>
      //         <About />
      //       </Suspense>
      //     ),
      //   },


      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}