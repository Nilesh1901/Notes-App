import { Outlet } from "react-router-dom";
import "../App.css";
import Background from "../components/Background";

function App() {
  return (
    <div className=" relative w-full h-screen bg-zinc-800">
      <Background />
      <Outlet />
    </div>
  );
}

export default App;
