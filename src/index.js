import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PetList from "./components/PetList";
import PetDetail from "./components/PetDetail";
import Modal from "./components/Modal";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient(); //big boos
const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Home</div>,
    element: <Home />,
  },
  {
    path: "/PetList",
    element: <PetList />,
  },
  {
    path: "/PetDetail/:id",
    element: <PetDetail />,
  },
  // {
  //   path: "/PetDetail/:petId",
  //   element: <PetDetail />,
  // },
  {
    path: "/Modal",
    element: <Modal />,
  },
  // {
  //   path: "/details/:tripId",
  //   element: <TripDetail/>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
