import HomePage from "./Pages/homePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <Routes>
        <Route path="/" exact Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;
