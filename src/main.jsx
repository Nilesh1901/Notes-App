import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardContainer from "./components/CardContainer.jsx";
import AddNotes from "./routes/AddNotes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CardContainer /> },
      { path: "/create-note", element: <AddNotes /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
