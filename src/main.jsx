import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import './App.scss';
import "./components/common/variable.scss"
function App() {
  return <RouterProvider router={router} />;
}
createRoot(document.getElementById("root")).render(
  <App />
);
