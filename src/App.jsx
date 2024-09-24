import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
