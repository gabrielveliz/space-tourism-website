import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Destination } from "./views/Destination";
import { Crew } from "./views/Crew";
import { Technology } from "./views/Technology";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Crew" element={<Crew />} />
      <Route path="/Technology" element={<Technology />} />
      <Route render={() => <h1>Not found!</h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
