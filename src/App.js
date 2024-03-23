import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/homepage";
import SignUp from "./components/signUp";
import Login from "./components/Login";
import DetailsComponent from "./components/DetailsComponent";
import ProductsGrid from "./components/ProductsGrid";
import RecipeForm from "./components/RecipeForm"
function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/recipe/:id",
          element: <DetailsComponent />,
        },
        {
          path: "/main",
          element: <ProductsGrid />,
        },
        {
          path: "/main",
          element: <ProductsGrid />,
        },
        {
          path:"/new-recipe",
          element:<RecipeForm/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={browserRouter}></RouterProvider>
    </>
  );
}

export default App;
